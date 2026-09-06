import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, GitCommit, GitPullRequest, Terminal, Code2, Cpu, ShieldCheck, ArrowUpRight, Search } from 'lucide-react';
import { githubProfile } from '../data/github.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import TactileButton from '../components/ui/TactileButton.jsx';
import StatusIndicator from '../components/ui/StatusIndicator.jsx';
import { GithubIcon } from '../components/SocialIcons.jsx';

export default function GithubPage() {
  usePageMeta({
    title: 'Code & Open Source Systems — Shubham Sharma | IIT Jodhpur',
    description: 'Open source repositories, machine learning runtimes, computer vision kernels, and systems architecture by Shubham Sharma.',
    path: '/github'
  });

  const [filterLang, setFilterLang] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const languages = ['ALL', 'Python', 'C++', 'JavaScript / TypeScript', 'GLSL / Shader'];

  const filteredRepos = githubProfile.repositories.filter((repo) => {
    const matchesLang = filterLang === 'ALL' || repo.language === filterLang;
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLang && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="min-h-screen py-24 md:py-32 bg-[#09090B] text-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16 sm:space-y-24">

          {/* 01. Code Architecture Header */}
          <div className="space-y-6 border-b border-[#27272A]/50 pb-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] type-label text-[#9A9A9A]">
                <StatusIndicator status="online" size="sm" />
                <span className="tracking-wider uppercase">OPEN SOURCE // CODEBASE &amp; RUNTIMES</span>
              </div>

              <div className="flex items-center gap-3 type-label text-[#9A9A9A]">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[#FAFAFA] font-mono">branch: {githubProfile.activityStats.activeBranch}</span>
                </span>
                <span>&bull;</span>
                <span>{githubProfile.activityStats.runtimeTarget}</span>
              </div>
            </div>

            <h1 className="type-hero font-medium font-display uppercase tracking-tight text-[#FAFAFA] leading-[0.92]">
              OPEN SOURCE /<br />
              <span className="font-serif-editorial italic text-white font-normal lowercase mr-3">
                systems
              </span>
              &amp; CODE.
            </h1>

            <p className="type-body-lg text-[#E8E8E8] max-w-[65ch] font-normal leading-relaxed">
              Curated repositories, low-level execution runtimes, and computational prototypes. All implementations emphasize deterministic resource bounds, hardware efficiency, and mathematically transparent behavior.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={githubProfile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.12)] text-xs font-mono font-medium text-[#FAFAFA] hover:text-white transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-[#FAFAFA]" />
                <span>GITHUB / {githubProfile.username.toUpperCase()}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9A9A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="type-label text-[#9A9A9A] px-3 py-2 rounded-[4px] bg-[#09090B] border border-[rgba(255,255,255,0.06)]">
                {githubProfile.activityStats.codebaseIntegrity}
              </div>
            </div>
          </div>

          {/* 02. Language Distribution & Architectural Roles */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#27272A]/50 pb-4 gap-2">
              <div>
                <span className="type-label text-[#9A9A9A] tracking-widest uppercase">
                  [01 // STACK COMPOSITION]
                </span>
                <h2 className="type-h3 font-medium font-display uppercase tracking-tight text-[#FAFAFA] mt-1">
                  Language Breakdown &amp; Workload Mapping
                </h2>
              </div>
              <span className="type-label text-[#9A9A9A]">
                ENGINEERING ALLOCATION
              </span>
            </div>

            {/* Visual Proportional Progress Bar */}
            <div className="w-full h-3 rounded-[3px] bg-[#18181B] border border-[rgba(255,255,255,0.08)] flex overflow-hidden">
              {githubProfile.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color
                  }}
                  className="h-full relative group transition-all duration-300"
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Language Role Detail Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {githubProfile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-5 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-sm font-semibold text-[#FAFAFA] font-mono">{lang.name}</span>
                      </div>
                      <span className="type-label text-[#FAFAFA] font-mono font-medium">{lang.percentage}%</span>
                    </div>
                    <p className="type-body-sm text-[#B0B0B0] leading-relaxed pt-1">
                      {lang.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 03. Repository Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#27272A]/50 pb-6">
            <div className="p-1 rounded-[6px] bg-[#121215] border border-[rgba(255,255,255,0.06)] flex flex-wrap items-center gap-1">
              {languages.map((lang) => {
                const isSelected = filterLang === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setFilterLang(lang)}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-mono uppercase tracking-wider transition-all duration-150 cursor-pointer flex items-center gap-1.5 select-none ${
                      isSelected
                        ? 'bg-[#18181B] text-[#FAFAFA] font-medium border border-[rgba(255,255,255,0.12)]'
                        : 'text-[#9A9A9A] hover:text-[#FAFAFA] hover:bg-[#141418]'
                    }`}
                  >
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />}
                    <span>{lang}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-3.5 h-3.5 text-[#9A9A9A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search repository or topic..."
                className="w-full pl-9 pr-3.5 py-2 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#FAFAFA] placeholder-[#71717A] focus:outline-none focus:border-[#FAFAFA]/40 transition-colors"
              />
            </div>
          </div>

          {/* 04. Selected Repositories Index */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="type-label text-[#9A9A9A] uppercase tracking-widest">
                [02 // SELECTED REPOSITORIES &bull; {filteredRepos.length} SHOWN]
              </span>
              <span className="type-label text-[#9A9A9A]">
                OPEN SOURCE CODEBASE
              </span>
            </div>

            <div className="space-y-4">
              {filteredRepos.map((repo, idx) => {
                const repoIndex = `0${idx + 1}`.slice(-2);
                return (
                  <article
                    key={repo.id}
                    className="p-6 sm:p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] rounded-[4px] transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#27272A]/50 pb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#9A9A9A]">{repoIndex} //</span>
                          <h3 className="text-lg sm:text-xl font-mono font-semibold text-[#FAFAFA] group-hover:text-white transition-colors">
                            {repo.name}
                          </h3>
                          {repo.featured && (
                            <span className="px-2 py-0.5 rounded-[3px] bg-indigo-950/40 border border-indigo-700/40 text-[10px] font-mono uppercase tracking-wider text-indigo-300">
                              FEATURED RUNTIME
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 type-label text-[#9A9A9A]">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: repo.languageColor }}
                          />
                          <span className="text-[#B0B0B0] font-mono">{repo.language}</span>
                          <span>&bull;</span>
                          <span>Updated {repo.updatedAt}</span>
                        </div>
                      </div>

                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#09090B] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#FAFAFA] transition-colors self-start shrink-0"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#FAFAFA]" />
                        <span>VIEW REPO</span>
                        <ArrowUpRight className="w-3 h-3 text-[#9A9A9A]" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5 items-start">
                      <div className="lg:col-span-8 space-y-3">
                        <p className="type-body text-[#B0B0B0] leading-relaxed">
                          {repo.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {repo.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-0.5 rounded-[3px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] type-label text-[#9A9A9A]"
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-4 p-4 rounded-[4px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] space-y-1.5">
                        <div className="type-label text-[#9A9A9A] uppercase tracking-wider">
                          ARCHITECTURE SPECIFICATION:
                        </div>
                        <div className="text-xs font-mono text-[#FAFAFA] font-medium leading-relaxed">
                          {repo.architectureNote}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 04. Systems Engineering Principles */}
          <section className="space-y-6 pt-8 border-t border-[#27272A]/50">
            <div className="space-y-1">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                [03 // CODEBASE METHODOLOGY]
              </span>
              <h2 className="type-h3 font-medium font-display uppercase tracking-tight text-[#FAFAFA] mt-1">
                Engineering Constraints &amp; Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <div className="type-label text-[#9A9A9A] font-mono">01 // DETERMINISTIC MEMORY</div>
                <h4 className="text-sm font-semibold text-[#FAFAFA] uppercase">Zero Silent Leaks</h4>
                <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
                  Avoid unchecked buffer resizing and unpinned memory allocations during streaming inferences. Explicit RAII lifecycles ensure zero tensor leakage across long runtimes.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <div className="type-label text-[#9A9A9A] font-mono">02 // VERIFIABLE LATENCY</div>
                <h4 className="text-sm font-semibold text-[#FAFAFA] uppercase">Profiled Boundaries</h4>
                <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
                  Every pipeline is benchmarked with synthetic burst traffic. Percentile latencies (p50, p95, p99) are logged with hardware counters rather than wall-clock guesses.
                </p>
              </div>

              <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-2">
                <div className="type-label text-[#9A9A9A] font-mono">03 // TRANSPARENT CODE</div>
                <h4 className="text-sm font-semibold text-[#FAFAFA] uppercase">Reproducible Builds</h4>
                <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
                  Every repository includes explicit environment pin files, automated test vectors, and benchmark harnesses so anyone can clone, build, and verify results locally.
                </p>
              </div>
            </div>
          </section>

          {/* 05. Direct Callout to GitHub Profile */}
          <div className="p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="type-h3 font-medium font-display uppercase tracking-tight text-[#FAFAFA]">
                Inspect Full Source Code on GitHub
              </h3>
              <p className="type-body-sm text-[#B0B0B0]">
                All personal code, assignment research, and prototype repositories are hosted under <span className="text-[#FAFAFA] font-mono">@rosenkrvz</span>.
              </p>
            </div>

            <a
              href={githubProfile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#FAFAFA] hover:bg-white text-xs font-mono font-semibold text-[#09090B] transition-colors shrink-0 group"
            >
              <span>EXPLORE GITHUB REPOSITORIES</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#09090B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
