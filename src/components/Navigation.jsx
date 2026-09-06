import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile.js';

export default function Navigation({ activeTab, onSelectTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = [
    { key: 'work', label: 'Work' },
    { key: 'about', label: 'About' },
    { key: 'lab', label: 'Lab' },
    { key: 'certificates', label: 'Certificates' },
    { key: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (key) => {
    onSelectTab(key);
    setMobileOpen(false);
  };

  return (
    <header className="minimal-nav">
      <div className="site-container nav-inner">
        {/* Brand */}
        <button
          onClick={() => handleTabClick('work')}
          className="nav-brand"
          aria-label="Go to Work"
        >
          <span>{PROFILE.name}</span>
          <span className="brand-dot"></span>
        </button>

        {/* Desktop Tabs */}
        <nav aria-label="Main Navigation">
          <ul className="nav-tabs-desktop">
            {tabs.map((tab) => (
              <li key={tab.key}>
                <button
                  onClick={() => handleTabClick(tab.key)}
                  className={`nav-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* External Links */}
        <div className="nav-secondary-links">
          <a
            href={PROFILE.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external-link"
          >
            GitHub <ArrowUpRight size={11} />
          </a>
          <a
            href={PROFILE.contacts.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-external-link"
          >
            Resume <ArrowUpRight size={11} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <div className="flex justify-between items-center border-b border-[var(--border-subtle)] pb-4">
            <span className="font-medium text-white">{PROFILE.name}</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-zinc-400 hover:text-white"
              aria-label="Close Menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col gap-6 my-auto py-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`text-left text-2xl font-light tracking-tight transition-colors ${
                  activeTab === tab.key ? 'text-white font-normal' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)] flex justify-between text-xs font-mono text-zinc-500">
            <a
              href={PROFILE.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href={PROFILE.contacts.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Resume ↗
            </a>
            <span>© 2026</span>
          </div>
        </div>
      )}
    </header>
  );
}