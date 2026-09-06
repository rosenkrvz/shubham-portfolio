import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal, Shield, Activity } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/home', label: 'Platform' },
  { path: '/about', label: 'Dossier' },
  { path: '/projects', label: 'Systems' },
  { path: '/certifications', label: 'Credentials' },
  { path: '/lab', label: 'AI Lab' },
  { path: '/contact', label: 'Transmit' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Normalize current path (treat / as /home)
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1F1F24] bg-[#0B0B0C]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity / Logo */}
        <Link 
          to="/home" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#3E2CF0]"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded bg-[#111113] border border-[#2A2A2E] group-hover:border-[#3E2CF0] transition-colors">
            <span className="text-base text-[#3E2CF0] font-bold select-none group-hover:scale-110 transition-transform">✦</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F0F0EE] group-hover:text-white transition-colors">
              Raster Sentinel
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#85858B]">
              IIT Jodhpur // rosenkrvz
            </span>
          </div>
        </Link>

        {/* Live Telemetry Node Chip (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#111113] border border-[#1F1F24] text-[11px] font-mono text-[#85858B]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E2CF0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E2CF0]"></span>
          </span>
          <span>NODE: IITJ-01</span>
          <span className="text-[#3E2CF0] font-medium">// OPTIMAL</span>
          <span className="text-[#52525B]">8.4ms</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'text-[#F0F0EE]'
                    : 'text-[#85858B] hover:text-[#F0F0EE] hover:bg-[#161619]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-md bg-[#1E1E24] border border-[#2E2E36] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Header Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#3E2CF0] hover:bg-[#4F3DF8] text-white text-xs font-semibold tracking-wide transition-all duration-150 active:scale-95 shadow-sm shadow-[#3E2CF0]/30"
          >
            <span>Request Access</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#111113] border border-[#1F1F24] text-[#85858B] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[#1F1F24] bg-[#0B0B0C] px-4 py-4 space-y-2 overflow-hidden"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1F1F24] text-xs font-mono text-[#85858B]">
              <span>STATUS: TELEMETRY ACTIVE</span>
              <span className="text-[#3E2CF0]">NODE ONLINE</span>
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-[#1E1E24] text-[#F0F0EE] border border-[#2E2E36]'
                      : 'text-[#85858B] hover:text-[#F0F0EE] hover:bg-[#161619]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#52525B]">{item.path}</span>
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#3E2CF0] text-white text-xs font-semibold"
              >
                <span>Initiate Transmission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
