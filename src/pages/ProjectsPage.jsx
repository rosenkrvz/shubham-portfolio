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
    { id: 'SOFTWARE', label: 'SOFTWARE' },
    { id: 'WEB', label: 'WEB' },
    { id: 'EXPERIMENTS', label: 'EXPERIMENTS' }
  ];

  const filteredProjects = projects.filter((proj) => {
    let matchesCategory = true;
    if (selectedCategory === 'AI') {
      matchesCategory = proj.category.includes('Machine Learning') || proj.tags.some(t => ['PyTorch', 'TensorRT', 'Edge AI'].includes(t));
    } else if (selectedCategory === 'DATA') {
      matchesCategory = proj.id === 'loan-risk-prediction' || proj.tags.some(t => ['Pandas', 'NumPy', 'SHAP', 'Scikit-Learn'].includes(t));
    } else if (selectedCategory === 'SOFTWARE') {
      matchesCategory = proj.category.includes('Backend') || proj.category.includes('Systems');
    } else if (selectedCategory === 'WEB') {
      matchesCategory = proj.tags.some(t => ['FastAPI', 'Docker', 'AsyncIO'].includes(t));
    } else if (selectedCategory === 'EXPERIMENTS') {
      matchesCategory = proj.category.includes('Vision') || proj.id === 'distributed-vector-mesh';
    }

    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const pSentinel = projects.find((p) => p.id === 'sentinel-npu') || projects[0];
  const pDither = projects.find((p) => p.id === 'operator-vision') || projects[1];
  const pOrchestrator = projects.find((p) => p.id === 'surveillance-operator') || projects[2];
  const pRisk = projects.find((p) => p.id === 'loan-risk-prediction') || projects[3];

  return (
    <PageTransition>
      <div className="min-h-screen py-14 sm:py-20 lg:py-24 bg-[#08080A] text-[#F4F4F0]">
        <div className="max-w-7xl mx-auto px-6 space-y-12 sm:space-y-16">
          
          {/* Editorial Header */}
          <div className="space-y-4 border-b border-[#1C1C22] pb-10">
            <div className="inline-flex items-center gap-2 text-xs text-[#818CF8] font-mono uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30 animate-pulse" />
              <span>PROJECT ARCHIVE // INDEX</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
              WORK
            </h1>

            <p className="text-lg sm:text-2xl text-[#9E9EA8] max-w-2xl font-light leading-relaxed">
              Selected projects, experiments and systems I've built.
            </p>
          </div>

          {/* Filter & View Switcher Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-[#1C1C22] pb-8">
            
            {/* Technical Category Buttons — Recessed Tactile Segment */}
            <div className="p-1 rounded-[6px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] shadow-[inset_0_2px_5px_rgba(0,0,0,0.85)] flex flex-wrap items-center gap-1">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 select-none ${
                      isSelected
                        ? 'bg-[#18181C] text-[#F2F2F2] font-semibold border border-[rgba(255,255,255,0.1)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_6px_rgba(0,0,0,0.5)]'
                        : 'text-[#888888] hover:text-[#F2F2F2] hover:bg-[#121214]'
                    }`}
                  >
                    <span 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isSelected 
                          ? 'bg-[#FFFFFF] shadow-[0_0_6px_2px_rgba(225,6,0,0.95)]' 
                          : 'bg-[#2A0808]'
                      }`} 
                    />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Controls: Segmented Industrial Switch & Recessed Search */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Segmented Industrial Switch */}
              <div className="flex items-center gap-2">
                <SegmentedIndustrialSwitch
                  checked={isCaseStudiesView}
                  onChange={setIsCaseStudiesView}
                  leftLabel="ARCHIVE"
                  rightLabel="CASE STUDIES"
                  ariaLabel="Toggle between archive and detailed case studies"
                />
              </div>

              {/* Recessed Hardware Search Box */}
              <div className="relative min-w-[220px] flex-1 sm:flex-initial">
                <Search className="w-3.5 h-3.5 text-[#666666] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword..."
                  className="w-full pl-9 pr-3.5 py-2 rounded-[5px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] shadow-[inset_0_2px_5px_rgba(0,0,0,0.85)] text-xs font-mono text-[#F2F2F2] placeholder-[#555555] focus:outline-none focus:border-[#E10600]/60 transition-colors"
                />
              </div>

            </div>

          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 px-4 bg-[#111114] border border-[#1C1C22] rounded-sm space-y-3 font-mono">
              <h3 className="text-sm font-semibold text-[#F4F4F2]">No matching systems found</h3>
              <p className="text-xs text-[#656570] max-w-sm mx-auto">
                No projects matched "{searchQuery}". Try selecting "ALL" or resetting your search query.
              </p>
              <button
                onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                className="px-4 py-2 bg-[#F4F4F0] text-[#08080A] text-xs font-semibold rounded-sm cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* VIEW MODE 1: Detailed Deep-Dive Case Studies */}
          {isCaseStudiesView ? (
            <div className="space-y-12">
              <ProjectSentinelCase project={pSentinel} onOpenModal={onOpenProject} />
              <ProjectDitherCase project={pDither} onOpenModal={onOpenProject} />
              <ProjectOrchestratorCase project={pOrchestrator} onOpenModal={onOpenProject} />
              <ProjectRiskCase project={pRisk} onOpenModal={onOpenProject} />
            </div>
          ) : (
            /* VIEW MODE 2: Editorial Alternating Archive */
            <div className="space-y-16 sm:space-y-24">
              {filteredProjects.map((proj, index) => {
                const projectNum = `0${index + 1}`.slice(-2);
                const isEven = index % 2 === 0;
                const isBanner = index === 0;

                // Alternate composition styles:
                if (isBanner) {
                  // COMPOSITION 01: Huge visual banner + oversized number + thesis
                  return (
                    <article
                      key={proj.id}
                      className="border-b border-[#1C1C22] pb-16 space-y-8 group"
                    >
                      <div className="flex items-baseline justify-between border-b border-[#1C1C22] pb-3 text-xs font-mono text-[#656570]">
                        <span className="text-[#818CF8] font-bold">{projectNum} // FEATURED SYSTEM</span>
                        <span>{proj.timeline} &bull; {proj.category}</span>
                      </div>

                      {/* Huge Project Visual */}
                      <div
                        onClick={() => onOpenProject(proj)}
                        className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] bg-[#111114] border border-[#1F1F28] overflow-hidden cursor-pointer group rounded-sm"
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover grayscale contrast-125 opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                          <div>
                            <div className="text-xs font-mono text-[#818CF8] uppercase tracking-wider mb-1">
                              {proj.category}
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] group-hover:text-white transition-colors">
                              {proj.title}
                            </h2>
                          </div>

                          <div className="px-4 py-2 bg-[#08080A]/90 border border-[#272730] backdrop-blur text-xs font-mono text-white flex items-center gap-2">
                            <span>Inspect Case Study</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-8 space-y-3">
                          <p className="text-lg sm:text-xl text-[#F4F4F2] font-light leading-relaxed">
                            {proj.subtitle}
                          </p>
                          <p className="text-sm text-[#9E9EA8] font-light leading-relaxed">
                            {proj.summary}
                          </p>
                        </div>

                        <div className="md:col-span-4 border-l border-[#1C1C22] pl-6 space-y-3 font-mono text-xs">
                          <div className="text-[#656570] uppercase">VERIFIED METRICS</div>
                          {proj.metrics.map((m) => (
                            <div key={m.label} className="flex items-baseline justify-between">
                              <span className="text-[#9E9EA8]">{m.label}</span>
                              <span className="text-[#F4F4F2] font-semibold">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                }

                if (isEven) {
                  // COMPOSITION 02: Split screen (Title & specs on left, visual on right)
                  return (
                    <article
                      key={proj.id}
                      className="border-b border-[#1C1C22] pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
                    >
                      <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center gap-3 text-xs font-mono text-[#656570]">
                          <span className="text-[#818CF8] font-bold">{projectNum}</span>
                          <span>//</span>
                          <span className="text-[#9E9EA8]">{proj.category}</span>
                          <span>&bull;</span>
                          <span>{proj.timeline}</span>
                        </div>

                        <h2 
                          onClick={() => onOpenProject(proj)}
                          className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] group-hover:text-white cursor-pointer transition-colors"
                        >
                          {proj.title}
                        </h2>

                        <p className="text-base text-[#9E9EA8] font-light leading-relaxed">
                          {proj.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                          {proj.tags.map((t) => (
                            <span key={t} className="px-2 py-0.5 bg-[#111114] border border-[#1C1C24] text-[#818CF8] rounded-sm">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 pt-2">
                          <button
                            onClick={() => onOpenProject(proj)}
                            className="px-5 py-2.5 bg-[#14141A] hover:bg-[#1E1E28] border border-[#272734] text-xs font-mono uppercase tracking-wider text-[#F4F4F2] rounded-sm flex items-center gap-2 cursor-pointer transition-colors"
                          >
                            <span>Read Case Study</span>
                            <ArrowRight size={14} />
                          </button>
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 bg-[#111114] hover:bg-[#1C1C24] border border-[#272730] text-[#9E9EA8] hover:text-white rounded-sm transition-colors"
                              title="GitHub Repository"
                            >
                              <GithubIcon size={16} />
                            </a>
                          )}
                        </div>
                      </div>

                      <div 
                        onClick={() => onOpenProject(proj)}
                        className="lg:col-span-6 aspect-[16/10] bg-[#111114] border border-[#1F1F28] overflow-hidden rounded-sm cursor-pointer group/img relative"
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover grayscale contrast-125 group-hover/img:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#08080A]/85 border border-[#272730] rounded text-[10px] font-mono text-emerald-400">
                          {proj.status}
                        </div>
                      </div>
                    </article>
                  );
                }

                // COMPOSITION 03: Split screen (Visual on left, title & specs on right)
                return (
                  <article
                    key={proj.id}
                    className="border-b border-[#1C1C22] pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
                  >
                    <div 
                      onClick={() => onOpenProject(proj)}
                      className="lg:col-span-6 order-2 lg:order-1 aspect-[16/10] bg-[#111114] border border-[#1F1F28] overflow-hidden rounded-sm cursor-pointer group/img relative"
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover/img:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#08080A]/85 border border-[#272730] rounded text-[10px] font-mono text-[#818CF8]">
                        {proj.status}
                      </div>
                    </div>

                    <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#656570]">
                        <span className="text-[#818CF8] font-bold">{projectNum}</span>
                        <span>//</span>
                        <span className="text-[#9E9EA8]">{proj.category}</span>
                        <span>&bull;</span>
                        <span>{proj.timeline}</span>
                      </div>

                      <h2 
                        onClick={() => onOpenProject(proj)}
                        className="text-2xl sm:text-4xl font-bold font-display uppercase tracking-tight text-[#F4F4F0] group-hover:text-white cursor-pointer transition-colors"
                      >
                        {proj.title}
                      </h2>

                      <p className="text-base text-[#9E9EA8] font-light leading-relaxed">
                        {proj.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {proj.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-[#111114] border border-[#1C1C24] text-[#818CF8] rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <button
                          onClick={() => onOpenProject(proj)}
                          className="px-5 py-2.5 bg-[#14141A] hover:bg-[#1E1E28] border border-[#272734] text-xs font-mono uppercase tracking-wider text-[#F4F4F2] rounded-sm flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight size={14} />
                        </button>
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-[#111114] hover:bg-[#1C1C24] border border-[#272730] text-[#9E9EA8] hover:text-white rounded-sm transition-colors"
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
