import React, { useState } from 'react';
import StatusIndicator from './StatusIndicator.jsx';

/**
 * TactileCard: Physical instrument surface with subtle mechanical depth,
 * tactile hover elevation, and an integrated hardware status LED.
 */
export default function TactileCard({
  children,
  title,
  tag,
  status = 'active',
  className = '',
  hoverable = true,
  onClick,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`
        relative rounded-[6px] bg-[#121214] border border-[rgba(255,255,255,0.06)]
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),inset_0_-1px_2px_rgba(0,0,0,0.7),0_4px_14px_rgba(0,0,0,0.45)]
        transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out
        ${hoverable ? 'hover:-translate-y-[1px] hover:bg-[#151518] hover:border-[rgba(255,255,255,0.12)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),inset_0_-1px_2px_rgba(0,0,0,0.6),0_6px_18px_rgba(0,0,0,0.55)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {(title || tag || status) && (
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] px-5 py-3 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <StatusIndicator
              status={isHovered && status === 'active' ? 'active' : status === 'online' ? 'online' : 'idle'}
              size="sm"
            />
            {tag && <span className="text-[#818CF8] text-[11px] font-semibold">{tag}</span>}
            {title && <span className="text-[#F2F2F2] font-medium">{title}</span>}
          </div>

          <span className="text-[10px] text-[#666666] uppercase tracking-wider">
            MODULE CHASSIS
          </span>
        </div>
      )}

      <div className="p-5 sm:p-6">
        {children}
      </div>
    </div>
  );
}
