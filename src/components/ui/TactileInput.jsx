import React, { useState } from 'react';
import StatusIndicator from './StatusIndicator.jsx';

/**
 * TactileInput: Deeply recessed input/textarea module embedded into an instrument chassis.
 * Highlights a subtle red signal LED and refined red perimeter on focus.
 */
export default function TactileInput({
  label,
  error,
  icon: Icon,
  as = 'input',
  className = '',
  rows = 4,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const Component = as;

  return (
    <div className="space-y-1.5 w-full font-mono">
      {label && (
        <div className="flex items-center justify-between text-xs">
          <label className="text-[#A0A0A0] uppercase tracking-wider block">
            {label}
          </label>
          <StatusIndicator
            status={isFocused ? 'active' : 'idle'}
            size="sm"
          />
        </div>
      )}

      <div className="relative w-full">
        {Icon && (
          <Icon className="absolute left-3.5 top-3.5 w-4 h-4 text-[#666666] pointer-events-none" />
        )}

        <Component
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          rows={as === 'textarea' ? rows : undefined}
          className={`
            w-full bg-[#0A0A0A] text-[#F2F2F2] placeholder-[#555555]
            rounded-[4px] border transition-all duration-150 text-xs sm:text-sm font-mono
            shadow-[inset_0_2px_6px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.025)]
            focus:outline-none
            ${Icon ? 'pl-10' : 'px-4'}
            py-3
            ${isFocused ? 'border-[#E10600]/60 shadow-[inset_0_2px_6px_rgba(0,0,0,0.9),0_0_8px_rgba(225,6,0,0.15)]' : 'border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)]'}
            ${error ? 'border-[#E10600]' : ''}
            ${className}
          `}
          {...props}
        />
      </div>

      {error && (
        <p className="text-[11px] text-[#E10600] tracking-tight mt-1">{error}</p>
      )}
    </div>
  );
}
