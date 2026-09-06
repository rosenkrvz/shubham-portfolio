import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { profile } from '../data/profile.js';

import HeroAbstract3D from '../components/heroes/HeroAbstract3D.jsx';
import HeroEditorial from '../components/heroes/HeroEditorial.jsx';
import HeroGenerativeField from '../components/heroes/HeroGenerativeField.jsx';
import HeroDigitalPortrait from '../components/heroes/HeroDigitalPortrait.jsx';
import HeroProjectFirst from '../components/heroes/HeroProjectFirst.jsx';
import HeroSwitcher from '../components/HeroSwitcher.jsx';

import ProjectSentinelCase from '../components/projects/ProjectSentinelCase.jsx';
import ProjectDitherCase from '../components/projects/ProjectDitherCase.jsx';
import ProjectOrchestratorCase from '../components/projects/ProjectOrchestratorCase.jsx';
import ProjectRiskCase from '../components/projects/ProjectRiskCase.jsx';

import MagneticButton from '../components/ui/MagneticButton.jsx';
import PageTransition from '../components/ui/PageTransition.jsx';

import {
  ArrowRight,
  Terminal,
  Cpu,
  Binary,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function HomePage({ onOpenProject, onShowToast }) {
  // Supports all 5 Hero Archetypes: '3d', 'editorial', 'generative', 'dither', 'project'
  const [heroMode, setHeroMode] = useState('3d');
  const workSectionRef = useRef(null);

  const scrollToWork = () => {
    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pSentinel = projects.find((p) => p.id === 'sentinel-npu') || projects[0];
  const pDither = projects.find((p) => p.id === 'operator-vision') || projects[1];
  const pOrchestrator = projects.find((p) => p.id === 'surveillance-operator') || projects[2];
  const pRisk = projects.find((p) => p.id === 'loan-risk-prediction') || projects[3];

  return (
    <PageTransition>
      <div className="relative w-full bg-[#08080A] text-[#F4F4F0] selection:bg-[#312E81] selection:text-white">
        
        {/* Floating Hero Switcher permitting instant toggling among the 5 archetypes */}
        <HeroSwitcher currentMode={heroMode} onSelectMode={setHeroMode} />

        {/* 1. Dynamic Hero Region */}
        {heroMode === '3d' && <HeroAbstract3D onExploreClick={scrollToWork} />}
        {heroMode === 'editorial' && <HeroEditorial onExploreClick={scrollToWork} />}
        {heroMode === 'generative' && <HeroGenerativeField onExploreClick={scrollToWork} />}
        {heroMode === 'dither' && <HeroDigitalPortrait onExploreClick={scrollToWork} />}
        {heroMode === 'project' && <HeroProjectFirst onOpenProject={onOpenProject} onExploreClick={scrollToWork} />}

        {/* 2. Core Architectural Philosophy (Section: "WHAT I BUILD") */}
        <section className="py-24 border-b border-[#1C1C22] bg-[#0C0C0E]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-baseline justify-between border-b border-[#1C1C22] pb-6 mb-16">
              <div className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
                [02 // ARCHITECTURAL INTENT]
              </div>
              <div className="text-xs font-mono text-[#656570]">
                IIT JODHPUR • FIRST PRINCIPLES
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <h2 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight leading-[0.95] text-[#F4F4F0]">
                  Engineering <br />
                  <span className="font-serif-editorial italic font-normal text-3xl sm:text-5xl lowercase text-[#C7D2FE]">
                    without
                  </span>
                  <br />
                  Superficiality.
                </h2>
              </div>

              <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-[#9E9EA8] font-light leading-relaxed">
                <p>
                  I do not view software or AI as black-box APIs. Every model is a mathematical manifold embedded in physical silicon, subject to memory bandwidth bottlenecks, cache misses, and cryptographic verification constraints.
                </p>
                <p>
                  From quantization at the edge to low-latency asynchronous orchestrators, my focus is building resilient systems that perform under strict deterministic bounds.
                </p>
              </div>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#1C1C22]/60">
              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm">
                <div className="w-10 h-10 mb-6 border border-[#272734] rounded flex items-center justify-center text-[#818CF8]">
                  <Cpu size={20} />
                </div>
                <h3 className="text-xl font-display font-semibold uppercase tracking-tight text-[#F4F4F2] mb-2">
                  Edge AI & Silicon
                </h3>
                <p className="text-sm text-[#9E9EA8] leading-relaxed">
                  Quantized INT8/FP4 tensor validation, PyTorch C++ bindings, and zero-copy TensorRT acceleration on embedded hardware.
                </p>
              </div>

              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm">
                <div className="w-10 h-10 mb-6 border border-[#272734] rounded flex items-center justify-center text-[#818CF8]">
                  <Binary size={20} />
                </div>
                <h3 className="text-xl font-display font-semibold uppercase tracking-tight text-[#F4F4F2] mb-2">
                  Spatial Vision
                </h3>
                <p className="text-sm text-[#9E9EA8] leading-relaxed">
                  1-bit monochrome spatial error diffusion, Bayer ordered thresholding, and SIMD OpenCV contour detection pipelines.
                </p>
              </div>

              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm">
                <div className="w-10 h-10 mb-6 border border-[#272734] rounded flex items-center justify-center text-[#818CF8]">
                  <Terminal size={20} />
                </div>
                <h3 className="text-xl font-display font-semibold uppercase tracking-tight text-[#F4F4F2] mb-2">
                  Asynchronous Systems
                </h3>
                <p className="text-sm text-[#9E9EA8] leading-relaxed">
                  Event-driven backends with FastAPI, Redis Streams, sliding-window deduplication, and high-concurrency WebSocket dispatch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Selected Work: Authored Bespoke Case Studies */}
        <section ref={workSectionRef} className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-baseline justify-between border-b border-[#1C1C22] pb-6 mb-8">
            <div>
              <span className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">[03 // SELECTED CASE STUDIES]</span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mt-2">
                Engineered Works
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-mono uppercase tracking-wider text-[#9E9EA8] hover:text-white border-b border-[#272730] hover:border-white pb-1 transition-colors"
            >
              Browse All Projects &rarr;
            </Link>
          </div>

          {/* Project 01: Sentinel NPU */}
          <ProjectSentinelCase project={pSentinel} onOpenModal={onOpenProject} />

          {/* Project 02: 1-Bit Dither Computer Vision */}
          <ProjectDitherCase project={pDither} onOpenModal={onOpenProject} />

          {/* Project 03: Autonomous Incident Orchestrator */}
          <ProjectOrchestratorCase project={pOrchestrator} onOpenModal={onOpenProject} />

          {/* Project 04: Explainable Credit Risk */}
          <ProjectRiskCase project={pRisk} onOpenModal={onOpenProject} />
        </section>

        {/* 4. Experiments & 3D Interactive Lab Teaser */}
        <section className="py-24 bg-[#0A0A0D] border-t border-b border-[#1C1C22]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="text-xs font-mono text-[#818CF8] tracking-widest uppercase mb-4">
                  [04 // EXPERIMENTAL LAB]
                </div>
                <h2 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mb-6">
                  Creative <br />
                  <span className="font-serif-editorial italic font-normal text-3xl sm:text-5xl lowercase text-[#C7D2FE]">
                    computation &amp;
                  </span>
                  <br />
                  Shaders.
                </h2>
                <p className="text-base sm:text-lg text-[#9E9EA8] font-light leading-relaxed mb-8">
                  Where algorithm design meets visual expression. Interactive 1-bit Bayer matrices, edge silicon latency benchmarks, and high-dimensional vector space radars.
                </p>

                <MagneticButton
                  as="div"
                  className="px-6 py-3.5 bg-[#4338CA] hover:bg-[#4F46E5] text-white font-mono text-xs uppercase tracking-wider rounded-sm shadow-xl"
                >
                  <Link to="/experiments" className="flex items-center gap-2">
                    <span>Enter Experimental Lab</span>
                    <ArrowRight size={14} />
                  </Link>
                </MagneticButton>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 bg-[#111114] border border-[#272730] rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 bg-[#08080A] border border-[#1F1F28] rounded">
                    <div className="text-[#818CF8] text-[10px] uppercase mb-1">CANVAS 01</div>
                    <div className="text-sm font-semibold text-[#F4F4F2] mb-1">1-Bit Spatial Dither</div>
                    <div className="text-[11px] text-[#656570]">Real-time Floyd-Steinberg error diffusion kernel running in browser memory.</div>
                  </div>

                  <div className="p-4 bg-[#08080A] border border-[#1F1F28] rounded">
                    <div className="text-[#818CF8] text-[10px] uppercase mb-1">CANVAS 02</div>
                    <div className="text-sm font-semibold text-[#F4F4F2] mb-1">TensorRT Latency Matrix</div>
                    <div className="text-[11px] text-[#656570]">Synthetic batch sweep comparing INT8 vs FP32 execution cycles.</div>
                  </div>

                  <div className="p-4 bg-[#08080A] border border-[#1F1F28] rounded">
                    <div className="text-[#818CF8] text-[10px] uppercase mb-1">CANVAS 03</div>
                    <div className="text-sm font-semibold text-[#F4F4F2] mb-1">Cosine Vector Radar</div>
                    <div className="text-[11px] text-[#656570]">2D topological projection of semantic embedding vectors with cosine distance.</div>
                  </div>

                  <div className="p-4 bg-[#08080A] border border-[#1F1F28] rounded">
                    <div className="text-[#818CF8] text-[10px] uppercase mb-1">CANVAS 04</div>
                    <div className="text-sm font-semibold text-[#F4F4F2] mb-1">3D Neural Manifold</div>
                    <div className="text-[11px] text-[#656570]">Three.js WebGL particle lattice reacting to mouse cursor dynamics.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Academic Foundations at IIT Jodhpur */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-b border-[#1C1C22]">
          <div className="flex flex-wrap items-baseline justify-between border-b border-[#1C1C22] pb-6 mb-16">
            <div className="text-xs font-mono text-[#818CF8] tracking-widest uppercase">
              [05 // ACADEMIC FOUNDATIONS]
            </div>
            <div className="text-xs font-mono text-[#656570]">
              INDIAN INSTITUTE OF TECHNOLOGY JODHPUR
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] mb-4">
                Rigorous Theory. <br />
                <span className="font-serif-editorial italic font-normal text-3xl sm:text-5xl lowercase text-[#C7D2FE]">
                  practical
                </span>
                <br />
                Execution.
              </h2>
              <p className="text-sm sm:text-base text-[#9E9EA8] font-light leading-relaxed">
                Currently pursuing a Bachelor of Science in Applied AI & Data Science at IIT Jodhpur. Rooted in linear algebra, multivariate calculus, optimization theory, and distributed computing.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 font-mono text-xs">
              <div className="p-5 bg-[#111114] border border-[#1F1F26] rounded-sm flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[#818CF8] text-[11px]">DEGREE PROGRAM</div>
                  <div className="text-sm font-semibold text-[#F4F4F2] mt-0.5">{profile.academic.degree}</div>
                  <div className="text-[#656570] text-[11px] mt-1">{profile.academic.institution}</div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 bg-[#1A1A24] border border-[#272738] text-white rounded">
                    {profile.academic.period}
                  </span>
                </div>
              </div>

              <div className="p-5 bg-[#111114] border border-[#1F1F26] rounded-sm">
                <div className="text-[#818CF8] text-[11px] mb-2">CORE DISCIPLINARY EMPHASIS</div>
                <div className="text-sm text-[#9E9EA8] leading-relaxed">
                  {profile.academic.focus}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Initiation Climax */}
        <section className="py-28 bg-[#0C0C0E] text-center border-b border-[#1C1C22]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-block mb-4 px-3 py-1 border border-[#272730] bg-[#111114] rounded-full text-xs font-mono text-[#818CF8]">
              AVAILABLE FOR ROLES &amp; RESEARCH
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display uppercase tracking-tighter text-[#F4F4F0] mb-6">
              Have something <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lowercase text-[#C7D2FE]">
                worth
              </span>{" "}
              building?
            </h2>

            <p className="text-base sm:text-xl text-[#9E9EA8] font-light max-w-xl mx-auto leading-relaxed mb-10">
              I am available for engineering internships, technical collaborations, and machine learning software roles.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                as="div"
                className="px-8 py-4 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-semibold text-xs font-mono uppercase tracking-wider rounded-sm shadow-2xl cursor-pointer"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Initiate Contact</span>
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  if (onShowToast) {
                    onShowToast({
                      type: 'success',
                      message: `Copied ${profile.email} to clipboard`
                    });
                  }
                }}
                className="px-6 py-4 border border-[#272730] hover:border-[#6366F1] bg-[#111114] text-xs font-mono uppercase tracking-wider text-[#9E9EA8] hover:text-white rounded-sm cursor-pointer transition-colors"
              >
                Copy Email ({profile.email})
              </button>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
