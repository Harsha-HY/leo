import React, { useState, useRef } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles, Sprout, Heart } from 'lucide-react';
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
      tag: "Human Rights & Anti-Trafficking",
      title: "From Intergenerational Debt-Bondage to Economic Freedom",
      before: {
        badge: "Before PPT Intervention",
        image: "/images/rescued_labourers_community.jpg",
        headline: "Trapped at Rice Mills & Brick Kilns",
        points: [
          "Bound for 3+ years under predatory advance loans with zero freedom",
          "Working 16-hour shifts under threats and restricted movement",
          "Children denied schooling and forced into manual brick laying"
        ],
        metric: "0 Freedom • Debt Trap"
      },
      after: {
        badge: "After Legal Rescue & Rehabilitation",
        image: "/images/project_bonded_labour_rescue.jpg",
        headline: "Released with Govt Certificates & Unionization",
        points: [
          "489 survivors legally freed with official Release Certificates",
          "₹30,000 to ₹1,00,000 direct cash rehabilitation per family",
          "Children enrolled in model bridge schools; RBLA union established"
        ],
        metric: "489 Liberated • 100% Free"
      }
    },
    {
      id: "farming",
      tag: "Climate Action & Agro-Ecology",
      title: "From Toxic Pesticide Debt to Natural Farming Sovereignty",
      before: {
        badge: "Before PPT Intervention",
        image: "/images/natural_farming_field.jpg",
        headline: "Crippling Fertilizer Debt & Depleted Soil",
        points: [
          "Spending ₹18,000/acre on toxic chemical inputs and pesticides",
          "Severe groundwater exhaustion and recurring crop failures",
          "High farmer distress and moneylender exploitation"
        ],
        metric: "₹18,000/acre Input Cost"
      },
      after: {
        badge: "After Natural Farming Transition",
        image: "/images/vermicompost_pit.jpg",
        headline: "1,351+ Acres Regenerative Organic Farming",
        points: [
          "Cultivation expenditure dropped by 60% using local Jeevamrutham",
          "26 Farmer Interest Groups (NFIGs) and bio-input production shops",
          "Restored 12 tanks and check dams under Crop Water Budgeting"
        ],
        metric: "60% Cost Drop • 1,351+ Acres"
      }
    },
    {
      id: "tribal",
      tag: "Tribal Rights & Child Protection",
      title: "From Civic Invisibility to Constitutional Land Rights",
      before: {
        badge: "Before PPT Intervention",
        image: "/images/hero_happy_children.jpg",
        headline: "Forest Displaced Without Legal Identity",
        points: [
          "Yanadi aborigine tribe living in isolated, unpaved forest habitations",
          "No ration cards, no birth certificates, and no voter registration",
          "Adolescent girls facing early school dropouts and child marriage risks"
        ],
        metric: "No Legal ID • Displaced"
      },
      after: {
        badge: "After PPT Community Mobilization",
        image: "/images/project_sricity_tailoring.jpg",
        headline: "RoFR Land Pattas & Women Entrepreneurship",
        points: [
          "4,120+ Yanadi families secured Forest Rights (RoFR) land pattas",
          "50 tribal women trained in professional garment tailoring with Sri City",
          "Over 17,179 children educated in upgraded model Anganwadi centres"
        ],
        metric: "4,120+ Land Titles Secured"
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
    <section className={`py-20 sm:py-28 ${theme.bg} border-b ${theme.border} transition-colors select-none`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span
                style={{ color: theme.accent }}
                className="text-xs font-mono font-semibold uppercase tracking-wider"
              >
                3D Transformation Lens
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f7f7f7] dark:bg-zinc-800 text-[#717171] border border-[#e4e4e4] dark:border-zinc-700">
                Drag Slider
              </span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.12] font-display`}>
              {t.lensTitle}
            </h2>
            <p className={`text-sm sm:text-base ${theme.textMuted} mt-2`}>
              {t.lensSub}
            </p>
          </div>

          {/* Story Switcher Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
            {stories.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStory(idx)}
                style={{
                  backgroundColor: activeStory === idx ? theme.accent : undefined,
                  color: activeStory === idx ? '#ffffff' : undefined,
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeStory === idx ? 'shadow-sm' : `${theme.textMuted} hover:${theme.text}`
                }`}
              >
                Story 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Interactive Transformation Lens Viewport */}
        <TiltCard
          maxTilt={5}
          scale={1.01}
          className={`relative rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-2xl overflow-hidden`}
        >
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[480px] sm:h-[540px] w-full overflow-hidden cursor-ew-resize"
          >
            
            {/* RIGHT SIDE: AFTER PPT ACTION (Background Layer) */}
            <div className="absolute inset-0 w-full h-full bg-zinc-900">
              <img
                src={current.after.image}
                alt="After PPT"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/project_bonded_labour_rescue.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* After Content Info */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 max-w-sm text-right text-white space-y-2 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{current.after.badge}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display leading-tight">
                  {current.after.headline}
                </h3>
                <ul className="space-y-1 text-xs text-zinc-200">
                  {current.after.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center justify-end gap-1.5">
                      <span>{pt}</span>
                      <span className="text-emerald-400 font-bold">•</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-1">
                  <span className="font-mono text-xs font-bold text-emerald-400 bg-black/40 px-3 py-1 rounded-full border border-emerald-500/40">
                    {current.after.metric}
                  </span>
                </div>
              </div>
            </div>

            {/* LEFT SIDE: BEFORE INTERVENTION (Clipped Layer) */}
            <div
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
              className="absolute inset-0 w-full h-full bg-zinc-950 grayscale"
            >
              <img
                src={current.before.image}
                alt="Before PPT"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/rescued_labourers_community.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

              {/* Before Content Info */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-sm text-left text-white space-y-2 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-md">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{current.before.badge}</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-display leading-tight">
                  {current.before.headline}
                </h3>
                <ul className="space-y-1 text-xs text-zinc-300">
                  {current.before.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-1">
                  <span className="font-mono text-xs font-bold text-rose-400 bg-black/40 px-3 py-1 rounded-full border border-rose-500/40">
                    {current.before.metric}
                  </span>
                </div>
              </div>
            </div>

            {/* DRAGGABLE SLIDER DIVIDER LINE WITH 3D PILL */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-zinc-900 shadow-2xl border-2 border-zinc-200 flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-zinc-800" />
              </div>
            </div>

            {/* Top Indicator Labels */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                {t.lensBeforeLabel}
              </span>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                {t.lensAfterLabel}
              </span>
            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
