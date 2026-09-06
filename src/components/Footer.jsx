import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx';
import { profile } from '../data/profile.js';

export default function Footer({ onCopyEmail }) {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[#1E1E23] bg-[#0C0C0E] mt-auto relative z-10 text-xs text-[#8E8D96]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#1E1E23]">
          
          {/* Identity */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-[#F4F4F2]">
              <span className="font-semibold tracking-tight text-sm">Shubham Sharma</span>
            </div>
            <p className="text-xs leading-relaxed text-[#8E8D96]">
              Applied AI &amp; Data Science at the Indian Institute of Technology Jodhpur (IIT Jodhpur).
            </p>
            <div className="text-[11px] text-[#65656E]">
              Jodhpur, Rajasthan, India
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#F4F4F2] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-[#F4F4F2] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F4F4F2] transition-colors">About &amp; Dossier</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F4F4F2] transition-colors">Selected Projects</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-[#F4F4F2] transition-colors">Certificates &amp; Honors</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F4F4F2] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Links & Documents */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#F4F4F2] mb-3">
              Information
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-[#F4F4F2] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8E8D96]" />
                  <span>Privacy Statement</span>
                </Link>
              </li>
              <li>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#F4F4F2] transition-colors"
                >
                  Sitemap (XML)
                </a>
              </li>
              <li>
                <a 
                  href={profile.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#F4F4F2] transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#F4F4F2] mb-3">
              Direct Contact
            </h4>
            <p className="text-xs text-[#8E8D96]">
              Available for software engineering roles, machine learning internships, and technical research.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onCopyEmail?.(profile.email)}
                className="text-xs font-mono text-[#F4F4F2] hover:text-[#6366F1] transition-colors text-left truncate block"
                title="Click to copy email address"
              >
                {profile.email}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#65656E]">
          <div>
            © {currentYear} Shubham Sharma. Designed with precision.
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F4F2] flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F4F2] flex items-center gap-1.5 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#F4F4F2] flex items-center gap-1.5 transition-colors"
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
