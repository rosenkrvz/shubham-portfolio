import React, { useState } from 'react';
import { Database, Binary, Cpu, BarChart3, CheckCircle2, ArrowRight, Layers, Terminal } from 'lucide-react';

/**
 * PipelineFlowDiagram
 * Visualizes the explicit engineering & ML pipeline flow:
 * AI: DATASET -> PREPROCESSING -> FEATURE ENGINEERING -> MODEL -> EVALUATION -> RESULT
 * Systems: INPUT -> INGESTION -> ASYNC LOGIC -> STORAGE -> OUTPUT
 */
export default function PipelineFlowDiagram({ mode = "ai", stages = [], className = "" }) {
  const defaultAiStages = [
    {
      id: "dataset",
      num: "01",
      title: "Raw Dataset",
      tech: "Tensor Streams / Shards",
      shape: "[B, 3, 224, 224] @ FP32",
      detail: "Normalized distribution across multi-camera optical sensors with stratified train/validation partitions.",
      icon: Database
    },
    {
      id: "preprocessing",
      num: "02",
      title: "Quantization & Dither",
      tech: "Bayer Matrix Kernel",
      shape: "[B, 1, 224, 224] @ 1-Bit",
      detail: "Spatial luminance error diffusion reducing payload footprint by 87.5% prior to edge tensor ingestion.",
      icon: Binary
    },
    {
      id: "feature_eng",
      num: "03",
      title: "Attestation Digest",
      tech: "Merkle Tensor Hash",
      shape: "256-Bit SHA Digest",
      detail: "Calculates deterministic cryptographic hash across INT8 layer weights to guarantee zero adversarial corruption.",
      icon: Layers
    },
    {
      id: "model",
      num: "04",
      title: "Edge Model Execution",
      tech: "TensorRT INT8 Engine",
      shape: "Zero-Copy CUDA Ptr",
      detail: "Fused Conv+ReLU layer graph executed on low-power NPU silicon with hardware-accelerated matrix multiplication.",
      icon: Cpu
    },
    {
      id: "evaluation",
      num: "05",
      title: "Evaluation & Latency",
      tech: "P99 Stopwatch / ROC",
      shape: "ROC-AUC: 0.964 // <4.2ms",
      detail: "Strict boundary verification against out-of-distribution drift and latency threshold SLA violation checks.",
      icon: BarChart3
    },
    {
      id: "result",
      num: "06",
      title: "Deterministic Verdict",
      tech: "Audited Action Signal",
      shape: "High-Confidence Event",
      detail: "Verified telemetry and attested inference output dispatched over secure local bus to actuation hardware.",
      icon: CheckCircle2
    }
  ];

  const activeStages = stages.length > 0 ? stages : defaultAiStages;
  const [selectedStage, setSelectedStage] = useState(activeStages[0]);

  return (
    <div className={`p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm font-mono text-xs ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1C1C22] pb-4 mb-6">
        <div className="flex items-center gap-2 text-[#818CF8]">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[11px] tracking-widest uppercase">
            {mode === 'ai' ? 'COMPUTATIONAL ML PIPELINE' : 'SYSTEM ARCHITECTURE PIPELINE'}
          </span>
        </div>
        <span className="text-[10px] text-[#656570]">CLICK NODES TO INSPECT TENSOR SPECS</span>
      </div>

      {/* Pipeline Node Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 relative">
        {activeStages.map((st, idx) => {
          const Icon = st.icon || Layers;
          const isSelected = selectedStage?.id === st.id;

          return (
            <button
              key={st.id}
              onClick={() => setSelectedStage(st)}
              className={`p-3 rounded-sm border text-left flex flex-col justify-between transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#181824] border-[#6366F1] shadow-md ring-1 ring-[#6366F1]/50'
                  : 'bg-[#121216] border-[#1E1E26] hover:border-[#323242] text-[#9E9EA8]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-[#818CF8]">{st.num}</span>
                <Icon size={14} className={isSelected ? 'text-[#C7D2FE]' : 'text-[#656570]'} />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#F4F4F2] mb-0.5 line-clamp-1">{st.title}</div>
                <div className="text-[10px] text-[#656570] line-clamp-1">{st.tech}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Spec Inspector */}
      {selectedStage && (
        <div className="mt-4 p-4 bg-[#08080A] border border-[#1E1E26] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#F4F4F2] uppercase">{selectedStage.title}</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#1A1A24] text-[#818CF8] rounded border border-[#2B2B3D]">
                {selectedStage.tech}
              </span>
            </div>
            <p className="text-xs text-[#9E9EA8] font-sans font-light leading-relaxed max-w-2xl">
              {selectedStage.detail}
            </p>
          </div>

          <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-[#1C1C24] pt-2 sm:pt-0 sm:pl-4">
            <div className="text-[10px] text-[#656570]">TENSOR / PAYLOAD SHAPE</div>
            <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">{selectedStage.shape}</div>
          </div>
        </div>
      )}
    </div>
  );
}
