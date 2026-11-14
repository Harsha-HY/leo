import React from 'react';
import { ArrowUpRight, CheckCircle2, Sprout, ShieldAlert, Users } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import TiltCard from './TiltCard';

export default function AgenciexServices({ onOpenDonate }) {
  const { theme } = useTheme();
  const pillars = pptData.thematicPillars;

  const pillarIcons = [
    <Sprout className="w-5 h-5 text-white" />,
    <ShieldAlert className="w-5 h-5 text-white" />,
    <Users className="w-5 h-5 text-white" />
  ];

  return (
    <section id="services" className={`py-20 sm:py-28 ${theme.subBg} border-b ${theme.border} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            Trust Services & Pillars
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.15] font-display`}>
            We help vulnerable communities rise, stand strong and achieve equality.
          </h2>
          <p className={`text-base sm:text-lg ${theme.textMuted} mt-3`}>
            Over four decades, our multi-disciplinary interventions have bridged grassroots action with institutional accountability across 26 districts of Andhra Pradesh, Telangana, and Tamil Nadu.
          </p>
        </div>

        {/* 3 Large 3D Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <TiltCard
              key={pillar.id}
              maxTilt={10}
              scale={1.02}
              className={`${theme.cardBg} rounded-3xl border ${theme.cardBorder} ${theme.hoverBorder} transition-all p-7 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-2xl`}
            >
              <div className="space-y-6 translate-z-10">
                {/* Header with Icon and Pillar Number */}
                <div className="flex items-center justify-between">
                  <div
                    style={{ backgroundColor: theme.accent }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md translate-z-20"
                  >
                    {pillarIcons[idx]}
                  </div>
                  <span
                    style={{ color: theme.accent }}
                    className="text-sm font-mono font-bold"
                  >
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <span
                    style={{ color: theme.accent }}
                    className="text-[11px] font-mono uppercase tracking-wider block font-semibold"
                  >
                    {pillar.badge}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-bold ${theme.text} leading-snug group-hover:text-[#ff6036] transition-colors font-display`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                    {pillar.tagline}
                  </p>
                </div>

                {/* 3D Service Image */}
                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 translate-z-20">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/images/natural_farming_field.jpg";
                    }}
                  />
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className={`text-[11px] font-mono font-medium ${theme.textMuted} uppercase tracking-wider block`}>
                    Core Outcomes & Action
                  </span>
                  <ul className="space-y-2.5">
                    {pillar.points.slice(0, 4).map((pt, pIdx) => (
                      <li key={pIdx} className={`flex items-start gap-2.5 text-xs ${theme.text} leading-relaxed`}>
                        <CheckCircle2
                          style={{ color: theme.accent }}
                          className="w-4 h-4 shrink-0 mt-0.5"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className={`pt-6 mt-6 border-t ${theme.border} flex items-center justify-between translate-z-10`}>
                <a
                  href="#projects"
                  className={`text-xs font-semibold ${theme.text} flex items-center gap-1 transition-colors`}
                >
                  <span>Explore related projects</span>
                  <ArrowUpRight
                    style={{ color: theme.accent }}
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Banner inside Services */}
        <div className={`mt-12 p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs`}>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className={`font-bold text-base ${theme.text} font-display`}>
              Looking to deploy CSR or Institutional Grants?
            </h4>
            <p className={`text-xs sm:text-sm ${theme.textMuted}`}>
              PPT is registered under MCA (CSR00017363), NITI Aayog NGO Darpan, and holds valid 12A, 80G, and FCRA clearances.
            </p>
          </div>
          <button
            onClick={onOpenDonate}
            style={{ backgroundColor: theme.accent }}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-md active:scale-95"
          >
            Partner With Us
          </button>
        </div>

      </div>
    </section>
  );
}
