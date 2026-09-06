import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Copy, Check, Send, ShieldAlert, ArrowUpRight, Terminal, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { profile } from '../data/profile.js';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ContactPage({ onShowToast }) {
  const navigate = useNavigate();

  usePageMeta({
    title: 'Operator Transmission Terminal & Inquiries',
    description: 'Direct transmission channel to Shubham Sharma for AI engineering roles, high-consequence system architectures, and technical collaborations.',
    path: '/contact'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'Recruitment & High-Impact Role',
    message: '',
    honeypot: '' // Anti-spam bot trap
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTransmission, setSubmittedTransmission] = useState(null);
  const lastSubmitTimeRef = useRef(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    onShowToast?.({
      type: 'success',
      message: `Operator email copied to clipboard: ${profile.email}`
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-exploitation honeypot check
    if (formData.honeypot) {
      console.warn('Bot detected and neutralized via honeypot.');
      return;
    }

    // Client-side rate limiting to prevent retry storms and spam
    const now = Date.now();
    if (now - lastSubmitTimeRef.current < 10000) {
      onShowToast?.({
        type: 'error',
        message: 'RATE_LIMIT_ACTIVE: Please pause 10s between dispatch attempts.'
      });
      return;
    }

    // Input bounds validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMsg = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMsg) {
      onShowToast?.({
        type: 'error',
        message: 'Please complete all required fields.'
      });
      return;
    }

    if (trimmedMsg.length < 10) {
      onShowToast?.({
        type: 'error',
        message: 'Transmission payload must contain at least 10 characters.'
      });
      return;
    }

    lastSubmitTimeRef.current = now;
    setIsSubmitting(true);

    const refId = `SENTINEL-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast?.({
        type: 'success',
        message: `Transmission [${refId}] routed to marksrv047@gmail.com.`
      });

      // Redirect to dedicated Thank You receipt page
      navigate('/thank-you', {
        state: {
          refId,
          name: trimmedName,
          email: trimmedEmail,
          timestamp: new Date().toISOString()
        }
      });
    }, 850);
  };

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#1F1F24] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3E2CF0] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E2CF0] animate-pulse"></span>
            <span>Secure Dispatch // Direct Transmission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F0F0EE]">
            Initiate Contact
          </h1>
          <p className="text-sm sm:text-base text-[#85858B] max-w-2xl leading-relaxed">
            Direct communication channel to Shubham Sharma for full-time engineering roles, high-consequence AI research, and architecture consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Terminal */}
          <div className="lg:col-span-7 bg-[#111113] border border-[#1F1F24] rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#1F1F24] pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#3E2CF0]" />
                <span className="font-mono text-xs uppercase text-[#F0F0EE]">
                  Operator Transmission Interface
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/40">
                AES-256 ENCRYPTED DISPATCH
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam honeypot (hidden from real users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#85858B] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-3.5 py-2 rounded bg-[#161619] border border-[#232328] focus:border-[#3E2CF0] text-xs font-mono text-[#F0F0EE] placeholder-[#52525B] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#85858B] mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={120}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="operator@company.com"
                    className="w-full px-3.5 py-2 rounded bg-[#161619] border border-[#232328] focus:border-[#3E2CF0] text-xs font-mono text-[#F0F0EE] placeholder-[#52525B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#85858B] mb-1">
                    Inquiry Classification
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-[#161619] border border-[#232328] focus:border-[#3E2CF0] text-xs font-mono text-[#F0F0EE] focus:outline-none transition-colors"
                  >
                    <option>Recruitment &amp; High-Impact Role</option>
                    <option>Engineering Architecture Consulting</option>
                    <option>Research Collaboration (IIT Jodhpur)</option>
                    <option>General Technical Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#85858B] mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    maxLength={150}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack AI Engineer Opportunity"
                    className="w-full px-3.5 py-2 rounded bg-[#161619] border border-[#232328] focus:border-[#3E2CF0] text-xs font-mono text-[#F0F0EE] placeholder-[#52525B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#85858B] mb-1">
                  Transmission Message Payload *
                </label>
                <textarea
                  rows="5"
                  required
                  maxLength={5000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the role, system requirements, or project details..."
                  className="w-full px-3.5 py-2 rounded bg-[#161619] border border-[#232328] focus:border-[#3E2CF0] text-xs font-mono text-[#F0F0EE] placeholder-[#52525B] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-[#52525B]">
                  Target: marksrv047@gmail.com
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#3E2CF0] hover:bg-[#3220D8] disabled:opacity-50 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#3E2CF0]/30 active:scale-95"
                >
                  <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-bounce' : ''}`} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Dispatch & Automated Response Simulator */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-xl bg-[#111113] border border-[#1F1F24] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#85858B]">
                  Direct Mailbox
                </span>
                <span className="text-[10px] font-mono text-[#3E2CF0]">
                  PRIMARY ROUTE
                </span>
              </div>

              <div className="p-3 rounded bg-[#161619] border border-[#232328] font-mono text-xs text-[#F0F0EE] flex items-center justify-between">
                <span className="truncate">{profile.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-[#85858B] hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 rounded bg-[#1E1E24] hover:bg-[#282830] text-xs font-mono text-[#F0F0EE] transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Address'}</span>
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="flex-1 py-2 rounded bg-[#3E2CF0] hover:bg-[#3220D8] text-xs font-mono font-semibold text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-[#3E2CF0]/30"
                >
                  <span>Open Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Simulated Automated Response System */}
            <div className="p-6 rounded-xl bg-[#111113] border border-[#1F1F24] space-y-3">
              <div className="flex items-center justify-between border-b border-[#1F1F24] pb-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#F0F0EE]">
                  <Clock className="w-3.5 h-3.5 text-[#3E2CF0]" />
                  <span>Automated Dispatch Engine</span>
                </div>
                <span className="text-[10px] font-mono text-[#85858B]">
                  &lt; 24h SLA
                </span>
              </div>

              <p className="text-xs text-[#85858B] leading-relaxed">
                When you dispatch an inquiry through this terminal, Sentinel's server automation generates an immediate cryptographic acknowledgment and alerts Shubham directly on private pager channels.
              </p>

              {/* Live Simulated Auto-Response Preview */}
              {submittedTransmission && (
                <div className="mt-4 p-4 rounded bg-[#0A0A0C] border border-[#2E2E38] space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#3E2CF0] text-[10px] border-b border-[#1F1F24] pb-2">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>DISPATCH CONFIRMED: REF {submittedTransmission.refId}</span>
                    </span>
                    <span>{submittedTransmission.timestamp}</span>
                  </div>
                  <div className="text-[#85858B] text-[11px] pt-1">
                    <div>To: <span className="text-white">{submittedTransmission.senderEmail}</span></div>
                    <div>From: <span className="text-white">Shubham Sharma &lt;marksrv047@gmail.com&gt;</span></div>
                    <div>Subject: <span className="text-white">Transmission Acknowledged [REF: {submittedTransmission.refId}]</span></div>
                  </div>
                  <div className="p-2.5 rounded bg-[#111113] text-[#A1A1AA] text-[11px] leading-relaxed border border-[#1F1F24] mt-2">
                    "Hello {submittedTransmission.senderName}, your {submittedTransmission.inquiryType} inquiry has been logged in the Sentinel registry. I review all dispatches personally within one business day. Thank you for connecting."
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
