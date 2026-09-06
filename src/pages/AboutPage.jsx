import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Shield, Cpu, Terminal, ArrowRight, Award, CheckCircle2, Download } from 'lucide-react';
import { profile } from '../data/profile.js';
import { skillCategories } from '../data/skills.js';
import { usePageMeta } from '../hooks/usePageMeta';

export default function AboutPage({ onShowToast }) {
  usePageMeta({
    title: 'Engineer Dossier & Academic Foundation',
    description: 'Academic background of Shubham Sharma at IIT Jodhpur (B.S. in Applied AI & Data Science), engineering principles, and technical arsenal.',
    path: '/about'
  });

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleDownloadResume = () => {
    onShowToast?.({
      type: 'info',
      message: 'Generating encrypted curriculum vitae PDF for Shubham Sharma...'
    });
    setTimeout(() => {
      onShowToast?.({
        type: 'success',
        message: 'Resume dossier ready: Shubham_Sharma_IITJ_AI_Resume.pdf'
      });
    }, 800);
  };

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4 border-b border-[#1F1F24] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3E2CF0] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E2CF0] animate-pulse"></span>
            <span>Operator Dossier // Identity &amp; Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F0F0EE]">
            Shubham Sharma
          </h1>
          <p className="text-base sm:text-lg text-[#85858B] max-w-3xl leading-relaxed">
            Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur). Building at the intersection of mathematical neural modeling, edge silicon acceleration, and zero-trust distributed backends.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#3E2CF0] hover:bg-[#3220D8] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#3E2CF0]/30 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full CV / Resume (PDF)</span>
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#161619] hover:bg-[#202025] border border-[#232328] text-xs font-semibold text-[#F0F0EE] transition-colors"
            >
              <span>Transmit Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Academic Foundation & Institutional Credential */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 space-y-2">
            <h2 className="text-xl font-bold text-[#F0F0EE]">
              Institutional Base
            </h2>
            <p className="text-xs text-[#85858B] leading-relaxed">
              Rigorous theoretical and empirical training at one of India's premier institutes of national importance.
            </p>
          </div>

          <div className="md:col-span-2 p-6 rounded-lg bg-[#111113] border border-[#1F1F24] space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#3E2CF0]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#3E2CF0]">
                    Degree Program
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#F0F0EE]">
                  {profile.academic.degree}
                </h3>
                <div className="text-sm font-medium text-[#D4D4D8]">
                  {profile.academic.institution}
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#1A1A20] border border-[#262630] font-mono text-xs text-[#85858B]">
                {profile.academic.period}
              </span>
            </div>

            <p className="text-xs text-[#85858B] leading-relaxed pt-2 border-t border-[#1F1F24]">
              {profile.academic.focus}
            </p>
          </div>
        </div>

        {/* Core Architectural Philosophy */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F0F0EE]">
              Engineering Principles
            </h2>
            <p className="text-xs text-[#85858B]">
              The core tenets that guide every algorithm, pipeline, and distributed system I architect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-[#111113] border border-[#1F1F24] space-y-3">
              <div className="w-8 h-8 rounded bg-[#1A1A22] border border-[#3E2CF0] flex items-center justify-center text-[#3E2CF0] text-sm font-mono font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-[#F0F0EE]">
                Deterministic Inference
              </h3>
              <p className="text-xs text-[#85858B] leading-relaxed">
                Stochastic models belong in exploratory notebooks. Production systems demand bounded latency variance (&lt;1.5ms), rigorous memory layout, and deterministic execution bounds.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111113] border border-[#1F1F24] space-y-3">
              <div className="w-8 h-8 rounded bg-[#1A1A22] border border-[#3E2CF0] flex items-center justify-center text-[#3E2CF0] text-sm font-mono font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-[#F0F0EE]">
                Zero-Trust Silicon
              </h3>
              <p className="text-xs text-[#85858B] leading-relaxed">
                Weights and computation passes must be verifiable through cryptographic hardware chains. Every input vector is treated as potentially adversarial until validated.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#111113] border border-[#1F1F24] space-y-3">
              <div className="w-8 h-8 rounded bg-[#1A1A22] border border-[#3E2CF0] flex items-center justify-center text-[#3E2CF0] text-sm font-mono font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-[#F0F0EE]">
                Mathematical Efficiency
              </h3>
              <p className="text-xs text-[#85858B] leading-relaxed">
                Binarization, 1-bit dithering, and INT8/FP4 quantization over parameter bloat. If 1-bit resolution captures 99% of variance, running 32-bit float matrix multiplication is computational negligence.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Arsenal & Competency Radar */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F0F0EE]">
              Technical Arsenal &amp; Capabilities
            </h2>
            <p className="text-xs text-[#85858B]">
              Categorized breakdown of frameworks, runtimes, and engineering proficiencies.
            </p>
          </div>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#1F1F24] pb-3">
            {skillCategories.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(idx)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wide transition-all ${
                  selectedCategory === idx
                    ? 'bg-[#3E2CF0] text-white font-semibold'
                    : 'bg-[#111113] text-[#85858B] hover:text-[#F0F0EE] border border-[#1F1F24]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Category Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories[selectedCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-lg bg-[#111113] border border-[#1F1F24] space-y-1.5 hover:border-[#2E2E36] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#F0F0EE] font-mono">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#1A1A22] border border-[#2E2E38] text-[#3E2CF0]">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#85858B] leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
