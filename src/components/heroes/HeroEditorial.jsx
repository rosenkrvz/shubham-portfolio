import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton.jsx';
import { ArrowDownRight, Compass } from 'lucide-react';

export default function HeroEditorial({ onExploreClick }) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between border-b border-[#1C1C22] bg-[#08080A] overflow-hidden">
      
      {/* Top Asymmetric Index Line */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-10 flex flex-wrap items-baseline justify-between border-b border-[#1C1C22] pb-4 text-xs font-mono text-[#9E9EA8]">
        <div>VOL. 02 // EDITORIAL PORTFOLIO</div>
        <div>IIT JODHPUR • APPLIED AI & DATA SCIENCE</div>
        <div className="hidden sm:block">INDEX (01 — 05)</div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        
        {/* Left Typographic Expression (7 Columns) */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs font-mono tracking-widest text-[#818CF8] uppercase mb-4">
              [PERSONAL ARCHIVE // 2024]
            </div>

            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase font-display leading-[0.88] text-[#F4F4F0] mb-6">
              SHUBHAM <br />
              <span className="font-serif-editorial italic font-normal text-5xl sm:text-7xl lg:text-8xl lowercase text-[#C7D2FE] tracking-normal mr-4">
                thinks through
              </span>
              <br />
              SYSTEMS.
            </h1>

            <p className="text-lg sm:text-2xl text-[#9E9EA8] font-light max-w-xl leading-relaxed mt-8 mb-10">
              An applied perspective on neural computation, edge verification, and resilient distributed data pipelines.
            </p>

            <div className="flex items-center gap-6">
              <MagneticButton
                onClick={onExploreClick}
                className="px-7 py-4 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-semibold text-sm rounded-sm tracking-tight flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Read Selected Works</span>
                <ArrowDownRight size={16} />
              </MagneticButton>

              <Link
                to="/about"
                className="text-xs font-mono uppercase tracking-wider text-[#9E9EA8] hover:text-white border-b border-[#272730] hover:border-white pb-1 transition-colors"
              >
                About & Research Statement &rarr;
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Editorial Image Panel with Dither/Monochrome Finish (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group border border-[#272730] p-2 bg-[#111114]"
          >
            <div className="relative overflow-hidden aspect-[4/5] grayscale contrast-125">
              <img
                src="/assets/sentinel_portrait.jpg"
                alt="Shubham Sharma - Editorial Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#9E9EA8] px-1">
              <span>FIG. 01 // OPERATOR</span>
              <span className="text-[#818CF8]">26.29° N, 73.02° E</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Editorial Bottom Metadata */}
      <div className="max-w-7xl mx-auto w-full px-6 py-6 border-t border-[#1C1C22] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#656570]">
        <div className="flex items-center gap-2">
          <Compass size={14} className="text-[#818CF8]" />
          <span>RESEARCH AT IIT JODHPUR • MATHEMATICAL OPTIMIZATION • SYSTEMS ARCHITECTURE</span>
        </div>
        <div>
          <span>SCROLL TO BEGIN ARCHIVAL EXPLORATION</span>
        </div>
      </div>
    </section>
  );
}
