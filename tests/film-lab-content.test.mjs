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
  assert.match(html, /BMC \/ C-41 \/ PER ROLL/);
  assert.doesNotMatch(html, /All prices are in USD|Digital delivery|C-41 color negative film development and scanning in Apple Valley/);
  assert.match(html, /Positive slide scanning[\s\S]*?<strong>\$10<\/strong><span>per 36 slides<\/span>/);
  assert.ok(html.indexOf("Positive slide scanning") < html.indexOf("</section>", html.indexOf("lab-pricing-band")));
  assert.match(html, /already-developed positive slides/);
  assert.match(html, /Dropbox download link/);
  assert.match(html, /processor-open\.jpg/);
  assert.doesNotMatch(html, /FilmLabPhotoCarousel|Lab photo \/ index|3-7 business days|JPEG \/ TIFF|APS film/);
});

test("other public pages agree with the lab and expose contact directions", async () => {
  const [home, faq, contact, policies] = await Promise.all([page("/"), page("/faq"), page("/contact"), page("/policies")]);
  assert.match(home, /C-41 color negative \/ 35mm \+ 110/);
  assert.match(home, /Sell us your old cameras and equipment/);
  assert.match(home, /href="\/contact"[^>]*>Contact us<\/a>/);
  assert.equal((home.match(/class="camera-cutout camera-cutout-\d"/g) ?? []).length, 8);
  assert.match(home, /Pentax IQZoom 110/);
  assert.match(home, /Canon AE-1 Program/);
  assert.match(home, /Olympus Infinity Twin/);
  assert.doesNotMatch(home, /Previous cameras|Next cameras|scroll horizontally to view more/);
  assert.match(home, /Film Lab<br\/>Cameras and<br\/>Equipment/);
  assert.doesNotMatch(home, /aria-label="Previous photo"|aria-label="Pause slideshow"|aria-label="Photo 1 of 9"/);
  assert.match(home, /Processed by BMC/);
  assert.equal((home.match(/class="film-static-frame"/g) ?? []).length, 9);
  assert.doesNotMatch(home, /film-ribbon-edge|BMC \/ HIGH DESERT \/ 35MM/);
  assert.doesNotMatch(home, /35mm C-41 and B&amp;W/);
  assert.match(faq, /35mm and 110 C-41 color negative film only/);
  assert.match(contact, /maps\.apple\.com\/place\?address=/);
  assert.match(contact, /class="contact-page"/);
  assert.match(policies, /replace it with equivalent unexposed film/);
});
