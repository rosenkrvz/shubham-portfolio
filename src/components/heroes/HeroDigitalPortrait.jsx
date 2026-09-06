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
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#272730] bg-[#111114] text-xs font-mono text-[#818CF8]">
              <Eye size={13} />
              <span>SPATIAL ERROR DIFFUSION RESEARCH</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter uppercase font-display leading-[0.94] text-[#F4F4F0] mb-6">
              1-Bit <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lowercase text-[#C7D2FE] mr-2">
                perceptual
              </span>
              Extraction
            </h1>

            <p className="text-base sm:text-lg text-[#9E9EA8] font-light leading-relaxed mb-6">
              Converting heavy 24-bit RGB video frames into 1-bit spatial error-diffused rasters that preserve structural facial contours and edge boundaries at 120+ FPS on resource-constrained microprocessors.
            </p>

            <div className="grid grid-cols-3 gap-4 border-y border-[#1C1C22] py-4 mb-8 text-xs font-mono">
              <div>
                <div className="text-[#656570]">LATENCY</div>
                <div className="text-base text-[#F4F4F2] font-semibold">120+ FPS</div>
              </div>
              <div>
                <div className="text-[#656570]">COMPRESSION</div>
                <div className="text-base text-emerald-400 font-semibold">-87.5%</div>
              </div>
              <div>
                <div className="text-[#656570]">RECALL</div>
                <div className="text-base text-[#818CF8] font-semibold">96.4% mAP</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton
                onClick={onExploreClick}
                className="px-6 py-3.5 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-semibold text-sm rounded-sm tracking-tight flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Read Full Vision Case Study</span>
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
