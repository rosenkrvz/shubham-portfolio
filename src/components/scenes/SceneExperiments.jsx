import React from 'react';
import { Cpu, Play, Terminal, Sliders, Activity } from 'lucide-react';
import GenerativeManifold from '../visuals/GenerativeManifold.jsx';
import { EXPERIMENTS } from '../../data/experiments.js';
import { sound } from '../../lib/sound.js';

export default function SceneExperiments({ onHoverCursor }) {
  return (
    <section id="experiments" className="py-24" aria-label="Scene 04: Experiments">
      <div className="site-container">
        <div className="scene-marker">
          <span className="scene-label">04 // CREATIVE COMPUTING &amp; EXPERIMENTS</span>
          <span className="scene-num">LABORATORY // RUNTIMES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-8">
            <span className="meta-code text-[#00f0ff] mb-2 block font-bold">
              EXPERIMENTAL SANDBOX // 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Algorithmic Prototypes &amp; Visual Computing
            </h2>
          </div>
          <div className="lg:col-span-4 text-sm text-zinc-400 font-sans">
            Unlike production software systems, experiments exist to test mathematical conjectures, benchmark memory dynamics, and explore parametric graphical representations.
          </div>
        </div>

        {/* Hero Experiment: Interactive Generative Manifold */}
        <div className="mb-16 border border-white/15 bg-[#09090f] relative overflow-hidden">
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0c0c12]/90 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-[#00f0ff]" />
              <span className="font-mono text-xs font-bold text-[#00f0ff] tracking-wider">
                EXP // 001 — TOPOLOGICAL VECTOR FLOW MANIFOLD
              </span>
            </div>
            <div className="font-mono text-[11px] text-zinc-400">
              EQUATION: dx/dt = sin(1.8x + 0.6t) · cos(1.8y + 0.4t) · π
            </div>
          </div>

          <div
            className="h-[360px] sm:h-[480px] w-full relative"
            onMouseEnter={() => {
              sound.playHover();
              onHoverCursor('WARP');
            }}
            onMouseLeave={() => onHoverCursor('')}
          >
            <GenerativeManifold interactive={true} density={28} speed={1.0} />
          </div>

          <div className="p-4 border-t border-white/10 bg-[#0c0c12]/80 flex items-center justify-between text-xs font-mono text-zinc-400 flex-wrap gap-2">
            <span>INTERACTION: Move cursor over canvas to perturb vector field lines.</span>
            <span className="text-[#00f0ff]">PURE CANVAS 2D // ZERO GPU BLOAT</span>
          </div>
        </div>

        {/* Discrete Experiments Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIMENTS.filter((e) => e.id !== 'exp-001').map((exp) => (
            <div
              key={exp.id}
              className="p-6 bg-[#0c0c12] border border-white/10 hover:border-[#00f0ff]/40 transition-colors flex flex-col justify-between"
              onMouseEnter={() => sound.playHover()}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#00f0ff] font-bold">{exp.code}</span>
                  <span className="text-zinc-500">{exp.date}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {exp.title}
                </h3>

                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-3">
                  {exp.category}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>
              </div>

              <div>
                <div className="p-2.5 bg-[#050508] border border-white/5 font-mono text-[11px] text-zinc-400 mb-4">
                  <span className="text-[#00f0ff]">EQUATION: </span>
                  {exp.parameters}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#14141d] font-mono text-[10px] text-zinc-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
