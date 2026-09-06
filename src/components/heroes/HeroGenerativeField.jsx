import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GenerativeParticleField from '../canvas/GenerativeParticleField.jsx';
import MagneticButton from '../ui/MagneticButton.jsx';
import { Sparkles, TerminalSquare, ArrowRight } from 'lucide-react';

export default function HeroGenerativeField({ onExploreClick }) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between border-b border-[#1C1C22] bg-[#08080A] overflow-hidden">
      
      {/* Interactive Generative Particle Canvas */}
      <div className="absolute inset-0 z-0 opacity-85 hover:opacity-100 transition-opacity duration-500">
        <GenerativeParticleField particleCount={160} colorScheme="indigo" />
      </div>

      {/* Subtle Darkening Gradients for readability */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-[#08080A]/60 via-transparent to-[#08080A]/90" />

      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-10 flex flex-wrap items-center justify-between text-xs font-mono text-[#9E9EA8]">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-[#818CF8]" />
          <span>GENERATIVE VECTOR FIELD // REALTIME COMPUTED</span>
        </div>
        <div className="hidden sm:block">
          IIT JODHPUR • APPLIED AI & DATA SCIENCE
        </div>
      </div>

      {/* Center Typographic Core */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 text-center flex flex-col items-center justify-center flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 border border-[rgba(255,255,255,0.08)] bg-[#121215]/85 backdrop-blur-sm rounded-full type-label text-[#B0B0B0]">
            PHYSICS-BASED PARTICLE FIELD // THREE.JS
          </div>

          <h1 className="type-hero font-medium uppercase tracking-tight font-display leading-[0.92] text-[#FAFAFA] mb-6">
            MATHEMATICAL <br />
            <span className="font-serif-editorial italic font-normal lowercase text-white mr-3">
              geometry of
            </span>
            INTELLIGENCE
          </h1>

          <p className="type-body-lg text-[#E8E8E8] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Pushing cursor through high-dimensional vector fields, neural latent spaces, and real-time algorithmic software pipelines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#FAFAFA] hover:bg-white text-[#09090B] font-semibold text-sm rounded-sm tracking-tight shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW WORK</span>
              <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton
              as="div"
              className="px-6 py-4 border border-[rgba(255,255,255,0.1)] hover:border-white bg-[#121215]/80 backdrop-blur-sm text-sm rounded-sm text-[#FAFAFA] cursor-pointer"
            >
              <Link to="/experiments" className="flex items-center gap-2">
                <TerminalSquare size={16} className="text-[#B0B0B0]" />
                <span>OPEN LAB</span>
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-8 text-center text-xs font-mono text-[#656570]">
        MOVE POINTER ACROSS SCREEN TO REPEL & DISTORT VECTOR PARTICLES
      </div>
    </section>
  );
}
