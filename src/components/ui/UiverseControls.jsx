import React from 'react';
import { motion } from 'framer-motion';

/**
 * Range Slider inspired by Stavros2410/wet-duck-69
 */
export function UiverseSlider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label,
  unit = '',
  className = ''
}) {
  return (
    <div className={`space-y-2 select-none ${className}`}>
      {label && (
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#94A3B8] uppercase tracking-wider">{label}</span>
          <span className="text-[#F8FAFC] font-semibold">
            {value} {unit}
          </span>
        </div>
      )}
      <div className="relative flex items-center py-1">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="uiverse-slider cursor-pointer"
        />
      </div>
    </div>
  );
}

/**
 * Toggle Switch inspired by vinodjangid07/lazy-cheetah-23
 */
export function UiverseToggleSwitch({
  checked,
  onChange,
  labelLeft,
  labelRight,
  id = 'uiverse-switch',
  ariaLabel
}) {
  return (
    <div className="inline-flex items-center gap-3 select-none">
      {labelLeft && (
        <span className={`text-xs font-mono transition-colors ${!checked ? 'text-[#F8FAFC] font-semibold' : 'text-[#64748B]'}`}>
          {labelLeft}
        </span>
      )}
      <div
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        tabIndex={0}
        onClick={() => onChange(!checked)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            onChange(!checked);
          }
        }}
        className={`relative w-14 h-7 rounded-full p-1 cursor-pointer transition-colors duration-300 border focus:outline-none focus:ring-2 focus:ring-[#E10600]/40 ${
          checked
            ? 'bg-[#161B22] border-[rgba(255,255,255,0.2)]'
            : 'bg-[#0E1217] border-[rgba(255,255,255,0.08)]'
        }`}
      >
        <motion.div
          animate={{ x: checked ? 26 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="w-5 h-5 rounded-full bg-[#F8FAFC] shadow-md relative flex items-center justify-center"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
              checked ? 'bg-[#E10600] shadow-[0_0_6px_#E10600]' : 'bg-[#94A3B8]'
            }`}
          />
        </motion.div>
      </div>
      {labelRight && (
        <span className={`text-xs font-mono transition-colors ${checked ? 'text-[#F8FAFC] font-semibold' : 'text-[#64748B]'}`}>
          {labelRight}
        </span>
      )}
    </div>
  );
}

/**
 * Radial / Radio selector button inspired by SelfMadeSystem/grumpy-deer-99
 */
export function UiverseRadialButton({
  selected,
  onClick,
  children,
  badge,
  className = ''
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer select-none border ${
        selected
          ? 'bg-[#161B22] text-[#F8FAFC] border-[rgba(255,255,255,0.22)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_12px_rgba(0,0,0,0.5)]'
          : 'bg-[#101318] text-[#94A3B8] border-[rgba(255,255,255,0.06)] hover:bg-[#141820] hover:text-[#F8FAFC]'
      } ${className}`}
    >
      <span
        className={`w-2 h-2 rounded-full border transition-all duration-200 ${
          selected
            ? 'border-[#E10600] bg-[#E10600] shadow-[0_0_8px_#E10600]'
            : 'border-[#64748B] bg-transparent'
        }`}
      />
      <span>{children}</span>
      {badge && (
        <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded bg-[#0A0D12] border border-[rgba(255,255,255,0.08)] text-[#94A3B8]">
          {badge}
        </span>
      )}
    </button>
  );
}

/**
 * Minimalist orbital loader inspired by Shoh2008/cold-walrus-85 & boryanakrasteva/ancient-quail-68
 */
export function UiverseLoader({ size = 'md', className = '' }) {
  const sizeMap = {
    sm: 'w-4 h-4 border-2',
    md: 'w-7 h-7 border-2',
    lg: 'w-12 h-12 border-3'
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className={`rounded-full border-t-[#E10600] border-r-[rgba(255,255,255,0.1)] border-b-[rgba(255,255,255,0.05)] border-l-[#F8FAFC] ${sizeMap[size] || sizeMap.md}`}
      />
    </div>
  );
}
