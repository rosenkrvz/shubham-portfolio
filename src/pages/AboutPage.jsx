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
      <div className="min-h-screen py-14 sm:py-20 lg:py-24 bg-[#08080A] text-[#F4F4F0]">
        <div className="max-w-4xl mx-auto px-6 space-y-16 sm:space-y-24">

          {/* Page Header */}
          <div className="space-y-6 border-b border-[#1C1C22] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#818CF8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
              <span>DOSSIER // IIT JODHPUR</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-[#F4F4F0] leading-tight">
              Shubham <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lowercase text-[#C7D2FE] mr-3">
                about the
              </span>
              Sharma
            </h1>

            <p className="text-lg sm:text-2xl text-[#9E9EA8] font-light leading-relaxed">
              Undergraduate in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur).
            </p>

            <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed max-w-2xl font-light">
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
              <span className="text-xs uppercase tracking-widest text-[#818CF8] font-mono">
                01 // EDUCATION &amp; RESEARCH
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-[#F4F4F0] tracking-tight">
                Academic <span className="font-serif-editorial italic text-[#C7D2FE] font-normal lowercase">foundation.</span>
              </h2>
            </div>

            <div className="p-6 sm:p-8 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8]">
                    <GraduationCap className="w-4 h-4" />
                    <span>{profile.academic.degree}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold uppercase text-[#F4F4F0]">
                    {profile.academic.institution}
                  </h3>
                </div>
                <span className="text-xs text-[#9E9EA8] font-mono px-3 py-1 rounded bg-[#16161D] border border-[#272734] self-start">
                  {profile.academic.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed pt-2 border-t border-[#1C1C24] font-mono">
                <strong className="text-[#F4F4F0]">CORE CURRICULUM:</strong> Linear Algebra, Multivariate Optimization, Deep Neural Networks, Computer Vision, Algorithms &amp; Data Structures, Discrete Mathematics, Distributed Systems.
              </p>

              <div className="p-4 bg-[#0C0C0E] border border-[#1F1F28] rounded flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-xs text-[#9E9EA8] leading-relaxed font-mono">
                  <strong className="text-[#F4F4F0]">ACADEMIC MERIT:</strong> Awarded Dean's List / Academic Merit Honor at IIT Jodhpur (2023 — 2024) for top academic standing across foundational mathematics and computer science coursework.
                </div>
              </div>
            </div>
          </section>

          {/* 2. Exploration & Directions */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#818CF8] font-mono">
                02 // RESEARCH VECTORS
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-[#F4F4F0] tracking-tight">
                Technical <span className="font-serif-editorial italic text-[#C7D2FE] font-normal lowercase">directions.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="w-8 h-8 rounded bg-[#16161D] border border-[#272734] flex items-center justify-center text-[#818CF8]">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-display font-semibold uppercase text-[#F4F4F0]">
                  Model Optimization &amp; Edge Inference
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed font-light">
                  Exploring post-training quantization (INT8/FP4), ONNX Runtime execution graphs, and memory-conscious tensor layouts on edge hardware.
                </p>
              </div>

              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="w-8 h-8 rounded bg-[#16161D] border border-[#272734] flex items-center justify-center text-[#818CF8]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-display font-semibold uppercase text-[#F4F4F0]">
                  Spatial Vision &amp; Dithering
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed font-light">
                  Investigating spatial error-diffusion kernels (Floyd-Steinberg, Bayer) to compress live telemetry streams while preserving facial contours and edge boundaries.
                </p>
              </div>

              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="w-8 h-8 rounded bg-[#16161D] border border-[#272734] flex items-center justify-center text-[#818CF8]">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-display font-semibold uppercase text-[#F4F4F0]">
                  Concurrent Backend Services
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed font-light">
                  Designing event-driven streaming pipelines with Python AsyncIO, FastAPI, Redis streams, and PostgreSQL to serve low-latency inference predictions.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Technical Competencies */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#818CF8] font-mono">
                03 // TOOLKIT
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-[#F4F4F0] tracking-tight">
                Technical <span className="font-serif-editorial italic text-[#C7D2FE] font-normal lowercase">competencies.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {skillCategories.map((group) => (
                <div key={group.category} className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-4">
                  <div>
                    <h3 className="text-base font-display font-semibold uppercase text-[#F4F4F0]">
                      {group.category}
                    </h3>
                    <p className="text-xs text-[#9E9EA8] mt-0.5">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="p-3 bg-[#0C0C0E] border border-[#1F1F28] rounded space-y-1">
                        <div className="text-xs font-mono font-semibold text-[#F4F4F2]">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-[#656570] leading-relaxed">
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
              <span className="text-xs uppercase tracking-widest text-[#818CF8] font-mono">
                03 // DESIGN SYSTEM &bull; VISUAL IDENTITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-[#F4F4F0] tracking-tight">
                Visual <span className="font-serif-editorial italic text-[#C7D2FE] font-normal lowercase">language.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 bg-[#111114] border border-[#1C1C24] rounded-sm">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-display font-semibold uppercase text-[#F4F4F2]">
                  Minimal Structure &bull; Expressive Art Direction
                </h3>
                <p className="text-sm text-[#9E9EA8] font-light leading-relaxed">
                  Minimalism is not empty space; it is structural discipline. The interface uses a strictly controlled monochromatic palette spanning Pitch Black <code className="text-[#F4F4F2] bg-[#1C1C24] px-1 py-0.5 rounded text-xs">#000000</code> to Anti-Flash White <code className="text-[#F4F4F2] bg-[#1C1C24] px-1 py-0.5 rounded text-xs">#F3F3F3</code>, complemented by an intentional Accent Red <code className="text-[#E10600] bg-[#1C1C24] px-1 py-0.5 rounded text-xs">#E10600</code>.
                </p>
                <p className="text-sm text-[#9E9EA8] font-light leading-relaxed">
                  Accent red is reserved strictly for high-consequence state signals: telemetry warnings, active LED indicators, and physical error thresholds. Click any token on the card to copy its raw hex value.
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
              <span className="text-xs uppercase tracking-widest text-[#818CF8] font-mono">
                04 // PHILOSOPHY
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase text-[#F4F4F0] tracking-tight">
                Engineering <span className="font-serif-editorial italic text-[#C7D2FE] font-normal lowercase">principles.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-2">
                <h3 className="text-sm font-mono font-semibold uppercase text-[#818CF8]">
                  1. First-Principles Understanding
                </h3>
                <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed font-light">
                  Before importing a library or tweaking hyperparameters, I write out the mathematical formulations on paper. Understanding gradients, loss surfaces, and time complexity makes debugging direct and effective.
                </p>
              </div>

              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-2">
                <h3 className="text-sm font-mono font-semibold uppercase text-[#818CF8]">
                  2. Measure Before Optimizing
                </h3>
                <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed font-light">
                  Premature optimization creates tangled code. Every performance claim must be accompanied by profiler data — whether measuring socket throughput in Python or tensor memory allocations in PyTorch.
                </p>
              </div>

              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-2">
                <h3 className="text-sm font-mono font-semibold uppercase text-[#818CF8]">
                  3. Simplicity Over Cleverness
                </h3>
                <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed font-light">
                  Maintainable software is readable, testable, and minimal. A clean tabular model that can be explained to non-technical stakeholders is far superior to an uninterpretable neural network when the data does not require it.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-display uppercase tracking-tight text-[#F4F4F0]">Interested in collaborating or discussing a role?</div>
              <div className="text-xs font-mono text-[#656570] mt-0.5">Open for technical internships, engineering roles, and academic collaborations.</div>
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
