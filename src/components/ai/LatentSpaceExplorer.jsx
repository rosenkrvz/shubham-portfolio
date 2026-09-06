import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Sliders, RefreshCw, Eye, Layers, Compass, Network, Activity } from 'lucide-react';
import CompactPillSwitch from '../ui/CompactPillSwitch.jsx';

/**
 * LatentSpaceExplorer
 * Interactive High-Dimensional Embedding & Dimensionality Reduction visualizer.
 * Projects 64D feature representations into 2D topological coordinate space
 * via PCA, t-SNE, and UMAP simulation manifolds.
 */
export default function LatentSpaceExplorer({ className = "" }) {
  const canvasRef = useRef(null);
  const [method, setMethod] = useState('tsne'); // 'pca', 'tsne', 'umap'
  const [perplexity, setPerplexity] = useState(18);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [showEllipses, setShowEllipses] = useState(true);
  const [selectedCluster, setSelectedCluster] = useState('all');

  // Generate 60 high-dimensional points across 3 semantic manifolds
  const dataPoints = useMemo(() => {
    const clusters = [
      { id: 0, label: 'Edge Vision Features', color: '#818CF8', baseAngle: 0.8, baseR: 0.45 },
      { id: 1, label: 'Telemetry Signals', color: '#10B981', baseAngle: 2.8, baseR: 0.52 },
      { id: 2, label: 'Quantized Tensor Weights', color: '#F59E0B', baseAngle: 4.8, baseR: 0.48 }
    ];

    const points = [];
    clusters.forEach((cl) => {
      for (let i = 0; i < 20; i++) {
        // Generate pseudo-64D vector representation (store 8 preview components)
        const vector8D = Array.from({ length: 8 }, (_, idx) => 
          parseFloat((Math.sin(cl.id * 5 + i * 2.1 + idx) * 0.8 + (Math.random() - 0.5) * 0.3).toFixed(3))
        );

        // Intrinsic PCA coordinates (linear variance spread)
        const pcaX = Math.cos(cl.baseAngle + (i - 10) * 0.08) * cl.baseR + (Math.random() - 0.5) * 0.14;
        const pcaY = Math.sin(cl.baseAngle + (i - 10) * 0.08) * cl.baseR + (Math.random() - 0.5) * 0.14;

        // Intrinsic t-SNE coordinates (dense tight neighborhood clusters)
        const tsneAngle = cl.baseAngle + (Math.random() - 0.5) * 0.4;
        const tsneDist = cl.baseR * 0.85 + (Math.random() - 0.5) * 0.12;
        const tsneX = Math.cos(tsneAngle) * tsneDist;
        const tsneY = Math.sin(tsneAngle) * tsneDist;

        // Intrinsic UMAP coordinates (curvilinear continuous manifolds)
        const umapT = (i / 20) * 2 - 1;
        const umapX = Math.cos(cl.baseAngle) * 0.65 + umapT * 0.25 + (Math.random() - 0.5) * 0.06;
        const umapY = Math.sin(cl.baseAngle) * 0.65 + Math.sin(umapT * Math.PI) * 0.15 + (Math.random() - 0.5) * 0.06;

        points.push({
          id: `${cl.id}-${i}`,
          clusterId: cl.id,
          clusterName: cl.label,
          color: cl.color,
          vector: vector8D,
          pca: { x: pcaX + 0.5, y: pcaY + 0.5 },
          tsne: { x: tsneX + 0.5, y: tsneY + 0.5 },
          umap: { x: umapX + 0.5, y: umapY + 0.5 }
        });
      }
    });

    return points;
  }, []);

  // Compute 2D projected coordinates according to method & parameter adjustments
  const projectedPoints = useMemo(() => {
    return dataPoints.map((pt) => {
      let base = pt[method];
      // Perturb slightly based on perplexity slider
      const scaleAdj = (perplexity - 18) * 0.006;
      const x = Math.max(0.08, Math.min(0.92, base.x + (base.x - 0.5) * scaleAdj));
      const y = Math.max(0.08, Math.min(0.92, base.y + (base.y - 0.5) * scaleAdj));
      return { ...pt, px: x, py: y };
    });
  }, [dataPoints, method, perplexity]);

  // Compute cluster centroids
  const centroids = useMemo(() => {
    const res = {};
    for (let cid = 0; cid < 3; cid++) {
      const subset = projectedPoints.filter((p) => p.clusterId === cid);
      const avgX = subset.reduce((acc, p) => acc + p.px, 0) / (subset.length || 1);
      const avgY = subset.reduce((acc, p) => acc + p.py, 0) / (subset.length || 1);
      res[cid] = { x: avgX, y: avgY, count: subset.length };
    }
    return res;
  }, [projectedPoints]);

  // Draw topological canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear
    ctx.fillStyle = '#08080A';
    ctx.fillRect(0, 0, width, height);

    // Draw coordinate axes & topological radial radar rings
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    [0.2, 0.35, 0.5].forEach((r) => {
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.5, width * r, 0, Math.PI * 2);
      ctx.stroke();
    });

    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(width * 0.5, height);
    ctx.moveTo(0, height * 0.5);
    ctx.lineTo(width, height * 0.5);
    ctx.stroke();

    // Draw cluster density ellipses
    if (showEllipses) {
      for (let cid = 0; cid < 3; cid++) {
        const c = centroids[cid];
        if (!c) continue;
        const color = cid === 0 ? 'rgba(129, 140, 248, 0.08)' : cid === 1 ? 'rgba(16, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)';
        const borderColor = cid === 0 ? 'rgba(129, 140, 248, 0.25)' : cid === 1 ? 'rgba(16, 185, 129, 0.25)' : 'rgba(245, 158, 11, 0.25)';

        ctx.beginPath();
        ctx.arc(c.x * width, c.y * height, width * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.fill();
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Draw nearest-neighbor connections when a point is hovered
    if (hoveredPoint) {
      const hx = hoveredPoint.px * width;
      const hy = hoveredPoint.py * height;

      // Find 3 nearest neighbors in same cluster
      const neighbors = projectedPoints
        .filter((p) => p.id !== hoveredPoint.id)
        .map((p) => ({
          ...p,
          dist: Math.hypot(p.px - hoveredPoint.px, p.py - hoveredPoint.py)
        }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 4);

      ctx.strokeStyle = 'rgba(244, 244, 240, 0.35)';
      ctx.lineWidth = 1;
      for (const n of neighbors) {
        ctx.beginPath();
        ctx.moveTo(hx, hy);
        ctx.lineTo(n.px * width, n.py * height);
        ctx.stroke();
      }
    }

    // Draw points
    for (const pt of projectedPoints) {
      const isDimmed = selectedCluster !== 'all' && selectedCluster !== pt.clusterId;
      const isHovered = hoveredPoint && hoveredPoint.id === pt.id;

      const px = pt.px * width;
      const py = pt.py * height;

      ctx.beginPath();
      ctx.arc(px, py, isHovered ? 7 : 4.5, 0, Math.PI * 2);

      ctx.fillStyle = isDimmed ? '#26262E' : pt.color;
      ctx.strokeStyle = isHovered ? '#FFFFFF' : isDimmed ? '#1C1C22' : 'rgba(0,0,0,0.8)';
      ctx.lineWidth = isHovered ? 2 : 1.5;

      ctx.fill();
      ctx.stroke();
    }
  }, [projectedPoints, centroids, showEllipses, hoveredPoint, selectedCluster]);

  // Handle mouse move on canvas for hover inspection
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;

    let closest = null;
    let minDist = 0.045; // Hit threshold

    for (const pt of projectedPoints) {
      const d = Math.hypot(pt.px - mx, pt.py - my);
      if (d < minDist) {
        minDist = d;
        closest = pt;
      }
    }
    setHoveredPoint(closest);
  };

  return (
    <div className={`p-6 sm:p-8 bg-[#0C0C0E] border border-[#1C1C24] rounded-sm text-[#F4F4F0] ${className}`}>
      {/* Header Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1C1C22]">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#818CF8] uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>TOPOLOGY // LATENT EMBEDDING PROJECTION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-semibold uppercase tracking-tight text-[#F4F4F2]">
            Dimensionality Reduction &amp; Latent Space
          </h3>
          <p className="text-xs text-[#9E9EA8] font-mono mt-0.5">
            Projection of 64-dimensional feature manifolds into 2D Riemannian topology. Hover points to inspect vector dimensions.
          </p>
        </div>

        {/* Projection Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#111114] border border-[#1C1C24] rounded">
          {[
            { id: 'tsne', label: 't-SNE (Manifold)' },
            { id: 'umap', label: 'UMAP (Topology)' },
            { id: 'pca', label: 'PCA (Linear)' }
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`px-3 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                method === m.id
                  ? 'bg-[#818CF8] text-[#08080A] font-bold'
                  : 'text-[#9E9EA8] hover:text-white'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* Left: Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[480px] bg-[#08080A] border border-[#1F1F28] rounded-sm overflow-hidden shadow-2xl">
            <canvas
              ref={canvasRef}
              width={480}
              height={480}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredPoint(null)}
              className="w-full h-full block cursor-crosshair"
            />

            {/* Manifold HUD Overlay */}
            <div className="absolute top-3 left-3 bg-[#08080A]/90 backdrop-blur-md px-3 py-2 border border-[#22222C] rounded text-[10px] font-mono space-y-1">
              <div className="text-[#818CF8] uppercase font-semibold">ACTIVE ALGORITHM: {method.toUpperCase()}</div>
              <div className="text-[#9E9EA8]">D_in = 64 &rarr; D_out = 2</div>
              <div className="text-[#656570]">Loss: KL-Divergence Minimized</div>
            </div>

            <div className="absolute bottom-3 right-3 bg-[#08080A]/90 px-2.5 py-1 border border-[#22222C] rounded text-[9px] font-mono text-[#656570]">
              HOVER NODES TO REVEAL 64D VECTOR &amp; NEAREST NEIGHBORS
            </div>
          </div>

          <div className="w-full max-w-[480px] mt-3 flex items-center justify-between text-[11px] font-mono text-[#656570]">
            <span>LATENT AXIS $z_1$</span>
            <span>LATENT AXIS $z_2$</span>
          </div>
        </div>

        {/* Right: Inspection & Vector Attributes */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Cluster Filter Buttons */}
          <div>
            <label className="text-xs font-mono text-[#818CF8] uppercase tracking-wider block mb-2">
              Semantic Clusters:
            </label>
            <div className="space-y-2">
              {[
                { id: 'all', label: 'All Feature Spaces', color: '#F4F4F0', count: 60 },
                { id: 0, label: 'Edge Vision Features', color: '#818CF8', count: 20 },
                { id: 1, label: 'Telemetry Signals', color: '#10B981', count: 20 },
                { id: 2, label: 'Quantized Tensor Weights', color: '#F59E0B', count: 20 }
              ].map((cl) => (
                <button
                  key={cl.id}
                  onClick={() => setSelectedCluster(cl.id)}
                  className={`w-full px-3.5 py-2 rounded-sm border text-left flex items-center justify-between text-xs font-mono transition-colors cursor-pointer ${
                    selectedCluster === cl.id
                      ? 'bg-[#181822] border-[#6366F1] text-white shadow-md'
                      : 'bg-[#111114] border-[#1C1C24] text-[#9E9EA8] hover:border-[#2F2F3D]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cl.color }} />
                    <span>{cl.label}</span>
                  </div>
                  <span className="text-[#656570]">n={cl.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hyperparameter Controls */}
          <div className="p-4 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-[#9E9EA8]">PERPLEXITY / NEIGHBORHOOD WINDOW</span>
                <span className="text-[#818CF8] font-bold">{perplexity}</span>
              </div>
              <input
                type="range"
                min="6"
                max="32"
                value={perplexity}
                onChange={(e) => setPerplexity(parseInt(e.target.value))}
                className="w-full h-1 bg-[#1C1C24] rounded cursor-pointer accent-[#6366F1]"
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#1C1C24] text-xs font-mono">
              <span className="text-[#9E9EA8]">VARIANCE ELLIPSOIDS:</span>
              <CompactPillSwitch
                checked={showEllipses}
                onChange={setShowEllipses}
                ariaLabel="Toggle variance ellipsoids"
              />
            </div>
          </div>

          {/* Vector Inspection Card */}
          <div className="p-4 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-[#818CF8] uppercase tracking-wider">
                POINT VECTOR TELEMETRY:
              </span>
              <span className="text-[10px] text-[#656570]">
                {hoveredPoint ? `ID: ${hoveredPoint.id}` : 'HOVER A POINT'}
              </span>
            </div>

            {hoveredPoint ? (
              <div className="space-y-3 pt-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#9E9EA8]">MANIFOLD:</span>
                  <span style={{ color: hoveredPoint.color }} className="font-semibold">
                    {hoveredPoint.clusterName}
                  </span>
                </div>

                <div className="flex justify-between text-[11px]">
                  <span className="text-[#9E9EA8]">PROJECTION 2D:</span>
                  <span className="text-[#F4F4F2]">
                    x: {hoveredPoint.px.toFixed(3)}, y: {hoveredPoint.py.toFixed(3)}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] text-[#656570] mb-1">
                    HIGH-DIMENSIONAL EMBEDDING SLICE [z₁..z₈]:
                  </div>
                  <div className="grid grid-cols-4 gap-1 p-2 bg-[#08080A] border border-[#1C1C24] rounded text-[10px] text-center">
                    {hoveredPoint.vector.map((val, idx) => (
                      <div key={idx} className="p-1 bg-[#121216] rounded text-emerald-400">
                        {val >= 0 ? `+${val}` : val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center text-[#656570] text-xs">
                Move cursor over canvas to inspect latent tensor coordinates and compute nearest-neighbor cosine similarity.
              </div>
            )}
          </div>

          <div className="p-3 bg-[#111114]/60 border border-[#1C1C22] rounded text-[11px] font-mono text-[#656570]">
            [INTERACTIVE MANIFOLD SIMULATION // TOPOLOGICAL EMBEDDINGS]
          </div>

        </div>

      </div>
    </div>
  );
}
