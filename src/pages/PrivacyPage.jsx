import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, EyeOff, Server, ArrowLeft, Mail, FileText } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy & Telemetry Notice',
    description: 'Privacy policy and data transparency statement for Shubham Sharma\'s systems portfolio. Zero trackers, no third-party cookies, client-side execution.',
    path: '/privacy'
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#8E8D8A] hover:text-[#F0F0EE] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>RETURN TO HOME TERMINAL</span>
        </Link>
      </div>

      {/* Header */}
      <div className="border-b border-[#232326] pb-8 mb-10">
        <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#3E2CF0] uppercase mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>DATA INTEGRITY &amp; TRANSPARENCY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-semibold text-[#F0F0EE] tracking-tight">
          Privacy Policy &amp; Telemetry Notice
        </h1>
        <p className="mt-3 text-sm font-mono text-[#8E8D8A]">
          EFFECTIVE DATE: SEPTEMBER 2026 · CANONICAL REVISION: PATCH 0.1.4 · STATUS: VERIFIED
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 text-sm text-[#A0A09C] leading-relaxed">
        {/* Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-[#141416] border border-[#232326]">
            <EyeOff className="w-5 h-5 text-[#3E2CF0] mb-2" />
            <h2 className="font-mono text-xs uppercase text-[#F0F0EE] font-semibold mb-1">Zero Trackers</h2>
            <p className="text-xs text-[#8E8D8A]">No Google Analytics, Meta pixels, or surveillance scripts are loaded.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#141416] border border-[#232326]">
            <Lock className="w-5 h-5 text-[#3E2CF0] mb-2" />
            <h2 className="font-mono text-xs uppercase text-[#F0F0EE] font-semibold mb-1">No Cookies</h2>
            <p className="text-xs text-[#8E8D8A]">This portfolio uses zero tracking cookies and sets zero session identifiers.</p>
          </div>
          <div className="p-4 rounded-lg bg-[#141416] border border-[#232326]">
            <Server className="w-5 h-5 text-[#3E2CF0] mb-2" />
            <h2 className="font-mono text-xs uppercase text-[#F0F0EE] font-semibold mb-1">Client Execution</h2>
            <p className="text-xs text-[#8E8D8A]">Dither and silicon benchmarks run strictly in your local browser runtime.</p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-semibold text-[#F0F0EE] flex items-center gap-2">
            <span className="font-mono text-xs text-[#3E2CF0]">01 //</span>
            Information Collection &amp; Scope
          </h2>
          <p>
            This portfolio is constructed as a static engineering showcase and digital notebook. It does not collect, log, aggregate, or monetize personal information. We do not maintain user accounts, databases of visitors, or ad-targeting integrations.
          </p>
          <p>
            When you visit this site, standard edge server request logs (such as IP address, user agent, and timestamp) are processed transiently by our edge hosting platform (Vercel) solely to deliver assets and mitigate DDoS attacks. No cross-site profiling is conducted.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-semibold text-[#F0F0EE] flex items-center gap-2">
            <span className="font-mono text-xs text-[#3E2CF0]">02 //</span>
            Communications &amp; Contact Terminal
          </h2>
          <p>
            The transmission terminal on this site is designed for professional inquiries, technical collaboration, and recruitment communication. Any information you voluntarily provide (such as your name, email address, and message content) is delivered directly to{' '}
            <a href="mailto:marksrv047@gmail.com" className="text-[#F0F0EE] underline hover:text-[#3E2CF0]">
              marksrv047@gmail.com
            </a>.
          </p>
          <p>
            Your email address and messages will never be sold, rented, leased, or added to automated marketing lists. They are used exclusively for direct bilateral communication with Shubham Sharma.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-semibold text-[#F0F0EE] flex items-center gap-2">
            <span className="font-mono text-xs text-[#3E2CF0]">03 //</span>
            Local Storage &amp; Edge Execution
          </h2>
          <p>
            The interactive engineering modules (such as the 1-Bit Dither Quantizer and Edge Silicon Inference Latency Matrix) execute purely within your browser’s WebGL and JavaScript engine. No canvas data or device telemetry is transmitted upstream to external servers.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-semibold text-[#F0F0EE] flex items-center gap-2">
            <span className="font-mono text-xs text-[#3E2CF0]">04 //</span>
            Security &amp; Encryption
          </h2>
          <p>
            All production traffic is strictly encrypted using modern Transport Layer Security (TLS 1.3 / HTTPS). Standard security headers—including Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and X-Frame-Options—are enforced to protect visitors against cross-site scripting and frame hijacking.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-base font-display font-semibold text-[#F0F0EE] flex items-center gap-2">
            <span className="font-mono text-xs text-[#3E2CF0]">05 //</span>
            Open Source &amp; Licensing
          </h2>
          <p>
            The source code for this portfolio is publicly inspectable and governed under the MIT License on GitHub at{' '}
            <a
              href="https://github.com/rosenkrvz/shubham-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F0F0EE] underline hover:text-[#3E2CF0]"
            >
              github.com/rosenkrvz/shubham-portfolio
            </a>.
          </p>
        </section>

        {/* Contact Footer Box */}
        <div className="p-6 rounded-lg bg-[#141416] border border-[#232326] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
          <div>
            <h3 className="text-sm font-semibold text-[#F0F0EE]">Questions or Verification Requests?</h3>
            <p className="text-xs text-[#8E8D8A] mt-1">Direct inquiries regarding security or data handling can be sent anytime.</p>
          </div>
          <a
            href="mailto:marksrv047@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#232326] hover:bg-[#3E2CF0] text-xs font-mono text-[#F0F0EE] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>marksrv047@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
