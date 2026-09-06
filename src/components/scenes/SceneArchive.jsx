import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects.js';
import { sound } from '../../lib/sound.js';

export default function SceneArchive({ onOpenCaseStudy, onHoverCursor }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'MACHINE LEARNING', 'FULL-STACK SYSTEMS', 'ALGORITHMS & SYSTEMS', 'CREATIVE DEVELOPMENT'];

  const filteredProjects = filter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="archive" className="py-24" aria-label="Scene 06: Work Archive">
      <div className="site-container">
        <div className="scene-marker">
          <span className="scene-label">06 // WORK ARCHIVE &amp; INDEX</span>
          <span className="scene-num">CHRONOLOGICAL RECORD</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="meta-code text-[#00f0ff] mb-2 block font-bold">
              INDEXED RECORD // 2025 — 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Project Archive
            </h2>
          </div>

          {/* Fluid Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setFilter(cat);
                }}
                className={`font-mono text-xs px-3 py-1.5 border transition-all ${
                  filter === cat
                    ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10 font-bold'
                    : 'border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Structured Archive Table */}
        <div className="overflow-x-auto">
          <table className="work-archive-table">
            <thead>
              <tr className="border-b border-white/15 text-left font-mono text-xs text-zinc-500">
                <th className="py-3 px-2">INDEX</th>
                <th className="py-3 px-4">PROJECT TITLE</th>
                <th className="py-3 px-4 hidden sm:table-cell">DOMAIN</th>
                <th className="py-3 px-4 hidden md:table-cell">CORE TECHNOLOGIES</th>
                <th className="py-3 px-4 text-right">YEAR</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((proj) => (
                <tr
                  key={proj.id}
                  className="archive-row"
                  onClick={() => {
                    sound.playClick();
                    onOpenCaseStudy(proj.id);
                  }}
                  onMouseEnter={() => {
                    sound.playHover();
                    onHoverCursor('OPEN');
                  }}
                  onMouseLeave={() => onHoverCursor('')}
                >
                  <td className="archive-cell archive-num">{proj.index}</td>
                  <td className="archive-cell archive-title">
                    <div className="flex items-center gap-2">
                      <span>{proj.title}</span>
                      <ArrowUpRight size={13} className="text-[#00f0ff] opacity-60" />
                    </div>
                  </td>
                  <td className="archive-cell archive-tag hidden sm:table-cell">{proj.category}</td>
                  <td className="archive-cell archive-tech hidden md:table-cell">
                    {proj.technologies.slice(0, 4).join(' · ')}
                  </td>
                  <td className="archive-cell archive-year">{proj.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
