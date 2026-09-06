import React, { useState } from 'react';
import { Volume2, VolumeX, Command, ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { sound } from '../lib/sound.js';
import { PROFILE } from '../data/profile.js';

export default function Navigation({
  activeSection,
  onHoverCursor,
  isMuted,
  onToggleSound,
  onOpenShortcuts
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'arrival', label: 'ARRIVAL', num: '01' },
    { id: 'identity', label: 'IDENTITY', num: '02' },
    { id: 'work', label: 'WORK', num: '03' },
    { id: 'experiments', label: 'LAB', num: '04' },
    { id: 'systems', label: 'SYSTEMS', num: '05' },
    { id: 'archive', label: 'ARCHIVE', num: '06' },
    { id: 'contact', label: 'CONTACT', num: '07' },
  ];

  const handleNavClick = (id) => {
    sound.playClick();
    setMobileOpen(false);
  };

  return (
    <header className="masthead-nav">
      <div className="site-container masthead-inner">
        <a
          href="#arrival"
          className="masthead-brand"
          onClick={() => sound.playClick()}
          onMouseEnter={() => {
            sound.playHover();
            onHoverCursor('KRVZ');
          }}
          onMouseLeave={() => onHoverCursor('')}
        >
          <span className="brand-title">krvz</span>
          <span className="brand-dot">.dev</span>
          <span className="brand-edition">2026 // APPLIED AI &amp; SYSTEMS</span>
        </a>

        <nav aria-label="Scene Navigation">
          <ul className={`nav-catalogue ${mobileOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-catalogue-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => {
                    sound.playHover();
                    onHoverCursor('SCENE');
                  }}
                  onMouseLeave={() => onHoverCursor('')}
                >
                  <span>{item.num}</span>{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-action-wrap">
          {/* Sound Synthesizer Toggle */}
          <button
            className="masthead-btn"
            onClick={() => {
              onToggleSound();
            }}
            title={isMuted ? 'Enable tactile audio feedback' : 'Mute audio'}
            aria-label="Toggle Audio Feedback"
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} className="text-[#00f0ff]" />}
            <span className="hidden sm:inline">{isMuted ? 'AUDIO: OFF' : 'AUDIO: ON'}</span>
          </button>

          {/* Keyboard Shortcuts Trigger */}
          <button
            className="masthead-btn"
            onClick={() => {
              sound.playClick();
              onOpenShortcuts();
            }}
            title="Keyboard navigation shortcuts [?]"
            aria-label="Keyboard Shortcuts"
          >
            <Command size={13} />
            <span className="hidden sm:inline">[?]</span>
          </button>

          {/* Resume link */}
          <a
            href={PROFILE.contacts.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="masthead-btn"
            onClick={() => sound.playClick()}
            onMouseEnter={() => {
              sound.playHover();
              onHoverCursor('PDF');
            }}
            onMouseLeave={() => onHoverCursor('')}
            title="View verified curriculum vitae"
          >
            <FileText size={13} />
            <span className="hidden sm:inline">RESUME</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => {
              sound.playClick();
              setMobileOpen(!mobileOpen);
            }}
            aria-label="Toggle Navigation Drawer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}