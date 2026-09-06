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
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Link
        to="/contact"
        aria-label="Contact Shubham Sharma"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#4338CA] text-white shadow-lg shadow-black/40 hover:bg-[#4F46E5] active:scale-95 transition-all border border-indigo-400/20"
      >
        <Mail className="w-4 h-4" />
        <span className="text-xs font-medium tracking-wide">Contact</span>
      </Link>
    </div>
  );
}
