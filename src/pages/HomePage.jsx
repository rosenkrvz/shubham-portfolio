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

import SignalFlowVisual from '../components/canvas/SignalFlowVisual.jsx';
import DecisionBoundaryLab from '../components/ai/DecisionBoundaryLab.jsx';
import LatentSpaceExplorer from '../components/ai/LatentSpaceExplorer.jsx';

import ProjectSentinelCase from '../components/projects/ProjectSentinelCase.jsx';
import ProjectDitherCase from '../components/projects/ProjectDitherCase.jsx';
import ProjectOrchestratorCase from '../components/projects/ProjectOrchestratorCase.jsx';
import ProjectRiskCase from '../components/projects/ProjectRiskCase.jsx';

import MagneticButton from '../components/ui/MagneticButton.jsx';
import TactileButton from '../components/ui/TactileButton.jsx';
import PageTransition from '../components/ui/PageTransition.jsx';

import {
  ArrowRight,
  Terminal,
  Cpu,
  Binary,
  Compass,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Activity,
  BarChart2,
  Database,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons.jsx';

export default function HomePage({ onOpenProject, onShowToast }) {
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
        
        {/* Floating Hero Switcher */}
        <HeroSwitcher currentMode={heroMode} onSelectMode={setHeroMode} />

        {/* ========================================================================= */}
        {/* 01 — HERO: Monumental Identity & 3D Computational Artwork                 */}
        {/* ========================================================================= */}
        {heroMode === '3d' && <HeroAbstract3D onExploreClick={scrollToWork} />}
        {heroMode === 'editorial' && <HeroEditorial onExploreClick={scrollToWork} />}
        {heroMode === 'generative' && <HeroGenerativeField onExploreClick={scrollToWork} />}
        {heroMode === 'dither' && <HeroDigitalPortrait onExploreClick={scrollToWork} />}
        {heroMode === 'project' && <HeroProjectFirst onOpenProject={onOpenProject} onExploreClick={scrollToWork} />}

        {/* ========================================================================= */}
        {/* 02 — SIGNAL: Full-Width Computational Pipeline (DATA → MODELS → SYSTEMS)   */}
        {/* ========================================================================= */}
        <SignalFlowVisual />

        {/* ========================================================================= */}
        {/* 03 — SELECTED WORK: Alternating Editorial Project Showcases                */}
        {/* ========================================================================= */}
        <section ref={workSectionRef} className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-6 mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8] uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30 animate-pulse" />
                <span>03 // SELECTED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
                Engineered <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">systems</span> &amp; Models
              </h2>
            </div>
            
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9E9EA8] hover:text-white border-b border-[#272730] hover:border-white pb-1 transition-colors group"
            >
              <span>View All Projects Archive</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Alternating Bespoke Project Layouts */}
          <div className="space-y-4">
            {/* Project 01: Sentinel NPU (Full-width showcase + telemetry) */}
            <ProjectSentinelCase project={pSentinel} onOpenModal={onOpenProject} />

            {/* Project 02: 1-Bit Spatial Dither (Split horizontal layout) */}
            <ProjectDitherCase project={pDither} onOpenModal={onOpenProject} />

            {/* Visual Break / Editorial Transition */}
            <div className="py-12 my-6 border-y border-[#1C1C22] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#656570]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[#F4F4F2]">EDGE SILICON &bull; DISTRIBUTED PIPELINES</span>
              </div>
              <div className="max-w-md text-center md:text-right text-[#9E9EA8]">
                Every model is designed for verifiable latency, deterministic memory bounds, and interpretable outcomes.
              </div>
            </div>

            {/* Project 03: Autonomous Orchestrator (Horizontal architecture breakdown) */}
            <ProjectOrchestratorCase project={pOrchestrator} onOpenModal={onOpenProject} />

            {/* Project 04: Explainable Credit Risk (Compact analytical) */}
            <ProjectRiskCase project={pRisk} onOpenModal={onOpenProject} />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04 — AI / DATA: Computational Artwork & Interactive Visualizations         */}
        {/* ========================================================================= */}
        <section className="py-24 border-t border-b border-[#1C1C22] bg-[#070709]">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8] uppercase tracking-widest mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span>04 // AI &bull; DATA SCIENCE AS ARTWORK</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
                  Decision <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">surfaces</span> &amp; Latent Spaces
                </h2>
              </div>

              <Link
                to="/ai-data"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9E9EA8] hover:text-white border-b border-[#272730] hover:border-white pb-1 transition-colors"
              >
                <span>Full AI &amp; Data Philosophy &rarr;</span>
              </Link>
            </div>

            {/* Interactive Decision Surface Visual Canvas */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8]">
                <span>FIGURE 01: NON-LINEAR CLASSIFICATION GEOMETRY</span>
                <span className="text-[#818CF8]">LIVE COMPUTATIONAL CANVAS</span>
              </div>
              <DecisionBoundaryLab />
            </div>

            {/* Interactive Latent Space Explorer */}
            <div className="space-y-4 pt-12 border-t border-[#1C1C22]">
              <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8]">
                <span>FIGURE 02: HIGH-DIMENSIONAL TOPOLOGICAL PROJECTION</span>
                <span className="text-emerald-400">PCA / t-SNE / UMAP</span>
              </div>
              <LatentSpaceExplorer />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05 — LAB: Digital Workbench Teaser                                         */}
        {/* ========================================================================= */}
        <section className="py-24 border-b border-[#1C1C22] bg-[#09090C]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8] uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
                  <span>05 // DIGITAL WORKBENCH</span>
                </div>

                <h2 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
                  Experimental <br />
                  <span className="font-serif-editorial italic font-normal text-3xl sm:text-5xl lowercase text-[#C7D2FE]">
                    algorithms &amp;
                  </span>
                  <br />
                  Prototypes.
                </h2>

                <p className="text-base text-[#9E9EA8] font-light leading-relaxed">
                  A collection of work in progress: 1-bit spatial error diffusion kernels, edge silicon latency benchmarks, and high-dimensional vector radars. Unfinished in a good way.
                </p>

                <div>
                  <MagneticButton
                    as="div"
                    className="px-6 py-3.5 bg-[#4338CA] hover:bg-[#4F46E5] text-white font-mono text-xs uppercase tracking-wider rounded-sm shadow-xl inline-flex items-center gap-2"
                  >
                    <Link to="/experiments" className="flex items-center gap-2">
                      <span>Open Digital Lab</span>
                      <ArrowRight size={14} />
                    </Link>
                  </MagneticButton>
                </div>
              </div>

              {/* Workbench Drawer Preview Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                
                <div className="p-5 bg-[#101014] border border-[#1F1F28] hover:border-[#383848] transition-colors rounded-sm space-y-2">
                  <div className="flex items-center justify-between text-[#818CF8] text-[11px]">
                    <span>LAB / 001</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F4F4F2]">1-Bit Spatial Dither Engine</div>
                  <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                    Floyd-Steinberg and Bayer matrix halftone dithering running at 120 FPS on canvas memory.
                  </p>
                  <div className="text-[10px] text-[#656570]">TOOLS: JAVASCRIPT &bull; CANVAS &bull; OPENCV</div>
                </div>

                <div className="p-5 bg-[#101014] border border-[#1F1F28] hover:border-[#383848] transition-colors rounded-sm space-y-2">
                  <div className="flex items-center justify-between text-[#818CF8] text-[11px]">
                    <span>LAB / 002</span>
                    <span className="text-[#38BDF8]">BENCHMARK</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F4F4F2]">Edge Silicon Latency Matrix</div>
                  <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                    Synthetic TensorRT execution cycles measuring latency and throughput across INT8 vs FP32.
                  </p>
                  <div className="text-[10px] text-[#656570]">TOOLS: TENSORRT &bull; C++ &bull; SIMD</div>
                </div>

                <div className="p-5 bg-[#101014] border border-[#1F1F28] hover:border-[#383848] transition-colors rounded-sm space-y-2">
                  <div className="flex items-center justify-between text-[#818CF8] text-[11px]">
                    <span>LAB / 003</span>
                    <span className="text-[#A78BFA]">PROTOTYPE</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F4F4F2]">Cosine Vector Radar</div>
                  <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                    Interactive 2D topological mapping of high-dimensional embeddings with cosine distance calculation.
                  </p>
                  <div className="text-[10px] text-[#656570]">TOOLS: NUMPY &bull; HNSW &bull; FASTAPI</div>
                </div>

                <div className="p-5 bg-[#101014] border border-[#1F1F28] hover:border-[#383848] transition-colors rounded-sm space-y-2">
                  <div className="flex items-center justify-between text-[#818CF8] text-[11px]">
                    <span>LAB / 004</span>
                    <span className="text-[#E10600]">INTERACTIVE</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F4F4F2]">3D Neural Manifold</div>
                  <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                    Riemannian hyperbolic paraboloid surface rendered in Three.js WebGL with raycasting inertia.
                  </p>
                  <div className="text-[10px] text-[#656570]">TOOLS: THREE.JS &bull; WEBGPU &bull; GLSL</div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06 — ABOUT: Concise Editorial Profile                                      */}
        {/* ========================================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-b border-[#1C1C22]">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1C1C22] pb-6 mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8] uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-[#818CF8]" />
                <span>06 // PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
                About <span className="font-serif-editorial italic font-normal lowercase text-[#C7D2FE]">the</span> Builder
              </h2>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9E9EA8] hover:text-white border-b border-[#272730] hover:border-white pb-1 transition-colors"
            >
              <span>Full Dossier &amp; Resume &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2]">
                Shubham Sharma
              </h3>
              <p className="text-base text-[#9E9EA8] font-light leading-relaxed">
                Undergraduate in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur). I build at the intersection of deep learning runtimes, computer vision, and backend systems engineering.
              </p>
              <p className="text-sm text-[#9E9EA8] font-light leading-relaxed">
                Rather than treating machine learning models as black boxes, I focus on understanding why models generalize, where distributions shift, and how to execute them deterministically on real hardware.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#111114] border border-[#272730] hover:border-[#818CF8] rounded-sm text-[#9E9EA8] hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#111114] border border-[#272730] hover:border-[#818CF8] rounded-sm text-[#9E9EA8] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <span className="text-xs font-mono text-[#656570]">
                  IIT Jodhpur, Rajasthan, India
                </span>
              </div>
            </div>

            {/* Editorial 4-Pillar Metadata */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              
              <div className="p-5 border-l-2 border-[#818CF8] bg-[#0C0C10] space-y-2">
                <div className="text-[#818CF8] text-[11px] uppercase">WHO I AM</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">AI &amp; Software Builder</div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Focused on translating mathematical formulations into high-performance, deterministic code.
                </p>
              </div>

              <div className="p-5 border-l-2 border-[#38BDF8] bg-[#0C0C10] space-y-2">
                <div className="text-[#38BDF8] text-[11px] uppercase">WHAT I STUDY</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Applied AI &amp; Data Science</div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  B.S. at IIT Jodhpur (2023 — Present). Optimization theory, linear algebra, and systems.
                </p>
              </div>

              <div className="p-5 border-l-2 border-[#34D399] bg-[#0C0C10] space-y-2">
                <div className="text-[#34D399] text-[11px] uppercase">WHAT I BUILD</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Runtimes &amp; Pipelines</div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  Edge inference verification modules, 1-bit vision filters, and async event dispatch engines.
                </p>
              </div>

              <div className="p-5 border-l-2 border-[#E10600] bg-[#0C0C10] space-y-2">
                <div className="text-[#E10600] text-[11px] uppercase">WHAT I'M EXPLORING</div>
                <div className="text-sm font-semibold text-[#F4F4F2]">Sub-8-Bit Quantization</div>
                <p className="text-xs text-[#9E9EA8] font-sans leading-relaxed">
                  MXFP4 microscaling formats, Hessian loss curvature at convergence, and SIMD vector indices.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07 — CLOSING: Memorable Final Statement & Contact Initiation               */}
        {/* ========================================================================= */}
        <section className="py-28 bg-[#070709] border-b border-[#1C1C22]">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#272730] bg-[#111114] text-xs font-mono text-[#818CF8]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>07 // CLOSING</span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] leading-[0.9]">
              Let's build <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl lowercase text-[#C7D2FE]">
                something
              </span>
              <br />
              Interesting.
            </h2>

            <p className="text-base sm:text-lg text-[#9E9EA8] font-light max-w-xl mx-auto leading-relaxed">
              Available for machine learning internships, systems engineering roles, and technical collaborations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <TactileButton
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                led="active"
              >
                Start a Conversation
              </TactileButton>

              <TactileButton
                variant="secondary"
                size="lg"
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  if (onShowToast) {
                    onShowToast({
                      type: 'success',
                      message: `Email copied: ${profile.email}`
                    });
                  }
                }}
              >
                Copy Email ({profile.email})
              </TactileButton>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
