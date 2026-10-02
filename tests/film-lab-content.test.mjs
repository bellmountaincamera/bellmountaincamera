import test from "node:test";
import assert from "node:assert/strict";

const base = process.env.BMC_TEST_URL ?? "http://127.0.0.1:3102";

async function page(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path} should load`);
  return response.text();
}

test("film lab shows the confirmed prices and only the accepted development formats", async () => {
  const html = await page("/lab");
  const rows = [...html.matchAll(/<tr class="[^"]*">([\s\S]*?)<\/tr>/g)].map((match) => match[1]);
  assert.equal(rows.length, 3);
  for (const [index, title, price35, price110] of [
    [0, "Development + scans", "$15", "$17"],
    [1, "Development only", "$10", "$10"],
    [2, "Scanning only", "$5", "$7"],
  ]) {
    assert.ok(rows[index].includes(title));
    assert.deepEqual([...rows[index].matchAll(/<td>([^<]+)<\/td>/g)].map((match) => match[1]), [price35, price110]);
  }
  assert.match(html, /USD, per roll/);
  assert.match(html, /\$10[\s\S]*?\/ 36 slides/);
  assert.match(html, /already-developed positive slides/);
  assert.match(html, /Your digital photos are delivered through a Dropbox download link/);
  assert.match(html, /processor-open\.jpg/);
  assert.doesNotMatch(html, /FilmLabPhotoCarousel|Lab photo \/ index|3-7 business days|JPEG \/ TIFF|APS film/);
});

test("other public pages agree with the lab and expose contact directions", async () => {
  const [home, faq, contact, policies] = await Promise.all([page("/"), page("/faq"), page("/contact"), page("/policies")]);
  assert.match(home, /C-41 color negative \/ 35mm \+ 110/);
  assert.doesNotMatch(home, /35mm C-41 and B&amp;W/);
  assert.match(faq, /35mm and 110 C-41 color negative film only/);
  assert.match(contact, /maps\.apple\.com\/place\?address=/);
  assert.match(policies, /replacement with equivalent unexposed film/);
});
