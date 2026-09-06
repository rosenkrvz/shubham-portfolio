import React from 'react';

/**
 * CompactPillSwitch
 * Recreated from Yaya12085 (Uiverse.io).
 * A compact 76x36mm rounded enclosure with sliding pill carriage
 * and a glowing red/green LED status indicator.
 */
export default function CompactPillSwitch({
  checked = false,
  onChange,
  ariaLabel = "Toggle state",
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
      className={`relative w-[76px] h-[36px] box-border p-[3px] bg-[#0D0D0D] rounded-full cursor-pointer select-none transition-shadow focus:outline-none focus:ring-1 focus:ring-[#818CF8] ${className}`}
      style={{
        boxShadow: 'inset 0 1px 2px 1px rgba(0, 0, 0, 0.6), 0 1px 0 0 rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Sliding Pill Carriage */}
      <div
        className="relative h-full w-1/2 rounded-full bg-[#1B1C1C] flex items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          left: checked ? '50%' : '0%',
          boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 2px 5px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Glowing LED Status Dot (Red inactive, Green active) */}
        <span
          className="w-[5px] h-[5px] rounded-full bg-white transition-all duration-500"
          style={{
            boxShadow: checked
              ? '0 0 6px 2px rgba(15, 165, 70, 0.95), 0 0 3px 1px rgba(15, 165, 70, 0.95)'
              : '0 0 6px 2px rgba(225, 6, 0, 0.95), 0 0 3px 1px rgba(225, 6, 0, 0.95)'
          }}
        />
      </div>
    </div>
  );
}
