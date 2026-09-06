import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowLeft, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ThankYouPage() {
  const location = useLocation();
  const state = location.state || {};
  const refId = state.refId || `INQ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const senderName = state.name || 'there';
  const timestamp = state.timestamp || new Date().toISOString();

  usePageMeta({
    title: 'Message Received — Shubham Sharma',
    description: 'Inquiry successfully delivered to Shubham Sharma. I will respond within 24 to 48 hours.',
    path: '/thank-you'
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-[#222226] bg-[#141417] p-8 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle top indicator */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Inquiry Received
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-medium text-[#F4F4F2] tracking-tight mt-0.5">
                Thank you, {senderName}.
              </h1>
            </div>
          </div>

          <p className="text-sm text-[#94949E] leading-relaxed mb-8">
            Your message has been delivered directly to my inbox. I usually review and respond to academic collaborations, technical inquiries, and project opportunities within <span className="text-[#F4F4F2] font-medium">24–48 hours</span>.
          </p>

          {/* Clean Receipt Summary */}
          <div className="rounded-xl bg-[#0C0C0E] border border-[#222226] p-5 space-y-3 mb-8 text-xs">
            <div className="flex justify-between items-center text-[#94949E] pb-2 border-b border-[#1C1C20]">
              <span>Reference Number</span>
              <span className="font-mono text-[#F4F4F2] font-medium">{refId}</span>
            </div>
            <div className="flex justify-between items-center text-[#94949E] pb-2 border-b border-[#1C1C20]">
              <span>Delivered To</span>
              <span className="text-[#F4F4F2]">marksrv047@gmail.com</span>
            </div>
            <div className="flex justify-between items-center text-[#94949E]">
              <span>Date Received</span>
              <span className="text-[#94949E]">{new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          {/* Direct Follow-up Note */}
          <p className="text-xs text-[#6B6B76] mb-8 leading-relaxed">
            Need an immediate response? You can also write directly to{' '}
            <a href="mailto:marksrv047@gmail.com" className="text-[#818CF8] hover:underline">
              marksrv047@gmail.com
            </a>.
          </p>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/projects"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-medium tracking-wide transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1A1A1E] hover:bg-[#222228] text-[#F4F4F2] text-xs font-medium border border-[#2A2A30] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#94949E]" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
