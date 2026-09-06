import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Sliders, Play, RefreshCw, Zap, Layers, Sparkles, Box, Compass } from 'lucide-react';
import { labExperiments } from '../data/lab.js';
import { usePageMeta } from '../hooks/usePageMeta';
import Hero3DNeural from '../components/canvas/Hero3DNeural.jsx';
import PageTransition from '../components/ui/PageTransition.jsx';

export default function LabPage({ onShowToast }) {
  usePageMeta({
    title: 'Experiments & 3D WebGL Lab — Shubham Sharma',
    description: 'Real-time in-browser engineering experiments: 3D Neural Manifold, 1-Bit Spatial Dither Engine, and Edge Silicon Latency Matrix.',
    path: '/experiments'
  });

  const [activeExperiment, setActiveExperiment] = useState('dither-engine');

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
    { id: 'V1', label: 'Query Embedding', x: queryPoint.x, y: queryPoint.y, color: '#6366F1' },
    { id: 'V2', label: 'Nearest Cluster A', x: 38, y: 42, color: '#34D399' },
    { id: 'V3', label: 'Semantic Cluster B', x: 74, y: 68, color: '#38BDF8' },
    { id: 'V4', label: 'Orthogonal Manifold', x: 22, y: 78, color: '#A855F7' }
  ];

  // Render interactive dither on canvas
  useEffect(() => {
    if (activeExperiment !== 'dither-engine') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = selectedImagePreset;
    img.onload = () => {
      canvas.width = 360;
      canvas.height = 360;

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
  }, [threshold, ditherScale, selectedImagePreset, activeExperiment]);

  // Run benchmark simulation pass
  const handleRunBenchmark = () => {
    setBenchRunning(true);
    setTimeout(() => {
      setBenchRunning(false);
      const latencyMult = quantMode === 'FP32' ? 3.8 : quantMode === 'INT8' ? 1.0 : 0.6;
      const throughputMult = quantMode === 'FP32' ? 0.35 : quantMode === 'INT8' ? 1.0 : 1.9;

      const baseLatency = (2.4 * latencyMult * (batchSize / 8)).toFixed(1);
      const baseThroughput = Math.round(3500 * throughputMult * (batchSize / 16));

      setBenchResults({
        p99Latency: `${baseLatency}ms`,
        throughput: `${baseThroughput.toLocaleString()} tokens/s`,
        bandwidth: `${Math.round(450 * throughputMult)} GB/s`,
        variance: `± 0.${Math.floor(Math.random() * 4) + 1}ms`
      });

      onShowToast?.({
        type: 'success',
        message: `Benchmark complete: ${quantMode} @ Batch ${batchSize} (P99=${baseLatency}ms)`
      });
    }, 700);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12 lg:py-20 bg-[#08080A] text-[#F4F4F0]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          {/* Editorial Header */}
          <div className="border-b border-[#1C1C22] pb-10">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#818CF8] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>EXPERIMENTAL LAB // VISUAL COMPUTATION</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mb-4">
              Algorithms, <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lowercase text-[#C7D2FE] mr-3">
                shaders &amp;
              </span>
              Prototypes
            </h1>
            
            <p className="text-base sm:text-lg text-[#9E9EA8] max-w-2xl font-light leading-relaxed">
              An interactive playground exploring 1-bit spatial error diffusion, real-time 3D WebGL neural manifolds, and edge silicon hardware execution profiles.
            </p>
          </div>

          {/* Experiment Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {labExperiments.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperiment(exp.id)}
                className={`p-5 rounded-sm border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  activeExperiment === exp.id
                    ? 'bg-[#16161D] border-[#6366F1] shadow-lg'
                    : 'bg-[#111114] border-[#1C1C24] hover:border-[#2E2E38] text-[#9E9EA8]'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#818CF8] font-semibold">{exp.badge}</span>
                    <span className="text-[#656570]">{exp.status}</span>
                  </div>
                  <h3 className="text-sm font-display font-semibold uppercase tracking-tight text-[#F4F4F2]">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#9E9EA8] leading-relaxed line-clamp-2">
                    {exp.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Experiment Viewport */}
          <div className="p-6 sm:p-8 bg-[#111114] border border-[#1C1C24] rounded-sm">
            
            {/* EXPERIMENT 1: 1-Bit Dither Engine */}
            {activeExperiment === 'dither-engine' && (
              <div className="space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1C1C22] pb-4">
                  <div>
                    <h2 className="text-xl font-display font-semibold uppercase text-[#F4F4F2]">
                      1-Bit Spatial Dither &amp; Halftone Engine
                    </h2>
                    <p className="text-xs font-mono text-[#9E9EA8] mt-0.5">
                      Transforms 8-bit luminance matrices into binary states using Bayer threshold distribution.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedImagePreset('/assets/sentinel_portrait.jpg')}
                      className={`px-3 py-1.5 rounded-sm text-xs font-mono border transition-colors cursor-pointer ${
                        selectedImagePreset.includes('sentinel')
                          ? 'bg-[#F4F4F0] text-[#08080A] font-semibold border-white'
                          : 'bg-[#16161B] border-[#272730] text-[#9E9EA8]'
                      }`}
                    >
                      Preset: Portrait
                    </button>
                    <button
                      onClick={() => setSelectedImagePreset('/assets/circuit_hardware.jpg')}
                      className={`px-3 py-1.5 rounded-sm text-xs font-mono border transition-colors cursor-pointer ${
                        selectedImagePreset.includes('circuit')
                          ? 'bg-[#F4F4F0] text-[#08080A] font-semibold border-white'
                          : 'bg-[#16161B] border-[#272730] text-[#9E9EA8]'
                      }`}
                    >
                      Preset: Circuit
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-[#08080A] border border-[#1C1C22] rounded-sm">
                    <canvas ref={canvasRef} className="max-w-full rounded-sm border border-[#272730]" />
                    <div className="mt-3 font-mono text-[10px] text-[#656570]">
                      1-BIT MONOCHROME MATRIX BUFFER
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#9E9EA8]">THRESHOLD CUTOFF</span>
                        <span className="text-[#818CF8] font-bold">{threshold} / 255</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="220"
                        value={threshold}
                        onChange={(e) => setThreshold(Number(e.target.value))}
                        className="w-full h-1.5 bg-[#1C1C24] rounded-lg cursor-pointer accent-[#6366F1]"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#9E9EA8]">BAYER BLOCK GRANULARITY</span>
                        <span className="text-[#818CF8] font-bold">{ditherScale}× Scale</span>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 4, 6, 8].map((scale) => (
                          <button
                            key={scale}
                            onClick={() => setDitherScale(scale)}
                            className={`flex-1 py-1.5 text-xs font-mono border rounded-sm transition-colors cursor-pointer ${
                              ditherScale === scale
                                ? 'bg-[#F4F4F0] text-[#08080A] font-bold border-white'
                                : 'bg-[#16161B] border-[#272730] text-[#9E9EA8]'
                            }`}
                          >
                            {scale}×
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* EXPERIMENT 2: 3D Neural Manifold Lab */}
            {activeExperiment === 'neural-3d-manifold' && (
              <div className="space-y-6">
                <div className="border-b border-[#1C1C22] pb-4">
                  <h2 className="text-xl font-display font-semibold uppercase text-[#F4F4F2]">
                    3D Neural Manifold &amp; Shaders
                  </h2>
                  <p className="text-xs font-mono text-[#9E9EA8] mt-0.5">
                    Real-time GPU icosahedron wireframe lattice with floating telemetry rings reacting to mouse pointer dynamics.
                  </p>
                </div>

                <div className="relative aspect-[16/9] w-full bg-[#08080A] border border-[#1C1C24] rounded-sm overflow-hidden flex items-center justify-center">
                  <Hero3DNeural className="w-full h-full" />
                  <div className="absolute bottom-4 left-4 text-[11px] font-mono text-[#9E9EA8] bg-[#111114]/80 p-2.5 border border-[#272730] rounded">
                    INTERACTIVE THREE.JS SCENE // POINTER RAYCASTING ACTIVE
                  </div>
                </div>
              </div>
            )}

            {/* EXPERIMENT 3: Edge Silicon Latency Matrix */}
            {activeExperiment === 'neural-latency-bench' && (
              <div className="space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1C1C22] pb-4">
                  <div>
                    <h2 className="text-xl font-display font-semibold uppercase text-[#F4F4F2]">
                      Edge Silicon Quantization &amp; Latency Matrix
                    </h2>
                    <p className="text-xs font-mono text-[#9E9EA8] mt-0.5">
                      Simulate memory bandwidth saturation and TensorRT INT8 vs FP32 inference cycles.
                    </p>
                  </div>
                  <button
                    onClick={handleRunBenchmark}
                    disabled={benchRunning}
                    className="px-4 py-2 bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-mono uppercase tracking-wider rounded-sm flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Play size={14} className={benchRunning ? "animate-spin" : ""} />
                    <span>{benchRunning ? "Simulating..." : "Run Benchmark Pass"}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#9E9EA8]">SELECT QUANTIZATION PROFILE:</div>
                    <div className="grid grid-cols-3 gap-2">
                      {['FP32', 'INT8', 'FP4'].map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setQuantMode(mode)}
                          className={`py-2 text-xs font-mono border rounded-sm transition-colors cursor-pointer ${
                            quantMode === mode
                              ? 'bg-[#F4F4F0] text-[#08080A] font-bold border-white'
                              : 'bg-[#16161B] border-[#272730] text-[#9E9EA8]'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>

                    <div className="text-xs font-mono text-[#9E9EA8] pt-2">BATCH SIZE SWEEP:</div>
                    <div className="grid grid-cols-4 gap-2">
                      {[4, 8, 16, 32].map((bs) => (
                        <button
                          key={bs}
                          onClick={() => setBatchSize(bs)}
                          className={`py-2 text-xs font-mono border rounded-sm transition-colors cursor-pointer ${
                            batchSize === bs
                              ? 'bg-[#F4F4F0] text-[#08080A] font-bold border-white'
                              : 'bg-[#16161B] border-[#272730] text-[#9E9EA8]'
                          }`}
                        >
                          Batch {bs}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-[#08080A] border border-[#1C1C24] rounded-sm font-mono text-xs space-y-3">
                    <div className="flex justify-between border-b border-[#1C1C24] pb-2">
                      <span className="text-[#656570]">ESTIMATED P99 LATENCY:</span>
                      <span className="text-emerald-400 font-bold">{benchResults.p99Latency}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#1C1C24] pb-2">
                      <span className="text-[#656570]">DEVICE THROUGHPUT:</span>
                      <span className="text-[#F4F4F2]">{benchResults.throughput}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#1C1C24] pb-2">
                      <span className="text-[#656570]">MEMORY BANDWIDTH:</span>
                      <span className="text-[#818CF8]">{benchResults.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#656570]">VARIANCE DRIFT:</span>
                      <span className="text-[#F4F4F2]">{benchResults.variance}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* EXPERIMENT 4: Vector Cosine Space Radar */}
            {activeExperiment === 'vector-similarity-radar' && (
              <div className="space-y-6">
                <div className="border-b border-[#1C1C22] pb-4">
                  <h2 className="text-xl font-display font-semibold uppercase text-[#F4F4F2]">
                    Cosine Vector Space Projection &amp; Recall
                  </h2>
                  <p className="text-xs font-mono text-[#9E9EA8] mt-0.5">
                    Click anywhere on the radar map to reposition Query Vector V1 and calculate real-time Cosine &amp; Euclidean distances.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                      const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
                      setQueryPoint({ x, y });
                    }}
                    className="lg:col-span-6 relative aspect-square bg-[#08080A] border border-[#1C1C24] rounded-sm p-4 cursor-crosshair overflow-hidden"
                  >
                    {/* Concentric distance rings */}
                    <div className="absolute inset-8 rounded-full border border-[#1C1C24] pointer-events-none" />
                    <div className="absolute inset-20 rounded-full border border-[#1C1C24] pointer-events-none" />
                    <div className="absolute inset-32 rounded-full border border-[#1C1C24] pointer-events-none" />

                    {/* Points */}
                    {samplePoints.map((pt) => (
                      <div
                        key={pt.id}
                        style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 transition-all duration-300"
                      >
                        <span
                          style={{ backgroundColor: pt.color }}
                          className="w-3 h-3 rounded-full shadow-lg ring-2 ring-black"
                        />
                        <span className="text-[10px] font-mono text-[#F4F4F2] bg-black/80 px-1 rounded">
                          {pt.id}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="lg:col-span-6 font-mono text-xs space-y-3">
                    <div className="p-4 bg-[#08080A] border border-[#1C1C24] rounded space-y-2">
                      <div className="text-[#818CF8] text-[11px]">QUERY VECTOR COORDINATES:</div>
                      <div className="text-[#F4F4F2]">X: {queryPoint.x}, Y: {queryPoint.y}</div>
                    </div>

                    <div className="p-4 bg-[#08080A] border border-[#1C1C24] rounded space-y-2">
                      <div className="text-[#656570] text-[11px]">TOPOLOGICAL DISTANCES TO NEAREST NODES:</div>
                      {samplePoints.slice(1).map((pt) => {
                        const dx = queryPoint.x - pt.x;
                        const dy = queryPoint.y - pt.y;
                        const dist = Math.sqrt(dx * dx + dy * dy).toFixed(1);
                        const cosineSim = (1 - dist / 141.4).toFixed(3);
                        return (
                          <div key={pt.id} className="flex justify-between text-[11px] border-t border-[#1C1C24] pt-1">
                            <span className="text-[#F4F4F2]">{pt.label} ({pt.id}):</span>
                            <span className="text-emerald-400">Cosine Sim: {cosineSim} (d={dist})</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
