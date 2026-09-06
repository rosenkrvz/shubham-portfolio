import React from 'react';
import StatusIndicator from './StatusIndicator.jsx';

/**
 * TactileTab: Recessed physical channel housing raised mechanical selector buttons.
 * Inspired by scientific instrumentation parameter switches.
 */
export default function TactileTab({
  tabs = [],
  activeTab,
  onSelectTab,
  className = '',
  size = 'md'
}) {
  return (
    <div
      role="tablist"
      className={`
        inline-flex items-center p-1 rounded-[5px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.05)]
        shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.02)]
        ${className}
      `}
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isSelected}
            onClick={() => onSelectTab(tab.id)}
            className={`
              relative flex items-center gap-2 rounded-[4px] font-mono text-xs transition-all duration-150 cursor-pointer select-none
              ${size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-1.5 text-xs'}
              ${
                isSelected
                  ? 'bg-[#18181C] text-[#F2F2F2] font-semibold border border-[rgba(255,255,255,0.1)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_6px_rgba(0,0,0,0.5)] translate-y-[-0.5px]'
                  : 'text-[#888888] hover:text-[#D1D5DB] border border-transparent hover:bg-[#121214]'
              }
            `}
          >
            <StatusIndicator
              status={isSelected ? 'active' : 'idle'}
              size="sm"
            />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
