import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Terminal, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons.jsx';

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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Case Study: ${project.title}`}
          className="relative w-full max-w-2xl h-full bg-[#0E0E11] border-l border-[#1F1F24] overflow-y-auto shadow-2xl z-10 flex flex-col justify-between"
        >
          {/* Drawer Header & Breadcrumb Trail */}
          <div>
            <div className="sticky top-0 z-20 p-5 bg-[#0E0E11]/95 backdrop-blur border-b border-[#1F1F24]">
              {/* Breadcrumb Navigation Trail */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-mono text-[11px] text-[#8E8D8A] mb-3">
                <span className="hover:text-[#F0F0EE] transition-colors">SYSTEMS</span>
                <span>/</span>
                <span className="text-[#3E2CF0] uppercase font-semibold">{project.category}</span>
                <span>/</span>
                <span className="text-[#F0F0EE] truncate max-w-[200px]">{project.title}</span>
              </nav>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#3E2CF0] animate-pulse"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#85858B]">
                    Case Study Dossier
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md bg-[#161619] border border-[#232328] text-[#85858B] hover:text-white hover:border-[#3E2CF0] transition-colors focus:outline-none focus:ring-1 focus:ring-[#3E2CF0]"
                  aria-label="Close project drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Drawer Body */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Title & Status */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-[#3E2CF0]/10 border border-[#3E2CF0]/30 text-[#3E2CF0]">
                    {project.status || 'DEPLOYED'}
                  </span>
                  <span className="text-xs font-mono text-[#52525B]">NODE ID: {project.id}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F0F0EE]">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-[#85858B] leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Cover Artwork if present */}
              {project.image && (
                <div className="relative rounded-lg overflow-hidden border border-[#1F1F24] bg-black">
                  <img
                    src={project.image}
                    alt={`Architecture visualization and telemetry for ${project.title}`}
                    className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E11] via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] px-2 py-1 rounded bg-black/80 border border-white/10 text-[#85858B]">
                    1-BIT RASTER TELEMETRY SNAPSHOT
                  </div>
                </div>
              )}

              {/* Real-time Engineering Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-[#121215] border border-[#1F1F24]">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#85858B]">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                      <div className="text-sm sm:text-base font-mono font-semibold text-[#F0F0EE]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem Definition */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#3E2CF0] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>01 // Problem Formulation</span>
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed bg-[#121215] p-4 rounded border border-[#1F1F24]">
                  {project.problemStatement || project.summary}
                </p>
              </div>

              {/* Architecture & Engineering Solution */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#3E2CF0] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>02 // System Architecture</span>
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed bg-[#121215] p-4 rounded border border-[#1F1F24]">
                  {project.architecture || project.fullDescription || project.summary}
                </p>
              </div>

              {/* Engineering Tradeoffs */}
              {project.technicalTradeoffs && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#3E2CF0] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>03 // Architectural Trade-offs</span>
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed bg-[#121215] p-4 rounded border border-[#1F1F24]">
                    {project.technicalTradeoffs}
                  </p>
                </div>
              )}

              {/* Tech Stack Arsenal */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#85858B]">
                  Construct Stack &amp; Tooling
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#161619] border border-[#232328] font-mono text-[11px] text-[#D4D4D8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="sticky bottom-0 p-6 bg-[#0E0E11]/95 backdrop-blur border-t border-[#1F1F24] flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#161619] hover:bg-[#232328] border border-[#2A2A30] text-[#F0F0EE] text-xs font-semibold tracking-wide transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#3E2CF0] hover:bg-[#4F3DF8] text-white text-xs font-semibold tracking-wide transition-all shadow-sm shadow-[#3E2CF0]/30"
              >
                <span>Live System Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
