import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profile.js';
import { sound } from '../lib/sound.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-white/10">
          <div className="md:col-span-6">
            <div className="font-display font-black text-2xl tracking-tight text-white mb-2">
              SHUBHAM SHARMA <span className="text-[#00f0ff]">· KRVZ</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Applied AI &amp; Data Science scholar at IIT Jodhpur. Dedicated to transparent statistical systems, deterministic algorithmic execution, and resilient software craft.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between h-full">
            <div className="flex gap-6 font-mono text-xs">
              <a
                href={PROFILE.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#00f0ff] transition-colors"
                onClick={() => sound.playClick()}
              >
                GITHUB
              </a>
              <a
                href={`mailto:${PROFILE.contacts.email}`}
                className="text-zinc-400 hover:text-[#00f0ff] transition-colors"
                onClick={() => sound.playClick()}
              >
                EMAIL
              </a>
              <a
                href={PROFILE.contacts.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#00f0ff] transition-colors"
                onClick={() => sound.playClick()}
              >
                RESUME
              </a>
            </div>

            <a
              href="#arrival"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-[#00f0ff] hover:underline"
              onClick={() => sound.playClick()}
            >
              RETURN TO HORIZON <ArrowUp size={12} />
            </a>
          </div>
        </div>

        <div className="footer-meta-row text-[11px] font-mono text-zinc-500">
          <div>
            <span>© 2026 SHUBHAM SHARMA. ALL RIGHTS RESERVED.</span>
          </div>
          <div>
            <span>BUILT WITH REACT 19 · VITE · OBSIDIAN &amp; SPECTRAL CYAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}