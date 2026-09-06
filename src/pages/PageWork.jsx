import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, ChevronDown, ChevronUp, GitBranch, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';
import { PROFILE } from '../data/profile.js';

// Domain-specific editorial graphics for the floating cursor preview
function ProjectPreviewGraphic({ id }) {
  switch (id) {
    case 'loan-predictor':
      return (
        <div className="w-full h-full flex flex-col justify-between p-3 bg-[#0d0d10]">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>MODEL // CLASSIFICATION</span>
            <span className="text-[var(--accent-red)]">RANDOM FOREST</span>
          </div>
          <svg className="w-full h-20 overflow-visible my-auto" viewBox="0 0 200 80">
            <path d="M 10 70 Q 60 65 100 35 T 190 10" fill="none" stroke="#f4f4f0" strokeWidth="1.5" />
            <line x1="10" y1="70" x2="190" y2="70" stroke="rgba(244,244,240,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="35" r="3" fill="#c2282e" />
          </svg>
          <div className="text-[10px] font-mono text-zinc-500">
            CALIBRATED RISK BOUNDARY
          </div>
        </div>
      );
    case 'nirogshaala':
      return (
        <div className="w-full h-full flex flex-col justify-between p-3 bg-[#0d0d10]">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>SCHEMA // ATOMIC ALLOCATION</span>
            <span className="text-[var(--accent-red)]">POSTGRESQL</span>
          </div>
          <div className="my-auto space-y-1.5 font-mono text-[10px] text-zinc-400">
            <div className="border border-zinc-800 p-1 flex justify-between">
              <span>inventory_batch</span>
              <span className="text-zinc-600">[PK: id]</span>
            </div>
            <div className="border border-zinc-800 p-1 flex justify-between">
              <span>stock_reservation</span>
              <span className="text-zinc-600">[FK: batch_id]</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500">
            TRANSACTIONAL RECONCILIATION
          </div>
        </div>
      );
    case 'idle-suite':
      return (
        <div className="w-full h-full flex flex-col justify-between p-3 bg-[#0d0d10]">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>ALGORITHM // COMPLEXITY</span>
            <span className="text-[var(--accent-red)]">PYTHON 3</span>
          </div>
          <svg className="w-full h-20 overflow-visible my-auto" viewBox="0 0 200 80">
            <line x1="100" y1="15" x2="50" y2="45" stroke="#8e8e96" strokeWidth="1" />
            <line x1="100" y1="15" x2="150" y2="45" stroke="#8e8e96" strokeWidth="1" />
            <line x1="50" y1="45" x2="25" y2="70" stroke="#8e8e96" strokeWidth="1" />
            <line x1="50" y1="45" x2="75" y2="70" stroke="#8e8e96" strokeWidth="1" />
            <circle cx="100" cy="15" r="4" fill="#c2282e" />
            <circle cx="50" cy="45" r="3" fill="#f4f4f0" />
            <circle cx="150" cy="45" r="3" fill="#f4f4f0" />
          </svg>
          <div className="text-[10px] font-mono text-zinc-500">
            RECURSIVE DYNAMIC BENCHMARK
          </div>
        </div>
      );
    case 'editorial-platform':
    default:
      return (
        <div className="w-full h-full flex flex-col justify-between p-3 bg-[#0d0d10]">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>ARCHITECTURE // INTERACTION</span>
            <span className="text-[var(--accent-red)]">VITE + REACT</span>
          </div>
          <div className="my-auto border border-zinc-800 p-2 font-mono text-[10px] text-zinc-300">
            <div className="text-[var(--accent-red)]"># typography hierarchy</div>
            <div>Grotesk + Serif + Mono</div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500">
            MINIMAL MULTI-PAGE ROUTING
          </div>
        </div>
      );
  }
}

