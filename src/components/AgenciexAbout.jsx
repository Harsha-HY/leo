import React from 'react';
import { Star, ShieldCheck, CheckCircle2, ArrowUpRight, Award, Compass } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import TiltCard from './TiltCard';

export default function AgenciexAbout() {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-20 sm:py-28 ${theme.bg} border-b ${theme.border} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-6">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            About the Trust
          </span>
        </div>

        {/* Big Editorial Headline (Agenciex Signature Style) */}
        <div className="max-w-4xl mb-14">
          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold ${theme.text} leading-[1.2] tracking-tight font-display`}>
            We love the work and the difference it makes for our people. For 41 years we’ve helped marginalized tribal families, women, and vulnerable children find their voice, their rights and their rightful place in society.
          </h2>
        </div>

        {/* 2-Card 3D Agenciex Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Vision & Philosophy with 3D Tilt */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className={`p-8 rounded-3xl ${theme.subBg} border ${theme.border} ${theme.hoverBorder} flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition-all`}
          >
            <div className="space-y-3 translate-z-10">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-medium ${theme.textMuted} uppercase`}>
                  Philosophy & Goal
                </span>
                <Compass style={{ color: theme.accent }} className="w-5 h-5 translate-z-20" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${theme.text} font-display`}>
                Realization of "Grama Swaraj"
              </h3>
              <p className={`text-sm ${theme.textMuted} leading-relaxed`}>
                "{pptData.vision}"
              </p>
            </div>

            <div className={`pt-4 border-t ${theme.border} flex items-center justify-between text-xs ${theme.text} translate-z-10`}>
              <span className="font-semibold">Regd. Trust Act 1882 • Machilipatnam</span>
              <span
                style={{ color: theme.accent }}
                className="font-mono font-bold"
              >
                Since 1983
              </span>
            </div>
          </TiltCard>

          {/* Card 2: Mission & Verification with 3D Tilt */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className={`p-8 rounded-3xl ${theme.subBg} border ${theme.border} ${theme.hoverBorder} flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl transition-all`}
          >
            <div className="space-y-3 translate-z-10">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-medium ${theme.textMuted} uppercase`}>
                  Verified Standing
                </span>
                <span
                  style={{
                    backgroundColor: theme.accentLight,
                    color: theme.accent,
                    borderColor: theme.accentBorder
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border"
                >
                  Audited 100% Score
                </span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold ${theme.text} font-display`}>
                Mission for Holistic Development
              </h3>
              <p className={`text-sm ${theme.textMuted} leading-relaxed`}>
                "{pptData.mission}"
              </p>
            </div>

            <div className={`pt-4 border-t ${theme.border} flex items-center justify-between text-xs ${theme.text} translate-z-10`}>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
                <span className={`ml-1 ${theme.text} font-mono`}>100% Audit Score</span>
              </div>
              <span className={theme.textMuted}>NITI Aayog Empanelled</span>
            </div>
          </TiltCard>

        </div>

        {/* Chairman & Team Highlight Strip with 3D Tilt */}
        <TiltCard
          maxTilt={6}
          scale={1.01}
          className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.border} ${theme.hoverBorder} shadow-sm hover:shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all`}
        >
          <div className="flex items-center gap-5 translate-z-10">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 shrink-0 bg-zinc-100 dark:bg-zinc-800 shadow-md translate-z-20">
              <img
                src="/images/chairman_m_srinivasulu.jpg"
                alt="Mr. M. Srinivasulu, Chairman"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className={`font-bold text-lg ${theme.text} font-display`}>
                Mr. M. Srinivasulu
              </h4>
              <p
                style={{ color: theme.accent }}
                className="text-xs font-semibold"
              >
                Chairman & Founder Trustee • Social Development Specialist
              </p>
              <p className={`text-xs ${theme.textMuted} mt-1 max-w-xl leading-relaxed`}>
                "We facilitate community institutions to help themselves towards self-reliance, dignity, and sustainable growth."
              </p>
            </div>
          </div>

          <a
            href="#governance"
            className={`shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold ${theme.text} bg-[#f7f7f7] dark:bg-zinc-800 hover:bg-[#ebebeb] dark:hover:bg-zinc-700 border ${theme.border} transition-colors translate-z-10`}
          >
            <span>View Board of Trustees</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </TiltCard>

      </div>
    </section>
  );
}
