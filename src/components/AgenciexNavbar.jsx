import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Heart, ShieldCheck, Palette, Globe, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function AgenciexNavbar({ onOpenDonate }) {
  const { theme, currentTheme, setTheme, themes } = useTheme();
  const { lang, setLang, t, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navAbout, href: "#about" },
    { name: t.navServices, href: "#services" },
    { name: t.navProjects, href: "#projects" },
    { name: t.navImpact, href: "#impact" },
    { name: t.navGovernance, href: "#governance" },
    { name: t.navOffices, href: "#offices" },
    { name: t.navReports, href: "#reports" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
        <nav className={`mx-auto max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-white/95 dark:bg-[#181a24]/95 backdrop-blur-md border border-[#e4e4e4] dark:border-[#262833] shadow-md'
            : 'bg-white/80 dark:bg-[#181a24]/80 backdrop-blur-xs border border-[#eaeaea] dark:border-[#262833]'
        }`}>
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 p-0.5 bg-white shrink-0 shadow-xs">
              <img 
                src="/images/ppt-logo.jpg" 
                alt="Praja Pragati Trust" 
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`font-bold ${theme.text} text-sm sm:text-base tracking-tight font-display`}>
                {t.trustName}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium ${theme.textMuted} hover:${theme.text} hover:bg-[#f7f7f7] dark:hover:bg-zinc-800/60 rounded-full transition-all`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* MULTILINGUAL LANGUAGE SWITCHER */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdown(!langDropdown);
                  setThemeDropdown(false);
                }}
                className={`px-2.5 py-1.5 rounded-full border ${theme.border} hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold flex items-center gap-1.5 transition-colors ${theme.text}`}
                title="Translate Language (Telugu / Tamil / Hindi / English)"
              >
                <Globe className="w-3.5 h-3.5 text-[#ff6036]" style={{ color: theme.accent }} />
                <span className="uppercase text-[11px] font-mono">
                  {languages.find(l => l.code === lang)?.native || 'EN'}
                </span>
              </button>

              {langDropdown && (
                <div 
                  className="absolute right-0 top-full mt-2 w-44 p-2 rounded-2xl bg-white dark:bg-[#181a24] border border-[#e4e4e4] dark:border-[#262833] shadow-xl space-y-1 animate-scaleUp z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-2 py-1 text-[10px] font-mono uppercase text-[#717171] border-b border-[#e4e4e4] dark:border-[#262833] mb-1">
                    Select Language
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdown(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs text-left transition-all ${
                        l.code === lang
                          ? 'bg-[#f7f7f7] dark:bg-zinc-800 font-bold'
                          : 'hover:bg-[#fafafa] dark:hover:bg-zinc-800/40 text-zinc-600 dark:text-zinc-300'
                      }`}
                    >
                      <span>{l.native}</span>
                      <span className="text-[10px] font-mono uppercase text-[#717171]">
                        {l.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Aesthetic Mode Trigger */}
            <div className="relative">
              <button
                onClick={() => {
                  setThemeDropdown(!themeDropdown);
                  setLangDropdown(false);
                }}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors flex items-center text-xs"
                title="Change visual mode"
              >
                <span
                  style={{ backgroundColor: theme.accent }}
                  className="w-2.5 h-2.5 rounded-full"
                />
              </button>

              {themeDropdown && (
                <div 
                  className="absolute right-0 top-full mt-2 w-36 p-2 rounded-2xl bg-white dark:bg-[#181a24] border border-[#e4e4e4] dark:border-[#262833] shadow-xl space-y-1 animate-scaleUp z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-2 py-0.5 text-[10px] font-mono uppercase text-[#717171] border-b border-[#e4e4e4] dark:border-[#262833] mb-1">
                    Mode
                  </div>
                  {Object.values(themes).map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeDropdown(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs text-left transition-all ${
                        t.id === currentTheme
                          ? 'bg-[#f7f7f7] dark:bg-zinc-800 font-bold'
                          : 'hover:bg-[#fafafa] dark:hover:bg-zinc-800/40 text-zinc-600 dark:text-zinc-300'
                      }`}
                    >
                      <span
                        style={{ backgroundColor: t.accent }}
                        className="w-3 h-3 rounded-full"
                      />
                      <span className="font-mono text-xs">0{idx + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Donate 80G Button */}
            <button
              onClick={onOpenDonate}
              style={{
                backgroundColor: theme.accent,
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-xs active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>{t.btnDonate80G.split('(')[0]}</span>
            </button>

            {/* Get in Touch Button */}
            <a
              href="#contact"
              className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-xs font-semibold ${theme.text} bg-[#f7f7f7] dark:bg-zinc-800 hover:bg-[#ebebeb] dark:hover:bg-zinc-700 border ${theme.border} transition-all active:scale-95`}
            >
              <span>{t.btnGetInTouch}</span>
              <ArrowUpRight className={`w-3 h-3 ${theme.textMuted}`} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full ${theme.text} hover:bg-[#f7f7f7] dark:hover:bg-zinc-800 transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 dark:bg-[#0d0e12]/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 animate-fadeIn">
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
            {/* Language Selector in Mobile */}
            <div className="flex items-center gap-2 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  style={{
                    backgroundColor: l.code === lang ? theme.accent : undefined,
                    color: l.code === lang ? '#ffffff' : undefined,
                  }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    l.code === lang ? 'shadow-xs' : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>

            <div className={`px-3 py-1 text-xs font-mono uppercase tracking-wider ${theme.textMuted}`}>
              Directory
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-semibold ${theme.text} hover:bg-[#f7f7f7] dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center justify-between`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className={`w-4 h-4 ${theme.textMuted}`} />
              </a>
            ))}
            
            <div className={`mt-4 pt-4 border-t ${theme.border} space-y-3`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                style={{ backgroundColor: theme.accent }}
                className="w-full py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{t.btnDonate80G}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
