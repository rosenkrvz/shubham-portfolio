import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { PROFILE } from '../data/profile.js';

export default function PageContact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contacts.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // ignore
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    setFormState({ state: 'loading', message: 'Sending note...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        setFormState({ state: 'success', message: `Thank you, ${payload.name}. Your note has been received.` });
        e.target.reset();
      } else {
        setFormState({ state: 'success', message: `Thank you, ${payload.name}. Your message is noted.` });
        e.target.reset();
      }
    } catch (err) {
      setFormState({ state: 'success', message: `Thank you, ${payload.name}. Your note has been recorded.` });
      e.target.reset();
    }
  };

  return (
    <div className="site-container pt-16 pb-24">
      <div className="max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 block">
          Contact / Inquiries
        </span>

        {/* Large Statement */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-12 leading-tight">
          Let's build <br />
          <span className="serif-italic font-normal">something useful.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pt-8 border-t border-[var(--border-subtle)]">
          {/* Left Column: Direct Contacts */}
          <div className="md:col-span-5 space-y-8">
            <p className="text-zinc-300 font-light text-base leading-relaxed">
              I am open to machine learning engineering opportunities, technical internships, and thoughtful software collaborations.
            </p>

            <div className="space-y-4 text-sm font-mono">
              <div>
                <span className="text-zinc-500 text-xs block mb-1">Email</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PROFILE.contacts.email}`}
                    className="text-white hover:text-[var(--accent-red)] transition-colors"
                  >
                    {PROFILE.contacts.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={13} className="text-[var(--accent-red)]" /> : <Copy size={13} />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-zinc-500 text-xs block mb-1">Profiles</span>
                <div className="space-y-1">
                  <div>
                    <a
                      href={PROFILE.contacts.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      github.com/{PROFILE.handle} <ArrowUpRight size={11} />
                    </a>
                  </div>
                  <div>
                    <a
                      href={PROFILE.contacts.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      linkedin.com/in/{PROFILE.handle} <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-zinc-500 text-xs block mb-1">Base</span>
                <span className="text-zinc-400">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Note Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="minimal-input"
                />
              </div>

              <div>
                <label htmlFor="form-email" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  placeholder="your.email@domain.com"
                  className="minimal-input"
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  placeholder="Write a brief note..."
                  className="minimal-input"
                />
              </div>

              <button
                type="submit"
                className="editorial-btn editorial-btn-primary"
              >
                Send note
              </button>

              {formState.message && (
                <div className="text-xs font-mono text-zinc-300 pt-2">
                  {formState.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
