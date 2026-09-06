import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';
import { PROFILE } from '../data/profile.js';

export default function PageWork({ onNavigateTab }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleProject = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="site-container pt-16 pb-24">
      {/* Restrained Editorial Hero */}
      <section className="mb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-6 uppercase tracking-wider">
            <span>{PROFILE.location}</span>
            <span>·</span>
            <span>IIT Jodhpur</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.08]">
            I build <span className="serif-italic font-normal">intelligent systems</span> and software that turn technical ideas into useful things.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-8">
            Pursuing a B.S. in Applied AI &amp; Data Science at IIT Jodhpur. Focused on machine learning pipelines, statistical modeling, and robust full-stack software development.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => onNavigateTab('about')}
              className="text-white hover:text-[var(--accent-red)] transition-colors inline-flex items-center gap-1.5 font-medium"
            >
              Read background <ArrowRight size={14} />
            </button>
            <a
              href={PROFILE.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-1 font-mono text-xs"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Selected Work Archive Header */}
      <section>
        <div className="flex justify-between items-baseline mb-6 border-b border-[var(--border-subtle)] pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Selected Work (04)
          </span>
          <span className="font-mono text-xs text-zinc-600">
            Click to expand case study
          </span>
        </div>

        {/* Editorial Project List */}
        <div className="project-list-wrapper">
          {PROJECTS.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className={`project-row-item ${isExpanded ? 'bg-[var(--surface)]' : ''}`}
              >
                {/* Clickable Header Row */}
                <div
                  className="project-row-main"
                  onClick={() => toggleProject(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject(project.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <span className="project-row-num">{project.index}</span>

                  <div>
                    <h2 className="project-row-title">
                      {project.title}
                    </h2>
                    <p className="text-sm text-zinc-400 font-light mt-1 max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="project-row-tech">
                    <span className="text-xs text-zinc-500 font-mono">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </span>
                  </div>

                  <div className="project-row-year flex items-center justify-end gap-2">
                    <span className="font-mono text-xs text-zinc-500">{project.year}</span>
                    <span className="text-zinc-500">
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </span>
                  </div>
                </div>

                {/* Expanded Case Study Detail */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="project-case-expand px-4 sm:px-8 py-6">
                        <div className="case-study-grid mb-10">
                          {/* Left Column: Editorial Content */}
                          <div className="space-y-6">
                            {project.sections.map((sec, idx) => (
                              <div key={idx}>
                                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                                  {sec.heading}
                                </h3>
                                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                                  {sec.text}
                                </p>
                              </div>
                            ))}

                            <div className="pt-4 flex items-center gap-4">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="editorial-btn editorial-btn-outline text-xs"
                              >
                                View repository <ArrowUpRight size={12} />
                              </a>
                            </div>
                          </div>

                          {/* Right Column: Code & Technical Architecture */}
                          <div className="space-y-6">
                            {project.codeSnippet && (
                              <div>
                                <div className="flex justify-between items-center text-xs font-mono text-zinc-500 mb-2 pb-1 border-b border-[var(--border-subtle)]">
                                  <span>{project.codeSnippet.title}</span>
                                  <span className="uppercase">{project.codeSnippet.language}</span>
                                </div>
                                <pre className="bg-[#09090b] border border-[var(--border-subtle)] p-4 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                                  <code>{project.codeSnippet.code}</code>
                                </pre>
                              </div>
                            )}

                            <div>
                              <div className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">
                                Stack
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((t, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2.5 py-1 text-xs font-mono bg-[var(--surface-hover)] text-zinc-300 border border-[var(--border-subtle)]"
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
