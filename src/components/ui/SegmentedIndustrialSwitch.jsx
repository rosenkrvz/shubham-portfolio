import React, { useId } from 'react';

/**
 * SegmentedIndustrialSwitch
 * Model 1: Segmented Industrial Switch (From Uiverse.io by elijahgummer).
 * 210x50mm dark enclosure, sliding beveled carriage, 3-rib mechanical grip (<i></i>),
 * and red inactive -> green active glowing status LED.
 */
export default function SegmentedIndustrialSwitch({
  checked = false,
  onChange,
  leftLabel,
  rightLabel,
  ariaLabel = "Toggle state",
  id,
  className = ""
}) {
  const autoId = useId();
  const inputId = id || `switch-industrial-${autoId}`;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {leftLabel && (
        <span className={`text-[11px] font-mono tracking-wider transition-colors ${!checked ? 'text-white font-semibold' : 'text-[#656570]'}`}>
          {leftLabel}
        </span>
      )}
      <div className="switch-industrial">
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          aria-label={ariaLabel}
        />
        <label htmlFor={inputId}>
          <i />
        </label>
      </div>
      {rightLabel && (
        <span className={`text-[11px] font-mono tracking-wider transition-colors ${checked ? 'text-white font-semibold' : 'text-[#656570]'}`}>
          {rightLabel}
        </span>
      )}
    </div>
  );
}
