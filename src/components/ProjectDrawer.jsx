import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
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
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 320 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Case Study: ${project.title}`}
          className="relative w-full max-w-2xl h-full bg-[#0E0E11] border-l border-[#1E1E23] overflow-y-auto shadow-2xl z-10 flex flex-col justify-between"
        >
          {/* Drawer Sticky Header */}
          <div>
            <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 bg-[#0E0E11]/90 backdrop-blur border-b border-[#1E1E23] flex items-center justify-between">
              
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#8E8D96]">
                <span>Projects</span>
                <span>/</span>
                <span className="text-[#F4F4F2] font-medium">{project.category}</span>
              </nav>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#16161A] border border-[#22222A] text-[#8E8D96] hover:text-[#F4F4F2] transition-colors focus:outline-none"
                aria-label="Close project drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study Content */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-10">
              
              {/* Title & Subtitle */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#8E8D96]">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.timeline}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2] tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm text-[#8E8D96] leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Cover Image if available */}
              {project.image && (
                <div className="rounded-xl overflow-hidden bg-black border border-[#1E1E24]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 object-cover opacity-90"
                  />
                </div>
              )}

              {/* Empirical Metrics Bar */}
              <div className="p-4 rounded-xl bg-[#141417] border border-[#1E1E24] grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-sm font-semibold font-mono text-[#F4F4F2]">{m.value}</div>
                    <div className="text-[11px] text-[#65656E]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Comprehensive Case Study Questions */}
              <div className="space-y-8 divide-y divide-[#1E1E24]">
                
                {/* 1. What Did I Build? */}
                <div className="space-y-2 pt-6 first:pt-0">
                  <h3 className="text-xs uppercase tracking-wider text-[#6366F1] font-semibold">
                    1. What Did I Build?
                  </h3>
                  <p className="text-sm text-[#F4F4F2] leading-relaxed">
                    {project.whatDidIBuild || project.summary}
                  </p>
                </div>

                {/* 2. Why Did I Build It? */}
                <div className="space-y-2 pt-6">
                  <h3 className="text-xs uppercase tracking-wider text-[#6366F1] font-semibold">
                    2. Why Did I Build It?
                  </h3>
                  <p className="text-sm text-[#8E8D96] leading-relaxed">
                    {project.whyDidIBuildIt || project.problemStatement}
                  </p>
                </div>

                {/* 3. How Does It Work? */}
                <div className="space-y-2 pt-6">
                  <h3 className="text-xs uppercase tracking-wider text-[#6366F1] font-semibold">
                    3. How Does It Work?
                  </h3>
                  <p className="text-sm text-[#8E8D96] leading-relaxed">
                    {project.howDoesItWork || project.architecture}
                  </p>
                </div>

                {/* 4. What Did I Learn? */}
                <div className="space-y-2 pt-6">
                  <h3 className="text-xs uppercase tracking-wider text-[#6366F1] font-semibold">
                    4. What Did I Learn?
                  </h3>
                  <p className="text-sm text-[#8E8D96] leading-relaxed">
                    {project.whatDidILearn || project.technicalTradeoffs}
                  </p>
                </div>

                {/* 5. What Was The Result? */}
                <div className="space-y-2 pt-6">
                  <h3 className="text-xs uppercase tracking-wider text-[#6366F1] font-semibold">
                    5. What Was The Result?
                  </h3>
                  <p className="text-sm text-[#8E8D96] leading-relaxed">
                    {project.whatWasTheResult}
                  </p>
                </div>

              </div>

              {/* Technologies Used */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase tracking-wider text-[#65656E] font-medium">
                  Technologies &amp; Libraries
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-[#16161B] border border-[#22222A] text-xs text-[#8E8D96]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="sticky bottom-0 px-6 sm:px-8 py-4 bg-[#0E0E11]/95 backdrop-blur border-t border-[#1E1E23] flex items-center justify-between gap-4">
            <div className="text-xs text-[#8E8D96]">
              Repository &amp; Implementation
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16161B] hover:bg-[#202026] border border-[#25252E] text-xs font-semibold text-[#F4F4F2] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
