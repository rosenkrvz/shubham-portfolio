import React from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';

/**
 * ThemeToggle
 * Animated celestial day/night switch inspired by RiccardoRapelli (Uiverse.io).
 * Integrates with ThemeContext:
 * - Night: Deep space background, moon with crater dots, twinkling stars.
 * - Day: Sun with luminous glow rays and drifting procedural clouds.
 */
export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className={`relative inline-block w-[60px] h-[34px] select-none ${className}`}>
      <label
        htmlFor="theme-toggle-input"
        className="relative block w-full h-full cursor-pointer"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <input
          id="theme-toggle-input"
          type="checkbox"
          checked={!isDark} // checked = light mode
          onChange={toggleTheme}
          aria-label={isDark ? "Enable light mode" : "Enable dark mode"}
          className="sr-only peer"
        />

        {/* Outer Track / Slider Housing */}
        <div
          className={`absolute inset-0 rounded-full transition-colors duration-500 overflow-hidden shadow-inner ${
            isDark
              ? 'bg-[#0B0B0E] border border-[#22222B] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]'
              : 'bg-[#38BDF8] border border-[#7DD3FC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]'
          }`}
        >
          {/* Day Mode: Clouds (shown when not dark) */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
              isDark ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Cloud 1 */}
            <svg
              className="absolute text-white fill-current opacity-85"
              style={{ left: '26px', top: '13px', width: '32px', animation: 'cloud-move 6s infinite' }}
              viewBox="0 0 24 24"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            {/* Cloud 2 */}
            <svg
              className="absolute text-[#E0F2FE] fill-current opacity-70"
              style={{ left: '16px', top: '19px', width: '22px', animation: 'cloud-move 6s infinite 1s' }}
              viewBox="0 0 24 24"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
          </div>

          {/* Night Mode: Twinkling Stars (shown when dark) */}
          <div
            className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
              isDark ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            {/* Star 1 */}
            <svg
              className="absolute text-white fill-current"
              style={{ left: '8px', top: '6px', width: '8px', height: '8px', animation: 'star-twinkle 2.2s infinite' }}
              viewBox="0 0 24 24"
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
            {/* Star 2 */}
            <svg
              className="absolute text-[#C7D2FE] fill-current"
              style={{ left: '18px', top: '18px', width: '5px', height: '5px', animation: 'star-twinkle 1.8s infinite 0.6s' }}
              viewBox="0 0 24 24"
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
            {/* Star 3 */}
            <svg
              className="absolute text-[#FDE047] fill-current"
              style={{ left: '26px', top: '8px', width: '6px', height: '6px', animation: 'star-twinkle 2.5s infinite 1.2s' }}
              viewBox="0 0 24 24"
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </div>

          {/* Sliding Celestial Orb (Sun / Moon) */}
          <div
            className={`absolute top-[3px] w-[26px] h-[26px] rounded-full transition-all duration-500 ease-in-out flex items-center justify-center ${
              isDark
                ? 'left-[4px] bg-[#E2E8F0] shadow-[0_0_8px_rgba(226,232,240,0.6)]'
                : 'left-[30px] bg-[#FACC15] shadow-[0_0_12px_rgba(250,204,21,0.9)]'
            }`}
          >
            {/* Moon Craters (visible in dark mode) */}
            {isDark ? (
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <span className="absolute top-[5px] left-[5px] w-[6px] h-[6px] rounded-full bg-[#94A3B8]/60" />
                <span className="absolute top-[13px] left-[10px] w-[7px] h-[7px] rounded-full bg-[#94A3B8]/50" />
                <span className="absolute top-[6px] left-[15px] w-[4px] h-[4px] rounded-full bg-[#94A3B8]/50" />
              </div>
            ) : (
              /* Sun Core with Subtle Ray Corona */
              <div className="relative w-full h-full rounded-full flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#F59E0B]" />
                <span className="absolute inset-0 rounded-full border border-amber-300/40 animate-ping opacity-25" />
              </div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
