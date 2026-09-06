import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, Server, ArrowLeft, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy — Shubham Sharma',
    description: 'Privacy policy and data transparency statement for Shubham Sharma\'s portfolio. Zero tracking cookies, no surveillance scripts, client-side static delivery.',
    path: '/privacy'
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
      {/* Back button */}
      <div className="mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-[#94949E] hover:text-[#F4F4F2] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-[#222226] pb-8 mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#818CF8] mb-3 block">
          Transparency &amp; Data
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-medium text-[#F4F4F2] tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-[#6B6B76]">
          Last updated: September 2026
        </p>
      </div>

      {/* Core Principles Pill Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-5 rounded-xl bg-[#141417] border border-[#222226]">
          <EyeOff className="w-4 h-4 text-[#818CF8] mb-3" />
          <h2 className="text-xs uppercase font-medium tracking-wider text-[#F4F4F2] mb-1">Zero Trackers</h2>
          <p className="text-xs text-[#94949E] leading-relaxed">No marketing scripts, tracking pixels, or third-party behavioral analytics.</p>
        </div>
        <div className="p-5 rounded-xl bg-[#141417] border border-[#222226]">
          <Lock className="w-4 h-4 text-[#818CF8] mb-3" />
          <h2 className="text-xs uppercase font-medium tracking-wider text-[#F4F4F2] mb-1">No Cookies</h2>
          <p className="text-xs text-[#94949E] leading-relaxed">This site does not set persistent tracking cookies or session identifiers.</p>
        </div>
        <div className="p-5 rounded-xl bg-[#141417] border border-[#222226]">
          <Server className="w-4 h-4 text-[#818CF8] mb-3" />
          <h2 className="text-xs uppercase font-medium tracking-wider text-[#F4F4F2] mb-1">Static Delivery</h2>
          <p className="text-xs text-[#94949E] leading-relaxed">Hosted statically on edge infrastructure with standard encrypted TLS 1.3.</p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-12 text-sm text-[#94949E] leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-medium text-[#F4F4F2] flex items-center gap-2">
            <span className="text-xs font-mono text-[#818CF8]">01</span>
            <span>Information Collection &amp; Scope</span>
          </h2>
          <p>
            This portfolio is constructed as a personal showcase of software engineering and machine learning projects. It does not collect, sell, or monetize personal information. There are no user accounts, database profiles, or targeted ad networks integrated into this website.
          </p>
          <p>
            When you visit this site, standard edge server request logs (such as IP address, user agent, and timestamp) are processed transiently by edge hosting services (Vercel) solely to deliver assets and protect against denial-of-service attempts.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-medium text-[#F4F4F2] flex items-center gap-2">
            <span className="text-xs font-mono text-[#818CF8]">02</span>
            <span>Direct Communications</span>
          </h2>
          <p>
            The contact form is provided for direct academic collaborations, project inquiries, and career opportunities. Information you submit (name, email address, message) is sent to{' '}
            <a href="mailto:marksrv047@gmail.com" className="text-[#F4F4F2] hover:text-[#818CF8] underline">
              marksrv047@gmail.com
            </a>.
          </p>
          <p>
            Your email address will never be shared with advertisers or added to automated mailing lists. It is used strictly for personal correspondence with Shubham Sharma.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-medium text-[#F4F4F2] flex items-center gap-2">
            <span className="text-xs font-mono text-[#818CF8]">03</span>
            <span>Security &amp; Encryption</span>
          </h2>
          <p>
            All connections to this website are secured with HTTPS and Transport Layer Security (TLS 1.3). Standard security practices including Content Security Policies and frame protection are configured to safeguard visitor sessions.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-medium text-[#F4F4F2] flex items-center gap-2">
            <span className="text-xs font-mono text-[#818CF8]">04</span>
            <span>Open Source Repository</span>
          </h2>
          <p>
            The source code for this portfolio is open and inspectable on GitHub at{' '}
            <a
              href="https://github.com/rosenkrvz/shubham-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4F4F2] hover:text-[#818CF8] underline"
            >
              github.com/rosenkrvz/shubham-portfolio
            </a>.
          </p>
        </section>

        {/* Contact Footer Box */}
        <div className="p-6 rounded-xl bg-[#141417] border border-[#222226] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
          <div>
            <h3 className="text-sm font-medium text-[#F4F4F2]">Questions or Verification?</h3>
            <p className="text-xs text-[#94949E] mt-1">Direct inquiries regarding security or data handling are always welcome.</p>
          </div>
          <a
            href="mailto:marksrv047@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1F1F24] hover:bg-[#4338CA] text-xs font-medium text-[#F4F4F2] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>marksrv047@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
