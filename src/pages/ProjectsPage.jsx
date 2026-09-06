import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, ExternalLink, SlidersHorizontal, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons.jsx';
import { projects } from '../data/projects.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import SegmentedIndustrialSwitch from '../components/ui/SegmentedIndustrialSwitch.jsx';

import ProjectSentinelCase from '../components/projects/ProjectSentinelCase.jsx';
import ProjectDitherCase from '../components/projects/ProjectDitherCase.jsx';
import ProjectOrchestratorCase from '../components/projects/ProjectOrchestratorCase.jsx';
import ProjectRiskCase from '../components/projects/ProjectRiskCase.jsx';

export default function ProjectsPage({ onOpenProject }) {
  usePageMeta({
    title: 'Work & Projects — Shubham Sharma | IIT Jodhpur',
    description: 'Selected projects, experiments and systems built by Shubham Sharma. AI models, edge runtimes, computer vision algorithms, and backend architectures.',
    path: '/projects'
  });

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  // viewMode: false = "EDITORIAL ARCHIVE", true = "DEEP CASE STUDIES"
  const [isCaseStudiesView, setIsCaseStudiesView] = useState(false);

  const categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'AI', label: 'AI' },
    { id: 'DATA', label: 'DATA' },
    { id: 'ANALYSIS', label: 'ANALYSIS' },
    { id: 'ML', label: 'ML' },
    { id: 'SOFTWARE', label: 'SOFTWARE' },
    { id: 'VISUALIZATION', label: 'VISUALIZATION' },
    { id: 'EXPERIMENTS', label: 'EXPERIMENTS' }
  ];

  const filteredProjects = projects.filter((proj) => {
    let matchesCategory = true;
    if (selectedCategory === 'AI') {
      matchesCategory = ['sentinel-npu', 'operator-vision', 'distributed-vector-mesh'].includes(proj.id) || proj.tags.some(t => ['PyTorch', 'TensorRT', 'Edge AI', 'Computer Vision'].includes(t));
    } else if (selectedCategory === 'DATA') {
      matchesCategory = ['loan-risk-prediction', 'distributed-vector-mesh'].includes(proj.id) || proj.tags.some(t => ['Tabular Data', 'NumPy', 'Scikit-learn'].includes(t));
    } else if (selectedCategory === 'ANALYSIS') {
      matchesCategory = ['loan-risk-prediction'].includes(proj.id) || proj.category === 'DATA ANALYSIS' || proj.tags.some(t => ['SHAP', 'LightGBM'].includes(t));
    } else if (selectedCategory === 'ML') {
      matchesCategory = ['sentinel-npu', 'loan-risk-prediction'].includes(proj.id) || proj.tags.some(t => ['PyTorch', 'TensorRT', 'Quantization', 'LightGBM'].includes(t));
    } else if (selectedCategory === 'SOFTWARE') {
      matchesCategory = ['surveillance-operator', 'distributed-vector-mesh'].includes(proj.id) || proj.category === 'SOFTWARE';
    } else if (selectedCategory === 'VISUALIZATION') {
      matchesCategory = ['operator-vision'].includes(proj.id) || proj.tags.some(t => ['Computer Vision', 'Halftone Algorithms'].includes(t));
    } else if (selectedCategory === 'EXPERIMENTS') {
      matchesCategory = ['operator-vision', 'sentinel-npu', 'distributed-vector-mesh'].includes(proj.id);
    }

    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (proj.overview && proj.overview.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const pSentinel = projects.find((p) => p.id === 'sentinel-npu') || projects[0];
  const pDither = projects.find((p) => p.id === 'operator-vision') || projects[1];
  const pOrchestrator = projects.find((p) => p.id === 'surveillance-operator') || projects[2];
  const pRisk = projects.find((p) => p.id === 'loan-risk-prediction') || projects[3];

  return (
    <PageTransition>
      <div className="min-h-screen py-24 md:py-32 bg-[#09090B] text-[#E8E8E8]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16 sm:space-y-20">
          
          {/* Editorial Header */}
          <div className="space-y-5 border-b border-[#27272A]/50 pb-12">
            <div className="type-label flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span>PROJECT ARCHIVE // SYSTEMS &bull; MODELS &bull; EXPERIMENTS</span>
            </div>

            <h1 className="type-h1 text-[#FAFAFA]">
              PROJECTS /<br />
              EXPERIMENTS /<br />
              SYSTEMS.
            </h1>

            <p className="text-lg sm:text-xl text-[#B0B0B0] max-w-[65ch] font-normal leading-relaxed">
              A collection of systems, models, analyses and experiments built while exploring the intersection of software, data and intelligent systems.
            </p>
          </div>

          {/* Filter & View Switcher Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-[#27272A]/50 pb-8">
            
            {/* Category Filter */}
            <div className="p-1 rounded-[6px] bg-[#121215] border border-[rgba(255,255,255,0.06)] flex flex-wrap items-center gap-1">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer flex items-center gap-1.5 select-none ${
                      isSelected
                        ? 'bg-[#18181B] text-[#FAFAFA] font-medium border border-[rgba(255,255,255,0.12)]'
                        : 'text-[#9A9A9A] hover:text-[#FAFAFA] hover:bg-[#141418]'
                    }`}
                  >
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                    )}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Controls: Segmented Switch & Minimal Search */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <SegmentedIndustrialSwitch
                  checked={isCaseStudiesView}
                  onChange={setIsCaseStudiesView}
                  leftLabel="ARCHIVE"
                  rightLabel="CASE STUDIES"
                  ariaLabel="Toggle between archive and detailed case studies"
                />
              </div>

              {/* Minimal Search Box */}
              <div className="relative min-w-[220px] flex-1 sm:flex-initial">
                <Search className="w-3.5 h-3.5 text-[#9A9A9A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword or model..."
                  className="w-full pl-9 pr-3.5 py-2 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#FAFAFA] placeholder-[#71717A] focus:outline-none focus:border-[#FAFAFA]/40 transition-colors"
                />
              </div>
            </div>

          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 px-4 bg-[#121215] border border-[#27272A]/50 rounded-[4px] space-y-3 font-mono">
              <h3 className="text-sm font-semibold text-[#FAFAFA]">No matching systems found</h3>
              <p className="text-xs text-[#71717A] max-w-sm mx-auto">
                No projects matched "{searchQuery}". Try selecting "ALL" or resetting your search query.
              </p>
              <button
                onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                className="px-4 py-2 bg-[#FAFAFA] text-[#09090B] text-xs font-semibold rounded-[4px] cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* VIEW MODE 1: Detailed Deep-Dive Case Studies */}
          {isCaseStudiesView ? (
            <div className="space-y-16">
              <ProjectSentinelCase project={pSentinel} onOpenModal={onOpenProject} />
              <ProjectDitherCase project={pDither} onOpenModal={onOpenProject} />
              <ProjectOrchestratorCase project={pOrchestrator} onOpenModal={onOpenProject} />
              <ProjectRiskCase project={pRisk} onOpenModal={onOpenProject} />
            </div>
          ) : (
            /* VIEW MODE 2: Editorial Alternating Archive */
            <div className="space-y-24 md:space-y-32">
              {filteredProjects.map((proj, index) => {
                const projectNum = `0${index + 1}`.slice(-2);
                const isEven = index % 2 === 0;
                const isBanner = index === 0;

                // Alternate composition styles:
                if (isBanner) {
                  // COMPOSITION 01: Huge visual banner + thesis + metrics
                  return (
                    <article
                      key={proj.id}
                      className="border-b border-[#27272A]/50 pb-20 md:pb-28 space-y-8 group"
                    >
                      <div className="flex items-baseline justify-between border-b border-[#27272A]/50 pb-3 text-xs font-mono text-[#9A9A9A]">
                        <span className="text-[#FAFAFA] font-medium">{projectNum} // FEATURED SYSTEM</span>
                        <span>{proj.timeline} &bull; {proj.category}</span>
                      </div>

                      {/* Project Visual */}
                      <div
                        onClick={() => onOpenProject(proj)}
                        className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] bg-[#121215] border border-[rgba(255,255,255,0.08)] overflow-hidden cursor-pointer group rounded-[4px]"
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover grayscale contrast-115 opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-85" />
                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                          <div>
                            <div className="type-label mb-1 text-[#B0B0B0]">
                              {proj.category}
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
                              {proj.title}
                            </h2>
                          </div>

                          <div className="px-4 py-2 bg-[#121215]/90 border border-[rgba(255,255,255,0.12)] backdrop-blur text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 rounded-[4px]">
                            <span>READ CASE STUDY</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-8 space-y-4">
                          <p className="text-xl sm:text-2xl text-[#FAFAFA] font-light leading-relaxed max-w-[65ch]">
                            {proj.subtitle}
                          </p>
                          <p className="text-base text-[#B0B0B0] font-normal leading-relaxed max-w-[65ch]">
                            {proj.overview || proj.summary}
                          </p>
                        </div>

                        <div className="md:col-span-4 border-l border-[#27272A]/50 pl-6 space-y-3 font-mono text-xs">
                          <div className="type-label">VERIFIED METRICS</div>
                          {proj.metrics.map((m) => (
                            <div key={m.label} className="flex items-baseline justify-between border-b border-[#27272A]/30 pb-2">
                              <span className="text-[#B0B0B0]">{m.label}</span>
                              <span className="text-[#FAFAFA] font-medium">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                }

                if (isBanner) {
                  // COMPOSITION 01: Monumental featured system banner + thesis + metrics
                  return (
                    <article
                      key={proj.id}
                      className="border-b border-[#27272A]/50 pb-20 md:pb-28 space-y-8 group"
                    >
                      <div className="flex items-baseline justify-between border-b border-[#27272A]/50 pb-3 text-xs font-mono text-[#9A9A9A]">
                        <span className="text-[#FAFAFA] font-medium">{projectNum} // FEATURED AI RUNTIME</span>
                        <span>{proj.timeline} &bull; {proj.category}</span>
                      </div>

                      {/* Project Visual */}
                      <div
                        onClick={() => onOpenProject(proj)}
                        className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] bg-[#121215] border border-[rgba(255,255,255,0.08)] overflow-hidden cursor-pointer group rounded-[4px]"
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover grayscale contrast-115 opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-85" />
                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                          <div>
                            <div className="type-label mb-1 text-[#B0B0B0]">
                              {proj.category}
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
                              {proj.title}
                            </h2>
                          </div>

                          <div className="px-4 py-2 bg-[#121215]/90 border border-[rgba(255,255,255,0.12)] backdrop-blur text-xs font-mono uppercase tracking-wider text-white flex items-center gap-2 rounded-[4px]">
                            <span>READ CASE STUDY</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-8 space-y-4">
                          <p className="text-xl sm:text-2xl text-[#FAFAFA] font-light leading-relaxed max-w-[65ch]">
                            {proj.subtitle}
                          </p>
                          <p className="text-base text-[#B0B0B0] font-normal leading-relaxed max-w-[65ch]">
                            {proj.overview || proj.summary}
                          </p>
                        </div>

                        <div className="md:col-span-4 border-l border-[#27272A]/50 pl-6 space-y-3 font-mono text-xs">
                          <div className="type-label">VERIFIED METRICS</div>
                          {proj.metrics.map((m) => (
                            <div key={m.label} className="flex items-baseline justify-between border-b border-[#27272A]/30 pb-2">
                              <span className="text-[#B0B0B0]">{m.label}</span>
                              <span className="text-[#FAFAFA] font-medium">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                }

                if (proj.id === 'operator-vision') {
                  // COMPOSITION 02: Horizontal Presentation (Vision & Spatial Dither)
                  return (
                    <article
                      key={proj.id}
                      className="border-b border-[#27272A]/50 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
                    >
                      <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center gap-3 text-xs font-mono text-[#9A9A9A]">
                          <span className="text-[#FAFAFA] font-medium">{projectNum} // HORIZONTAL PRESENTATION</span>
                          <span>&bull;</span>
                          <span className="text-[#B0B0B0]">{proj.category}</span>
                        </div>

                        <h2 
                          onClick={() => onOpenProject(proj)}
                          className="text-2xl sm:text-4xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] group-hover:text-white cursor-pointer transition-colors"
                        >
                          {proj.title}
                        </h2>

                        <p className="text-base text-[#B0B0B0] font-normal leading-relaxed max-w-[60ch]">
                          {proj.subtitle}
                        </p>

                        <div className="p-4 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                          <div className="type-label text-[#9A9A9A]">SPATIAL QUANTIZATION PRINCIPLE</div>
                          <p className="type-body-sm text-[#E8E8E8]">
                            87.5% payload reduction by substituting 24-bit RGB pixel representations with Floyd-Steinberg error diffusion rasters, preserving boundary gradients at 120 FPS.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                          {proj.tags.map((t) => (
                            <span key={t} className="px-2.5 py-1 bg-[#121215] border border-[rgba(255,255,255,0.06)] text-[#B0B0B0] rounded-[3px]">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 pt-2">
                          <button
                            onClick={() => onOpenProject(proj)}
                            className="px-4 py-2.5 bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-xs font-mono uppercase tracking-wider text-[#FAFAFA] rounded-[4px] flex items-center gap-2 cursor-pointer transition-colors"
                          >
                            <span>READ CASE STUDY</span>
                            <ArrowRight size={14} />
                          </button>
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-[#B0B0B0] hover:text-white rounded-[4px] transition-colors"
                              title="GitHub Repository"
                            >
                              <GithubIcon size={16} />
                            </a>
                          )}
                        </div>
                      </div>

                      <div 
                        onClick={() => onOpenProject(proj)}
                        className="lg:col-span-6 aspect-[16/10] bg-[#121215] border border-[rgba(255,255,255,0.08)] overflow-hidden rounded-[4px] cursor-pointer group/img relative"
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover grayscale contrast-125 group-hover/img:scale-[1.02] transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#09090B]/85 border border-[rgba(255,255,255,0.08)] rounded-[3px] text-[10px] font-mono text-emerald-400">
                          {proj.status}
                        </div>
                      </div>
                    </article>
                  );
                }

                if (proj.id === 'loan-risk-prediction') {
                  // COMPOSITION 03: Analytical & Interpretability Showcase (Loan Risk)
                  return (
                    <article
                      key={proj.id}
                      className="border-b border-[#27272A]/50 pb-20 md:pb-28 space-y-6 group"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-[#9A9A9A]">
                        <span className="text-[#FAFAFA] font-medium">{projectNum} // STATISTICAL ATTRIBUTION CASE</span>
                        <span>{proj.category} &bull; {proj.timeline}</span>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 space-y-4">
                          <h2
                            onClick={() => onOpenProject(proj)}
                            className="text-2xl sm:text-4xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] group-hover:text-white cursor-pointer transition-colors"
                          >
                            {proj.title}
                          </h2>
                          <p className="text-base text-[#B0B0B0] leading-relaxed">
                            {proj.overview || proj.subtitle}
                          </p>

                          <div className="flex flex-wrap gap-1.5 font-mono text-xs pt-2">
                            {proj.tags.map((t) => (
                              <span key={t} className="px-2.5 py-1 bg-[#121215] border border-[rgba(255,255,255,0.06)] text-[#B0B0B0] rounded-[3px]">
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="pt-4 flex items-center gap-4">
                            <button
                              onClick={() => onOpenProject(proj)}
                              className="px-4 py-2.5 bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-xs font-mono uppercase tracking-wider text-[#FAFAFA] rounded-[4px] flex items-center gap-2 cursor-pointer transition-colors"
                            >
                              <span>READ CASE STUDY</span>
                              <ArrowRight size={14} />
                            </button>
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-[#B0B0B0] hover:text-white rounded-[4px] transition-colors"
                              >
                                <GithubIcon size={16} />
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="lg:col-span-5 p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-4 font-mono text-xs">
                          <div className="type-label text-[#FAFAFA]">EMPIRICAL PERFORMANCE MATRIX</div>
                          {proj.metrics.map((m) => (
                            <div key={m.label} className="flex items-center justify-between border-b border-[#27272A]/40 pb-2">
                              <span className="text-[#B0B0B0]">{m.label}</span>
                              <span className="text-emerald-400 font-semibold">{m.value}</span>
                            </div>
                          ))}
                          <div className="pt-2 text-[11px] text-[#9A9A9A] leading-relaxed">
                            Includes automated fairness disparity validation to ensure equalized odds across demographic cohorts.
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                }

                // COMPOSITION 04 & 05: Asymmetric Technical Flow (Orchestrator & Distributed Vector Mesh)
                return (
                  <article
                    key={proj.id}
                    className="border-b border-[#27272A]/50 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
                  >
                    <div 
                      onClick={() => onOpenProject(proj)}
                      className="lg:col-span-5 aspect-[16/11] bg-[#121215] border border-[rgba(255,255,255,0.08)] overflow-hidden rounded-[4px] cursor-pointer group/img relative"
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover grayscale contrast-115 group-hover/img:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#09090B]/85 border border-[rgba(255,255,255,0.08)] rounded-[3px] text-[10px] font-mono text-[#9A9A9A]">
                        {proj.status}
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#9A9A9A]">
                        <span className="text-[#FAFAFA] font-medium">{projectNum}</span>
                        <span>//</span>
                        <span className="text-[#B0B0B0]">{proj.category}</span>
                        <span>&bull;</span>
                        <span>{proj.timeline}</span>
                      </div>

                      <h2 
                        onClick={() => onOpenProject(proj)}
                        className="text-2xl sm:text-4xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] group-hover:text-white cursor-pointer transition-colors"
                      >
                        {proj.title}
                      </h2>

                      <p className="text-base text-[#B0B0B0] font-normal leading-relaxed max-w-[60ch]">
                        {proj.overview || proj.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {proj.tags.map((t) => (
                          <span key={t} className="px-2.5 py-1 bg-[#121215] border border-[rgba(255,255,255,0.06)] text-[#B0B0B0] rounded-[3px]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <button
                          onClick={() => onOpenProject(proj)}
                          className="px-4 py-2.5 bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-xs font-mono uppercase tracking-wider text-[#FAFAFA] rounded-[4px] flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <span>READ CASE STUDY</span>
                          <ArrowRight size={14} />
                        </button>
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-[#B0B0B0] hover:text-white rounded-[4px] transition-colors"
                            title="GitHub Repository"
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
