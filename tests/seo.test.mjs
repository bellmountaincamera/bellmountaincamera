import test from "node:test";
import assert from "node:assert/strict";

const base = process.env.BMC_TEST_URL ?? "http://127.0.0.1:3102";
const origin = "https://www.bellmountaincamera.com";
const businessId = `${origin}/#business`;
const utilityPaths = ["/cart", "/checkout", "/order-confirmation", "/shop/used-35mm-camera-intake"];
const policyAliases = ["/store-policy", "/film-lab-policy", "/used-camera-policy"];
const pages = new Map();

function decode(value) {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (_, entity) => {
    if (entity.startsWith("#")) {
      return String.fromCodePoint(entity[1].toLowerCase() === "x" ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)));
    }
    return entities[entity.toLowerCase()];
  });
}

function text(html) {
  return decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ").trim();
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)]
    .map((match) => [match[1], decode(match[2] ?? match[3])]));
}

function meta(html, key) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map(([tag]) => attributes(tag)).filter((item) => item.name === key || item.property === key)
    .map((item) => item.content);
}

function canonical(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)]
    .map(([tag]) => attributes(tag)).filter((item) => item.rel === "canonical").map((item) => item.href);
}

function schemas(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((match) => attributes(match[1]).type === "application/ld+json")
    .flatMap((match) => {
      const data = JSON.parse(match[2]);
      return Array.isArray(data) ? data : data["@graph"] ?? [data];
    });
}

function isType(item, type) {
  return [item?.["@type"]].flat().includes(type);
}

function objects(value) {
  if (!value || typeof value !== "object") return [];
  return [value, ...Object.values(value).flatMap(objects)];
}

function page(path) {
  if (!pages.has(path)) {
    pages.set(path, (async () => {
      const response = await fetch(new URL(path, base));
      assert.equal(response.status, 200, `${path} should load`);
      return response.text();
    })());
  }
  return pages.get(path);
}

async function sitemapUrls() {
  return [...(await page("/sitemap.xml")).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
}

test("sitemap and robots advertise canonical, indexable pages only", async () => {
  const [xml, urls, robots] = await Promise.all([page("/sitemap.xml"), sitemapUrls(), page("/robots.txt")]);
  assert.ok(urls.length > 10, "sitemap should retain the public catalog and service pages");
  assert.equal(new Set(urls).size, urls.length, "sitemap URLs must be unique");
  assert.doesNotMatch(xml, /<lastmod>/, "omit lastmod until real content modification dates are tracked");
  for (const url of urls) {
    assert.equal(new URL(url).origin, origin);
    assert.equal(new URL(url).search, "");
    assert.equal(new URL(url).hash, "");
    assert.ok(![...utilityPaths, ...policyAliases].includes(new URL(url).pathname), `${url} should not be in sitemap`);
  }
  for (const path of ["/", "/lab", "/services", "/contact", "/shop", "/shop/film", "/shop/cameras", "/faq", "/policies"]) {
    assert.ok(urls.some((url) => new URL(url).pathname === path), `${path} should remain discoverable`);
  }
  assert.match(robots, /^Sitemap: https:\/\/www\.bellmountaincamera\.com\/sitemap\.xml$/m);
  assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);
});

