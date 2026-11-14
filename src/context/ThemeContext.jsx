import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = {
  terracotta: {
    id: 'terracotta',
    name: 'Studio Terracotta',
    tag: 'Agenciex Clean',
    accent: '#ff6036',
    accentHover: '#ea4a1e',
    accentLight: '#fff6f3',
    accentBorder: '#ffddd4',
    badgeText: '#ff6036',
    bg: 'bg-white',
    subBg: 'bg-[#fafafa]',
    cardBg: 'bg-white',
    cardBorder: 'border-[#e4e4e4]',
    hoverBorder: 'hover:border-[#ff6036]',
    text: 'text-[#151515]',
    textMuted: 'text-[#717171]',
    border: 'border-[#e4e4e4]',
    isDark: false,
    gradient: 'from-[#ff6036] to-[#ff8c69]'
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Ecology',
    tag: 'Grama Swaraj & Earth',
    accent: '#059669',
    accentHover: '#047857',
    accentLight: '#ecfdf5',
    accentBorder: '#a7f3d0',
    badgeText: '#059669',
    bg: 'bg-white',
    subBg: 'bg-[#f7faf8]',
    cardBg: 'bg-white',
    cardBorder: 'border-[#e2e8f0]',
    hoverBorder: 'hover:border-[#059669]',
    text: 'text-[#0f172a]',
    textMuted: 'text-[#64748b]',
    border: 'border-[#e2e8f0]',
    isDark: false,
    gradient: 'from-[#059669] to-[#34d399]'
  },
  sapphire: {
    id: 'sapphire',
    name: 'Sapphire Justice',
    tag: 'Rights & Rule of Law',
    accent: '#4f46e5',
    accentHover: '#4338ca',
    accentLight: '#eef2ff',
    accentBorder: '#c7d2fe',
    badgeText: '#4f46e5',
    bg: 'bg-white',
    subBg: 'bg-[#f8fafc]',
    cardBg: 'bg-white',
    cardBorder: 'border-[#e2e8f0]',
    hoverBorder: 'hover:border-[#4f46e5]',
    text: 'text-[#0f172a]',
    textMuted: 'text-[#64748b]',
    border: 'border-[#e2e8f0]',
    isDark: false,
    gradient: 'from-[#4f46e5] to-[#818cf8]'
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight Obsidian',
    tag: 'Dark Luxury Studio',
    accent: '#ff6036',
    accentHover: '#ea4a1e',
    accentLight: '#231815',
    accentBorder: '#45231c',
    badgeText: '#ff7550',
    bg: 'bg-[#0d0e12]',
    subBg: 'bg-[#13151b]',
    cardBg: 'bg-[#181a24]',
    cardBorder: 'border-[#262833]',
    hoverBorder: 'hover:border-[#ff6036]',
    text: 'text-[#f3f4f6]',
    textMuted: 'text-[#9ca3af]',
    border: 'border-[#262833]',
    isDark: true,
    gradient: 'from-[#ff6036] to-[#f59e0b]'
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('terracotta');

  const theme = themes[currentTheme] || themes.terracotta;

  const setTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
