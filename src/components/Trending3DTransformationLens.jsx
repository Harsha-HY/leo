import React, { useState, useRef } from 'react';
import { 
  ArrowLeftRight, 
  CheckCircle2, 
  AlertTriangle, 
  Scale,
  Sprout, 
  Users,
  BookOpen
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import TiltCard from './TiltCard';

export default function Trending3DTransformationLens() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStory, setActiveStory] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const stories = [
    {
      id: "labour",
      tabName: "Bonded Labour",
      icon: <Scale className="w-3.5 h-3.5" />,
      title: "From Intergenerational Debt-Bondage to Economic Freedom",
      before: {
        badge: "Before Intervention",
        image: "/images/office_ambur_bonded_labour.jpg",
        headline: "Trapped at Brick Kilns & Stone Quarries",
        metric: "0 Freedom • Debt Trap"
      },
      after: {
        badge: "After PPT Action",
        image: "/images/rescued_labourers_community.jpg",
        headline: "Released with Govt Certificates & Unionization",
        metric: "489 Liberated • 100% Free"
      }
    },
    {
      id: "farming",
      tabName: "Natural Farming",
      icon: <Sprout className="w-3.5 h-3.5" />,
      title: "From Toxic Chemical Pesticide Debt to Regenerative Agriculture",
      before: {
        badge: "Before Intervention",
        image: "/images/vermicompost_pit.jpg",
        headline: "Depleted Dryland Soil & Fertilizer Debt",
        metric: "₹18,000/acre Debt"
      },
      after: {
        badge: "After PPT Action",
        image: "/images/natural_farming_field.jpg",
        headline: "1,351+ Acres Abundant Chemical-Free Harvest",
        metric: "60% Cost Drop • 1,351+ Acres"
      }
    },
    {
      id: "tribal",
      tabName: "Tribal Livelihoods",
      icon: <Users className="w-3.5 h-3.5" />,
      title: "From Displaced Forest Invisibility to Micro-Enterprise Ownership",
      before: {
        badge: "Before Intervention",
        image: "/images/office_vizag_drop.jpg",
        headline: "Unregistered Habitations Without Legal Rights",
        metric: "No Legal ID • Displaced"
      },
      after: {
        badge: "After PPT Action",
        image: "/images/project_sricity_tailoring.jpg",
        headline: "RoFR Land Titles & Women Tailoring Enterprises",
        metric: "4,120+ Land Titles Secured"
      }
    },
    {
      id: "education",
      tabName: "Child Education",
      icon: <BookOpen className="w-3.5 h-3.5" />,
      title: "From Under-Resourced Classrooms to Joyful Model Anganwadis",
      before: {
        badge: "Before Intervention",
        image: "/images/drop_cleanup_drive.jpg",
        headline: "Lacking Learning Materials & High Dropout Risk",
        metric: "Low Retention"
      },
      after: {
        badge: "After PPT Action",
        image: "/images/hero_happy_children.jpg",
        headline: "441 Upgraded Centres & Model Foundational Learning",
        metric: "17,179+ Children Protected"
      }
    }
  ];

  const current = stories[activeStory];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className={`py-12 sm:py-16 lg:py-24 ${theme.bg} border-b ${theme.border} transition-colors select-none`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span
                style={{ color: theme.accent }}
                className="text-xs font-mono font-semibold uppercase tracking-wider"
              >
                Grassroots Transformation Lens
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f7f7f7] dark:bg-zinc-800 text-[#717171] border border-[#e4e4e4] dark:border-zinc-700">
                Drag Slider ↔
              </span>
            </div>
            <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.12] font-display`}>
              {t.lensTitle}
            </h2>
            <p className={`text-xs sm:text-base ${theme.textMuted} mt-2 max-w-xl`}>
              {t.lensSub}
            </p>
          </div>

          {/* Clean Single-Row Tabs Pill */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 overflow-x-auto max-w-full shrink-0">
            {stories.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStory(idx);
                  setSliderPosition(50);
                }}
                style={{
                  backgroundColor: activeStory === idx ? theme.accent : undefined,
                  color: activeStory === idx ? '#ffffff' : undefined,
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all inline-flex items-center gap-1.5 ${
                  activeStory === idx ? 'shadow-sm font-bold' : `${theme.textMuted} hover:${theme.text}`
                }`}
              >
                {s.icon}
                <span>{s.tabName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Transformation Lens Card */}
        <TiltCard
          maxTilt={4}
          scale={1.01}
          className={`relative rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-2xl overflow-hidden`}
        >
          {/* Main Visual Slider Viewport */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden cursor-ew-resize"
          >
            
            {/* RIGHT SIDE: AFTER PPT ACTION (Background Full Layer) */}
            <div className="absolute inset-0 w-full h-full bg-zinc-900">
              <img
                src={current.after.image}
                alt="After PPT"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/rescued_labourers_community.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              {/* After Metric Badge - Top Right */}
              <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1 pointer-events-none">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-lg backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{current.after.badge}</span>
                </span>
                <span className="font-mono text-[11px] font-bold text-emerald-300 bg-black/60 px-2.5 py-0.5 rounded-full border border-emerald-500/40 backdrop-blur-md">
                  {current.after.metric}
                </span>
              </div>
            </div>

            {/* LEFT SIDE: BEFORE INTERVENTION (Clipped Foreground Layer) */}
            <div
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
              className="absolute inset-0 w-full h-full bg-zinc-950 grayscale contrast-125"
            >
              <img
                src={current.before.image}
                alt="Before PPT"
                className="w-full h-full object-cover opacity-90"
                onError={(e) => {
                  e.target.src = "/images/office_ambur_bonded_labour.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* Before Metric Badge - Top Left */}
              <div className="absolute top-4 left-4 z-20 flex flex-col items-start gap-1 pointer-events-none">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-lg backdrop-blur-md">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{current.before.badge}</span>
                </span>
                <span className="font-mono text-[11px] font-bold text-rose-300 bg-black/60 px-2.5 py-0.5 rounded-full border border-rose-500/40 backdrop-blur-md">
                  {current.before.metric}
                </span>
              </div>
            </div>

            {/* DRAGGABLE SLIDER DIVIDER LINE */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)] z-20 pointer-events-none"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-zinc-900 shadow-2xl border-2 border-zinc-200 flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-zinc-800" />
              </div>
            </div>

            {/* Instruction Pill */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-md">
                Drag slider left ↔ right
              </span>
            </div>

          </div>

          {/* Simple One-Liner Title Bar (Clean, Minimal, Zero Clutter) */}
          <div className={`px-5 py-4 sm:px-6 sm:py-4 ${theme.cardBg} border-t ${theme.border} flex flex-col sm:flex-row sm:items-center justify-between gap-2`}>
            <h3 className={`text-sm sm:text-base font-bold ${theme.text} font-display leading-tight truncate`}>
              {current.title}
            </h3>
            <div className="flex items-center gap-4 text-xs shrink-0 font-medium">
              <span className="text-rose-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                {current.before.headline}
              </span>
              <span className={theme.textMuted}>→</span>
              <span className="text-emerald-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {current.after.headline}
              </span>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}