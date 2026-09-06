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
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#71717A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
              <span>DOSSIER // IIT JODHPUR</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium uppercase tracking-tight text-[#FAFAFA] leading-tight">
              Shubham <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lowercase text-white mr-3">
                about the
              </span>
              Sharma
            </h1>

            <p className="text-xl sm:text-2xl text-[#A1A1AA] font-normal leading-relaxed">
              Undergraduate in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur).
            </p>

            <p className="text-base text-[#71717A] leading-[1.75] max-w-[65ch]">
              I am driven by understanding how computational systems operate from mathematical first principles. My work centers on edge neural runtime integrity, spatial computer vision algorithms, and resilient asynchronous backend services.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <TactileButton
                variant="primary"
                size="md"
                onClick={handleDownloadResume}
                icon={Download}
                led="active"
              >
                Download CV (PDF)
              </TactileButton>

              <TactileButton
                as={Link}
                to="/contact"
                variant="secondary"
                size="md"
                icon={ArrowRight}
              >
                Contact Direct
              </TactileButton>
            </div>
          </div>

          {/* 1. Academic Foundation */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#71717A] font-mono">
                01 // EDUCATION &amp; RESEARCH
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Academic <span className="font-serif-editorial italic text-white font-normal lowercase">foundation.</span>
              </h2>
            </div>

            <div className="p-6 sm:p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                    <GraduationCap className="w-4 h-4" />
                    <span>{profile.academic.degree}</span>
                  </div>
                  <h3 className="text-lg font-display font-medium uppercase text-[#FAFAFA]">
                    {profile.academic.institution}
                  </h3>
                </div>
                <span className="text-xs text-[#71717A] font-mono px-2.5 py-1 rounded-[3px] bg-[#18181B] border border-[rgba(255,255,255,0.06)] self-start">
                  {profile.academic.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pt-2 border-t border-[#27272A]/50 font-mono">
                <strong className="text-[#FAFAFA]">CORE CURRICULUM:</strong> Linear Algebra, Multivariate Optimization, Deep Neural Networks, Computer Vision, Algorithms &amp; Data Structures, Discrete Mathematics, Distributed Systems.
              </p>

              <div className="p-4 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[4px] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-xs text-[#A1A1AA] leading-relaxed font-mono">
                  <strong className="text-[#FAFAFA]">ACADEMIC MERIT:</strong> Awarded Dean's List / Academic Merit Honor at IIT Jodhpur (2023 — 2024) for top academic standing across foundational mathematics and computer science coursework.
                </div>
              </div>
            </div>
          </section>

          {/* 2. Exploration & Directions */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#71717A] font-mono">
                02 // RESEARCH VECTORS
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Technical <span className="font-serif-editorial italic text-white font-normal lowercase">directions.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#18181B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FAFAFA]">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-display font-medium uppercase text-[#FAFAFA]">
                  Model Optimization &amp; Edge Inference
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Exploring post-training quantization (INT8/FP4), ONNX Runtime execution graphs, and memory-conscious tensor layouts on edge hardware.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#18181B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FAFAFA]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-display font-medium uppercase text-[#FAFAFA]">
                  Spatial Vision &amp; Dithering
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Investigating spatial error-diffusion kernels (Floyd-Steinberg, Bayer) to compress live telemetry streams while preserving facial contours and edge boundaries.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#18181B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FAFAFA]">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-display font-medium uppercase text-[#FAFAFA]">
                  Concurrent Backend Services
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Designing event-driven streaming pipelines with Python AsyncIO, FastAPI, Redis streams, and PostgreSQL to serve low-latency inference predictions.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Technical Competencies */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#71717A] font-mono">
                03 // TOOLKIT
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Technical <span className="font-serif-editorial italic text-white font-normal lowercase">competencies.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {skillCategories.map((group) => (
                <div key={group.category} className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-4">
                  <div>
                    <h3 className="text-base font-display font-medium uppercase text-[#FAFAFA]">
                      {group.category}
                    </h3>
                    <p className="text-xs text-[#71717A] mt-0.5">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="p-3 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[3px] space-y-1">
                        <div className="text-xs font-mono font-medium text-[#FAFAFA]">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-[#71717A] leading-relaxed">
                          {skill.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Visual System & Design Tokens */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#71717A] font-mono">
                03 // DESIGN SYSTEM &bull; VISUAL IDENTITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Visual <span className="font-serif-editorial italic text-white font-normal lowercase">language.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px]">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-display font-medium uppercase text-[#FAFAFA]">
                  Minimal Structure &bull; Expressive Typography
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Minimalism is not empty space; it is structural discipline. The interface uses a strictly controlled monochromatic palette spanning Deep Zinc <code className="text-[#FAFAFA] bg-[#18181B] px-1.5 py-0.5 rounded text-xs">#09090B</code> to Crisp Ink <code className="text-[#FAFAFA] bg-[#18181B] px-1.5 py-0.5 rounded text-xs">#FAFAFA</code>, complemented by an intentional Accent Red <code className="text-[#E10600] bg-[#18181B] px-1.5 py-0.5 rounded text-xs">#E10600</code>.
                </p>
                <p className="text-sm text-[#71717A] leading-relaxed">
                  Accent red is reserved strictly for high-consequence state signals: active telemetry indicators, selected modes, and physical interactive controls.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <ColorSystemCard
                  onCopyHex={(msg) => onShowToast?.({ type: 'success', message: msg })}
                />
              </div>
            </div>
          </section>

          {/* 4. Engineering Principles */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#71717A] font-mono">
                04 // PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                Engineering <span className="font-serif-editorial italic text-white font-normal lowercase">principles.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <h3 className="text-sm font-mono font-medium uppercase text-[#FAFAFA]">
                  1. First-Principles Understanding
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  Before importing a library or tweaking hyperparameters, I write out the mathematical formulations on paper. Understanding gradients, loss surfaces, and time complexity makes debugging direct and effective.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <h3 className="text-sm font-mono font-medium uppercase text-[#FAFAFA]">
                  2. Measure Before Optimizing
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  Premature optimization creates tangled code. Every performance claim must be accompanied by profiler data — whether measuring socket throughput in Python or tensor memory allocations in PyTorch.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <h3 className="text-sm font-mono font-medium uppercase text-[#FAFAFA]">
                  3. Simplicity Over Cleverness
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  Maintainable software is readable, testable, and minimal. A clean tabular model that can be explained to non-technical stakeholders is far superior to an uninterpretable neural network when the data does not require it.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="pt-12 border-t border-[#27272A]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-base font-display uppercase tracking-tight text-[#FAFAFA]">Interested in collaborating or discussing a role?</div>
              <div className="text-xs font-mono text-[#71717A] mt-1">Open for technical internships, engineering roles, and academic collaborations.</div>
            </div>
            <TactileButton
              as={Link}
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowRight}
              led="active"
            >
              Get in Touch
            </TactileButton>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
