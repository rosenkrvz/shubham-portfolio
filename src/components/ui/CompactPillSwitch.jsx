import React, { useId } from 'react';

/**
 * CompactPillSwitch
 * Model 2: Compact Pill Switch (From Uiverse.io by Yaya12085).
 * 80x40 rounded housing with sliding inner pill and glowing Red/Green LED dot.
 */
export default function CompactPillSwitch({
  checked = false,
  onChange,
  ariaLabel = "Toggle state",
  id,
  className = ""
}) {
  const autoId = useId();
  const inputId = id || `switch-pill-${autoId}`;

  return (
    <div className={`inline-block ${className}`}>
      <div className="switch-pill">
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          aria-label={ariaLabel}
        />
        <label htmlFor={inputId} />
      </div>
    </div>
  );
}
