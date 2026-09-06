import React, { useState } from 'react';
import { Award, ShieldCheck, Download, ExternalLink, FileText, CheckCircle2, Eye } from 'lucide-react';
import { certificates } from '../data/certificates.js';

export default function CertificatesPage({ onInspectCert, onDownloadSimulation }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Neural Networks & Deep Learning', 'Statistical Learning & Algorithms', 'Cloud & Infrastructure', 'Academic Distinction', 'Systems & Backend'];

  const filteredCerts = certificates.filter((c) =>
    activeCategory === 'All' ? true : c.category === activeCategory
  );

  return (
    <div className="min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#1F1F24] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#3E2CF0] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#3E2CF0] animate-pulse"></span>
            <span>Cryptographic Ledger // Verified Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F0F0EE]">
            Certifications &amp; Distinctions
          </h1>
          <p className="text-sm sm:text-base text-[#85858B] max-w-2xl leading-relaxed">
            Institutional certifications, mathematical credentials, and verified achievements from Stanford Online, DeepLearning.AI, AWS, and IIT Jodhpur.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-[#3E2CF0] text-white font-semibold shadow-sm shadow-[#3E2CF0]/30'
                  : 'bg-[#111113] text-[#85858B] hover:text-[#F0F0EE] border border-[#1F1F24]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-lg bg-[#111113] border border-[#1F1F24] hover:border-[#3E2CF0]/60 transition-all duration-200 p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Top Badge & Issuer */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded bg-[#1A1A22] border border-[#2E2E38] text-[#3E2CF0] group-hover:scale-110 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F0F0EE]">{cert.issuer}</div>
                      <div className="text-[10px] font-mono text-[#85858B]">Issued {cert.issueDate}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" />
                    <span>VERIFIED</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-bold text-[#F0F0EE] group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  {cert.instructor && (
                    <div className="text-xs text-[#85858B] mt-0.5">
                      Instructor: <span className="text-[#D4D4D8]">{cert.instructor}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[#85858B] leading-relaxed">
                  {cert.description}
                </p>

                {/* Validated Skills */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-[#161619] border border-[#232328] text-[10px] font-mono text-[#A1A1AA]"
                    >
                      {s}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#52525B]">
                      +{cert.skills.length - 4}
                    </span>
                  )}
                </div>

                {/* PDF Payload Spec */}
                <div className="p-2.5 rounded bg-[#161619] border border-[#1F1F24] flex items-center justify-between text-[11px] font-mono text-[#85858B]">
                  <div className="flex items-center gap-1.5 truncate">
                    <FileText className="w-3.5 h-3.5 text-[#3E2CF0]" />
                    <span className="truncate">{cert.pdfPreview.size}</span>
                  </div>
                  <span className="text-[10px] text-[#52525B] uppercase">PDF Ready</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1F1F24] flex items-center justify-between gap-2">
                <button
                  onClick={() => onInspectCert(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-[#161619] hover:bg-[#202025] border border-[#232328] text-xs font-mono text-[#F0F0EE] transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#3E2CF0]" />
                  <span>Inspect Document</span>
                </button>

                <button
                  onClick={() => onDownloadSimulation(cert)}
                  className="p-2 rounded bg-[#161619] hover:bg-[#202025] border border-[#232328] text-[#85858B] hover:text-white transition-colors"
                  title="Download Certificate PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
