import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

/**
 * ColorSystemCard
 * Recreated and adapted from kennyotsu-monochromia (Uiverse.io).
 * Documents the authentic editorial design tokens:
 * Monochromatic greyscale scale + Intentional Accent Red (#E10600).
 * Supports click-to-copy hex codes.
 */
export default function ColorSystemCard({ className = "", onCopyHex }) {
  const [copiedHex, setCopiedHex] = useState(null);

  const palette = [
    { name: "Pitch Black", role: "Page Void", hex: "#000000", bg: "#000000", text: "#E1E1E1", rounded: "rounded-t-md" },
    { name: "Eerie Black", role: "Housing & Insets", hex: "#0D0D0D", bg: "#0D0D0D", text: "#E1E1E1" },
    { name: "Chinese Black", role: "Surface Elevated", hex: "#141414", bg: "#141414", text: "#E1E1E1" },
    { name: "Night Rider", role: "Bevels & Borders", hex: "#2E2E2E", bg: "#2E2E2E", text: "#E1E1E1" },
    { name: "Chinese White", role: "Secondary Typo", hex: "#E1E1E1", bg: "#E1E1E1", text: "#141414" },
    { name: "Anti-Flash White", role: "Primary Typo Ink", hex: "#F3F3F3", bg: "#F3F3F3", text: "#0D0D0D" },
    { name: "Accent Crimson", role: "Telemetry & Status", hex: "#E10600", bg: "#E10600", text: "#FFFFFF", rounded: "rounded-b-md" }
  ];

  const handleCopy = (hex, name) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    onCopyHex?.(`Copied ${name} (${hex})`);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className={`w-full max-w-[380px] p-6 bg-[#0D0D0D] border border-[#222228] rounded-md shadow-2xl ${className}`}>
      
      {/* Editorial Title with subtle halo blur */}
      <div className="text-center relative mb-6">
        <div className="absolute inset-0 bg-[#312E81]/20 blur-xl -z-10 h-10" />
        <h4 className="text-lg font-bold font-mono tracking-[0.35em] uppercase text-[#F4F4F0]">
          M O N O C H R O M I A
        </h4>
        <p className="text-[10px] font-mono text-[#717182] tracking-wider uppercase mt-1">
          DESIGN SYSTEM &bull; COLOR TOKENS
        </p>
      </div>

      {/* Structured Color Swatch Stack */}
      <div className="space-y-[1px] rounded-md overflow-hidden border border-[#272730]">
        {palette.map((item) => {
          const isCopied = copiedHex === item.hex;

          return (
            <button
              key={item.hex}
              onClick={() => handleCopy(item.hex, item.name)}
              className={`w-full px-4 py-2.5 flex items-center justify-between transition-all group cursor-pointer text-left ${item.rounded || ''}`}
              style={{ backgroundColor: item.bg, color: item.text }}
              title={`Click to copy ${item.hex}`}
            >
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-tight">{item.name}</span>
                <span className="text-[9px] opacity-70 font-mono">{item.role}</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span>{item.hex}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  {isCopied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer Metadata */}
      <div className="mt-4 pt-3 border-t border-[#1C1C24] flex items-center justify-between text-[10px] font-mono text-[#656570]">
        <span>CLICK SWATCH TO COPY HEX</span>
        <span className="text-[#E10600] font-semibold">ACCENT RED // 0.1 RATIO</span>
      </div>

    </div>
  );
}
