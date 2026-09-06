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
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 pt-8 sm:pt-12 flex flex-wrap items-center justify-between gap-4 type-label text-[#9A9A9A]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase text-[#FAFAFA] font-medium">
            AI &bull; DATA SCIENCE &bull; COMPUTATION
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>IIT JODHPUR // APPLIED AI &amp; DATA SCIENCE</span>
          <span className="text-[#3F3F46]">|</span>
          <span className="text-[#B0B0B0]">EMPIRICAL RESEARCH</span>
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
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-[#121215]/85 backdrop-blur-md type-label text-[#B0B0B0]">
            <span className="w-2 h-2 rounded-full bg-[#E10600]" />
            <span className="text-[#FAFAFA] font-medium">SHUBHAM SHARMA</span>
            <span className="text-[#52525B]">//</span>
            <span>AI &bull; DATA SCIENCE &bull; SYSTEMS</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="type-hero font-medium tracking-tight uppercase font-display leading-[0.92] text-[#FAFAFA] mb-6">
            SHUBHAM <br />
            SHARMA
          </h1>

          {/* Clear, Grounded Copy with scrim for 3D art visibility */}
          <div className="max-w-[65ch] space-y-3 mb-8 text-scrim p-6 -ml-6 rounded-lg">
            <p className="type-body-lg text-[#E8E8E8] font-medium leading-relaxed tracking-tight">
              Building systems, studying data, and exploring how computation can turn theoretical models into measurable reality.
            </p>
            <p className="type-body text-[#B0B0B0] font-normal leading-relaxed">
              Undergraduate in Applied AI &amp; Data Science at IIT Jodhpur. Working across statistical modeling, machine learning pipelines, and computational software.
            </p>
          </div>

          {/* Action Triggers with concise buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <TactileButton
              variant="primary"
              size="lg"
              onClick={onExploreClick}
              className="gap-2.5 group cursor-pointer"
            >
              <span>VIEW WORK</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </TactileButton>

            <Link to="/ai-data">
              <TactileButton
                variant="secondary"
                size="md"
                className="gap-2 cursor-pointer"
              >
                <Binary size={14} className="text-[#B0B0B0]" />
                <span>AI &amp; DATA</span>
              </TactileButton>
            </Link>

            <Link to="/experiments">
              <TactileButton
                variant="hardware"
                size="md"
                led="active"
                className="gap-2 cursor-pointer"
              >
                <Cpu size={14} className="text-[#B0B0B0]" />
                <span>OPEN LAB</span>
              </TactileButton>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Understated Telemetry Strip */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 pb-6 border-t border-[rgba(255,255,255,0.06)] pt-4 flex flex-wrap items-center justify-between gap-4 type-label text-[#9A9A9A]">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-2">
            <StatusIndicator status="online" size="sm" />
            <span className="text-[#E8E8E8]">SYSTEM: ONLINE</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-[#B0B0B0]">CANVAS: 3D MANIFOLD</span>
          </div>
          <div className="hidden md:inline-flex items-center gap-2">
            <StatusIndicator status="active" size="sm" pulse />
            <span className="text-[#B0B0B0]">STREAM: ACTIVE</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#B0B0B0]">
            <Compass size={14} className="text-[#9A9A9A]" />
            Topological Manifold Visualizer
          </span>
          <span className="text-[#9A9A9A] uppercase tracking-wider">
            PORTFOLIO // 2026
          </span>
        </div>
      </div>
    </section>
  );
}
