import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx';
import { profile } from '../data/profile.js';

export default function Footer({ onCopyEmail }) {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[#27272A]/50 bg-[#09090B] mt-auto relative z-10 text-[#9A9A9A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#27272A]/40">
          
          {/* Identity */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-[#FAFAFA]">
              <span className="font-semibold tracking-tight text-base font-display uppercase">Shubham Sharma</span>
            </div>
            <p className="type-body-sm leading-relaxed text-[#B0B0B0]">
              Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur).
            </p>
            <div className="type-label text-[#9A9A9A]">
              Jodhpur, Rajasthan, India
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="type-label uppercase tracking-wider text-[#FAFAFA] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 type-body-sm text-[#B0B0B0]">
              <li>
                <Link to="/home" className="hover:text-[#FAFAFA] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#FAFAFA] transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/ai-data" className="hover:text-[#FAFAFA] transition-colors">AI &amp; Data</Link>
              </li>
              <li>
                <Link to="/experiments" className="hover:text-[#FAFAFA] transition-colors">Digital Lab</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FAFAFA] transition-colors">About &amp; Dossier</Link>
              </li>
              <li>
                <Link to="/github" className="hover:text-[#FAFAFA] transition-colors">Code &amp; Open Source</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-[#FAFAFA] transition-colors">Certificates &amp; Honors</Link>
              </li>
            </ul>
          </div>

          {/* Links & Documents */}
          <div className="space-y-2">
            <h4 className="type-label uppercase tracking-wider text-[#FAFAFA] mb-3">
              Information
            </h4>
            <ul className="space-y-2.5 type-body-sm text-[#B0B0B0]">
              <li>
                <Link to="/privacy" className="hover:text-[#FAFAFA] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9A9A9A]" />
                  <span>Privacy Statement</span>
                </Link>
              </li>
              <li>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FAFAFA] transition-colors"
                >
                  Sitemap (XML)
                </a>
              </li>
              <li>
                <a 
                  href={profile.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#FAFAFA] transition-colors"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="type-label uppercase tracking-wider text-[#FAFAFA] mb-3">
              Direct Contact
            </h4>
            <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
              Available for machine learning internships, data science research, and computational engineering.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onCopyEmail?.(profile.email)}
                className="type-body-sm font-mono text-[#FAFAFA] hover:text-[#B0B0B0] transition-colors text-left truncate block underline underline-offset-4 cursor-pointer"
                title="Click to copy email address"
              >
                {profile.email}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 type-label text-[#9A9A9A]">
          <div>
            &copy; {currentYear} Shubham Sharma. IIT Jodhpur.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAFAFA] flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAFAFA] flex items-center gap-1.5 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#FAFAFA] flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
