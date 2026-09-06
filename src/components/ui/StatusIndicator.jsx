import React from 'react';

/**
 * StatusIndicator: Tiny tactile hardware indicator LED with metallic bezel and signal glow.
 * States:
 *  - 'active' (Signal Red #E10600, prominent glow)
 *  - 'online' (Emerald #10B981, active glow)
 *  - 'idle' (Dim deep red #3A0A0A)
 *  - 'warning' (Amber #F59E0B)
 */
export default function StatusIndicator({
  status = 'active',
  label,
  size = 'md',
  pulse = false,
  className = ''
}) {
  const sizeMap = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };

  const ringSizeMap = {
    sm: 'p-[1.5px]',
    md: 'p-[2px]',
    lg: 'p-[2.5px]'
  };

  const getLedStyle = () => {
    switch (status) {
      case 'active':
        return 'bg-[#FFFFFF] shadow-[0_0_8px_2px_rgba(225,6,0,0.95),0_0_3px_1px_rgba(225,6,0,0.95)]';
      case 'online':
        return 'bg-[#FFFFFF] shadow-[0_0_7px_2px_rgba(16,185,129,0.9),0_0_3px_1px_rgba(16,185,129,0.9)]';
      case 'warning':
        return 'bg-[#FFFFFF] shadow-[0_0_7px_2px_rgba(245,158,11,0.9)]';
      case 'idle':
      default:
        return 'bg-[#2A0808] shadow-[inset_0_1px_1px_rgba(0,0,0,0.8)]';
    }
  };

  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Recessed Hardware Bezel Ring */}
      <span className={`inline-flex items-center justify-center rounded-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.08)] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] ${ringSizeMap[size]}`}>
        <span
          className={`rounded-full transition-all duration-300 ${sizeMap[size]} ${getLedStyle()} ${
            pulse && (status === 'active' || status === 'online') ? 'animate-pulse' : ''
          }`}
        />
      </span>

      {label && (
        <span className="font-mono text-[11px] tracking-wider uppercase text-[#A0A0A0]">
          {label}
        </span>
      )}
    </span>
  );
}
