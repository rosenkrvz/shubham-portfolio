import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ExternalLink, GraduationCap, Code2, Layers, CheckCircle2, Sparkles, Sliders } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons.jsx';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { certificates } from '../data/certificates.js';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage({ onOpenProject, onShowToast }) {
  usePageMeta({
    title: 'Shubham Sharma — AI & Data Science | Software Engineer',
    description: 'Undergraduate at IIT Jodhpur specializing in machine learning systems, computer vision algorithms, and scalable distributed backends.',
    path: '/'
  });

  const featuredProject = projects.find((p) => p.id === 'sentinel-npu') || projects[0];
  const visionProject = projects.find((p) => p.id === 'operator-vision');
  const backendProject = projects.find((p) => p.id === 'surveillance-operator');
  const otherProjects = projects.filter((p) => !['sentinel-npu', 'operator-vision', 'surveillance-operator'].includes(p.id));

  return (
    <div className="relative min-h-screen">
      
      {/* ------------------------------------------------------------- */}
      {/* 01 — ARRIVAL: Typographic Hero */}
      {/* ------------------------------------------------------------- */}
      <section className="pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28 border-b border-[#1C1C22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            
            {/* Academic pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16161B] border border-[#26262E] text-xs text-[#9E9EA8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
              <span>IIT Jodhpur • B.S. in Applied AI &amp; Data Science</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-[#F4F4F0] leading-[1.04]">
              Shubham Sharma
            </h1>

            <p className="text-xs sm:text-sm font-mono tracking-widest text-[#818CF8] uppercase">
              AI • DATA • SOFTWARE
            </p>

            {/* Personal Statement */}
            <p className="text-lg sm:text-xl text-[#9E9EA8] leading-relaxed max-w-2xl pt-2">
              I build <span className="font-serif-editorial italic text-white text-[1.12em]">intelligent software systems</span> where mathematical data foundations, computation, and product design meet.
            </p>

            {/* Primary Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-medium tracking-wide transition-colors shadow-sm"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#16161B] hover:bg-[#202026] border border-[#26262E] hover:border-[#383844] text-[#F4F4F0] text-xs font-medium tracking-wide transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9E9EA8]" />
              </Link>
            </div>

            {/* Status Row */}
            <div className="pt-8 border-t border-[#1C1C22] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#9E9EA8]">
              <div>
                <div className="text-[#656570] uppercase text-[10px] tracking-wider mb-0.5">Institution</div>
                <div className="text-[#F4F4F0] font-medium">IIT Jodhpur (2023 — Present)</div>
              </div>
              <div>
                <div className="text-[#656570] uppercase text-[10px] tracking-wider mb-0.5">Primary Focus</div>
                <div className="text-[#F4F4F0] font-medium">Deep Learning &amp; Distributed Systems</div>
              </div>
              <div>
                <div className="text-[#656570] uppercase text-[10px] tracking-wider mb-0.5">Availability</div>
                <div className="text-[#F4F4F0] font-medium">Internships &amp; Research Roles</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 02 — A VISUAL STATEMENT: Editorial Breathing Moment */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 border-b border-[#1C1C22] bg-[#0A0A0D]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-[11px] font-mono text-[#818CF8] uppercase tracking-widest block">
            02 // Design Philosophy
          </span>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F4F4F0] leading-tight max-w-3xl mx-auto">
            "Turning <span className="font-serif-editorial italic text-white text-[1.15em]">complex systems</span> into software people can <span className="font-serif-editorial italic text-white text-[1.15em]">actually use.</span>"
          </p>
          <p className="text-xs sm:text-sm text-[#656570] max-w-lg mx-auto pt-2 leading-relaxed">
            Bridging mathematical machine learning principles with production-grade distributed architectures and human interfaces.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 03 — SELECTED WORK: 4 Distinct Compositions */}
      {/* ------------------------------------------------------------- */}
      <section id="selected-work" className="py-20 sm:py-28 border-b border-[#1C1C22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1C1C22] pb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#818CF8] font-mono font-medium">
                03 // Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#F4F4F0] tracking-tight mt-1">
                Selected <span className="font-serif-editorial italic text-white font-normal">Work.</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#9E9EA8] max-w-md">
              Real projects spanning model integrity attestation, spatial computer vision, and high-throughput backend services.
            </p>
          </div>

          {/* COMPOSITION 1: Large Featured Lead Study (Sentinel NPU) */}
          {featuredProject && (
            <div className="group rounded-2xl bg-[#111114] border border-[#1C1C22] hover:border-[#32323D] transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Visual Half */}
                <div 
                  onClick={() => onOpenProject(featuredProject)}
                  className="lg:col-span-7 relative bg-black aspect-[16/10] lg:aspect-auto overflow-hidden cursor-pointer"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-[#08080A]/80 backdrop-blur border border-white/10 text-[11px] text-[#F4F4F0] font-medium">
                      Featured Case Study
                    </span>
                  </div>
                </div>

                {/* Narrative Half */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#9E9EA8]">
                      <span>{featuredProject.category}</span>
                      <span>•</span>
                      <span>{featuredProject.timeline}</span>
                    </div>

                    <h3 
                      onClick={() => onOpenProject(featuredProject)}
                      className="text-2xl sm:text-3xl font-display font-medium text-[#F4F4F0] group-hover:text-white cursor-pointer transition-colors leading-snug"
                    >
                      {featuredProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                      {featuredProject.summary}
                    </p>

                    {/* Real Technical Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {featuredProject.metrics.map((m, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-[#16161B] border border-[#222228]">
                          <span className="text-[10px] text-[#656570] block leading-tight">{m.label}</span>
                          <span className="text-xs font-mono font-medium text-[#F4F4F0] mt-0.5 block">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredProject.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#16161A] text-[11px] text-[#9E9EA8] border border-[#222228]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#1C1C22] flex items-center justify-between">
                    <button
                      onClick={() => onOpenProject(featuredProject)}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#818CF8] hover:text-white transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#656570] hover:text-[#F4F4F0] transition-colors p-1"
                        aria-label="View source on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* COMPOSITION 2 & 3: Split-Screen Pair */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Project 02: 1-Bit Spatial Dither Vision */}
            {visionProject && (
              <div className="group rounded-2xl bg-[#111114] border border-[#1C1C22] hover:border-[#32323D] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div 
                  onClick={() => onOpenProject(visionProject)}
                  className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer"
                >
                  <img
                    src={visionProject.image}
                    alt={visionProject.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-[#08080A]/80 backdrop-blur border border-white/10 text-[11px] text-[#F4F4F0] font-medium">
                      Computer Vision
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#9E9EA8]">
                      <span>{visionProject.category}</span>
                      <span>•</span>
                      <span>{visionProject.timeline}</span>
                    </div>

                    <h3 
                      onClick={() => onOpenProject(visionProject)}
                      className="text-xl sm:text-2xl font-display font-medium text-[#F4F4F0] group-hover:text-white cursor-pointer transition-colors leading-snug"
                    >
                      {visionProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                      {visionProject.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {visionProject.metrics.map((m, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-[#16161B] border border-[#222228]">
                          <span className="text-[10px] text-[#656570] block leading-tight">{m.label}</span>
                          <span className="text-xs font-mono font-medium text-[#F4F4F0] mt-0.5 block">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1C1C22] flex items-center justify-between">
                    <button
                      onClick={() => onOpenProject(visionProject)}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#818CF8] hover:text-white transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {visionProject.githubUrl && (
                      <a
                        href={visionProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#656570] hover:text-[#F4F4F0] transition-colors p-1"
                        aria-label="View source on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Project 03: Autonomous Incident Review */}
            {backendProject && (
              <div className="group rounded-2xl bg-[#111114] border border-[#1C1C22] hover:border-[#32323D] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div 
                  onClick={() => onOpenProject(backendProject)}
                  className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer"
                >
                  <img
                    src={backendProject.image}
                    alt={backendProject.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-[#08080A]/80 backdrop-blur border border-white/10 text-[11px] text-[#F4F4F0] font-medium">
                      Distributed Systems
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#9E9EA8]">
                      <span>{backendProject.category}</span>
                      <span>•</span>
                      <span>{backendProject.timeline}</span>
                    </div>

                    <h3 
                      onClick={() => onOpenProject(backendProject)}
                      className="text-xl sm:text-2xl font-display font-medium text-[#F4F4F0] group-hover:text-white cursor-pointer transition-colors leading-snug"
                    >
                      {backendProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
                      {backendProject.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {backendProject.metrics.map((m, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-[#16161B] border border-[#222228]">
                          <span className="text-[10px] text-[#656570] block leading-tight">{m.label}</span>
                          <span className="text-xs font-mono font-medium text-[#F4F4F0] mt-0.5 block">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1C1C22] flex items-center justify-between">
                    <button
                      onClick={() => onOpenProject(backendProject)}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#818CF8] hover:text-white transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {backendProject.githubUrl && (
                      <a
                        href={backendProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#656570] hover:text-[#F4F4F0] transition-colors p-1"
                        aria-label="View source on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* COMPOSITION 4: Compact Horizontal Studies (Credit Risk & Vector Mesh) */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#656570] block">
              Additional Research Prototypes
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onOpenProject(p)}
                  className="group p-6 rounded-xl bg-[#111114] border border-[#1C1C22] hover:border-[#32323D] cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#9E9EA8]">
                      <span>{p.category}</span>
                      <span className="font-mono text-[11px] text-[#818CF8]">{p.metrics[0]?.value}</span>
                    </div>
                    <h4 className="text-base font-display font-medium text-[#F4F4F0] group-hover:text-white transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#9E9EA8] leading-relaxed line-clamp-2">
                      {p.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#1C1C22]">
                    <div className="flex gap-1">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#16161B] text-[10px] text-[#656570]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-[#818CF8] group-hover:translate-x-1 transition-transform">
                      <span>View Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Catalog Link */}
          <div className="pt-2 flex justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16161B] hover:bg-[#202026] border border-[#26262E] hover:border-[#383844] text-[#F4F4F0] text-xs font-medium tracking-wide transition-colors"
            >
              <span>Explore All Projects &amp; Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 04 — CAPABILITIES: Editorial 3-Column Section */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 border-b border-[#1C1C22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <span className="text-xs uppercase tracking-wider text-[#818CF8] font-mono font-medium">
              04 // Discipline &amp; Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#F4F4F0] tracking-tight mt-1">
              Engineering <span className="font-serif-editorial italic text-white font-normal">Capabilities.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 01 / AI */}
            <div className="p-6 rounded-2xl bg-[#111114] border border-[#1C1C22] space-y-4">
              <span className="font-mono text-xs text-[#818CF8] font-medium block">
                01 / ARTIFICIAL INTELLIGENCE
              </span>
              <h3 className="text-lg font-display font-medium text-[#F4F4F0]">
                Deep Learning &amp; Optimization
              </h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                Deriving loss functions, implementing custom neural layers, and quantizing models (INT8/FP4) with PyTorch, TensorRT, and mathematical rigor.
              </p>
              <ul className="text-xs text-[#656570] space-y-1.5 pt-2 border-t border-[#1C1C22]">
                <li>• PyTorch &amp; Scikit-Learn</li>
                <li>• Convolutional &amp; Attention Networks</li>
                <li>• Quantization &amp; Latency Profiling</li>
                <li>• Numerical Optimization Theory</li>
              </ul>
            </div>

            {/* 02 / Software */}
            <div className="p-6 rounded-2xl bg-[#111114] border border-[#1C1C22] space-y-4">
              <span className="font-mono text-xs text-[#818CF8] font-medium block">
                02 / SOFTWARE ENGINEERING
              </span>
              <h3 className="text-lg font-display font-medium text-[#F4F4F0]">
                Backend &amp; Distributed Systems
              </h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                Building asynchronous, memory-efficient services in Python, C++, and Rust — structured with connection pooling, Redis streaming, and Docker.
              </p>
              <ul className="text-xs text-[#656570] space-y-1.5 pt-2 border-t border-[#1C1C22]">
                <li>• Python AsyncIO &amp; FastAPI</li>
                <li>• PostgreSQL &amp; Redis Streams</li>
                <li>• Containerized Architectures (Docker)</li>
                <li>• Low-Latency API Contracts</li>
              </ul>
            </div>

            {/* 03 / Data */}
            <div className="p-6 rounded-2xl bg-[#111114] border border-[#1C1C22] space-y-4">
              <span className="font-mono text-xs text-[#818CF8] font-medium block">
                03 / DATA SYSTEMS
              </span>
              <h3 className="text-lg font-display font-medium text-[#F4F4F0]">
                Pipelines &amp; Experimentation
              </h3>
              <p className="text-xs text-[#9E9EA8] leading-relaxed">
                Handling high-dimensional embedding spaces, spatial pixel transformations, statistical evaluation, and reproducible empirical metrics.
              </p>
              <ul className="text-xs text-[#656570] space-y-1.5 pt-2 border-t border-[#1C1C22]">
                <li>• HNSW Vector Graph Indexing</li>
                <li>• Computer Vision (OpenCV/Halftone)</li>
                <li>• Statistical Validation (ROC-AUC / P99)</li>
                <li>• Empirical Benchmarking Pipelines</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 05 — EDUCATION / FOUNDATION: IIT Jodhpur */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 border-b border-[#1C1C22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#818CF8] font-mono font-medium">
                  05 // Academic Foundation
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#F4F4F0] tracking-tight mt-1">
                  Education &amp; <span className="font-serif-editorial italic text-white font-normal">Perspective.</span>
                </h2>
              </div>

              <p className="text-sm text-[#9E9EA8] leading-relaxed">
                Currently pursuing a Bachelor of Science in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur.
              </p>

              <p className="text-sm text-[#9E9EA8] leading-relaxed">
                My work centers on first-principles understanding: deriving loss functions from optimization theory, profiling memory bandwidth before optimizing code, and creating systems that are reliable and interpretable.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#818CF8] hover:text-white transition-colors"
                >
                  <span>Read Academic Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-2xl bg-[#111114] border border-[#1C1C22] space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#F4F4F0]">
                  <GraduationCap className="w-4 h-4 text-[#818CF8]" />
                  <span>IIT Jodhpur Curriculum &amp; Foundations</span>
                </div>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  Rigorous foundational coursework in Applied Mathematics, Linear Algebra, Multivariate Calculus, Data Structures &amp; Algorithms, Deep Learning, and Computer Vision.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111114] border border-[#1C1C22] space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#F4F4F0]">
                  <Code2 className="w-4 h-4 text-[#818CF8]" />
                  <span>Empirical Benchmarking Over Guesswork</span>
                </div>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  Every pipeline is validated with empirical metrics — measuring P99 query latency, cache locality, memory footprint, and ROC-AUC scores against clear baselines.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111114] border border-[#1C1C22] space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#F4F4F0]">
                  <Layers className="w-4 h-4 text-[#818CF8]" />
                  <span>Full-Stack &amp; Systems Execution</span>
                </div>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  Bridging the gap between standalone machine learning notebooks and production applications — integrating PyTorch with FastAPI, Docker, and responsive interfaces.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 06 & 07 — CURRENTLY EXPLORING & INTERACTIVE LAB */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 border-b border-[#1C1C22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#818CF8] font-mono font-medium">
                07 // Living Research
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-[#F4F4F0] tracking-tight mt-1">
                Currently <span className="font-serif-editorial italic text-white font-normal">Exploring.</span>
              </h2>
            </div>
            <Link
              to="/experiments"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#818CF8] hover:text-white transition-colors"
            >
              <span>Launch Interactive Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            {[
              { topic: 'Edge Model Attestation', area: 'Hardware & Crypto' },
              { topic: '1-Bit Spatial Quantization', area: 'Vision & Halftone' },
              { topic: 'HNSW Vector Meshes', area: 'Retrieval & Graph' },
              { topic: 'Low-Latency FastAPI', area: 'Distributed Systems' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#111114] border border-[#1C1C22] space-y-1">
                <span className="text-[10px] font-mono text-[#656570] block">{item.area}</span>
                <span className="text-xs font-medium text-[#F4F4F0] block">{item.topic}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 08 — MINIMAL CONFIDENT CONTACT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-wider text-[#818CF8] font-mono font-medium">
              08 // Transmission
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-[#F4F4F0] tracking-tight leading-tight">
              Have something <span className="font-serif-editorial italic text-white font-normal">worth building?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed">
              Open for technical internships, engineering roles, and academic collaborations. Feel free to initiate a conversation anytime.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-medium tracking-wide transition-colors"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  onShowToast?.({
                    type: 'success',
                    message: `Email copied to clipboard: ${profile.email}`
                  });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#16161B] hover:bg-[#202026] border border-[#26262E] text-xs font-mono text-[#F4F4F0] transition-colors"
              >
                <span>{profile.email}</span>
                <span className="text-[10px] text-[#656570]">Copy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
