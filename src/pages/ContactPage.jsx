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
      <div className="min-h-screen py-24 md:py-32 bg-[#0A0D12] text-[#F8FAFC] bg-crosshair-pattern">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">

          {/* Editorial Section Statement */}
          <div className="space-y-6 border-b border-[rgba(255,255,255,0.08)] pb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101318] border border-[rgba(255,255,255,0.08)] type-label text-[#94A3B8]">
              <StatusIndicator status="online" size="sm" />
              <span className="tracking-wider uppercase">COMMUNICATION // INQUIRIES &amp; COLLABORATION</span>
            </div>

            <h1 className="type-hero font-medium font-display uppercase tracking-tight text-[#F8FAFC] leading-[0.95]">
              LET'S BUILD <br />
              <span className="font-serif-editorial italic font-normal lowercase text-white mr-3">
                something
              </span>
              INTERESTING.
            </h1>

            <p className="type-body-lg text-[#94A3B8] max-w-[65ch] font-normal leading-relaxed">
              Available for machine learning research internships, data science roles, and computational software engineering. Direct communication channels are reviewed daily.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column: Direct Nodes & Verified Coordinates */}
            <div className="lg:col-span-5 space-y-6">

              {/* Direct Mail Node */}
              <div className="p-6 sm:p-8 bg-[#101318] border border-[rgba(255,255,255,0.08)] rounded-xl space-y-4 shadow-md">
                <div className="flex items-center justify-between type-label text-[#94A3B8] uppercase tracking-wider">
                  <span>Direct Communication</span>
                  <StatusIndicator status="active" size="sm" />
                </div>
                
                <div className="text-base font-mono font-medium text-[#F8FAFC] select-all break-all">
                  {profile.email}
                </div>

                <TactileButton
                  variant="hardware"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
                </TactileButton>
              </div>

              {/* Verified Identities */}
              <div className="p-6 sm:p-8 bg-[#101318] border border-[rgba(255,255,255,0.08)] rounded-xl space-y-4 shadow-md">
                <div className="type-label uppercase tracking-wider text-[#94A3B8]">
                  Verified Profiles
                </div>
                
                <div className="space-y-2.5 type-label">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#0A0D12] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.2)] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4" />
                      <span>github.com/rosenkrvz</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>

                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-lg bg-[#0A0D12] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.2)] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>linkedin.com/in/rosenkrvz</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                </div>
              </div>

              {/* SLA Notice */}
              <div className="p-4 bg-[#101318] border border-[rgba(255,255,255,0.06)] rounded-xl flex items-center gap-3 type-label text-[#94A3B8]">
                <Clock className="w-4 h-4 text-[#94A3B8] shrink-0" />
                <span>RESPONSE TIME: TYPICALLY WITHIN 24 HOURS</span>
              </div>

            </div>

            {/* Right Column: Transmission Form Panel */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-6"
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

                  <div className="space-y-1.5">
                    <label className="type-label uppercase tracking-wider text-[#B0B0B0] block" htmlFor="contact-topic">
                      Topic
                    </label>
                    <select
                      id="contact-topic"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-[4px] bg-[#09090B] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.16)] focus:border-[#FAFAFA]/40 type-body-sm font-sans text-[#FAFAFA] focus:outline-none transition-colors"
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
                    label="Message *"
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
                  className="w-full"
                >
                  <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </TactileButton>

                <div className="type-label text-[#9A9A9A] text-center flex items-center justify-center gap-1.5 pt-2">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>DIRECT INBOX // NO SPAM GUARANTEE</span>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
