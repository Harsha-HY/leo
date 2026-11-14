import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ShieldAlert, 
  Users, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Compass, 
  HeartHandshake
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import TiltCard from '../components/TiltCard';
import AgenciexCommunities from '../components/AgenciexCommunities';

export default function OurWorkPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const subPages = [
    {
      title: "Sustainable Agriculture, Environment & Climate",
      path: "/our-work/agriculture-environment",
      icon: <Sprout className="w-6 h-6 text-white" />,
      tagline: "Cultivating ecological resilience, soil health, and water abundance for smallholder farmers.",
      badge: "Thematic Pillar I",
      stat: "1,351+ Acres",
      statLabel: "Natural Farming",
      accentBg: "#10b981",
      image: "/images/natural_farming_field.jpg",
      points: [
        "26 Natural Farming Interest Groups (NFIGs) and bio-resource centers.",
        "59+ water infrastructure units (tanks, check dams, borewells) restored.",
        "Project DROP: 43.7 MT urban plastic recycled across 309 collection points."
      ]
    },
    {
      title: "Child Development, Quality Education & Nutrition",
      path: "/our-work/child-development",
      icon: <Users className="w-6 h-6 text-white" />,
      tagline: "Guaranteeing every child's fundamental right to quality education, health, and holistic protection.",
      badge: "Thematic Pillar II",
      stat: "17,179+",
      statLabel: "Children Supported",
      accentBg: "#3b82f6",
      image: "/images/hero_happy_children.jpg",
      points: [
        "441 Anganwadi Centres upgraded with child-friendly sitting circles and TLM kits.",
        "Model village learning centers and 6 GROWBY community libraries.",
        "Universal Salt Iodization state monitoring across all 26 districts of AP."
      ]
    },
    {
      title: "Women Empowerment & Dignified Livelihoods",
      path: "/our-work/women-livelihoods",
      icon: <HeartHandshake className="w-6 h-6 text-white" />,
      tagline: "Equipping rural and tribal women with market vocational skills, financial literacy, and safety.",
      badge: "Thematic Pillar III",
      stat: "2,412+",
      statLabel: "Women Sensitized",
      accentBg: "#f59e0b",
      image: "/images/project_sricity_tailoring.jpg",
      points: [
        "50 Yanadi tribal women trained in professional garment tailoring with Sri City.",
        "40 DEAF Financial Literacy workshops with Reserve Bank of India on cyber fraud.",
        "Safe Village Program in 96 villages preventing illegal child marriages."
      ]
    },
    {
      title: "Bonded Labour Abolition & Tribal Welfare",
      path: "/our-work/bonded-labour-tribal-welfare",
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      tagline: "Eradicating modern debt slavery, securing release certificates, and defending tribal forest land.",
      badge: "Thematic Pillar IV",
      stat: "489 Rescued",
      statLabel: "From Debt Bondage",
      accentBg: "#ef4444",
      image: "/images/rescued_labourers_community.jpg",
      points: [
        "489 bonded labourers rescued across 382 worksites under 1976 Abolition Act.",
        "Organized Released Bonded Labourers Associations and TUWU union (1,200+ members).",
        "4,120+ Yanadi indigenous families secured Forest Rights (RoFR) land pattas."
      ]
    }
  ];

  return (
    <div className={`pt-24 sm:pt-32 lg:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
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
            <span>Comprehensive Programmatic Portfolio</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            4 Pillars • 26 Districts • 41 Years Active
          </span>
        </div>

        <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          Our Work & <br />
          <span style={{ color: theme.accent }}>Thematic Focus Areas.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-4 sm:mt-6 max-w-3xl leading-relaxed`}>
          For four decades, Praja Pragati Trust has combined emergency frontline human rights casework with long-term institutional empowerment in education, climate-resilient farming, and women-led cooperatives.
        </p>
      </section>

      {/* 2. 4 Distinct Thematic Pillar Cards */}
      <section className={`py-12 sm:py-20 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-2">
              Integrated Focus Areas
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.text} tracking-tight font-display`}>
              Explore our 4 dedicated programmatic domains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subPages.map((item, idx) => (
              <TiltCard
                key={idx}
                maxTilt={6}
                scale={1.01}
                className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-6">
                  {/* Top Image Banner */}
                  <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-black/90 text-[#151515] dark:text-white border border-[#e4e4e4] dark:border-zinc-700 shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <div>
                        <span className="text-2xl sm:text-3xl font-extrabold font-display">{item.stat}</span>
                        <span className="text-[11px] font-mono text-zinc-300 block">{item.statLabel}</span>
                      </div>
                      <div
                        style={{ backgroundColor: item.accentBg }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                      >
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${theme.text} font-display group-hover:text-[#ff6036] transition-colors leading-snug`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs sm:text-sm ${theme.textMuted} mt-2 leading-relaxed`}>
                      {item.tagline}
                    </p>

                    <ul className={`mt-4 space-y-2 text-xs ${theme.textMuted}`}>
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 style={{ color: theme.accent }} className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Link Button */}
                <div className={`mt-6 pt-4 border-t ${theme.border}`}>
                  <Link
                    to={item.path}
                    style={{
                      backgroundColor: theme.accentLight,
                      borderColor: theme.accentBorder,
                      color: theme.accent
                    }}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-between group-hover:scale-101 active:scale-98 shadow-xs"
                  >
                    <span>Explore dedicated domain page & casework</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Target Communities Served */}
      <AgenciexCommunities />

      {/* 4. Cross Link CTA to Flagship Projects */}
      <section className={`py-16 ${theme.bg} border-t ${theme.border} text-center`}>
        <div className="max-w-2xl mx-auto px-4">
          <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-2">
            Audited Casework Directory
          </span>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display mb-4`}>
            Interested in specific case studies and project records?
          </h2>
          <p className={`text-xs sm:text-sm ${theme.textMuted} mb-6 leading-relaxed`}>
            View our comprehensive repository of 8 active institutional projects with full partner acknowledgments and verification logs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              style={{ backgroundColor: theme.accent }}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <span>View 8 Flagship Casework Records</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/impact"
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold ${theme.text} bg-[#f7f7f7] dark:bg-zinc-800 border ${theme.border} hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all`}
            >
              Inspect 41-Year Impact Metrics
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}