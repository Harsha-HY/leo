import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Scissors, 
  Coins, 
  ShieldCheck
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { pptData } from '../../data/pptData';
import TiltCard from '../../components/TiltCard';

export default function WomenLivelihoodsPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const relatedProjects = pptData.flagshipProjects.filter(
    p => p.id === 'sricity-tribal' || p.id === 'deaf-rbi' || p.id === 'safe-village'
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
          <span style={{ color: theme.accent }} className="font-semibold">Women Empowerment & Livelihoods</span>
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
            <span>Thematic Pillar III</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            2,412+ Women Sensitized • Yanadi Tribal Stitching Units
          </span>
        </div>

        <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.08] font-display max-w-4xl`}>
          Women Empowerment & <br className="hidden sm:inline" />
          <span style={{ color: theme.accent }}>Dignified Livelihoods.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-4 sm:mt-6 max-w-3xl leading-relaxed`}>
          Equipping rural and indigenous tribal women with marketable vocational skills, financial literacy, micro-enterprise tools, and collective bargaining power.
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
                  src="/images/project_sricity_tailoring.jpg"
                  alt="Yanadi tribal women tailoring and vocational center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600/90 text-white backdrop-blur-xs shadow-xs mb-2 inline-block">
                    Sri City Foundation & Reserve Bank of India (DEAF)
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-200 mt-1 max-w-lg">
                    Transforming subsistence forest-dwelling women into certified garment micro-entrepreneurs.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bento */}
            <div className="lg:col-span-5 space-y-4">
              <div className={`p-5 sm:p-6 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} space-y-1`}>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted}`}>
                  Financial Literacy & Safety
                </span>
                <div className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
                  2,412 Women
                </div>
                <p className={`text-xs ${theme.textMuted}`}>
                  Trained across 40 workshops on digital payments, cyber fraud & banking rights.
                </p>
              </div>

              <div className={`p-5 sm:p-6 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} space-y-1`}>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted}`}>
                  Yanadi Tailoring Trainees
                </span>
                <div className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
                  50 Certified
                </div>
                <p className={`text-xs ${theme.textMuted}`}>
                  Graduated 6-month specialized industrial tailoring with Sri City support.
                </p>
              </div>

              <div className={`p-5 sm:p-6 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} space-y-1`}>
                <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted}`}>
                  Girl Child Safety
                </span>
                <div className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
                  96 Safe Villages
                </div>
                <p className={`text-xs ${theme.textMuted}`}>
                  Gram Rakshaks protecting girls from forced early marriage and abuse.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Strategic Approaches */}
      <section className={`py-16 sm:py-24 ${theme.bg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-2">
              Livelihood Strategy
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.text} tracking-tight font-display`}>
              Economic self-reliance as the antidote to exploitation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} flex items-start gap-4 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5"
              >
                <Scissors style={{ color: theme.accent }} className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs font-mono font-bold ${theme.textMuted} block mb-1`}>STRATEGY 01</span>
                <h3 className={`text-lg font-bold ${theme.text} font-display mb-1`}>Vocational Skills & Micro-Enterprises</h3>
                <p className={`text-sm ${theme.textMuted} leading-relaxed`}>
                  Training indigenous Yanadi women in industrial tailoring, cloth bag production, machine maintenance, and commercial linkage to local manufacturing hubs.
                </p>
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} flex items-start gap-4 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5"
              >
                <Coins style={{ color: theme.accent }} className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs font-mono font-bold ${theme.textMuted} block mb-1`}>STRATEGY 02</span>
                <h3 className={`text-lg font-bold ${theme.text} font-display mb-1`}>Financial Literacy & Cyber Defense</h3>
                <p className={`text-sm ${theme.textMuted} leading-relaxed`}>
                  Conducting DEAF-RBI workshops across rural mandals to protect women self-help groups from loan app frauds, OTP scams, and high-interest predatory moneylenders.
                </p>
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} flex items-start gap-4 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5"
              >
                <Users style={{ color: theme.accent }} className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs font-mono font-bold ${theme.textMuted} block mb-1`}>STRATEGY 03</span>
                <h3 className={`text-lg font-bold ${theme.text} font-display mb-1`}>Natural Farming Leadership</h3>
                <p className={`text-sm ${theme.textMuted} leading-relaxed`}>
                  Mobilizing women into organic farming collectives, establishing Jeevamrutham bio-fertilizer enterprises, and backyard nutritional kitchen gardens.
                </p>
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} flex items-start gap-4 shadow-xs`}>
              <div
                style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 mt-0.5"
              >
                <ShieldCheck style={{ color: theme.accent }} className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs font-mono font-bold ${theme.textMuted} block mb-1`}>STRATEGY 04</span>
                <h3 className={`text-lg font-bold ${theme.text} font-display mb-1`}>Legal Defense & Safe Village Vigilance</h3>
                <p className={`text-sm ${theme.textMuted} leading-relaxed`}>
                  Building community Gram Rakshak networks in 96 villages to protect young girls from illegal child marriage, dowry violence, and interstate labour trafficking.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Flagship Programs */}
      <section className={`py-16 sm:py-24 ${theme.subBg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-2">
                Operational Programs
              </span>
              <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.text} tracking-tight font-display`}>
                Featured Women & Livelihood Initiatives
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={6}
                scale={1.01}
                className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="h-44 sm:h-52 rounded-2xl overflow-hidden bg-zinc-900 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/project_sricity_tailoring.jpg";
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
                    <h3 className={`text-lg font-bold ${theme.text} font-display mt-1`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs ${theme.textMuted} mt-2 leading-relaxed line-clamp-3`}>
                      {project.details}
                    </p>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t ${theme.border} grid grid-cols-2 gap-2`}>
                  {project.stats.slice(0, 2).map((st, sIdx) => (
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
            to="/our-work/child-development"
            className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted} hover:${theme.text} transition-colors`}
          >
            ← Previous: Child Development & Education
          </Link>
          <Link
            to="/our-work/bonded-labour-tribal-welfare"
            style={{ color: theme.accent }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:underline"
          >
            <span>Next: Bonded Labour & Tribal Welfare</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}