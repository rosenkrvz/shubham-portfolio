import React from 'react';

/**
 * SegmentedIndustrialSwitch
 * Recreated from elijahgummer (Uiverse.io).
 * Features a dark industrial enclosure, beveled sliding carriage,
 * 3-rib mechanical grip, and a dual-state red/green LED status indicator.
 */
export default function SegmentedIndustrialSwitch({
  checked = false,
  onChange,
  leftLabel = "CASE STUDIES",
  rightLabel = "GRID VIEW",
  ariaLabel = "Toggle display mode",
  className = ""
}) {
  const handleToggle = () => {
    onChange?.(!checked);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={`relative w-[220px] h-[48px] box-border p-[3px] bg-[#0D0D0D] rounded-[6px] cursor-pointer select-none transition-shadow focus:outline-none focus:ring-1 focus:ring-[#818CF8] ${className}`}
      style={{
        boxShadow: 'inset 0 1px 2px 1px rgba(0, 0, 0, 0.7), 0 1px 0 0 rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Background Labels for Left & Right States */}
      <div className="absolute inset-[3px] flex items-center justify-between px-3 text-[10px] font-mono tracking-wider text-[#555560] pointer-events-none">
        <span className={`transition-colors duration-300 ${!checked ? 'text-[#F4F4F0] font-semibold' : 'text-[#444450]'}`}>
          {leftLabel}
        </span>
        <span className={`transition-colors duration-300 ${checked ? 'text-[#F4F4F0] font-semibold' : 'text-[#444450]'}`}>
          {rightLabel}
        </span>
      </div>

      {/* Sliding Mechanical Carriage */}
      <div
        className="relative h-full w-1/2 rounded-[4px] bg-[#1B1C1C] flex items-center justify-between px-2.5 transition-all duration-500 ease-in-out z-10"
        style={{
          left: checked ? '50%' : '0%',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 2px 6px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Glowing LED Status Indicator (Red inactive, Green active) */}
        <span
          className="w-[5px] h-[5px] rounded-full bg-white transition-all duration-500"
          style={{
            boxShadow: checked
              ? '0 0 6px 2px rgba(15, 165, 70, 0.95), 0 0 3px 1px rgba(15, 165, 70, 0.95)'
              : '0 0 6px 2px rgba(225, 6, 0, 0.95), 0 0 3px 1px rgba(225, 6, 0, 0.95)'
          }}
        />

        {/* Center Ribbed Mechanical Grip (3 bars) */}
        <div className="relative flex items-center justify-center gap-[3px] opacity-75">
          <span className="block w-[2px] h-[18px] bg-[#0D0D0D] rounded-full shadow-[0_1px_0_0_rgba(255,255,255,0.2)]" />
          <span className="block w-[2px] h-[22px] bg-[#0D0D0D] rounded-full shadow-[0_1px_0_0_rgba(255,255,255,0.2)]" />
          <span className="block w-[2px] h-[18px] bg-[#0D0D0D] rounded-full shadow-[0_1px_0_0_rgba(255,255,255,0.2)]" />
        </div>

        {/* Balance spacer */}
        <span className="w-[5px] h-[5px] opacity-0" />
      </div>
    </div>
  );
}
