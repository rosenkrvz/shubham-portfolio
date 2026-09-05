import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-spread" id="intro">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-metadata-bar"
        >
          <div className="meta-code flex items-center">
            <span className="crimson-dot"></span>26.29° N, 73.02° E · INDIA
          </div>
          <div className="meta-code">
            IIT JODHPUR — B.S. APPLIED AI &amp; DATA SCIENCE
          </div>
          <div className="meta-code text-[#d0202b]">
            AVAILABLE FOR ML &amp; SOFTWARE ENGAGEMENTS
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title-group"
        >
          <h1 className="hero-main-title">SHUBHAM SHARMA</h1>
          <div className="meta-code mt-4 text-sm text-[#94949e]">
            AI &amp; DATA SCIENCE STUDENT · DEVELOPER · SYSTEM ARCHITECT
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-editorial-lead"
        >
          <div>
            <p className="lead-statement">
              I build <span className="serif-italic">intelligent systems</span>, explore applied machine learning architectures, and turn technical data challenges into working, reliable software.
            </p>
          </div>
          <div>
            <p className="lead-subtext">
              Based in India and pursuing a degree in Applied AI and Data Science at IIT Jodhpur. I focus on statistical modeling, feature engineering, and robust full-stack deployment. No templates, no artificial hype—just clean mathematical foundations and functional code.
            </p>
            <div className="hero-interactive-actions">
              <a href="#selected-work" className="editorial-btn editorial-btn-primary flex items-center gap-2">
                EXPLORE SELECTED WORK <ArrowDown size={14} />
              </a>
              <a href="#contact" className="editorial-btn editorial-btn-ghost">
                DIRECT CONTACT →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}