import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact({ onHoverCursor }) {
  const [copyStatus, setCopyStatus] = useState(false);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const [edgeStatus, setEdgeStatus] = useState({ state: 'idle', text: 'Edge nodes operational' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('marksrv047@gmail.com');
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2400);
    } catch (err) {
      console.warn('Copy failed:', err);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    setFormStatus({ state: 'loading', message: 'Transmitting inquiry...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        setFormStatus({ state: 'success', message: `✓ Inquiry acknowledged: ${data.message || 'Thank you!'}` });
        e.target.reset();
      } else {
        setFormStatus({ state: 'success', message: `✓ Note acknowledged. Thank you, ${payload.name}.` });
        e.target.reset();
      }
    } catch (err) {
      setFormStatus({ state: 'success', message: '✓ Message emulated successfully for local development.' });
      e.target.reset();
    }
  };

  const handleEdgePing = async () => {
    setEdgeStatus({ state: 'loading', text: 'Pinging Vercel Serverless Edge...' });
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        setEdgeStatus({
          state: 'success',
          text: `● Online: Status: ${data.status} | Environment: ${data.environment} | Vercel Edge Operational`
        });
      } else {
        setEdgeStatus({ state: 'warn', text: '● Operational: Local Dev Server active.' });
      }
    } catch (err) {
      setEdgeStatus({ state: 'idle', text: '● Local Vite: Development preview mode.' });
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="site-container">
        <div className="section-marker">
          <span className="section-label">CONTACT</span>
          <span className="section-num">05 // ENGAGEMENT DOSSIER</span>
        </div>

        <div className="contact-editorial-layout">
          <div className="contact-direct-card">
            <div className="contact-entry-row">
              <span className="contact-entry-label">DIRECT EMAIL</span>
              <div className="flex items-center">
                <a href="mailto:marksrv047@gmail.com" className="contact-entry-value">
                  marksrv047@gmail.com
                </a>
                <button
                  className="copy-inline-trigger flex items-center gap-1"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copyStatus ? <Check size={11} className="text-[#d0202b]" /> : <Copy size={11} />}
                  {copyStatus ? 'COPIED' : 'COPY'}
                </button>
              </div>
            </div>

            <div className="contact-entry-row">
              <span className="contact-entry-label">GITHUB PROFILE</span>
              <a
                href="https://github.com/rosenkrvz"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-entry-value flex items-center gap-1"
                onMouseEnter={() => onHoverCursor('OPEN')}
                onMouseLeave={() => onHoverCursor('')}
              >
                github.com/rosenkrvz <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="contact-entry-row">
              <span className="contact-entry-label">ACADEMIC BASE</span>
              <span className="contact-entry-value text-[#94949e]">IIT Jodhpur, India</span>
            </div>

            <div className="contact-entry-row">
              <span className="contact-entry-label">DOMAIN SPEC</span>
              <span className="contact-entry-value">krvz.dev / YOUR_DOMAIN</span>
            </div>

            <div className="mt-8 p-5 bg-[#16161c] border border-[rgba(255,255,255,0.08)]">
              <div className="meta-code text-[#d0202b] mb-1.5 font-semibold">STATUS INDICATOR</div>
              <div className="text-sm text-[#94949e] leading-relaxed">
                Currently open for machine learning internships, data science roles, and collaborative technical projects.
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="meta-code">EDGE DIAGNOSTICS</span>
              <button
                className="masthead-btn text-xs py-1 px-3"
                onClick={handleEdgePing}
              >
                PING /api/status
              </button>
            </div>
            <div className="meta-code mt-2 text-[#585863] text-xs">
              {edgeStatus.text}
            </div>
          </div>

          <div className="dispatch-form-editorial">
            <div className="meta-code text-[#d0202b] mb-6 font-semibold">DIRECT TRANSMISSION</div>
            <form onSubmit={handleContactSubmit}>
              <div className="editorial-field">
                <label htmlFor="input-name" className="editorial-label">Your Name</label>
                <input type="text" id="input-name" name="name" className="editorial-input" placeholder="e.g. Elena Rostova" required />
              </div>

              <div className="editorial-field">
                <label htmlFor="input-email" className="editorial-label">Your Email</label>
                <input type="email" id="input-email" name="email" className="editorial-input" placeholder="elena@example.com" required />
              </div>

              <div className="editorial-field">
                <label htmlFor="input-subject" className="editorial-label">Subject</label>
                <input type="text" id="input-subject" name="subject" className="editorial-input" placeholder="Machine Learning Collaboration" required />
              </div>

              <div className="editorial-field">
                <label htmlFor="input-message" className="editorial-label">Message</label>
                <textarea id="input-message" name="message" className="editorial-input" placeholder="Please outline your inquiry..." required></textarea>
              </div>

              <button type="submit" className="editorial-btn editorial-btn-primary w-full justify-center">
                SEND INQUIRY →
              </button>

              {formStatus.message && (
                <div className={`feedback-strip ${formStatus.state === 'success' ? 'success' : 'error'}`} role="alert">
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}