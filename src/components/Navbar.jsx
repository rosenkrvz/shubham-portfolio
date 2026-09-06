import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle.jsx';

const NAV_ITEMS = [
  { path: '/projects', label: 'Work', num: '01' },
  { path: '/ai-data', label: 'AI / Data', num: '02' },
  { path: '/experiments', label: 'Lab', num: '03' },
  { path: '/about', label: 'About', num: '04' },
  { path: '/contact', label: 'Contact', num: '05' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#27272A]/40 bg-[#09090B]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-7 h-7 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-xs font-mono font-medium text-[#FAFAFA] group-hover:border-[#FAFAFA]/40 transition-colors relative">
            <span>SS</span>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#E10600]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
              Shubham Sharma
            </span>
            <span className="type-label text-[#9A9A9A]">
              Applied AI &bull; IIT Jodhpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav 
          className="hidden md:flex items-center gap-1 px-2 py-1 rounded-[6px] bg-[#121215] border border-[rgba(255,255,255,0.06)]" 
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path || 
              (item.path === '/projects' && (currentPath === '/work' || currentPath.startsWith('/projects/'))) ||
              (item.path === '/ai-data' && currentPath === '/intelligence') ||
              (item.path === '/experiments' && currentPath === '/lab');

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-1.5 rounded-[4px] text-sm font-sans tracking-tight transition-all duration-150 flex items-center gap-2 select-none ${
                  isActive
                    ? 'text-[#FAFAFA] font-medium bg-[#18181B] border border-[rgba(255,255,255,0.1)]'
                    : 'text-[#B0B0B0] hover:text-[#FAFAFA] hover:bg-[#141418]'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                )}
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle, Resume & Contact */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-xs font-sans font-medium text-[#B0B0B0] hover:text-[#FAFAFA] transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#9A9A9A]" />
            <span>Resume</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-[#FAFAFA] hover:bg-white text-xs font-sans font-medium text-[#09090B] transition-colors group"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3 text-[#09090B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] text-[#A1A1AA] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Animated Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#08080A]/95 backdrop-blur-xl border-t border-[#1C1C22] p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4 pt-4">
              <span className="text-[11px] font-mono text-[#656570] uppercase tracking-widest block mb-4">
                Directory
              </span>
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.path || 
                  (item.path === '/projects' && (currentPath === '/work' || currentPath.startsWith('/projects/'))) ||
                  (item.path === '/ai-data' && currentPath === '/intelligence') ||
                  (item.path === '/experiments' && currentPath === '/lab');

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-baseline justify-between py-2.5 border-b border-[#16161A] transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-[#9E9EA8] hover:text-[#F4F4F0]'
                    }`}
                  >
                    <span className="text-2xl font-display font-medium">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-[#656570]">
                      {item.num}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-8 border-t border-[#1C1C22] space-y-4">
              <div className="flex items-center justify-between py-2 px-1">
                <span className="text-xs font-mono text-[#9E9EA8]">THEME PREFERENCE</span>
                <ThemeToggle />
              </div>

              <div className="flex gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#16161C] border border-[#272730] text-white text-xs font-mono"
                >
                  <FileText className="w-3.5 h-3.5 text-[#818CF8]" />
                  <span>Resume PDF</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-medium tracking-wide transition-colors"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="text-center text-xs text-[#656570] font-mono">
                <span>marksrv047@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
