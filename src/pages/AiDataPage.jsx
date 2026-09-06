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
  BarChart2
} from 'lucide-react';

export default function AiDataPage({ onShowToast }) {
  usePageMeta({
    title: 'AI, Data Science & Systems Philosophy — Shubham Sharma',
    description: 'Empirical problem formulation, high-dimensional latent manifolds, interactive decision boundaries, and hardware-conscious machine learning runtimes.',
    path: '/ai-data'
  });

  return (
    <PageTransition>
      <div className="min-h-screen py-12 lg:py-20 bg-[#08080A] text-[#F4F4F0]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* 01. Editorial Identity Header */}
          <div className="border-b border-[#1C1C22] pb-12">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#818CF8] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>DISCIPLINARY IDENTITY // AI &bull; DATA SCIENCE &bull; MATHEMATICS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mb-6 leading-[0.95]">
              Intelligence, <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl lowercase text-[#C7D2FE] mr-3">
                data &amp;
              </span>
              Optimization.
            </h1>

            <p className="text-base sm:text-xl text-[#9E9EA8] max-w-3xl font-light leading-relaxed">
              Engineering is implementation; analysis is understanding why. From high-dimensional latent representations to deterministic execution on edge silicon, I study how models generalize, where distributions shift, and how data becomes actionable signal.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <div className="px-3 py-1.5 bg-[#111114] border border-[#1C1C24] rounded text-xs font-mono text-[#818CF8]">
                IIT JODHPUR &bull; APPLIED AI
              </div>
              <div className="px-3 py-1.5 bg-[#111114] border border-[#1C1C24] rounded text-xs font-mono text-[#656570]">
                EMPIRICAL RIGOR OVER HEURISTICS
              </div>
            </div>
          </div>

          {/* 02. Analytical Foundations: How I Approach Problems */}
          <section className="space-y-12">
            <div className="flex flex-wrap items-baseline justify-between border-b border-[#1C1C22] pb-6">
              <div>
                <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                  [01 // EPISTEMOLOGY]
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                  How I Approach Problems
                </h2>
              </div>
              <span className="text-xs font-mono text-[#656570]">
                FIRST-PRINCIPLES METHODOLOGY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="w-8 h-8 rounded bg-[#16161F] border border-[#272738] flex items-center justify-center text-[#818CF8] font-mono text-xs font-bold">
                  01
                </div>
                <h3 className="text-base font-display font-semibold uppercase text-[#F4F4F2]">
                  Data Generating Process
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  Before training, formulate the underlying distribution and potential confounders. Models cannot learn what the data generating mechanism fails to capture.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="w-8 h-8 rounded bg-[#16161F] border border-[#272738] flex items-center justify-center text-[#818CF8] font-mono text-xs font-bold">
                  02
                </div>
                <h3 className="text-base font-display font-semibold uppercase text-[#F4F4F2]">
                  Inductive Biases
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  Select model architectures whose geometric symmetries mirror the domain—translation invariance for vision, causal masking for sequences, and graph topology for relational data.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="w-8 h-8 rounded bg-[#16161F] border border-[#272738] flex items-center justify-center text-[#818CF8] font-mono text-xs font-bold">
                  03
                </div>
                <h3 className="text-base font-display font-semibold uppercase text-[#F4F4F2]">
                  Optimization Geometry
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  Analyze loss surfaces, Hessian conditioning, and gradient descent trajectories to prevent saddle-point stagnation and catastrophic divergence.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="w-8 h-8 rounded bg-[#16161F] border border-[#272738] flex items-center justify-center text-[#818CF8] font-mono text-xs font-bold">
                  04
                </div>
                <h3 className="text-base font-display font-semibold uppercase text-[#F4F4F2]">
                  Hardware Grounding
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  A model is only as viable as its physical execution bounds. Quantize tensors to INT8/FP4, measure P99 tail latency, and verify zero-copy memory transfers.
                </p>
              </div>
            </div>
          </section>

          {/* 03. Interactive Visualizer 1: Decision Boundary Lab */}
          <section className="space-y-6">
            <div className="border-b border-[#1C1C22] pb-4">
              <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                [02 // CLASSIFICATION GEOMETRY]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                Model Decision Regions &amp; Inductive Bias
              </h2>
            </div>
            <DecisionBoundaryLab />
          </section>

          {/* 04. Interactive Visualizer 2: Dimensionality Reduction */}
          <section className="space-y-6">
            <div className="border-b border-[#1C1C22] pb-4">
              <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                [03 // MANIFOLD TOPOLOGY]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                Latent Spaces &amp; Dimensionality Reduction
              </h2>
            </div>
            <LatentSpaceExplorer />
          </section>

          {/* 05. Interactive Visualizer 3: Optimization Loss Landscape */}
          <section className="space-y-6">
            <div className="border-b border-[#1C1C22] pb-4">
              <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                [04 // FIRST-ORDER DYNAMICS]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                Loss Surfaces &amp; Convergence Trajectories
              </h2>
            </div>
            <OptimizationLossLandscape />
          </section>

          {/* 06. Theoretical Rigor: Mathematical Formulations */}
          <section className="space-y-8">
            <div className="border-b border-[#1C1C22] pb-4">
              <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                [05 // MATHEMATICAL FOUNDATIONS]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                Core Formulations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">01 // EMPIRICAL RISK MINIMIZATION</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  min_θ E_(x,y)~D [ L(f_θ(x), y) ] + λ Ω(θ)
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Balancing training sample fit against regularization penalty $\Omega(\theta)$ to control Rademacher complexity and prevent overfitting.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">02 // PRINCIPAL COMPONENT EIGENVALUES</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  C = (1/N) X^T X = V Λ V^T
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Maximizing projected sample variance by diagonalizing the empirical covariance matrix $\mathbf{C}$ through orthogonal eigenvectors $\mathbf{V}$.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">03 // RELATIVE ENTROPY (KL DIVERGENCE)</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  D_KL(P || Q) = Σ_i Σ_j p_ij log( p_ij / q_ij )
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Measuring the asymmetric information divergence between high-dimensional Gaussian affinities $P$ and low-dimensional Student-t probabilities $Q$.
                </p>
              </div>

              <div className="p-6 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-[11px] text-[#818CF8]">04 // TENSOR QUANTIZATION AFFINE SCALE</div>
                <div className="p-3 bg-[#08080A] border border-[#1C1C24] rounded text-sm text-[#F4F4F2] font-semibold">
                  q = clamp( round( r / S ) + Z, -128, 127 )
                </div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Mapping continuous 32-bit floating-point weights into signed 8-bit integers via dynamic scale factor $S$ and zero-point offset $Z$ for edge silicon acceleration.
                </p>
              </div>
            </div>
          </section>

          {/* 07. Curated Reading & Theoretical Influences */}
          <section className="space-y-8 border-t border-[#1C1C22] pt-12">
            <div>
              <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                [06 // FOUNDATIONAL LITERATURE]
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-1">
                Literature &amp; Theoretical Influences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-5 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-2">
                <div className="text-[10px] text-[#818CF8]">CHRISTOPHER M. BISHOP</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Pattern Recognition and Machine Learning</div>
                <p className="text-[11px] text-[#9E9EA8] font-sans leading-relaxed">
                  Bayesian inference, probability density estimation, and graphical models from a rigorous probabilistic perspective.
                </p>
              </div>

              <div className="p-5 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-2">
                <div className="text-[10px] text-[#818CF8]">E.T. JAYNES</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Probability Theory: The Logic of Science</div>
                <p className="text-[11px] text-[#9E9EA8] font-sans leading-relaxed">
                  Maximum entropy methods, plausible reasoning, and probability as an extension of deductive logic.
                </p>
              </div>

              <div className="p-5 bg-[#0E0E12] border border-[#1C1C24] rounded-sm space-y-2">
                <div className="text-[10px] text-[#818CF8]">GOODFELLOW, BENGIO, COURVILLE</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Deep Learning Foundations</div>
                <p className="text-[11px] text-[#9E9EA8] font-sans leading-relaxed">
                  Numerical computation, autoencoders, generative modeling, and optimization dynamics in deep neural architectures.
                </p>
              </div>
            </div>
          </section>

          {/* 08. Closing Transmission CTA */}
          <div className="p-8 sm:p-12 bg-[#0E0E12] border border-[#1C1C24] rounded-sm text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-bold font-display uppercase text-[#F4F4F0]">
              Interested in Discussing AI Systems or Research?
            </h3>
            <p className="text-sm sm:text-base text-[#9E9EA8] max-w-xl mx-auto font-light leading-relaxed">
              I am actively seeking research collaborations, machine learning internships, and systems engineering opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <MagneticButton
                as="div"
                className="px-6 py-3 bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-mono uppercase tracking-wider rounded-sm shadow-xl"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Initiate Discussion</span>
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