export default function PageWork({ onNavigateTab }) {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedId, setExpandedId] = useState(null);
  const heroRef = useRef(null);
  const [heroPointer, setHeroPointer] = useState({ x: 0, y: 0 });

  // Mouse tracking for floating project preview
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle hero mouse interaction
  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroPointer({ x: x * 15, y: y * 15 });
  };

  const toggleProject = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const scrollToWork = () => {
    const el = document.getElementById('selected-work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-container pt-16 pb-28">
      {/* Floating Project Preview (Desktop Cursor Tracker) */}
      <AnimatePresence>
        {hoveredProjectId && !expandedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 24,
              y: mousePos.y - 90
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="floating-preview-card"
            style={{ left: 0, top: 0 }}
          >
            <ProjectPreviewGraphic id={hoveredProjectId} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================================================================
          Hero Section — Extremely Strong, Extremely Simple
          ==================================================================== */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="mb-32 relative py-6"
      >
        {/* Subtle pointer ambient depth */}
        <div
          className="absolute -top-10 -left-10 w-96 h-96 bg-[rgba(194,40,46,0.035)] rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${heroPointer.x}px, ${heroPointer.y}px)`
          }}
        />

        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-8 uppercase tracking-widest">
            <span>IIT Jodhpur, India</span>
            <span>·</span>
            <span>Applied AI &amp; Data Science</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[#f4f4f0] mb-8 leading-[1.02]">
            SHUBHAM <br />
            <span className="font-normal text-white">SHARMA</span>
          </h1>

          <div className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-8">
            AI &amp; Data Science / Software / Builder
          </div>

          <p className="text-xl sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-2xl mb-12">
            I build <span className="serif-italic font-normal text-white">intelligent systems</span> and software that turn technical ideas into useful things.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <button
              onClick={scrollToWork}
              className="btn-editorial btn-editorial-primary"
            >
              View Work <ArrowDown size={14} />
            </button>
            <button
              onClick={() => onNavigateTab('about')}
              className="btn-editorial btn-editorial-ghost"
            >
              About Me →
            </button>
            <a
              href={PROFILE.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-1 ml-2"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Projects — The Star of the Website
          ==================================================================== */}
      <section id="selected-work">
        <div className="flex justify-between items-baseline mb-8 border-b border-[var(--rule-border)] pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Index of Selected Work (04)
          </span>
          <span className="font-mono text-xs text-zinc-600 hidden sm:inline">
            Hover to preview · Click to expand case study
          </span>
        </div>

        <div className="project-archive-container">
          {PROJECTS.map((proj) => {
            const isExpanded = expandedId === proj.id;
            const isDimmed = hoveredProjectId && hoveredProjectId !== proj.id && !expandedId;

            return (
              <div
                key={proj.id}
                className={`project-entry-row ${isExpanded ? 'bg-[var(--bg-surface)]' : ''} ${
                  isDimmed ? 'dimmed' : ''
                }`}
                onMouseEnter={() => setHoveredProjectId(proj.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                {/* Summary Row */}
                <div
                  className="project-row-summary"
                  onClick={() => toggleProject(proj.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject(proj.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <span className="project-index-num">{proj.index}</span>

                  <div>
                    <h2 className="project-summary-title">
                      {proj.title}
                    </h2>
                    <p className="project-summary-desc">
                      {proj.description}
                    </p>
                  </div>

                  <div className="project-summary-stack">
                    {proj.technologies.slice(0, 3).join(' · ')}
                  </div>

                  <div className="project-summary-year flex items-center justify-end gap-2">
                    <span>{proj.year}</span>
                    <span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </span>
                  </div>
                </div>

                {/* Expanded Case Study View */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="case-study-expanded-view px-4 sm:px-8 py-6">
                        <div className="case-study-columns">
                          {/* Left Column: Narrative Sections */}
                          <div>
                            {proj.sections.map((sec, idx) => (
                              <div key={idx} className="case-section-item">
                                <div className="case-section-tag">
                                  {sec.heading}
                                </div>
                                <p className="case-section-p">
                                  {sec.text}
                                </p>
                              </div>
                            ))}

                            <div className="pt-4 flex items-center gap-4">
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-editorial btn-editorial-primary text-xs"
                              >
                                Source Repository <ArrowUpRight size={13} />
                              </a>
                            </div>
                          </div>

                          {/* Right Column: Code & Technical Architecture */}
                          <div className="space-y-6">
                            {proj.codeSnippet && (
                              <div>
                                <div className="flex justify-between items-center text-xs font-mono text-zinc-500 mb-2 pb-1 border-b border-[var(--rule-border)]">
                                  <span className="flex items-center gap-1.5">
                                    <Terminal size={12} className="text-[var(--accent-red)]" />
                                    {proj.codeSnippet.title}
                                  </span>
                                  <span className="uppercase">{proj.codeSnippet.language}</span>
                                </div>
                                <pre className="bg-[#070709] border border-[var(--rule-border)] p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                                  <code>{proj.codeSnippet.code}</code>
                                </pre>
                              </div>
                            )}

                            <div>
                              <div className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                                Technologies
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {proj.technologies.map((t, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2.5 py-1 text-xs font-mono bg-[#16161a] text-zinc-300 border border-[var(--rule-border)]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
