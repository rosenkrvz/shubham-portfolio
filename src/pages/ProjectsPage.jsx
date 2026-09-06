import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, ExternalLink, SlidersHorizontal, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons.jsx';
import { projects } from '../data/projects.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import SegmentedIndustrialSwitch from '../components/ui/SegmentedIndustrialSwitch.jsx';
import ProjectExpandCard from '../components/projects/ProjectExpandCard.jsx';
import { UiverseRadialButton } from '../components/ui/UiverseControls.jsx';

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
  const [hoveredProject, setHoveredProject] = useState(null);
  // viewMode: false = "SPOTLIGHT CARDS", true = "DEEP CASE STUDIES"
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
      <div className="relative min-h-screen py-24 md:py-32 bg-[#0A0D12] text-[#F8FAFC] bg-crosshair-pattern">
        
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

        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16 sm:space-y-20">
          
          {/* Editorial Header */}
          <div className="space-y-5 border-b border-[rgba(255,255,255,0.08)] pb-12">
            <div className="type-label flex items-center gap-2 text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
              <span>PROJECT ARCHIVE // SYSTEMS &bull; MODELS &bull; EXPERIMENTS</span>
            </div>

            <h1 className="type-h1 text-[#F8FAFC]">
              PROJECTS /<br />
              EXPERIMENTS /<br />
              SYSTEMS.
            </h1>

            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-[65ch] font-normal leading-relaxed">
              A collection of systems, models, analyses and experiments built while exploring the intersection of software, data and intelligent systems.
            </p>
          </div>

          {/* Filter & View Switcher Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-[rgba(255,255,255,0.08)] pb-8">
            
            {/* Category Filter using UiverseRadialButton */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <UiverseRadialButton
                  key={cat.id}
                  selected={selectedCategory === cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </UiverseRadialButton>
              ))}
            </div>

            {/* Right Controls: Segmented Switch & Minimal Search */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <SegmentedIndustrialSwitch
                  checked={isCaseStudiesView}
                  onChange={setIsCaseStudiesView}
                  leftLabel="SPOTLIGHT"
                  rightLabel="CASE STUDIES"
                  ariaLabel="Toggle between card spotlight and detailed case studies"
                />
              </div>

              {/* Minimal Search Box */}
              <div className="relative min-w-[220px] flex-1 sm:flex-initial">
                <Search className="w-3.5 h-3.5 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword or model..."
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-lg bg-[#101318] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#F8FAFC]/40 transition-colors"
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

          {/* VIEW MODE 1: 3D Expand Cards Spotlight Grid */}
          {!isCaseStudiesView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 spotlight-group">
              {filteredProjects.map((proj, index) => (
                <ProjectExpandCard
                  key={proj.id}
                  project={proj}
                  index={index}
                  onOpenDrawer={onOpenProject}
                  onHoverChange={(hovered) => setHoveredProject(hovered ? proj.id : null)}
                />
              ))}
            </div>
          ) : (
            /* VIEW MODE 2: Detailed Deep-Dive Case Studies */
            <div className="space-y-16">
              <ProjectSentinelCase project={pSentinel} onOpenModal={onOpenProject} />
              <ProjectDitherCase project={pDither} onOpenModal={onOpenProject} />
              <ProjectOrchestratorCase project={pOrchestrator} onOpenModal={onOpenProject} />
              <ProjectRiskCase project={pRisk} onOpenModal={onOpenProject} />
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}
