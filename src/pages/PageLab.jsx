import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LAB_STUDIES } from '../data/lab.js';

function MinimalVectorCanvas() {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let animId = null;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = 240;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      if (isRunning) {
        time += 0.01;
        ctx.clearRect(0, 0, width, height);
        const step = 28;
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(242, 242, 238, 0.2)';

        for (let x = step / 2; x < width; x += step) {
          for (let y = step / 2; y < height; y += step) {
            const nx = (x / width) * 4.0 - 2.0;
            const ny = (y / height) * 4.0 - 2.0;
            const angle = Math.sin(nx * 1.5 + time) * Math.cos(ny * 1.5 + time * 0.8) * Math.PI;
            const len = 8;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isRunning]);

  return (
    <div className="w-full bg-[#09090b] border border-[var(--border-subtle)] p-4 relative">
      <div className="flex justify-between items-center text-xs font-mono text-zinc-500 mb-2">
        <span>Vector field parametric study</span>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="hover:text-white underline decoration-dotted cursor-pointer"
        >
          {isRunning ? 'Pause' : 'Resume'}
        </button>
      </div>
      <canvas ref={canvasRef} className="w-full h-[240px] block" />
    </div>
  );
}

export default function PageLab() {
  return (
    <div className="site-container pt-16 pb-24">
      {/* Header */}
      <section className="mb-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 block">
            Lab / Explorations
          </span>

          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6">
            Algorithmic Notes &amp; <span className="serif-italic font-normal">Studies</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Smaller investigations, mathematical prototypes, and benchmarks outside of primary project releases.
          </p>
        </div>
      </section>

      {/* Studies Index */}
      <section className="space-y-16 max-w-4xl">
        {LAB_STUDIES.map((study) => (
          <article
            key={study.id}
            className="pb-12 border-b border-[var(--border-subtle)] space-y-4"
          >
            <div className="flex justify-between items-baseline text-xs font-mono text-zinc-500">
              <span>{study.number} / {study.category}</span>
              <span>{study.date}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-medium text-white">
              {study.title}
            </h2>

            <p className="text-base text-zinc-300 font-light leading-relaxed">
              {study.summary}
            </p>

            <div className="p-4 bg-[var(--surface)] text-xs font-mono text-zinc-400 leading-relaxed border-l border-[var(--border-medium)]">
              {study.notes}
            </div>

            {study.interactive && (
              <div className="pt-2">
                <MinimalVectorCanvas />
              </div>
            )}

            {study.repoUrl && (
              <div className="pt-2">
                <a
                  href={study.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Inspect code <ArrowUpRight size={11} />
                </a>
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
