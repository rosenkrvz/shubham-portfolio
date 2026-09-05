import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navigation({ activeSection, onHoverCursor }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'intro', label: 'INTRO', num: '01' },
    { id: 'selected-work', label: 'WORK', num: '02' },
    { id: 'work-index', label: 'ARCHIVE', num: '03' },
    { id: 'perspective', label: 'PERSPECTIVE', num: '04' },
    { id: 'contact', label: 'CONTACT', num: '05' },
  ];

  return (
    <header className="masthead-nav">
      <div className="site-container masthead-inner">
        <a href="#intro" className="masthead-brand">
          <span className="brand-title">krvz</span>
          <span className="brand-dot">.dev</span>
          <span className="brand-edition">2026 EDITION · APPLIED AI</span>
        </a>

        <nav aria-label="Primary Navigation">
          <ul className={`nav-catalogue ${mobileOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-catalogue-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.num}</span>{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-action-wrap">
          <a
            href="https://github.com/rosenkrvz"
            target="_blank"
            rel="noopener noreferrer"
            className="masthead-btn flex items-center gap-1.5"
            onMouseEnter={() => onHoverCursor('OPEN')}
            onMouseLeave={() => onHoverCursor('')}
          >
            GITHUB <ArrowUpRight size={13} />
          </a>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}