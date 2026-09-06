import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { CERTIFICATES } from '../data/certificates.js';

export default function PageCertificates() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="site-container pt-16 pb-24">
      {/* Header */}
      <section className="mb-20">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 block">
            Archive / Credentials
          </span>

          <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6">
            Coursework &amp; <span className="serif-italic font-normal">Certifications</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Verified academic foundations, specialized machine learning coursework, and algorithmic certifications.
          </p>
        </div>
      </section>

      {/* Horizontal Archive with Textured Accordions */}
      <section className="max-w-4xl border-t border-[var(--border-subtle)]">
        {CERTIFICATES.map((cert) => {
          const isOpen = openId === cert.id;

          return (
            <div
              key={cert.id}
              className={`border-b border-[var(--border-subtle)] transition-colors ${
                isOpen ? 'textured-accordion-open' : 'hover:bg-[var(--surface)]'
              }`}
            >
              {/* Row Header */}
              <div
                className="py-6 px-4 sm:px-6 flex justify-between items-baseline gap-4 cursor-pointer"
                onClick={() => toggle(cert.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(cert.id);
                  }
                }}
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-medium text-white">
                    {cert.title}
                  </h2>
                  <div className="text-xs text-zinc-400 font-mono">
                    {cert.issuer} · {cert.domain}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                  <span>{cert.year}</span>
                  <span>{isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
                </div>
              </div>

              {/* Textured Expanded Panel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-6 pt-2 text-sm text-zinc-300 font-light space-y-4">
                      <p className="leading-relaxed max-w-2xl">
                        {cert.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-white hover:text-[var(--accent-red)] transition-colors inline-flex items-center gap-1"
                        >
                          Verify institutional credential <ArrowUpRight size={11} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>
    </div>
  );
}
