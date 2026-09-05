import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor.jsx';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import WorkIndex from './components/WorkIndex.jsx';
import Perspective from './components/Perspective.jsx';
import Contact from './components/Contact.jsx';
import CaseStudyDrawer from './components/CaseStudyDrawer.jsx';
import Footer from './components/Footer.jsx';
import { CASE_STUDIES } from './data/caseStudies.js';

export default function App() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);
  const [activeSection, setActiveSection] = useState('intro');
  const [cursorText, setCursorText] = useState('');
  const [cursorExpanded, setCursorExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'selected-work', 'work-index', 'perspective', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && activeCaseStudyId) closeCaseStudy();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeCaseStudyId]);

  const openCaseStudy = (id) => {
    setActiveCaseStudyId(id);
    document.body.style.overflow = 'hidden';
    if (window.history.pushState) {
      window.history.pushState({ caseStudy: id }, '', `/projects#${id}`);
    }
  };

  const closeCaseStudy = () => {
    setActiveCaseStudyId(null);
    document.body.style.overflow = '';
    if (window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
  };

  const handleHoverCursor = (text) => {
    setCursorText(text);
    setCursorExpanded(!!text);
  };

  const activeStudy = activeCaseStudyId ? CASE_STUDIES[activeCaseStudyId] : null;

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f0] selection:bg-[#d0202b] selection:text-white">
      <CustomCursor text={cursorText} expanded={cursorExpanded} />
      
      <CaseStudyDrawer
        activeStudy={activeStudy}
        onClose={closeCaseStudy}
        onHoverCursor={handleHoverCursor}
      />

      <Navigation
        activeSection={activeSection}
        onHoverCursor={handleHoverCursor}
      />

      <main>
        <Hero />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <SelectedWork
          onOpenCaseStudy={openCaseStudy}
          onHoverCursor={handleHoverCursor}
        />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <WorkIndex
          onOpenCaseStudy={openCaseStudy}
          onHoverCursor={handleHoverCursor}
        />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <Perspective />
        <div className="site-container"><hr className="editorial-rule" /></div>

        <Contact onHoverCursor={handleHoverCursor} />
      </main>

      <Footer />
    </div>
  );
}