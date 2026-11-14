import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ShieldAlert, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Heart,
  Droplets,
  BookOpen,
  Scale
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import TiltCard from '../components/TiltCard';
import AgenciexApproach from '../components/AgenciexApproach';
import AgenciexCommunities from '../components/AgenciexCommunities';

export default function ServicesPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const pillars = pptData.thematicPillars;

  const pillarIcons = [
    <Sprout className="w-6 h-6 text-white" />,
    <ShieldAlert className="w-6 h-6 text-white" />,
    <Users className="w-6 h-6 text-white" />
  ];

  return (
    <div className={`pt-28 sm:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
            <span>Our Services & Thematic Pillars</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            3 Comprehensive Portfolios • 26 Districts
          </span>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          We build community institutions <br />
          that <span style={{ color: theme.accent }}>transform lives.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-6 max-w-3xl leading-relaxed`}>
          Over four decades of dedicated casework, Praja Pragati Trust has developed rigorous, community-led models bridging early childhood education, human trafficking abolition, and climate-resilient organic agriculture.
        </p>
      </section>

      {/* 2. 3 In-Depth Pillars (Rich Detail View) */}
      <section className={`py-16 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`p-8 sm:p-12 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-lg space-y-8`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Pillar Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      style={{ backgroundColor: theme.accent }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                    >
                      {pillarIcons[idx]}
                    </div>
                    <div>
                      <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block">
                        Pillar 0{idx + 1} • {pillar.badge}
                      </span>
                      <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display mt-0.5`}>
                        {pillar.title}
                      </h2>
                    </div>
                  </div>

                  <p className={`text-sm sm:text-base font-medium ${theme.text} leading-relaxed`}>
                    "{pillar.tagline}"
                  </p>

                  <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                    {pillar.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.text} block`}>
                      Verified Field Outcomes:
                    </span>
                    <ul className="space-y-2">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className={`flex items-start gap-2.5 text-xs sm:text-sm ${theme.text} leading-relaxed`}>
                          <CheckCircle2 style={{ color: theme.accent }} className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Pillar Visual */}
                <div className="lg:col-span-5">
                  <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 shadow-md">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/images/natural_farming_field.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono uppercase bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full">
                        Field Photo • Active Casework
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our 3-Step Methodology & Approach */}
      <AgenciexApproach />

      {/* 4. Communities We Serve */}
      <AgenciexCommunities />

      {/* 5. Bottom CSR / Institutional Partner CTA */}
      <section className={`py-20 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 sm:p-12 rounded-3xl ${theme.subBg} border ${theme.border} flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm`}>
            <div className="space-y-2 max-w-xl">
              <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider">
                CSR Implementation Partner
              </span>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display`}>
                Deploy Corporate Social Responsibility Grants
              </h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted}`}>
                PPT is registered under MCA (CSR00017363) and provides complete statutory audit trails, audited utilization certificates, and quarterly social impact reports.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenDonate}
                style={{ backgroundColor: theme.accent }}
                className="px-6 py-3 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Partner on 80G CSR</span>
              </button>

              <Link
                to="/contact"
                className={`px-6 py-3 rounded-full text-xs font-semibold ${theme.text} bg-white dark:bg-zinc-800 border ${theme.border} hover:bg-zinc-100 transition-all`}
              >
                Contact CSR Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
