import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton.jsx';
import { ShieldCheck, Cpu, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HeroProjectFirst({ onOpenProject, onExploreClick }) {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(true);
  const [hash, setHash] = useState("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");

  const runLiveAttestation = () => {
    setVerifying(true);
    setTimeout(() => {
      const randomPart = Math.random().toString(16).substring(2, 10);
      setHash(`7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f${randomPart}`);
      setVerifying(false);
      setVerified(true);
    }, 600);
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between border-b border-[#1C1C22] bg-[#08080A] overflow-hidden">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-10 flex flex-wrap items-center justify-between text-xs font-mono text-[#9E9EA8] border-b border-[#1C1C22] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>PROJECT-FIRST HERO // SENTINEL NPU ENGINE</span>
        </div>
        <div>HARDWARE WEIGHT INTEGRITY RUNTIME</div>
      </div>

      {/* Main Flagship Content */}
      <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
        
        {/* Left Information (6 cols) */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#272730] bg-[#111114] text-xs font-mono text-[#818CF8]">
              <Cpu size={14} />
              <span>EDGE AI RUNTIME VERIFICATION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter uppercase font-display leading-[0.95] text-[#F4F4F0] mb-6">
              Sentinel <br />
              <span className="font-serif-editorial italic font-normal text-3xl sm:text-5xl lg:text-6xl lowercase text-[#C7D2FE] mr-3">
                neural
              </span>
              Attestation
            </h1>

            <p className="text-base sm:text-lg text-[#9E9EA8] font-light leading-relaxed mb-6">
              A lightweight cryptographic verification runtime that validates INT8 neural network layer weights against tamper-evident digests in &lt;4.2ms before high-consequence edge inference.
            </p>

            <div className="grid grid-cols-3 gap-3 border-y border-[#1C1C22] py-4 mb-8 text-xs font-mono">
              <div>
                <div className="text-[#656570]">VERIFY LATENCY</div>
                <div className="text-sm sm:text-base text-emerald-400 font-semibold">&lt; 4.2ms</div>
              </div>
              <div>
                <div className="text-[#656570]">MEMORY FOOTPRINT</div>
                <div className="text-sm sm:text-base text-[#F4F4F2] font-semibold">1.2 MB</div>
              </div>
              <div>
                <div className="text-[#656570]">DRIFT DETECTION</div>
                <div className="text-sm sm:text-base text-[#818CF8] font-semibold">100% Deterministic</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={() => onOpenProject && onOpenProject({ id: 'sentinel-npu' })}
                className="px-6 py-3.5 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-semibold text-sm rounded-sm tracking-tight flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Read Architecture Case Study</span>
                <ArrowRight size={16} />
              </MagneticButton>

              <button
                onClick={onExploreClick}
                className="text-xs font-mono uppercase tracking-wider text-[#9E9EA8] hover:text-white transition-colors"
              >
                Browse All 4 Projects &darr;
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Live Hardware & Attestation Widget (6 cols) */}
        <div className="lg:col-span-6">
          <div className="border border-[#272730] bg-[#111114] p-6 rounded-sm shadow-2xl relative overflow-hidden">
            {/* Background Circuit Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4338CA]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-[#1C1C22] mb-6 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#F4F4F2]">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>HARDWARE TENSOR ATTESTATION</span>
              </div>
              <button
                onClick={runLiveAttestation}
                disabled={verifying}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#1C1C24] hover:bg-[#272734] text-xs font-mono text-[#818CF8] rounded cursor-pointer transition-colors"
              >
                <RefreshCw size={12} className={verifying ? "animate-spin" : ""} />
                <span>{verifying ? "Hashing..." : "Re-Verify"}</span>
              </button>
            </div>

            {/* Simulated Memory Layers */}
            <div className="space-y-3 font-mono text-xs mb-6">
              <div className="p-3 bg-[#0C0C0E] border border-[#1F1F28] rounded flex items-center justify-between">
                <div>
                  <span className="text-[#656570]">LAYER 01: </span>
                  <span className="text-[#F4F4F2]">Conv2d_Quant_INT8 (256x256)</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Digest Match
                </span>
              </div>

              <div className="p-3 bg-[#0C0C0E] border border-[#1F1F28] rounded flex items-center justify-between">
                <div>
                  <span className="text-[#656570]">LAYER 02: </span>
                  <span className="text-[#F4F4F2]">Residual_Attention_Block_03</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Digest Match
                </span>
              </div>

              <div className="p-3 bg-[#0C0C0E] border border-[#1F1F28] rounded flex items-center justify-between">
                <div>
                  <span className="text-[#656570]">LAYER 03: </span>
                  <span className="text-[#F4F4F2]">Dense_Classification_Head</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Digest Match
                </span>
              </div>
            </div>

            {/* Dynamic Hash Display */}
            <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-[11px] font-mono">
              <div className="text-[#656570] mb-1">COMPUTED MERKLE TENSOR DIGEST:</div>
              <div className="text-[#818CF8] break-all select-all font-semibold">{hash}</div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#656570]">
              <span>ZERO COPY TENSORRT HANDOFF</span>
              <span className="text-emerald-400 font-semibold">STATE: SECURE</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Telemetry */}
      <div className="max-w-7xl mx-auto w-full px-6 pb-8 flex flex-wrap items-center justify-between text-xs font-mono text-[#656570] border-t border-[#1C1C22] pt-4">
        <div>BUILT WITH PYTORCH C++ EXTENSIONS & TENSORRT</div>
        <div>IIT JODHPUR • SHUBHAM SHARMA</div>
      </div>
    </section>
  );
}
