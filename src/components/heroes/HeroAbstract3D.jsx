import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3DComputationalField from '../canvas/Hero3DComputationalField.jsx';
import TactileButton from '../ui/TactileButton.jsx';
import StatusIndicator from '../ui/StatusIndicator.jsx';
import { ArrowRight, Terminal, Cpu, Binary, Compass, Activity } from 'lucide-react';

export default function HeroAbstract3D({ onExploreClick }) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between border-b border-[#27272A]/50 overflow-hidden bg-[#09090B]">

      {/* 3D WebGL Computational Manifold & Vector Field */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-75 hover:opacity-95 transition-opacity duration-700">
        <Hero3DComputationalField />
      </div>

      {/* Radial vignette gradient ensures typographical contrast and legibility */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-[#09090B] via-[#09090B]/50 to-transparent" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-[#09090B]/90 via-[#09090B]/40 to-transparent" />

      {/* Top Academic & Telemetry Strip */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 pt-8 sm:pt-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase text-[#FAFAFA]">
            AI &bull; DATA SCIENCE &bull; SYSTEMS RESEARCH
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>IIT JODHPUR // APPLIED AI &amp; DATA SCIENCE</span>
          <span className="text-[#3F3F46]">|</span>
          <span className="text-emerald-400 font-medium">FIRST PRINCIPLES</span>
        </div>
      </div>

      {/* Central Typographical Monolith */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 py-16 lg:py-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow / Discipline Metadata */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 rounded-[4px] border border-[rgba(255,255,255,0.08)] bg-[#121215]/80 backdrop-blur-md text-xs font-mono text-[#A1A1AA]">
            <span className="w-2 h-2 rounded-full bg-[#E10600]" />
            <span className="text-[#FAFAFA] font-medium">SHUBHAM SHARMA</span>
            <span className="text-[#52525B]">//</span>
            <span>AI &bull; DATA &bull; SOFTWARE</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight uppercase font-display leading-[0.92] text-[#FAFAFA] mb-8">
            SHUBHAM <br />
            <span className="font-serif-editorial italic lowercase text-white font-normal mr-3">
              researches
            </span>
            SHARMA
          </h1>

          {/* Clear, Grounded Copy with strict line-length limit */}
          <div className="max-w-[65ch] space-y-3 mb-10">
            <p className="text-xl sm:text-2xl text-[#FAFAFA] font-light leading-relaxed tracking-tight">
              I build systems, analyze data, and experiment with intelligent models.
            </p>
            <p className="text-base text-[#A1A1AA] font-normal leading-[1.75]">
              Applied AI &amp; Data Science at IIT Jodhpur. Focused on machine learning runtimes, computer vision pipelines, and resilient software architectures.
            </p>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4">
            <TactileButton
              variant="primary"
              size="lg"
              onClick={onExploreClick}
              className="gap-2.5 group cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </TactileButton>

            <Link to="/ai-data">
              <TactileButton
                variant="secondary"
                size="md"
                className="gap-2 cursor-pointer"
              >
                <Binary size={14} className="text-[#A1A1AA]" />
                <span>AI &amp; Data</span>
              </TactileButton>
            </Link>

            <Link to="/experiments">
              <TactileButton
                variant="hardware"
                size="md"
                led="active"
                className="gap-2 cursor-pointer"
              >
                <Cpu size={14} className="text-[#A1A1AA]" />
                <span>Digital Lab</span>
              </TactileButton>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Understated Telemetry Strip */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 pb-6 border-t border-[rgba(255,255,255,0.06)] pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-2">
            <StatusIndicator status="online" size="sm" />
            <span className="text-[#FAFAFA] text-[11px]">SYSTEM: ONLINE</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-[#A1A1AA] text-[11px]">DIMENSION: 3D MANIFOLD</span>
          </div>
          <div className="hidden md:inline-flex items-center gap-2">
            <StatusIndicator status="active" size="sm" pulse />
            <span className="text-[#A1A1AA] text-[11px]">VECTOR STREAM: ACTIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#A1A1AA]">
            <Compass size={14} className="text-[#71717A]" />
            Dimensionality Reduction &bull; Manifolds
          </span>
          <span className="text-[11px] text-[#71717A] uppercase tracking-wider">
            PORTFOLIO // 2026
          </span>
        </div>
      </div>
    </section>
  );
}
