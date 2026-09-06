import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, FastForward, Sliders, Activity } from 'lucide-react';

/**
 * OptimizationLossLandscape
 * Simulates first-order optimization dynamics across a non-convex loss manifold.
 * Compares Vanilla SGD, Momentum, and Adam trajectory convergence.
 */
export default function OptimizationLossLandscape({ className = "" }) {
  const canvasRef = useRef(null);
  const [optimizer, setOptimizer] = useState('adam'); // 'sgd', 'momentum', 'adam'
  const [learningRate, setLearningRate] = useState(0.03);
  const [isRunning, setIsRunning] = useState(false);
  const [stepCount, setStepCount] = useState(0);

  // Parameter trajectory history
  const [trajectory, setTrajectory] = useState([
    { x: 0.18, y: 0.82, loss: 0 }
  ]);

  // Optimizer internal velocity / moment states
  const optStateRef = useRef({
    vx: 0,
    vy: 0,
    m_x: 0,
    m_y: 0,
    v_x: 0,
    v_y: 0,
    t: 0
  });

  // Mathematical Loss Function: Multi-modal contour with steep ravine & saddle point
  const lossFunction = (x, y) => {
    // Scaled coordinates centered around (0.5, 0.5)
    const sx = (x - 0.5) * 4;
    const sy = (y - 0.5) * 4;
    // Combination of parabolic bowl + sinusoidal ripples
    const term1 = 0.25 * (sx * sx + sy * sy);
    const term2 = 0.8 * Math.sin(sx * 1.6) * Math.cos(sy * 1.6);
    const term3 = 0.4 * (sx - sy) * (sx - sy);
    return term1 + term2 + term3 + 1.2;
  };

  // Numerical gradient calculation: [dL/dx, dL/dy]
  const computeGradient = (x, y) => {
    const eps = 1e-4;
    const gx = (lossFunction(x + eps, y) - lossFunction(x - eps, y)) / (2 * eps);
    const gy = (lossFunction(x, y + eps) - lossFunction(x, y - eps)) / (2 * eps);
    return { gx, gy };
  };

  // Reset trajectory to starting point or user-selected point
  const handleReset = (startX = 0.18, startY = 0.82) => {
    setIsRunning(false);
    setStepCount(0);
    optStateRef.current = { vx: 0, vy: 0, m_x: 0, m_y: 0, v_x: 0, v_y: 0, t: 0 };
    setTrajectory([{ x: startX, y: startY, loss: lossFunction(startX, startY) }]);
  };

  // Execute 1 optimization step
  const stepOptimization = () => {
    setTrajectory((prev) => {
      const current = prev[prev.length - 1];
      if (!current) return prev;

      const { gx, gy } = computeGradient(current.x, current.y);
      let nextX = current.x;
      let nextY = current.y;
      const lr = learningRate;

      if (optimizer === 'sgd') {
        // Vanilla SGD: theta_new = theta - lr * grad
        nextX -= lr * gx * 0.12;
        nextY -= lr * gy * 0.12;
      } else if (optimizer === 'momentum') {
        // Momentum: v = beta * v + lr * grad
        const beta = 0.88;
        optStateRef.current.vx = beta * optStateRef.current.vx + lr * gx * 0.12;
        optStateRef.current.vy = beta * optStateRef.current.vy + lr * gy * 0.12;
        nextX -= optStateRef.current.vx;
        nextY -= optStateRef.current.vy;
      } else if (optimizer === 'adam') {
        // Adam
        const beta1 = 0.9;
        const beta2 = 0.999;
        const eps = 1e-8;
        optStateRef.current.t += 1;
        const t = optStateRef.current.t;

        optStateRef.current.m_x = beta1 * optStateRef.current.m_x + (1 - beta1) * gx;
        optStateRef.current.m_y = beta1 * optStateRef.current.m_y + (1 - beta1) * gy;

        optStateRef.current.v_x = beta2 * optStateRef.current.v_x + (1 - beta2) * (gx * gx);
        optStateRef.current.v_y = beta2 * optStateRef.current.v_y + (1 - beta2) * (gy * gy);

        const mHatX = optStateRef.current.m_x / (1 - Math.pow(beta1, t));
        const mHatY = optStateRef.current.m_y / (1 - Math.pow(beta1, t));

        const vHatX = optStateRef.current.v_x / (1 - Math.pow(beta2, t));
        const vHatY = optStateRef.current.v_y / (1 - Math.pow(beta2, t));

        nextX -= (lr * 0.08 * mHatX) / (Math.sqrt(vHatX) + eps);
        nextY -= (lr * 0.08 * mHatY) / (Math.sqrt(vHatY) + eps);
      }

      // Constrain within bounds
      nextX = Math.max(0.04, Math.min(0.96, nextX));
      nextY = Math.max(0.04, Math.min(0.96, nextY));

      const newLoss = lossFunction(nextX, nextY);
      setStepCount((c) => c + 1);

      // Keep max 120 points for smooth rendering
      const updated = [...prev, { x: nextX, y: nextY, loss: newLoss }];
      return updated.slice(-120);
    });
  };

  // Continuous execution loop
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      stepOptimization();
    }, 60);
    return () => clearInterval(interval);
  }, [isRunning, optimizer, learningRate]);

  // Render loss landscape contours and trajectory to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Draw contour background
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    for (let py = 0; py < height; py += 3) {
      for (let px = 0; px < width; px += 3) {
        const nx = px / width;
        const ny = py / height;
        const l = lossFunction(nx, ny);

        // Contour shading
        const contourBand = Math.sin(l * 9);
        const isContourLine = Math.abs(contourBand) > 0.88;

        let r = Math.round(12 + l * 18);
        let g = Math.round(14 + l * 20);
        let b = Math.round(28 + l * 36);

        if (isContourLine) {
          r += 32;
          g += 32;
          b += 55;
        }

        for (let dy = 0; dy < 3 && py + dy < height; dy++) {
          for (let dx = 0; dx < 3 && px + dx < width; dx++) {
            const idx = ((py + dy) * width + (px + dx)) * 4;
            data[idx] = Math.min(255, r);
            data[idx + 1] = Math.min(255, g);
            data[idx + 2] = Math.min(255, b);
            data[idx + 3] = 255;
          }
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Draw coordinate axes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(width * 0.5, height);
    ctx.moveTo(0, height * 0.5);
    ctx.lineTo(width, height * 0.5);
    ctx.stroke();

    // Global minimum marker near (0.5, 0.5)
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, 8, 0, Math.PI * 2);
    ctx.stroke();

    // Draw Trajectory Path
    if (trajectory.length > 1) {
      ctx.strokeStyle = optimizer === 'adam' ? '#818CF8' : optimizer === 'momentum' ? '#38BDF8' : '#F43F5E';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(trajectory[0].x * width, trajectory[0].y * height);

      for (let i = 1; i < trajectory.length; i++) {
        ctx.lineTo(trajectory[i].x * width, trajectory[i].y * height);
      }
      ctx.stroke();

      // Draw trajectory step points
      for (let i = 0; i < trajectory.length; i++) {
        const pt = trajectory[i];
        ctx.beginPath();
        ctx.arc(pt.x * width, pt.y * height, i === trajectory.length - 1 ? 5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = i === trajectory.length - 1 ? '#FFFFFF' : 'rgba(244, 244, 240, 0.5)';
        ctx.fill();
      }
    }
  }, [trajectory, optimizer]);

  // Click canvas to drop parameter state theta_0
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(0.04, Math.min(0.96, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0.04, Math.min(0.96, (e.clientY - rect.top) / rect.height));
    handleReset(x, y);
  };

  const currentPoint = trajectory[trajectory.length - 1] || { x: 0, y: 0, loss: 0 };
  const currentGrad = computeGradient(currentPoint.x, currentPoint.y);
  const gradNorm = Math.hypot(currentGrad.gx, currentGrad.gy).toFixed(3);

  return (
    <div className={`p-6 sm:p-8 bg-[#0C0C0E] border border-[#1C1C24] rounded-sm text-[#F4F4F0] ${className}`}>
      {/* Header Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1C1C22]">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#818CF8] uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPTIMIZATION DYNAMICS // LOSS SURFACE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold uppercase tracking-tight text-[#F4F4F2]">
            Gradient Descent &amp; Loss Landscapes
          </h3>
          <p className="text-xs text-[#9E9EA8] font-mono mt-0.5">
            Simulate parameter updates across non-convex saddle points. Click anywhere on the contour to drop a new initial parameter state θ₀.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
              isRunning
                ? 'bg-rose-600 hover:bg-rose-700 text-white'
                : 'bg-[#4338CA] hover:bg-[#4F46E5] text-white'
            }`}
          >
            {isRunning ? <Pause size={13} /> : <Play size={13} />}
            <span>{isRunning ? 'Pause Descent' : 'Run Descent'}</span>
          </button>

          <button
            onClick={stepOptimization}
            disabled={isRunning}
            className="px-3 py-2 bg-[#16161B] hover:bg-[#22222C] border border-[#272730] text-xs font-mono text-[#9E9EA8] hover:text-white rounded flex items-center gap-1 transition-colors cursor-pointer disabled:opacity-40"
          >
            <FastForward size={13} />
            <span>Step</span>
          </button>

          <button
            onClick={() => handleReset(0.18, 0.82)}
            className="px-3 py-2 bg-[#16161B] hover:bg-[#22222C] border border-[#272730] text-xs font-mono text-[#9E9EA8] hover:text-white rounded flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* Left: Contour Map */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[480px] bg-[#08080A] border border-[#1F1F28] rounded-sm overflow-hidden shadow-2xl cursor-crosshair">
            <canvas
              ref={canvasRef}
              width={480}
              height={480}
              onClick={handleCanvasClick}
              className="w-full h-full block"
            />

            {/* Overlay Status */}
            <div className="absolute top-3 left-3 bg-[#08080A]/90 backdrop-blur-md px-3 py-2 border border-[#22222C] rounded text-[10px] font-mono space-y-1">
              <div className="text-[#818CF8] uppercase font-semibold">ALGORITHM: {optimizer.toUpperCase()}</div>
              <div className="text-emerald-400">Target: Global Minimum (Center)</div>
            </div>

            <div className="absolute bottom-3 right-3 bg-[#08080A]/90 px-2.5 py-1 border border-[#22222C] rounded text-[9px] font-mono text-[#656570]">
              CLICK CONTOUR TO POSITION INITIAL θ₀
            </div>
          </div>

          <div className="w-full max-w-[480px] mt-3 flex items-center justify-between text-[11px] font-mono text-[#656570]">
            <span>PARAMETER θ₁</span>
            <span>PARAMETER θ₂</span>
          </div>
        </div>

        {/* Right: Optimizer Tuning & Metrics */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Optimizer Switcher */}
          <div>
            <label className="text-xs font-mono text-[#818CF8] uppercase tracking-wider block mb-2">
              Optimizer Architecture:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'adam', name: 'Adam', sub: 'Adaptive' },
                { id: 'momentum', name: 'Momentum', sub: 'Inertial' },
                { id: 'sgd', name: 'SGD', sub: 'First-Order' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setOptimizer(opt.id);
                    handleReset(currentPoint.x, currentPoint.y);
                  }}
                  className={`p-2.5 text-left border rounded-sm transition-all cursor-pointer ${
                    optimizer === opt.id
                      ? 'bg-[#181822] border-[#6366F1] text-white shadow-md'
                      : 'bg-[#111114] border-[#1C1C24] text-[#9E9EA8] hover:border-[#2F2F3D]'
                  }`}
                >
                  <div className="text-xs font-semibold">{opt.name}</div>
                  <div className="text-[10px] font-mono text-[#656570]">{opt.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Learning Rate Slider */}
          <div className="p-4 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#9E9EA8]">LEARNING RATE (α)</span>
              <span className="text-[#818CF8] font-bold">{learningRate.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0.005"
              max="0.08"
              step="0.005"
              value={learningRate}
              onChange={(e) => setLearningRate(parseFloat(e.target.value))}
              className="w-full h-1 bg-[#1C1C24] rounded cursor-pointer accent-[#6366F1]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#656570] pt-1">
              <span>Conservative (0.005)</span>
              <span>Aggressive (0.080)</span>
            </div>
          </div>

          {/* Live Telemetry Card */}
          <div className="p-4 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-3 font-mono text-xs">
            <div className="text-[11px] text-[#818CF8] uppercase tracking-wider">
              Convergence Telemetry:
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 bg-[#08080A] border border-[#1C1C24] rounded">
                <div className="text-[10px] text-[#656570]">CURRENT LOSS L(θ)</div>
                <div className="text-base font-bold text-[#F4F4F2]">{currentPoint.loss.toFixed(4)}</div>
              </div>

              <div className="p-2.5 bg-[#08080A] border border-[#1C1C24] rounded">
                <div className="text-[10px] text-[#656570]">GRADIENT NORM ||∇L||</div>
                <div className="text-base font-bold text-emerald-400">{gradNorm}</div>
              </div>
            </div>

            <div className="p-2.5 bg-[#08080A] border border-[#1C1C24] rounded space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#656570]">ITERATION STEP:</span>
                <span className="text-white font-semibold">Epoch {stepCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#656570]">WEIGHT VECTOR [θ₁, θ₂]:</span>
                <span className="text-[#818CF8]">[{currentPoint.x.toFixed(3)}, {currentPoint.y.toFixed(3)}]</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#111114]/60 border border-[#1C1C22] rounded text-[11px] font-mono text-[#656570]">
            [INTERACTIVE OPTIMIZATION SIMULATION // LOSS MANIFOLD CONVERGENCE]
          </div>

        </div>

      </div>
    </div>
  );
}
