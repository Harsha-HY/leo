import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Sprout, 
  Layers, 
  Maximize2, 
  Compass, 
  ArrowUpRight,
  Activity,
  CheckCircle2,
  RotateCw,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Trending3DHeroStage({ onSelectProject }) {
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const [explodedView, setExplodedView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const slides = [
    {
      id: "children",
      category: "Child Rights & Education",
      title: "17,179+ Children Protected",
      subtitle: "441 Model Anganwadis & Bridge Centers",
      image: "/images/hero_happy_children.jpg",
      stat: "100%",
      statLabel: "School Retention",
      color: "#ff6036"
    },
    {
      id: "farming",
      category: "Regenerative Agro-Ecology",
      title: "1,351+ Acres Natural Farming",
      subtitle: "26 Bio-Resource Collectives & Water Tanks",
      image: "/images/natural_farming_field.jpg",
      stat: "60%",
      statLabel: "Cost Reduction",
      color: "#059669"
    },
    {
      id: "bonded-labour",
      category: "Anti-Trafficking & Justice",
      title: "489 Rescued From Bonded Labour",
      subtitle: "Legal Release Certificates & RBLA Union",
      image: "/images/rescued_labourers_community.jpg",
      stat: "489",
      statLabel: "Lives Liberated",
      color: "#4f46e5"
    },
    {
      id: "tribal-women",
      category: "Tribal Dignity & Livelihoods",
      title: "4,120+ Yanadi Families Empowered",
      subtitle: "RoFR Land Titles & Garment Tailoring Units",
      image: "/images/project_sricity_tailoring.jpg",
      stat: "4,120+",
      statLabel: "Forest Rights Pattas",
      color: "#d97706"
    }
  ];

  const currentSlide = slides[activeSlide];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to +10 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full select-none">
      
      {/* Top 3D Control Bar */}
      <div className="flex items-center justify-between mb-3 px-1 sm:px-2 text-xs">
        <div className="flex items-center gap-2">
          <span
            style={{ backgroundColor: theme.accent }}
            className="w-2 h-2 rounded-full animate-ping"
          />
          <span className={`font-mono text-[11px] font-bold uppercase tracking-wider ${theme.text}`}>
            Interactive 3D Stage
          </span>
        </div>

        {/* 3D Exploded View Toggle */}
        <button
          onClick={() => setExplodedView(!explodedView)}
          style={{
            backgroundColor: explodedView ? theme.accent : undefined,
            color: explodedView ? '#ffffff' : undefined,
            borderColor: theme.accentBorder
          }}
          className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-mono border transition-all flex items-center gap-1.5 ${
            explodedView
              ? 'shadow-md'
              : `${theme.cardBg} ${theme.textMuted} hover:${theme.text}`
          }`}
          title="Toggle 3D Exploded Perspective"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{explodedView ? "Layered 3D Active" : "3D Layer Mode"}</span>
          <span className="sm:hidden">{explodedView ? "Layered" : "3D Mode"}</span>
        </button>
      </div>

      {/* Main 3D Perspective Viewport */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[380px] sm:h-[430px] lg:h-[460px] w-full perspective-1500"
      >
        <div
          style={{
            transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className="relative w-full h-full preserve-3d"
        >
          
          {/* LAYER 0: 3D Holographic Backdrop Grid */}
          <div
            style={{
              transform: explodedView ? 'translateZ(-50px) scale(0.96)' : 'translateZ(-15px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className={`absolute inset-0 rounded-3xl border border-dashed ${theme.border} ${
              theme.isDark ? 'hologram-grid-dark bg-[#11131a]/60' : 'hologram-grid-light bg-zinc-50/70'
            } backdrop-blur-xs`}
          />

          {/* LAYER 1: Main 3D Photo Viewport Card */}
          <div
            style={{
              transform: explodedView ? 'translateZ(15px) rotateX(3deg)' : 'translateZ(8px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className={`absolute inset-0 rounded-3xl overflow-hidden ${theme.cardBg} border ${theme.cardBorder} shadow-2xl flex flex-col justify-between preserve-3d group`}
          >
            {/* Photo with subtle parallax zoom */}
            <div className="relative h-[68%] overflow-hidden bg-zinc-900">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "/images/hero_happy_children.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Category Badge (Floats in 3D) */}
              <div
                style={{
                  transform: explodedView ? 'translateZ(35px)' : 'translateZ(15px)',
                  transition: 'all 0.4s ease',
                }}
                className="absolute top-3 left-3 sm:top-4 sm:left-4"
              >
                <span className="px-2.5 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/95 dark:bg-black/90 text-[#151515] dark:text-white border border-white/20 shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <span
                    style={{ backgroundColor: currentSlide.color }}
                    className="w-2 h-2 rounded-full"
                  />
                  <span>{currentSlide.category}</span>
                </span>
              </div>

              {/* Bottom In-Photo Title & Metric */}
              <div
                style={{
                  transform: explodedView ? 'translateZ(45px)' : 'translateZ(20px)',
                  transition: 'all 0.4s ease',
                }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white"
              >
                <div className="space-y-0.5 max-w-[65%]">
                  <h3 className="font-extrabold text-sm sm:text-lg lg:text-xl tracking-tight drop-shadow-md truncate">
                    {currentSlide.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-300 drop-shadow-sm font-medium line-clamp-1">
                    {currentSlide.subtitle}
                  </p>
                </div>

                <div className="text-right shrink-0 bg-white/10 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-white/20">
                  <span className="text-lg sm:text-2xl font-black font-mono leading-none block">
                    {currentSlide.stat}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase font-mono text-zinc-200 block truncate">
                    {currentSlide.statLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Panel Strip with Thumbnails on the Right and Prev/Next Arrows */}
            <div className={`p-2.5 sm:p-3.5 ${theme.cardBg} flex items-center justify-between gap-3 border-t ${theme.border}`}>
              
              {/* Left Side: Counter & Active Label */}
              <div className="flex items-center gap-2 pl-1">
                <span className="font-mono text-xs font-bold text-[#ff6036]" style={{ color: theme.accent }}>
                  0{activeSlide + 1}
                </span>
                <span className={`text-[11px] font-mono ${theme.textMuted}`}>/ 0{slides.length}</span>
                <span className={`hidden md:inline text-[11px] font-mono ${theme.textMuted} truncate max-w-[120px]`}>
                  • {currentSlide.category.split('&')[0]}
                </span>
              </div>

              {/* Right Side: Thumbnails and Next/Prev Arrows */}
              <div className="flex items-center gap-2 ml-auto">
                {/* Thumbnails moved to the right */}
                <div className="flex items-center gap-1.5">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSlide(idx)}
                      style={{
                        borderColor: activeSlide === idx ? theme.accent : 'transparent'
                      }}
                      className={`relative w-9 h-7 sm:w-11 sm:h-8 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        activeSlide === idx ? 'scale-105 shadow-md ring-1 ring-white/50' : 'opacity-50 hover:opacity-100'
                      }`}
                      title={s.title}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Right-side Navigation Arrows */}
                <div className="flex items-center gap-1 pl-1 border-l border-zinc-200 dark:border-zinc-800">
                  <button
                    onClick={handlePrev}
                    className={`p-1.5 rounded-lg border ${theme.border} hover:bg-zinc-100 dark:hover:bg-zinc-800 ${theme.text} transition-colors active:scale-95`}
                    aria-label="Previous image"
                    title="Previous"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className={`p-1.5 rounded-lg border ${theme.border} hover:bg-zinc-100 dark:hover:bg-zinc-800 ${theme.text} transition-colors active:scale-95`}
                    aria-label="Next image"
                    title="Next"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* LAYER 2: Floating 3D Satellite Card - Top Right (Audit Badge) */}
          <div
            style={{
              transform: explodedView
                ? 'translateZ(70px) translateX(15px) translateY(-15px)'
                : 'translateZ(35px) translateX(8px) translateY(-6px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className="hidden sm:block absolute top-2 right-2 sm:-right-3 w-48 sm:w-56 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#1f2230]/95 backdrop-blur-md border border-[#e4e4e4] dark:border-zinc-700 shadow-xl pointer-events-none"
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div
                style={{ backgroundColor: theme.accentLight }}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 border border-current"
              >
                <ShieldCheck style={{ color: theme.accent }} className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="leading-tight">
                <span className={`text-[10px] sm:text-[11px] font-bold ${theme.text} block`}>
                  100% Audit Score
                </span>
                <span className={`text-[9px] sm:text-[10px] ${theme.textMuted} font-mono block`}>
                  Azim Premji Foundation
                </span>
              </div>
            </div>
          </div>

          {/* LAYER 3: Floating 3D Satellite Card - Bottom Left (Live Radar Dispatch) */}
          {/* Repositioned higher up so it never covers bottom slide options */}
          <div
            style={{
              transform: explodedView
                ? 'translateZ(80px) translateX(-15px) translateY(10px)'
                : 'translateZ(40px) translateX(-6px) translateY(0px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className="hidden sm:block absolute bottom-24 sm:bottom-28 -left-2 sm:-left-4 w-52 sm:w-60 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#1f2230]/95 backdrop-blur-md border border-[#e4e4e4] dark:border-zinc-700 shadow-xl pointer-events-none"
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className={`text-[10px] sm:text-[11px] font-bold ${theme.text}`}>
                    Active Field Network
                  </span>
                </div>
                <span className={`text-[9px] sm:text-[10px] ${theme.textMuted} font-mono block`}>
                  26 Districts • 6 Field Offices
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            style={{
              backgroundColor: i === activeSlide ? theme.accent : undefined
            }}
            className={`h-2 rounded-full transition-all ${
              i === activeSlide
                ? 'w-7'
                : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}