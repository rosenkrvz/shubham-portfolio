import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profile.js';
import { SKILLS_DATA } from '../data/skills.js';

export default function PageAbout() {
  return (
    <div className="site-container pt-16 pb-24">
      {/* Editorial Profile Header */}
      <section className="mb-20">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 block">
            About / Background
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8 leading-tight">
            I am interested in the space where <span className="serif-italic font-normal">mathematical models</span> meet reliable software engineering.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-zinc-300 font-light text-base sm:text-lg leading-relaxed pt-6 border-t border-[var(--border-subtle)]">
            <div className="md:col-span-7 space-y-6">
              <p>
                I am an undergraduate student pursuing a Bachelor of Science in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur). My focus centers on statistical modeling, feature engineering, and constructing clean software systems that behave predictably in production.
              </p>
              <p className="text-zinc-400">
                Rather than treating machine learning as an opaque wrapper or pursuing surface-level AI hype, I believe real engineering competence comes from understanding mathematical fundamentals: probability distributions, matrix transformations, cost-sensitive risk boundaries, and asymptotic complexity.
              </p>
            </div>

            <div className="md:col-span-5 space-y-8 text-sm">
              <div>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                  Academic Affiliation
                </span>
                <div className="text-white font-medium">{PROFILE.institution.name}</div>
                <div className="text-zinc-400 font-mono text-xs mt-1">{PROFILE.institution.degree}</div>
                <div className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  {PROFILE.institution.coursework}
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                  Focus Areas
                </span>
                <ul className="space-y-1.5 text-zinc-400 text-xs font-mono">
                  {PROFILE.interests.map((item, idx) => (
                    <li key={idx}>— {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Typographic Skills */}
      <section className="pt-16 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8 block">
            Technical Foundations
          </span>

          <div className="space-y-8">
            {SKILLS_DATA.map((group, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline py-4 border-b border-[var(--border-subtle)]">
                <div className="md:col-span-4 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  {group.category}
                </div>
                <div className="md:col-span-8 text-base text-zinc-200 font-light">
                  {group.items.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>Verified repositories and implementations available on GitHub.</span>
            <a
              href={PROFILE.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--accent-red)] transition-colors inline-flex items-center gap-1"
            >
              github.com/{PROFILE.handle} <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
