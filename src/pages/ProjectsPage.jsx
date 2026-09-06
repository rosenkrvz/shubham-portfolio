import React, { useState } from 'react';
import { ArrowUpRight, Search, Filter, Cpu, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons.jsx';
import { projects } from '../data/projects.js';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ProjectsPage({ onOpenProject }) {
  usePageMeta({
    title: 'Engineering Systems & Architecture Catalog',
    description: 'Archive of production machine learning systems, zero-trust edge silicon attestation nodes, and high-throughput backends architected by Shubham Sharma.',
    path: '/projects'
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Edge AI & Silicon', 'Computer Vision', 'Applied ML & Systems', 'Distributed Backend'];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#1F1F24] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3E2CF0] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E2CF0] animate-pulse"></span>
            <span>Engineering Archives // Systems &amp; Deployments</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F0F0EE]">
            Architected Systems
          </h1>
          <p className="text-sm sm:text-base text-[#85858B] max-w-2xl leading-relaxed">
            Production-grade machine learning pipelines, hardware-level verification nodes, and high-throughput distributed backends designed for deterministic execution.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#3E2CF0] text-white font-semibold shadow-sm shadow-[#3E2CF0]/30'
                    : 'bg-[#111113] text-[#85858B] hover:text-[#F0F0EE] border border-[#1F1F24]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#85858B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword or stack..."
              className="w-full pl-9 pr-4 py-1.5 rounded bg-[#111113] border border-[#1F1F24] text-xs font-mono text-[#F0F0EE] placeholder-[#52525B] focus:outline-none focus:border-[#3E2CF0]"
            />
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4 rounded-lg bg-[#111113] border border-[#1F1F24] space-y-3">
            <Terminal className="w-8 h-8 text-[#85858B] mx-auto" />
            <h3 className="font-mono text-sm text-[#F0F0EE]">NO MATCHING SYSTEMS LOCATED</h3>
            <p className="text-xs text-[#85858B] max-w-md mx-auto">
              No systems matched your query "{searchQuery}". Clear your search or select "All" to inspect the complete fleet.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded bg-[#3E2CF0] hover:bg-[#5344F5] text-white text-xs font-mono transition-colors"
            >
              RESET FILTERS
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg bg-[#111113] border border-[#1F1F24] hover:border-[#3E2CF0]/70 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  onClick={() => onOpenProject(project)}
                  className="relative aspect-[16/10] bg-black overflow-hidden cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={`System architecture snapshot for ${project.title}`}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-black/80 border border-white/10 text-[#3E2CF0]">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 p-1 rounded bg-black/80 border border-white/20 text-white group-hover:bg-[#3E2CF0] group-hover:border-[#3E2CF0] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#85858B]">
                    <span>{project.category}</span>
                    <span className="text-[#52525B]">ID: {project.id}</span>
                  </div>

                  <h3
                    onClick={() => onOpenProject(project)}
                    className="text-base font-bold text-[#F0F0EE] group-hover:text-white transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#85858B] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Metrics preview */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded bg-[#161619] border border-[#1F1F24] text-[11px] font-mono">
                      {Object.entries(project.metrics).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="truncate">
                          <span className="text-[#52525B] block text-[9px] uppercase">{k}</span>
                          <span className="text-[#F0F0EE] font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#161619] border border-[#232328] text-[10px] font-mono text-[#A1A1AA]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#52525B]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="px-5 py-3 border-t border-[#1F1F24] bg-[#0E0E10] flex items-center justify-between text-xs">
                <button
                  onClick={() => onOpenProject(project)}
                  className="text-xs font-mono text-[#3E2CF0] hover:underline flex items-center gap-1"
                >
                  <span>Open Dossier</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-3 text-[#85858B]">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      title="Launch Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
