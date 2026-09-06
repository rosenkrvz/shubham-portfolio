import React from 'react';
import { Layers } from 'lucide-react';

/**
 * HeroSwitcher: Minimalist floating controller permitting real-time toggling
 * across all 5 requested hero archetype styles without reloads.
 */
export default function HeroSwitcher({ currentMode, onSelectMode }) {
  const modes = [
    { id: '3d', label: '01 / 3D MANIFOLD' },
    { id: 'editorial', label: '02 / EDITORIAL' },
    { id: 'generative', label: '03 / GENERATIVE' },
    { id: 'dither', label: '04 / 1-BIT DITHER' },
    { id: 'project', label: '05 / PROJECT-FIRST' }
  ];

  return (
    <aside aria-label="Hero Style Switcher" className="fixed bottom-6 right-6 z-40">
      <div className="flex items-center gap-1.5 p-1.5 bg-[#111114]/90 backdrop-blur-md border border-[#272730] shadow-2xl rounded-full">
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#9E9EA8] border-r border-[#272730]">
          <Layers size={13} className="text-[#818CF8]" />
          <span>HERO ARCHETYPE</span>
        </div>

        <div className="flex items-center gap-1">
          {modes.map((mode) => {
            const isActive = currentMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => onSelectMode(mode.id)}
                className={`px-3 py-1.5 text-[11px] font-mono rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#F4F4F0] text-[#08080A] font-semibold shadow-sm'
                    : 'text-[#9E9EA8] hover:text-white hover:bg-[#1C1C24]'
                }`}
                title={`Switch to ${mode.label}`}
              >
                {mode.label.split(' / ')[0]}
                <span className="hidden md:inline"> / {mode.label.split(' / ')[1]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
