import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';
import ProjectDrawer from './components/ProjectDrawer.jsx';
import CertificateModal from './components/CertificateModal.jsx';
import MobileContactCTA from './components/MobileContactCTA.jsx';

import NoiseOverlay from './components/canvas/NoiseOverlay.jsx';
import CursorSpotlight from './components/ui/CursorSpotlight.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import ThankYouPage from './pages/ThankYouPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import LabPage from './pages/LabPage.jsx';
import AiDataPage from './pages/AiDataPage.jsx';
import GithubPage from './pages/GithubPage.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

import { profile } from './data/profile.js';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const [toast, setToast] = useState(null);

  React.useEffect(() => {
    const handler = (e) => setActiveProject(e.detail);
    window.addEventListener('open-project', handler);
    return () => window.removeEventListener('open-project', handler);
  }, []);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const handleCopyEmail = (email) => {
    const targetEmail = email || profile.email;
    navigator.clipboard.writeText(targetEmail);
    showToast({
      type: 'success',
      message: `Email copied to clipboard: ${targetEmail}`
    });
  };

  const handleDownloadCertificateSimulation = (cert) => {
    showToast({
      type: 'info',
      message: `Preparing certificate document for ${cert.title}...`
    });
    setTimeout(() => {
      showToast({
        type: 'success',
        message: `Certificate record ready: ${cert.credentialId}.pdf`
      });
    }, 700);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />

      {/* Subtle tactile micro-grain noise overlay */}
      <NoiseOverlay />

      {/* Ambient cursor spotlight glow for desktop */}
      <CursorSpotlight />

      <div className="relative min-h-screen flex flex-col justify-between bg-[#08080A] text-[#F4F4F0] selection:bg-[#312E81] selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Multi-Page Route Outlet */}
        <main className="flex-1 relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenProject={(proj) => setActiveProject(proj)}
                  onShowToast={showToast}
                />
              }
            />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route
              path="/about"
              element={<AboutPage onShowToast={showToast} />}
            />
            <Route path="/info" element={<Navigate to="/about" replace />} />
            <Route path="/work" element={<Navigate to="/projects" replace />} />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onOpenProject={(proj) => setActiveProject(proj)}
                />
              }
            />
            <Route path="/systems" element={<Navigate to="/projects" replace />} />
            <Route
              path="/ai-data"
              element={<AiDataPage onShowToast={showToast} />}
            />
            <Route path="/intelligence" element={<Navigate to="/ai-data" replace />} />
            <Route path="/data" element={<Navigate to="/ai-data" replace />} />
            <Route
              path="/experiments"
              element={<LabPage onShowToast={showToast} />}
            />
            <Route path="/lab" element={<Navigate to="/experiments" replace />} />
            <Route
              path="/certifications"
              element={
                <CertificatesPage
                  onInspectCert={(cert) => setActiveCert(cert)}
                  onDownloadSimulation={handleDownloadCertificateSimulation}
                />
              }
            />
            <Route path="/credentials" element={<Navigate to="/certifications" replace />} />
            <Route path="/github" element={<GithubPage />} />
            <Route path="/code" element={<Navigate to="/github" replace />} />
            <Route
              path="/contact"
              element={<ContactPage onShowToast={showToast} />}
            />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Mobile floating contact button */}
        <MobileContactCTA />

        {/* Editorial Footer */}
        <Footer onCopyEmail={handleCopyEmail} />

        {/* Case Study Drawer */}
        <ProjectDrawer
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

        {/* Certificate Inspector Modal */}
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
          onDownloadSimulation={handleDownloadCertificateSimulation}
        />

        {/* Toast Notification Alerts */}
        <Toast
          toast={toast}
          onClose={() => setToast(null)}
        />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}