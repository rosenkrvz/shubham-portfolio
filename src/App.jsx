import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor.jsx';
import Navigation from './components/Navigation.jsx';
import CaseStudyDrawer from './components/CaseStudyDrawer.jsx';
import ShortcutsModal from './components/ui/ShortcutsModal.jsx';

import SceneArrival from './components/scenes/SceneArrival.jsx';
import SceneIdentity from './components/scenes/SceneIdentity.jsx';
import SceneWork from './components/scenes/SceneWork.jsx';
import SceneExperiments from './components/scenes/SceneExperiments.jsx';
import SceneSystems from './components/scenes/SceneSystems.jsx';
import SceneArchive from './components/scenes/SceneArchive.jsx';
import SceneContact from './components/scenes/SceneContact.jsx';
import Footer from './components/Footer.jsx';

import { PROJECTS } from './data/projects.js';
import { sound } from './lib/sound.js';

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [activeSection, setActiveSection] = useState('arrival');
  const [cursorText, setCursorText] = useState('');
  const [cursorExpanded, setCursorExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  // Active scene observer
  useEffect(() => {
    const handleScroll = () => {
      const scenes = ['arrival', 'identity', 'work', 'experiments', 'systems', 'archive', 'contact'];
      const scrollPos = window.scrollY + 250;
      for (const id of scenes) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const onKey = (e) => {
      // Ignore if typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'Escape') {
        if (activeProjectId) closeCaseStudy();
        if (isShortcutsOpen) setIsShortcutsOpen(false);
      } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        sound.playClick();
        setIsShortcutsOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'm') {
        toggleMute();
      } else if (['1', '2', '3', '4', '5', '6', '7'].includes(e.key)) {
        const sceneMap = {
          '1': 'arrival',
          '2': 'identity',
          '3': 'work',
          '4': 'experiments',
          '5': 'systems',
          '6': 'archive',
          '7': 'contact'
        };
        const targetId = sceneMap[e.key];
        const el = document.getElementById(targetId);
        if (el) {
          sound.playClick();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProjectId, isShortcutsOpen, isMuted]);

  // Handle URL hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const matched = PROJECTS.find((p) => p.id === hashId);
      if (matched) {
        setActiveProjectId(matched.id);
        document.body.style.overflow = 'hidden';
      }
    }
  }, []);

  const openCaseStudy = (id) => {
    sound.playClick();
    setActiveProjectId(id);
    document.body.style.overflow = 'hidden';
    if (window.history.pushState) {
      window.history.pushState({ project: id }, '', `#${id}`);
    }
  };

  const closeCaseStudy = () => {
    sound.playClick();
    setActiveProjectId(null);
    document.body.style.overflow = '';
    if (window.history.pushState) {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.setMuted(nextMuted);
  };

  const handleHoverCursor = (text) => {
    setCursorText(text);
    setCursorExpanded(!!text);
  };

  const activeProject = activeProjectId
    ? PROJECTS.find((p) => p.id === activeProjectId)
    : null;

  return (
    <div className="min-h-screen bg-[#050508] text-[#f5f5f7] selection:bg-[#00f0ff] selection:text-[#050508]">
      <CustomCursor text={cursorText} expanded={cursorExpanded} />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
        onMuteToggle={toggleMute}
        isMuted={isMuted}
      />

      <CaseStudyDrawer
        activeProject={activeProject}
        onClose={closeCaseStudy}
        onHoverCursor={handleHoverCursor}
      />

      <Navigation
        activeSection={activeSection}
        onHoverCursor={handleHoverCursor}
        isMuted={isMuted}
        onToggleSound={toggleMute}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      <main>
        <SceneArrival onHoverCursor={handleHoverCursor} />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <SceneIdentity onHoverCursor={handleHoverCursor} />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <SceneWork
          onOpenCaseStudy={openCaseStudy}
          onHoverCursor={handleHoverCursor}
        />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <SceneExperiments onHoverCursor={handleHoverCursor} />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <SceneSystems onHoverCursor={handleHoverCursor} />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <SceneArchive
          onOpenCaseStudy={openCaseStudy}
          onHoverCursor={handleHoverCursor}
        />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <SceneContact onHoverCursor={handleHoverCursor} />
      </main>

      <Footer />
    </div>
  );
}