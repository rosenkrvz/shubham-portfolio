import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Compass, Cpu, Layers } from 'lucide-react';
import { PROFILE } from '../../data/profile.js';
import { sound } from '../../lib/sound.js';

export default function SceneIdentity({ onHoverCursor }) {
  return (
    <section id="identity" className="py-24" aria-label="Scene 02: Identity & Doctrine">
      <div className="site-container">
        <div className="scene-marker">
          <span className="scene-label">02 // IDENTITY &amp; DOCTRINE</span>
          <span className="scene-num">EPISTEMOLOGY // ACADEMIA</span>
        </div>

        {/* Monumental Headline */}
        <div className="max-w-4xl mb-16">
          <span className="meta-code text-[#00f0ff] mb-3 block font-bold">
            FOUNDATIONAL THESIS // 2026
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            I operate in the deliberate tension between <span className="serif-italic font-normal">mathematical theory</span> and deterministic production code.
          </h2>
        </div>

        {/* Spatial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
            <p>
              Contemporary development is frequently seduced by superficial wrappers and cargo-cult AI hype. I believe genuine engineering competence stems from understanding first principles: the eigenvalue decompositions that govern dimensionality reduction, the cost-sensitive risk boundaries that govern financial classification, and the memory layouts that dictate CPU cache locality.
            </p>
            <p className="text-zinc-400">
              At the Indian Institute of Technology Jodhpur (IIT Jodhpur), my academic research focuses on machine learning systems, statistical modeling, and data structures. I approach every project not as a cosmetic demo, but as an audit-grade engineering artifact designed for precision and durability.
            </p>

            {/* Currently Exploring Radar */}
            <div className="mt-10 p-6 bg-[#0c0c12] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Compass size={14} className="text-[#00f0ff]" />
                <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-wider font-bold">
                  ACTIVE EXPLORATION RADAR // 2026
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.currentlyExploring.map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#14141d] border border-white/5 font-mono text-xs text-zinc-300"
                  >
                    ● {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Dossier Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#0c0c12] border border-white/10">
              <div className="flex items-center gap-2 mb-3 text-[#00f0ff]">
                <BookOpen size={16} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  ACADEMIC AFFILIATION
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                {PROFILE.institution.name}
              </h3>
              <div className="font-mono text-xs text-[#00f0ff] mb-3">
                {PROFILE.institution.degree} ({PROFILE.institution.period})
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {PROFILE.institution.focus}
              </p>
            </div>

            {/* Core Manifesto Principles */}
            <div className="space-y-3">
              {PROFILE.manifesto.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#09090f] border border-white/5 hover:border-[#00f0ff]/30 transition-colors"
                >
                  <div className="font-mono text-xs text-[#00f0ff] font-bold mb-1">
                    0{idx + 1} // {item.title}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
