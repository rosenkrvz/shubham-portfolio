import React from 'react';
import { Terminal, Cpu, Database, CheckCircle2, GitBranch } from 'lucide-react';
import { SKILLS } from '../../data/skills.js';
import { sound } from '../../lib/sound.js';

export default function SceneSystems({ onHoverCursor }) {
  return (
    <section id="systems" className="py-24" aria-label="Scene 05: Technical Systems">
      <div className="site-container">
        <div className="scene-marker">
          <span className="scene-label">05 // TECHNICAL SYSTEMS &amp; EVIDENCE</span>
          <span className="scene-num">RELATIONAL CAPABILITY MATRIX</span>
        </div>

        <div className="max-w-3xl mb-16">
          <span className="meta-code text-[#00f0ff] mb-2 block font-bold">
            EMPIRICAL EVIDENCE OVER ARBITRARY PERCENTAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Technical Architecture &amp; Tooling
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Rather than generic progress bars, every tool is linked directly to where and how it is deployed in production codebases and academic research.
          </p>
        </div>

        {/* Relational Skills Columns */}
        <div className="space-y-12">
          {SKILLS.map((group) => (
            <div key={group.index} className="border-t border-white/10 pt-8">
              <div className="flex items-center gap-2 mb-6 font-mono text-xs text-[#00f0ff] font-bold tracking-wider">
                <span>{group.index} //</span>
                <span>{group.category}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#0c0c12] border border-white/10 hover:border-[#00f0ff]/40 transition-colors flex flex-col justify-between"
                    onMouseEnter={() => {
                      sound.playHover();
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-lg text-white">
                          {item.name}
                        </h3>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-white/5 text-[#00f0ff] border border-white/10">
                          {item.level}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                        {item.usage}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-zinc-400">
                      <div className="text-[10px] text-[#00f0ff] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <CheckCircle2 size={10} />
                        VERIFIED EVIDENCE
                      </div>
                      <div className="text-zinc-400 text-[11px]">{item.evidence}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
