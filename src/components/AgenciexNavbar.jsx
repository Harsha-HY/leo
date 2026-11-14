import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Heart, Globe, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function AgenciexNavbar({ onOpenDonate }) {
  const { theme, currentTheme, setTheme, themes } = useTheme();
  const { lang, setLang, t, languages } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setWorkDropdown(false);
    setLangDropdown(false);
    setThemeDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.navHome, path: "/" },
    { name: t.navAbout, path: "/about" },
    { 
      name: t.navOurWork, 
      path: "/our-work",
      hasDropdown: true,
      children: [
        { name: t.navAgriculture, path: "/our-work/agriculture-environment" },
        { name: t.navChildDevelopment, path: "/our-work/child-development" },
        { name: t.navWomenLivelihoods, path: "/our-work/women-livelihoods" },
        { name: t.navBondedLabour, path: "/our-work/bonded-labour-tribal-welfare" },
      ]
    },
    { name: t.navImpact, path: "/impact" },
    { name: t.navStories, path: "/stories" },
    { name: t.navTransparency, path: "/transparency" },
    { name: t.navContact, path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav className={`mx-auto max-w-7xl transition-all duration-300 rounded-full px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 lg:gap-4 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#181a24]/95 backdrop-blur-md border border-[#e4e4e4] dark:border-[#262833] shadow-md'
            : 'bg-white/90 dark:bg-[#181a24]/90 backdrop-blur-xs border border-[#eaeaea] dark:border-[#262833]'
        }`}>
          {/* Logo & Brand -> Routes to Home */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 p-0.5 bg-white shrink-0 shadow-xs">
              <img 
                src="/images/ppt-logo.jpg" 
                alt="Praja Pragati Trust" 
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`font-bold ${theme.text} text-xs sm:text-sm lg:text-[15px] tracking-tight font-display whitespace-nowrap`}>
                {t.trustName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Proportional Spacing & Dropdown */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-1 justify-center max-w-2xl mx-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setWorkDropdown(true)}
                    onMouseLeave={() => setWorkDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      style={active ? { color: theme.accent, backgroundColor: theme.accentLight } : {}}
                      className={`px-2.5 xl:px-3 py-1.5 text-xs font-semibold rounded-full transition-all inline-flex items-center gap-1 whitespace-nowrap ${
                        active
                          ? 'shadow-xs font-bold'
                          : `${theme.textMuted} hover:${theme.text} hover:bg-[#f7f7f7] dark:hover:bg-zinc-800/60`
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3 h-3 opacity-70" />
                    </Link>

                    {/* Dropdown Menu for Our Work Sub-pages */}
                    {workDropdown && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 w-64 z-50 animate-scaleUp">
                        <div className="p-2 rounded-2xl bg-white dark:bg-[#181a24] border border-[#e4e4e4] dark:border-[#262833] shadow-xl space-y-1">
                          <Link
                            to="/our-work"
                            className="block px-3 py-2 rounded-xl text-xs font-bold border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                          >
                            All Focus Areas Overview →
                          </Link>
                          {link.children.map((child) => {
                            const childActive = location.pathname === child.path;
                            return (
                              <Link
                                key={child.path}
                                to={child.path}
                                style={childActive ? { color: theme.accent, backgroundColor: theme.accentLight } : {}}
                                className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                                  childActive
                                    ? 'font-bold'
                                    : `${theme.textMuted} hover:${theme.text} hover:bg-[#f7f7f7] dark:hover:bg-zinc-800/60`
                                }`}
                              >
                                {child.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={active ? { color: theme.accent, backgroundColor: theme.accentLight } : {}}
                  className={`px-2.5 xl:px-3 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    active
                      ? 'shadow-xs font-bold'
                      : `${theme.textMuted} hover:${theme.text} hover:bg-[#f7f7f7] dark:hover:bg-zinc-800/60`
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* MULTILINGUAL LANGUAGE SWITCHER */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdown(!langDropdown);
                  setThemeDropdown(false);
                }}
                className={`px-2 sm:px-2.5 py-1.5 rounded-full border ${theme.border} hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition-colors ${theme.text}`}
                title="Translate Language (Telugu / Tamil / Hindi / English)"
                aria-label="Select language"
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
                className="p-1.5 sm:p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors flex items-center text-xs"
                title="Change visual mode"
                aria-label="Change theme"
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
                  {Object.values(themes).map((thm, idx) => (
                    <button
                      key={thm.id}
                      onClick={() => {
                        setTheme(thm.id);
                        setThemeDropdown(false);
                      }}
                      className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs text-left transition-all ${
                        thm.id === currentTheme
                          ? 'bg-[#f7f7f7] dark:bg-zinc-800 font-bold'
                          : 'hover:bg-[#fafafa] dark:hover:bg-zinc-800/40 text-zinc-600 dark:text-zinc-300'
                      }`}
                    >
                      <span
                        style={{ backgroundColor: thm.accent }}
                        className="w-3 h-3 rounded-full"
                      />
                      <span className="font-mono text-xs">0{idx + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dedicated /donate Page Link */}
            <Link
              to="/donate"
              style={{
                backgroundColor: theme.accent,
              }}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-xs active:scale-95 shrink-0"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>{t.btnDonate80G.split('(')[0]}</span>
            </Link>

            {/* Dedicated /contact Page Link */}
            <Link
              to="/contact"
              className={`hidden sm:inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-semibold ${theme.text} bg-[#f7f7f7] dark:bg-zinc-800 hover:bg-[#ebebeb] dark:hover:bg-zinc-700 border ${theme.border} transition-all active:scale-95 shrink-0`}
            >
              <span>{t.btnGetInTouch}</span>
              <ArrowUpRight className={`w-3 h-3 ${theme.textMuted}`} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 sm:p-2 rounded-full ${theme.text} hover:bg-[#f7f7f7] dark:hover:bg-zinc-800 transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 dark:bg-[#0d0e12]/98 backdrop-blur-xl lg:hidden flex flex-col pt-20 sm:pt-24 px-4 sm:px-6 pb-8 animate-fadeIn">
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
            
            {/* Language Selector in Mobile */}
            <div className="flex items-center gap-1.5 p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-2 shrink-0">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  style={{
                    backgroundColor: l.code === lang ? theme.accent : undefined,
                    color: l.code === lang ? '#ffffff' : undefined,
                  }}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    l.code === lang ? 'shadow-xs font-bold' : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>

            <div className={`px-2 py-1 text-xs font-mono uppercase tracking-wider ${theme.textMuted}`}>
              Navigation Directory
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.path);

              if (link.hasDropdown) {
                return (
                  <div key={link.path} className="rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        style={active ? { color: theme.accent } : {}}
                        className={`text-base font-semibold ${active ? 'font-bold' : theme.text}`}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                        className="p-1 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        aria-label="Expand submenu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileWorkOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {mobileWorkOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl mt-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            style={location.pathname === child.path ? { color: theme.accent } : {}}
                            className={`block px-3 py-2 text-xs font-medium ${
                              location.pathname === child.path ? 'font-bold' : theme.textMuted
                            } hover:${theme.text} rounded-lg`}
                          >
                            • {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={active ? { color: theme.accent } : {}}
                  className={`px-3 sm:px-4 py-2.5 text-base font-semibold ${
                    active ? 'font-bold bg-zinc-100 dark:bg-zinc-800/80' : theme.text
                  } hover:bg-[#f7f7f7] dark:hover:bg-zinc-800 rounded-xl transition-colors flex items-center justify-between`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className={`w-4 h-4 ${theme.textMuted}`} />
                </Link>
              );
            })}
            
            <div className={`mt-4 pt-4 border-t ${theme.border} space-y-2 shrink-0`}>
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                style={{ backgroundColor: theme.accent }}
                className="w-full py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{t.btnDonate80G}</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full py-2.5 rounded-full text-xs font-semibold text-center block ${theme.text} bg-zinc-100 dark:bg-zinc-800 border ${theme.border}`}
              >
                {t.btnGetInTouch}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}