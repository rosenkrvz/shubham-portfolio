import React from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';

/**
 * ThemeToggle
 * Built with Model 2: Compact Pill Switch (From Uiverse.io by Yaya12085).
 * Controls application dark/light theme mode.
 * Red LED = Dark mode (default) | Green LED = Light mode.
 */
export default function ThemeToggle({ className = "", showLabel = false }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {showLabel && (
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E9EA8]">
          {isDark ? "DARK" : "LIGHT"}
        </span>
      )}
      <div className="switch-pill">
        <input
          id="site-theme-switch"
          type="checkbox"
          checked={!isDark}
          onChange={toggleTheme}
          aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
        />
        <label htmlFor="site-theme-switch" title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"} />
      </div>
    </div>
  );
}
