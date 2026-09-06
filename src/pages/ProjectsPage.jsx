import React, { useState } from 'react';
import { ArrowRight, Search, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons.jsx';
import { projects } from '../data/projects.js';
import { usePageMeta } from '../hooks/usePageMeta';

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

  return (
    <div className="min-h-screen py-14 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#1E1E23] pb-10">
          <div className="inline-flex items-center gap-2 text-xs text-[#8E8D96]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
            <span>Case Studies &amp; Systems</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-semibold tracking-tight text-[#F4F4F2]">
            Selected Projects
          </h1>

          <p className="text-sm sm:text-base text-[#8E8D96] max-w-2xl leading-relaxed">
            Case studies detailing machine learning models, computer vision pipelines, and distributed backends. Each project answers: what was built, why it matters, how it functions, and the measured outcome.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#4338CA] text-white shadow-sm'
                    : 'bg-[#141417] text-[#8E8D96] hover:text-[#F4F4F2] border border-[#202026]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-[#8E8D96] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, tool, or stack..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#141417] border border-[#202026] text-xs text-[#F4F4F2] placeholder-[#65656E] focus:outline-none focus:border-[#4338CA]"
            />
          </div>

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 px-4 rounded-2xl bg-[#121215] border border-[#1E1E24] space-y-3">
            <h3 className="text-sm font-semibold text-[#F4F4F2]">No matching projects found</h3>
            <p className="text-xs text-[#8E8D96] max-w-sm mx-auto">
              No projects matched "{searchQuery}". Try selecting "All" or resetting your query.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg bg-[#4338CA] text-white text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Varied Project Presentations */}
        {isDefaultView ? (
          <div className="space-y-12">
            
            {/* 1. Large Hero Project (Sentinel NPU) */}
            {projects[0] && (
              <div className="group rounded-2xl bg-[#121215] border border-[#1E1E24] hover:border-[#30303A] transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div 
                    onClick={() => onOpenProject(projects[0])}
                    className="lg:col-span-7 bg-black aspect-[16/10] lg:aspect-auto overflow-hidden cursor-pointer relative"
                  >
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded bg-[#0C0C0E]/80 backdrop-blur border border-white/10 text-[11px] text-[#F4F4F2] font-medium">
                        Lead Case Study
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs text-[#8E8D96]">
                        <span>{projects[0].category}</span>
                        <span>•</span>
                        <span>{projects[0].timeline}</span>
                      </div>

                      <h2 
                        onClick={() => onOpenProject(projects[0])}
                        className="text-2xl sm:text-3xl font-display font-semibold text-[#F4F4F2] group-hover:text-white cursor-pointer transition-colors"
                      >
                        {projects[0].title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#8E8D96] leading-relaxed">
                        {projects[0].summary}
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#1E1E24]">
                        {projects[0].metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-sm font-semibold text-[#F4F4F2] font-mono">{m.value}</div>
                            <div className="text-[10px] text-[#65656E]">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {projects[0].tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-[#1A1A20] text-[11px] text-[#8E8D96]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                      <button
                        onClick={() => onOpenProject(projects[0])}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4F4F2] hover:bg-white text-[#0C0C0E] text-xs font-semibold tracking-wide transition-colors"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      {projects[0].githubUrl && (
                        <a
                          href={projects[0].githubUrl}
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

            {/* 2. Split Screen Showcase (Operator Vision & Operator System) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(1, 3).map((proj) => (
                <div
                  key={proj.id}
                  className="group rounded-2xl bg-[#121215] border border-[#1E1E24] hover:border-[#30303A] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-5">
                    <div 
                      onClick={() => onOpenProject(proj)}
                      className="aspect-[16/9] rounded-xl bg-black overflow-hidden cursor-pointer"
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs text-[#8E8D96]">{proj.category}</div>
                      <h3 
                        onClick={() => onOpenProject(proj)}
                        className="text-xl font-display font-semibold text-[#F4F4F2] group-hover:text-white cursor-pointer transition-colors"
                      >
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#8E8D96] leading-relaxed">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1E1E24]">
                      {proj.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-xs font-semibold text-[#F4F4F2] font-mono">{m.value}</div>
                          <div className="text-[10px] text-[#65656E]">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => onOpenProject(proj)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F4F2] hover:text-[#6366F1] transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex gap-1">
                      {proj.tags.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] text-[10px] text-[#65656E]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Horizontal Studies for Tabular & Index Models */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-wider text-[#65656E] font-medium">
                Algorithm &amp; Systems Prototypes
              </h3>
              <div className="divide-y divide-[#1E1E24] border-y border-[#1E1E24]">
                {projects.slice(3).map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onOpenProject(proj)}
                    className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group cursor-pointer hover:bg-[#121215] px-4 -mx-4 rounded-xl transition-colors"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-2 text-xs text-[#8E8D96]">
                        <span>{proj.category}</span>
                        <span>•</span>
                        <span>{proj.timeline}</span>
                      </div>
                      <h4 className="text-base font-semibold text-[#F4F4F2] group-hover:text-white transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-[#8E8D96] leading-relaxed">
                        {proj.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] text-[10px] text-[#65656E]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 self-start sm:self-center shrink-0">
                      <div className="text-right hidden md:block">
                        <div className="text-xs font-mono font-semibold text-[#F4F4F2]">{proj.metrics[0]?.value}</div>
                        <div className="text-[10px] text-[#65656E]">{proj.metrics[0]?.label}</div>
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#F4F4F2] group-hover:text-[#6366F1] transition-colors">
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Filtered View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-2xl bg-[#121215] border border-[#1E1E24] hover:border-[#30303A] transition-all p-6 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#8E8D96]">
                    <span>{proj.category}</span>
                    <span>{proj.timeline}</span>
                  </div>

                  <h3 
                    onClick={() => onOpenProject(proj)}
                    className="text-lg font-semibold text-[#F4F4F2] group-hover:text-white cursor-pointer transition-colors"
                  >
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#8E8D96] leading-relaxed">
                    {proj.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1E1E24]">
                    {proj.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xs font-semibold text-[#F4F4F2] font-mono">{m.value}</div>
                        <div className="text-[10px] text-[#65656E]">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] text-[10px] text-[#65656E]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F4F2] hover:text-[#6366F1] transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
