import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Cpu, Terminal, FileCode } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ThankYouPage() {
  const location = useLocation();
  const state = location.state || {};
  const refId = state.refId || `TX-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  const senderName = state.name || 'Engineer';
  const timestamp = state.timestamp || new Date().toISOString();

  usePageMeta({
    title: 'Transmission Acknowledged',
    description: 'Direct inquiry successfully routed to Shubham Sharma. Transmission reference confirmed.',
    path: '/thank-you'
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-24">
      <div className="w-full max-w-xl">
        {/* Main Card */}
        <div className="rounded-xl border border-[#232326] bg-[#141416]/90 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3E2CF0] to-transparent" />

          {/* Status Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#10B981] font-semibold tracking-wider uppercase">
                  TRANSMISSION ACKNOWLEDGED
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <h1 className="text-xl sm:text-2xl font-display font-bold text-[#F0F0EE]">
                Message Routed to Operator
              </h1>
            </div>
          </div>

          {/* Telemetry Receipt Box */}
          <div className="rounded-lg bg-[#0B0B0C] border border-[#1E1E22] p-4 font-mono text-xs space-y-2 mb-6">
            <div className="flex justify-between items-center text-[#8E8D8A] border-b border-[#1E1E22] pb-2">
              <span>INCIDENT REFERENCE</span>
              <span className="text-[#3E2CF0] font-semibold">{refId}</span>
            </div>
            <div className="flex justify-between items-center text-[#8E8D8A]">
              <span>SENDER ENTITY</span>
              <span className="text-[#F0F0EE]">{senderName}</span>
            </div>
            <div className="flex justify-between items-center text-[#8E8D8A]">
              <span>DESTINATION ENDPOINT</span>
              <span className="text-[#F0F0EE]">marksrv047@gmail.com</span>
            </div>
            <div className="flex justify-between items-center text-[#8E8D8A]">
              <span>ROUTING PROTOCOL</span>
              <span className="text-[#10B981]">TLS 1.3 / VERIFIED CLIENT</span>
            </div>
            <div className="flex justify-between items-center text-[#8E8D8A] border-t border-[#1E1E22] pt-2">
              <span>DISPATCH TIMESTAMP</span>
              <span className="text-[#A0A09C]">{new Date(timestamp).toUTCString()}</span>
            </div>
          </div>

          {/* Body Text */}
          <div className="text-sm text-[#A0A09C] space-y-3 mb-8 leading-relaxed">
            <p>
              Thank you for reaching out. Your communication has been registered. Shubham typically reviews and replies to technical inquiries, architectural collaborations, and opportunities within <strong className="text-[#F0F0EE]">24 hours</strong>.
            </p>
            <p className="text-xs text-[#8E8D8A]">
              If your inquiry is time-critical, you can also send a direct follow-up via{' '}
              <a href="mailto:marksrv047@gmail.com" className="text-[#3E2CF0] underline">
                marksrv047@gmail.com
              </a>.
            </p>
          </div>

          {/* Navigation Action Buttons */}
          <div className="space-y-2.5">
            <Link
              to="/projects"
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#3E2CF0] hover:bg-[#5344F5] text-white font-mono text-xs font-semibold tracking-wide transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4" />
                <span>EXPLORE SYSTEMS ARCHITECTURE</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="grid grid-cols-2 gap-2.5">
              <Link
                to="/about"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1C1F] hover:bg-[#252529] text-[#F0F0EE] font-mono text-xs border border-[#2B2B30] transition-colors"
              >
                <FileCode className="w-3.5 h-3.5 text-[#8E8D8A]" />
                <span>VIEW DOSSIER</span>
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1C1C1F] hover:bg-[#252529] text-[#F0F0EE] font-mono text-xs border border-[#2B2B30] transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-[#8E8D8A]" />
                <span>RETURN HOME</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
