import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Hero3DComputationalField
 * Signature 3D WebGL computational visualization.
 * Visualizes a parametric Riemannian manifold, dynamic coordinate frames,
 * and high-dimensional latent point embeddings responding to cursor inertia.
 * Auto-pauses with IntersectionObserver when offscreen.
 */
export default function Hero3DComputationalField({ className = "" }) {
  const containerRef = useRef(null);
  const [activeVisualMode, setActiveVisualMode] = useState('manifold'); // 'manifold', 'latent', 'vector'
  const [telemetry, setTelemetry] = useState({
    fps: 60,
    nodes: 340,
    azimuth: '34°',
    curvature: 'κ = -0.42'
  });

  const modeRef = useRef(activeVisualMode);
  modeRef.current = activeVisualMode;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let gl;
    try {
      const testCanvas = document.createElement('canvas');
      gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch (e) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080a, 0.04);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 8.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Parametric Riemannian Manifold Surface (Hyperbolic Paraboloid Saddle)
    const manifoldGroup = new THREE.Group();
    rootGroup.add(manifoldGroup);

    const manifoldGeo = new THREE.PlaneGeometry(3.6, 3.6, 28, 28);
    const pos = manifoldGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = (pos.getX(i) / 3.6) * 3.0;
      const v = (pos.getY(i) / 3.6) * 3.0;
      pos.setZ(i, 0.45 * (u * u - v * v) * 0.45);
    }
    manifoldGeo.computeVertexNormals();

    const manifoldMat = new THREE.MeshBasicMaterial({
      color: 0x6366F1,
      wireframe: true,
      transparent: true,
      opacity: 0.32
    });
    const manifoldMesh = new THREE.Mesh(manifoldGeo, manifoldMat);
    manifoldMesh.rotation.x = -Math.PI * 0.35;
    manifoldGroup.add(manifoldMesh);

    // 2. Latent Space Embedding Point Cloud
    const latentGroup = new THREE.Group();
    rootGroup.add(latentGroup);

    const pointCount = 320;
    const pointGeo = new THREE.BufferGeometry();
    const pointPos = new Float32Array(pointCount * 3);
    const pointColors = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i++) {
      // 3 clusters
      const cluster = i % 3;
      const baseAngle = cluster * (Math.PI * 2 / 3);
      const r = 1.8 + Math.random() * 1.6;
      const spread = (Math.random() - 0.5) * 0.8;

      const px = Math.cos(baseAngle + spread) * r;
      const py = (Math.random() - 0.5) * 2.2;
      const pz = Math.sin(baseAngle + spread) * r;

      pointPos[i * 3] = px;
      pointPos[i * 3 + 1] = py;
      pointPos[i * 3 + 2] = pz;

      // Color coding clusters
      if (cluster === 0) {
        pointColors[i * 3] = 0.5; pointColors[i * 3 + 1] = 0.55; pointColors[i * 3 + 2] = 0.98; // Indigo
      } else if (cluster === 1) {
        pointColors[i * 3] = 0.06; pointColors[i * 3 + 1] = 0.72; pointColors[i * 3 + 2] = 0.55; // Emerald
      } else {
        pointColors[i * 3] = 0.96; pointColors[i * 3 + 1] = 0.62; pointColors[i * 3 + 2] = 0.1; // Amber
      }
    }

    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPos, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: 0.075,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });
    const pointCloud = new THREE.Points(pointGeo, pointMat);
    latentGroup.add(pointCloud);

    // 3. Dynamic Coordinate Frame Axes (X: Red, Y: Green, Z: Blue)
    const axesGroup = new THREE.Group();
    rootGroup.add(axesGroup);

    const axisLength = 2.4;
    const axisMat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.25 });
    
    // Axis line geometries
    const createAxis = (from, to, colorHex) => {
      const geo = new THREE.BufferGeometry().setFromPoints([from, to]);
      const mat = new THREE.LineBasicMaterial({ color: colorHex, transparent: true, opacity: 0.45 });
      return new THREE.Line(geo, mat);
    };

    axesGroup.add(createAxis(new THREE.Vector3(-axisLength, 0, 0), new THREE.Vector3(axisLength, 0, 0), 0xEF4444));
    axesGroup.add(createAxis(new THREE.Vector3(0, -axisLength * 0.6, 0), new THREE.Vector3(0, axisLength * 0.6, 0), 0x10B981));
    axesGroup.add(createAxis(new THREE.Vector3(0, 0, -axisLength), new THREE.Vector3(0, 0, axisLength), 0x3B82F6));

    // Concentric coordinate rings
    const ringGeo = new THREE.RingGeometry(2.1, 2.12, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x818cf8, wireframe: true, transparent: true, opacity: 0.15, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI * 0.5;
    axesGroup.add(ringMesh);

    // Pointer dynamics
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      pointer.targetX = nx * 0.65;
      pointer.targetY = ny * 0.45;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // IntersectionObserver to pause when out of view
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth pointer inertia
      pointer.x += (pointer.targetX - pointer.x) * 0.04;
      pointer.y += (pointer.targetY - pointer.y) * 0.04;

      if (!prefersReducedMotion) {
        rootGroup.rotation.y = time * 0.08 + pointer.x;
        rootGroup.rotation.x = 0.15 + pointer.y * 0.5;
        manifoldMesh.rotation.z = Math.sin(time * 0.2) * 0.1;
      }

      // Mode-specific visibility & transformations
      const currentMode = modeRef.current;
      if (currentMode === 'manifold') {
        manifoldGroup.visible = true;
        latentGroup.visible = true;
        pointMat.opacity = 0.45;
        manifoldMat.opacity = 0.38;
      } else if (currentMode === 'latent') {
        manifoldGroup.visible = false;
        latentGroup.visible = true;
        pointMat.opacity = 0.9;
      } else if (currentMode === 'vector') {
        manifoldGroup.visible = true;
        latentGroup.visible = false;
        manifoldMat.opacity = 0.65;
      }

      renderer.render(scene, camera);

      // FPS & Telemetry telemetry updates every 1.5s
      frameCount++;
      const now = performance.now();
      if (now - lastFpsUpdate > 1500) {
        const computedFps = Math.round((frameCount * 1000) / (now - lastFpsUpdate));
        setTelemetry({
          fps: Math.min(60, computedFps),
          nodes: pointCount,
          azimuth: `${Math.round(((rootGroup.rotation.y % (Math.PI * 2)) * 180) / Math.PI)}°`,
          curvature: `κ = ${( -0.35 + Math.sin(time * 0.3) * 0.15 ).toFixed(2)}`
        });
        frameCount = 0;
        lastFpsUpdate = now;
      }
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      
      {/* Visual Mode Selector (Minimalist, Non-Intrusive) */}
      <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-1.5 p-1 bg-[#08080A]/85 backdrop-blur-md border border-[#1C1C26] rounded text-[11px] font-mono">
        {[
          { id: 'manifold', label: 'Manifold' },
          { id: 'latent', label: 'Latent' },
          { id: 'vector', label: 'Vectors' }
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveVisualMode(m.id)}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeVisualMode === m.id
                ? 'bg-[#1E1E2C] text-[#C7D2FE] font-bold border border-[#3E3E58]'
                : 'text-[#656570] hover:text-[#9E9EA8]'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Real-Time Mathematical & Telemetry Annotations */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden md:block bg-[#08080A]/85 backdrop-blur-md p-3 border border-[#1C1C26] rounded text-[10px] font-mono space-y-1.5 max-w-xs text-[#9E9EA8]">
        <div className="flex items-center justify-between text-[#818CF8]">
          <span className="font-semibold uppercase tracking-wider">RIEMANNIAN TOPOLOGY</span>
          <span className="text-emerald-400">{telemetry.fps} FPS</span>
        </div>
        <div className="text-[#F4F4F2] font-semibold text-[11px]">
          min_θ E [ L( f_θ(x), y ) ]
        </div>
        <div className="flex justify-between text-[#656570] pt-1 border-t border-[#1C1C24]">
          <span>NODES: {telemetry.nodes}</span>
          <span>AZIMUTH: {telemetry.azimuth}</span>
          <span>{telemetry.curvature}</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-20 pointer-events-none text-[10px] font-mono text-[#656570] hidden sm:block">
        DRAG / HOVER POINTER TO ROTATE MANIFOLD
      </div>

    </div>
  );
}
