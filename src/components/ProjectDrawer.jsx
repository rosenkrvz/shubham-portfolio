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
          className="relative w-full max-w-3xl h-full bg-[#09090C] border-l border-[#1C1C22] overflow-y-auto shadow-2xl z-10 flex flex-col justify-between"
        >
          <div>
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 px-6 sm:px-10 py-5 bg-[#09090C]/90 backdrop-blur-md border-b border-[#1C1C22] flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[#818CF8] font-bold">PROJECT / {projectNum}</span>
                <span className="text-[#656570]">//</span>
                <span className="text-[#F4F4F2]">{project.category}</span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-sm bg-[#121216] border border-[#272734] text-[#9E9EA8] hover:text-[#F4F4F2] transition-colors cursor-pointer"
                aria-label="Close project drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study Content */}
            <div className="p-6 sm:p-10 space-y-12">
              
              {/* Title & Thesis */}
              <div className="space-y-4 border-b border-[#1C1C22] pb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-[#656570]">
                  <span>TIMELINE: {project.timeline}</span>
                  <span>&bull;</span>
                  <span className="text-emerald-400 font-semibold">{project.status}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] leading-tight">
                  {project.title}
                </h1>

                {/* One-Sentence Thesis */}
                <p className="text-lg sm:text-xl text-[#C7D2FE] font-light leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono bg-[#121216] border border-[#22222C] text-[#9E9EA8] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Large Hero Visual */}
              {project.image && (
                <div className="aspect-[16/9] w-full bg-[#08080A] border border-[#1C1C22] rounded-sm overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#9E9EA8]">
                    <span>[ARCHITECTURE VISUALIZATION]</span>
                    <span className="text-emerald-400">100% DETERMINISTIC</span>
                  </div>
                </div>
              )}

              {/* Verified Metrics / Results Bar */}
              <div className="p-5 bg-[#0D0D11] border border-[#1F1F28] rounded-sm space-y-3">
                <div className="text-[11px] font-mono text-[#818CF8] uppercase tracking-wider">
                  THE RESULT // EMPIRICALLY VERIFIED METRICS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 bg-[#08080A] border border-[#1C1C24] rounded-sm">
                      <div className="text-base font-bold text-white">{m.value}</div>
                      <div className="text-[10px] text-[#656570] uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Technical Narrative Sections */}
              <div className="space-y-10 text-sm sm:text-base font-light leading-relaxed text-[#9E9EA8]">
                
                {/* 1. THE PROBLEM */}
                <section className="space-y-3 border-l-2 border-[#E10600] pl-6">
                  <div className="text-xs font-mono text-[#E10600] uppercase tracking-widest font-semibold">
                    01 // THE PROBLEM
                  </div>
                  <h2 className="text-xl font-display font-bold uppercase text-[#F4F4F2]">
                    What was being solved?
                  </h2>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    {project.whyDidIBuildIt || project.summary}
                  </p>
                </section>

                {/* 2. THE IDEA / APPROACH */}
                <section className="space-y-3 border-l-2 border-[#818CF8] pl-6">
                  <div className="text-xs font-mono text-[#818CF8] uppercase tracking-widest font-semibold">
                    02 // THE IDEA
                  </div>
                  <h2 className="text-xl font-display font-bold uppercase text-[#F4F4F2]">
                    Architectural Strategy &amp; Formulation
                  </h2>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    {project.whatDidIBuild}
                  </p>
                </section>

                {/* 3. THE SYSTEM & PIPELINE */}
                <section className="space-y-3 border-l-2 border-[#38BDF8] pl-6">
                  <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest font-semibold">
                    03 // THE SYSTEM {isAiProject ? '& MODEL PIPELINE' : '& DISTRIBUTED RUNTIME'}
                  </div>
                  <h2 className="text-xl font-display font-bold uppercase text-[#F4F4F2]">
                    Execution Architecture
                  </h2>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    {project.howDoesItWork}
                  </p>
                </section>

                {/* 4. WHAT I LEARNED */}
                <section className="space-y-3 border-l-2 border-[#34D399] pl-6">
                  <div className="text-xs font-mono text-[#34D399] uppercase tracking-widest font-semibold">
                    04 // WHAT I LEARNED
                  </div>
                  <h2 className="text-xl font-display font-bold uppercase text-[#F4F4F2]">
                    Key Technical Lessons &amp; Trade-offs
                  </h2>
                  <p className="text-[#D1D5DB] leading-relaxed">
                    {project.whatDidILearn}
                  </p>
                </section>

              </div>

              {/* Related Work & Navigation */}
              <div className="pt-8 border-t border-[#1C1C22] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[#656570] uppercase">NEXT CASE STUDY</div>
                  <button
                    onClick={() => {
                      onClose();
                      // Small tick to allow drawer transition then re-open next
                      setTimeout(() => {
                        const evt = new CustomEvent('open-project', { detail: nextProject });
                        window.dispatchEvent(evt);
                      }, 250);
                    }}
                    className="text-sm font-display font-semibold uppercase text-[#818CF8] hover:text-white flex items-center gap-1.5 cursor-pointer"
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
                      className="px-4 py-2.5 bg-[#121216] hover:bg-[#1A1A22] border border-[#272734] text-xs font-mono text-[#F4F4F2] rounded-sm flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#4338CA] hover:bg-[#4F46E5] text-xs font-mono text-white rounded-sm flex items-center gap-2 transition-colors shadow-md"
                    >
                      <ExternalLink size={14} />
                      <span>Live Source</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Drawer Sticky Footer */}
          <div className="p-4 px-6 sm:px-10 bg-[#070709] border-t border-[#1C1C22] flex items-center justify-between text-xs font-mono text-[#656570]">
            <span>IIT JODHPUR // APPLIED AI &amp; DATA SCIENCE</span>
            <button
              onClick={onClose}
              className="text-[#9E9EA8] hover:text-white cursor-pointer"
            >
              [CLOSE ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
