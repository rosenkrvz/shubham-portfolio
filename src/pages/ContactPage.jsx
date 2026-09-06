import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Copy, Check, Send, ArrowRight, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons.jsx';
import { profile } from '../data/profile.js';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ContactPage({ onShowToast }) {
  const navigate = useNavigate();

  usePageMeta({
    title: 'Contact — Shubham Sharma | IIT Jodhpur',
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
      message: `Email copied to clipboard: ${profile.email}`
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
        message: `Message sent! Thank you, ${trimmedName}.`
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
    <div className="min-h-screen py-14 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#1C1C22] pb-10">
          <div className="inline-flex items-center gap-2 text-xs text-[#818CF8] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
            <span>06 // Transmission</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#F4F4F0]">
            Initiate <span className="font-serif-editorial italic text-white font-normal">Contact.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9E9EA8] max-w-2xl leading-relaxed">
            Available for software engineering internships, machine learning research roles, and technical collaborations. Send a note directly or reach out via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#121215] border border-[#1E1E24] space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#65656E] font-medium">
                Email Directly
              </div>
              <div className="text-base font-semibold text-[#F4F4F2]">
                {profile.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#18181F] hover:bg-[#22222A] border border-[#25252E] text-xs text-[#F4F4F2] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#8E8D96]" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Profile Links */}
            <div className="p-6 rounded-2xl bg-[#121215] border border-[#1E1E24] space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#65656E] font-medium">
                Professional Profiles
              </div>
              <div className="space-y-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#18181F] text-xs text-[#8E8D96] hover:text-[#F4F4F2] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub / rosenkrvz</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#18181F] text-xs text-[#8E8D96] hover:text-[#F4F4F2] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn / rosenkrvz</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Response Timeline */}
            <div className="flex items-center gap-2.5 text-xs text-[#8E8D96] px-2">
              <Clock className="w-4 h-4 text-[#6366F1]" />
              <span>Typically replies within 24 hours</span>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-[#1E1E24] space-y-5">
              
              {/* Hidden Anti-Bot Honeypot */}
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

              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#F4F4F2]" htmlFor="contact-name">
                  Your Name <span className="text-[#6366F1]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161B] border border-[#22222A] text-xs text-[#F4F4F2] placeholder-[#65656E] focus:outline-none focus:border-[#4338CA]"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#F4F4F2]" htmlFor="contact-email">
                  Email Address <span className="text-[#6366F1]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={120}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161B] border border-[#22222A] text-xs text-[#F4F4F2] placeholder-[#65656E] focus:outline-none focus:border-[#4338CA]"
                />
              </div>

              {/* Topic Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#F4F4F2]" htmlFor="contact-topic">
                  Topic of Discussion
                </label>
                <select
                  id="contact-topic"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161B] border border-[#22222A] text-xs text-[#F4F4F2] focus:outline-none focus:border-[#4338CA]"
                >
                  <option value="Engineering Role / Internship">Engineering Role / Internship</option>
                  <option value="Research & Academic Collaboration">Research &amp; Academic Collaboration</option>
                  <option value="Technical Project Inquiry">Technical Project Inquiry</option>
                  <option value="General Conversation">General Conversation</option>
                </select>
              </div>

              {/* Message Body */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-semibold text-[#F4F4F2]" htmlFor="contact-message">
                    Message <span className="text-[#6366F1]">*</span>
                  </label>
                  <span className="text-[11px] text-[#65656E]">
                    {formData.message.length} / 2000
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project, or topic you would like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#16161B] border border-[#22222A] text-xs text-[#F4F4F2] placeholder-[#65656E] focus:outline-none focus:border-[#4338CA] leading-relaxed resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] disabled:opacity-50 text-white text-xs font-semibold tracking-wide transition-colors shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
