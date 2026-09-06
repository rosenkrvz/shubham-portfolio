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
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-24 md:py-32 bg-[#09090B]">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#71717A]">
          Error 404 // Coordinate Unresolved
        </span>

        <h1 className="text-4xl sm:text-5xl font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
          Page not found
        </h1>

        <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm mx-auto">
          The page you are looking for doesn't exist, has been moved, or the routing path has changed.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#FAFAFA] hover:bg-[#FAFAFA]/90 text-[#09090B] text-xs font-mono uppercase tracking-wider font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#121215] hover:bg-[#18181B] text-[#FAFAFA] text-xs font-mono uppercase tracking-wider font-medium border border-[rgba(255,255,255,0.08)] transition-colors"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#71717A]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
