import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({
    title: '404 — Page Not Found | Shubham Sharma',
    description: 'The requested page could not be found. Return to the home page or browse projects.',
    path: '/404'
  });

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#818CF8]">
          Error 404
        </span>

        <h1 className="text-4xl sm:text-5xl font-display font-medium text-[#F4F4F2] tracking-tight">
          Page not found
        </h1>

        <p className="text-sm text-[#94949E] leading-relaxed max-w-sm mx-auto">
          The page you are looking for doesn't exist, has been moved, or the link may have changed.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-medium tracking-wide transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#141417] hover:bg-[#1E1E22] text-[#F4F4F2] text-xs font-medium border border-[#222226] transition-colors"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#94949E]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
