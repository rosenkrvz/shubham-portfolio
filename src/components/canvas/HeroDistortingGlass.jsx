import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

/**
 * HeroDistortingGlass:
 * A high-performance WebGL canvas featuring monumental background typography
 * refracted and distorted in real-time by interactive, floating chromatic glass geometries.
 * Inspired directly by the user's reference images (media_1788691548483 & media_1788691553556).
 */
export default function HeroDistortingGlass() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    // 2. Renderer with physical lighting & transmission
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Typographic Texture for Real-time Physical Refraction
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 2048;
    textCanvas.height = 1024;
    const ctx = textCanvas.getContext('2d');

    function drawTextTexture() {
      ctx.fillStyle = '#0A0D12';
      ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

      // Fine grid dots
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      for (let x = 0; x < textCanvas.width; x += 64) {
        for (let y = 0; y < textCanvas.height; y += 64) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Monumental Bold Typography behind glass
      ctx.fillStyle = '#F8FAFC';
      ctx.font = '900 130px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.letterSpacing = '-4px';

      ctx.fillText('SHUBHAM SHARMA', textCanvas.width / 2, 280);

      ctx.fillStyle = 'rgba(248, 250, 252, 0.75)';
      ctx.font = '800 100px "Space Grotesk", sans-serif';
      ctx.fillText('ARTIFICIAL INTELLIGENCE', textCanvas.width / 2, 460);

      ctx.fillStyle = 'rgba(248, 250, 252, 0.45)';
      ctx.font = '800 90px "Space Grotesk", sans-serif';
      ctx.fillText('COMPUTATIONAL SYSTEMS', textCanvas.width / 2, 620);

      ctx.fillStyle = 'rgba(248, 250, 252, 0.25)';
      ctx.font = '700 70px "JetBrains Mono", monospace';
      ctx.fillText('01 // STATISTICAL MODELS • 02 // EDGE RUNTIMES', textCanvas.width / 2, 770);
    }
    drawTextTexture();

    const textTexture = new THREE.CanvasTexture(textCanvas);
    textTexture.wrapS = THREE.ClampToEdgeWrapping;
    textTexture.wrapT = THREE.ClampToEdgeWrapping;
    textTexture.minFilter = THREE.LinearFilter;

    // Background plane holding the typography
    const bgGeo = new THREE.PlaneGeometry(16, 8);
    const bgMat = new THREE.MeshBasicMaterial({
      map: textTexture,
      transparent: true,
      opacity: 0.95
    });
    const bgMesh = new THREE.Mesh(bgGeo, bgMat);
    bgMesh.position.z = -2.5;
    scene.add(bgMesh);

    // 4. Refractive Glass Geometries (Cube + Spheres from references)
    // Physical glass material with transmission & chromatic dispersion
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.98,
      opacity: 1,
      transparent: true,
      roughness: 0.05,
      ior: 1.54, // Crown glass refraction
      thickness: 2.2,
      specularIntensity: 1.0,
      specularColor: 0xffffff,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1.5,
      dispersion: 0.08
    });

    // Central Hero Glass Cube (Reference Image 5: "TICK TOCK" refractive iridescent cube)
    const cubeGeo = new THREE.BoxGeometry(2.1, 2.1, 2.1);
    const glassCube = new THREE.Mesh(cubeGeo, glassMaterial);
    glassCube.position.set(0, 0, 0.8);
    glassCube.rotation.set(0.4, 0.5, 0.1);
    scene.add(glassCube);

    // Satellite Glass Refractive Spheres (Reference Image 4: floating distorting glass spheres)
    const sphereGeoLarge = new THREE.SphereGeometry(0.85, 64, 64);
    const glassSphere1 = new THREE.Mesh(sphereGeoLarge, glassMaterial);
    glassSphere1.position.set(-2.8, 1.1, 1.2);
    scene.add(glassSphere1);

    const sphereGeoSmall = new THREE.SphereGeometry(0.55, 48, 48);
    const glassSphere2 = new THREE.Mesh(sphereGeoSmall, glassMaterial);
    glassSphere2.position.set(2.6, -1.2, 1.5);
    scene.add(glassSphere2);

    const glassSphere3 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), glassMaterial);
    glassSphere3.position.set(1.9, 1.5, 0.9);
    scene.add(glassSphere3);

    // 5. Dynamic Lighting (iridescent reflections & highlights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x818cf8, 1.8);
    fillLight.position.set(-5, -3, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xe10600, 3.5, 12);
    rimLight.position.set(0, 3, 2);
    scene.add(rimLight);

    // 6. Mouse Interaction & Inertial Motion
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera & mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate and float the central refractive glass cube
      glassCube.rotation.x = 0.3 + mouse.y * 0.4 + Math.sin(elapsedTime * 0.5) * 0.15;
      glassCube.rotation.y = 0.5 + mouse.x * 0.6 + elapsedTime * 0.35;
      glassCube.rotation.z = Math.cos(elapsedTime * 0.4) * 0.1;
      glassCube.position.y = Math.sin(elapsedTime * 0.8) * 0.15;

      // Floating satellites
      glassSphere1.position.y = 1.1 + Math.sin(elapsedTime * 0.9 + 1) * 0.2 + mouse.y * 0.2;
      glassSphere1.position.x = -2.8 + Math.cos(elapsedTime * 0.6) * 0.15 + mouse.x * 0.3;

      glassSphere2.position.y = -1.2 + Math.cos(elapsedTime * 0.7 + 2) * 0.18 - mouse.y * 0.2;
      glassSphere2.position.x = 2.6 + Math.sin(elapsedTime * 0.5) * 0.15 - mouse.x * 0.25;

      glassSphere3.position.y = 1.5 + Math.sin(elapsedTime * 1.1) * 0.15;
      glassSphere3.position.x = 1.9 + Math.cos(elapsedTime * 0.8) * 0.12;

      // Subtle parallax on typographic plane
      bgMesh.position.x = -mouse.x * 0.3;
      bgMesh.position.y = -mouse.y * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
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
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing" />

      {/* Subtle Vignette & Contrast Gradients */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-[#0A0D12] via-transparent to-[#0A0D12]/60" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-radial-gradient from-transparent via-[#0A0D12]/30 to-[#0A0D12]/80" />

      {/* Scientific Geometric Overlay Marks (Reference Image 5) */}
      <div className="absolute inset-0 z-2 pointer-events-none p-6 sm:p-10 flex flex-col justify-between text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
        {/* Top telemetry */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] shadow-[0_0_6px_#E10600]" />
            <span>2026 // REFRACTIVE COMPUTATION</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#64748B]">
            <span>+</span>
            <span>IOR: 1.54 GLASS</span>
            <span>&bull;</span>
            <span>DISPERSION: CHROMATIC</span>
            <span>×</span>
          </div>
          <div className="text-[#94A3B8]">
            <span>IIT JODHPUR</span>
          </div>
        </div>

        {/* Mid-screen corner crosshairs */}
        <div className="hidden md:flex items-center justify-between px-4">
          <div className="space-y-1">
            <div className="text-[#94A3B8] font-bold text-xs">+</div>
            <div>FORM // LATENT</div>
          </div>
          <div className="space-y-1 text-right">
            <div className="text-[#94A3B8] font-bold text-xs">×</div>
            <div>TARGET // SYSTEMS</div>
          </div>
        </div>

        {/* Bottom indicators */}
        <div className="flex items-end justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
          <div className="text-[10px] text-[#64748B]">
            * DRAG CURSOR ACROSS GLASS TO REFRACT TYPOGRAPHY
          </div>
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <span className="w-2 h-2 rounded-full border border-emerald-400 bg-emerald-400/20 animate-pulse" />
            <span>GPU PIPELINE: ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
