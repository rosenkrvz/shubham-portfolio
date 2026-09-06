import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Radio, Compass, Clock, Terminal } from 'lucide-react';
import { PROFILE } from '../../data/profile.js';
import { sound } from '../../lib/sound.js';

export default function SceneArrival({ onHoverCursor }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Kolkata'
        }) + ' IST'
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="arrival" className="hero-spatial-container site-container" aria-label="Scene 01: Arrival">
      {/* Top Technical Metadata Horizon */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hero-meta-bar"
      >
        <div className="meta-code flex items-center gap-1.5">
          <Compass size={12} className="text-[#00f0ff]" />
          <span>{PROFILE.location.coordinates}</span>
          <span className="text-zinc-500">·</span>
          <span>{PROFILE.location.label}</span>
        </div>

        <div className="meta-code flex items-center gap-1.5">
          <Clock size={12} className="text-[#00f0ff]" />
          <span>{currentTime || 'LIVE CLOCK'}</span>
        </div>

        <div className="meta-code flex items-center gap-1.5 text-[#00f0ff]">
          <span className="cyan-dot"></span>
          <span>{PROFILE.status.label}</span>
        </div>
      </motion.div>

      {/* Monumental Typographic Arrival */}
      <div className="my-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-zinc-400">
            <span className="px-2 py-0.5 border border-[#00f0ff]/40 text-[#00f0ff] font-bold">SCENE 01 // ARRIVAL</span>
            <span>IIT JODHPUR · APPLIED AI &amp; DATA SCIENCE</span>
          </div>

          <h1 className="hero-monumental-name">
            SHUBHAM <br />
            <span className="text-zinc-400 hover:text-white transition-colors">SHARMA</span>
          </h1>

          <div className="hero-subtitle-meta">
            <span className="meta-code text-[#00f0ff] font-bold text-sm tracking-widest">
              SYSTEM ARCHITECT // ML RESEARCHER // DEVELOPER
            </span>
            <span className="meta-code text-zinc-400">
              BUILDING AT THE INTERSECTION OF APPLIED INTELLIGENCE &amp; RESILIENT CODE
            </span>
          </div>
        </motion.div>

        {/* Asymmetric Spatial Split */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hero-spatial-split"
        >
          <div>
            <p className="lead-statement">
              I investigate <span className="serif-italic">mathematical foundations</span>, engineer predictive machine learning pipelines, and construct software systems that behave deterministically under real-world constraints.
            </p>
          </div>

          <div>
            <p className="lead-detail-copy mb-6">
              Pursuing a B.S. in Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur. Zero artificial hype or black-box complacency—just transparent statistical modeling, clean data transformations, and resilient software craft.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#work"
                className="editorial-btn editorial-btn-primary flex items-center gap-2"
                onClick={() => sound.playClick()}
                onMouseEnter={() => {
                  sound.playHover();
                  onHoverCursor('EXPLORE');
                }}
                onMouseLeave={() => onHoverCursor('')}
              >
                EXPLORE SELECTED WORK <ArrowDown size={14} />
              </a>

              <a
                href="#experiments"
                className="editorial-btn editorial-btn-ghost flex items-center gap-2"
                onClick={() => sound.playClick()}
                onMouseEnter={() => {
                  sound.playHover();
                  onHoverCursor('LAB');
                }}
                onMouseLeave={() => onHoverCursor('')}
              >
                OPEN EXPERIMENTS LAB →
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Spatial Bottom Status Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-4 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-zinc-400 flex-wrap gap-2"
      >
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-[#00f0ff]" />
          <span>STATUS:</span>
          <span className="text-zinc-200">{PROFILE.status.detail}</span>
        </div>
        <div className="text-right">
          <span className="text-[#00f0ff]">SCROLL TO TRAVERSE // SCENE 02 ↓</span>
        </div>
      </motion.div>
    </section>
  );
}
