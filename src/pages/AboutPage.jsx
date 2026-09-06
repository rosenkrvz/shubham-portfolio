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

          {/* 1. Academic Foundation */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                01 // EDUCATION &amp; RESEARCH
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

          {/* 2. Exploration & Directions */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                02 // RESEARCH DIRECTIONS
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Research <span className="font-serif-editorial italic text-white font-normal lowercase">directions.</span>
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

          {/* 3. Technical Competencies */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                03 // TOOLKIT
              </span>
              <h2 className="type-h2 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Technical <span className="font-serif-editorial italic text-white font-normal lowercase">competencies.</span>
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

          {/* 4. Visual System & Design Tokens */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                04 // DESIGN SYSTEM &bull; VISUAL IDENTITY
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

          {/* 5. Principles */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                05 // THINKING &amp; METHODOLOGY
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
