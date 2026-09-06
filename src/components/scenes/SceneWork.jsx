import React from 'react';
import { ArrowUpRight, Terminal, ArrowRight, Code } from 'lucide-react';
import { PROJECTS } from '../../data/projects.js';
import { sound } from '../../lib/sound.js';

export default function SceneWork({ onOpenCaseStudy, onHoverCursor }) {
  return (
    <section id="work" className="py-24" aria-label="Scene 03: Selected Work">
      <div className="site-container">
        <div className="scene-marker">
          <span className="scene-label">03 // SELECTED WORK AS EXPERIENCES</span>
          <span className="scene-num">CASE STUDIES // DEPLOYED SYSTEMS</span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineering Artifacts &amp; Systems
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg">
            Each project is an authored system balancing mathematical models, deterministic backend logic, and production durability.
          </p>
        </div>

        {/* Project Spatial Stack */}
        <div className="space-y-24">
          {PROJECTS.map((proj) => (
            <article
              key={proj.id}
              id={`proj-${proj.id}`}
              className="project-scene"
            >
              {/* Left Column: Narrative & Metrics */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="project-meta-top">
                    <span className="project-category-badge">{proj.category}</span>
                    <span className="meta-code text-zinc-400">{proj.year} // RELEASE</span>
                  </div>

                  <div className="font-mono text-xs text-[#00f0ff] font-bold mb-2">
                    {proj.num}
                  </div>

                  <h3 className="project-title-large">
                    {proj.title}
                  </h3>

                  <p className="serif-italic text-lg text-zinc-400 mb-4 leading-snug">
                    {proj.subtitle}
                  </p>

                  <p className="project-abstract-copy">
                    {proj.abstract}
                  </p>
                </div>

                <div>
                  {/* Verified Metrics Row */}
                  {proj.metrics && (
                    <div className="project-metric-row">
                      {proj.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="metric-val">{m.val}</div>
                          <div className="metric-label">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="tech-tag-strip">
                    {proj.technologies.map((t, idx) => (
                      <span key={idx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-4 flex-wrap mt-2">
                    <button
                      className="editorial-btn editorial-btn-primary flex items-center gap-2"
                      onClick={() => {
                        sound.playClick();
                        onOpenCaseStudy(proj.id);
                      }}
                      onMouseEnter={() => {
                        sound.playHover();
                        onHoverCursor('READ');
                      }}
                      onMouseLeave={() => onHoverCursor('')}
                    >
                      OPEN ARCHITECTURAL DOSSIER <ArrowRight size={14} />
                    </button>

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn editorial-btn-ghost flex items-center gap-1.5"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => {
                        sound.playHover();
                        onHoverCursor('CODE');
                      }}
                      onMouseLeave={() => onHoverCursor('')}
                    >
                      SOURCE CODE <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Code Dossier Visual Panel */}
              <div className="code-dossier-panel">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2 text-[#00f0ff]">
                    <Terminal size={14} />
                    <span>{proj.codeSnippet.title}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 uppercase">SYNTAX CHECKED</span>
                </div>

                <div className="code-block-inner my-auto">
                  <pre className="text-xs font-mono text-zinc-300 leading-relaxed whitespace-pre overflow-x-auto p-2">
                    <code>{proj.codeSnippet.code}</code>
                  </pre>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>ROLE: {proj.role}</span>
                  <span className="text-[#00f0ff]">VERIFIED ENGINE</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
