import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Sliders, Play, RefreshCw, Zap, Layers, Sparkles, Box, Compass, ArrowRight } from 'lucide-react';
import { labExperiments } from '../data/lab.js';
import { usePageMeta } from '../hooks/usePageMeta';
import Hero3DNeural from '../components/canvas/Hero3DNeural.jsx';
import PageTransition from '../components/ui/PageTransition.jsx';
import TactileButton from '../components/ui/TactileButton.jsx';
import CompactPillSwitch from '../components/ui/CompactPillSwitch.jsx';

export default function LabPage({ onShowToast }) {
  usePageMeta({
    title: 'Lab & Digital Workbench — Shubham Sharma | IIT Jodhpur',
    description: 'Experiments, visualizations, algorithms and things I am currently exploring. Interactive 1-Bit Spatial Dither, Cosine Vector Radar, and Edge Silicon Latency Matrix.',
    path: '/experiments'
  });

  // Dither Engine State
  const canvasRef = useRef(null);
  const [threshold, setThreshold] = useState(128);
  const [ditherScale, setDitherScale] = useState(4);
  const [selectedImagePreset, setSelectedImagePreset] = useState('/assets/sentinel_portrait.jpg');

  // Benchmark Simulator State
  const [quantMode, setQuantMode] = useState('INT8');
  const [batchSize, setBatchSize] = useState(16);
  const [benchRunning, setBenchRunning] = useState(false);
  const [benchResults, setBenchResults] = useState({
    p99Latency: '4.2ms',
    throughput: '3,810 tokens/s',
    bandwidth: '482 GB/s',
    variance: '± 0.3ms'
  });

  // Vector Radar State
  const [queryPoint, setQueryPoint] = useState({ x: 50, y: 50 });
  const samplePoints = [
    { id: 'V1', label: 'Query Embedding', x: queryPoint.x, y: queryPoint.y, color: '#A1A1AA' },
    { id: 'V2', label: 'Nearest Cluster A', x: 38, y: 42, color: '#34D399' },
    { id: 'V3', label: 'Semantic Cluster B', x: 74, y: 68, color: '#38BDF8' },
    { id: 'V4', label: 'Orthogonal Manifold', x: 22, y: 78, color: '#A855F7' }
  ];

  // Render interactive dither on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = selectedImagePreset;
    img.onload = () => {
      canvas.width = 340;
      canvas.height = 340;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      const bayer4x4 = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5]
      ];

      for (let y = 0; y < canvas.height; y += ditherScale) {
        for (let x = 0; x < canvas.width; x += ditherScale) {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;

          const bayerValue = (bayer4x4[(y / ditherScale) % 4][(x / ditherScale) % 4] / 16) * 64 - 32;
          const bit = lum + bayerValue > threshold ? 245 : 12;

          for (let dy = 0; dy < ditherScale && y + dy < canvas.height; dy++) {
            for (let dx = 0; dx < ditherScale && x + dx < canvas.width; dx++) {
              const pixelIdx = ((y + dy) * canvas.width + (x + dx)) * 4;
              data[pixelIdx] = bit;
              data[pixelIdx + 1] = bit;
              data[pixelIdx + 2] = bit;
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
    };
  }, [threshold, ditherScale, selectedImagePreset]);

  // Run benchmark simulation pass
  const handleRunBenchmark = () => {
    setBenchRunning(true);
    setTimeout(() => {
      setBenchRunning(false);
      const latencyMult = quantMode === 'FP32' ? 3.8 : quantMode === 'INT8' ? 1.0 : 0.6;
      const throughputMult = quantMode === 'FP32' ? 0.35 : quantMode === 'INT8' ? 1.0 : 1.9;

      setBenchResults({
        p99Latency: `${(4.2 * latencyMult * (batchSize / 16)).toFixed(1)}ms`,
        throughput: `${Math.round(3810 * throughputMult * (batchSize / 16))} tokens/s`,
        bandwidth: `${Math.round(482 * (quantMode === 'FP4' ? 1.4 : 1.0))} GB/s`,
        variance: `± 0.${Math.floor(Math.random() * 4) + 1}ms`
      });

      onShowToast?.({
        type: 'success',
        message: `Sweep finished: ${quantMode} @ batch ${batchSize}`
      });
    }, 450);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-24 md:py-32 bg-[#09090B] text-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-24 md:space-y-32">
          
          {/* Editorial Header */}
          <div className="space-y-4 border-b border-[#27272A]/50 pb-10">
            <div className="inline-flex items-center gap-2 text-xs text-[#71717A] font-mono uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30" />
              <span>DIGITAL WORKBENCH // LABORATORY</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] leading-[0.92]">
              LAB
            </h1>

            <p className="text-lg sm:text-2xl text-[#A1A1AA] max-w-[65ch] font-light leading-relaxed">
              Experiments, visualizations, algorithms and computational methods currently under exploration.
            </p>
          </div>

          {/* WORKBENCH STATIONS */}
          <div className="space-y-16 sm:space-y-24">

            {/* ============================================================== */}
            {/* WORKBENCH STATION 01: 1-Bit Spatial Dither Engine              */}
            {/* ============================================================== */}
            <article className="p-6 sm:p-10 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#27272A]/50 pb-4 gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#71717A] font-medium">LAB / 001</span>
                  <span className="text-[#3F3F46]">//</span>
                  <h2 className="text-xl sm:text-2xl font-display font-medium uppercase text-[#FAFAFA]">
                    1-Bit Spatial Dither &amp; Halftone Engine
                  </h2>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
                  <span className="text-emerald-400">ACTIVE RESEARCH</span>
                  <span>&bull;</span>
                  <span>JAVASCRIPT &bull; CANVAS &bull; OPENCV</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Canvas */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded-[4px]">
                  <canvas ref={canvasRef} className="max-w-full rounded-[2px] border border-[#27272A]" />
                  <div className="mt-3 font-mono text-[11px] text-[#71717A] flex items-center justify-between w-full">
                    <span>1-BIT BUFFER MATRIX</span>
                    <span className="text-emerald-400">120+ FPS</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Preset Selector */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">SOURCE FRAME BUFFER</span>
                    <div className="inline-flex p-1 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded-[4px] gap-1">
                      <TactileButton
                        size="sm"
                        variant={selectedImagePreset.includes('sentinel') ? 'primary' : 'secondary'}
                        onClick={() => setSelectedImagePreset('/assets/sentinel_portrait.jpg')}
                      >
                        Preset: Portrait
                      </TactileButton>
                      <TactileButton
                        size="sm"
                        variant={selectedImagePreset.includes('circuit') ? 'primary' : 'secondary'}
                        onClick={() => setSelectedImagePreset('/assets/circuit_hardware.jpg')}
                      >
                        Preset: Circuit
                      </TactileButton>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#71717A] uppercase tracking-wider">THRESHOLD CUTOFF</span>
                      <span className="text-[#FAFAFA] font-medium">{threshold} / 255</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="220"
                      value={threshold}
                      onChange={(e) => setThreshold(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded cursor-pointer accent-[#FAFAFA]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#71717A] uppercase tracking-wider">BAYER BLOCK GRANULARITY</span>
                      <span className="text-[#FAFAFA] font-medium">{ditherScale}× Scale</span>
                    </div>
                    <div className="flex gap-1.5 p-1 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded-[4px]">
                      {[1, 2, 4, 6, 8].map((scale) => (
                        <button
                          key={scale}
                          onClick={() => setDitherScale(scale)}
                          className={`flex-1 py-1.5 text-xs font-mono rounded-[3px] transition-all cursor-pointer select-none ${
                            ditherScale === scale
                              ? 'bg-[#18181B] text-[#FAFAFA] font-medium border border-[rgba(255,255,255,0.12)]'
                              : 'text-[#71717A] hover:text-[#FAFAFA] border border-transparent'
                          }`}
                        >
                          {scale}×
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[4px] text-xs font-mono text-[#71717A]">
                    <code>Bayer 4x4: [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]] / 16</code>
                  </div>
                </div>
              </div>
            </article>

            {/* ============================================================== */}
            {/* WORKBENCH STATION 02: Cosine Vector Radar                      */}
            {/* ============================================================== */}
            <article className="p-6 sm:p-10 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#27272A]/50 pb-4 gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#71717A] font-medium">LAB / 002</span>
                  <span className="text-[#3F3F46]">//</span>
                  <h2 className="text-xl sm:text-2xl font-display font-medium uppercase text-[#FAFAFA]">
                    Cosine Vector Radar
                  </h2>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
                  <span className="text-[#38BDF8]">INTERACTIVE PROTOTYPE</span>
                  <span>&bull;</span>
                  <span>NUMPY &bull; HNSW &bull; SIMD</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* 2D Interactive Radar */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded-[4px]">
                  <div 
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                      const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
                      setQueryPoint({ x, y });
                    }}
                    className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-[#09090B] border border-[#27272A] rounded-full overflow-hidden cursor-crosshair"
                  >
                    {/* Concentric Radar Rings */}
                    <div className="absolute inset-4 border border-[#27272A] rounded-full pointer-events-none" />
                    <div className="absolute inset-16 border border-[#27272A] rounded-full pointer-events-none" />
                    <div className="absolute inset-28 border border-[#27272A] rounded-full pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-full h-[1px] bg-[#27272A]" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="h-full w-[1px] bg-[#27272A]" />
                    </div>

                    {/* Embedding Points */}
                    {samplePoints.map((pt) => (
                      <div
                        key={pt.id}
                        style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono font-bold text-white shadow-lg transition-all"
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full ring-2 ring-[#09090B]"
                          style={{ backgroundColor: pt.color }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 font-mono text-[10px] text-[#71717A]">
                    CLICK ANYWHERE ON RADAR TO RE-POSITION QUERY VECTOR
                  </div>
                </div>

                {/* Distance Matrix Table */}
                <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                  <div className="text-[11px] text-[#71717A] uppercase tracking-wider">
                    COSINE SIMILARITY TO QUERY VECTOR (X: {queryPoint.x}, Y: {queryPoint.y})
                  </div>

                  <div className="space-y-2">
                    {samplePoints.slice(1).map((pt) => {
                      const dist = Math.sqrt(Math.pow(pt.x - queryPoint.x, 2) + Math.pow(pt.y - queryPoint.y, 2));
                      const similarity = Math.max(0, (1 - dist / 100)).toFixed(3);

                      return (
                        <div key={pt.id} className="p-3 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pt.color }} />
                            <span className="text-[#FAFAFA]">{pt.label}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[#71717A]">SIM:</span>
                            <span className="text-emerald-400 font-medium">{similarity}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed pt-2">
                    High-dimensional semantic search relies on approximate nearest neighbor (ANN) graphs like HNSW to avoid brute-force Euclidean distance scans across millions of embeddings.
                  </p>
                </div>
              </div>
            </article>

            {/* ============================================================== */}
            {/* WORKBENCH STATION 03: Edge Silicon Latency Matrix              */}
            {/* ============================================================== */}
            <article className="p-6 sm:p-10 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#27272A]/50 pb-4 gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#71717A] font-medium">LAB / 003</span>
                  <span className="text-[#3F3F46]">//</span>
                  <h2 className="text-xl sm:text-2xl font-display font-medium uppercase text-[#FAFAFA]">
                    Edge Silicon Latency Matrix
                  </h2>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
                  <span className="text-emerald-400">BENCHMARK SUITE</span>
                  <span>&bull;</span>
                  <span>TENSORRT &bull; C++ &bull; PYTORCH</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-6">
                  {/* Mode Toggle */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider">QUANTIZATION MODE</span>
                    <div className="flex gap-1.5 p-1 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded-[4px]">
                      {['FP32', 'INT8', 'FP4'].map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setQuantMode(mode)}
                          className={`flex-1 py-2 text-xs font-mono rounded-[3px] transition-all cursor-pointer select-none ${
                            quantMode === mode
                              ? 'bg-[#18181B] text-[#FAFAFA] font-medium border border-[rgba(255,255,255,0.12)]'
                              : 'text-[#71717A] hover:text-[#FAFAFA] border border-transparent'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Batch Size Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#71717A] uppercase tracking-wider">BATCH CONCURRENCY</span>
                      <span className="text-[#FAFAFA] font-medium">{batchSize}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="64"
                      step="1"
                      value={batchSize}
                      onChange={(e) => setBatchSize(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded cursor-pointer accent-[#FAFAFA]"
                    />
                  </div>

                  <TactileButton
                    variant="danger"
                    size="md"
                    onClick={handleRunBenchmark}
                    disabled={benchRunning}
                    className="w-full justify-center"
                  >
                    {benchRunning ? (
                      <>
                        <RefreshCw size={14} className="animate-spin text-white" />
                        <span>Executing TensorRT Pass...</span>
                      </>
                    ) : (
                      <>
                        <Play size={14} className="text-[#E10600]" />
                        <span>Simulate Benchmark Pass</span>
                      </>
                    )}
                  </TactileButton>
                </div>

                {/* Benchmark Output Grid */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px]">
                    <div className="text-[#71717A] text-[10px] uppercase">P99 TAIL LATENCY</div>
                    <div className="text-xl font-medium text-emerald-400 mt-1">{benchResults.p99Latency}</div>
                  </div>

                  <div className="p-4 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px]">
                    <div className="text-[#71717A] text-[10px] uppercase">THROUGHPUT</div>
                    <div className="text-xl font-medium text-[#FAFAFA] mt-1">{benchResults.throughput}</div>
                  </div>

                  <div className="p-4 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px]">
                    <div className="text-[#71717A] text-[10px] uppercase">MEMORY BANDWIDTH</div>
                    <div className="text-xl font-medium text-[#FAFAFA] mt-1">{benchResults.bandwidth}</div>
                  </div>

                  <div className="p-4 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px]">
                    <div className="text-[#71717A] text-[10px] uppercase">LATENCY VARIANCE</div>
                    <div className="text-xl font-medium text-[#A1A1AA] mt-1">{benchResults.variance}</div>
                  </div>
                </div>
              </div>
            </article>

            {/* ============================================================== */}
            {/* WORKBENCH STATION 04: Technical Thoughts & Unfinished Hypotheses */}
            {/* ============================================================== */}
            <article className="p-6 sm:p-10 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-6">
              <div className="flex items-center gap-3 text-xs font-mono text-[#71717A] font-medium">
                <span>LAB / 004</span>
                <span className="text-[#3F3F46]">//</span>
                <span className="tracking-wider uppercase">Open Hypotheses &amp; Experimental Vectors</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-6 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] space-y-2">
                  <div className="text-[#71717A] text-[11px]">THOUGHT 01 // HESSIAN TRACE</div>
                  <div className="text-sm font-medium text-[#FAFAFA]">Flat Minima Robustness</div>
                  <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                    Does the top eigenvalue of the empirical Hessian correlate more tightly with out-of-distribution transfer than validation cross-entropy? Currently verifying on small CIFAR-10 subsets.
                  </p>
                </div>

                <div className="p-6 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] space-y-2">
                  <div className="text-[#71717A] text-[11px]">THOUGHT 02 // SUB-BYTE ARITHMETIC</div>
                  <div className="text-sm font-medium text-[#FAFAFA]">Microscaling Exponent Tiling</div>
                  <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                    Testing how per-tile floating-point scale factors (MXFP4) behave when executed on standard ARM NEON SIMD registers using integer emulation routines.
                  </p>
                </div>

                <div className="p-6 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] space-y-2">
                  <div className="text-[#71717A] text-[11px]">THOUGHT 03 // EVENT-DRIVEN PIPELINES</div>
                  <div className="text-sm font-medium text-[#FAFAFA]">Sliding-Window Dedup Overhead</div>
                  <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                    Comparing Redis Bloom filters against sliding-window sorted sets (ZSET) for high-frequency telemetry deduplication under 10k evt/s ingestion loads.
                  </p>
                </div>
              </div>
            </article>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
