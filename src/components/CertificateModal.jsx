import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

export default function CertificateModal({ cert, onClose, onDownloadSimulation }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0E0E11] border border-[#26262E] rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F24] bg-[#121215]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#3E2CF0]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#85858B]">
                Cryptographically Verified Credential // {cert.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#85858B] hover:text-white hover:bg-[#1E1E24] transition-colors"
              aria-label="Close certificate inspector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* High-Fidelity Certificate Vector Render */}
            <div className="relative rounded-lg border-2 border-[#2A2A30] bg-[#111114] p-6 sm:p-8 shadow-inner overflow-hidden">
              {/* Background watermark & guilloche */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-dither-pattern"></div>
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[#3E2CF0]/20 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1A1A22] border border-[#3E2CF0] flex items-center justify-center text-[#3E2CF0] shadow-sm shadow-[#3E2CF0]/50">
                  <Award className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#85858B]">
                    Certificate of Technical Accomplishment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F0F0EE]">
                    {cert.title}
                  </h3>
                  <div className="text-xs text-[#3E2CF0] font-mono">
                    Awarded to <span className="text-white font-semibold underline underline-offset-4">Shubham Sharma</span> (IIT Jodhpur)
                  </div>
                </div>

                <p className="text-xs text-[#85858B] max-w-lg leading-relaxed pt-2">
                  {cert.description}
                </p>

                {/* Key validation metadata row */}
                <div className="w-full pt-4 mt-2 border-t border-[#1F1F24] grid grid-cols-3 gap-2 text-[11px] font-mono text-[#85858B]">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#52525B]">Issuer</div>
                    <div className="text-[#F0F0EE] font-medium">{cert.issuer}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#52525B]">Issued</div>
                    <div className="text-[#F0F0EE] font-medium">{cert.issueDate}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-[#52525B]">Credential ID</div>
                    <div className="text-[#3E2CF0] font-medium truncate">{cert.credentialId}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills validated */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#85858B]">
                Competencies &amp; Technical Capabilities Verified
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#161619] border border-[#232328] text-xs font-mono text-[#D4D4D8]"
                  >
                    <CheckCircle className="w-3 h-3 text-[#3E2CF0]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* PDF Integration & Cryptographic Audit Status */}
            <div className="p-4 rounded-lg bg-[#121215] border border-[#1F1F24] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-[#1A1A22] border border-[#2A2A35] text-[#3E2CF0]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F0F0EE]">
                    Official PDF Document &amp; Signature
                  </div>
                  <div className="text-[11px] font-mono text-[#85858B]">
                    {cert.pdfPreview.format} • {cert.pdfPreview.size}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onDownloadSimulation(cert)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1E1E24] hover:bg-[#282830] border border-[#2E2E38] text-xs font-medium text-[#F0F0EE] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF</span>
              </button>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#1F1F24] bg-[#121215]">
            <span className="text-xs font-mono text-[#52525B]">
              VERIFIED: SHA-256 TRUST CHAIN
            </span>
            <div className="flex items-center gap-3">
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#3E2CF0] hover:bg-[#4F3DF8] text-white text-xs font-semibold tracking-wide transition-all shadow-sm shadow-[#3E2CF0]/30"
              >
                <span>Verify at Issuer</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
