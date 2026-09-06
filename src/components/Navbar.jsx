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
    <header className="sticky top-0 z-40 w-full border-b border-[#1C1C22] bg-[#08080A]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6366F1]"
        >
          <div className="w-7 h-7 rounded-md bg-[#16161B] border border-[#26262E] flex items-center justify-center text-xs font-mono font-semibold text-[#F4F4F0] group-hover:border-[#E10600] transition-colors relative">
            <span>SS</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E10600] ring-2 ring-[#08080A]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F4F4F0] group-hover:text-white transition-colors">
              Shubham Sharma
            </span>
            <span className="text-[11px] text-[#9E9EA8] tracking-normal font-mono">
              AI / Data / Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — Recessed Physical Track */}
        <nav 
          className="hidden md:flex items-center gap-1 p-1 rounded-[6px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.02)]" 
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
                className={`relative px-3.5 py-1.5 rounded-[4px] text-xs font-mono transition-all duration-150 flex items-center gap-2 select-none ${
                  isActive
                    ? 'text-[#F2F2F2] font-semibold bg-[#18181C] border border-[rgba(255,255,255,0.1)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_6px_rgba(0,0,0,0.5)]'
                    : 'text-[#888888] hover:text-[#F2F2F2] hover:bg-[#121214]'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] shadow-[0_0_6px_2px_rgba(225,6,0,0.95),0_0_2px_1px_rgba(225,6,0,0.95)]" />
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[5px] bg-[#141416] hover:bg-[#1A1A1E] border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_5px_rgba(0,0,0,0.4)] active:translate-y-[1px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] text-xs font-mono text-[#A0A0A0] hover:text-[#F2F2F2] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>Resume</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[5px] bg-[#16161A] hover:bg-[#202026] border border-[#E10600]/40 shadow-[inset_0_1px_1px_rgba(225,6,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_6px_rgba(0,0,0,0.4)] active:translate-y-[1px] text-xs font-mono uppercase text-[#F2F2F2] transition-all group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] shadow-[0_0_6px_1.5px_rgba(225,6,0,0.9)]" />
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E10600] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#16161B] border border-[#26262E] text-[#9E9EA8] hover:text-white focus:outline-none"
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
