import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Compass, Download, ArrowRight, CheckCircle2, Code2, Cpu } from 'lucide-react';
import { profile } from '../data/profile.js';
import { skillCategories } from '../data/skills.js';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AboutPage({ onShowToast }) {
  usePageMeta({
    title: 'About — Shubham Sharma | IIT Jodhpur',
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
    <div className="min-h-screen py-14 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Page Header */}
        <div className="space-y-6 border-b border-[#1E1E23] pb-12">
          <div className="inline-flex items-center gap-2 text-xs text-[#8E8D96]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
            <span>About &amp; Dossier</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-[#F4F4F2] leading-tight">
            Shubham Sharma
          </h1>

          <p className="text-lg sm:text-xl text-[#9A9AA2] font-normal leading-relaxed">
            Applied AI &amp; Data Science undergraduate at the Indian Institute of Technology Jodhpur (IIT Jodhpur).
          </p>

          <p className="text-sm sm:text-base text-[#8E8D96] leading-relaxed max-w-2xl">
            I am a student and software engineer driven by understanding how complex systems operate from mathematical first principles. My work focuses on deep learning model optimization, computer vision algorithms, and building dependable backend systems.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#16161B] hover:bg-[#202026] border border-[#25252E] text-xs font-semibold text-[#F4F4F2] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8E8D96]" />
            </Link>
          </div>
        </div>

        {/* 1. Academic Foundation */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#6366F1] font-medium">
              Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2] tracking-tight">
              Academic Foundation
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-[#1E1E24] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-[#6366F1]">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-medium">{profile.academic.degree}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#F4F4F2]">
                  {profile.academic.institution}
                </h3>
              </div>
              <span className="text-xs text-[#8E8D96] font-mono px-2.5 py-1 rounded bg-[#18181D] border border-[#24242C] self-start">
                {profile.academic.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8E8D96] leading-relaxed pt-2 border-t border-[#1E1E24]">
              <strong className="text-[#F4F4F2]">Curriculum Focus:</strong> Linear Algebra, Multivariate Optimization, Deep Neural Networks, Computer Vision, Algorithms &amp; Data Structures, Discrete Mathematics, and Distributed Backends.
            </p>

            <div className="p-4 rounded-xl bg-[#16161B] border border-[#22222A] flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
              <div className="text-xs text-[#8E8D96] leading-relaxed">
                <strong className="text-[#F4F4F2]">Academic Distinction:</strong> Awarded Dean's List / Academic Merit Honor at IIT Jodhpur (2023 — 2024) for strong academic standing across foundational mathematics and computing coursework.
              </div>
            </div>
          </div>
        </section>

        {/* 2. Current Learning & Technical Direction */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#6366F1] font-medium">
              Exploration
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2] tracking-tight">
              Current Learning &amp; Technical Direction
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            <div className="p-5 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#18181F] flex items-center justify-center text-[#6366F1]">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[#F4F4F2]">
                Model Optimization &amp; Edge Inference
              </h3>
              <p className="text-xs text-[#8E8D96] leading-relaxed">
                Exploring post-training quantization (INT8/FP4), ONNX Runtime execution graphs, and memory-conscious tensor memory layout to deploy models on edge hardware.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#18181F] flex items-center justify-center text-[#6366F1]">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[#F4F4F2]">
                Spatial Vision &amp; Dithering
              </h3>
              <p className="text-xs text-[#8E8D96] leading-relaxed">
                Investigating spatial error-diffusion kernels (Floyd-Steinberg, Bayer) to compress live telemetry streams while preserving facial contours and edge boundaries.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#18181F] flex items-center justify-center text-[#6366F1]">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[#F4F4F2]">
                Concurrent Backend Services
              </h3>
              <p className="text-xs text-[#8E8D96] leading-relaxed">
                Designing event-driven streaming pipelines with Python AsyncIO, FastAPI, Redis streams, and PostgreSQL to serve low-latency inference predictions.
              </p>
            </div>

          </div>
        </section>

        {/* 3. Technical Toolkit */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#6366F1] font-medium">
              Toolkit
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2] tracking-tight">
              Technical Competencies
            </h2>
          </div>

          <div className="space-y-6">
            {skillCategories.map((group) => (
              <div key={group.category} className="p-6 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-[#F4F4F2]">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[#8E8D96] mt-0.5">
                    {group.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="p-3 rounded-lg bg-[#16161B] border border-[#202028] space-y-1">
                      <div className="text-xs font-semibold text-[#F4F4F2]">
                        {skill.name}
                      </div>
                      <div className="text-[11px] text-[#8E8D96] leading-relaxed">
                        {skill.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Engineering Principles */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#6366F1] font-medium">
              Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2] tracking-tight">
              Engineering Principles
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-1.5">
              <h3 className="text-sm font-semibold text-[#F4F4F2]">
                1. First-Principles Understanding
              </h3>
              <p className="text-xs text-[#8E8D96] leading-relaxed">
                Before importing a library or tweaking hyperparameters, I write out the mathematical formulations on paper. Understanding gradients, loss surfaces, and time complexity makes debugging direct and effective.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-1.5">
              <h3 className="text-sm font-semibold text-[#F4F4F2]">
                2. Measure Before Optimizing
              </h3>
              <p className="text-xs text-[#8E8D96] leading-relaxed">
                Premature optimization creates tangled code. Every performance claim must be accompanied by profiler data — whether measuring socket throughput in Python or tensor memory allocations in PyTorch.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-1.5">
              <h3 className="text-sm font-semibold text-[#F4F4F2]">
                3. Simplicity Over Cleverness
              </h3>
              <p className="text-xs text-[#8E8D96] leading-relaxed">
                Maintainable software is readable, testable, and minimal. A clean tabular XGBoost model that can be explained to non-technical stakeholders is far superior to an uninterpretable neural network when the data does not require it.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-[#1E1E23] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-[#F4F4F2]">Interested in collaborating or discussing a role?</div>
            <div className="text-xs text-[#8E8D96] mt-0.5">I am available for summer 2025 and 2026 engineering opportunities.</div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
