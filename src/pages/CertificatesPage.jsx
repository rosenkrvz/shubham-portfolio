import React, { useState } from 'react';
import { Award, ExternalLink, Download, FileText, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Sparkles } from 'lucide-react';
import { certificates } from '../data/certificates.js';
import { usePageMeta } from '../hooks/usePageMeta';
import PageTransition from '../components/ui/PageTransition.jsx';
import TactileButton from '../components/ui/TactileButton.jsx';
import TactileTab from '../components/ui/TactileTab.jsx';
import StatusIndicator from '../components/ui/StatusIndicator.jsx';

export default function CertificatesPage({ onInspectCert, onDownloadSimulation }) {
  usePageMeta({
    title: 'Certificates & Academic Honors — Shubham Sharma | IIT Jodhpur',
    description: 'Verified credentials and academic distinctions from Stanford Online, DeepLearning.AI, AWS, and IIT Jodhpur.',
    path: '/certifications'
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedCertId, setExpandedCertId] = useState(null);

  const categories = [
    'All',
    'Neural Networks & Deep Learning',
    'Statistical Learning & Algorithms',
    'Cloud & Infrastructure',
    'Academic Distinction',
    'Systems & Backend'
  ];

  const filteredCerts = certificates.filter((c) =>
    activeCategory === 'All' ? true : c.category === activeCategory
  );

  const featuredCert = certificates.find((c) => c.id === 'cert-iitj-academic-excellence') || certificates[0];
  const regularCerts = filteredCerts.filter((c) => activeCategory !== 'All' || c.id !== featuredCert.id);

  const toggleExpand = (id) => {
    setExpandedCertId(expandedCertId === id ? null : id);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-24 md:py-32 bg-[#09090B] text-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16 sm:space-y-24">
          
          {/* Header */}
          <div className="space-y-4 border-b border-[#27272A]/50 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] text-[11px] font-mono text-[#71717A]">
              <StatusIndicator status="online" size="sm" />
              <span className="uppercase tracking-wider">ARCHIVE // VERIFIED ACADEMIC &amp; RESEARCH CREDENTIALS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium font-display uppercase tracking-tight text-[#FAFAFA] leading-[0.92]">
              Certifications &amp; <span className="font-serif-editorial italic text-white font-normal lowercase">Distinctions.</span>
            </h1>

            <p className="text-sm sm:text-base text-[#A1A1AA] max-w-[65ch] leading-relaxed font-light">
              Verified academic honors, technical specializations, and professional credentials from Stanford Online, DeepLearning.AI, Amazon Web Services, and IIT Jodhpur.
            </p>
          </div>

          {/* Categories Bar: Tactile recessed control */}
          <div className="overflow-x-auto pb-2">
            <TactileTab
              tabs={categories.map((cat) => ({ id: cat, label: cat }))}
              activeTab={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* Featured Distinction Spotlight (when 'All' is active) */}
          {activeCategory === 'All' && (
            <div className="p-6 sm:p-8 bg-[#121215] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#27272A]/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[4px] bg-[#09090B] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#FAFAFA]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] flex items-center gap-1.5">
                      <StatusIndicator status="active" size="sm" />
                      <span>FEATURED INSTITUTIONAL RECOGNITION</span>
                    </div>
                    <div className="text-sm font-display font-medium text-[#FAFAFA]">
                      {featuredCert.issuer}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-[#71717A]">{featuredCert.issueDate}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/20 border border-emerald-800/30 px-2.5 py-1 rounded-[4px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Distinction</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                    {featuredCert.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed max-w-[65ch]">
                    {featuredCert.description}
                  </p>
                  <p className="text-xs text-[#FAFAFA] font-mono bg-[#09090B] p-3.5 rounded-[4px] border border-[rgba(255,255,255,0.06)]">
                    <strong className="text-[#FAFAFA]">HIGHLIGHT:</strong> <span className="text-[#A1A1AA]">{featuredCert.highlights}</span>
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featuredCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-[3px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] text-[11px] font-mono text-[#A1A1AA]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Preview Specimen Block */}
                <div className="lg:col-span-4 p-5 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[4px] space-y-4">
                  <div className="text-[11px] font-mono text-[#71717A] uppercase flex items-center justify-between">
                    <span>SPECIMEN RECORD</span>
                    <span>{featuredCert.pdfPreview.format}</span>
                  </div>

                  <div className="py-6 border-y border-[rgba(255,255,255,0.06)] text-center space-y-1">
                    <FileText className="w-8 h-8 text-[#71717A] mx-auto mb-2" />
                    <div className="text-xs font-mono font-medium text-[#FAFAFA]">
                      {featuredCert.pdfPreview.type}
                    </div>
                    <div className="text-[11px] font-mono text-[#71717A]">
                      File Size: {featuredCert.pdfPreview.size}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <TactileButton
                      variant="primary"
                      size="sm"
                      onClick={() => onInspectCert?.(featuredCert)}
                      className="w-full justify-center"
                      icon={FileText}
                    >
                      Inspect Specimen
                    </TactileButton>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Credentials Archive Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularCerts.map((cert) => {
              const isExpanded = expandedCertId === cert.id;

              return (
                <div
                  key={cert.id}
                  className="rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.16)] transition-all p-6 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    {/* Header Row: Issuer & Date */}
                    <div className="flex items-start justify-between gap-3 border-b border-[#27272A]/50 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-[4px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#FAFAFA]">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-[#FAFAFA]">{cert.issuer}</div>
                          <div className="text-[11px] font-mono text-[#71717A]">{cert.issueDate}</div>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-800/30 px-2 py-0.5 rounded-[3px]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        onClick={() => onInspectCert?.(cert)}
                        className="text-base font-medium text-[#FAFAFA] hover:text-white cursor-pointer transition-colors"
                      >
                        {cert.title}
                      </h3>
                      {cert.instructor && (
                        <div className="text-xs text-[#71717A] mt-0.5 font-mono">
                          Instructor: <span className="text-[#A1A1AA]">{cert.instructor}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Expandable Engineering Highlights */}
                    {isExpanded && (
                      <div className="p-3 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[4px] text-xs font-mono text-[#FAFAFA] space-y-1.5">
                        <div className="text-[#71717A] text-[10px] uppercase tracking-wider">
                          ENGINEERING EVIDENCE &amp; SYLLABUS HIGHLIGHTS:
                        </div>
                        <p className="text-[#A1A1AA] leading-relaxed font-sans">
                          {cert.highlights}
                        </p>
                      </div>
                    )}

                    {/* Credential ID & Toggle */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A] pt-1">
                      <div>
                        ID: <span className="text-[#A1A1AA]">{cert.credentialId}</span>
                      </div>

                      <button
                        onClick={() => toggleExpand(cert.id)}
                        className="text-xs text-[#A1A1AA] hover:text-[#FAFAFA] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Less' : 'Details'}</span>
                        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </button>
                    </div>

                    {/* Validated Skills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-[3px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] text-[10px] font-mono text-[#A1A1AA]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Tactile Controls */}
                  <div className="pt-4 border-t border-[#27272A]/50 flex items-center justify-between gap-3">
                    <TactileButton
                      variant="secondary"
                      size="sm"
                      onClick={() => onInspectCert?.(cert)}
                      icon={FileText}
                    >
                      Inspect Specimen
                    </TactileButton>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#71717A] hover:text-[#FAFAFA] transition-colors"
                      >
                        <span>Verify Record</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
