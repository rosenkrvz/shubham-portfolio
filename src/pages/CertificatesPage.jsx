import React, { useState } from 'react';
import { Award, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';
import { certificates } from '../data/certificates.js';
import { usePageMeta } from '../hooks/usePageMeta';

export default function CertificatesPage({ onInspectCert, onDownloadSimulation }) {
  usePageMeta({
    title: 'Certificates & Academic Honors — Shubham Sharma',
    description: 'Verified credentials and academic distinctions from Stanford Online, DeepLearning.AI, AWS, and IIT Jodhpur.',
    path: '/certifications'
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Neural Networks & Deep Learning', 'Statistical Learning & Algorithms', 'Cloud & Infrastructure', 'Academic Distinction', 'Systems & Backend'];

  const filteredCerts = certificates.filter((c) =>
    activeCategory === 'All' ? true : c.category === activeCategory
  );

  return (
    <div className="min-h-screen py-14 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="space-y-4 border-b border-[#1E1E23] pb-10">
          <div className="inline-flex items-center gap-2 text-xs text-[#8E8D96]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
            <span>Credentials &amp; Distinctions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-semibold tracking-tight text-[#F4F4F2]">
            Certificates &amp; Achievements
          </h1>

          <p className="text-sm sm:text-base text-[#8E8D96] max-w-2xl leading-relaxed">
            Verified academic honors, technical specializations, and professional credentials from Stanford Online, DeepLearning.AI, Amazon Web Services, and IIT Jodhpur.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#4338CA] text-white shadow-sm'
                  : 'bg-[#141417] text-[#8E8D96] hover:text-[#F4F4F2] border border-[#202026]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Archive List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl bg-[#121215] border border-[#1E1E24] hover:border-[#30303A] transition-all p-6 sm:p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header Row: Issuer & Date */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#18181F] border border-[#24242E] flex items-center justify-center text-[#6366F1]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F4F4F2]">{cert.issuer}</div>
                      <div className="text-[11px] text-[#8E8D96]">{cert.issueDate}</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/20 border border-emerald-800/30 px-2 py-0.5 rounded-md font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 
                    onClick={() => onInspectCert?.(cert)}
                    className="text-lg font-semibold text-[#F4F4F2] group-hover:text-white cursor-pointer transition-colors"
                  >
                    {cert.title}
                  </h3>
                  {cert.instructor && (
                    <div className="text-xs text-[#8E8D96] mt-0.5">
                      Instructor: <span className="text-[#C4C4CC]">{cert.instructor}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-[#8E8D96] leading-relaxed">
                  {cert.description}
                </p>

                {/* Credential ID */}
                <div className="text-[11px] font-mono text-[#65656E]">
                  ID: <span className="text-[#8E8D96]">{cert.credentialId}</span>
                </div>

                {/* Validated Skills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-[#18181D] text-[10px] text-[#8E8D96]">
                      {s}
                    </span>
                  ))}
                </div>

              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#1E1E24] flex items-center justify-between gap-3">
                <button
                  onClick={() => onInspectCert?.(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F4F4F2] hover:text-[#6366F1] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#8E8D96] hover:text-[#F4F4F2] transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
