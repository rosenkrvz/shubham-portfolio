import React from 'react';
import StatusIndicator from './StatusIndicator.jsx';

/**
 * TactileButton: Physical industrial push-button with mechanical depth,
 * top inner highlight, bottom drop shadow, and tactile compression on press.
 */
export default function TactileButton({
  children,
  variant = 'secondary', // 'primary' | 'secondary' | 'hardware' | 'danger'
  size = 'md',          // 'sm' | 'md' | 'lg'
  active = false,
  led,                  // 'active' | 'online' | 'idle' | boolean
  icon: Icon,
  className = '',
  onClick,
  disabled = false,
  as: Component = 'button',
  ...props
}) {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-mono gap-2 rounded-[4px]',
    md: 'px-5 py-2.5 text-xs font-mono uppercase tracking-wider gap-2.5 rounded-[5px]',
    lg: 'px-7 py-3.5 text-sm font-display font-semibold uppercase tracking-tight gap-3 rounded-[6px]'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return `
          bg-[#F2F2F2] text-[#080808] border border-[rgba(255,255,255,0.4)]
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.35),0_3px_8px_rgba(0,0,0,0.5)]
          hover:bg-[#FFFFFF] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_4px_12px_rgba(0,0,0,0.65)]
          active:translate-y-[1px] active:bg-[#DCDCDC] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]
        `;
      case 'danger':
        return `
          bg-[#1A0A0A] text-[#F2F2F2] border border-[#E10600]/40
          shadow-[inset_0_1px_1px_rgba(225,6,0,0.3),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_6px_rgba(0,0,0,0.5)]
          hover:border-[#E10600]/80 hover:bg-[#220B0B]
          active:translate-y-[1px] active:bg-[#0D0505] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.9)]
        `;
      case 'hardware':
        return `
          bg-[#101014] text-[#A0A0A0] hover:text-[#F2F2F2] border border-[rgba(255,255,255,0.06)]
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),inset_0_-1px_2px_rgba(0,0,0,0.8),0_2px_5px_rgba(0,0,0,0.4)]
          hover:bg-[#14141A] hover:border-[rgba(255,255,255,0.12)]
          active:translate-y-[1px] active:bg-[#0A0A0E] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.85)]
        `;
      case 'secondary':
      default:
        return `
          bg-[#161618] text-[#F2F2F2] border border-[rgba(255,255,255,0.08)]
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.7),0_2px_5px_rgba(0,0,0,0.4)]
          hover:bg-[#1C1C20] hover:border-[rgba(255,255,255,0.15)]
          active:translate-y-[1px] active:bg-[#0E0E10] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]
        `;
    }
  };

  const activeStyles = active
    ? 'translate-y-[1px] bg-[#0E0E10] border-[rgba(255,255,255,0.06)] shadow-[inset_0_2px_5px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.02)]'
    : '';

  return (
    <Component
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-medium select-none
        transition-[transform,box-shadow,background-color,border-color] duration-100 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]/60 focus-visible:ring-offset-1 focus-visible:ring-offset-[#080808]
        disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer
        ${sizeStyles[size]}
        ${getVariantStyles()}
        ${activeStyles}
        ${className}
      `}
      {...props}
    >
      {led && (
        <StatusIndicator
          status={typeof led === 'string' ? led : active ? 'active' : 'idle'}
          size="sm"
        />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </Component>
  );
}
