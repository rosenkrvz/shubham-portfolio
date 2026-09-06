import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, ExternalLink, SlidersHorizontal, Layers, CheckCircle2 } from 'lucide-react';
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
    title: 'Projects & Case Studies — Shubham Sharma',
    description: 'Archive of machine learning models, computer vision pipelines, and backend architectures built by Shubham Sharma at IIT Jodhpur.',
    path: '/projects'
  });

  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  // viewMode: false = "CASE STUDIES", true = "GRID VIEW"
  const [isGridView, setIsGridView] = useState(false);

  const categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'AI_ML', label: 'AI & ML' },
    { id: 'DATA', label: 'DATA & ANALYSIS' },
    { id: 'SYSTEMS', label: 'SYSTEMS & BACKEND' },
    { id: 'VISION', label: 'COMPUTER VISION' }
  ];

  const filteredProjects = projects.filter((proj) => {
    let matchesCategory = true;
    if (selectedCategory === 'AI_ML') {
      matchesCategory = proj.category.includes('Machine Learning') || proj.tags.some(t => ['PyTorch', 'TensorRT', 'XGBoost'].includes(t));
    } else if (selectedCategory === 'DATA') {
      matchesCategory = proj.id === 'loan-risk-prediction' || proj.tags.some(t => ['Pandas', 'NumPy', 'SHAP', 'Scikit-Learn'].includes(t));
    } else if (selectedCategory === 'SYSTEMS') {
      matchesCategory = proj.category.includes('Backend') || proj.category.includes('Systems');
    } else if (selectedCategory === 'VISION') {
      matchesCategory = proj.category.includes('Vision');
    }

    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const isDefaultView = !isGridView && selectedCategory === 'ALL' && !searchQuery.trim();

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
            <div className="inline-flex items-center gap-2 text-xs text-[#818CF8] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#E10600] ring-2 ring-[#E10600]/30 animate-pulse" />
              <span>PROJECT ARCHIVE // TECHNICAL CASE STUDIES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
              Engineered <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lowercase text-[#C7D2FE] mr-3">
                systems &amp;
              </span>
              Architectures
            </h1>

            <p className="text-base sm:text-lg text-[#9E9EA8] max-w-2xl font-light leading-relaxed">
              In-depth technical case studies detailing edge neural quantization runtimes, 1-bit spatial error diffusion, and distributed event-driven backends.
            </p>
          </div>

          {/* Filter, View Switcher & Search Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-[#1C1C22] pb-8">
            
            {/* Technical Category Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-mono transition-all cursor-pointer relative ${
                    selectedCategory === cat.id
                      ? 'bg-[#181824] border border-[#6366F1] text-white shadow-sm font-semibold'
                      : 'bg-[#111114] text-[#9E9EA8] hover:text-[#F4F4F0] border border-[#272730]'
                  }`}
                >
                  {selectedCategory === cat.id && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E10600] mr-1.5 align-middle" />
                  )}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Right Controls: Segmented Switch & Search */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Component A: Segmented Industrial Switch */}
              <div className="flex items-center gap-2">
                <SegmentedIndustrialSwitch
                  checked={isGridView}
                  onChange={setIsGridView}
                  leftLabel="CASE STUDIES"
                  rightLabel="GRID VIEW"
                  ariaLabel="Toggle between case studies and grid layout"
                />
              </div>

              {/* Search Box */}
              <div className="relative min-w-[240px] flex-1 sm:flex-initial">
                <Search className="w-3.5 h-3.5 text-[#656570] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by kernel, model, or stack..."
                  className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#111114] border border-[#272730] text-xs font-mono text-[#F4F4F2] placeholder-[#656570] focus:outline-none focus:border-[#6366F1]"
                />
              </div>

            </div>

          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 px-4 bg-[#111114] border border-[#1C1C22] rounded-sm space-y-3 font-mono">
              <h3 className="text-sm font-semibold text-[#F4F4F2]">No matching systems found</h3>
              <p className="text-xs text-[#656570] max-w-sm mx-auto">
                No projects matched "{searchQuery}". Try selecting "ALL" or resetting query parameters.
              </p>
              <button
                onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); }}
                className="px-4 py-2 bg-[#F4F4F0] text-[#08080A] text-xs font-semibold rounded-sm cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* View Mode 1: Comprehensive In-Depth Case Studies */}
          {isDefaultView ? (
            <div className="space-y-6">
              <ProjectSentinelCase project={pSentinel} onOpenModal={onOpenProject} />
              <ProjectDitherCase project={pDither} onOpenModal={onOpenProject} />
              <ProjectOrchestratorCase project={pOrchestrator} onOpenModal={onOpenProject} />
              <ProjectRiskCase project={pRisk} onOpenModal={onOpenProject} />
            </div>
          ) : (
            /* View Mode 2: High-Density Technical Grid Cards */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-6 bg-[#111114] border border-[#272730] rounded-sm flex flex-col justify-between space-y-6 hover:border-[#6366F1] transition-all group hover:-translate-y-0.5 duration-300"
                >
                  <div className="space-y-4">
                    {/* Media Frame with subtle zoom on hover */}
                    <div className="aspect-[16/9] bg-[#08080A] rounded-sm overflow-hidden border border-[#1C1C22] relative">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#08080A]/85 backdrop-blur-md border border-[#272730] rounded text-[10px] font-mono text-[#818CF8] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                        <span>{proj.status}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#818CF8]">{proj.category}</span>
                      <span className="text-[#656570]">{proj.timeline}</span>
                    </div>

                    <h3 className="text-xl font-display font-semibold uppercase text-[#F4F4F0] group-hover:text-white transition-colors">
                      {proj.title}
                    </h3>
                    
                    <p className="text-sm text-[#9E9EA8] font-light leading-relaxed">
                      {proj.summary}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#1C1C22] font-mono">
                      {proj.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-xs text-[#F4F4F2] font-semibold">{m.value}</div>
                          <div className="text-[10px] text-[#656570]">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-[#16161C] border border-[#242430] text-[11px] font-mono text-[#9E9EA8] rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#1C1C24]">
                    <button
                      onClick={() => onOpenProject(proj)}
                      className="text-xs font-mono uppercase text-[#F4F4F2] hover:text-[#818CF8] flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight size={14} />
                    </button>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#16161B] hover:bg-[#22222B] border border-[#272730] text-[#9E9EA8] hover:text-white rounded transition-colors"
                        title="View GitHub Repository"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
