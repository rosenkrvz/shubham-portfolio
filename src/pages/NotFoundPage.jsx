import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Terminal } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({
    title: '404 Route Terminated — Unmapped Node',
    description: 'The requested route does not correspond to an active Sentinel telemetry endpoint or memory registry.',
    path: '/404'
  });

  return (
    <div className="min-h-[75vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-xl bg-[#111113] border border-[#1F1F24] text-center space-y-6 shadow-2xl">
        <div className="w-12 h-12 rounded-full bg-[#1A1A22] border border-[#3E2CF0] flex items-center justify-center text-[#3E2CF0] mx-auto">
          <ShieldAlert className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono text-[#3E2CF0] uppercase tracking-widest">
            ERROR 404 // UNMAPPED NODE
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#F0F0EE]">
            Route Terminated
          </h1>
          <p className="text-xs text-[#85858B] leading-relaxed">
            The requested URI path does not correspond to an active Sentinel endpoint or memory registry.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#3E2CF0] hover:bg-[#3220D8] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#3E2CF0]/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Platform Overview</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
