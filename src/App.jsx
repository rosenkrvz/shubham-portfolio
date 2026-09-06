import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop.jsx';
import FluidCanvas from './components/FluidCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';
import ProjectDrawer from './components/ProjectDrawer.jsx';
import CertificateModal from './components/CertificateModal.jsx';
import MobileContactCTA from './components/MobileContactCTA.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CertificatesPage from './pages/CertificatesPage.jsx';
import LabPage from './pages/LabPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import ThankYouPage from './pages/ThankYouPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import { profile } from './data/profile.js';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email || profile.email);
    showToast({
      type: 'success',
      message: `Operator email copied to clipboard: ${email || profile.email}`
    });
  };

  const handleDownloadCertificateSimulation = (cert) => {
    showToast({
      type: 'info',
      message: `Generating signed certificate PDF for ${cert.title}...`
    });
    setTimeout(() => {
      showToast({
        type: 'success',
        message: `Download complete: ${cert.credentialId}.pdf (Verified)`
      });
    }, 900);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      {/* Dynamic GPU-accelerated fluid background */}
      <FluidCanvas />

      <div className="relative min-h-screen flex flex-col justify-between bg-[#0B0B0C] text-[#F0F0EE] selection:bg-[#3E2CF0] selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Multi-Page Route Outlet */}
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route
              path="/home"
              element={
                <HomePage
                  onOpenProject={(proj) => setActiveProject(proj)}
                  onShowToast={showToast}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onShowToast={showToast} />}
            />
            <Route path="/info" element={<Navigate to="/about" replace />} />
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
              path="/certifications"
              element={
                <CertificatesPage
                  onInspectCert={(cert) => setActiveCert(cert)}
                  onDownloadSimulation={handleDownloadCertificateSimulation}
                />
              }
            />
            <Route path="/credentials" element={<Navigate to="/certifications" replace />} />
            <Route
              path="/lab"
              element={<LabPage onShowToast={showToast} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onShowToast={showToast} />}
            />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Mobile floating contact CTA */}
        <MobileContactCTA />

        {/* Editorial Colophon Footer */}
        <Footer onCopyEmail={handleCopyEmail} />

        {/* Interactive Case Study Drawer Modal */}
        <ProjectDrawer
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

        {/* Verified Certificate Modal */}
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
          onDownloadSimulation={handleDownloadCertificateSimulation}
        />

        {/* Global Toast Alerts */}
        <Toast
          toast={toast}
          onClose={() => setToast(null)}
        />

      </div>
    </BrowserRouter>
  );
}