import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  TrendingUp, 
  Heart, 
  Clock, 
  Layers, 
  CheckCircle2,
  Users,
  Compass,
  FileCheck
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { pptData } from '../data/pptData';
import TiltCard from './TiltCard';

export default function Trending3DBentoGrid({ onOpenDonate }) {
  const { theme } = useTheme();
  const [activeEra, setActiveEra] = useState('2026');
  const [copiedAcc, setCopiedAcc] = useState(false);

  const eras = {
    '1983': {
      label: '1983 — Genesis',
      title: 'Trust Registration Act 1882',
      desc: 'Established in Machilipatnam under Trust Deed No. 24/83 by visionary social worker Mr. M. Srinivasulu to champion Gandhian Grama Swaraj.',
      stat: '41 Years',
      statSub: 'Of Unbroken Grassroots Service'
    },
    '2004': {
      label: '2004 — Child Rights',
      title: 'Childline 1098 & ECCE Bridge Centers',
      desc: 'Expanded into transit care and protection, rescuing runaway children from railway stations and formalizing school re-enrollment.',
      stat: '17,179+',
      statSub: 'Children Educated & Retained'
    },
    '2018': {
      label: '2018 — Modern Slavery',
      title: 'Abolition of Bonded Labour',
      desc: 'Conducted high-risk rescue operations across brick kilns and quarries, securing 489 legal Release Certificates under Section 370 IPC.',
      stat: '489',
      statSub: 'Survivors Legally Liberated'
    },
    '2026': {
      label: '2026 — Present Day',
      title: 'Comprehensive Ecosystem Uplift',
      desc: 'Integrating Zero-Budget Natural Farming with Azim Premji Foundation, Project DROP recycling with Kia India, and Yanadi tribal welfare.',
      stat: '100%',
      statSub: 'Statutory Governance Score'
    }
  };

  const currentEra = eras[activeEra];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAcc(true);
    setTimeout(() => setCopiedAcc(false), 2000);
  };

  return (
    <section id="impact" className={`py-20 sm:py-28 ${theme.bg} border-b ${theme.border} transition-colors relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            Trending 3D Bento Matrix
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f7f7f7] dark:bg-zinc-800 text-[#717171] border border-[#e4e4e4] dark:border-zinc-700">
            Interactive Panels
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.12] font-display`}>
            A four-decade impact engine engineered for grassroots justice.
          </h2>
          <p className={`text-base sm:text-lg ${theme.textMuted} mt-3`}>
            Explore our operational depth across statutory governance, multi-state field centers, and audited community outcomes.
          </p>
        </div>

        {/* 3D Bento Grid (Asymmetric Modern Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* PANEL 1: 41-Year Interactive Golden Timeline (Span 8 cols) */}
          <TiltCard
            maxTilt={6}
            scale={1.01}
            className={`md:col-span-8 p-7 sm:p-9 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl flex flex-col justify-between group transition-all`}
          >
            <div className="space-y-6 translate-z-10">
              
              {/* Header with Era Selector Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b ${theme.border}">
                <div className="flex items-center gap-2.5">
                  <div
                    style={{ backgroundColor: theme.accentLight }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-current"
                  >
                    <Clock style={{ color: theme.accent }} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${theme.text} font-display`}>
                      The 41-Year Evolution Matrix
                    </h3>
                    <span className={`text-xs ${theme.textMuted} font-mono`}>
                      1983 — 2026 Milestone Tracker
                    </span>
                  </div>
                </div>

                {/* Scrubber Tabs */}
                <div className="flex items-center gap-1 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                  {Object.keys(eras).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveEra(key)}
                      style={{
                        backgroundColor: activeEra === key ? theme.accent : undefined,
                        color: activeEra === key ? '#ffffff' : undefined,
                      }}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                        activeEra === key ? 'shadow-sm' : `${theme.textMuted} hover:${theme.text}`
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Era Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                <div className="sm:col-span-8 space-y-2">
                  <span
                    style={{ color: theme.accent }}
                    className="text-xs font-mono font-bold uppercase tracking-wider block"
                  >
                    {currentEra.label}
                  </span>
                  <h4 className={`text-xl sm:text-2xl font-extrabold ${theme.text} font-display`}>
                    {currentEra.title}
                  </h4>
                  <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed pt-1`}>
                    {currentEra.desc}
                  </p>
                </div>

                <div className="sm:col-span-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-center space-y-1">
                  <span
                    style={{ color: theme.accent }}
                    className="text-3xl sm:text-4xl font-black font-display block"
                  >
                    {currentEra.stat}
                  </span>
                  <span className={`text-[11px] font-mono ${theme.textMuted} block uppercase leading-snug`}>
                    {currentEra.statSub}
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Status Ticker */}
            <div className={`pt-6 mt-6 border-t ${theme.border} flex items-center justify-between text-xs font-mono ${theme.textMuted} translate-z-10`}>
              <span>Official Trust Charter: Regd. 24/83</span>
              <span style={{ color: theme.accent }} className="font-bold">Permanent Trust Legal Status</span>
            </div>
          </TiltCard>

          {/* PANEL 2: 3D Programmatic Distribution Donut/Pillars (Span 4 cols) */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className={`md:col-span-4 p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl flex flex-col justify-between transition-all group`}
          >
            <div className="space-y-5 translate-z-10">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted}`}>
                  Resource Deployment
                </span>
                <TrendingUp style={{ color: theme.accent }} className="w-5 h-5 translate-z-20" />
              </div>

              <div>
                <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                  Grassroots Allocation
                </h3>
                <p className={`text-xs ${theme.textMuted} mt-1`}>
                  100% of donor funding directed to targeted field casework.
                </p>
              </div>

              {/* Multi-tier Progress Bars */}
              <div className="space-y-3.5 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className={theme.text}>Child Protection & Education</span>
                    <span className="font-mono font-bold">38%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <div style={{ width: '38%', backgroundColor: theme.accent }} className="h-full rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className={theme.text}>Regenerative Agro-Ecology</span>
                    <span className="font-mono font-bold">32%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <div className="w-[32%] h-full rounded-full bg-emerald-500" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className={theme.text}>Anti-Trafficking & Legal Aid</span>
                    <span className="font-mono font-bold">30%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <div className="w-[30%] h-full rounded-full bg-indigo-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`pt-4 border-t ${theme.border} text-[11px] font-mono ${theme.textMuted} flex items-center justify-between translate-z-10`}>
              <span>Statutory Compliance</span>
              <span className="text-emerald-500 font-bold">✓ Zero Overhead Leakage</span>
            </div>
          </TiltCard>

          {/* PANEL 3: Statutory Accreditation Vault (Span 4 cols) */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className={`md:col-span-4 p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl flex flex-col justify-between transition-all group`}
          >
            <div className="space-y-4 translate-z-10">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted}`}>
                  Compliance Vault
                </span>
                <ShieldCheck style={{ color: theme.accent }} className="w-5 h-5 translate-z-20" />
              </div>

              <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                Statutory Clearances
              </h3>

              <div className="space-y-2 pt-1 text-xs">
                <div className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border} flex items-center justify-between`}>
                  <span className={theme.textMuted}>Section 80G Tax-Exempt</span>
                  <span style={{ color: theme.accent }} className="font-mono font-bold">Active to 2032</span>
                </div>
                <div className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border} flex items-center justify-between`}>
                  <span className={theme.textMuted}>FCRA Regd 010140011</span>
                  <span className="font-mono font-bold text-emerald-500">MHA Renewed</span>
                </div>
                <div className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border} flex items-center justify-between`}>
                  <span className={theme.textMuted}>MCA Form CSR-1</span>
                  <span className="font-mono font-bold">CSR00017363</span>
                </div>
                <div className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border} flex items-center justify-between`}>
                  <span className={theme.textMuted}>NITI Aayog NGO Darpan</span>
                  <span className="font-mono font-bold">AP/2013/0068300</span>
                </div>
              </div>
            </div>

            <div className={`pt-4 border-t ${theme.border} text-[11px] font-mono ${theme.textMuted} flex items-center justify-between translate-z-10`}>
              <span>Direct Donor Verification</span>
              <span style={{ color: theme.accent }} className="font-bold">Form 10BE Ready</span>
            </div>
          </TiltCard>

          {/* PANEL 4: Live Casework Dispatch Radar (Span 4 cols) */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className={`md:col-span-4 p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl flex flex-col justify-between transition-all group`}
          >
            <div className="space-y-4 translate-z-10">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted}`}>
                  Field Radar
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Live Operations</span>
                </span>
              </div>

              <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                Intervention Corridors
              </h3>

              <div className="space-y-2 pt-1 text-xs">
                <div className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border} flex items-center gap-2.5`}>
                  <MapPin style={{ color: theme.accent }} className="w-4 h-4 shrink-0" />
                  <div className="leading-tight">
                    <span className={`font-bold ${theme.text} block`}>Tirupati & Chittoor Belt</span>
                    <span className={`text-[10px] ${theme.textMuted} font-mono`}>Yanadi tribal settlements & ZBNF</span>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border} flex items-center gap-2.5`}>
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <div className="leading-tight">
                    <span className={`font-bold ${theme.text} block`}>Ambur & Tirupathur Hub</span>
                    <span className={`text-[10px] ${theme.textMuted} font-mono`}>Bonded labour raids & RBLA Union</span>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border} flex items-center gap-2.5`}>
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div className="leading-tight">
                    <span className={`font-bold ${theme.text} block`}>Vijayawada & Vizag Drop</span>
                    <span className={`text-[10px] ${theme.textMuted} font-mono`}>43.7 MT plastic recovery & recyclers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`pt-4 border-t ${theme.border} text-[11px] font-mono ${theme.textMuted} flex items-center justify-between translate-z-10`}>
              <span>6 Full-Time Centers</span>
              <span className="text-emerald-500 font-bold">Interstate Reach</span>
            </div>
          </TiltCard>

          {/* PANEL 5: Instant Canara Bank Direct Transfer Card (Span 4 cols) */}
          <TiltCard
            maxTilt={8}
            scale={1.02}
            className={`md:col-span-4 p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl flex flex-col justify-between transition-all group`}
          >
            <div className="space-y-4 translate-z-10">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted}`}>
                  Quick Contribution
                </span>
                <Heart style={{ color: theme.accent }} className="w-5 h-5 fill-current translate-z-20" />
              </div>

              <div>
                <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                  Canara Bank Direct
                </h3>
                <p className={`text-xs ${theme.textMuted} mt-0.5`}>
                  A/C: Praja Pragati Trust
                </p>
              </div>

              {/* 1-Click Copy Box */}
              <div className={`p-3 rounded-2xl ${theme.subBg} border ${theme.border} space-y-2`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-[10px] font-mono ${theme.textMuted} block`}>A/C NUMBER</span>
                    <span style={{ color: theme.accent }} className="font-mono font-black text-sm">
                      1965101010276
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy('1965101010276')}
                    className="p-1.5 rounded-lg bg-[#151515] dark:bg-white text-white dark:text-[#151515] text-[10px] flex items-center gap-1"
                  >
                    {copiedAcc ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedAcc ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className={`pt-2 border-t ${theme.border} flex justify-between text-[11px] font-mono`}>
                  <span className={theme.textMuted}>IFSC: CNRB0001965</span>
                  <span className={theme.text}>Tirupati Main</span>
                </div>
              </div>
            </div>

            <div className="pt-4 translate-z-10">
              <button
                onClick={onOpenDonate}
                style={{ backgroundColor: theme.accent }}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate with 80G Tax Receipt</span>
              </button>
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
}
