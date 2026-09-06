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
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#272730] bg-[#111114]/80 backdrop-blur-sm text-xs font-mono text-[#818CF8]">
            <Activity size={13} />
            <span>AI / DATA / SYSTEMS</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase font-display leading-[0.92] text-[#F4F4F0] mb-6">
            Shubham <br />
            <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl lowercase text-[#C7D2FE] tracking-normal mr-3">
              computes
            </span>
            Sharma
          </h1>

          {/* Concise, Grounded Copywriting */}
          <p className="text-base sm:text-xl text-[#9E9EA8] max-w-2xl font-light leading-relaxed mb-10">
            Turning mathematical models into systems that can be measured. Exploring how high-dimensional representations translate to deterministic execution on physical silicon.
          </p>

          {/* Magnetic Action Triggers */}
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={onExploreClick}
              className="px-6 py-3.5 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-semibold text-sm rounded-sm tracking-tight shadow-xl flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Intelligence &amp; Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              as="div"
              className="px-5 py-3.5 border border-[#272730] hover:border-[#6366F1] bg-[#111114]/70 backdrop-blur-sm text-[#F4F4F2] text-sm rounded-sm cursor-pointer"
            >
              <Link to="/ai-data" className="flex items-center gap-2">
                <Binary size={15} className="text-[#818CF8]" />
                <span>AI &amp; Data Philosophy</span>
              </Link>
            </MagneticButton>

            <MagneticButton
              as="div"
              className="px-5 py-3.5 border border-[#272730] hover:border-[#6366F1] bg-[#111114]/70 backdrop-blur-sm text-[#9E9EA8] hover:text-white text-sm rounded-sm cursor-pointer"
            >
              <Link to="/experiments" className="flex items-center gap-2">
                <Cpu size={15} className="text-[#818CF8]" />
                <span>Interactive Lab</span>
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom Floating Telemetry Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-8 border-t border-[#1C1C22]/60 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#656570]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#9E9EA8]">
            <Compass size={14} className="text-[#818CF8]" />
            Dimensionality Reduction &bull; Manifolds
          </span>
          <span className="hidden md:inline">INT8 Quantization &bull; Tensor Digests</span>
          <span className="hidden md:inline">Asynchronous Runtime &bull; Redis Streams</span>
        </div>
        <div>
          <span>INTERACTIVE 3D COMPUTATIONAL FIELD</span>
        </div>
      </div>
    </section>
  );
}
