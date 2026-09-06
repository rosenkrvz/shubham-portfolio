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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#121215] border border-[rgba(255,255,255,0.08)] type-label text-[#9A9A9A]">
              <StatusIndicator status="online" size="sm" />
              <span className="uppercase tracking-wider">ARCHIVE // VERIFIED ACADEMIC &amp; RESEARCH CREDENTIALS</span>
            </div>

            <h1 className="type-hero font-medium font-display uppercase tracking-tight text-[#FAFAFA] leading-[0.92]">
              Certifications &amp; <span className="font-serif-editorial italic text-white font-normal lowercase">Distinctions.</span>
            </h1>

            <p className="type-body-lg text-[#E8E8E8] max-w-[65ch] leading-relaxed font-normal">
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
                    <div className="type-label uppercase tracking-widest text-[#9A9A9A] flex items-center gap-1.5">
                      <StatusIndicator status="active" size="sm" />
                      <span>FEATURED INSTITUTIONAL RECOGNITION</span>
                    </div>
                    <div className="text-base font-semibold text-[#FAFAFA]">
                      {featuredCert.issuer}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 type-label">
                  <span className="text-[#9A9A9A]">{featuredCert.issueDate}</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/20 border border-emerald-800/30 px-2.5 py-1 rounded-[4px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Distinction</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <h2 className="type-h3 font-display font-medium uppercase text-[#FAFAFA] tracking-tight">
                    {featuredCert.title}
                  </h2>
                  <p className="type-body-sm text-[#B0B0B0] leading-relaxed max-w-[65ch]">
                    {featuredCert.description}
                  </p>
                  <p className="type-body-sm text-[#E8E8E8] bg-[#09090B] p-3.5 rounded-[4px] border border-[rgba(255,255,255,0.06)]">
                    <strong className="text-[#FAFAFA] font-mono text-xs uppercase mr-2">Highlight:</strong> <span className="text-[#B0B0B0]">{featuredCert.highlights}</span>
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {featuredCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-[3px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] type-label text-[#B0B0B0]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Preview Specimen Block */}
                <div className="lg:col-span-4 p-5 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[4px] space-y-4">
                  <div className="type-label text-[#9A9A9A] uppercase flex items-center justify-between">
                    <span>SPECIMEN RECORD</span>
                    <span>{featuredCert.pdfPreview.format}</span>
                  </div>

                  <div className="py-6 border-y border-[rgba(255,255,255,0.06)] text-center space-y-1">
                    <FileText className="w-8 h-8 text-[#9A9A9A] mx-auto mb-2" />
                    <div className="type-label font-medium text-[#FAFAFA]">
                      {featuredCert.pdfPreview.type}
                    </div>
                    <div className="type-label text-[#9A9A9A]">
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
                      INSPECT SPECIMEN
                    </TactileButton>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Credentials Catalogue & Archive Index */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#27272A]/50 pb-4">
              <span className="type-label uppercase tracking-widest text-[#9A9A9A]">
                CATALOGUE ARCHIVE // {regularCerts.length} RECORDS INDEXED
              </span>
              <span className="type-label text-[#9A9A9A]">
                CLICK ROW OR BUTTON TO EXPAND SPECIMEN
              </span>
            </div>

            <div className="divide-y divide-[#27272A]/50 border-y border-[#27272A]/50">
              {regularCerts.map((cert, idx) => {
                const isExpanded = expandedCertId === cert.id;
                const recordNum = `0${idx + 1}`.slice(-2);

                return (
                  <div key={cert.id} className="py-6 group transition-colors">
                    {/* Primary Index Row */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                      
                      {/* 01 Index + Verified Indicator */}
                      <div className="md:col-span-1 flex items-center gap-2">
                        <span className="text-sm font-mono font-bold text-[#9A9A9A] group-hover:text-[#FAFAFA] transition-colors">
                          {recordNum}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </div>

                      {/* Title & Issuer */}
                      <div className="md:col-span-6 space-y-1">
                        <h3
                          onClick={() => toggleExpand(cert.id)}
                          className="text-base sm:text-lg font-semibold text-[#FAFAFA] group-hover:text-white cursor-pointer transition-colors"
                        >
                          {cert.title}
                        </h3>
                        <div className="type-label text-[#9A9A9A] flex items-center gap-2">
                          <span className="text-[#B0B0B0] font-medium">{cert.issuer}</span>
                          {cert.instructor && (
                            <>
                              <span>&bull;</span>
                              <span>{cert.instructor}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Date & ID */}
                      <div className="md:col-span-3 type-label text-[#9A9A9A] space-y-0.5">
                        <div className="text-[#FAFAFA] font-mono">{cert.issueDate}</div>
                        <div className="text-[11px] font-mono">ID: {cert.credentialId}</div>
                      </div>

                      {/* Expand / Inspect Action */}
                      <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-2">
                        <button
                          onClick={() => toggleExpand(cert.id)}
                          className="px-3 py-1.5 rounded-[4px] bg-[#121215] hover:bg-[#18181B] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#FAFAFA] flex items-center gap-1.5 cursor-pointer transition-colors select-none"
                        >
                          <span>{isExpanded ? 'CLOSE' : 'EXPAND'}</span>
                          {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Specimen Detail Drawer */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-[#27272A]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#121215]/50 p-6 rounded-[4px] border border-[rgba(255,255,255,0.06)]"
                      >
                        {/* Left: Syllabus & Highlights */}
                        <div className="lg:col-span-8 space-y-4">
                          <div>
                            <div className="type-label text-[#9A9A9A] uppercase tracking-wider mb-1">CURRICULAR OVERVIEW</div>
                            <p className="type-body text-[#B0B0B0] leading-relaxed">
                              {cert.description}
                            </p>
                          </div>

                          <div className="p-4 bg-[#09090B] border border-[rgba(255,255,255,0.06)] rounded-[4px] space-y-1.5">
                            <div className="type-label text-[#FAFAFA] uppercase font-mono text-[11px]">
                              SYLLABUS EVIDENCE &amp; EVALUATION:
                            </div>
                            <p className="type-body-sm text-[#B0B0B0] leading-relaxed">
                              {cert.highlights}
                            </p>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <div className="type-label text-[#9A9A9A] uppercase">ACCREDITED SKILLS:</div>
                            <div className="flex flex-wrap gap-1.5">
                              {cert.skills.map((s) => (
                                <span
                                  key={s}
                                  className="px-2.5 py-1 rounded-[3px] bg-[#09090B] border border-[rgba(255,255,255,0.06)] type-label text-[#FAFAFA] font-mono text-[11px]"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Large Visual Specimen Material Block */}
                        <div className="lg:col-span-4 p-5 bg-[#09090B] border border-[rgba(255,255,255,0.08)] rounded-[4px] space-y-4">
                          <div className="flex items-center justify-between type-label text-[#9A9A9A]">
                            <span>SPECIMEN RECORD</span>
                            <span>{cert.pdfPreview?.format || 'PDF'}</span>
                          </div>

                          <div className="p-6 bg-[#121215] border border-[rgba(255,255,255,0.06)] rounded-[4px] text-center space-y-2">
                            <FileText className="w-10 h-10 text-[#FAFAFA] mx-auto opacity-90" />
                            <div className="text-xs font-mono font-medium text-[#FAFAFA]">
                              {cert.title}
                            </div>
                            <div className="type-label text-[#9A9A9A]">
                              Issuer: {cert.issuer}
                            </div>
                          </div>

                          <div className="space-y-2 pt-2">
                            <TactileButton
                              variant="primary"
                              size="sm"
                              onClick={() => onInspectCert?.(cert)}
                              className="w-full justify-center"
                              icon={FileText}
                            >
                              INSPECT FULL SPECIMEN
                            </TactileButton>

                            {cert.verifyUrl && (
                              <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-mono text-[#9A9A9A] hover:text-[#FAFAFA] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] rounded-[4px] transition-colors"
                              >
                                <span>VERIFY WITH ISSUER</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}
