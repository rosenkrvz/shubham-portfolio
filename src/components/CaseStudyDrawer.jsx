import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

export default function CaseStudyDrawer({ activeStudy, onClose, onHoverCursor }) {
  if (!activeStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="case-study-backdrop open"
        onClick={onClose}
      />
      <motion.aside
        key="drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        className="case-study-drawer open"
        role="dialog"
        aria-modal="true"
      >
        <div className="drawer-header">
          <span className="meta-code text-[#d0202b] font-semibold">{activeStudy.number} // DOSSIER</span>
          <button
            className="drawer-close-btn flex items-center gap-1.5"
            onClick={onClose}
            onMouseEnter={() => onHoverCursor('CLOSE')}
            onMouseLeave={() => onHoverCursor('')}
          >
            <X size={14} /> CLOSE [ESC]
          </button>
        </div>

        <div className="drawer-content">
          <div className="meta-code text-[#d0202b] mb-2">{activeStudy.number}</div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Syne'] tracking-tight mb-3">
            {activeStudy.title}
          </h2>
          <p className="serif-italic text-xl text-[#94949e] mb-8 leading-relaxed">
            {activeStudy.abstract}
          </p>

          <div className="case-metadata-grid">
            <div>
              <div className="meta-cell-label">YEAR</div>
              <div className="meta-cell-val">{activeStudy.year}</div>
            </div>
            <div>
              <div className="meta-cell-label">ROLE</div>
              <div className="meta-cell-val">{activeStudy.role}</div>
            </div>
            <div>
              <div className="meta-cell-label">STACK</div>
              <div className="meta-cell-val">{activeStudy.stack}</div>
            </div>
            <div>
              <div className="meta-cell-label">REPOSITORY</div>
              <div className="meta-cell-val">
                <a
                  href={activeStudy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d0202b] hover:underline flex items-center gap-1"
                >
                  GitHub <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          <hr className="editorial-rule-thin" />

          {activeStudy.sections.map((sec, idx) => (
            <div key={idx} className="case-study-section">
              <div className="case-section-title">{sec.subtitle}</div>
              <p className="case-study-text">{sec.content}</p>
            </div>
          ))}

          <div className="mt-12 flex items-center gap-4 flex-wrap">
            <a
              href={activeStudy.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn editorial-btn-primary flex items-center gap-2"
            >
              EXPLORE REPOSITORY <ArrowUpRight size={14} />
            </a>
            <button className="editorial-btn editorial-btn-ghost" onClick={onClose}>
              RETURN TO ARCHIVE ×
            </button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}