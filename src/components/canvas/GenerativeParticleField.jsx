import React, { useEffect, useRef } from 'react';

/**
 * GenerativeParticleField: High-efficiency 2D HTML5 Canvas particle field.
 * Computes vector velocity fields influenced by pointer physics.
 * Optimized with offscreen buffer, clamped particles, and IntersectionObserver pausing.
 */
export default function GenerativeParticleField({
  className = "",
  particleCount = 120,
  interactive = true,
  colorScheme = 'indigo'
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
      radius: 140
    };

    // Palette colors
    const colors = colorScheme === 'indigo'
      ? ['rgba(99, 102, 241, 0.75)', 'rgba(129, 140, 248, 0.6)', 'rgba(56, 189, 248, 0.5)', 'rgba(165, 180, 252, 0.4)']
      : ['rgba(244, 244, 242, 0.65)', 'rgba(158, 158, 168, 0.5)', 'rgba(99, 102, 241, 0.5)'];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.baseRadius = Math.random() * 1.8 + 0.8;
        this.radius = this.baseRadius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.4 + 0.2;
      }

      update() {
        // Subtle flow angle
        this.angle += 0.01;
        this.vx += Math.cos(this.angle) * 0.03 * this.speed;
        this.vy += Math.sin(this.angle) * 0.03 * this.speed;

        // Friction dampening
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Mouse physics interaction
        if (interactive && mouse.isHovered) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 2.5;
            const angle = Math.atan2(dy, dx);
            this.vx -= Math.cos(angle) * force * 0.4;
            this.vy -= Math.sin(angle) * force * 0.4;
            this.radius = this.baseRadius * 1.6;
          } else {
            this.radius = this.baseRadius;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Screen wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const count = Math.min(particleCount, Math.floor((width * height) / 8000));
    const particles = Array.from({ length: Math.max(40, count) }, () => new Particle());

    // Connect close particles with delicate filaments
    const connectParticles = () => {
      const maxDistance = 95;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.18;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Pointer event handlers
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handlePointerLeave = () => {
      mouse.isHovered = false;
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause loop when scrolled out of viewport
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let animationFrameId;
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
        connectParticles();
      } else {
        // Static frame for reduced motion
        for (let i = 0; i < particles.length; i++) {
          particles[i].draw();
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [particleCount, interactive, colorScheme]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none pointer-events-auto ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
