import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MessageSquare } from 'lucide-react';

/**
 * Floating action button visible on mobile devices (md:hidden).
 * Provides one-tap access to the transmission/contact terminal.
 */
export default function MobileContactCTA() {
  const location = useLocation();

  // Hide the floating CTA if already on the contact page or thank you page
  if (location.pathname === '/contact' || location.pathname === '/thank-you') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden animate-fade-in">
      <Link
        to="/contact"
        aria-label="Direct Transmission to Shubham Sharma"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#3E2CF0] text-white shadow-lg shadow-[#3E2CF0]/30 hover:bg-[#5344F5] active:scale-95 transition-all border border-white/10"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <Mail className="w-4 h-4" />
        <span className="font-mono text-xs font-semibold tracking-wider">CONTACT</span>
      </Link>
    </div>
  );
}
