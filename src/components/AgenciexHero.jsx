import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import TypewriterText from './TypewriterText';
import Trending3DHeroStage from './Trending3DHeroStage';
import TiltCard from './TiltCard';

export default function AgenciexHero({ onOpenDonate, onSelectProject }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const projects = pptData.flagshipProjects;

  return (
    <section className={`pt-28 sm:pt-36 pb-12 ${theme.bg} transition-colors duration-300 overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span
            style={{
              backgroundColor: theme.accentLight,
              color: theme.accent,
              borderColor: theme.accentBorder,
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold border shadow-xs"
          >
            <span
              style={{ backgroundColor: theme.accent }}
              className="w-2 h-2 rounded-full animate-ping"
            />
            <span>{t.trustBadge}</span>
          </span>
          <span className={`text-xs ${theme.textMuted} hidden sm:inline font-mono`}>
            {t.trustSub}
          </span>
        </div>

        {/* 2-Column Hero: Left Headline + Typewriter; Right: Trending 3D Hero Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline with Typing Effect */}
          <div className="lg:col-span-6 space-y-5">
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.04] font-display`}>
              {t.heroPrefix} <br />
              <TypewriterText
                words={t.typewriter}
                typingSpeed={75}
                deletingSpeed={35}
                pauseTime={2200}
                className="font-extrabold"
                cursorColor={theme.accent}
              />
            </h1>

            <p className={`text-base sm:text-xl ${theme.text} font-normal leading-relaxed max-w-xl`}>
              {t.heroDesc}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#151515] hover:bg-[#2b2b2b] dark:bg-white dark:text-[#151515] dark:hover:bg-zinc-200 transition-all shadow-md group active:scale-95"
              >
                <span>{t.btnSelectedWork}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenDonate}
                style={{
                  backgroundColor: theme.accentLight,
                  borderColor: theme.accentBorder,
                  color: theme.accent,
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold border transition-all hover:scale-102 active:scale-95 shadow-xs"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>{t.btnDonate80G}</span>
              </button>
            </div>

            {/* Trust Mini Badges */}
            <div className={`pt-4 flex flex-wrap items-center gap-4 text-xs ${theme.textMuted} font-mono`}>
              <span>✓ 80G & 12A Certified</span>
              <span>•</span>
              <span>✓ FCRA Regd 010140011</span>
              <span>•</span>
              <span>✓ 100% Audit Score</span>
            </div>
          </div>

          {/* Right Column: Trending 3D Interactive Stage */}
          <div className="lg:col-span-6">
            <Trending3DHeroStage onSelectProject={onSelectProject} />
          </div>

        </div>

      </div>

      {/* Horizontal Project Strip with 3D Tilt Cards */}
      <div className={`mt-14 sm:mt-18 w-full overflow-hidden border-y ${theme.border} ${theme.subBg} py-6 sm:py-8 transition-colors`}>
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between text-xs ${theme.textMuted}`}>
          <div className="flex items-center gap-2">
            <span
              style={{ backgroundColor: theme.accent }}
              className="w-2 h-2 rounded-full"
            />
            <span className="font-mono uppercase tracking-wider text-[11px] font-bold">
              Active Field Interventions Across South India
            </span>
          </div>
          <span className="font-mono text-[11px] hidden sm:inline">
            3D Tilt Enabled • Hover to inspect
          </span>
        </div>

        <div className="relative w-full overflow-hidden marquee-container">
          <div className="flex w-max animate-marquee items-center gap-5 sm:gap-6 px-4">
            {[...projects, ...projects].map((p, index) => (
              <TiltCard
                key={`${p.id}-${index}`}
                maxTilt={12}
                scale={1.03}
                onClick={() => onSelectProject(p)}
                className={`w-72 sm:w-80 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} overflow-hidden shadow-sm hover:shadow-xl transition-all shrink-0`}
              >
                {/* 3D Visual Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/images/hero_happy_children.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3 translate-z-20">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/95 dark:bg-zinc-900/90 text-[#151515] dark:text-white border border-[#e4e4e4] dark:border-zinc-700 shadow-sm backdrop-blur-xs">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* 3D Content Info */}
                <div className="p-4 space-y-1.5 translate-z-10">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono ${theme.textMuted} uppercase`}>
                      {p.partner.split('&')[0]}
                    </span>
                    <ArrowUpRight
                      style={{ color: theme.accent }}
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <h3 className={`font-bold text-sm ${theme.text} line-clamp-1`}>
                    {p.title}
                  </h3>
                  <p className={`text-xs ${theme.textMuted} line-clamp-1`}>
                    {p.summary}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>

      {/* 4-Stat Strip (Agenciex Signature Bar) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-b ${theme.border}`}>
          <div className="space-y-0.5 group">
            <span className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight font-display`}>
              41 +
            </span>
            <p className={`text-xs sm:text-sm ${theme.textMuted} font-medium`}>
              {t.statYears}
            </p>
          </div>

          <div className="space-y-0.5 group">
            <span className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight font-display`}>
              17,179 +
            </span>
            <p className={`text-xs sm:text-sm ${theme.textMuted} font-medium`}>
              {t.statChildren}
            </p>
          </div>

          <div className="space-y-0.5 group">
            <span className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight font-display`}>
              489 +
            </span>
            <p className={`text-xs sm:text-sm ${theme.textMuted} font-medium`}>
              {t.statLabour}
            </p>
          </div>

          <div className="space-y-0.5 group">
            <span className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight font-display`}>
              1,351 +
            </span>
            <p className={`text-xs sm:text-sm ${theme.textMuted} font-medium`}>
              {t.statFarming}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
