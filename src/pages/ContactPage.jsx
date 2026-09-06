import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Copy, Check, Send, ArrowRight, Clock, ShieldCheck, Terminal, Radio } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons.jsx';
import { profile } from '../data/profile.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import TactileButton from '../components/ui/TactileButton.jsx';
import TactileInput from '../components/ui/TactileInput.jsx';
import StatusIndicator from '../components/ui/StatusIndicator.jsx';

export default function ContactPage({ onShowToast }) {
  const navigate = useNavigate();

  usePageMeta({
    title: 'Contact & Transmit — Shubham Sharma | IIT Jodhpur',
    description: 'Get in touch with Shubham Sharma for software engineering opportunities, machine learning internships, and technical research.',
    path: '/contact'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Engineering Role / Internship',
    message: '',
    honeypot: '' // Anti-bot trap
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTimeRef = useRef(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    onShowToast?.({
      type: 'success',
      message: `Email copied: ${profile.email}`
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-spam bot trap
    if (formData.honeypot) {
      console.warn('Bot submission neutralized.');
      return;
    }

    // Rate limiting: 10s cooldown
    const now = Date.now();
    if (now - lastSubmitTimeRef.current < 10000) {
      onShowToast?.({
        type: 'error',
        message: 'Please pause a few moments before sending another message.'
      });
      return;
    }

    // Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMsg = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMsg) {
      onShowToast?.({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    if (trimmedMsg.length < 10) {
      onShowToast?.({
        type: 'error',
        message: 'Please write a message of at least 10 characters.'
      });
      return;
    }

    lastSubmitTimeRef.current = now;
    setIsSubmitting(true);

    const refId = `INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast?.({
        type: 'success',
        message: `Transmission received. Thank you, ${trimmedName}.`
      });

      navigate('/thank-you', {
        state: {
          refId,
          name: trimmedName,
          email: trimmedEmail,
          timestamp: new Date().toISOString()
        }
      });
    }, 600);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-24 bg-[#080808] text-[#F2F2F2]">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* Section 18 Statement: Clean, Large & Editorial */}
          <div className="space-y-6 border-b border-[rgba(255,255,255,0.06)] pb-12">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-[4px] bg-[#0D0D0D] border border-[rgba(255,255,255,0.06)] text-[11px] font-mono text-[#A0A0A0]">
              <StatusIndicator status="online" size="sm" />
              <span>CHANNEL // DIRECT TELEMETRY INBOX</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display uppercase tracking-tight text-[#F2F2F2] leading-[0.95]">
              Let's build <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lg:text-7xl lowercase text-[#C7D2FE] mr-3">
                something
              </span>
              Interesting.
            </h1>

            <p className="text-base sm:text-lg text-[#A0A0A0] max-w-2xl font-light leading-relaxed">
              Available for software engineering roles, machine learning research internships, and systems architecture consultations. Direct channels are audited daily.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column: Direct Hardware Nodes & Coordinates */}
            <div className="lg:col-span-5 space-y-6">

              {/* Direct Mail Node */}
              <div className="p-6 bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.5)] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#666666] uppercase tracking-wider">
                  <span>DIRECT EMAIL</span>
                  <StatusIndicator status="active" size="sm" />
                </div>
                
                <div className="text-sm sm:text-base font-mono font-medium text-[#F2F2F2] select-all break-all">
                  {profile.email}
                </div>

                <TactileButton
                  variant="hardware"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#A0A0A0]" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                </TactileButton>
              </div>

              {/* Verified Identities */}
              <div className="p-6 bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.5)] space-y-4">
                <div className="text-xs uppercase tracking-wider text-[#666666] font-mono">
                  VERIFIED IDENTITIES
                </div>
                
                <div className="space-y-2.5 font-mono text-xs">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-[4px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] hover:border-[#E10600]/40 text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4" />
                      <span>github.com/rosenkrvz</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-[4px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] hover:border-[#E10600]/40 text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>linkedin.com/in/rosenkrvz</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* SLA & Cryptographic Integrity Notice */}
              <div className="p-4 bg-[#0D0D0D] border border-[rgba(255,255,255,0.04)] rounded-[5px] flex items-center gap-3 text-xs font-mono text-[#666666]">
                <Clock className="w-4 h-4 text-[#A0A0A0] shrink-0" />
                <span>RESPONSE SLA: WITHIN 24 BUSINESS HOURS</span>
              </div>

            </div>

            {/* Right Column: Physical Recessed Transmission Panel */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 bg-[#141414] border border-[rgba(255,255,255,0.08)] rounded-[6px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.6)] space-y-5"
              >

                {/* Honeypot Bot Trap */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Leave empty</label>
                  <input
                    id="hp_field"
                    type="text"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-4">
                  <TactileInput
                    id="contact-name"
                    label="Your Name *"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Doe / Engineering Lead"
                  />

                  <TactileInput
                    id="contact-email"
                    type="email"
                    label="Your Email *"
                    required
                    maxLength={120}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                  />

                  <div className="space-y-1.5 font-mono">
                    <label className="text-xs uppercase tracking-wider text-[#A0A0A0] block" htmlFor="contact-topic">
                      Engagement Topic
                    </label>
                    <select
                      id="contact-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-[4px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] focus:border-[#E10600]/60 text-xs sm:text-sm font-mono text-[#F2F2F2] focus:outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.85)]"
                    >
                      <option value="Engineering Role / Internship">Engineering Role / Internship</option>
                      <option value="Research & Applied AI Collaboration">Research &amp; Applied AI Collaboration</option>
                      <option value="Systems Architecture Consultation">Systems Architecture Consultation</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <TactileInput
                    as="textarea"
                    id="contact-msg"
                    label="Transmission Message *"
                    required
                    rows={5}
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide context regarding the project, timeline, or engineering opportunity..."
                  />
                </div>

                <TactileButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  led="active"
                  className="w-full mt-2"
                >
                  <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}</span>
                </TactileButton>

                <div className="text-[11px] font-mono text-[#666666] text-center flex items-center justify-center gap-1.5 pt-2">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>SECURE INBOX // ANTI-EXPLOITATION RATE LIMITED</span>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
