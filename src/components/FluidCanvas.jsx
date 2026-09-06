import React, { useEffect, useRef } from 'react';

export default function FluidCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & target coordinates
    let mouse = { x: width * 0.5, y: height * 0.3, active: false, radius: 140 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Node grid for liquid wave displacement
    const spacing = 45;
    let points = [];

    const initGrid = () => {
      points = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push({
            originX: i * spacing,
            originY: j * spacing,
            x: i * spacing,
            y: j * spacing,
            vx: 0,
            vy: 0,
            phase: Math.random() * Math.PI * 2
          });
        }
      }
    };

    initGrid();

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw faint background grid points
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        // Harmonic oscillation for ambient liquid breathing
        const waveX = Math.sin(time + pt.phase) * 1.5;
        const waveY = Math.cos(time + pt.phase) * 1.5;

        // Interaction with mouse cursor
        let targetX = pt.originX + waveX;
        let targetY = pt.originY + waveY;

        if (mouse.active) {
          const dx = pt.x - mouse.x;
          const dy = pt.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 22;
            const angle = Math.atan2(dy, dx);
            targetX += Math.cos(angle) * force;
            targetY += Math.sin(angle) * force;
          }
        }

        // Spring physics damping
        pt.vx += (targetX - pt.x) * 0.1;
        pt.vy += (targetY - pt.y) * 0.1;
        pt.vx *= 0.85;
        pt.vy *= 0.85;
        pt.x += pt.vx;
        pt.y += pt.vy;

        // Render dithered stipple point
        const distToMouse = mouse.active
          ? Math.hypot(pt.x - mouse.x, pt.y - mouse.y)
          : 9999;

        if (distToMouse < mouse.radius * 0.7) {
          // Ultramarine glow near cursor
          const intensity = 1 - distToMouse / (mouse.radius * 0.7);
          ctx.fillStyle = `rgba(62, 44, 240, ${0.4 + intensity * 0.5})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Ambient dither point
          ctx.fillStyle = 'rgba(240, 240, 238, 0.06)';
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
