import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../SocialIcons.jsx';

/**
 * ProjectExpandCard:
 * 3D interactive spotlight expansion card inspired by Cornerstone-04/moody-treefrog-55.
 * On mouse hover, the active card elevates and unfolds full details (image + body + headers + metrics),
 * while all surrounding sibling elements and the background smoothly blur and dim.
 */
export default function ProjectExpandCard({ project, index, onOpenDrawer, isSpotlightActive, onHoverChange }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // 3D Parallax tilt state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    onHoverChange?.(false);
  };

  const projectNum = `0${index + 1}`.slice(-2);

  return (
    <div className={`relative perspective-1200 z-10 spotlight-item transition-all duration-300 ${isHovered ? 'z-40' : 'z-10'}`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.03 : 1,
          zIndex: isHovered ? 40 : 10
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.8
        }}
        className={`relative w-full rounded-2xl bg-[#101318] border transition-all duration-300 preserve-3d cursor-pointer ${
          isHovered
            ? 'border-[rgba(255,255,255,0.25)] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.08)]'
            : 'border-[rgba(255,255,255,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
        }`}
        onClick={() => onOpenDrawer?.(project)}
      >
        {/* Top Metallic Highlight Gradient */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-t-2xl" />

        {/* Card Header */}
        <div className="p-6 sm:p-7 border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-mono font-bold text-[#F8FAFC]">
              {projectNum} //
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#161B22] border border-[rgba(255,255,255,0.08)] text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#64748B]">{project.timeline}</span>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              isHovered ? 'bg-[#F8FAFC] text-[#0A0D12]' : 'bg-[#161B22] text-[#94A3B8]'
            }`}>
              <ArrowRight size={14} className={`transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`} />
            </div>
          </div>
        </div>

        {/* Card Visual Specimen */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A0D12]">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              isHovered
                ? 'scale-105 contrast-125 filter-none brightness-105'
                : 'grayscale contrast-110 opacity-80'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101318] via-transparent to-transparent opacity-90" />
          
          {project.status && (
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#0A0D12]/80 backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{project.status}</span>
            </div>
          )}
        </div>

        {/* Card Body & Content */}
        <div className="p-6 sm:p-7 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-2">
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-[#0A0D12] border border-[rgba(255,255,255,0.06)] text-[11px] font-mono text-[#94A3B8]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* UNLOADABLE EXPANSION: Triggered on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4 border-t border-[rgba(255,255,255,0.08)] space-y-4 overflow-hidden"
              >
                {/* Detailed Overview */}
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {project.overview || project.problem}
                </p>

                {/* Metrics Badges */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="p-2.5 rounded-lg bg-[#0A0D12] border border-[rgba(255,255,255,0.06)]">
                        <div className="text-[#64748B] uppercase text-[9px]">{m.label}</div>
                        <div className="text-[#F8FAFC] font-semibold mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDrawer?.(project);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#F8FAFC] hover:bg-white text-[#0A0D12] text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight size={13} />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-lg bg-[#161B22] hover:bg-[#1E242C] border border-[rgba(255,255,255,0.08)] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
