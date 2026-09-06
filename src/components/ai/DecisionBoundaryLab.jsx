import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Sliders, RefreshCw, PlusCircle, CheckCircle, AlertCircle, Info, Sparkles } from 'lucide-react';
import CompactPillSwitch from '../ui/CompactPillSwitch.jsx';

/**
 * DecisionBoundaryLab
 * Real-time 2D classification decision surface visualizer.
 * Lets visitors explore how inductive biases shape model decision regions.
 * Demonstrates: Linear Softmax, Kernel RBF SVM, and Random Forest splits.
 */
export default function DecisionBoundaryLab({ className = "" }) {
  const canvasRef = useRef(null);
  const [modelType, setModelType] = useState('rbf'); // 'linear', 'rbf', 'tree'
  const [complexity, setComplexity] = useState(1.4); // gamma or depth or reg
  const [decisionThreshold, setDecisionThreshold] = useState(0.5);
  const [addPointClass, setAddPointClass] = useState(1); // 0 or 1
  const [seed, setSeed] = useState(42);

  // Initial synthetic dataset generation: two interleaved non-linear clusters
  const [dataset, setDataset] = useState(() => {
    return generateSyntheticData(42);
  });

  function generateSyntheticData(s) {
    const points = [];
    const countPerClass = 22;

    // Cluster 0 (Center core with slight crescent)
    for (let i = 0; i < countPerClass; i++) {
      const angle = (i / countPerClass) * Math.PI * 1.5;
      const r = 0.25 + (Math.sin(s + i * 2.3) * 0.5 + 0.5) * 0.22;
      const x = 0.42 + Math.cos(angle) * r;
      const y = 0.45 + Math.sin(angle) * r;
      points.push({ x: Math.max(0.05, Math.min(0.95, x)), y: Math.max(0.05, Math.min(0.95, y)), label: 0 });
    }

    // Cluster 1 (Surrounding outer arc)
    for (let i = 0; i < countPerClass; i++) {
      const angle = (i / countPerClass) * Math.PI * 1.8 - 0.2;
      const r = 0.62 + (Math.cos(s * 1.3 + i * 1.7) * 0.5 + 0.5) * 0.18;
      const x = 0.52 + Math.cos(angle) * r;
      const y = 0.54 + Math.sin(angle) * r;
      points.push({ x: Math.max(0.05, Math.min(0.95, x)), y: Math.max(0.05, Math.min(0.95, y)), label: 1 });
    }

    return points;
  }

  const handleResetDistribution = () => {
    const newSeed = Math.floor(Math.random() * 1000);
    setSeed(newSeed);
    setDataset(generateSyntheticData(newSeed));
  };

  // Inference evaluation function for a single (x, y) coordinate
  const predictProbability = useMemo(() => {
    return (px, py, points, type, comp) => {
      if (type === 'linear') {
        // Linear hyper-plane model: w1*x + w2*y + b
        let c0x = 0, c0y = 0, n0 = 0;
        let c1x = 0, c1y = 0, n1 = 0;
        for (const p of points) {
          if (p.label === 0) { c0x += p.x; c0y += p.y; n0++; }
          else { c1x += p.x; c1y += p.y; n1++; }
        }
        c0x /= (n0 || 1); c0y /= (n0 || 1);
        c1x /= (n1 || 1); c1y /= (n1 || 1);

        const dx = c1x - c0x;
        const dy = c1y - c0y;
        const mx = (c0x + c1x) / 2;
        const my = (c0y + c1y) / 2;

        const dot = (px - mx) * dx + (py - my) * dy;
        const scale = 5 * comp;
        return 1 / (1 + Math.exp(-dot * scale));
      } else if (type === 'rbf') {
        // Kernel RBF SVM approximation: sum_i alpha_i * exp(-gamma * ||p - p_i||^2)
        const gamma = comp * 16;
        let score = 0;
        for (const p of points) {
          const distSq = (px - p.x) ** 2 + (py - p.y) ** 2;
          const k = Math.exp(-gamma * distSq);
          score += (p.label === 1 ? 1 : -1.2) * k;
        }
        return 1 / (1 + Math.exp(-score * 2.2));
      } else {
        // Random Forest / Decision Tree: Orthogonal step-wise recursive splits
        let score = 0;
        const splits = [
          { axis: 'x', val: 0.48, leftLabel: 0, rightLabel: 1 },
          { axis: 'y', val: 0.38, leftLabel: 1, rightLabel: 0 },
          { axis: 'x', val: 0.72, leftLabel: 0, rightLabel: 1 },
          { axis: 'y', val: 0.65, leftLabel: 0, rightLabel: 1 }
        ];
        const activeSplits = splits.slice(0, Math.min(4, Math.round(comp * 2)));
        for (const s of activeSplits) {
          const val = s.axis === 'x' ? px : py;
          if (val > s.val) score += s.rightLabel === 1 ? 1 : -1;
          else score += s.leftLabel === 1 ? 1 : -1;
        }
        return 1 / (1 + Math.exp(-score * 1.8));
      }
    };
  }, []);

  // Compute confusion matrix & metrics on the dataset
  const metrics = useMemo(() => {
    let tp = 0, fp = 0, fn = 0, tn = 0;
    let totalLoss = 0;

    for (const pt of dataset) {
      const prob = predictProbability(pt.x, pt.y, dataset, modelType, complexity);
      const pred = prob >= decisionThreshold ? 1 : 0;

      if (pt.label === 1 && pred === 1) tp++;
      else if (pt.label === 0 && pred === 1) fp++;
      else if (pt.label === 1 && pred === 0) fn++;
      else tn++;

      const safeProb = Math.max(1e-5, Math.min(1 - 1e-5, prob));
      totalLoss += -(pt.label * Math.log(safeProb) + (1 - pt.label) * Math.log(1 - safeProb));
    }

    const accuracy = ((tp + tn) / dataset.length) * 100;
    const precision = tp + fp > 0 ? (tp / (tp + fp)) * 100 : 0;
    const recall = tp + fn > 0 ? (tp / (tp + fn)) * 100 : 0;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
    const bceLoss = totalLoss / dataset.length;

    return { tp, fp, fn, tn, accuracy, precision, recall, f1, bceLoss };
  }, [dataset, modelType, complexity, decisionThreshold, predictProbability]);

  // Render decision surface to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    // Fill decision regions with subtle hues
    for (let gy = 0; gy < height; gy += 4) {
      for (let gx = 0; gx < width; gx += 4) {
        const nx = gx / width;
        const ny = gy / height;
        const prob = predictProbability(nx, ny, dataset, modelType, complexity);

        let r, g, b, a;
        if (prob >= decisionThreshold) {
          const intensity = Math.min(1, (prob - decisionThreshold) / (1 - decisionThreshold));
          r = 49 + Math.round(intensity * 30);
          g = 46 + Math.round(intensity * 15);
          b = 129 + Math.round(intensity * 50);
          a = 70 + Math.round(intensity * 75);
        } else {
          const intensity = Math.min(1, (decisionThreshold - prob) / decisionThreshold);
          r = 6 + Math.round(intensity * 10);
          g = 78 + Math.round(intensity * 40);
          b = 79 + Math.round(intensity * 40);
          a = 60 + Math.round(intensity * 65);
        }

        for (let dy = 0; dy < 4 && gy + dy < height; dy++) {
          for (let dx = 0; dx < 4 && gx + dx < width; dx++) {
            const idx = ((gy + dy) * width + (gx + dx)) * 4;
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = a;
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);

    // Draw coordinate axes & grid ticks
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    ctx.lineWidth = 1;
    for (let i = 0.2; i < 1.0; i += 0.2) {
      ctx.beginPath();
      ctx.moveTo(i * width, 0);
      ctx.lineTo(i * width, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * height);
      ctx.lineTo(width, i * height);
      ctx.stroke();
    }

    // Draw Decision Boundary Contour Markers
    for (let gy = 0; gy < height; gy += 6) {
      for (let gx = 0; gx < width; gx += 6) {
        const p1 = predictProbability(gx / width, gy / height, dataset, modelType, complexity);
        const p2 = predictProbability((gx + 6) / width, gy / height, dataset, modelType, complexity);
        if ((p1 - decisionThreshold) * (p2 - decisionThreshold) < 0) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#F4F4F0';
          ctx.fill();
        }
      }
    }

    // Draw dataset points
    for (const pt of dataset) {
      const cx = pt.x * width;
      const cy = pt.y * height;
      const prob = predictProbability(pt.x, pt.y, dataset, modelType, complexity);
      const isCorrect = (prob >= decisionThreshold ? 1 : 0) === pt.label;

      ctx.beginPath();
      ctx.arc(cx, cy, 5.5, 0, Math.PI * 2);

      if (pt.label === 1) {
        ctx.fillStyle = '#818CF8';
        ctx.strokeStyle = isCorrect ? '#C7D2FE' : '#EF4444';
      } else {
        ctx.fillStyle = '#10B981';
        ctx.strokeStyle = isCorrect ? '#A7F3D0' : '#EF4444';
      }

      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      if (!isCorrect) {
        ctx.beginPath();
        ctx.arc(cx, cy, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#EF4444';
        ctx.fill();
      }
    }
  }, [dataset, modelType, complexity, decisionThreshold, predictProbability]);

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0.02, Math.min(0.98, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0.02, Math.min(0.98, (e.clientY - rect.top) / rect.height));

    setDataset((prev) => [...prev, { x, y, label: addPointClass }]);
  };

  return (
    <div className={`p-6 sm:p-8 bg-[#0C0C0E] border border-[#1C1C24] rounded-sm text-[#F4F4F0] ${className}`}>
      {/* Header Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1C1C22]">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#818CF8] uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MODEL BENCHMARK // DECISION SURFACE TOPOLOGY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold uppercase tracking-tight text-[#F4F4F2]">
            Interactive Decision Boundary Lab
          </h3>
          <p className="text-xs text-[#9E9EA8] font-mono mt-0.5">
            Compare non-linear separation kernels across feature space. Click canvas to insert live data points.
          </p>
        </div>

        <button
          onClick={handleResetDistribution}
          className="px-3.5 py-1.5 bg-[#16161B] hover:bg-[#1E1E24] border border-[#272730] hover:border-[#3E3E4C] text-xs font-mono text-[#9E9EA8] hover:text-white rounded flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <RefreshCw size={13} />
          <span>Reseed Data</span>
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* Left: Interactive Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[480px] bg-[#08080A] border border-[#1F1F28] rounded-sm overflow-hidden shadow-2xl cursor-crosshair">
            <canvas
              ref={canvasRef}
              width={480}
              height={480}
              onClick={handleCanvasClick}
              className="w-full h-full block"
            />

            {/* Canvas Overlay Legend */}
            <div className="absolute top-3 left-3 bg-[#08080A]/85 backdrop-blur-md px-3 py-2 border border-[#22222C] rounded text-[10px] font-mono space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[#A7F3D0]">Class 0 (Core Cluster)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#818CF8]" />
                <span className="text-[#C7D2FE]">Class 1 (Outer Arc)</span>
              </div>
              <div className="text-[#656570] pt-0.5 border-t border-[#1C1C24]">
                Contour: P(y=1) = {decisionThreshold.toFixed(2)}
              </div>
            </div>

            <div className="absolute bottom-3 right-3 bg-[#08080A]/90 px-2.5 py-1 border border-[#22222C] rounded text-[9px] font-mono text-[#656570]">
              CLICK TO INSERT POINT ({addPointClass === 1 ? 'CLASS 1' : 'CLASS 0'})
            </div>
          </div>

          <div className="w-full max-w-[480px] mt-3 flex items-center justify-between text-[11px] font-mono text-[#656570]">
            <span>FEATURE x₁ (Normalized [0, 1])</span>
            <span>FEATURE x₂ (Normalized [0, 1])</span>
          </div>
        </div>

        {/* Right: Model & Hyperparameter Controls */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Architecture Switcher */}
          <div>
            <label className="text-xs font-mono text-[#818CF8] uppercase tracking-wider block mb-2">
              Model Architecture:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'linear', name: 'Linear Softmax', sub: 'Hyperplane' },
                { id: 'rbf', name: 'Kernel RBF SVM', sub: 'Non-linear' },
                { id: 'tree', name: 'Random Forest', sub: 'Orthogonal' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setModelType(m.id)}
                  className={`p-2.5 text-left border rounded-sm transition-all cursor-pointer ${
                    modelType === m.id
                      ? 'bg-[#181822] border-[#6366F1] text-white shadow-md'
                      : 'bg-[#111114] border-[#1C1C24] text-[#9E9EA8] hover:border-[#2F2F3D]'
                  }`}
                >
                  <div className="text-xs font-semibold">{m.name}</div>
                  <div className="text-[10px] font-mono text-[#656570]">{m.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Hyperparameter Sliders */}
          <div className="space-y-4 p-4 bg-[#111114] border border-[#1C1C24] rounded-sm">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-[#9E9EA8]">
                  {modelType === 'rbf' ? 'KERNEL BANDWIDTH (γ)' : modelType === 'tree' ? 'TREE SPLIT DEPTH' : 'HYPERPLANE STEEPNESS'}
                </span>
                <span className="text-[#818CF8] font-bold">{complexity.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="3.0"
                step="0.1"
                value={complexity}
                onChange={(e) => setComplexity(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#1C1C24] rounded cursor-pointer accent-[#6366F1]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-[#9E9EA8]">DECISION PROBABILITY THRESHOLD</span>
                <span className="text-[#818CF8] font-bold">{decisionThreshold.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.9"
                step="0.05"
                value={decisionThreshold}
                onChange={(e) => setDecisionThreshold(parseFloat(e.target.value))}
                className="w-full h-1 bg-[#1C1C24] rounded cursor-pointer accent-[#6366F1]"
              />
            </div>

            {/* Click Point Insertion Class Toggle */}
            <div className="pt-2 border-t border-[#1C1C24] flex items-center justify-between">
              <span className="text-xs font-mono text-[#9E9EA8]">INSERTION CLASS:</span>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono ${addPointClass === 0 ? 'text-[#10B981] font-semibold' : 'text-[#656570]'}`}>Class 0</span>
                <CompactPillSwitch
                  checked={addPointClass === 1}
                  onChange={(c) => setAddPointClass(c ? 1 : 0)}
                  ariaLabel="Toggle between Class 0 and Class 1 point insertion"
                />
                <span className={`text-[10px] font-mono ${addPointClass === 1 ? 'text-[#818CF8] font-semibold' : 'text-[#656570]'}`}>Class 1</span>
              </div>
            </div>
          </div>

          {/* Real-time Confusion Matrix & Metrics */}
          <div className="p-4 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-3 font-mono text-xs">
            <div className="text-[11px] text-[#818CF8] uppercase tracking-wider">
              Empirical Evaluation Metrics:
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 bg-[#08080A] border border-[#1C1C24] rounded">
                <div className="text-[10px] text-[#656570]">CLASSIFICATION ACCURACY</div>
                <div className="text-base font-bold text-[#F4F4F2]">{metrics.accuracy.toFixed(1)}%</div>
              </div>
              <div className="p-2.5 bg-[#08080A] border border-[#1C1C24] rounded">
                <div className="text-[10px] text-[#656570]">BINARY CROSS-ENTROPY</div>
                <div className="text-base font-bold text-emerald-400">{metrics.bceLoss.toFixed(3)}</div>
              </div>
            </div>

            {/* Confusion Matrix Table */}
            <div className="border border-[#1C1C24] rounded overflow-hidden">
              <div className="grid grid-cols-3 bg-[#16161C] p-1.5 text-[10px] text-center text-[#656570]">
                <div>ACTUAL \ PRED</div>
                <div className="text-[#A7F3D0]">PRED 0</div>
                <div className="text-[#C7D2FE]">PRED 1</div>
              </div>
              <div className="grid grid-cols-3 p-1.5 text-[11px] text-center border-t border-[#1C1C24]">
                <div className="text-[#A7F3D0] text-left pl-2">ACTUAL 0</div>
                <div className="text-emerald-400 font-bold">{metrics.tn} (TN)</div>
                <div className="text-rose-400">{metrics.fp} (FP)</div>
              </div>
              <div className="grid grid-cols-3 p-1.5 text-[11px] text-center border-t border-[#1C1C24]">
                <div className="text-[#C7D2FE] text-left pl-2">ACTUAL 1</div>
                <div className="text-rose-400">{metrics.fn} (FN)</div>
                <div className="text-emerald-400 font-bold">{metrics.tp} (TP)</div>
              </div>
            </div>

            <div className="flex justify-between text-[11px] text-[#9E9EA8] pt-1">
              <span>PRECISION: <strong className="text-white">{metrics.precision.toFixed(1)}%</strong></span>
              <span>RECALL: <strong className="text-white">{metrics.recall.toFixed(1)}%</strong></span>
              <span>F1: <strong className="text-white">{metrics.f1.toFixed(1)}%</strong></span>
            </div>
          </div>

          <div className="p-3 bg-[#111114]/60 border border-[#1C1C22] rounded text-[11px] font-mono text-[#656570]">
            [INTERACTIVE MODEL DEMONSTRATION // DYNAMIC DECISION SURFACE]
          </div>

        </div>

      </div>
    </div>
  );
}
