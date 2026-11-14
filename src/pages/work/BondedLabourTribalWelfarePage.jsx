import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Scale, 
  FileCheck, 
  Users,
  HeartHandshake
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { pptData } from '../../data/pptData';
import TiltCard from '../../components/TiltCard';

export default function BondedLabourTribalWelfarePage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const relatedProjects = pptData.flagshipProjects.filter(
    p => p.id === 'bonded-labour' || p.id === 'sricity-tribal'
  );

  return (
    <div className={`pt-24 sm:pt-32 lg:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Breadcrumb & Page Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
          <Link to="/" className={`${theme.textMuted} hover:${theme.text} transition-colors`}>Home</Link>
          <span className={theme.textMuted}>/</span>
          <Link to="/our-work" className={`${theme.textMuted} hover:${theme.text} transition-colors`}>Our Work</Link>
          <span className={theme.textMuted}>/</span>
          <span style={{ color: theme.accent }} className="font-semibold">Bonded Labour & Tribal Welfare</span>
        </div>

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
            <span>Thematic Pillar IV</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            489 Rescued • 382 Worksites • 21 Districts
          </span>
        </div>

        <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.08] font-display max-w-4xl`}>
          Bonded Labour Abolition & <br className="hidden sm:inline" />
          <span style={{ color: theme.accent }}>Tribal Constitutional Rights.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-4 sm:mt-6 max-w-3xl leading-relaxed`}>
          Operating on the frontlines to eradicate modern debt slavery, secure official government Release Certificates, repatriate interstate migrants, and secure ancestral forest land titles for vulnerable tribes.
        </p>
      </section>

      {/* 2. Hero Image & Key Metrics Showcase */}
      <section className={`py-12 sm:py-16 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-[#e4e4e4] dark:border-zinc-800 shadow-xl aspect-16/10 bg-zinc-900">
                <img
                  src="/images/rescued_labourers_community.jpg"
                  alt="Rescued bonded labourers community with legal certificates"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-600/90 text-white backdrop-blur-xs shadow-xs mb-2 inline-block">
                    Section 370 IPC & Bonded Labour System (Abolition) Act 1976
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1 max-w-lg">
                    Direct casework across brick kilns, stone quarries, rice mills, and wood-cutting worksites in AP, Tamil Nadu, and Telangana.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bento */}
            <div className="lg:col-span-5 space-y-4">
              <div className={`p-5 sm:p-6 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} space-y-1`}>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted}`}>
                  Liberated from Debt Bondage
                </span>
                <div className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
                  489 Labourers
                </div>
                <p className={`text-xs ${theme.textMuted}`}>
                  Rescued across 382 surveyed sites with official government release papers.
                </p>
              </div>

              <div className={`p-5 sm:p-6 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} space-y-1`}>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted}`}>
                  Union & Community Association
                </span>
                <div className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
                  1,200+ Members
                </div>
                <p className={`text-xs ${theme.textMuted}`}>
                  Organized into RBLA and Trilinga Unorganised Workers Union (TUWU).
                </p>
              </div>

              <div className={`p-5 sm:p-6 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} space-y-1`}>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted}`}>
                  Ancestral Land Titles Secured
                </span>
                <div className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
                  4,120+ Families
                </div>
                <p className={`text-xs ${theme.textMuted}`}>
                  Vulnerable Yanadi Scheduled Tribes granted legal Forest Rights (RoFR) pattas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The 5-Stage Casework Protocol */}
      <section className={`py-16 sm:py-24 ${theme.bg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-2">
              Legal Casework SOP
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.text} tracking-tight font-display`}>
              End-to-end statutory rescue and rehabilitation model.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-3 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold"
              >
                <span style={{ color: theme.accent }}>01</span>
              </div>
              <h3 className={`text-lg font-bold ${theme.text} font-display`}>Worksite Survey & Casework</h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                Discreet reconnaissance at high-risk brick kilns and remote quarries, compiling wage slips, hours worked, debt ledger discrepancies, and medical conditions.
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-3 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold"
              >
                <span style={{ color: theme.accent }}>02</span>
              </div>
              <h3 className={`text-lg font-bold ${theme.text} font-display`}>Joint Government Raid</h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                Coordination with Revenue Divisional Officers (RDO), District Labour Commissioners, and Police forces to execute rescue operations and register FIRs.
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-3 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold"
              >
                <span style={{ color: theme.accent }}>03</span>
              </div>
              <h3 className={`text-lg font-bold ${theme.text} font-display`}>Release Certificates</h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                Issuance of statutory Release Certificates under Section 12 of the 1976 Act, instantly extinguishing all alleged debts and returning impounded IDs.
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-3 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold"
              >
                <span style={{ color: theme.accent }}>04</span>
              </div>
              <h3 className={`text-lg font-bold ${theme.text} font-display`}>Cash Rehabilitation</h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                Ensuring freed workers receive ₹30,000 immediate cash relief and ₹1,00,000 to ₹3,00,000 under the Central Sector Scheme directly into bank accounts.
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-3 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold"
              >
                <span style={{ color: theme.accent }}>05</span>
              </div>
              <h3 className={`text-lg font-bold ${theme.text} font-display`}>Repatriation & Transit</h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                Safe escorted transportation back to home districts across state borders (AP, TN, TS, Odisha), providing emergency rations, clothing, and shelter.
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-3 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-bold"
              >
                <span style={{ color: theme.accent }}>06</span>
              </div>
              <h3 className={`text-lg font-bold ${theme.text} font-display`}>RBLA Union Reintegration</h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                Membership in Released Bonded Labourers Associations, enrolling children in schools, and securing agricultural land or self-employment livestock kits.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Flagship Projects */}
      <section className={`py-16 sm:py-24 ${theme.subBg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-2">
                Operational Programs
              </span>
              <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.text} tracking-tight font-display`}>
                Anti-Trafficking & Tribal Casework
              </h2>
            </div>
            <Link
              to="/our-work"
              style={{ color: theme.accent }}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider hover:underline"
            >
              <span>View all 4 pillars</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={6}
                scale={1.01}
                className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="h-48 sm:h-56 rounded-2xl overflow-hidden bg-zinc-900 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/rescued_labourers_community.jpg";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-black/90 text-[#151515] dark:text-white border border-[#e4e4e4] dark:border-zinc-700 shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className={`text-[11px] font-mono ${theme.textMuted} block`}>
                      Partner: {project.partner}
                    </span>
                    <h3 className={`text-xl font-bold ${theme.text} font-display mt-1`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm ${theme.textMuted} mt-2 leading-relaxed`}>
                      {project.details}
                    </p>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t ${theme.border} grid grid-cols-2 sm:grid-cols-4 gap-2`}>
                  {project.stats.map((st, sIdx) => (
                    <div key={sIdx} className={`p-2 rounded-xl ${theme.subBg} border ${theme.border}`}>
                      <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block truncate`}>
                        {st.label}
                      </span>
                      <span className={`text-sm font-bold ${theme.text}`}>
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Bottom Navigation Bar */}
      <section className={`py-12 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/our-work/women-livelihoods"
            className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted} hover:${theme.text} transition-colors`}
          >
            ← Previous: Women Empowerment & Livelihoods
          </Link>
          <Link
            to="/impact"
            style={{ color: theme.accent }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:underline"
          >
            <span>Explore 41-Year Impact Metrics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}