test("every sitemap page loads with unique search metadata and working social images", async () => {
  const urls = await sitemapUrls();
  const titles = new Map();
  const descriptions = new Map();
  const images = new Set();
  const responses = await Promise.all(urls.map(async (url) => ({ url, html: await page(new URL(url).pathname) })));

  for (const { url, html } of responses) {
    const path = new URL(url).pathname;
    const titleTags = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
    assert.equal(titleTags.length, 1, `${path} should have one title`);
    const title = text(titleTags[0][1]);
    assert.ok(title.length > 0);
    assert.equal((title.match(/Bell Mountain Camera/g) ?? []).length, 1, `${path} should include the brand once`);
    assert.ok(!titles.has(title), `${path} repeats the title on ${titles.get(title)}`);
    titles.set(title, path);

    const descriptionTags = meta(html, "description");
    assert.equal(descriptionTags.length, 1, `${path} should have one description`);
    const description = descriptionTags[0];
    assert.ok(description?.trim(), `${path} should have a meaningful description`);
    assert.ok(!descriptions.has(description), `${path} repeats the description on ${descriptions.get(description)}`);
    descriptions.set(description, path);

    assert.deepEqual(canonical(html), [url], `${path} canonical should agree with sitemap`);
    assert.deepEqual(meta(html, "og:url"), [url]);
    assert.deepEqual(meta(html, "og:title"), [title]);
    assert.deepEqual(meta(html, "og:description"), [description]);
    assert.deepEqual(meta(html, "twitter:title"), [title]);
    assert.deepEqual(meta(html, "twitter:description"), [description]);
    assert.equal(meta(html, "twitter:card").length, 1);
    assert.doesNotMatch([...meta(html, "robots"), ...meta(html, "googlebot")].join(","), /noindex/);
    for (const key of ["og:image", "twitter:image"]) {
      assert.ok(meta(html, key).length > 0, `${path} needs ${key}`);
      meta(html, key).forEach((url) => images.add(url));
    }

    const json = schemas(html);
    assert.ok(json.some((item) => isType(item, "LocalBusiness")), `${path} should identify the shop`);
    for (const item of json.flatMap(objects)) {
      assert.ok(!isType(item, "Product"), `${path} must not advertise mock inventory as structured Product offers`);
      assert.ok(!("aggregateRating" in item) && !("review" in item), `${path} must not invent reviews or ratings`);
      if ("makesOffer" in item) {
        for (const offer of [item.makesOffer].flat()) {
          assert.ok(isType(offer, "Offer"), `${path} makesOffer must contain Offer objects`);
        }
      }
    }
  }

  await Promise.all([...images].map(async (url) => {
    const imageUrl = new URL(url);
    assert.equal(imageUrl.origin, origin, "social images should use the production hostname");
    const response = await fetch(new URL(imageUrl.pathname + imageUrl.search, base));
    assert.equal(response.status, 200, `${url} must be a real image`);
    assert.match(response.headers.get("content-type") ?? "", /^image\//);
    await response.arrayBuffer();
  }));
});

test("utility pages remain available but are excluded from search indexing", async () => {
  for (const path of utilityPaths) {
    const html = await page(path);
    const directives = meta(html, "robots").join(",").split(/\s*,\s*/);
    assert.ok(directives.includes("noindex"), `${path} needs noindex`);
    assert.ok(directives.includes("follow"), `${path} should retain crawlable links`);
    assert.deepEqual(canonical(html), [`${origin}${path}`]);
  }
});

test("legacy policy URLs permanently redirect to the policy index", async () => {
  for (const path of policyAliases) {
    const response = await fetch(new URL(path, base), { redirect: "manual" });
    assert.equal(response.status, 308, `${path} must be a permanent redirect`);
    assert.equal(new URL(response.headers.get("location"), base).pathname, "/policies");
    await response.text();
  }
});

test("business identity, location and service schema agree with the real shop", async () => {
  const homeSchema = schemas(await page("/"));
  const business = homeSchema.find((item) => isType(item, "LocalBusiness"));
  assert.ok(business);
  assert.equal(business["@id"], businessId);
  assert.equal(business.name, "Bell Mountain Camera");
  assert.equal(new URL(business.url).origin, origin);
  assert.equal(business.email, "bellmountaincamera@gmail.com");
  assert.equal(business.address.streetAddress, "21810 CA-18 Unit #2");
  assert.equal(business.address.addressLocality, "Apple Valley");
  assert.equal(business.address.addressRegion, "CA");
  assert.equal(business.address.postalCode, "92307");
  assert.equal(business.address.addressCountry, "US");
  assert.ok([business.sameAs].flat().includes("https://www.instagram.com/bellmountaincamera/"));
  const hours = [business.openingHoursSpecification].flat();
  const openDays = hours.flatMap((item) => [item.dayOfWeek].flat().map((day) => day.split("/").at(-1)));
  assert.deepEqual(openDays.sort(), ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].sort());
  for (const item of hours) {
    assert.equal(item.opens, "10:00");
    assert.equal(item.closes, "16:00");
  }
  const website = homeSchema.find((item) => isType(item, "WebSite"));
  assert.equal(website?.["@id"], `${origin}/#website`);
  assert.equal(website.name, "Bell Mountain Camera");

  for (const path of ["/lab", "/services"]) {
    const services = schemas(await page(path)).filter((item) => isType(item, "Service"));
    assert.ok(services.length > 0, `${path} should describe its services`);
    for (const service of services) {
      assert.equal(service.provider?.["@id"], businessId, `${path} should reference the same business`);
      assert.ok(service.name || service.serviceType, `${path} service should be named`);
    }
  }
});

test("FAQ schema repeats the questions and answers available to visitors", async () => {
  const html = await page("/faq");
  const faq = schemas(html).find((item) => isType(item, "FAQPage"));
  assert.ok(faq, "FAQ page should have structured questions");
  const visible = [...html.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/gi)].map((match) => {
    const summary = match[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i);
    assert.ok(summary);
    return [text(summary[1]), text(match[1].slice(summary.index + summary[0].length))];
  });
  assert.ok(visible.length > 0);
  assert.deepEqual(faq.mainEntity.map((question) => {
    assert.ok(isType(question, "Question"));
    assert.ok(isType(question.acceptedAnswer, "Answer"));
    return [text(question.name), text(question.acceptedAnswer.text)];
  }), visible);
});
