import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons.jsx';
import { profile } from '../data/profile.js';

export default function Footer({ onCopyEmail }) {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-[#1F1F24] bg-[#0B0B0C] mt-auto relative z-10 text-xs text-[#85858B]">
      {/* Top Colophon strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#1F1F24]">
          
          {/* Brand and Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-[#F0F0EE]">
              <span className="text-[#3E2CF0] font-bold text-sm">✦</span>
              <span className="font-semibold tracking-tight text-sm">Raster Sentinel</span>
            </div>
            <p className="text-xs leading-relaxed text-[#85858B]">
              High-consequence artificial intelligence, edge silicon attestation, and distributed computing architectures.
            </p>
            <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-[#3E2CF0]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3E2CF0] animate-pulse"></span>
              <span>IIT Jodhpur Applied AI Node</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-2">
            <h4 className="font-mono uppercase text-[10px] tracking-widest text-[#F0F0EE] mb-3">
              Architecture
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-[#F0F0EE] transition-colors">Platform Overview</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F0F0EE] transition-colors">Engineer Dossier</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F0F0EE] transition-colors">Deployed Systems</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-[#F0F0EE] transition-colors">Verified Credentials</Link>
              </li>
              <li>
                <Link to="/lab" className="hover:text-[#F0F0EE] transition-colors">AI Research Lab</Link>
              </li>
            </ul>
          </div>

          {/* Verification & Security */}
          <div className="space-y-2">
            <h4 className="font-mono uppercase text-[10px] tracking-widest text-[#F0F0EE] mb-3">
              Verification &amp; Trust
            </h4>
            <ul className="space-y-2 font-mono text-[11px]">
              <li className="flex items-center gap-1.5 text-[#A1A1AA]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E2CF0]" />
                <span>Zero-Trust Architecture</span>
              </li>
              <li className="flex items-center gap-1.5 text-[#A1A1AA]">
                <Terminal className="w-3.5 h-3.5 text-[#3E2CF0]" />
                <span>Deterministic Latency</span>
              </li>
              <li className="text-[#85858B]">
                Repository: <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-[#F0F0EE] hover:underline">rosenkrvz/portfolio</a>
              </li>
            </ul>
          </div>

          {/* Dispatch & Contact */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase text-[10px] tracking-widest text-[#F0F0EE] mb-3">
              Operator Channel
            </h4>
            <div className="p-3 rounded bg-[#111113] border border-[#1F1F24] space-y-2">
              <div className="text-[11px] font-mono text-[#85858B]">Direct Dispatch:</div>
              <button
                onClick={() => onCopyEmail?.(profile.email)}
                className="w-full text-left font-mono text-xs text-[#F0F0EE] hover:text-[#3E2CF0] transition-colors truncate block"
                title="Click to copy email address"
              >
                {profile.email}
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-[11px] text-[#3E2CF0] hover:underline font-medium pt-1"
              >
                <span>Open transmission terminal</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#52525B]">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Shubham Sharma (rosenkrvz)</span>
            <span>•</span>
            <span>IIT Jodhpur, India</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0F0EE] flex items-center gap-1 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0F0EE] flex items-center gap-1 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#F0F0EE] flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>E-Mail</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
