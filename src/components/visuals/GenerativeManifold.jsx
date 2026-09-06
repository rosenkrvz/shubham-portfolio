import React, { useRef, useEffect, useState } from 'react';

export default function GenerativeManifold({
  interactive = true,
  className = '',
  density = 24,
  speed = 1.0,
  accentColor = '#00f0ff'
}) {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [motionReduced, setMotionReduced] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const animFrameRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setMotionReduced(mediaQuery.matches);
      const listener = (e) => setMotionReduced(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;

    const handleResize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Intersection Observer to pause rendering when not in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const onMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      if (isVisibleRef.current && isRunning && !motionReduced) {
        time += 0.012 * speed;
        ctx.clearRect(0, 0, width, height);

        const stepX = width / density;
        const stepY = height / Math.round(density * (height / width));
        const mouse = mouseRef.current;

        ctx.lineWidth = 1.0;

        for (let x = stepX * 0.5; x < width; x += stepX) {
          for (let y = stepY * 0.5; y < height; y += stepY) {
            // Parametric normalization
            const nx = (x / width) * 3.5 - 1.75;
            const ny = (y / height) * 3.5 - 1.75;

            // Mathematical flow equation
            let angle = Math.sin(nx * 1.8 + time * 0.6) * Math.cos(ny * 1.8 + time * 0.4) * Math.PI;

            // Dynamic mouse perturbation
            if (mouse.active) {
              const dx = x - mouse.x;
              const dy = y - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const maxDist = 180;
              if (dist < maxDist) {
                const influence = (1 - dist / maxDist) * 1.8;
                angle += Math.atan2(dy, dx) * influence;
              }
            }

            const len = Math.min(stepX, stepY) * 0.48;
            const x2 = x + Math.cos(angle) * len;
            const y2 = y + Math.sin(angle) * len;

            // Normalized magnitude for subtle luminosity
            const mag = (Math.sin(angle * 2.0 + time) + 1.0) * 0.5;
            const alpha = 0.08 + mag * 0.32;

            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            // Vector terminal nodes
            if (mag > 0.65) {
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
              ctx.fillRect(x2 - 0.75, y2 - 0.75, 1.5, 1.5);
            }
          }
        }
      } else if (motionReduced && isVisibleRef.current) {
        // Single static render for users with reduced motion preferences
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.lineWidth = 1.0;
        const step = 32;
        for (let x = 0; x < width; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [density, speed, isRunning, motionReduced, interactive]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-label="Generative topological vector flow simulation"
        role="img"
      />
      {interactive && (
        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#050508]/80 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[10px] font-mono text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse"></span>
          <span>MANIFOLD // 60 FPS</span>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="hover:text-[#00f0ff] transition-colors ml-1 underline decoration-dotted"
            title="Toggle simulation execution"
          >
            {isRunning ? 'PAUSE' : 'RUN'}
          </button>
        </div>
      )}
    </div>
  );
}
