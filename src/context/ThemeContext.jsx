import React, { createContext, useContext, useState, useEffect } from 'react';

export const themes = {
  trustRadiant: {
    id: 'trustRadiant',
    name: 'Trust Radiant Emerald',
    accent: '#166534', // Deep Forest Green from Logo
    accentHover: '#14532d',
    accentLight: '#f0fdf4',
    accentBorder: '#bbf7d0',
    accentWine: '#881337', // Deep Wine Red from Logo
    accentWineLight: '#fff1f2',
    accentAmber: '#d97706', // Radiant Amber Gold from Logo
    accentAmberLight: '#fffbeb',
    badgeText: '#166534',
    bg: 'bg-[#fdfbf7]',
    subBg: 'bg-[#f7f4ec]',
    cardBg: 'bg-white',
    cardBorder: 'border-[#eae5d8]',
    hoverBorder: 'hover:border-[#166534]',
    text: 'text-[#0f2d37]',
    textMuted: 'text-[#5a6a70]',
    border: 'border-[#eae5d8]',
    isDark: false,
    gradient: 'from-[#166534] via-[#15803d] to-[#047857]'
  },
  trustWine: {
    id: 'trustWine',
    name: 'Trust Radiant Burgundy',
    accent: '#881337',
    accentHover: '#700c28',
    accentLight: '#fff1f2',
    accentBorder: '#fecdd3',
    accentWine: '#881337',
    accentWineLight: '#fff1f2',
    accentAmber: '#d97706',
    accentAmberLight: '#fffbeb',
    badgeText: '#881337',
    bg: 'bg-[#fefbfc]',
    subBg: 'bg-[#fbf1f4]',
    cardBg: 'bg-white',
    cardBorder: 'border-[#f5d9df]',
    hoverBorder: 'hover:border-[#881337]',
    text: 'text-[#201018]',
    textMuted: 'text-[#6b5860]',
    border: 'border-[#f5d9df]',
    isDark: false,
    gradient: 'from-[#881337] via-[#9f1239] to-[#be123c]'
  },
  trustAmber: {
    id: 'trustAmber',
    name: 'Trust Radiant Ochre',
    accent: '#d97706',
    accentHover: '#b45309',
    accentLight: '#fffbeb',
    accentBorder: '#fde68a',
    accentWine: '#881337',
    accentWineLight: '#fff1f2',
    accentAmber: '#d97706',
    accentAmberLight: '#fffbeb',
    badgeText: '#d97706',
    bg: 'bg-[#fffdfa]',
    subBg: 'bg-[#fdf6ec]',
    cardBg: 'bg-white',
    cardBorder: 'border-[#faeccf]',
    hoverBorder: 'hover:border-[#d97706]',
    text: 'text-[#271d0e]',
    textMuted: 'text-[#6a5e4c]',
    border: 'border-[#faeccf]',
    isDark: false,
    gradient: 'from-[#d97706] via-[#ea580c] to-[#f59e0b]'
  },
  trustMidnight: {
    id: 'trustMidnight',
    name: 'Trust Deep Forest Midnight',
    accent: '#22c55e',
    accentHover: '#16a34a',
    accentLight: '#0d2315',
    accentBorder: '#144324',
    accentWine: '#fb7185',
    accentWineLight: '#240a12',
    accentAmber: '#fbbf24',
    accentAmberLight: '#241a05',
    badgeText: '#4ade80',
    bg: 'bg-[#091512]',
    subBg: 'bg-[#0f211c]',
    cardBg: 'bg-[#132822]',
    cardBorder: 'border-[#1b3a32]',
    hoverBorder: 'hover:border-[#22c55e]',
    text: 'text-[#eefbf6]',
    textMuted: 'text-[#88a59c]',
    border: 'border-[#1b3a32]',
    isDark: true,
    gradient: 'from-[#15803d] to-[#22c55e]'
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('ppt_theme');
      return themes[saved] ? saved : 'trustRadiant';
    } catch {
      return 'trustRadiant';
    }
  });

  const theme = themes[currentTheme] || themes.trustRadiant;

  const setTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
      try {
        localStorage.setItem('ppt_theme', themeId);
      } catch (e) {}
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme.isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
