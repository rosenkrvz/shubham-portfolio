import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3DComputationalField from '../canvas/Hero3DComputationalField.jsx';
import MagneticButton from '../ui/MagneticButton.jsx';
import { ArrowRight, Terminal, Cpu, Binary, Compass, Activity } from 'lucide-react';

export default function HeroAbstract3D({ onExploreClick }) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between border-b border-[#1C1C22] overflow-hidden bg-[#08080A]">

      {/* 3D WebGL Computational Manifold & Vector Field */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-85 hover:opacity-100 transition-opacity duration-700">
        <Hero3DComputationalField />
      </div>

      {/* Radial vignette gradient ensures typographical contrast and legibility */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-[#08080A]/90 via-[#08080A]/40 to-transparent" />

      {/* Top Academic & Telemetry Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-8 sm:pt-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9E9EA8]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase text-[#F4F4F2]">
            AI &bull; DATA SCIENCE &bull; SYSTEMS RESEARCH
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>IIT JODHPUR // APPLIED AI &amp; DATA SCIENCE</span>
          <span className="text-[#656570]">|</span>
          <span className="text-emerald-400 font-semibold">FIRST PRINCIPLES</span>
        </div>
      </div>

      {/* Central Typographical Monolith */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 lg:py-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Eyebrow / Discipline Metadata */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-full border border-[#272730] bg-[#111114]/90 backdrop-blur-md text-xs font-mono text-[#818CF8]">
            <span className="w-2 h-2 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30 animate-pulse" />
            <span className="text-[#F4F4F2] font-semibold">SHUBHAM SHARMA</span>
            <span className="text-[#656570]">//</span>
            <span>AI · DATA · SOFTWARE</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] font-bold tracking-tighter uppercase font-display leading-[0.88] text-[#F4F4F0] mb-6">
            SHUBHAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8]">
              SHARMA
            </span>
          </h1>

          {/* Clear, Grounded Copy */}
          <div className="max-w-2xl space-y-3 mb-10">
            <p className="text-xl sm:text-2xl md:text-3xl text-[#F2F2F2] font-light leading-snug tracking-tight">
              I build systems, analyze data, and experiment with intelligent models.
            </p>
            <p className="text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed">
              Applied AI &amp; Data Science at IIT Jodhpur. Focused on machine learning runtimes, computer vision pipelines, and resilient software architectures.
            </p>
          </div>

          {/* Tactile Action Triggers */}
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
                <Binary size={14} className="text-[#818CF8]" />
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
                <Cpu size={14} className="text-[#818CF8]" />
                <span>Digital Lab</span>
              </TactileButton>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Laboratory Instrumentation & Telemetry Dock */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-6 border-t border-[rgba(255,255,255,0.06)] pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#666666]">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] rounded-[4px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
            <StatusIndicator status="online" size="sm" />
            <span className="text-[#F2F2F2] text-[11px]">SYSTEM: ONLINE</span>
          </div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] rounded-[4px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-[#A0A0A0] text-[11px]">DIMENSION: 3D MANIFOLD</span>
          </div>
          <div className="hidden md:inline-flex items-center gap-2 px-2.5 py-1 bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] rounded-[4px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
            <StatusIndicator status="active" size="sm" pulse />
            <span className="text-[#A0A0A0] text-[11px]">VECTOR STREAM: ACTIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#9E9EA8]">
            <Compass size={14} className="text-[#818CF8]" />
            Dimensionality Reduction &bull; Manifolds
          </span>
          <span className="text-[11px] text-[#666666] uppercase tracking-wider">
            LAB CHASSIS // VOLT. 0.2.0
          </span>
        </div>
      </div>
    </section>
  );
}
