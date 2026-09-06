import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profile.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 mt-20">
      <div className="site-container flex flex-col sm:flex-row justify-between items-baseline gap-6 text-xs text-zinc-500 font-mono">
        <div>
          <span className="text-zinc-300 font-medium">{PROFILE.name}</span>
          <span className="mx-2">/</span>
          <span>{PROFILE.title}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PROFILE.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.contacts.email}`}
            className="hover:text-zinc-300 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-zinc-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
            aria-label="Scroll to top"
          >
            Top <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
}