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
  RotateCw
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

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24; // -12 to +12 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -24;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full select-none">
      
      {/* Top 3D Control Bar */}
      <div className="flex items-center justify-between mb-3 px-2 text-xs">
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
          className={`px-3 py-1 rounded-full text-[11px] font-mono border transition-all flex items-center gap-1.5 ${
            explodedView
              ? 'shadow-md'
              : `${theme.cardBg} ${theme.textMuted} hover:${theme.text}`
          }`}
          title="Toggle 3D Exploded Perspective"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{explodedView ? "Layered 3D Active" : "3D Layer Mode"}</span>
        </button>
      </div>

      {/* Main 3D Perspective Viewport */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[420px] sm:h-[460px] w-full perspective-1500"
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
              transform: explodedView ? 'translateZ(-60px) scale(0.95)' : 'translateZ(-20px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className={`absolute inset-0 rounded-3xl border border-dashed ${theme.border} ${
              theme.isDark ? 'hologram-grid-dark bg-[#11131a]/60' : 'hologram-grid-light bg-zinc-50/70'
            } backdrop-blur-xs`}
          />

          {/* LAYER 1: Main 3D Photo Viewport Card */}
          <div
            style={{
              transform: explodedView ? 'translateZ(20px) rotateX(4deg)' : 'translateZ(10px)',
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
                  transform: explodedView ? 'translateZ(40px)' : 'translateZ(20px)',
                  transition: 'all 0.4s ease',
                }}
                className="absolute top-4 left-4"
              >
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-black/90 text-[#151515] dark:text-white border border-white/20 shadow-md backdrop-blur-md flex items-center gap-1.5">
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
                  transform: explodedView ? 'translateZ(50px)' : 'translateZ(25px)',
                  transition: 'all 0.4s ease',
                }}
                className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white"
              >
                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-lg sm:text-xl tracking-tight drop-shadow-md">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs text-zinc-300 drop-shadow-sm font-medium">
                    {currentSlide.subtitle}
                  </p>
                </div>

                <div className="text-right shrink-0 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
                  <span className="text-xl sm:text-2xl font-black font-mono leading-none block">
                    {currentSlide.stat}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-zinc-200">
                    {currentSlide.statLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Panel Strip with Mini Slide Thumbs */}
            <div className={`p-4 ${theme.cardBg} flex items-center justify-between gap-3 border-t ${theme.border}`}>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSlide(idx)}
                    style={{
                      borderColor: activeSlide === idx ? theme.accent : 'transparent'
                    }}
                    className={`relative w-12 h-10 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeSlide === idx ? 'scale-105 shadow-md' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 text-[11px] font-mono text-[#717171]">
                <span>0{activeSlide + 1}</span>
                <span>/</span>
                <span>0{slides.length}</span>
              </div>
            </div>
          </div>

          {/* LAYER 2: Floating 3D Satellite Card - Top Right (Holographic Audit Badge) */}
          <div
            style={{
              transform: explodedView
                ? 'translateZ(90px) translateX(25px) translateY(-20px)'
                : 'translateZ(45px) translateX(12px) translateY(-10px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className="absolute top-2 right-2 sm:-right-4 w-52 sm:w-56 p-3 rounded-2xl bg-white/95 dark:bg-[#1f2230]/95 backdrop-blur-md border border-[#e4e4e4] dark:border-zinc-700 shadow-xl pointer-events-none"
          >
            <div className="flex items-center gap-2.5">
              <div
                style={{ backgroundColor: theme.accentLight }}
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-current"
              >
                <ShieldCheck style={{ color: theme.accent }} className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className={`text-[11px] font-bold ${theme.text} block`}>
                  100% Audit Score
                </span>
                <span className={`text-[10px] ${theme.textMuted} font-mono block`}>
                  Azim Premji Foundation
                </span>
              </div>
            </div>
          </div>

          {/* LAYER 3: Floating 3D Satellite Card - Bottom Left (Live Radar Dispatch) */}
          <div
            style={{
              transform: explodedView
                ? 'translateZ(100px) translateX(-25px) translateY(25px)'
                : 'translateZ(55px) translateX(-10px) translateY(12px)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className="absolute bottom-16 sm:bottom-12 -left-2 sm:-left-6 w-56 sm:w-60 p-3 rounded-2xl bg-white/95 dark:bg-[#1f2230]/95 backdrop-blur-md border border-[#e4e4e4] dark:border-zinc-700 shadow-xl pointer-events-none"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className={`text-[11px] font-bold ${theme.text}`}>
                    Active Field Network
                  </span>
                </div>
                <span className={`text-[10px] ${theme.textMuted} font-mono block`}>
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
