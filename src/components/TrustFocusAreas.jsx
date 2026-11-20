import React, { useState, useEffect, useRef } from 'react';
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
  Sparkles,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Animated Progress Meter Component (Different approach: expanding fluid gauge)
function AnimatedProgressBar({ targetWidth, color = "from-amber-300 to-amber-100", label = "Impact Metric", valueLabel = "98%" }) {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setWidth(targetWidth);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          setTimeout(() => {
            setWidth(targetWidth);
          }, 150);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetWidth]);

  return (
    <div ref={barRef} className="space-y-1.5 w-full">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-white/80 font-medium truncate">{label}</span>
        <span className="font-extrabold text-white ml-2 shrink-0">{valueLabel}</span>
      </div>
      <div className="w-full h-2 rounded-full bg-black/25 backdrop-blur-xs overflow-hidden p-0.5 border border-white/15">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1200 ease-out relative`}
          style={{ width: `${width}%` }}
        >
          {/* Glowing pulse bead at the tip of the bar */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-xs animate-ping" />
        </div>
      </div>
    </div>
  );
}

export default function TrustFocusAreas({ onOpenDonate }) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const focusCards = [
    {
      id: 'education',
      title: t.focus1Title || "Children's Education, Rights & Entitlements",
      desc: t.focus1Desc || "Remedial learning, early childhood education, and child rights advocacy across 91 schools and 222 anganwadis.",
      metrics: "18,000+ Children • 91 Schools • 222 Anganwadis",
      liveBeacon: "LIVE IN 91 SCHOOLS",
      beaconColor: "bg-rose-400",
      gaugeLabel: "ECCE Retention & Literacy",
      gaugeValue: "98.4%",
      gaugeTarget: 98.4,
      gaugeGradient: "from-amber-300 via-rose-200 to-white",
      image: "/images/children_hands_up_education.jpg",
      fallbackImage: "/images/focus_education_card_hd.jpg",
      colorClass: "bg-[#881337] text-white",
      hoverShadow: "hover:shadow-rose-950/25",
      accentBg: "bg-rose-950/40",
      glowColor: "group-hover:border-rose-400/60",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      link: "/our-work/child-development",
      keyPillars: ["ECCE Centers", "Village Libraries", "Dropout Prevention"]
    },
    {
      id: 'environment',
      title: t.focus2Title || "Environment Protection & Sustainable Agriculture",
      desc: t.focus2Desc || "Five-layer natural farming, indigenous seed revival, and climate resilience empowering 5,000+ farmer families.",
      metrics: "5,000+ Tribal Farmers • Zero Chemical Inputs • 5-Layer Model",
      liveBeacon: "ACTIVE IN 5,000+ ACRES",
      beaconColor: "bg-emerald-400",
      gaugeLabel: "Zero-Chemical 5-Layer Adoption",
      gaugeValue: "95.8%",
      gaugeTarget: 95.8,
      gaugeGradient: "from-emerald-300 via-teal-200 to-white",
      image: "/images/natural_farming_field.jpg",
      fallbackImage: "/images/focus_environment_card_hd.jpg",
      colorClass: "bg-[#166534] text-white",
      hoverShadow: "hover:shadow-emerald-950/25",
      accentBg: "bg-emerald-950/40",
      glowColor: "group-hover:border-emerald-400/60",
      icon: <Sprout className="w-5 h-5 text-white" />,
      link: "/our-work/agriculture-environment",
      keyPillars: ["Indigenous Seeds", "Bio-Inputs", "Continuous Yield"]
    },
    {
      id: 'women',
      title: t.focus3Title || "Women Empowerment & Livelihoods",
      desc: t.focus3Desc || "Self-help group federations, dignified micro-enterprises, and rehabilitation of rescued bonded labourers.",
      metrics: "1,200+ Bonded Labourers Rescued • 250+ SHGs • Dignified Income",
      liveBeacon: "250+ ACTIVE SHG HUBS",
      beaconColor: "bg-amber-400",
      gaugeLabel: "SHG Financial Independence",
      gaugeValue: "92.5%",
      gaugeTarget: 92.5,
      gaugeGradient: "from-yellow-300 via-amber-200 to-white",
      image: "/images/team_and_community.jpg",
      fallbackImage: "/images/focus_women_card_hd.jpg",
      colorClass: "bg-[#d97706] text-white",
      hoverShadow: "hover:shadow-amber-950/25",
      accentBg: "bg-amber-950/40",
      glowColor: "group-hover:border-amber-400/60",
      icon: <Users className="w-5 h-5 text-white" />,
      link: "/our-work/women-livelihoods",
      keyPillars: ["Micro-Enterprise", "Legal Freedom", "Adivasi Swaraj"]
    }
  ];

  const otherInterventions = [
    {
      icon: <Recycle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      title: t.tagPlastic || "Plastic Waste Management",
      desc: "Project DROP in Vizag, Tirupati & Vijayawada",
      metric: "43.7 MT Recycled",
      status: "Active Field Operations"
    },
    {
      icon: <Wallet className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: t.tagFinance || "Financial Literacy & Inclusion",
      desc: "CFCL Centres with RBI & Crisil",
      metric: "6 Centers Operating",
      status: "RBI Empanelled"
    },
    {
      icon: <Link2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
      title: t.tagBonded || "Bonded Labour Prevention & Rehabilitation",
      desc: "Legal aid & sustainable rehabilitation",
      metric: "1,200+ Rescued",
      status: "Zero Bondage Mission"
    },
    {
      icon: <Building className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: t.tagCommunity || "Community Institutions & Capacity Building",
      desc: "Adivasi Grama Swaraj & Yanadi Sanghams",
      metric: "50+ Grama Sabhas",
      status: "Self-Governing"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fdfbf7] dark:bg-[#091512] transition-colors relative overflow-hidden" id="our-work">
      
      {/* Background Soft Organic Radiance */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-200/30 dark:bg-amber-950/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-200/30 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Interactive Filter Spotlight Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-amber-500 rounded-full inline-block" />
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

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/80 dark:bg-[#132822]/80 border border-[#eae5d8] dark:border-emerald-800/60 shadow-xs backdrop-blur-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#166534] text-white shadow-xs'
                  : 'text-[#4a5568] dark:text-emerald-200 hover:text-[#0f2d37]'
              }`}
            >
              All Impact Areas
            </button>
            <button
              onClick={() => setActiveFilter('education')}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'education'
                  ? 'bg-[#881337] text-white shadow-xs'
                  : 'text-[#4a5568] dark:text-emerald-200 hover:text-[#0f2d37]'
              }`}
            >
              Child Education
            </button>
            <button
              onClick={() => setActiveFilter('environment')}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'environment'
                  ? 'bg-[#166534] text-white shadow-xs'
                  : 'text-[#4a5568] dark:text-emerald-200 hover:text-[#0f2d37]'
              }`}
            >
              Environment
            </button>
            <button
              onClick={() => setActiveFilter('women')}
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'women'
                  ? 'bg-[#d97706] text-white shadow-xs'
                  : 'text-[#4a5568] dark:text-emerald-200 hover:text-[#0f2d37]'
              }`}
            >
              Women & Livelihoods
            </button>
          </div>
        </div>

        {/* 3 Large Radiant Rounded Cards with Animated Progress Gauges & Beacons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusCards.map((card) => {
            const isFaded = activeFilter !== 'all' && activeFilter !== card.id;
            
            return (
              <div 
                key={card.id}
                className={`rounded-3xl sm:rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl ${card.hoverShadow} transition-all duration-500 transform hover:-translate-y-2 flex flex-col group border-2 border-transparent ${card.glowColor} ${
                  isFaded ? 'opacity-40 scale-98 pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                {/* Card Top: Real Grassroots Photo with rounded boundary & Live Radar Beacon */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={card.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = card.fallbackImage;
                    }}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* LIVE RADAR BEACON (Different approach: shows real-time active field presence) */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold shadow-lg">
                      <span className={`w-2 h-2 rounded-full ${card.beaconColor} animate-ping`} />
                      <span>{card.liveBeacon}</span>
                    </span>
                  </div>

                  {/* Micro-Pillars Tag Badge */}
                  <div className="absolute bottom-3 left-4 right-4 z-20 flex flex-wrap gap-1.5">
                    {card.keyPillars.map((p, i) => (
                      <span 
                        key={i}
                        className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-white/20 text-white backdrop-blur-xs border border-white/20 shadow-xs"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Solid Vibrant Logo Matching Color Block with Progress Gauge */}
                <div className={`p-6 sm:p-7 flex-1 flex flex-col justify-between ${card.colorClass} relative overflow-hidden`}>
                  
                  {/* Soft Background Watermark Icon */}
                  <div className="absolute -bottom-8 -right-8 w-36 h-36 opacity-10 pointer-events-none">
                    {card.icon}
                  </div>

                  <div className="space-y-4 relative z-10">
                    
                    {/* Header with Icon and Action Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xs shadow-inner group-hover:rotate-6 group-hover:scale-110 transition-transform">
                        {card.icon}
                      </div>
                      <Link
                        to={card.link}
                        className="w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0f2d37] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-md"
                        aria-label={`Learn more about ${card.title}`}
                      >
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug font-display">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                      {card.desc}
                    </p>

                    {/* ANIMATED PROGRESS GAUGE (Different animation approach) */}
                    <div className="pt-2">
                      <AnimatedProgressBar 
                        targetWidth={card.gaugeTarget}
                        color={card.gaugeGradient}
                        label={card.gaugeLabel}
                        valueLabel={card.gaugeValue}
                      />
                    </div>

                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-5 mt-5 border-t border-white/20 flex items-center justify-between text-xs font-semibold relative z-10">
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-2 hover:underline group/link"
                    >
                      <span>Explore Field Methodology</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <span className="text-[10px] font-mono text-white/70">
                      41 Yrs Proven
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* "Other Interventions" Ribbon with Animated Live Activity Beads */}
        <div className="mt-14 sm:mt-20 bg-white/90 dark:bg-[#132822]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-md border border-[#eae5d8] dark:border-emerald-800/60 relative overflow-hidden">
          
          {/* Subtle Ambient Golden Bleed */}
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-200/20 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 justify-between relative z-10">
            
            <div className="lg:w-1/4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] dark:text-amber-400 block mb-1">
                Complementary Programs
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#0f2d37] dark:text-white font-display">
                {t.otherInterventions || "Other Interventions"}
              </h4>
              <p className="text-xs text-[#5a6a70] dark:text-emerald-300/80 mt-1">
                Cross-cutting field operations run with statutory agencies.
              </p>
            </div>

            {/* Badges Grid with Interactive Hover Cards */}
            <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4">
              {otherInterventions.map((item, idx) => (
                <div 
                  key={idx}
                  className="group/item flex flex-col justify-between p-4 rounded-2xl bg-[#fdfbf7] dark:bg-[#0c1a16] border border-[#e6e2d8] dark:border-emerald-900/40 hover:border-emerald-500 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-emerald-950 flex items-center justify-center shrink-0 shadow-xs group-hover/item:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-[#166534] dark:text-emerald-300">
                      {item.metric}
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-[#0f2d37] dark:text-emerald-100 block group-hover/item:text-[#166534] dark:group-hover/item:text-emerald-300 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#5a6a70] dark:text-emerald-300/70 block mt-0.5 line-clamp-1">
                      {item.desc}
                    </span>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-zinc-200/60 dark:border-emerald-900/30 flex items-center gap-1.5 text-[10px] font-mono text-[#166534] dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#166534] dark:bg-emerald-400 animate-pulse" />
                    <span>{item.status}</span>
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
