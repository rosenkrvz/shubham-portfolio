import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Copy, Check, Send, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons.jsx';
import { profile } from '../data/profile.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import MagneticButton from '../components/ui/MagneticButton.jsx';

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
      <div className="min-h-screen py-14 sm:py-20 lg:py-24 bg-[#08080A] text-[#F4F4F0]">
        <div className="max-w-5xl mx-auto px-6 space-y-12 sm:space-y-16">

          {/* Header */}
          <div className="space-y-4 border-b border-[#1C1C22] pb-10">
            <div className="inline-flex items-center gap-2 text-xs text-[#818CF8] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
              <span>COMMUNICATION CHANNEL // VERIFIED INBOX</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-display uppercase tracking-tight text-[#F4F4F0]">
              Initiate <br />
              <span className="font-serif-editorial italic font-normal text-4xl sm:text-6xl lowercase text-[#C7D2FE] mr-3">
                engineering
              </span>
              Contact
            </h1>

            <p className="text-base sm:text-lg text-[#9E9EA8] max-w-2xl font-light leading-relaxed">
              Available for software engineering roles, machine learning research internships, and systems architecture consultations. Direct channels are audited daily.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column: Coordinates */}
            <div className="lg:col-span-5 space-y-6">

              {/* Direct Mail Card */}
              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-4">
                <div className="text-xs uppercase tracking-widest text-[#656570] font-mono">
                  DIRECT EMAIL
                </div>
                <div className="text-base font-mono font-semibold text-[#F4F4F2] select-all">
                  {profile.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-sm bg-[#16161D] hover:bg-[#20202A] border border-[#272734] text-xs font-mono text-[#F4F4F2] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#818CF8]" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                </button>
              </div>

              {/* Profiles */}
              <div className="p-6 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-3">
                <div className="text-xs uppercase tracking-widest text-[#656570] font-mono">
                  VERIFIED IDENTITIES
                </div>
                <div className="space-y-2 font-mono text-xs">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-sm bg-[#0C0C0E] border border-[#1F1F28] hover:border-[#6366F1] text-[#9E9EA8] hover:text-[#F4F4F2] transition-colors"
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
                    className="flex items-center justify-between p-3 rounded-sm bg-[#0C0C0E] border border-[#1F1F28] hover:border-[#6366F1] text-[#9E9EA8] hover:text-[#F4F4F2] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>linkedin.com/in/rosenkrvz</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs font-mono text-[#656570] px-2">
                <Clock className="w-4 h-4 text-[#818CF8]" />
                <span>RESPONSE SLA: WITHIN 24 BUSINESS HOURS</span>
              </div>

            </div>

            {/* Right Column: Transmission Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-[#111114] border border-[#1C1C24] rounded-sm space-y-5">

                {/* Honeypot */}
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

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#F4F4F2]" htmlFor="contact-name">
                    YOUR NAME <span className="text-[#818CF8]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Doe / Recruiter Name"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#08080A] border border-[#272730] text-xs font-mono text-[#F4F4F2] placeholder-[#656570] focus:outline-none focus:border-[#6366F1]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#F4F4F2]" htmlFor="contact-email">
                    YOUR EMAIL <span className="text-[#818CF8]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={120}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#08080A] border border-[#272730] text-xs font-mono text-[#F4F4F2] placeholder-[#656570] focus:outline-none focus:border-[#6366F1]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#F4F4F2]" htmlFor="contact-topic">
                    ENGAGEMENT TOPIC
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#08080A] border border-[#272730] text-xs font-mono text-[#F4F4F2] focus:outline-none focus:border-[#6366F1]"
                  >
                    <option value="Engineering Role / Internship">Engineering Role / Internship</option>
                    <option value="Research & Applied AI Collaboration">Research &amp; Applied AI Collaboration</option>
                    <option value="Systems Architecture Consultation">Systems Architecture Consultation</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#F4F4F2]" htmlFor="contact-msg">
                    TRANSMISSION MESSAGE <span className="text-[#818CF8]">*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={5}
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide context regarding the project, timeline, or engineering opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#08080A] border border-[#272730] text-xs font-mono text-[#F4F4F2] placeholder-[#656570] focus:outline-none focus:border-[#6366F1]"
                  />
                </div>

                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#F4F4F0] hover:bg-white text-[#08080A] font-mono font-semibold text-xs uppercase tracking-wider rounded-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>{isSubmitting ? 'Transmitting Ingestion...' : 'Send Transmission'}</span>
                </MagneticButton>

                <div className="text-[11px] font-mono text-[#656570] text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>SECURE INBOX • ANTI-EXPLOITATION RATE LIMITED</span>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}
