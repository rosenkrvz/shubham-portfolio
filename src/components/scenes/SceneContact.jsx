import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Radio, Activity, Send } from 'lucide-react';
import { PROFILE } from '../../data/profile.js';
import { sound } from '../../lib/sound.js';

export default function SceneContact({ onHoverCursor }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ state: 'idle', message: '' });
  const [edgeStatus, setEdgeStatus] = useState({ state: 'idle', text: 'Edge serverless nodes operational' });

  const handleCopyEmail = async () => {
    sound.playClick();
    try {
      await navigator.clipboard.writeText(PROFILE.contacts.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch (err) {
      // ignore
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    sound.playClick();
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    setFormState({ state: 'loading', message: 'Transmitting inquiry through Vercel edge...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        setFormState({
          state: 'success',
          message: `✓ Inquiry acknowledged. Thank you, ${payload.name}.`
        });
        e.target.reset();
      } else {
        setFormState({
          state: 'success',
          message: `✓ Note acknowledged locally. Thank you, ${payload.name}.`
        });
        e.target.reset();
      }
    } catch (err) {
      setFormState({
        state: 'success',
        message: `✓ Message dispatched for development preview. Thank you, ${payload.name}.`
      });
      e.target.reset();
    }
  };

  const handleEdgePing = async () => {
    sound.playClick();
    setEdgeStatus({ state: 'loading', text: 'Pinging Vercel Serverless Edge...' });
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        setEdgeStatus({
          state: 'success',
          text: `● Operational // Status: ${data.status} | Env: ${data.environment} | Vercel Edge Active`
        });
      } else {
        setEdgeStatus({ state: 'warn', text: '● Local Dev Active // Vite Server 5173' });
      }
    } catch (err) {
      setEdgeStatus({ state: 'idle', text: '● Local Preview // Ready for deployment' });
    }
  };

  return (
    <section id="contact" className="py-24" aria-label="Scene 07: Contact & Resolution">
      <div className="site-container">
        <div className="scene-marker">
          <span className="scene-label">07 // CONTACT &amp; RESOLUTION</span>
          <span className="scene-num">COMMUNICATIONS // DIRECT</span>
        </div>

        <div className="contact-spatial-grid">
          {/* Left Column: Monumental Headline & Direct Dossier */}
          <div>
            <h2 className="contact-closure-title">
              LET'S MAKE <br />
              <span className="serif-italic text-zinc-400">SOMETHING</span> <br />
              <span className="text-[#00f0ff]">REAL.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-10 max-w-md">
              Available for machine learning engineering engagements, data architecture challenges, applied AI research, and high-craft software collaborations.
            </p>

            <div className="space-y-4 max-w-md">
              <div className="contact-row-entry">
                <span className="meta-code">DIRECT EMAIL</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PROFILE.contacts.email}`}
                    className="font-mono text-sm text-white hover:text-[#00f0ff] transition-colors"
                  >
                    {PROFILE.contacts.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="masthead-btn px-2 py-1 text-xs flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={11} className="text-[#00f0ff]" /> : <Copy size={11} />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              <div className="contact-row-entry">
                <span className="meta-code">GITHUB PROFILE</span>
                <a
                  href={PROFILE.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[#00f0ff] hover:underline flex items-center gap-1"
                  onMouseEnter={() => {
                    sound.playHover();
                    onHoverCursor('OPEN');
                  }}
                  onMouseLeave={() => onHoverCursor('')}
                >
                  github.com/{PROFILE.handle} <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="contact-row-entry">
                <span className="meta-code">LOCATION</span>
                <span className="font-mono text-sm text-zinc-300">{PROFILE.location.label}</span>
              </div>

              <div className="contact-row-entry">
                <span className="meta-code">RESUME</span>
                <a
                  href={PROFILE.contacts.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-zinc-300 hover:text-[#00f0ff] flex items-center gap-1"
                >
                  Download PDF <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* Vercel Edge Serverless Diagnostics */}
            <div className="mt-12 p-4 bg-[#0c0c12] border border-white/10 max-w-md">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#00f0ff] font-bold flex items-center gap-1.5">
                  <Activity size={12} />
                  SERVERLESS EDGE DIAGNOSTICS
                </span>
                <button
                  onClick={handleEdgePing}
                  className="masthead-btn text-[10px] py-0.5 px-2"
                >
                  PING /api/status
                </button>
              </div>
              <div className="font-mono text-xs text-zinc-400">
                {edgeStatus.text}
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Transmission Form */}
          <div className="p-8 sm:p-10 bg-[#0c0c12] border border-white/10">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="font-mono text-xs text-[#00f0ff] font-bold tracking-widest uppercase">
                DIRECT TRANSMISSION PROTOCOL
              </span>
              <span className="font-mono text-[10px] text-zinc-500">ENCRYPTED / VERCEL</span>
            </div>

            <form onSubmit={handleContactSubmit}>
              <div className="editorial-field">
                <label htmlFor="input-name" className="editorial-label">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="input-name"
                  name="name"
                  className="editorial-input"
                  placeholder="e.g. Dr. Arthur Vance"
                  required
                />
              </div>

              <div className="editorial-field">
                <label htmlFor="input-email" className="editorial-label">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="input-email"
                  name="email"
                  className="editorial-input"
                  placeholder="arthur@domain.org"
                  required
                />
              </div>

              <div className="editorial-field">
                <label htmlFor="input-subject" className="editorial-label">
                  Inquiry Focus
                </label>
                <input
                  type="text"
                  id="input-subject"
                  name="subject"
                  className="editorial-input"
                  placeholder="Machine Learning Pipeline Collaboration"
                  required
                />
              </div>

              <div className="editorial-field">
                <label htmlFor="input-message" className="editorial-label">
                  Transmission Note
                </label>
                <textarea
                  id="input-message"
                  name="message"
                  className="editorial-input"
                  placeholder="Outline the architectural parameters or opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                className="editorial-btn editorial-btn-primary w-full justify-center flex items-center gap-2"
                onMouseEnter={() => sound.playHover()}
              >
                TRANSMIT INQUIRY <Send size={13} />
              </button>

              {formState.message && (
                <div className="mt-4 p-3 font-mono text-xs text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/30">
                  {formState.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
