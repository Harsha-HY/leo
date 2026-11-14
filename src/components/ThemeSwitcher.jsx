import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, themes, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Switcher Dropdown without theme names */}
      {isOpen && (
        <div 
          className="mb-3 p-2.5 rounded-2xl bg-white/95 dark:bg-[#181a24]/95 backdrop-blur-md border border-[#e4e4e4] dark:border-[#262833] shadow-2xl animate-scaleUp w-44 space-y-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-2 pt-0.5 pb-1 text-[10px] font-mono uppercase text-[#717171] border-b border-[#e4e4e4] dark:border-[#262833]">
            Aesthetic Mode
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {Object.values(themes).map((t, idx) => {
              const isSelected = t.id === currentTheme;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-400 dark:ring-zinc-600'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
                  }`}
                  aria-label={`Mode 0${idx + 1}`}
                >
                  <span
                    style={{ backgroundColor: t.accent }}
                    className="w-3.5 h-3.5 rounded-full ring-2 ring-white dark:ring-[#181a24] shadow-xs shrink-0"
                  />
                  <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-200">
                    Mode 0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Toggle Icon - Clean & Minimal, NO Theme Name Text */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderColor: theme.accentBorder }}
        className="w-11 h-11 rounded-full bg-white/95 dark:bg-[#181a24]/95 backdrop-blur-md border shadow-lg hover:shadow-xl transition-all active:scale-95 text-[#151515] dark:text-white flex items-center justify-center group"
        aria-label="Toggle visual mode"
      >
        <span
          style={{ backgroundColor: theme.accent }}
          className="w-2.5 h-2.5 rounded-full absolute -top-0.5 -right-0.5 ring-2 ring-white dark:ring-[#181a24]"
        />
        <Palette className="w-4 h-4 text-[#717171] group-hover:rotate-45 transition-transform" />
      </button>
    </div>
  );
}
