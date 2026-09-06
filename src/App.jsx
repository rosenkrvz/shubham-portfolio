import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';

import PageWork from './pages/PageWork.jsx';
import PageAbout from './pages/PageAbout.jsx';
import PageLab from './pages/PageLab.jsx';
import PageCertificates from './pages/PageCertificates.jsx';
import PageContact from './pages/PageContact.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('work');

  // Synchronize active tab with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validTabs = ['work', 'about', 'lab', 'certificates', 'contact'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else if (!hash) {
        setActiveTab('work');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTab = (tabKey) => {
    setActiveTab(tabKey);
    window.location.hash = `#${tabKey}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'about':
        return <PageAbout />;
      case 'lab':
        return <PageLab />;
      case 'certificates':
        return <PageCertificates />;
      case 'contact':
        return <PageContact />;
      case 'work':
      default:
        return <PageWork onNavigateTab={navigateTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f2f2ee] selection:bg-[#c5282f] selection:text-white flex flex-col justify-between">
      <CustomCursor />

      <div>
        <Navigation
          activeTab={activeTab}
          onSelectTab={navigateTab}
        />

        <main id="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <Footer />
    </div>
  );
}