import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText, Code2, Sparkles, Terminal } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle.jsx';

const NAV_ITEMS = [
  { path: '/projects', label: 'Work', num: '01' },
  { path: '/ai-data', label: 'AI / Data', num: '02' },
  { path: '/experiments', label: 'Lab', num: '03' },
  { path: '/about', label: 'About', num: '04' },
  { path: '/github', label: 'Code', num: '05' },
  { path: '/contact', label: 'Contact', num: '06' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.08)] bg-[#0A0D12]/85 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link 
          to="/" 
          className="flex items-center gap-3.5 group focus:outline-none select-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#101318] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-sm font-mono font-semibold text-[#F8FAFC] group-hover:border-[#F8FAFC]/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all relative">
            <span>SS</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#E10600] shadow-[0_0_8px_#E10600]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors">
              Shubham Sharma
            </span>
            <span className="text-xs text-[#94A3B8] font-mono tracking-wide">
              AI &amp; Data Science &bull; IIT Jodhpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — Spacious & Fluid */}
        <nav 
          className="hidden md:flex items-center gap-1.5 p-1.5 rounded-xl bg-[#101318]/90 border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] backdrop-blur-md" 
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path || 
              (item.path === '/projects' && (currentPath === '/work' || currentPath.startsWith('/projects/'))) ||
              (item.path === '/ai-data' && currentPath === '/intelligence') ||
              (item.path === '/experiments' && currentPath === '/lab') ||
              (item.path === '/github' && currentPath === '/code');

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2.5 rounded-lg text-[15px] font-medium tracking-tight transition-all duration-200 flex items-center gap-2 select-none ${
                  isActive
                    ? 'text-[#F8FAFC] font-semibold'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#161B22]/70'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-[#161B22] border border-[rgba(255,255,255,0.15)] shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-0"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] shadow-[0_0_6px_#E10600]" />
                  )}
                  <span>{item.label}</span>
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle, Resume & Contact */}
        <div className="hidden md:flex items-center gap-3.5">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#101318] hover:bg-[#161B22] border border-[rgba(255,255,255,0.08)] text-xs font-mono font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span>Resume</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F8FAFC] hover:bg-white text-xs font-semibold text-[#0A0D12] shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all group"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0D12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-[#101318] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-[rgba(255,255,255,0.08)] bg-[#0A0D12]/98 backdrop-blur-2xl px-6 py-8 space-y-6"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-lg border transition-colors ${
                      isActive
                        ? 'bg-[#161B22] border-[rgba(255,255,255,0.15)] text-white'
                        : 'border-transparent text-[#94A3B8] hover:text-white hover:bg-[#101318]'
                    }`}
                  >
                    <span className="text-lg font-medium tracking-tight">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      {item.num}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#101318] border border-[rgba(255,255,255,0.08)] text-[#F8FAFC] text-xs font-mono"
              >
                <FileText className="w-3.5 h-3.5 text-[#94A3B8]" />
                <span>Resume PDF</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-[#F8FAFC] text-[#0A0D12] text-xs font-semibold"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
