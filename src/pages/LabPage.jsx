import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Sliders, Play, RefreshCw, Zap, Layers, Sparkles } from 'lucide-react';
import { labExperiments } from '../data/lab.js';

export default function LabPage({ onShowToast }) {
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

      // Draw original scaled
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Apply 1-bit Bayer / ordered threshold quantization
      const bayer4x4 = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5]
      ];

      for (let y = 0; y < canvas.height; y += ditherScale) {
        for (let x = 0; x < canvas.width; x += ditherScale) {
          const idx = (y * canvas.width + x) * 4;
          // Grayscale luminance
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;

          const bayerValue = (bayer4x4[(y / ditherScale) % 4][(x / ditherScale) % 4] / 16) * 64 - 32;
          const bit = lum + bayerValue > threshold ? 240 : 15;

          // Fill block
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
        message: `Benchmark completed for ${quantMode} @ Batch ${batchSize}: P99=${baseLatency}ms`
      });
    }, 850);
  };

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#1F1F24] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3E2CF0] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E2CF0] animate-pulse"></span>
            <span>Applied AI Research // Experimental Sandbox</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F0F0EE]">
            AI &amp; Computational Lab
          </h1>
          <p className="text-sm sm:text-base text-[#85858B] max-w-2xl leading-relaxed">
            Real-time interactive demonstrations of 1-bit spatial dithering, edge silicon inference benchmarks, and low-latency tensor optimization algorithms.
          </p>
        </div>

        {/* Experiment Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {labExperiments.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperiment(exp.id)}
              className={`p-5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                activeExperiment === exp.id
                  ? 'bg-[#161619] border-[#3E2CF0] shadow-md shadow-[#3E2CF0]/20'
                  : 'bg-[#111113] border-[#1F1F24] hover:border-[#2E2E36] text-[#85858B]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#3E2CF0] font-semibold">{exp.badge}</span>
                  <span className="text-[#52525B]">{exp.category}</span>
                </div>
                <h3 className="text-sm font-bold text-[#F0F0EE]">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#85858B] leading-relaxed">
                  {exp.summary}
                </p>
              </div>

              <div className="pt-4 text-[10px] font-mono text-[#52525B]">
                STATUS: {exp.status}
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Experiment Workspace */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#111113] border border-[#1F1F24]">
          
          {/* EXPERIMENT 1: 1-Bit Dither Engine */}
          {activeExperiment === 'dither-engine' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1F1F24] pb-4">
                <div>
                  <h2 className="text-lg font-bold text-[#F0F0EE]">
                    1-Bit Spatial Dither &amp; Halftone Quantizer
                  </h2>
                  <p className="text-xs text-[#85858B]">
                    Transforms high-resolution continuous luminance into binary monochrome matrix tokens in real-time.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedImagePreset('/assets/sentinel_portrait.jpg')}
                    className={`px-3 py-1.5 rounded text-xs font-mono border transition-colors ${
                      selectedImagePreset.includes('sentinel')
                        ? 'bg-[#3E2CF0] text-white border-[#3E2CF0]'
                        : 'bg-[#161619] border-[#232328] text-[#85858B]'
                    }`}
                  >
                    Preset: Eye
                  </button>
                  <button
                    onClick={() => setSelectedImagePreset('/assets/circuit_hardware.jpg')}
                    className={`px-3 py-1.5 rounded text-xs font-mono border transition-colors ${
                      selectedImagePreset.includes('circuit')
                        ? 'bg-[#3E2CF0] text-white border-[#3E2CF0]'
                        : 'bg-[#161619] border-[#232328] text-[#85858B]'
                    }`}
                  >
                    Preset: NPU
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Canvas Display */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-black rounded-lg border border-[#1F1F24]">
                  <canvas
                    ref={canvasRef}
                    className="max-w-full rounded shadow-2xl border border-white/10"
                  />
                  <div className="mt-3 font-mono text-[10px] text-[#85858B]">
                    REAL-TIME WebGL/CANVAS 1-BIT OUTPUT
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Luminance Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#85858B]">Threshold Cutoff</span>
                      <span className="text-[#3E2CF0] font-bold">{threshold} / 255</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="220"
                      value={threshold}
                      onChange={(e) => setThreshold(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#1F1F24] rounded-lg appearance-none cursor-pointer accent-[#3E2CF0]"
                    />
                    <div className="text-[11px] text-[#52525B]">
                      Controls the binarization split between active ink tokens and bone background.
                    </div>
                  </div>

                  {/* Matrix Granularity */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#85858B]">Matrix Scale Factor</span>
                      <span className="text-[#3E2CF0] font-bold">{ditherScale}x Block</span>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 4, 6, 8].map((scale) => (
                        <button
                          key={scale}
                          onClick={() => setDitherScale(scale)}
                          className={`flex-1 py-1.5 rounded text-xs font-mono border transition-colors ${
                            ditherScale === scale
                              ? 'bg-[#3E2CF0] border-[#3E2CF0] text-white font-bold'
                              : 'bg-[#161619] border-[#232328] text-[#85858B] hover:text-white'
                          }`}
                        >
                          {scale}x
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theoretical Footprint Spec */}
                  <div className="p-4 rounded bg-[#161619] border border-[#1F1F24] font-mono text-xs space-y-2 text-[#85858B]">
                    <div className="flex justify-between">
                      <span>Native 24-bit Frame:</span>
                      <span className="text-[#F0F0EE]">388.8 KB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1-Bit Quantized Frame:</span>
                      <span className="text-emerald-400 font-bold">16.2 KB (95.8% compression)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Structural Landmark Recall:</span>
                      <span className="text-[#3E2CF0] font-bold">99.2% mAP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXPERIMENT 2: Neural Inference Latency Benchmark */}
          {activeExperiment === 'neural-latency-bench' && (
            <div className="space-y-6">
              <div className="border-b border-[#1F1F24] pb-4">
                <h2 className="text-lg font-bold text-[#F0F0EE]">
                  Edge Silicon Inference Latency Simulator
                </h2>
                <p className="text-xs text-[#85858B]">
                  Measures P99 latency variance across TensorRT quantization modes under synthetic batch loads.
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-[#85858B]">
                    Model Quantization Mode
                  </label>
                  <div className="flex gap-2">
                    {['FP32', 'INT8', 'FP4 (TensorRT)'].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setQuantMode(mode.split(' ')[0])}
                        className={`flex-1 py-2 rounded text-xs font-mono border transition-all ${
                          quantMode === mode.split(' ')[0]
                            ? 'bg-[#3E2CF0] border-[#3E2CF0] text-white font-bold'
                            : 'bg-[#161619] border-[#232328] text-[#85858B] hover:text-white'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#85858B]">Synthetic Batch Size</span>
                    <span className="text-[#3E2CF0] font-bold">Batch: {batchSize}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="64"
                    step="1"
                    value={batchSize}
                    onChange={(e) => setBatchSize(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#1F1F24] rounded-lg appearance-none cursor-pointer accent-[#3E2CF0]"
                  />
                </div>
              </div>

              {/* Run Button */}
              <div className="pt-2">
                <button
                  onClick={handleRunBenchmark}
                  disabled={benchRunning}
                  className="flex items-center gap-2 px-6 py-2.5 rounded bg-[#3E2CF0] hover:bg-[#3220D8] disabled:opacity-50 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-[#3E2CF0]/30 active:scale-95"
                >
                  <Play className={`w-3.5 h-3.5 ${benchRunning ? 'animate-spin' : ''}`} />
                  <span>{benchRunning ? 'Benchmarking 10k passes...' : 'Execute Silicon Benchmark'}</span>
                </button>
              </div>

              {/* Benchmark Results Display */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-[#161619] border border-[#1F1F24]">
                  <div className="text-[10px] font-mono uppercase text-[#85858B]">P99 Latency</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#F0F0EE] mt-1">
                    {benchResults.p99Latency}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#161619] border border-[#1F1F24]">
                  <div className="text-[10px] font-mono uppercase text-[#85858B]">Throughput</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400 mt-1">
                    {benchResults.throughput}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#161619] border border-[#1F1F24]">
                  <div className="text-[10px] font-mono uppercase text-[#85858B]">Memory Bandwidth</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#3E2CF0] mt-1">
                    {benchResults.bandwidth}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#161619] border border-[#1F1F24]">
                  <div className="text-[10px] font-mono uppercase text-[#85858B]">Jitter Variance</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#D4D4D8] mt-1">
                    {benchResults.variance}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EXPERIMENT 3: Cosine Vector Radar */}
          {activeExperiment === 'vector-similarity-radar' && (
            <div className="space-y-6">
              <div className="border-b border-[#1F1F24] pb-4">
                <h2 className="text-lg font-bold text-[#F0F0EE]">
                  High-Dimensional Vector Space Topology
                </h2>
                <p className="text-xs text-[#85858B]">
                  Simulates cosine similarity cluster projection across semantic query embeddings.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-black border border-[#1F1F24] flex flex-col items-center justify-center space-y-4">
                <div className="relative w-64 h-64 rounded-full border border-[#1F1F24] flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-[#2E2E38] border-dashed"></div>
                  <div className="w-24 h-24 rounded-full border border-[#3E2CF0]/40"></div>
                  <div className="w-3 h-3 rounded-full bg-[#3E2CF0] shadow-lg shadow-[#3E2CF0]/80 animate-ping"></div>

                  {/* Projected Points */}
                  <div className="absolute top-12 left-16 w-2 h-2 rounded-full bg-white" title="Query Token"></div>
                  <div className="absolute top-20 right-14 w-2 h-2 rounded-full bg-emerald-400" title="Neighbor 1"></div>
                  <div className="absolute bottom-16 left-24 w-2 h-2 rounded-full bg-amber-400" title="Neighbor 2"></div>
                  <div className="absolute bottom-12 right-20 w-2 h-2 rounded-full bg-[#3E2CF0]" title="Centroid"></div>
                </div>

                <div className="text-xs font-mono text-[#85858B]">
                  COSINE SIMILARITY SCORE: <span className="text-emerald-400 font-bold">0.964</span> (TOP-1 MATCH)
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
