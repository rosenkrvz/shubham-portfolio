import React from 'react';
import { motion } from 'framer-motion';
import DitherPortraitCanvas from '../canvas/DitherPortraitCanvas.jsx';
import MagneticButton from '../ui/MagneticButton.jsx';
import { Binary, Eye, ArrowDownRight } from 'lucide-react';

export default function HeroDigitalPortrait({ onExploreClick }) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between border-b border-[#1C1C22] bg-[#08080A] overflow-hidden">
      
      {/* Top Telemetry */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-10 flex flex-wrap items-center justify-between text-xs font-mono text-[#9E9EA8] border-b border-[#1C1C22] pb-4">
        <div className="flex items-center gap-2">
          <Binary size={15} className="text-[#818CF8]" />
          <span>1-BIT MONOCHROME COMPUTER VISION // QUANTIZED SPATIAL LANDMARKS</span>
        </div>
        <div>BANDWIDTH REDUCTION: 87.5%</div>
      </div>

      {/* Main Split-Screen Architecture */}
      <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        
        {/* Left Interactive 1-Bit Dither Canvas (6 Columns) */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <DitherPortraitCanvas imageSrc="/assets/sentinel_portrait.jpg" />
            <p className="mt-2 text-[11px] font-mono text-[#656570] text-center">
              * Hover cursor horizontally across portrait to dynamically bias Bayer quantization thresholds in real-time.
            </p>
          </motion.div>
        </div>

        {/* Right Typographic & System Explanation (6 Columns) */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#121215] type-label text-[#B0B0B0]">
              <Eye size={13} />
              <span>SPATIAL ERROR DIFFUSION RESEARCH</span>
            </div>

            <h1 className="type-hero font-bold tracking-tight uppercase font-display leading-[0.94] text-[#FAFAFA] mb-6">
              1-Bit <br />
              <span className="font-serif-editorial italic font-normal lowercase text-white mr-2">
                perceptual
              </span>
              Extraction
            </h1>

            <p className="type-body-lg text-[#E8E8E8] font-normal leading-relaxed mb-6">
              Converting heavy 24-bit RGB video frames into 1-bit spatial error-diffused rasters that preserve structural facial contours and edge boundaries at 120+ FPS on resource-constrained microprocessors.
            </p>

            <div className="grid grid-cols-3 gap-4 border-y border-[#27272A]/50 py-4 mb-8 type-label">
              <div>
                <div className="text-[#9A9A9A]">LATENCY</div>
                <div className="text-base text-[#FAFAFA] font-semibold font-mono">120+ FPS</div>
              </div>
              <div>
                <div className="text-[#9A9A9A]">COMPRESSION</div>
                <div className="text-base text-emerald-400 font-semibold font-mono">-87.5%</div>
              </div>
              <div>
                <div className="text-[#9A9A9A]">RECALL</div>
                <div className="text-base text-[#FAFAFA] font-semibold font-mono">96.4% mAP</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#FAFAFA] hover:bg-white text-[#09090B] font-semibold text-sm rounded-sm tracking-tight flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>READ CASE STUDY</span>
                <ArrowDownRight size={16} />
              </MagneticButton>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Status */}
      <div className="max-w-7xl mx-auto w-full px-6 pb-8 flex flex-wrap items-center justify-between text-xs font-mono text-[#656570] border-t border-[#1C1C22] pt-4">
        <div>RESEARCH UNDERGRADUATE // IIT JODHPUR</div>
        <div>SIMD C++ & PYTHON OPENCV PIPELINES</div>
      </div>
    </section>
  );
}
