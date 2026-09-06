import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx';
import { profile } from '../data/profile.js';

export default function Footer({ onCopyEmail }) {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[#27272A]/50 bg-[#09090B] mt-auto relative z-10 text-xs text-[#71717A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#27272A]/40">
          
          {/* Identity */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-[#FAFAFA]">
              <span className="font-medium tracking-tight text-sm font-display uppercase">Shubham Sharma</span>
            </div>
            <p className="text-xs leading-relaxed text-[#A1A1AA]">
              Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur).
            </p>
            <div className="text-[11px] font-mono text-[#71717A]">
              Jodhpur, Rajasthan, India
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium font-mono uppercase tracking-wider text-[#FAFAFA] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <Link to="/home" className="hover:text-[#FAFAFA] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FAFAFA] transition-colors">About &amp; Dossier</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#FAFAFA] transition-colors">Selected Projects</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-[#FAFAFA] transition-colors">Certificates &amp; Honors</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FAFAFA] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Links & Documents */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium font-mono uppercase tracking-wider text-[#FAFAFA] mb-3">
              Information
            </h4>
            <ul className="space-y-2 text-[#A1A1AA]">
              <li>
                <Link to="/privacy" className="hover:text-[#FAFAFA] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#71717A]" />
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
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium font-mono uppercase tracking-wider text-[#FAFAFA] mb-3">
              Direct Contact
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Available for software engineering roles, machine learning internships, and technical research.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onCopyEmail?.(profile.email)}
                className="text-xs font-mono text-[#FAFAFA] hover:text-[#FAFAFA]/70 transition-colors text-left truncate block underline underline-offset-4"
                title="Click to copy email address"
              >
                {profile.email}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#71717A]">
          <div>
            © {currentYear} Shubham Sharma. Designed with precision.
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
