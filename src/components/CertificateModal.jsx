import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Award, CheckCircle2 } from 'lucide-react';

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
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 10 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-2xl bg-[#111114] border border-[#24242C] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E1E23] bg-[#141418]">
            <div className="flex items-center gap-2 text-xs text-[#8E8D96]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              <span>Verified Credential Record</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-[#8E8D96] hover:text-[#F4F4F2] transition-colors focus:outline-none"
              aria-label="Close certificate modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Document Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Elegant Document Sheet */}
            <div className="rounded-xl border border-[#22222A] bg-[#0E0E11] p-6 sm:p-8 space-y-6 text-center">
              
              <div className="w-12 h-12 rounded-full bg-[#181820] border border-[#2A2A35] flex items-center justify-center text-[#6366F1] mx-auto">
                <Award className="w-6 h-6" />
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#8E8D96]">
                  Certificate of Accomplishment
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#F4F4F2]">
                  {cert.title}
                </h3>
                <div className="text-xs text-[#8E8D96]">
                  Awarded to <strong className="text-[#F4F4F2]">Shubham Sharma</strong> • IIT Jodhpur
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#8E8D96] max-w-md mx-auto leading-relaxed">
                {cert.description}
              </p>

              {/* Key metadata row */}
              <div className="pt-4 border-t border-[#1E1E24] grid grid-cols-3 gap-2 text-xs text-[#8E8D96]">
                <div>
                  <div className="text-[10px] text-[#65656E]">Issuer</div>
                  <div className="text-[#F4F4F2] font-medium">{cert.issuer}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#65656E]">Issued</div>
                  <div className="text-[#F4F4F2] font-medium">{cert.issueDate}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#65656E]">Credential ID</div>
                  <div className="text-[#F4F4F2] font-mono text-[11px] truncate">{cert.credentialId}</div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                {cert.skills.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-[#16161B] text-[10px] text-[#8E8D96]">
                    {s}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-[#141418] border-t border-[#1E1E23] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => onDownloadSimulation?.(cert)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181F] hover:bg-[#22222A] border border-[#25252E] text-xs font-semibold text-[#F4F4F2] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Record (PDF)</span>
            </button>

            <div className="flex items-center gap-3">
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6366F1] hover:underline"
                >
                  <span>Verify Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#4338CA] hover:bg-[#4F46E5] text-white text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
