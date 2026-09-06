import React from 'react';

/**
 * TactileSwitch: Physical electronic hardware toggle with dark recessed housing,
 * raised mechanical sliding carriage, and a tiny dual-state red signal diode.
 */
export default function TactileSwitch({
  checked = false,
  onChange,
  label,
  leftLabel,
  rightLabel,
  disabled = false,
  ariaLabel = 'Hardware control switch',
  className = ''
}) {
  const handleToggle = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onChange?.(!checked);
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {leftLabel && (
        <span className={`text-[11px] font-mono tracking-wider uppercase transition-colors ${
          !checked ? 'text-[#F2F2F2] font-semibold' : 'text-[#666666]'
        }`}>
          {leftLabel}
        </span>
      )}

      {/* Recessed Electronic Enclosure */}
      <div
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`
          relative w-[80px] h-[38px] p-[3px] box-border rounded-[20px] cursor-pointer
          bg-[#0A0A0A] border border-[rgba(255,255,255,0.08)]
          shadow-[inset_0_2px_6px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.03),0_1px_0_rgba(255,255,255,0.05)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#080808]
          transition-all duration-200
          ${disabled ? 'opacity-40 cursor-not-allowed' : 'hover:border-[rgba(255,255,255,0.14)]'}
        `}
      >
        {/* Raised Mechanical Sliding Carriage */}
        <div
          className={`
            relative flex items-center justify-center w-[48%] h-full rounded-[16px]
            bg-[#1A1A1E] border border-[rgba(255,255,255,0.08)]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_5px_rgba(0,0,0,0.5)]
            transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            active:scale-95
            ${checked ? 'left-[50%] bg-[#1E1E24] shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_2px_6px_rgba(0,0,0,0.6)]' : 'left-0'}
          `}
        >
          {/* Dual-State Red LED Diode */}
          <span
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${
                checked
                  ? 'bg-[#FFFFFF] shadow-[0_0_8px_2px_rgba(225,6,0,0.95),0_0_3px_1px_rgba(225,6,0,0.95)] scale-110'
                  : 'bg-[#2A0808] shadow-[inset_0_1px_1px_rgba(0,0,0,0.85)] opacity-80'
              }
            `}
          />
        </div>
      </div>

      {rightLabel && (
        <span className={`text-[11px] font-mono tracking-wider uppercase transition-colors ${
          checked ? 'text-[#F2F2F2] font-semibold' : 'text-[#666666]'
        }`}>
          {rightLabel}
        </span>
      )}

      {label && !leftLabel && !rightLabel && (
        <span className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
          {label}
        </span>
      )}
    </div>
  );
}
