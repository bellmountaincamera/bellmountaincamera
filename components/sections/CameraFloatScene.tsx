"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function CameraFloatScene({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const host = hostRef.current;
    if (!root || !host) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const resources: { dispose: () => void }[] = [];
    let renderer: import("three").WebGLRenderer | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let frameRequest = 0;
    let disposed = false;
    let loading = false;
    let mounted = false;
    let near = false;
    let visible = false;
    let previousTime = 0;
    let tick: (time: number) => void;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const syncPlayback = () => {
      if (mounted && visible && !document.hidden && !motion.matches) {
        if (!frameRequest) {
          previousTime = performance.now();
          frameRequest = window.requestAnimationFrame(tick);
        }
      } else {
        window.cancelAnimationFrame(frameRequest);
        frameRequest = 0;
      }
    };

    async function mount() {
      const THREE = await import("three");
      if (disposed) return;
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      host!.appendChild(renderer.domElement);

      const stages = Array.from(root!.querySelectorAll<HTMLElement>(".camera-cutout-stage"));
      const images = await Promise.all(stages.map((stage) => new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new window.Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = stage.dataset.cameraSrc!;
      })));
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10000);
      const geometry = new THREE.PlaneGeometry(1, 1);
      resources.push(geometry);
      const entries = images.map((image, index) => {
        const padding = 64;
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth + padding * 2;
        canvas.height = image.naturalHeight + padding * 2;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Camera texture unavailable");

        // The enlarged alpha silhouette leaves a dotted, camera-shaped edge.
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.scale(1.09, 1.09);
        context.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
        context.restore();
        const dots = document.createElement("canvas");
        dots.width = dots.height = 32;
        const dotContext = dots.getContext("2d")!;
        dotContext.fillStyle = "#66809a";
        dotContext.beginPath();
        dotContext.arc(16, 16, 5, 0, Math.PI * 2);
        dotContext.fill();
        context.globalCompositeOperation = "source-in";
        context.fillStyle = context.createPattern(dots, "repeat")!;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = "source-over";
        context.shadowColor = "#11111125";
        context.shadowBlur = 14;
        context.shadowOffsetY = 12;
        context.drawImage(image, padding, padding);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = Math.min(4, renderer!.capabilities.getMaxAnisotropy());
        const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, side: THREE.DoubleSide });
        resources.push(texture, material);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        return { mesh, stage: stages[index], origin: new THREE.Vector3(), width: canvas.width, height: canvas.height, phase: index * 1.31 };
      });

      const resize = () => {
        if (!renderer || disposed) return;
        const bounds = root!.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        renderer.setSize(bounds.width, bounds.height, false);
        camera.aspect = bounds.width / bounds.height;
        camera.position.z = bounds.height / (2 * Math.tan(Math.PI / 8));
        camera.updateProjectionMatrix();
        for (const entry of entries) {
          const stage = entry.stage.getBoundingClientRect();
          const scale = Math.min((stage.width - 20) / entry.width, (stage.height - 20) / entry.height);
          entry.origin.set(stage.left - bounds.left + stage.width / 2 - bounds.width / 2,
            bounds.height / 2 - (stage.top - bounds.top + stage.height / 2), 0);
          entry.mesh.position.copy(entry.origin);
          entry.mesh.scale.set(entry.width * scale, entry.height * scale, 1);
        }
        renderer.render(scene, camera);
      };
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(root!);
      resize();

      let activeTime = 0;
      tick = (time) => {
        frameRequest = 0;
        if (!renderer || disposed) return;
        const elapsed = Math.min((time - previousTime) / 1000, 0.05);
        previousTime = time;
        activeTime += elapsed;
        const easing = 1 - Math.exp(-elapsed * 6);
        pointer.x += (pointer.targetX - pointer.x) * easing;
        pointer.y += (pointer.targetY - pointer.y) * easing;
        const amplitude = root!.clientWidth < 640 ? 4 : 7;
        for (const entry of entries) {
          const t = activeTime + entry.phase;
          entry.mesh.position.set(entry.origin.x + Math.sin(t * 0.45) * amplitude * 0.6,
            entry.origin.y + Math.cos(t * 0.6) * amplitude, Math.sin(t * 0.38) * 12);
          entry.mesh.rotation.set(Math.sin(t * 0.34) * 0.06 - pointer.y * 0.06,
            Math.cos(t * 0.4) * 0.12 + pointer.x * 0.1, Math.sin(t * 0.3) * 0.015);
        }
        renderer.render(scene, camera);
        syncPlayback();
      };
      mounted = true;
      setReady(!motion.matches);
      syncPlayback();
    }

    const start = () => {
      if (disposed || loading || mounted || motion.matches) return;
      loading = true;
      void mount().catch(() => {
        if (!disposed) setReady(false);
        renderer?.dispose();
        renderer?.domElement.remove();
      });
    };
    const loadObserver = new IntersectionObserver(([entry]) => {
      near = entry.isIntersecting;
      if (near) start();
    }, { rootMargin: "250px" });
    loadObserver.observe(root);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.01 });
    visibilityObserver.observe(root);
    const onMotionChange = () => {
      setReady(mounted && !motion.matches);
      if (near) start();
      syncPlayback();
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const bounds = root.getBoundingClientRect();
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const onPointerLeave = () => { pointer.targetX = pointer.targetY = 0; };
    root.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerleave", onPointerLeave);
    motion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameRequest);
      loadObserver.disconnect();
      visibilityObserver.disconnect();
      resizeObserver?.disconnect();
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", syncPlayback);
      resources.forEach((resource) => resource.dispose());
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return (
    <div className="camera-space" ref={rootRef} data-ready={ready}>
      <div className="camera-space-canvas" ref={hostRef} aria-hidden="true" />
      {children}
    </div>
  );
}
