import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Sprout, 
  Users, 
  ArrowRight, 
  Recycle, 
  Wallet, 
  Link2, 
  Building,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustFocusAreas({ onOpenDonate }) {
  const { t } = useLanguage();

  const focusCards = [
    {
      id: 'education',
      title: t.focus1Title || "Children's Education, Rights & Entitlements",
      desc: t.focus1Desc || "Remedial learning, early childhood education, and child rights advocacy across 91 schools and 222 anganwadis.",
      metrics: "18,000+ Children • 91 Schools • 222 Anganwadis",
      image: "/images/children_hands_up_education.jpg",
      fallbackImage: "/images/focus_education_card_hd.jpg",
      colorClass: "bg-[#881337] text-white",
      hoverShadow: "hover:shadow-rose-950/20",
      accentBg: "bg-rose-950/40",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      link: "/services"
    },
    {
      id: 'environment',
      title: t.focus2Title || "Environment Protection & Sustainable Agriculture",
      desc: t.focus2Desc || "Five-layer natural farming, indigenous seed revival, and climate resilience empowering 5,000+ farmer families.",
      metrics: "5,000+ Tribal Farmers • Zero Chemical Inputs • 5-Layer Model",
      image: "/images/natural_farming_field.jpg",
      fallbackImage: "/images/focus_environment_card_hd.jpg",
      colorClass: "bg-[#166534] text-white",
      hoverShadow: "hover:shadow-emerald-950/20",
      accentBg: "bg-emerald-950/40",
      icon: <Sprout className="w-5 h-5 text-white" />,
      link: "/services"
    },
    {
      id: 'women',
      title: t.focus3Title || "Women Empowerment & Livelihoods",
      desc: t.focus3Desc || "Self-help group federations, dignified micro-enterprises, and rehabilitation of rescued bonded labourers.",
      metrics: "1,200+ Bonded Labourers Rescued • 250+ SHGs • Dignified Income",
      image: "/images/team_and_community.jpg",
      fallbackImage: "/images/focus_women_card_hd.jpg",
      colorClass: "bg-[#d97706] text-white",
      hoverShadow: "hover:shadow-amber-950/20",
      accentBg: "bg-amber-950/40",
      icon: <Users className="w-5 h-5 text-white" />,
      link: "/services"
    }
  ];

  const otherInterventions = [
    {
      icon: <Recycle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      title: t.tagPlastic || "Plastic Waste Management",
      desc: "Project DROP in Vizag, Tirupati & Vijayawada"
    },
    {
      icon: <Wallet className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: t.tagFinance || "Financial Literacy & Inclusion",
      desc: "CFCL Centres with RBI & Crisil"
    },
    {
      icon: <Link2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
      title: t.tagBonded || "Bonded Labour Prevention & Rehabilitation",
      desc: "Legal aid & sustainable rehabilitation"
    },
    {
      icon: <Building className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: t.tagCommunity || "Community Institutions & Capacity Building",
      desc: "Adivasi Grama Swaraj & Yanadi Sanghams"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fdfbf7] dark:bg-[#091512] transition-colors relative overflow-hidden">
      
      {/* Background Soft Organic Radiance */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 dark:bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/40 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Reference Screenshot */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 bg-amber-500 rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#d97706] dark:text-amber-400 font-mono">
              {t.focusEyebrow || "OUR FOCUS AREAS"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f2d37] dark:text-white tracking-tight font-display">
            {t.focusHeading || "Our Three Areas of Impact"}
          </h2>
          <p className="text-base text-[#5a6a70] dark:text-emerald-200/80 max-w-2xl">
            Rooted in four decades of grassroots intervention, our core programmatic pillars deliver sustainable, generational change.
          </p>
        </div>

        {/* 3 Large Radiant Rounded Cards matching Reference Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusCards.map((card) => (
            <div 
              key={card.id}
              className={`rounded-3xl sm:rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl ${card.hoverShadow} transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col group border border-black/5 dark:border-white/10`}
            >
              {/* Card Top: Real Grassroots Photo with rounded boundary */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={card.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = card.fallbackImage;
                  }}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Metric Overlay Badge */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-xs border border-white/20">
                    {card.metrics.split('•')[0]}
                  </span>
                </div>
              </div>

              {/* Card Bottom: Solid Vibrant Logo Matching Color Block */}
              <div className={`p-6 sm:p-7 flex-1 flex flex-col justify-between ${card.colorClass}`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
                      {card.icon}
                    </div>
                    <Link
                      to={card.link}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all group-hover:translate-x-1"
                      aria-label={`Learn more about ${card.title}`}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </Link>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                  <Link
                    to={card.link}
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Explore Field Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Other Interventions" Horizontal Ribbon matching Reference Screenshot */}
        <div className="mt-14 sm:mt-20 bg-white/90 dark:bg-[#132822]/90 backdrop-blur-xs rounded-3xl p-6 sm:p-8 shadow-sm border border-[#eae5d8] dark:border-emerald-800/60">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 justify-between">
            
            <div className="lg:w-1/4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] dark:text-amber-400 block mb-1">
                Complementary Programs
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#0f2d37] dark:text-white font-display">
                {t.otherInterventions || "Other Interventions"}
              </h4>
            </div>

            {/* Badges Grid / Ribbon */}
            <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
              {otherInterventions.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-[#fdfbf7] dark:bg-[#0c1a16] border border-[#e6e2d8] dark:border-emerald-900/40 hover:border-emerald-600/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-white dark:bg-emerald-950 flex items-center justify-center shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#0f2d37] dark:text-emerald-100 block truncate">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#5a6a70] dark:text-emerald-300/70 block truncate">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
