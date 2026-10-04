"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { filmStripFrames } from "@/lib/film-strip-frames";

const frameWidth = 2.4;
const exposureWidth = 2.25;
const exposureHeight = 1.5;
const stripHeight = 1.95;

export function FilmStripShowcase() {
  const canvasHost = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = canvasHost.current;
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let frameRequest = 0;
    let resizeObserver: ResizeObserver | undefined;
    let intersectionObserver: IntersectionObserver | undefined;
    const resources: { dispose: () => void }[] = [];
    let renderer: import("three").WebGLRenderer | undefined;

    async function mount() {
      const THREE = await import("three");
      if (disposed || !host) return;

      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      } catch {
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      const loader = new THREE.TextureLoader();
      const textures = await Promise.all(filmStripFrames.map(async (frame) => {
        const texture = await loader.loadAsync(frame.src);
        if (disposed) {
          texture.dispose();
          return texture;
        }
        resources.push(texture);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = Math.min(4, renderer?.capabilities.getMaxAnisotropy() ?? 1);

        if (frame.rotation) {
          texture.center.set(0.5, 0.5);
          texture.rotation = Math.PI / 2;
        }
        return texture;
      }));

      if (disposed || !renderer) return;

      const borderCanvas = document.createElement("canvas");
      borderCanvas.width = 768;
      borderCanvas.height = 624;
      const context = borderCanvas.getContext("2d");
      if (!context) return;
      context.fillStyle = "#171a1b";
      context.fillRect(0, 0, 768, 624);
      context.globalCompositeOperation = "destination-out";
      context.fillRect(24, 72, 720, 480);
      for (let hole = 0; hole < 8; hole += 1) {
        const x = 38 + hole * 96;
        context.fillRect(x, 23, 22, 29);
        context.fillRect(x, 572, 22, 29);
      }

      const borderTexture = new THREE.CanvasTexture(borderCanvas);
      borderTexture.colorSpace = THREE.SRGBColorSpace;
      resources.push(borderTexture);
      const borderMaterial = new THREE.MeshBasicMaterial({ map: borderTexture, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide });
      resources.push(borderMaterial);
      const photoMaterials = textures.map((texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        resources.push(material);
        return material;
      });

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.set(0, 0, 5.8);
      const ribbon = new THREE.Group();
      scene.add(ribbon);
      const loopWidth = filmStripFrames.length * frameWidth;
      const waveCycles = Math.max(1, Math.round(filmStripFrames.length / 4.5));
      const wave = (x: number) => 2 * Math.PI * x / (loopWidth / waveCycles);

      function curvedPanel(width: number, height: number, centerX: number, depth: number) {
        const geometry = new THREE.PlaneGeometry(width, height, 24, 1);
        const points = geometry.attributes.position;
        for (let point = 0; point < points.count; point += 1) {
          const x = points.getX(point) + centerX;
          points.setXYZ(point, x, points.getY(point) + 0.18 * Math.sin(wave(x)), Math.cos(wave(x)) + depth);
        }
        points.needsUpdate = true;
        geometry.computeVertexNormals();
        resources.push(geometry);
        return geometry;
      }

      for (let copy = 0; copy < 2; copy += 1) {
        filmStripFrames.forEach((_, index) => {
          const centerX = (copy * filmStripFrames.length + index + 0.5) * frameWidth - loopWidth / 2;
          const exposure = new THREE.Mesh(curvedPanel(exposureWidth, exposureHeight, centerX, 0), photoMaterials[index]);
          const border = new THREE.Mesh(curvedPanel(frameWidth, stripHeight, centerX, 0.012), borderMaterial);
          border.renderOrder = 1;
          ribbon.add(exposure, border);
        });
      }

      const resize = () => {
        if (!host || !renderer) return;
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      let visible = false;
      let previousTime = 0;
      let progress = 0;
      const tick = (time: number) => {
        frameRequest = 0;
        if (!visible || !renderer) return;
        const elapsed = Math.min((time - previousTime) / 1000, 0.05);
        previousTime = time;
        progress = (progress + elapsed * 0.28) % loopWidth;
        ribbon.rotation.y = 0.18 * Math.sin(time / 3300);
        ribbon.rotation.x = 0.06 * Math.sin(time / 4600);
        ribbon.position.x = -progress * Math.cos(ribbon.rotation.y);
        ribbon.position.z = progress * Math.sin(ribbon.rotation.y);
        renderer.render(scene, camera);
        frameRequest = window.requestAnimationFrame(tick);
      };
      intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !frameRequest) {
          previousTime = performance.now();
          frameRequest = window.requestAnimationFrame(tick);
        } else if (!visible && frameRequest) {
          window.cancelAnimationFrame(frameRequest);
          frameRequest = 0;
        }
      }, { threshold: 0.05 });
      intersectionObserver.observe(host);
      setReady(true);
    }

    const loadObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      loadObserver?.disconnect();
      void mount().catch(() => { if (!disposed) setReady(false); });
    }, { rootMargin: "350px" });
    loadObserver.observe(host);
    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameRequest);
      loadObserver?.disconnect();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      renderer?.dispose();
      renderer?.domElement.remove();
      resources.forEach((resource) => resource.dispose());
    };
  }, []);

  return (
    <section className="film-showcase section-band" aria-labelledby="film-showcase-title" data-editor-name="Processed by BMC">
      <div className="section-container">
        <div className="film-showcase-heading">
          <h2 id="film-showcase-title" className="ocr">Processed by BMC</h2>
        </div>
      </div>
      <div className="film-ribbon-scene" role="region" aria-label={`${filmStripFrames.length} photographs on a moving 35mm film strip`} data-ready={ready}>
        <div className="film-ribbon-canvas" ref={canvasHost} aria-hidden="true" />
        <div className="film-ribbon-static" aria-hidden="true">
          {filmStripFrames.map((frame) => (
            <div className="film-static-frame" key={frame.src}>
              <div className="film-static-exposure">
                <div className={`film-static-photo${frame.rotation ? " film-static-portrait" : ""}`}>
                  <Image src={frame.src} alt="" fill unoptimized />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="sr-only">{filmStripFrames.map((frame) => <li key={frame.src}>{frame.alt}</li>)}</ul>
      </div>
    </section>
  );
}
