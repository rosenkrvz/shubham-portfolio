import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/home', label: 'Home', num: '01' },
  { path: '/about', label: 'About', num: '02' },
  { path: '/projects', label: 'Work', num: '03' },
  { path: '/certifications', label: 'Certifications', num: '04' },
  { path: '/experiments', label: 'Experiments', num: '05' },
  { path: '/contact', label: 'Contact', num: '06' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Treat root '/' as '/home'
  const currentPath = location.pathname === '/' ? '/home' : location.pathname;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1C1C22] bg-[#08080A]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity / Name */}
        <Link 
          to="/home" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6366F1]"
        >
          <div className="w-7 h-7 rounded-md bg-[#16161B] border border-[#26262E] flex items-center justify-center text-xs font-mono font-semibold text-[#F4F4F0] group-hover:border-[#6366F1] transition-colors">
            SS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F4F4F0] group-hover:text-white transition-colors">
              Shubham Sharma
            </span>
            <span className="text-[11px] text-[#9E9EA8] tracking-normal">
              IIT Jodhpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path || (item.path === '/projects' && currentPath === '/work');
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#F4F4F0]'
                    : 'text-[#9E9EA8] hover:text-[#F4F4F0] hover:bg-[#121216]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-md bg-[#16161C] border border-[#272730] -z-10"
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#16161B] hover:bg-[#1F1F26] border border-[#26262E] hover:border-[#383845] text-xs font-medium text-[#F4F4F0] transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#9E9EA8]" />
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
                const isActive = currentPath === item.path || (item.path === '/projects' && currentPath === '/work');
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
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-medium tracking-wide transition-colors"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <div className="text-center text-xs text-[#656570]">
                <span>marksrv047@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
