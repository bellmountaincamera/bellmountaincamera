import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { Script, createContext } from "node:vm";

const html = await readFile(new URL("../public/newsletter/embed.html", import.meta.url), "utf8");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);

test("official embed uses the supplied public identifiers without an API token", () => {
  assert.match(html, /data-form="6zJeIZ"/);
  assert.match(html, /ml\('account', '2637966'\)/);
  assert.equal(html.split("https://assets.mailerlite.com/js/universal.js").length - 1, 1);
  assert.doesNotMatch(html, /Authorization|Bearer|MAILERLITE_API_KEY/);
  for (const source of scripts) assert.doesNotThrow(() => new Script(source));
});

function frameHarness() {
  const sent = [];
  let timer, mutation, resize;
  let form = null;
  let cleared = false;
  const container = { querySelector: () => form };
  const context = createContext({
    document: { querySelector: () => container, body: { scrollHeight: 350 } },
    location: { origin: "https://www.bellmountaincamera.com" },
    parent: { postMessage: (data, origin) => sent.push({ data, origin }) },
    setTimeout: (fn) => { timer = fn; return 1; },
    clearTimeout: () => { cleared = true; },
    MutationObserver: class { constructor(fn) { mutation = fn; } observe() {} },
    ResizeObserver: class { constructor(fn) { resize = fn; } observe() {} },
  });
  new Script(scripts.at(-1)).runInContext(context);
  return {
    sent,
    expire: () => timer(),
    render: () => { form = {}; mutation(); },
    resize: () => resize(),
    cleared: () => cleared,
  };
}

test("empty provider response times out instead of claiming signup success", () => {
  const frame = frameHarness();
  assert.equal(frame.sent.length, 0);
  frame.expire();
  assert.equal(frame.sent[0].data.status, "error");
});

test("rendered form signals readiness and height only to the same origin", () => {
  const frame = frameHarness();
  frame.render();
  assert.equal(frame.cleared(), true);
  assert.equal(frame.sent[0].data.status, "ready");
  assert.equal(frame.sent[0].data.height, 366);
  assert.equal(frame.sent[0].origin, "https://www.bellmountaincamera.com");
  frame.expire();
  assert.equal(frame.sent.length, 1);
  frame.resize();
  assert.equal(frame.sent.length, 2);
});

test("provider rendering after an initial timeout can recover", () => {
  const frame = frameHarness();
  frame.expire();
  frame.render();
  assert.equal(frame.sent[0].data.status, "error");
  assert.equal(frame.sent[1].data.status, "ready");
});

test("local homepage does not show the paused signup", async () => {
  const base = process.env.BMC_TEST_URL ?? "http://127.0.0.1:3102";
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const body = await response.text();
  assert.doesNotMatch(body, /Open email signup|Get BMC updates/);
  assert.doesNotMatch(body, /<iframe[^>]*newsletter\/embed/);
  assert.doesNotMatch(body, /https:\/\/assets\.mailerlite\.com\/js\/universal\.js/);
  const embed = await fetch(new URL("/newsletter/embed.html", base));
  assert.equal(embed.status, 200);
  assert.match(await embed.text(), /data-form="6zJeIZ"/);
});
