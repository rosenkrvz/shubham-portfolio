import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/home', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certificates' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Treat root '/' as '/home'
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1E1E23] bg-[#0C0C0E]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity / Name */}
        <Link 
          to="/home" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6366F1]"
        >
          <div className="w-7 h-7 rounded-md bg-[#18181C] border border-[#26262E] flex items-center justify-center text-xs font-mono font-semibold text-[#F4F4F2] group-hover:border-[#6366F1] transition-colors">
            SS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F4F4F2] group-hover:text-white transition-colors">
              Shubham Sharma
            </span>
            <span className="text-[11px] text-[#8E8D96] tracking-normal">
              IIT Jodhpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#F4F4F2]'
                    : 'text-[#8E8D96] hover:text-[#F4F4F2] hover:bg-[#151518]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-md bg-[#1A1A20] border border-[#272730] -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Action Button: Get in touch */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#18181D] hover:bg-[#222228] border border-[#2A2A33] hover:border-[#424250] text-xs font-medium text-[#F4F4F2] transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8D96]" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#151518] border border-[#222228] text-[#8E8D96] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-b border-[#1E1E23] bg-[#0C0C0E] px-4 py-4 space-y-1 overflow-hidden"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-[#18181E] text-[#F4F4F2] border border-[#272732]'
                      : 'text-[#8E8D96] hover:text-[#F4F4F2] hover:bg-[#141417]'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-md bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-semibold transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
