import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Command } from 'lucide-react';

export default function ShortcutsModal({ isOpen, onClose, onMuteToggle, isMuted }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '1', desc: 'Jump to Scene 01 // Arrival' },
    { key: '2', desc: 'Jump to Scene 02 // Identity' },
    { key: '3', desc: 'Jump to Scene 03 // Work Experiences' },
    { key: '4', desc: 'Jump to Scene 04 // Experiments' },
    { key: '5', desc: 'Jump to Scene 05 // Technical Systems' },
    { key: '6', desc: 'Jump to Scene 06 // Contact' },
    { key: 'M', desc: `Toggle Tactile Sound (${isMuted ? 'Currently Muted' : 'Active'})` },
    { key: 'ESC', desc: 'Close open drawers & modals' },
    { key: '?', desc: 'Toggle this keyboard dossier' }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#050508]/85 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-lg bg-[#0c0c12] border border-white/15 p-6 shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Command size={16} className="text-[#00f0ff]" />
              <span className="font-mono text-xs tracking-widest text-[#00f0ff] uppercase font-semibold">
                KEYBOARD PROTOCOLS // NAVIGATION
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Close keyboard shortcuts"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-xs text-zinc-400 font-sans mb-4">
            Direct access commands calibrated for rapid spatial navigation across scenes.
          </p>

          <div className="grid grid-cols-1 gap-2 font-mono text-xs">
            {shortcuts.map((sc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-1.5 px-2.5 bg-[#14141d] border border-white/5 hover:border-[#00f0ff]/30 transition-colors"
              >
                <span className="text-zinc-300 font-sans">{sc.desc}</span>
                <kbd className="px-2 py-0.5 bg-[#050508] border border-white/20 text-[#00f0ff] rounded font-mono text-[11px] font-bold">
                  {sc.key}
                </kbd>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>PRESS [ESC] OR CLICK OUTSIDE TO DISMISS</span>
            <span className="text-[#00f0ff]">KRVZ.DEV // 2026</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
