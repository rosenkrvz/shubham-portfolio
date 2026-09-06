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
      <div className="min-h-screen py-14 sm:py-20 lg:py-24 bg-[#08080A] text-[#F4F4F0]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* 01. Analytical Scientific Hero */}
          <div className="border-b border-[#1C1C22] pb-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#818CF8] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30 animate-pulse" />
              <span>DISCIPLINARY CORE // AI &bull; DATA SCIENCE &bull; MATHEMATICS</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
              AI / DATA
            </h1>

            <p className="text-xl sm:text-3xl text-[#C7D2FE] font-light max-w-2xl leading-snug">
              Exploring models, patterns and systems.
            </p>

            <p className="text-sm sm:text-base text-[#9E9EA8] max-w-3xl font-light leading-relaxed">
              Studying Applied AI &amp; Data Science at IIT Jodhpur. From statistical distributions and high-dimensional latent spaces to deterministic inference on physical hardware, I focus on how models formulate reality, generalize beyond training distributions, and execute under strict computational budgets.
            </p>

            {/* Technical Flow Label Banner */}
            <div className="p-4 bg-[#0B0B0E] border border-[#1C1C24] rounded-sm font-mono text-xs flex flex-wrap items-center justify-between gap-4 text-[#818CF8]">
              <div className="flex items-center gap-2">
                <span className="text-[#656570]">CANONICAL PIPELINE:</span>
                <span className="px-2 py-0.5 bg-[#14141C] text-white rounded">DATASET</span>
                <span className="text-[#656570]">&rarr;</span>
                <span className="px-2 py-0.5 bg-[#14141C] text-white rounded">TRANSFORMATION</span>
                <span className="text-[#656570]">&rarr;</span>
                <span className="px-2 py-0.5 bg-[#14141C] text-white rounded">MODEL</span>
                <span className="text-[#656570]">&rarr;</span>
                <span className="px-2 py-0.5 bg-[#14141C] text-emerald-400 rounded">EVALUATION</span>
              </div>

              <div className="text-[11px] text-[#656570]">
                INPUT &rarr; FEATURES &rarr; MODEL &rarr; OUTPUT
              </div>
            </div>
          </div>

          {/* PILLAR 1: MODELS */}
          <section className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                  [01 // MODELS]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                  Architectural <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">inductive</span> Bias
                </h2>
              </div>
              <span className="text-xs font-mono text-[#656570]">
                LINEAR SOFTMAX &bull; RBF KERNEL &bull; RANDOM FOREST
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#9E9EA8] max-w-2xl font-light leading-relaxed">
              Every machine learning algorithm introduces specific inductive biases regarding how the feature space should be partitioned. An interactive 2D canvas demonstrates classification region geometry in real time.
            </p>

            <DecisionBoundaryLab />
          </section>

          {/* PILLAR 2: DATA & DIMENSIONALITY */}
          <section className="space-y-8 pt-8 border-t border-[#1C1C22]">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase">
                  [02 // DATA]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                  Latent <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">spaces</span> &amp; Embeddings
                </h2>
              </div>
              <span className="text-xs font-mono text-[#656570]">
                64D &rarr; 2D TOPOLOGICAL PROJECTION
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#9E9EA8] max-w-2xl font-light leading-relaxed">
              High-dimensional tensors preserve geometric relationships that become legible through topological dimensionality reduction. Inspect vector coordinates, cluster centroids, and covariance ellipsoids.
            </p>

            <LatentSpaceExplorer />
          </section>

          {/* PILLAR 3: ANALYSIS & LOSS LANDSCAPES */}
          <section className="space-y-8 pt-8 border-t border-[#1C1C22]">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#34D399] tracking-widest uppercase">
                  [03 // ANALYSIS]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                  Loss <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">surfaces</span> &amp; Optimization
                </h2>
              </div>
              <span className="text-xs font-mono text-[#656570]">
                SGD &bull; MOMENTUM &bull; ADAM FIRST-ORDER DYNAMICS
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#9E9EA8] max-w-2xl font-light leading-relaxed">
              Analyzing non-convex loss manifolds, saddle points, and stochastic gradient trajectories to understand generalization behavior and training stability.
            </p>

            <OptimizationLossLandscape />
          </section>

          {/* PILLAR 4: EXPERIMENTS & MATHEMATICAL FORMULATIONS */}
          <section className="space-y-8 pt-8 border-t border-[#1C1C22]">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase">
                  [04 // EXPERIMENTS &amp; FORMULATIONS]
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                  Mathematical <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">notations</span>
                </h2>
              </div>
              <span className="text-xs font-mono text-[#656570]">
                THEORETICAL RIGOR OVER HEURISTICS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">01 // EMPIRICAL RISK MINIMIZATION</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  min_θ E_(x,y)~D [ L(f_θ(x), y) ] + λ Ω(θ)
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Balancing empirical sample loss against regularization penalty to control model complexity and prevent overfitting.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">02 // PRINCIPAL COMPONENT COVARIANCE</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  C = (1/N) X^T X = V Λ V^T
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Maximizing variance along projected axes through orthogonal spectral decomposition of empirical covariance matrix C.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">03 // KULLBACK-LEIBLER DIVERGENCE</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  D_KL(P || Q) = Σ_i Σ_j p_ij log( p_ij / q_ij )
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Relative entropy measuring information loss when approximating high-dimensional Gaussian affinities P with Student-t kernel Q.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">04 // INT8 UNIFORM AFFINE QUANTIZATION</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  q = clamp( round( r / S ) + Z, -128, 127 )
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Mapping continuous floating-point tensor weights to signed 8-bit integers via scale factor S and zero-point offset Z.
                </p>
              </div>
            </div>
          </section>

          {/* FOUNDATIONAL LITERATURE */}
          <section className="space-y-6 pt-8 border-t border-[#1C1C22]">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                  [05 // LITERATURE]
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                  Theoretical Influences
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-5 bg-[#0C0C10] border border-[#1C1C24] rounded-sm space-y-2">
                <div className="text-[10px] text-[#818CF8]">CHRISTOPHER M. BISHOP</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Pattern Recognition and Machine Learning</div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Bayesian probability densities, linear regression, kernels, and graphical models.
                </p>
              </div>

              <div className="p-5 bg-[#0C0C10] border border-[#1C1C24] rounded-sm space-y-2">
                <div className="text-[10px] text-[#818CF8]">E.T. JAYNES</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Probability Theory: The Logic of Science</div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Maximum entropy formulations and probability as deductive mathematical logic.
                </p>
              </div>

              <div className="p-5 bg-[#0C0C10] border border-[#1C1C24] rounded-sm space-y-2">
                <div className="text-[10px] text-[#818CF8]">GOODFELLOW, BENGIO, COURVILLE</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Deep Learning Foundations</div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
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
