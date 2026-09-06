import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, BarChart3, Cpu, Sparkles, ArrowRight } from 'lucide-react';

const NODES = [
  {
    id: 'data',
    label: 'DATA',
    tag: '01 // INGESTION',
    desc: 'Empirical distributions, feature normalization, and streaming telemetry datasets.',
    formula: 'X \\sim \\mathcal{P}_{\\text{data}}(x)',
    icon: Database,
    color: '#818CF8'
  },
  {
    id: 'models',
    label: 'MODELS',
    tag: '02 // ARCHITECTURE',
    desc: 'Inductive bias, neural weights, tree ensembles, and mathematical loss landscapes.',
    formula: '\\min_\\theta \\mathbb{E}[\\mathcal{L}(f_\\theta(x), y)]',
    icon: Brain,
    color: '#38BDF8'
  },
  {
    id: 'analysis',
    label: 'ANALYSIS',
    tag: '03 // VERIFICATION',
    desc: 'SHAP feature attribution, out-of-distribution drift detection, and calibration.',
    formula: '\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F|-|S|-1)!}{|F|!} \\Delta(S)',
    icon: BarChart3,
    color: '#34D399'
  },
  {
    id: 'systems',
    label: 'SYSTEMS',
    tag: '04 // RUNTIME',
    desc: 'Memory-mapped buffers, zero-copy TensorRT contexts, and async event dispatch.',
    formula: '\\text{Latency}_{p99} < 4.2\\text{ms}',
    icon: Cpu,
    color: '#A78BFA'
  },
  {
    id: 'experiments',
    label: 'EXPERIMENTS',
    tag: '05 // FRONTIER',
    desc: '1-bit spatial error diffusion, algorithmic shaders, and interactive manifolds.',
    formula: 'e_{x+1, y} \\leftarrow e_{x+1, y} + \\frac{7}{16}\\delta',
    icon: Sparkles,
    color: '#E10600'
  }
];

export default function SignalFlowVisual() {
  const [activeNode, setActiveNode] = useState(1);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 border-b border-[#1C1C22] bg-[#070709] overflow-hidden">
      {/* Background ambient gridlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #1C1C22 1px, transparent 1px), linear-gradient(to bottom, #1C1C22 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-6 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30 animate-pulse" />
              <span>02 // COMPUTATIONAL PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
              Continuous <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">signal</span> flow
            </h2>
          </div>

          <div className="text-xs font-mono text-[#656570] max-w-md">
            From raw data generating processes to mathematical optimization, hardware execution, and creative computation.
          </div>
        </div>

        {/* Full-width interactive flow track */}
        <div className="relative w-full py-8">
          
          {/* Animated Connecting SVG Wire */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-1 z-0">
            <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
              <line
                x1="0%"
                y1="4"
                x2="100%"
                y2="4"
                stroke="#1F1F28"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.line
                x1="0%"
                y1="4"
                x2="100%"
                y2="4"
                stroke="url(#signalGradient)"
                strokeWidth="2"
                strokeDasharray="40 120"
                strokeDashoffset={-tick * 4}
              />
              <defs>
                <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="25%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#34D399" />
                  <stop offset="75%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#E10600" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Nodes Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {NODES.map((node, index) => {
              const Icon = node.icon;
              const isSelected = activeNode === index;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(index)}
                  className={`group relative p-6 transition-all duration-300 cursor-pointer border-b-2 ${
                    isSelected
                      ? 'border-[#E10600] bg-[#101014]/90'
                      : 'border-transparent hover:border-[#383842] bg-[#0B0B0E]/60'
                  }`}
                >
                  {/* Step Num & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-10 h-10 rounded-sm flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: isSelected ? `${node.color}15` : '#141418',
                        color: isSelected ? node.color : '#9E9EA8'
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <span className="text-xs font-mono text-[#656570] group-hover:text-[#9E9EA8]">
                      {node.tag.slice(0, 2)}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="text-xl font-display font-bold uppercase tracking-tight text-[#F4F4F2] mb-1">
                    {node.label}
                  </div>

                  <div className="text-[11px] font-mono text-[#656570] mb-3">
                    {node.tag}
                  </div>

                  <p className="text-xs text-[#9E9EA8] font-light leading-relaxed mb-4">
                    {node.desc}
                  </p>

                  {/* Formula Preview */}
                  <div className="p-2 bg-[#08080A] border border-[#1C1C24] rounded-sm font-mono text-[10px] text-[#818CF8] truncate">
                    <code>{node.formula}</code>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Telemetry Panel for the selected stage */}
        <div className="mt-8 pt-6 border-t border-[#1C1C22] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-[#9E9EA8]">
          <div className="flex items-center gap-3">
            <span className="text-[#F4F4F2] font-semibold">STAGE {activeNode + 1} OF 5:</span>
            <span className="text-[#818CF8] uppercase tracking-wider">{NODES[activeNode].label}</span>
            <span className="text-[#656570]">—</span>
            <span className="text-[#9E9EA8]">{NODES[activeNode].desc}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#656570]">
            <span>FLOW RATE: DETERMINISTIC</span>
            <span className="text-[#E10600]">●</span>
          </div>
        </div>

      </div>
    </section>
  );
}
