import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import DecisionBoundaryLab from '../components/ai/DecisionBoundaryLab.jsx';
import LatentSpaceExplorer from '../components/ai/LatentSpaceExplorer.jsx';
import OptimizationLossLandscape from '../components/ai/OptimizationLossLandscape.jsx';
import MagneticButton from '../components/ui/MagneticButton.jsx';
import {
  Brain,
  Binary,
  Compass,
  Activity,
  Layers,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  BarChart2,
  Database,
  Terminal
} from 'lucide-react';

export default function AiDataPage({ onShowToast }) {
  usePageMeta({
    title: 'AI & Data Science — Shubham Sharma | IIT Jodhpur',
    description: 'Exploring models, patterns and systems. Empirical problem formulation, high-dimensional latent manifolds, and hardware-conscious machine learning runtimes.',
    path: '/ai-data'
  });

  return (
    <PageTransition>
      <div className="min-h-screen py-24 md:py-32 bg-[#09090B] text-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-24 md:space-y-32">

          {/* 01. Analytical Scientific Hero */}
          <div className="border-b border-[#27272A]/50 pb-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#71717A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30" />
              <span>DISCIPLINARY CORE // AI &bull; DATA SCIENCE &bull; MATHEMATICS</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] leading-[0.92]">
              AI / DATA
            </h1>

            <p className="text-xl sm:text-2xl text-[#FAFAFA] font-light max-w-[65ch] leading-snug">
              Exploring models, patterns and systems.
            </p>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-[65ch] font-light leading-relaxed">
              Studying Applied AI &amp; Data Science at IIT Jodhpur. From statistical distributions and high-dimensional latent manifolds to deterministic inference on physical hardware, I focus on how models formulate reality, generalize beyond training distributions, and execute under strict computational budgets.
            </p>

            {/* Technical Flow Label Banner — Editorial Hairline Channel */}
            <div className="p-4 sm:p-5 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] font-mono text-xs flex flex-wrap items-center justify-between gap-4 text-[#A1A1AA]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#71717A] text-[11px] uppercase tracking-wider mr-1">CANONICAL PIPELINE:</span>
                <span className="px-2.5 py-1 bg-[#09090B] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] rounded-[3px]">DATASET</span>
                <span className="text-[#71717A]">&rarr;</span>
                <span className="px-2.5 py-1 bg-[#09090B] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] rounded-[3px]">TRANSFORMATION</span>
                <span className="text-[#71717A]">&rarr;</span>
                <span className="px-2.5 py-1 bg-[#09090B] border border-[rgba(255,255,255,0.08)] text-[#FAFAFA] rounded-[3px]">MODEL</span>
                <span className="text-[#71717A]">&rarr;</span>
                <span className="px-2.5 py-1 bg-[#09090B] border border-emerald-500/30 text-emerald-400 rounded-[3px]">EVALUATION</span>
              </div>

              <div className="text-[11px] text-[#71717A]">
                INPUT &rarr; FEATURES &rarr; MODEL &rarr; OUTPUT
              </div>
            </div>
          </div>

          {/* PILLAR 1: MODELS */}
          <section className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#27272A]/50 pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                  [01 // MODELS]
                </span>
                <h2 className="text-3xl sm:text-5xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] mt-1">
                  Architectural <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">inductive</span> Bias
                </h2>
              </div>
              <span className="text-xs font-mono text-[#71717A]">
                LINEAR SOFTMAX &bull; RBF KERNEL &bull; RANDOM FOREST
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-[65ch] font-light leading-relaxed">
              Every machine learning algorithm introduces specific inductive biases regarding how the feature space should be partitioned. An interactive 2D canvas demonstrates classification region geometry in real time.
            </p>

            <DecisionBoundaryLab />
          </section>

          {/* PILLAR 2: DATA & DIMENSIONALITY */}
          <section className="space-y-8 pt-16 border-t border-[#27272A]/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#27272A]/50 pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                  [02 // DATA]
                </span>
                <h2 className="text-3xl sm:text-5xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] mt-1">
                  Latent <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">spaces</span> &amp; Embeddings
                </h2>
              </div>
              <span className="text-xs font-mono text-[#71717A]">
                64D &rarr; 2D TOPOLOGICAL PROJECTION
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-[65ch] font-light leading-relaxed">
              High-dimensional tensors preserve geometric relationships that become legible through topological dimensionality reduction. Inspect vector coordinates, cluster centroids, and covariance ellipsoids.
            </p>

            <LatentSpaceExplorer />
          </section>

          {/* PILLAR 3: ANALYSIS & LOSS LANDSCAPES */}
          <section className="space-y-8 pt-16 border-t border-[#27272A]/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#27272A]/50 pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                  [03 // ANALYSIS]
                </span>
                <h2 className="text-3xl sm:text-5xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] mt-1">
                  Loss <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">surfaces</span> &amp; Optimization
                </h2>
              </div>
              <span className="text-xs font-mono text-[#71717A]">
                SGD &bull; MOMENTUM &bull; ADAM FIRST-ORDER DYNAMICS
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-[65ch] font-light leading-relaxed">
              Analyzing non-convex loss manifolds, saddle points, and stochastic gradient trajectories to understand generalization behavior and training stability.
            </p>

            <OptimizationLossLandscape />
          </section>

          {/* PILLAR 4: EXPERIMENTS & MATHEMATICAL FORMULATIONS */}
          <section className="space-y-8 pt-16 border-t border-[#27272A]/50">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#27272A]/50 pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                  [04 // EXPERIMENTS &amp; FORMULATIONS]
                </span>
                <h2 className="text-3xl sm:text-5xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] mt-1">
                  Mathematical <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">notations</span>
                </h2>
              </div>
              <span className="text-xs font-mono text-[#71717A]">
                THEORETICAL RIGOR OVER HEURISTICS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="text-[11px] text-[#71717A]">01 // EMPIRICAL RISK MINIMIZATION</div>
                <div className="p-3.5 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] text-sm text-[#FAFAFA] font-medium">
                  min_θ E_(x,y)~D [ L(f_θ(x), y) ] + λ Ω(θ)
                </div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Balancing empirical sample loss against regularization penalty to control model complexity and prevent overfitting.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="text-[11px] text-[#71717A]">02 // PRINCIPAL COMPONENT COVARIANCE</div>
                <div className="p-3.5 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] text-sm text-[#FAFAFA] font-medium">
                  C = (1/N) X^T X = V Λ V^T
                </div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Maximizing variance along projected axes through orthogonal spectral decomposition of empirical covariance matrix C.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="text-[11px] text-[#71717A]">03 // KULLBACK-LEIBLER DIVERGENCE</div>
                <div className="p-3.5 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] text-sm text-[#FAFAFA] font-medium">
                  D_KL(P || Q) = Σ_i Σ_j p_ij log( p_ij / q_ij )
                </div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Relative entropy measuring information loss when approximating high-dimensional Gaussian affinities P with Student-t kernel Q.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="text-[11px] text-[#71717A]">04 // INT8 UNIFORM AFFINE QUANTIZATION</div>
                <div className="p-3.5 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] text-sm text-[#FAFAFA] font-medium">
                  q = clamp( round( r / S ) + Z, -128, 127 )
                </div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Mapping continuous floating-point tensor weights to signed 8-bit integers via scale factor S and zero-point offset Z.
                </p>
              </div>
            </div>
          </section>

          {/* FOUNDATIONAL LITERATURE */}
          <section className="space-y-6 pt-16 border-t border-[#27272A]/50">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#71717A] tracking-widest uppercase">
                  [05 // LITERATURE]
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] mt-1">
                  Theoretical Influences
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <div className="text-[10px] text-[#71717A]">CHRISTOPHER M. BISHOP</div>
                <div className="text-sm font-medium text-[#FAFAFA]">Pattern Recognition and Machine Learning</div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Bayesian probability densities, linear regression, kernels, and graphical models.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <div className="text-[10px] text-[#71717A]">E.T. JAYNES</div>
                <div className="text-sm font-medium text-[#FAFAFA]">Probability Theory: The Logic of Science</div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Maximum entropy formulations and probability as deductive mathematical logic.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <div className="text-[10px] text-[#71717A]">GOODFELLOW, BENGIO, COURVILLE</div>
                <div className="text-sm font-medium text-[#FAFAFA]">Deep Learning Foundations</div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  Numerical optimization, convolutional kernels, representation learning, and autoencoders.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}
