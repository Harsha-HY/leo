import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, TrendingUp, Award, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import Trending3DBentoGrid from '../components/Trending3DBentoGrid';
import TrustTransformation from '../components/TrustTransformation';
import AgenciexAwards from '../components/AgenciexAwards';
import AgenciexTestimonials from '../components/AgenciexTestimonials';

export default function ImpactPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const stats = pptData.keyImpactStats;

  return (
    <div className={`pt-28 sm:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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
            <span>Impact Metrics & Accountability</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            100% Institutional Audit Score • NITI Aayog Empanelled
          </span>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          Transparent metrics. <br />
          Uncompromising <span style={{ color: theme.accent }}>integrity.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-6 max-w-3xl leading-relaxed`}>
          For 41 years, Praja Pragati Trust has subjected every rupee, every field intervention, and every beneficiary enrollment to independent statutory audits.
        </p>
      </section>

      {/* 2. Key Stats Strip (6 Metric Bento Grid) */}
      <section className={`py-12 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} space-y-1 shadow-xs`}
              >
                <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block truncate`}>
                  {st.label}
                </span>
                <span style={{ color: theme.accent }} className="text-2xl font-black font-display block">
                  {st.value}
                </span>
                <span className={`text-[10px] ${theme.textMuted} block`}>
                  {st.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trending 3D Bento Matrix */}
      <Trending3DBentoGrid onOpenDonate={onOpenDonate} />

      {/* 4. Interactive Grassroots Transformation Lens (Before vs After Slider & Delta Gauges) */}
      <TrustTransformation onOpenDonate={onOpenDonate} />

      {/* 5. Full Awards & Recognitions Table */}
      <AgenciexAwards />

      {/* 6. Beneficiary Testimonials & Endorsements */}
      <AgenciexTestimonials />

      {/* 6. Donate / CSR Action Banner */}
      <section className={`py-20 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 sm:p-12 rounded-3xl ${theme.subBg} border ${theme.border} flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm`}>
            <div className="space-y-2 max-w-xl">
              <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider">
                Support High-Impact Casework
              </span>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display`}>
                Help us reach the next 10,000 families
              </h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted}`}>
                Your contribution directly funds legal release certificates for bonded laborers, organic seeds for marginal farmers, and library books for rural children.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenDonate}
                style={{ backgroundColor: theme.accent }}
                className="px-6 py-3 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate with 80G (50% Tax Exemption)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
