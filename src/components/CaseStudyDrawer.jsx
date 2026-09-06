import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { sound } from '../lib/sound.js';

export default function CaseStudyDrawer({ activeProject, onClose, onHoverCursor }) {
  const [copiedCode, setCopiedCode] = React.useState(false);

  if (!activeProject) return null;

  const handleCopyCode = async () => {
    sound.playClick();
    if (activeProject.codeSnippet?.code) {
      try {
        await navigator.clipboard.writeText(activeProject.codeSnippet.code);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } catch (err) {
        // clipboard error
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="case-study-backdrop"
        onClick={() => {
          sound.playClick();
          onClose();
        }}
      />
      <motion.aside
        key="drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 240 }}
        className="case-study-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-project-title"
      >
        <div className="drawer-header">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
            <span className="meta-code text-[#00f0ff] font-semibold">
              {activeProject.num} // ARCHITECTURAL DOSSIER
            </span>
          </div>
          <button
            className="masthead-btn flex items-center gap-1.5 text-xs"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            onMouseEnter={() => {
              sound.playHover();
              onHoverCursor('CLOSE');
            }}
            onMouseLeave={() => onHoverCursor('')}
          >
            <X size={13} /> CLOSE [ESC]
          </button>
        </div>

        <div className="drawer-content">
          <div className="flex items-center justify-between mb-3">
            <span className="meta-code text-[#00f0ff] font-bold tracking-widest">{activeProject.category}</span>
            <span className="meta-code text-zinc-400">{activeProject.year} // RELEASE</span>
          </div>

          <h2 id="drawer-project-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            {activeProject.title}
          </h2>

          <p className="serif-italic text-xl sm:text-2xl text-zinc-400 mb-8 leading-relaxed">
            {activeProject.subtitle}
          </p>

          <p className="text-base text-zinc-300 leading-relaxed mb-8">
            {activeProject.abstract}
          </p>

          {/* Real Technical Metrics */}
          {activeProject.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#14141d] border border-white/10 mb-8">
              {activeProject.metrics.map((m, idx) => (
                <div key={idx} className="border-l-2 border-[#00f0ff] pl-3 py-1">
                  <div className="text-xs font-mono text-zinc-400">{m.label}</div>
                  <div className="text-base font-mono font-bold text-[#00f0ff] mt-0.5">{m.val}</div>
                </div>
              ))}
            </div>
          )}

          {/* Project Technical Metadata */}
          <div className="case-metadata-grid">
            <div>
              <div className="meta-cell-label">PRIMARY ROLE</div>
              <div className="meta-cell-val font-medium">{activeProject.role}</div>
            </div>
            <div>
              <div className="meta-cell-label">TECHNOLOGY STACK</div>
              <div className="meta-cell-val">{activeProject.technologies.join(' · ')}</div>
            </div>
            <div>
              <div className="meta-cell-label">SOURCE REPOSITORY</div>
              <div className="meta-cell-val">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00f0ff] hover:underline inline-flex items-center gap-1 font-mono text-xs"
                >
                  GitHub Repository <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
            <div>
              <div className="meta-cell-label">OPERATIONAL STATUS</div>
              <div className="meta-cell-val text-zinc-300 font-mono text-xs">
                PROD / VERIFIED CODEBASE
              </div>
            </div>
          </div>

          {/* Code Dossier Snippet */}
          {activeProject.codeSnippet && (
            <div className="my-8 bg-[#050508] border border-white/15 p-4 relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2 text-[#00f0ff]">
                  <Terminal size={14} />
                  <span>{activeProject.codeSnippet.title}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-0.5 border border-white/20 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors text-[11px]"
                  title="Copy code excerpt"
                >
                  {copiedCode ? <Check size={12} className="text-[#00f0ff]" /> : <Copy size={12} />}
                  <span>{copiedCode ? 'COPIED' : 'COPY EXCERPT'}</span>
                </button>
              </div>
              <pre className="mt-3 text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed p-1">
                <code>{activeProject.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          <hr className="editorial-rule-thin" />

          {/* Case Study Editorial Sections */}
          {activeProject.sections.map((sec, idx) => (
            <div key={idx} className="case-study-section mb-8">
              <h3 className="case-section-title">{sec.title}</h3>
              <p className="case-study-text">{sec.content}</p>
            </div>
          ))}

          {/* Interactive Actions */}
          <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-4 flex-wrap">
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn editorial-btn-primary flex items-center gap-2"
              onClick={() => sound.playClick()}
            >
              INSPECT SOURCE CODE <ArrowUpRight size={14} />
            </a>
            <button
              className="editorial-btn editorial-btn-ghost"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
            >
              CLOSE CASE STUDY ×
            </button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}