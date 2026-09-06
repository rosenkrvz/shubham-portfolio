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
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24 md:py-32 bg-[#09090B]">
      <div className="w-full max-w-xl">
        <div className="rounded-[4px] border border-[rgba(255,255,255,0.08)] bg-[#121215] p-8 sm:p-10 space-y-6">
          {/* Subtle top indicator */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[4px] bg-[#09090B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                Transmission Received
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-medium text-[#FAFAFA] tracking-tight uppercase mt-0.5">
                Thank you, {senderName}.
              </h1>
            </div>
          </div>

          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Your message has been delivered directly to my inbox. I usually review and respond to academic collaborations, technical inquiries, and project opportunities within <span className="text-[#FAFAFA] font-medium">24–48 hours</span>.
          </p>

          {/* Clean Receipt Summary */}
          <div className="rounded-[4px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] p-5 space-y-3 text-xs">
            <div className="flex justify-between items-center text-[#71717A] pb-2 border-b border-[#27272A]/50">
              <span>Reference Number</span>
              <span className="font-mono text-[#FAFAFA] font-medium">{refId}</span>
            </div>
            <div className="flex justify-between items-center text-[#71717A] pb-2 border-b border-[#27272A]/50">
              <span>Delivered To</span>
              <span className="text-[#FAFAFA]">marksrv047@gmail.com</span>
            </div>
            <div className="flex justify-between items-center text-[#71717A]">
              <span>Date Received</span>
              <span className="text-[#A1A1AA]">{new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>

          {/* Direct Follow-up Note */}
          <p className="text-xs text-[#71717A] leading-relaxed">
            Need an immediate response? You can also write directly to{' '}
            <a href="mailto:marksrv047@gmail.com" className="text-[#FAFAFA] underline underline-offset-4 hover:text-[#FAFAFA]/80">
              marksrv047@gmail.com
            </a>.
          </p>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/projects"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#FAFAFA] hover:bg-[#FAFAFA]/90 text-[#09090B] text-xs font-mono uppercase tracking-wider font-medium transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#09090B] hover:bg-[#18181B] text-[#FAFAFA] text-xs font-mono uppercase tracking-wider font-medium border border-[rgba(255,255,255,0.08)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#71717A]" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
