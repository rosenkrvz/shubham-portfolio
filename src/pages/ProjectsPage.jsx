import React, { useState } from 'react';
import { ArrowRight, Search, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons.jsx';
import { projects } from '../data/projects.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';

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

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Machine Learning & Systems', 'Computer Vision', 'Backend & Systems'];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const isDefaultView = selectedCategory === 'All' && !searchQuery.trim();

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
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
              <span>PROJECT ARCHIVE // CASE STUDIES</span>
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

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#1C1C22] pb-6">
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-mono transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#F4F4F0] text-[#08080A] font-semibold shadow-sm'
                      : 'bg-[#111114] text-[#9E9EA8] hover:text-[#F4F4F0] border border-[#272730]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[260px]">
              <Search className="w-3.5 h-3.5 text-[#656570] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by kernel, algorithm, or stack..."
                className="w-full pl-9 pr-3 py-2 rounded-sm bg-[#111114] border border-[#272730] text-xs font-mono text-[#F4F4F2] placeholder-[#656570] focus:outline-none focus:border-[#6366F1]"
              />
            </div>

          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 px-4 bg-[#111114] border border-[#1C1C22] rounded-sm space-y-3 font-mono">
              <h3 className="text-sm font-semibold text-[#F4F4F2]">No matching projects found</h3>
              <p className="text-xs text-[#656570] max-w-sm mx-auto">
                No projects matched "{searchQuery}". Try selecting "All" or clearing the search query.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-4 py-2 bg-[#F4F4F0] text-[#08080A] text-xs font-semibold rounded-sm cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* If default view, render bespoke authored cases */}
          {isDefaultView ? (
            <div className="space-y-4">
              <ProjectSentinelCase project={pSentinel} onOpenModal={onOpenProject} />
              <ProjectDitherCase project={pDither} onOpenModal={onOpenProject} />
              <ProjectOrchestratorCase project={pOrchestrator} onOpenModal={onOpenProject} />
              <ProjectRiskCase project={pRisk} onOpenModal={onOpenProject} />
            </div>
          ) : (
            /* Filtered View: High-contrast technical cards */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-6 bg-[#111114] border border-[#272730] rounded-sm flex flex-col justify-between space-y-6 hover:border-[#6366F1] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="aspect-[16/9] bg-[#08080A] rounded-sm overflow-hidden border border-[#1C1C22]">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                    </div>

                    <div className="text-xs font-mono text-[#818CF8]">{proj.category}</div>
                    <h3 className="text-xl font-display font-semibold uppercase text-[#F4F4F0]">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#9E9EA8] font-light leading-relaxed">
                      {proj.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#1C1C22] font-mono">
                      {proj.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-xs text-[#F4F4F2] font-semibold">{m.value}</div>
                          <div className="text-[10px] text-[#656570]">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => onOpenProject(proj)}
                      className="text-xs font-mono uppercase text-[#F4F4F2] hover:text-[#818CF8] flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </button>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#9E9EA8] hover:text-white"
                      >
                        <ExternalLink size={16} />
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
