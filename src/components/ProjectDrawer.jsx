import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ArrowRight, Database, Cpu, Activity, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons.jsx';
import { projects } from '../data/projects.js';

export default function ProjectDrawer({ project, onClose }) {
  // ESC key listener to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const isAiProject = project.category.includes('Machine Learning') || project.category.includes('Vision');
  const projectIdx = projects.findIndex((p) => p.id === project.id);
  const projectNum = `0${projectIdx + 1}`.slice(-2);
  const nextProject = projects[(projectIdx + 1) % projects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 32, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Case Study: ${project.title}`}
          className="relative w-full max-w-3xl h-full bg-[#09090B] border-l border-[#27272A]/50 overflow-y-auto shadow-2xl z-10 flex flex-col justify-between"
        >
          <div>
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 px-6 sm:px-10 py-5 bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A]/50 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[#FAFAFA] font-medium">PROJECT / {projectNum}</span>
                <span className="text-[#52525B]">//</span>
                <span className="text-[#A1A1AA]">{project.category}</span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
                aria-label="Close project drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study Content */}
            <div className="p-6 sm:p-10 space-y-12">
              
              {/* Title & Thesis */}
              <div className="space-y-4 border-b border-[#27272A]/50 pb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
                  <span>TIMELINE: {project.timeline}</span>
                  <span>&bull;</span>
                  <span className="text-emerald-400 font-medium">{project.status}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] leading-tight">
                  {project.title}
                </h1>

                {/* One-Sentence Thesis */}
                <p className="text-lg sm:text-xl text-[#A1A1AA] font-light leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono bg-[#121215] border border-[rgba(255,255,255,0.06)] text-[#A1A1AA] rounded-[3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero Visual */}
              {project.image && (
                <div className="aspect-[16/9] w-full bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>[ARCHITECTURE VISUALIZATION]</span>
                    <span className="text-emerald-400">100% DETERMINISTIC</span>
                  </div>
                </div>
              )}

              {/* Verified Metrics Bar */}
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
                  <span>THE RESULT // EMPIRICALLY VERIFIED METRICS</span>
                  <span className="text-emerald-400 font-medium">[ BENCHMARKED ]</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                  {project.metrics.map((m) => (
                    <div 
                      key={m.label} 
                      className="p-3.5 bg-[#09090B] border border-[rgba(255,255,255,0.05)] rounded-[4px]"
                    >
                      <div className="text-base font-medium text-[#FAFAFA]">{m.value}</div>
                      <div className="text-[10px] text-[#71717A] uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Technical Narrative Sections */}
              <div className="space-y-10 text-base font-normal leading-[1.7] text-[#E8E8E8]">
                
                {/* OVERVIEW */}
                {project.overview && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FAFAFA]" />
                      <span>01 // OVERVIEW</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      Context &amp; Core Purpose
                    </h2>
                    <p className="text-[#E8E8E8] leading-relaxed max-w-[65ch]">
                      {project.overview}
                    </p>
                  </section>
                )}

                {/* PROBLEM */}
                {project.problem && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                      <span>02 // PROBLEM</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      What was being solved?
                    </h2>
                    <p className="text-[#B0B0B0] leading-relaxed max-w-[65ch]">
                      {project.problem}
                    </p>
                  </section>
                )}

                {/* APPROACH */}
                {project.approach && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      <span>03 // APPROACH</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      Architectural Strategy &amp; Formulation
                    </h2>
                    <p className="text-[#E8E8E8] leading-relaxed max-w-[65ch]">
                      {project.approach}
                    </p>
                  </section>
                )}

                {/* DATA / INPUT */}
                {project.dataInput && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>04 // DATA &amp; INPUT</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      Input Modalities &amp; Representations
                    </h2>
                    <p className="text-[#B0B0B0] leading-relaxed max-w-[65ch]">
                      {project.dataInput}
                    </p>
                  </section>
                )}

                {/* MODEL / METHOD */}
                {project.modelMethod && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>05 // MODEL &amp; METHOD</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      Algorithmic Foundations
                    </h2>
                    <p className="text-[#E8E8E8] leading-relaxed max-w-[65ch]">
                      {project.modelMethod}
                    </p>
                  </section>
                )}

                {/* IMPLEMENTATION */}
                {project.implementation && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                      <span>06 // IMPLEMENTATION</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      Execution Runtime &amp; Tooling
                    </h2>
                    <p className="text-[#B0B0B0] leading-relaxed max-w-[65ch]">
                      {project.implementation}
                    </p>
                  </section>
                )}

                {/* RESULTS */}
                {project.results && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>07 // RESULTS</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      Empirical Measurements &amp; Findings
                    </h2>
                    <p className="text-[#E8E8E8] leading-relaxed max-w-[65ch]">
                      {project.results}
                    </p>
                  </section>
                )}

                {/* WHAT I LEARNED */}
                {project.whatILearned && (
                  <section className="space-y-3 border-l-2 border-[#FAFAFA]/20 pl-6 relative">
                    <div className="type-label flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FAFAFA]" />
                      <span>08 // WHAT I LEARNED</span>
                    </div>
                    <h2 className="text-xl font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                      Key Technical Lessons &amp; Trade-offs
                    </h2>
                    <p className="text-[#B0B0B0] leading-relaxed max-w-[65ch]">
                      {project.whatILearned}
                    </p>
                  </section>
                )}

              </div>

              {/* Related Work & Navigation */}
              <div className="pt-8 border-t border-[#27272A]/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="type-label">NEXT CASE STUDY</div>
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        const evt = new CustomEvent('open-project', { detail: nextProject });
                        window.dispatchEvent(evt);
                      }, 250);
                    }}
                    className="text-sm font-display font-medium uppercase text-[#FAFAFA] hover:text-[#B0B0B0] flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>{nextProject.title}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-xs font-mono uppercase tracking-wider text-[#E8E8E8] hover:text-white rounded-[4px] flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>VIEW GITHUB</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#FAFAFA] hover:bg-white text-xs font-mono uppercase tracking-wider font-medium text-[#09090B] rounded-[4px] flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>EXPLORE SOURCE</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Drawer Sticky Footer */}
          <div className="p-4 px-6 sm:px-10 bg-[#09090B] border-t border-[#27272A]/50 flex items-center justify-between text-xs font-mono text-[#71717A]">
            <span>IIT JODHPUR // APPLIED AI &amp; DATA SCIENCE</span>
            <button
              onClick={onClose}
              className="text-[#71717A] hover:text-[#FAFAFA] cursor-pointer"
            >
              [CLOSE ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
