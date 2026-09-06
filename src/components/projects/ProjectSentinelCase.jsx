import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, ArrowRight, ExternalLink, Terminal, CheckCircle } from 'lucide-react';

export default function ProjectSentinelCase({ project, onOpenModal }) {
  const [activeTab, setActiveTab] = useState('architecture');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState('VERIFIED');

  const triggerVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifyStatus('VERIFIED 100% DETERMINISTIC');
    }, 500);
  };

  return (
    <article aria-label={project.title} className="py-16 border-b border-[#1C1C22]">
      {/* Editorial Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#818CF8] uppercase tracking-widest">[PROJECT 01 // FLAGSHIP ARCHITECTURE]</span>
          <span className="px-2 py-0.5 text-[10px] font-mono bg-[#18181F] text-emerald-400 border border-[#272734] rounded">
            PRODUCTION READY
          </span>
        </div>
        <div className="text-xs font-mono text-[#656570]">TIMELINE: 2024 • IIT JODHPUR</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Editorial Text & Specs (5 Cols) */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mb-4">
            {project.title}
          </h2>

          <p className="text-lg text-[#9E9EA8] font-light leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Technical Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono bg-[#111114] border border-[#272730] text-[#C7D2FE] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Benchmark Grid */}
          <div className="grid grid-cols-3 gap-3 border-y border-[#1C1C22] py-4 mb-8">
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <div className="text-[11px] font-mono text-[#656570] uppercase">{metric.label}</div>
                <div className="text-base font-mono font-semibold text-[#F4F4F2] mt-1">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Action Trigger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenModal(project)}
              className="px-6 py-3 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-semibold text-xs font-mono uppercase tracking-wider rounded-sm flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Read Full Case Study</span>
              <ArrowRight size={14} />
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#272730] hover:border-[#6366F1] bg-[#111114] text-[#9E9EA8] hover:text-white rounded-sm transition-colors"
              title="View Repository"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Right Interactive Architecture & Telemetry Visualization (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="border border-[#272730] bg-[#111114] rounded-sm overflow-hidden shadow-2xl">
            
            {/* Visualizer Top Bar */}
            <div className="px-5 py-3.5 bg-[#16161B] border-b border-[#272730] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#F4F4F2]">
                <Cpu size={15} className="text-[#818CF8]" />
                <span>HARDWARE VERIFICATION PIPELINE // ZERO-COPY</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'architecture' ? 'bg-[#272734] text-white' : 'text-[#9E9EA8] hover:text-white'}`}
                >
                  PIPELINE
                </button>
                <button
                  onClick={() => setActiveTab('simulator')}
                  className={`px-2.5 py-1 rounded transition-colors ${activeTab === 'simulator' ? 'bg-[#272734] text-white' : 'text-[#9E9EA8] hover:text-white'}`}
                >
                  LIVE SIMULATOR
                </button>
              </div>
            </div>

            {/* Visualizer Body */}
            {activeTab === 'architecture' ? (
              <div className="p-6">
                <div className="relative aspect-[16/9] overflow-hidden rounded border border-[#272730] mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F4F4F2] bg-[#0C0C0E]/80 backdrop-blur-sm p-3 border border-[#272730]">
                    <span>CRYPTO DIGEST: SHA-256 TREE</span>
                    <span className="text-emerald-400">STATUS: TAMPER-RESISTANT</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs text-[#9E9EA8]">
                  <div className="p-3 bg-[#0C0C0E] border border-[#1F1F26] rounded">
                    <div className="text-[#656570] text-[10px] uppercase">STEP 01</div>
                    <div className="text-[#F4F4F2] font-semibold mt-1">Memory-Mapped Buffers</div>
                    <div className="text-[11px] mt-1 text-[#656570]">Zero-copy ingestion of INT8 neural weights</div>
                  </div>
                  <div className="p-3 bg-[#0C0C0E] border border-[#1F1F26] rounded">
                    <div className="text-[#656570] text-[10px] uppercase">STEP 02</div>
                    <div className="text-[#F4F4F2] font-semibold mt-1">Hierarchical Merkle Hash</div>
                    <div className="text-[11px] mt-1 text-[#656570]">Chunked hashing in &lt;4.2ms latency</div>
                  </div>
                  <div className="p-3 bg-[#0C0C0E] border border-[#1F1F26] rounded">
                    <div className="text-[#656570] text-[10px] uppercase">STEP 03</div>
                    <div className="text-[#F4F4F2] font-semibold mt-1">TensorRT Handoff</div>
                    <div className="text-[11px] mt-1 text-[#656570]">Safe execution on physical edge hardware</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#9E9EA8]">SIMULATE TAMPER DETECTION IN INT8 WEIGHT MATRIX</span>
                  <button
                    onClick={triggerVerification}
                    disabled={isVerifying}
                    className="px-3 py-1 bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-mono rounded cursor-pointer transition-colors"
                  >
                    {isVerifying ? "Attesting..." : "Run Attestation Pass"}
                  </button>
                </div>

                <div className="p-4 bg-[#08080A] border border-[#1F1F26] rounded font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-[#9E9EA8]">
                    <span>MODEL TARGET:</span>
                    <span className="text-[#F4F4F2]">ResNet-50_INT8_Quantized</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9E9EA8]">
                    <span>PHYSICAL MEMORY ADDRESS:</span>
                    <span className="text-[#818CF8]">0x7FFEE3819A00</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9E9EA8]">
                    <span>TENSOR CHUNKS AUDITED:</span>
                    <span className="text-[#F4F4F2]">54 Layers (25.6 MB total)</span>
                  </div>
                  <div className="pt-2 border-t border-[#1C1C24] flex items-center justify-between">
                    <span className="text-[#656570]">INTEGRITY RESULT:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle size={14} /> {verifyStatus}
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </article>
  );
}
