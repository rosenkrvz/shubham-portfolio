import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Compass, Download, ArrowRight, CheckCircle2, Code2, Cpu } from 'lucide-react';
import { profile } from '../data/profile.js';
import { skillCategories } from '../data/skills.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import MagneticButton from '../components/ui/MagneticButton.jsx';
import TactileButton from '../components/ui/TactileButton.jsx';
import StatusIndicator from '../components/ui/StatusIndicator.jsx';
import ColorSystemCard from '../components/ui/ColorSystemCard.jsx';

export default function AboutPage({ onShowToast }) {
  usePageMeta({
    title: 'About & Dossier — Shubham Sharma | IIT Jodhpur',
    description: 'Academic background, technical direction, and engineering principles of Shubham Sharma, undergraduate in Applied AI & Data Science at IIT Jodhpur.',
    path: '/about'
  });

  const handleDownloadResume = () => {
    onShowToast?.({
      type: 'info',
      message: 'Preparing CV document...'
    });
    setTimeout(() => {
      onShowToast?.({
        type: 'success',
        message: 'Resume ready: Shubham_Sharma_IITJ_Resume.pdf'
      });
    }, 600);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-24 md:py-32 bg-[#09090B] text-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-20 sm:space-y-28">

          {/* Page Header */}
          <div className="space-y-6 border-b border-[#27272A]/50 pb-12">
            <div className="inline-flex items-center gap-2 type-label text-[#9A9A9A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
              <span>DOSSIER // IIT JODHPUR</span>
            </div>

            <h1 className="type-hero font-display font-medium uppercase tracking-tight text-[#FAFAFA] leading-[0.95]">
              Shubham <br />
              <span className="font-serif-editorial italic font-normal lowercase text-white mr-3">
                profile &amp;
              </span>
              Sharma
            </h1>

            <p className="type-body-lg text-[#E8E8E8] font-normal leading-relaxed">
              Undergraduate in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur).
            </p>

            <div className="space-y-4 max-w-[68ch]">
              <p className="type-body text-[#B0B0B0] leading-relaxed">
                I think through problems with mathematics, data distributions, and computational experiments. Software engineering is my instrument for building and validating ideas, but the primary curiosity has always been understanding how systems behave, how high-dimensional representations organize information, and how statistical models generalize.
              </p>
              <p className="type-body text-[#B0B0B0] leading-relaxed">
                Rather than treating algorithms as opaque black boxes, I build prototypes from mathematical foundations up &mdash; studying loss surfaces, measuring latency bounds, and testing edge failure modes on actual compute devices.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <TactileButton
                variant="primary"
                size="md"
                onClick={handleDownloadResume}
                icon={Download}
                led="active"
              >
                DOWNLOAD RESUME
              </TactileButton>

              <TactileButton
                as={Link}
                to="/contact"
                variant="secondary"
                size="md"
                icon={ArrowRight}
              >
                CONTACT ME
              </TactileButton>
            </div>
          </div>

          {/* 01. Academic Foundation */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                01 // EDUCATION
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Academic <span className="font-serif-editorial italic text-white font-normal lowercase">foundation.</span>
              </h2>
            </div>

            <div className="p-6 sm:p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 type-label text-[#B0B0B0]">
                    <GraduationCap className="w-4 h-4 text-[#9A9A9A]" />
                    <span>{profile.academic.degree}</span>
                  </div>
                  <h3 className="type-h3 font-display font-medium uppercase text-[#FAFAFA]">
                    {profile.academic.institution}
                  </h3>
                </div>
                <span className="type-label text-[#9A9A9A] px-2.5 py-1 rounded-[3px] bg-[#18181B] border border-[rgba(255,255,255,0.06)] self-start">
                  {profile.academic.period}
                </span>
              </div>

              <p className="type-body-sm text-[#B0B0B0] leading-relaxed pt-2 border-t border-[#27272A]/50">
                <strong className="text-[#FAFAFA] font-medium font-mono text-xs uppercase mr-2">Core Curriculum:</strong>
                Linear Algebra, Multivariate Optimization, Statistical Machine Learning, Deep Neural Networks, Computer Vision, Algorithms &amp; Complexity, Discrete Mathematics, and Distributed Systems.
              </p>

              <div className="p-4 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[4px] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div className="type-body-sm text-[#B0B0B0] leading-relaxed">
                  <strong className="text-[#FAFAFA] font-medium font-mono text-xs uppercase mr-2">Academic Standing:</strong>
                  Dean's List / Academic Merit Honor at IIT Jodhpur (2023 &mdash; 2024) for academic performance across foundational mathematics and computational science coursework.
                </div>
              </div>
            </div>
          </section>

          {/* 02. What I Work With */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                02 // WHAT I WORK WITH
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Toolkit &amp; <span className="font-serif-editorial italic text-white font-normal lowercase">runtimes.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {skillCategories.map((group) => (
                <div key={group.category} className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-4">
                  <div>
                    <h3 className="text-base font-semibold uppercase text-[#FAFAFA]">
                      {group.category}
                    </h3>
                    <p className="type-body-sm text-[#9A9A9A] mt-0.5">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="p-3.5 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] space-y-1">
                        <div className="text-xs font-mono font-medium text-[#FAFAFA]">
                          {skill.name}
                        </div>
                        <div className="type-body-sm text-[#B0B0B0] leading-relaxed">
                          {skill.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 03. What I Am Interested In */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                03 // WHAT I AM INTERESTED IN
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Core <span className="font-serif-editorial italic text-white font-normal lowercase">curiosities.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Machine Learning', desc: 'Inductive bias, loss surface curvature, generalization bounds, and model compression.' },
                { title: 'Data Analysis', desc: 'Statistical distributions, Shapley feature attribution, and empirical hypothesis testing.' },
                { title: 'Mathematics', desc: 'Spectral matrix decomposition, continuous optimization, and high-dimensional geometry.' },
                { title: 'Algorithms & Complexity', desc: 'Approximate nearest-neighbor graphs (HNSW), cache-conscious spatial filtering, and SIMD execution.' },
                { title: 'AI Systems', desc: 'Zero-copy memory layouts, cryptographic tensor attestation, and deterministic inference on edge NPUs.' },
                { title: 'Visualization & Computing', desc: 'Topological manifolds in WebGL/GLSL, Riemannian surfaces, and interactive scientific notebooks.' }
              ].map((item) => (
                <div key={item.title} className="p-5 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                  <div className="type-label text-[#E10600] font-mono">&bull; DISCIPLINE</div>
                  <h3 className="text-base font-semibold uppercase text-[#FAFAFA]">{item.title}</h3>
                  <p className="type-body-sm text-[#B0B0B0] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 04. Currently Exploring */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                04 // CURRENTLY EXPLORING
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Active <span className="font-serif-editorial italic text-white font-normal lowercase">inquiries.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#18181B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FAFAFA]">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold uppercase text-[#FAFAFA]">
                  Model Optimization &amp; Edge Inference
                </h3>
                <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
                  Exploring post-training quantization (INT8/FP4), ONNX Runtime execution graphs, and memory-conscious tensor layouts on constrained compute hardware.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#18181B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FAFAFA]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold uppercase text-[#FAFAFA]">
                  Spatial Vision &amp; Dithering
                </h3>
                <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
                  Investigating spatial error-diffusion kernels (Floyd-Steinberg, Bayer) to compress live telemetry streams while preserving geometric contours and boundaries.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#18181B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FAFAFA]">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold uppercase text-[#FAFAFA]">
                  Computational Pipelines
                </h3>
                <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
                  Designing event-driven streaming pipelines with Python AsyncIO, FastAPI, and Redis streams to serve low-latency model inferences reliably.
                </p>
              </div>
            </div>
          </section>

          {/* 05. Timeline */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                05 // TIMELINE
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Academic &amp; Project <span className="font-serif-editorial italic text-white font-normal lowercase">milestones.</span>
              </h2>
            </div>

            <div className="relative border-l border-[#27272A]/70 pl-6 sm:pl-8 space-y-8 ml-2">
              {[
                {
                  year: '2026',
                  tag: 'ACTIVE RESEARCH',
                  title: 'Hardware-Conscious Neural Quantization & Attestation',
                  institution: 'IIT Jodhpur',
                  desc: 'Developing deterministic weight integrity verification (Sentinel NPU) and investigating INT8/FP4 micro-scaling kernels on ARM NPU silicon.'
                },
                {
                  year: '2025',
                  tag: 'SYSTEMS ARCHITECTURE',
                  title: 'Distributed Vector Mesh & Asynchronous Event Brokering',
                  institution: 'IIT Jodhpur',
                  desc: 'Engineered HNSW approximate nearest-neighbor search over gRPC and sub-12ms event broker with FastAPI and Redis Streams.'
                },
                {
                  year: '2024',
                  tag: 'ACADEMIC RECOGNITION',
                  title: "Dean's List / Academic Merit Distinction",
                  institution: 'IIT Jodhpur',
                  desc: 'Honored for exceptional GPA across foundational linear algebra, multivariate calculus, discrete algorithms, and statistical modeling coursework.'
                },
                {
                  year: '2023',
                  tag: 'FOUNDATIONAL MATRICULATION',
                  title: 'Admitted to B.S. in Applied AI & Data Science',
                  institution: 'Indian Institute of Technology Jodhpur',
                  desc: 'Commenced undergraduate training spanning continuous mathematics, probability theory, computer science fundamentals, and data structures.'
                }
              ].map((m) => (
                <div key={m.year + m.title} className="relative space-y-2 group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#18181B] border-2 border-[#E10600] group-hover:bg-[#E10600] transition-colors" />
                  <div className="flex flex-wrap items-center gap-3 type-label">
                    <span className="text-base font-mono font-bold text-[#FAFAFA]">{m.year}</span>
                    <span className="px-2 py-0.5 rounded-[3px] bg-[#18181B] border border-[rgba(255,255,255,0.06)] text-[#9A9A9A] text-[10px] uppercase font-mono">
                      {m.tag}
                    </span>
                    <span className="text-[#52525B]">&bull;</span>
                    <span className="text-[#9A9A9A]">{m.institution}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#FAFAFA] group-hover:text-white transition-colors">
                    {m.title}
                  </h3>
                  <p className="type-body-sm text-[#B0B0B0] leading-relaxed max-w-[65ch]">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 06. Visual System & Design Tokens */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                06 // DESIGN SYSTEM &bull; VISUAL IDENTITY
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Visual <span className="font-serif-editorial italic text-white font-normal lowercase">language.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px]">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-base font-semibold uppercase text-[#FAFAFA]">
                  Structural Discipline &bull; Clear Contrast
                </h3>
                <p className="type-body text-[#B0B0B0] leading-relaxed">
                  Design should prioritize legibility and purposeful interaction. The interface uses a monochromatic spectrum from Deep Zinc <code className="text-[#FAFAFA] bg-[#18181B] px-1.5 py-0.5 rounded text-xs font-mono">#09090B</code> to Crisp Ink <code className="text-[#FAFAFA] bg-[#18181B] px-1.5 py-0.5 rounded text-xs font-mono">#FAFAFA</code>, anchored by tactile physical controls and high-contrast typography.
                </p>
                <p className="type-body text-[#9A9A9A] leading-relaxed">
                  Accent red <code className="text-[#E10600] bg-[#18181B] px-1.5 py-0.5 rounded text-xs font-mono">#E10600</code> is reserved strictly for high-consequence state signals: active telemetry indicators, selected interactive modes, and physical toggles.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <ColorSystemCard
                  onCopyHex={(msg) => onShowToast?.({ type: 'success', message: msg })}
                />
              </div>
            </div>
          </section>

          {/* 07. Principles */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                07 // THINKING &amp; METHODOLOGY
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Working <span className="font-serif-editorial italic text-white font-normal lowercase">principles.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <h3 className="text-base font-semibold text-[#FAFAFA]">
                  1. Formulate From Mathematical Foundations
                </h3>
                <p className="type-body text-[#B0B0B0] leading-relaxed">
                  Before importing a library or fitting parameters, I formulate the underlying mathematics. Understanding loss curvatures, gradient trajectories, and data geometry makes model debugging direct and principled.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <h3 className="text-base font-semibold text-[#FAFAFA]">
                  2. Empirical Measurement Before Optimization
                </h3>
                <p className="type-body text-[#B0B0B0] leading-relaxed">
                  Intuition about performance is often misleading. Every claim must be substantiated by empirical profiler measurements &mdash; whether tracking memory bandwidth in PyTorch or async throughput in network pipelines.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <h3 className="text-base font-semibold text-[#FAFAFA]">
                  3. Interpretability &amp; Simplicity Over Complexity
                </h3>
                <p className="type-body text-[#B0B0B0] leading-relaxed">
                  Reliable systems are interpretable, testable, and reproducible. A clean model whose error modes can be understood and explained is far more valuable in production than an oversized network with unpredictable failures.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="pt-12 border-t border-[#27272A]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="type-body-lg font-medium uppercase tracking-tight text-[#FAFAFA]">Interested in collaborating or discussing an opportunity?</div>
              <div className="type-body-sm text-[#9A9A9A] mt-1">Open for machine learning internships, data science research, and computational engineering.</div>
            </div>
            <TactileButton
              as={Link}
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowRight}
              led="active"
            >
              CONTACT ME
            </TactileButton>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
