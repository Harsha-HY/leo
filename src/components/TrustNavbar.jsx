import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function TrustNavbar({ onOpenDonate }) {
  const { theme, currentTheme, setTheme, themes } = useTheme();
  const { lang, setLang, t, languages } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [themeDropdown, setThemeDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Main Clean Navigation matching Reference Screenshot */}
        <nav className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0c1a16]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-emerald-900/10 dark:border-emerald-900/30'
            : 'bg-white/90 dark:bg-[#0c1a16]/90 backdrop-blur-xs py-3 sm:py-4 border-b border-[#eae5d8]/70 dark:border-emerald-950'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Left: Brand Identity matching Screenshot */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-emerald-600/40 p-0.5 bg-white shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <img 
                  src="/images/ppt-logo.jpg" 
                  alt="Praja Pragati Trust Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#0f2d37] dark:text-emerald-50 text-lg sm:text-xl tracking-tight font-display leading-tight">
                  {t.trustName}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-0.5 w-6 bg-amber-500 rounded-full inline-block" />
                  <span className="text-[11px] sm:text-xs text-[#5a6a70] dark:text-emerald-300/80 font-medium tracking-normal">
                    {t.tagline || "Empowering Communities Since 1983"}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links matching Screenshot */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* Home */}
              <Link
                to="/"
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-[#166534] dark:text-emerald-400'
                    : 'text-[#334155] dark:text-zinc-200 hover:text-[#166534] dark:hover:text-emerald-300'
                }`}
              >
                <span>{t.navHome}</span>
                {isActive('/') && location.pathname === '/' && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#166534] dark:bg-emerald-400 rounded-full" />
                )}
              </Link>

              {/* About Us (with dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <Link
                  to="/about"
                  className={`px-3 py-2 text-sm font-semibold flex items-center gap-1 transition-colors ${
                    isActive('/about')
                      ? 'text-[#166534] dark:text-emerald-400'
                      : 'text-[#334155] dark:text-zinc-200 hover:text-[#166534] dark:hover:text-emerald-300'
                  }`}
                >
                  <span>{t.navAbout}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </Link>
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#166534] dark:bg-emerald-400 rounded-full" />
                )}

                {aboutDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-56 p-2 rounded-2xl bg-white dark:bg-[#132822] border border-[#e6e2d8] dark:border-emerald-800 shadow-xl space-y-1 animate-fadeIn">
                    <Link
                      to="/about"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0f2d37] dark:text-zinc-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-colors"
                    >
                      41-Year Trust History
                    </Link>
                    <Link
                      to="/about#board"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0f2d37] dark:text-zinc-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-colors"
                    >
                      Board of Trustees & Founder
                    </Link>
                    <Link
                      to="/about#principles"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0f2d37] dark:text-zinc-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 transition-colors"
                    >
                      Grama Swaraj Philosophy
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Work (with dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setWorkDropdown(true)}
                onMouseLeave={() => setWorkDropdown(false)}
              >
                <Link
                  to="/services"
                  className={`px-3 py-2 text-sm font-semibold flex items-center gap-1 transition-colors ${
                    isActive('/services') || isActive('/projects')
                      ? 'text-[#166534] dark:text-emerald-400'
                      : 'text-[#334155] dark:text-zinc-200 hover:text-[#166534] dark:hover:text-emerald-300'
                  }`}
                >
                  <span>{t.navWork || "Our Work"}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </Link>
                {(isActive('/services') || isActive('/projects')) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#166534] dark:bg-emerald-400 rounded-full" />
                )}

                {workDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-64 p-2 rounded-2xl bg-white dark:bg-[#132822] border border-[#e6e2d8] dark:border-emerald-800 shadow-xl space-y-1 animate-fadeIn">
                    <Link
                      to="/services"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#881337] dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                    >
                      📖 Children's Education & Protection
                    </Link>
                    <Link
                      to="/services"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#166534] dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                    >
                      🍃 Sustainable Agriculture & Ecology
                    </Link>
                    <Link
                      to="/services"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#d97706] dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
                    >
                      👥 Women Empowerment & Livelihoods
                    </Link>
                    <Link
                      to="/projects"
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#0f2d37] dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border-t border-zinc-100 dark:border-zinc-800 mt-1"
                    >
                      🌟 View All 8 Flagship Projects
                    </Link>
                  </div>
                )}
              </div>

              {/* Impact */}
              <Link
                to="/impact"
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/impact')
                    ? 'text-[#166534] dark:text-emerald-400'
                    : 'text-[#334155] dark:text-zinc-200 hover:text-[#166534] dark:hover:text-emerald-300'
                }`}
              >
                <span>{t.navImpact}</span>
                {isActive('/impact') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#166534] dark:bg-emerald-400 rounded-full" />
                )}
              </Link>

              {/* Resources / Transparency */}
              <Link
                to="/impact#awards"
                className="px-3 py-2 text-sm font-semibold text-[#334155] dark:text-zinc-200 hover:text-[#166534] dark:hover:text-emerald-300 transition-colors"
              >
                <span>{t.navResources || "Resources"}</span>
              </Link>

              {/* Get Involved / Contact */}
              <Link
                to="/contact"
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive('/contact')
                    ? 'text-[#166534] dark:text-emerald-400'
                    : 'text-[#334155] dark:text-zinc-200 hover:text-[#166534] dark:hover:text-emerald-300'
                }`}
              >
                <span>{t.navContact || "Get Involved"}</span>
                {isActive('/contact') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#166534] dark:bg-emerald-400 rounded-full" />
                )}
              </Link>

            </div>

            {/* Right Action Elements: Multilingual + Radiant Donate Button */}
            <div className="flex items-center gap-2.5">
              
              {/* Multilingual Selector */}
              <div className="relative">
                <button
                  onClick={() => {
                    setLangDropdown(!langDropdown);
                    setThemeDropdown(false);
                  }}
                  className="px-2.5 py-1.5 rounded-full border border-[#d6cfc0] dark:border-emerald-800 bg-white/80 dark:bg-emerald-950/60 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 text-xs font-semibold flex items-center gap-1.5 transition-colors text-[#0f2d37] dark:text-emerald-100 shadow-2xs"
                  title="Translate Language (Telugu / Tamil / Hindi / English)"
                >
                  <Globe className="w-3.5 h-3.5 text-[#166534] dark:text-emerald-400" />
                  <span className="uppercase text-[11px] font-mono font-bold">
                    {languages.find(l => l.code === lang)?.native || 'EN'}
                  </span>
                </button>

                {langDropdown && (
                  <div 
                    className="absolute right-0 top-full mt-2 w-44 p-2 rounded-2xl bg-white dark:bg-[#132822] border border-[#e6e2d8] dark:border-emerald-800 shadow-xl space-y-1 animate-scaleUp z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-2 py-1 text-[10px] font-mono uppercase text-[#6a5e4c] dark:text-emerald-300/60 border-b border-[#eae5d8] dark:border-emerald-900/60 mb-1">
                      Choose Language
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
                            ? 'bg-emerald-100 dark:bg-emerald-900/80 font-bold text-[#14532d] dark:text-emerald-100'
                            : 'hover:bg-emerald-50/70 dark:hover:bg-emerald-900/40 text-[#334155] dark:text-zinc-300'
                        }`}
                      >
                        <span>{l.native}</span>
                        <span className="text-[10px] font-mono uppercase opacity-70">
                          {l.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Radiant Palette Mood Trigger (Minimal - zero theme names) */}
              <div className="relative">
                <button
                  onClick={() => {
                    setThemeDropdown(!themeDropdown);
                    setLangDropdown(false);
                  }}
                  className="p-2 rounded-full hover:bg-emerald-100/50 dark:hover:bg-emerald-900/50 text-[#5a6a70] dark:text-emerald-300 transition-colors flex items-center text-xs"
                  title="Switch Palette Mood"
                >
                  <span
                    style={{ backgroundColor: theme.accent }}
                    className="w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-emerald-900"
                  />
                </button>

                {themeDropdown && (
                  <div 
                    className="absolute right-0 top-full mt-2 w-32 p-2 rounded-2xl bg-white dark:bg-[#132822] border border-[#e6e2d8] dark:border-emerald-800 shadow-xl space-y-1 animate-scaleUp z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-2 py-0.5 text-[10px] font-mono uppercase text-[#6a5e4c] dark:text-emerald-300/60 border-b border-[#eae5d8] dark:border-emerald-900/60 mb-1">
                      Mood
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
                            ? 'bg-emerald-100 dark:bg-emerald-900 font-bold'
                            : 'hover:bg-emerald-50 dark:hover:bg-emerald-900/40 text-zinc-700 dark:text-zinc-300'
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

              {/* Primary Wine Red "Donate ♡" Pill Button matching Reference Screenshot */}
              <Link
                to="/donate"
                className="bg-[#881337] hover:bg-[#9f1239] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg hover:shadow-rose-950/20 active:scale-95 group"
              >
                <span>{t.btnDonateNow || "Donate ♡"}</span>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-[#0f2d37] dark:text-emerald-100 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/50 transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 dark:bg-[#0c1a16]/98 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 animate-fadeIn overflow-y-auto">
          {/* Mobile Language Selector */}
          <div className="flex items-center gap-2 p-2 bg-emerald-50 dark:bg-emerald-950/70 rounded-2xl mb-4 border border-emerald-900/10">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                  l.code === lang
                    ? 'bg-[#166534] text-white shadow-xs'
                    : 'text-[#334155] dark:text-zinc-300'
                }`}
              >
                {l.native}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-1 text-base font-semibold">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-[#0f2d37] dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              {t.navHome}
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-[#0f2d37] dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              {t.navAbout}
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-[#0f2d37] dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              {t.navWork || "Our Work"}
            </Link>
            <Link
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-[#0f2d37] dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              {t.navProjects}
            </Link>
            <Link
              to="/impact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-[#0f2d37] dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              {t.navImpact}
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-[#0f2d37] dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
            >
              {t.navContact || "Get Involved"}
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-[#eae5d8] dark:border-emerald-900/50 space-y-3">
            <Link
              to="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-[#881337] text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-rose-950/20"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t.btnDonate80G}</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
