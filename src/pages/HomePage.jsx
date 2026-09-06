import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ExternalLink, GraduationCap, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons.jsx';
import { profile } from '../data/profile.js';
import { projects } from '../data/projects.js';
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
      {/* 1. HERO SECTION: Typographic, Uncluttered, Immediate */}
      {/* ------------------------------------------------------------- */}
      <section className="pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 border-b border-[#1E1E23]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-6">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#16161B] border border-[#25252E] text-xs text-[#8E8D96]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
              <span>IIT Jodhpur • Applied AI &amp; Data Science</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-[#F4F4F2] leading-[1.06]">
              Shubham Sharma
            </h1>

            <p className="text-xl sm:text-2xl font-display text-[#9A9AA2] font-normal tracking-tight">
              Software • Machine Learning • Systems
            </p>

            {/* Personal Statement */}
            <p className="text-base sm:text-lg text-[#8E8D96] leading-relaxed max-w-2xl pt-2">
              Undergraduate at the Indian Institute of Technology Jodhpur. I bridge mathematical theory with production-grade engineering — designing deep learning models, computer vision algorithms, and resilient software systems.
            </p>

            {/* Primary Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16161B] hover:bg-[#202026] border border-[#25252E] hover:border-[#383844] text-[#F4F4F2] text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8D96]" />
              </Link>
            </div>

            {/* Grounded Status Row */}
            <div className="pt-8 border-t border-[#1E1E23] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#8E8D96]">
              <div>
                <div className="text-[#65656E] uppercase text-[10px] tracking-wider mb-0.5">Institution</div>
                <div className="text-[#F4F4F2] font-medium">IIT Jodhpur (2023 — Present)</div>
              </div>
              <div>
                <div className="text-[#65656E] uppercase text-[10px] tracking-wider mb-0.5">Primary Focus</div>
                <div className="text-[#F4F4F2] font-medium">Deep Learning &amp; Backend Systems</div>
              </div>
              <div>
                <div className="text-[#65656E] uppercase text-[10px] tracking-wider mb-0.5">Availability</div>
                <div className="text-[#F4F4F2] font-medium">Internships &amp; Engineering Roles</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. SELECTED WORK: Varied Compositions */}
      {/* ------------------------------------------------------------- */}
      <section id="selected-work" className="py-20 sm:py-28 border-b border-[#1E1E23]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1E1E23] pb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#6366F1] font-medium">
                Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-semibold text-[#F4F4F2] tracking-tight mt-1">
                Selected Work
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8D96] max-w-md">
              Real projects spanning model integrity attestation, spatial computer vision, and high-throughput backend services.
            </p>
          </div>

          {/* COMPOSITION 1: Large Featured Project (Sentinel NPU) */}
          {featuredProject && (
            <div className="group rounded-2xl bg-[#121215] border border-[#1E1E24] hover:border-[#32323D] transition-all duration-300 overflow-hidden">
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
                    <span className="px-2.5 py-1 rounded bg-[#0C0C0E]/80 backdrop-blur border border-white/10 text-[11px] text-[#F4F4F2] font-medium">
                      Featured Case Study
                    </span>
                  </div>
                </div>

                {/* Narrative Half */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#8E8D96]">
                      <span>{featuredProject.category}</span>
                      <span>•</span>
                      <span>{featuredProject.timeline}</span>
                    </div>

                    <h3 
                      onClick={() => onOpenProject(featuredProject)}
                      className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2] group-hover:text-white cursor-pointer transition-colors leading-snug"
                    >
                      {featuredProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8E8D96] leading-relaxed">
                      {featuredProject.summary}
                    </p>

                    {/* Real Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#1E1E24]">
                      {featuredProject.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-sm font-semibold text-[#F4F4F2] font-mono">{m.value}</div>
                          <div className="text-[10px] text-[#65656E]">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredProject.tags.slice(0, 5).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-[#1A1A20] text-[11px] text-[#8E8D96]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={() => onOpenProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4F4F2] hover:bg-white text-[#0C0C0E] text-xs font-semibold tracking-wide transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#18181D] hover:bg-[#222229] border border-[#25252E] text-[#8E8D96] hover:text-[#F4F4F2] transition-colors"
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

          {/* COMPOSITION 2: Split-Screen Editorial Pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Project */}
            {visionProject && (
              <div className="group rounded-xl bg-[#121215] border border-[#1E1E24] hover:border-[#32323D] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div 
                    onClick={() => onOpenProject(visionProject)}
                    className="aspect-[16/9] rounded-lg bg-black overflow-hidden cursor-pointer"
                  >
                    <img
                      src={visionProject.image}
                      alt={visionProject.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-[#8E8D96]">{visionProject.category}</div>
                    <h3 
                      onClick={() => onOpenProject(visionProject)}
                      className="text-xl font-display font-semibold text-[#F4F4F2] group-hover:text-white cursor-pointer transition-colors"
                    >
                      {visionProject.title}
                    </h3>
                    <p className="text-xs text-[#8E8D96] leading-relaxed">
                      {visionProject.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1E1E24]">
                    {visionProject.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xs font-semibold text-[#F4F4F2] font-mono">{m.value}</div>
                        <div className="text-[10px] text-[#65656E]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => onOpenProject(visionProject)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F4F2] hover:text-[#6366F1] transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex gap-1">
                    {visionProject.tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] text-[10px] text-[#65656E]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Backend Project */}
            {backendProject && (
              <div className="group rounded-xl bg-[#121215] border border-[#1E1E24] hover:border-[#32323D] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div 
                    onClick={() => onOpenProject(backendProject)}
                    className="aspect-[16/9] rounded-lg bg-black overflow-hidden cursor-pointer"
                  >
                    <img
                      src={backendProject.image}
                      alt={backendProject.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-[#8E8D96]">{backendProject.category}</div>
                    <h3 
                      onClick={() => onOpenProject(backendProject)}
                      className="text-xl font-display font-semibold text-[#F4F4F2] group-hover:text-white cursor-pointer transition-colors"
                    >
                      {backendProject.title}
                    </h3>
                    <p className="text-xs text-[#8E8D96] leading-relaxed">
                      {backendProject.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1E1E24]">
                    {backendProject.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xs font-semibold text-[#F4F4F2] font-mono">{m.value}</div>
                        <div className="text-[10px] text-[#65656E]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => onOpenProject(backendProject)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F4F2] hover:text-[#6366F1] transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex gap-1">
                    {backendProject.tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] text-[10px] text-[#65656E]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* COMPOSITION 3: Horizontal Studies */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-[#65656E] font-medium">
              Additional Case Studies
            </h3>
            <div className="divide-y divide-[#1E1E24] border-y border-[#1E1E24]">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onOpenProject(p)}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer hover:bg-[#121215] px-3 -mx-3 rounded-lg transition-colors"
                >
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2 text-xs text-[#8E8D96]">
                      <span>{p.category}</span>
                      <span>•</span>
                      <span>{p.timeline}</span>
                    </div>
                    <h4 className="text-base font-semibold text-[#F4F4F2] group-hover:text-white transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#8E8D96] line-clamp-1">
                      {p.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-1">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] text-[10px] text-[#65656E]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-[#8E8D96] group-hover:text-[#F4F4F2] transition-colors">
                      <span>View Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#16161B] hover:bg-[#202026] border border-[#25252E] hover:border-[#383844] text-[#F4F4F2] text-xs font-semibold tracking-wide transition-colors"
            >
              <span>Explore All Projects &amp; Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. ACADEMIC & PERSPECTIVE SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28 border-b border-[#1E1E23]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: About Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#6366F1] font-medium">
                  Background
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-semibold text-[#F4F4F2] tracking-tight mt-1">
                  Academic Foundation &amp; Perspective
                </h2>
              </div>

              <p className="text-sm text-[#8E8D96] leading-relaxed">
                Currently pursuing a Bachelor of Science in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur.
              </p>

              <p className="text-sm text-[#8E8D96] leading-relaxed">
                My approach centers on first-principles understanding: deriving loss functions from optimization theory, profiling memory bandwidth before optimizing code, and creating systems that are reliable and interpretable.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F4F2] hover:text-[#6366F1] transition-colors"
                >
                  <span>Read Full About &amp; Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Core Pillars */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="p-6 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F4F4F2]">
                  <GraduationCap className="w-4 h-4 text-[#6366F1]" />
                  <span>IIT Jodhpur Curriculum &amp; Research</span>
                </div>
                <p className="text-xs text-[#8E8D96] leading-relaxed">
                  Rigorous foundational coursework in Applied Mathematics, Linear Algebra, Multivariate Calculus, Data Structures &amp; Algorithms, Deep Learning, and Computer Vision.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F4F4F2]">
                  <Code2 className="w-4 h-4 text-[#6366F1]" />
                  <span>Empirical Benchmarking Over Guesswork</span>
                </div>
                <p className="text-xs text-[#8E8D96] leading-relaxed">
                  Every pipeline is validated with empirical metrics — measuring P99 query latency, cache locality, memory footprint, and ROC-AUC scores against clear baselines.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#121215] border border-[#1E1E24] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F4F4F2]">
                  <Layers className="w-4 h-4 text-[#6366F1]" />
                  <span>Full-Stack &amp; Systems Execution</span>
                </div>
                <p className="text-xs text-[#8E8D96] leading-relaxed">
                  Bridging the gap between standalone machine learning notebooks and production applications — integrating PyTorch with FastAPI, Docker, and responsive interfaces.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. DIRECT CONTACT INVITATION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-wider text-[#6366F1] font-medium">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-semibold text-[#F4F4F2] tracking-tight leading-tight">
              Let's build something thoughtful together.
            </h2>
            <p className="text-sm sm:text-base text-[#8E8D96] leading-relaxed">
              Whether you have an engineering opportunity, a research collaboration, or an interesting machine learning challenge — feel free to reach out directly.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Send a Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  onShowToast?.({
                    type: 'success',
                    message: `Email copied: ${profile.email}`
                  });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16161B] hover:bg-[#202026] border border-[#25252E] text-xs font-mono text-[#F4F4F2] transition-colors"
              >
                <span>{profile.email}</span>
                <span className="text-[10px] text-[#65656E]">Copy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
