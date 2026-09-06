import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

import ProjectExpandCard from '../components/projects/ProjectExpandCard.jsx';

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
  const [hoveredProject, setHoveredProject] = useState(null);
  const workSectionRef = useRef(null);

  const scrollToWork = () => {
    if (workSectionRef.current) {
      workSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProjects = projects.slice(0, 4);

  return (
    <PageTransition>
      <div className="relative w-full bg-[#0A0D12] text-[#F8FAFC] selection:bg-[#E10600]/30 selection:text-white bg-crosshair-pattern">
        
        {/* Ambient Blur Backdrop when hovering a 3D Expand Card */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-20 pointer-events-none bg-black/40 backdrop-blur-[4px]"
            />
          )}
        </AnimatePresence>

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
        {/* 03 — SELECTED WORK: 3D Spotlight Expandable Cards (Hover Blur)            */}
        {/* ========================================================================= */}
        <section ref={workSectionRef} className="relative py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(255,255,255,0.08)] pb-8 mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 type-label text-[#94A3B8] uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                <span>03 // SELECTED WORK &bull; 3D SPOTLIGHT</span>
              </div>
              <h2 className="type-h2 font-medium font-display tracking-tight text-[#F8FAFC]">
                Engineered <span className="font-serif-editorial italic font-normal lowercase text-white">systems</span> &amp; Models
              </h2>
            </div>
            
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 type-label uppercase tracking-wider text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[rgba(255,255,255,0.12)] hover:border-[#F8FAFC] pb-1 transition-colors group"
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3D Expand Cards inside Spotlight Group with Screen Blur on Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 spotlight-group">
            {featuredProjects.map((project, idx) => (
              <ProjectExpandCard
                key={project.id}
                project={project}
                index={idx}
                onOpenDrawer={onOpenProject}
                onHoverChange={(hovered) => setHoveredProject(hovered ? project.id : null)}
              />
            ))}
          </div>

          {/* Visual Break / Editorial Transition */}
          <div className="py-10 my-10 border-y border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 type-label text-[#94A3B8]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[#F8FAFC] uppercase tracking-wider">APPLIED AI &bull; COMPUTATIONAL PIPELINES</span>
            </div>
            <div className="max-w-md text-center md:text-right type-body text-[#94A3B8] text-sm leading-relaxed">
              Every model is designed for verifiable latency, deterministic memory bounds, and interpretable outcomes.
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04 — AI / DATA: Computational Artwork & Interactive Visualizations         */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 border-t border-b border-[rgba(255,255,255,0.08)] bg-[#0A0D12]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(255,255,255,0.08)] pb-8 gap-6">
              <div>
                <div className="flex items-center gap-2 type-label text-[#94A3B8] uppercase tracking-widest mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>04 // AI &bull; DATA SCIENCE AS ARTWORK</span>
                </div>
                <h2 className="type-h2 font-medium font-display tracking-tight text-[#F8FAFC]">
                  Decision <span className="font-serif-editorial italic font-normal lowercase text-white">surfaces</span> &amp; Latent Spaces
                </h2>
              </div>

              <Link
                to="/ai-data"
                className="inline-flex items-center gap-2 type-label uppercase tracking-wider text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[rgba(255,255,255,0.12)] hover:border-[#F8FAFC] pb-1 transition-colors"
              >
                <span>EXPLORE AI &amp; DATA &rarr;</span>
              </Link>
            </div>

            {/* Interactive Decision Surface Visual Canvas */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span>FIGURE 01: NON-LINEAR CLASSIFICATION GEOMETRY</span>
                <span className="text-[#94A3B8]">LIVE COMPUTATIONAL CANVAS</span>
              </div>
              <DecisionBoundaryLab />
            </div>

            {/* Interactive Latent Space Explorer */}
            <div className="space-y-4 pt-12 border-t border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
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
        <section className="py-24 md:py-32 border-b border-[rgba(255,255,255,0.08)] bg-[#0E1217]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2 type-label text-[#94A3B8] uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                  <span>05 // DIGITAL WORKBENCH</span>
                </div>

                <h2 className="type-h2 font-medium font-display tracking-tight text-[#F8FAFC] leading-[1.05]">
                  Experimental <br />
                  <span className="font-serif-editorial italic font-normal lowercase text-white">
                    algorithms &amp;
                  </span>
                  <br />
                  Prototypes.
                </h2>

                <p className="type-body text-[#94A3B8] font-normal leading-relaxed max-w-[55ch]">
                  A collection of work in progress: 1-bit spatial error diffusion kernels, edge silicon latency benchmarks, and high-dimensional vector radars. Unfinished in a good way.
                </p>

                <div>
                  <TactileButton
                    as={Link}
                    to="/experiments"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                  >
                    OPEN LAB
                  </TactileButton>
                </div>
              </div>

              {/* Workbench Drawer Preview Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 bg-[#101318] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] hover:bg-[#161B22] transition-all rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-[#94A3B8] type-label">
                    <span>LAB / 001</span>
                    <span className="text-emerald-400 font-medium">ACTIVE</span>
                  </div>
                  <div className="text-base font-semibold text-[#F8FAFC]">1-Bit Spatial Dither Engine</div>
                  <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                    Floyd-Steinberg and Bayer matrix halftone dithering running at 120 FPS on canvas memory buffers.
                  </p>
                  <div className="type-label text-[#64748B]">JAVASCRIPT &bull; CANVAS &bull; OPENCV</div>
                </div>

                <div className="p-6 bg-[#101318] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] hover:bg-[#161B22] transition-all rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-[#94A3B8] type-label">
                    <span>LAB / 002</span>
                    <span className="text-[#38BDF8] font-medium">BENCHMARK</span>
                  </div>
                  <div className="text-base font-semibold text-[#F8FAFC]">Edge Silicon Latency Matrix</div>
                  <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                    Synthetic execution cycles measuring latency and throughput across INT8 vs FP32 precision profiles.
                  </p>
                  <div className="type-label text-[#64748B]">TENSORRT &bull; C++ &bull; SIMD</div>
                </div>

                <div className="p-6 bg-[#101318] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] hover:bg-[#161B22] transition-all rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-[#94A3B8] type-label">
                    <span>LAB / 003</span>
                    <span className="text-[#A78BFA] font-medium">PROTOTYPE</span>
                  </div>
                  <div className="text-base font-semibold text-[#F8FAFC]">Cosine Vector Radar</div>
                  <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                    Interactive 2D topological mapping of high-dimensional embeddings with real-time cosine distance.
                  </p>
                  <div className="type-label text-[#64748B]">NUMPY &bull; HNSW &bull; FASTAPI</div>
                </div>

                <div className="p-6 bg-[#101318] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] hover:bg-[#161B22] transition-all rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-[#94A3B8] type-label">
                    <span>LAB / 004</span>
                    <span className="text-[#E10600] font-medium">INTERACTIVE</span>
                  </div>
                  <div className="text-base font-semibold text-[#F8FAFC]">3D Neural Manifold</div>
                  <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                    Riemannian hyperbolic paraboloid surface rendered in Three.js WebGL with raycasting inertia.
                  </p>
                  <div className="type-label text-[#64748B]">THREE.JS &bull; WEBGPU &bull; GLSL</div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06 — ABOUT: Concise Editorial Profile                                      */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8 border-b border-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(255,255,255,0.08)] pb-8 mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 type-label text-[#94A3B8] uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8FAFC]" />
                <span>06 // PROFILE</span>
              </div>
              <h2 className="type-h2 font-medium font-display tracking-tight text-[#F8FAFC]">
                About <span className="font-serif-editorial italic font-normal lowercase text-white">the</span> Builder
              </h2>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 type-label uppercase tracking-wider text-[#94A3B8] hover:text-[#F8FAFC] border-b border-[rgba(255,255,255,0.12)] hover:border-[#F8FAFC] pb-1 transition-colors"
            >
              <span>FULL DOSSIER &amp; RESUME &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <h3 className="type-h3 font-display font-medium text-[#F8FAFC]">
                Shubham Sharma
              </h3>
              <p className="type-body text-[#F8FAFC] font-normal leading-relaxed">
                Undergraduate in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur). I build at the intersection of deep learning runtimes, computer vision, and backend systems engineering.
              </p>
              <p className="type-body text-[#94A3B8] font-normal leading-relaxed">
                Rather than treating machine learning models as black boxes, I focus on understanding why models generalize, where distributions shift, and how to execute them deterministically on real hardware.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#101318] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[#161B22] rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#101318] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[#161B22] rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <span className="type-label text-[#64748B]">
                  IIT Jodhpur, Rajasthan, India
                </span>
              </div>
            </div>

            {/* Editorial 4-Pillar Metadata */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 border border-[rgba(255,255,255,0.08)] bg-[#101318] hover:bg-[#161B22] transition-all rounded-xl space-y-2">
                <div className="type-label text-[#64748B] uppercase tracking-wider">WHO I AM</div>
                <div className="text-base font-semibold text-[#F8FAFC]">Applied AI &amp; Systems Builder</div>
                <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                  Focused on translating mathematical formulations into high-performance, deterministic code.
                </p>
              </div>

              <div className="p-6 border border-[rgba(255,255,255,0.08)] bg-[#101318] hover:bg-[#161B22] transition-all rounded-xl space-y-2">
                <div className="type-label text-[#64748B] uppercase tracking-wider">WHAT I STUDY</div>
                <div className="text-base font-semibold text-[#F8FAFC]">Applied AI &amp; Data Science</div>
                <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                  B.S. at IIT Jodhpur (2023 &mdash; Present). Optimization theory, statistical inference, and linear algebra.
                </p>
              </div>

              <div className="p-6 border border-[rgba(255,255,255,0.08)] bg-[#101318] hover:bg-[#161B22] transition-all rounded-xl space-y-2">
                <div className="type-label text-[#64748B] uppercase tracking-wider">WHAT I BUILD</div>
                <div className="text-base font-semibold text-[#F8FAFC]">Runtimes &amp; Pipelines</div>
                <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                  Edge inference verification modules, 1-bit vision filters, and async event dispatch engines.
                </p>
              </div>

              <div className="p-6 border border-[rgba(255,255,255,0.08)] bg-[#101318] hover:bg-[#161B22] transition-all rounded-xl space-y-2">
                <div className="type-label text-[#64748B] uppercase tracking-wider">WHAT I'M EXPLORING</div>
                <div className="text-base font-semibold text-[#F8FAFC]">Sub-8-Bit Quantization</div>
                <p className="type-body-sm text-[#94A3B8] leading-relaxed">
                  MXFP4 microscaling formats, Hessian loss curvature at convergence, and SIMD vector indices.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07 — CLOSING: Memorable Final Statement & Contact Initiation               */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 bg-[#0A0D12] border-b border-[rgba(255,255,255,0.08)]">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#101318] type-label text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>07 // COLLABORATION</span>
            </div>

            <h2 className="type-hero font-medium font-display uppercase tracking-tight text-[#F8FAFC] leading-[0.92]">
              Let's build <br />
              <span className="font-serif-editorial italic font-normal lowercase text-white">
                something
              </span>
              <br />
              Interesting.
            </h2>

            <p className="type-body-lg text-[#94A3B8] font-normal max-w-xl mx-auto leading-relaxed">
              Available for machine learning internships, data science research, and computational software engineering roles.
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
                CONTACT ME
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
                COPY EMAIL
              </TactileButton>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
