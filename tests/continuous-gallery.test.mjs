import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createContext, Script } from "node:vm";
import ts from "typescript";

const source = await readFile(new URL("../components/ui/ContinuousPhotoCarousel.tsx", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
}).outputText;

function harness({ paused = false, reduced = false, start = 0 } = {}) {
  let stateIndex = 0, refIndex = 0, position = start, rafId = 0;
  let width = 1128, resizeCallback, intersectionCallback;
  const effects = [], stateChanges = [], callbacks = new Map();
  const viewport = {
    get scrollLeft() { return position; },
    set scrollLeft(value) { position = Math.round(value); },
    scrollBy(value) { position += value.left; this.lastScroll = value; },
  };
  const group = { getBoundingClientRect: () => ({ width }) };
  const react = {
    useId: () => "gallery-test",
    useRef: () => ({ current: refIndex++ === 0 ? viewport : group }),
    useState: () => {
      const index = stateIndex++;
      return [index === 0 ? paused : reduced, (value) => stateChanges.push({ index, value })];
    },
    useEffect: (fn) => effects.push(fn),
  };
  const jsx = (type, props) => ({ type, props });
  const doc = { hidden: false };
  const context = createContext({
    exports: {},
    require: (name) => {
      if (name === "react") return react;
      if (name === "react/jsx-runtime") return { jsx, jsxs: jsx };
      if (name === "next/image") return { default: "image" };
      if (name === "lucide-react") return { ArrowLeft: "left", ArrowRight: "right", Pause: "pause", Play: "play" };
      if (name.endsWith("LedAccent")) return { LedAccent: "led" };
      throw new Error(`Unexpected import: ${name}`);
    },
    window: { matchMedia: () => ({ matches: reduced, addEventListener() {}, removeEventListener() {} }) },
    document: doc,
    ResizeObserver: class { constructor(fn) { resizeCallback = fn; } observe() {} disconnect() {} },
    IntersectionObserver: class { constructor(fn) { intersectionCallback = fn; } observe() {} disconnect() {} },
    requestAnimationFrame: (fn) => { callbacks.set(++rafId, fn); return rafId; },
    cancelAnimationFrame: (id) => callbacks.delete(id),
  });
  new Script(compiled).runInContext(context);
  const frames = Array.from({ length: 3 }, (_, index) => ({ src: `/photo-${index}.jpg`, alt: `Scan ${index}` }));
  const tree = context.exports.ContinuousPhotoCarousel({ frames, label: "Scan samples" });
  const cleanup = effects.map((fn) => fn());
  const nodes = [];
  function visit(node) {
    if (Array.isArray(node)) return node.forEach(visit);
    if (!node || typeof node !== "object") return;
    nodes.push(node);
    visit(node.props?.children);
  }
  visit(tree);
  return {
    viewport, doc, nodes, stateChanges,
    visible: (value) => intersectionCallback?.([{ isIntersecting: value }]),
    resize: (value) => { width = value; resizeCallback?.(); },
    tick: (time) => { const pending = [...callbacks.values()]; callbacks.clear(); pending.forEach((fn) => fn(time)); },
    pending: () => callbacks.size,
    cleanup: () => cleanup.forEach((fn) => fn?.()),
  };
}

test("continuous movement retains subpixels and advances at 32 pixels per second", () => {
  const gallery = harness();
  gallery.visible(true);
  for (let frame = 0; frame <= 60; frame++) gallery.tick(1000 + frame * 1000 / 60);
  assert.equal(gallery.viewport.scrollLeft, 32);
  gallery.cleanup();
  assert.equal(gallery.pending(), 0);
});

test("last-to-first seam wraps by exactly one equal-width photo group", () => {
  const gallery = harness({ start: 1127 });
  gallery.visible(true);
  gallery.tick(1000);
  gallery.tick(1050);
  assert.equal(gallery.viewport.scrollLeft, 1);
  gallery.resize(1000);
  gallery.tick(1100);
  assert.equal(gallery.viewport.scrollLeft, 2);
  gallery.cleanup();
});

test("offscreen and hidden-page galleries do not advance", () => {
  const gallery = harness();
  gallery.tick(1000);
  gallery.tick(1050);
  assert.equal(gallery.viewport.scrollLeft, 0);
  gallery.visible(true);
  gallery.doc.hidden = true;
  gallery.tick(1100);
  assert.equal(gallery.viewport.scrollLeft, 0);
  gallery.doc.hidden = false;
  gallery.tick(1150);
  assert.equal(gallery.viewport.scrollLeft, 2);
  gallery.cleanup();
});

test("pause and reduced motion prevent scheduling animation", () => {
  for (const options of [{ paused: true }, { reduced: true }]) {
    const gallery = harness(options);
    assert.equal(gallery.pending(), 0);
    gallery.cleanup();
  }
});

test("keyboard and touch interaction pause playback; arrows browse photos", () => {
  const gallery = harness();
  const viewport = gallery.nodes.find((node) => node.props?.className === "continuous-viewport");
  let prevented = false;
  viewport.props.onKeyDown({ key: "ArrowRight", preventDefault: () => { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(gallery.viewport.lastScroll.left, 376);
  assert.equal(gallery.stateChanges.at(-1).value, true);
  viewport.props.onPointerDown();
  assert.equal(gallery.stateChanges.at(-1).value, true);
  gallery.cleanup();
});

test("duplicate images are hidden from assistive technology; all scans use contain", () => {
  const gallery = harness();
  const copies = gallery.nodes.filter((node) => node.props?.className === "continuous-group continuous-copy");
  assert.equal(copies.length, 1);
  assert.equal(copies[0].props["aria-hidden"], true);
  const images = gallery.nodes.filter((node) => node.type === "image");
  assert.equal(images.length, 6);
  assert.equal(images.filter((node) => node.props.alt).length, 3);
  assert.ok(images.every((node) => node.props.className === "object-contain"));
  const buttons = gallery.nodes.filter((node) => node.type === "button");
  assert.ok(buttons.every((node) => node.props["aria-label"] && node.props.title));
  gallery.cleanup();
});

test("reduced-motion browsing is instant and has no autoplay control", () => {
  const gallery = harness({ reduced: true });
  const next = gallery.nodes.find((node) => node.props?.title === "Next photo");
  next.props.onClick();
  assert.equal(gallery.viewport.lastScroll.behavior, "instant");
  assert.equal(gallery.nodes.some((node) => node.props?.title === "Pause gallery"), false);
  gallery.cleanup();
});
