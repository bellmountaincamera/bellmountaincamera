import test from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = fileURLToPath(new URL("../", import.meta.url));
const textFile = /\.(?:[cm]?[jt]sx?|json|html|css|md|txt|xml|rsc|map|ya?ml|pem|key)$/i;
const rules = [
  ["private key", /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ["provider credential", /\b(?:sk_(?:live|test)_[A-Za-z0-9]{16,}|sk-(?:proj-|ant-)?[A-Za-z0-9_-]{24,}|gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|shp(?:at|ss|ca)_[a-f0-9]{24,}|AKIA[A-Z0-9]{16})\b/],
  ["JWT", /\beyJ[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\.[A-Za-z0-9_-]{12,}\b/],
  ["literal credential", /\b(?:[A-Z_]*(?:API_KEY|ACCESS_TOKEN|CLIENT_SECRET|PASSWORD)|apiKey|accessToken|clientSecret|password)\s*[=:]\s*["'][A-Za-z0-9_+/.=-]{16,}["']/],
  ["literal bearer credential", /Bearer\s+[A-Za-z0-9_+/.=-]{24,}/],
];

async function walk(directory) {
  const entries = await readdir(path.join(root, directory), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const name = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(name));
    else if (entry.isFile()) files.push(name);
  }
  return files;
}

async function scan(files) {
  const findings = [];
  for (const file of files.filter((name) => textFile.test(name))) {
    const contents = await readFile(path.join(root, file), "utf8");
    for (const [category, pattern] of rules) {
      const match = pattern.exec(contents);
      // Never print a suspected credential, including in assertion failures.
      if (match) findings.push(`${file}:${contents.slice(0, match.index).split("\n").length} (${category})`);
    }
  }
  return findings;
}

test("source and public text assets contain no recognized credential literals", async (t) => {
  const files = [];
  for (const directory of ["app", "components", "lib", "public", "docs", "tests"]) {
    files.push(...await walk(directory));
  }
  const rootEntries = await readdir(root, { withFileTypes: true });
  files.push(...rootEntries.filter((entry) => entry.isFile()).map((entry) => entry.name));
  t.diagnostic(`Scanned ${files.filter((file) => textFile.test(file)).length} text files; binary assets excluded.`);
  assert.deepEqual(await scan(files), []);
});

test("Shopify environment reads have an explicit server-only boundary", async () => {
  const source = await readFile(path.join(root, "lib/shopify.ts"), "utf8");
  assert.match(source, /^import ["']server-only["'];/);
  assert.doesNotMatch(source, /NEXT_PUBLIC_/);
  assert.match(source, /process\.env\.SHOPIFY_STOREFRONT_ACCESS_TOKEN/);
});

test("current public-site architecture has no API handlers or server actions", async () => {
  const files = await walk("app");
  assert.deepEqual(files.filter((file) => /(?:^|[/\\])route\.[cm]?[jt]s$/.test(file)), [],
    "A new route handler requires a fresh authorization and abuse-control audit.");
  const topLevel = await readdir(root);
  for (const name of ["pages", "src", "supabase", "prisma", "middleware.ts", "proxy.ts"]) {
    assert.equal(topLevel.includes(name), false, `${name} requires a fresh security audit.`);
  }
  for (const directory of ["app", "components", "lib"]) {
    for (const file of (await walk(directory)).filter((file) => /\.[jt]sx?$/.test(file))) {
      const source = await readFile(path.join(root, file), "utf8");
      assert.equal(/["']use server["']/.test(source), false, `${file}: audit new server actions.`);
      if (file !== path.join("lib", "shopify.ts")) {
        assert.equal(/process\.env/.test(source), false, `${file}: audit new environment reads.`);
      }
    }
  }
});

test("secret environment files are not tracked", () => {
  const git = process.platform === "win32" ? "C:/Program Files/Git/cmd/git.exe" : "git";
  const tracked = execFileSync(git, ["ls-files", "-z"], { cwd: root, encoding: "utf8" }).split("\0");
  assert.deepEqual(tracked.filter((file) => /(^|\/)\.env(?:\.|$)/.test(file) && !file.endsWith(".env.example")), []);
});

test("production browser assets and rendered responses contain no recognized secrets", async (t) => {
  // Requires a completed production build, not only a development server.
  await readFile(path.join(root, ".next/BUILD_ID"), "utf8");
  const files = [
    ...await walk(".next/static"),
    ...(await walk(".next/server/app")).filter((file) => /\.(html|rsc)$/.test(file)),
  ];
  assert.ok(files.length > 0);
  assert.deepEqual(await scan(files), []);
  for (const file of files.filter((name) => textFile.test(name))) {
    const contents = await readFile(path.join(root, file), "utf8");
    assert.equal(/SHOPIFY_STOREFRONT_ACCESS_TOKEN|MAILERLITE_API_KEY/.test(contents), false,
      `${file}: private configuration reference found in browser output.`);
    const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    if (token) assert.equal(contents.includes(token), false, `${file}: environment credential detected.`);
  }
  t.diagnostic(`Inspected ${files.length} generated browser assets and HTML/RSC responses.`);
});
