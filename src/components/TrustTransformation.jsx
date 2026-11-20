import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  ChevronRight, 
  UserCheck, 
  Sliders, 
  Play, 
  Pause, 
  Layers,
  Volume2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustTransformation({ onOpenDonate }) {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const stories = [
    {
      id: 'yanadi',
      title: "Yanadi Tribal Land & Forest Rights",
      category: "Tribal Empowerment",
      location: "Nellore & Tirupati Districts, AP",
      beforeLabel: "Forest Fringe Squatters (Zero Legal Rights)",
      beforeText: "Isolated in fringe forests without land ownership, identity cards, drinking water, or school access for 3 generations.",
      afterLabel: "100% Legal Land Titles & Grama Sabhas",
      afterText: "Organized Yanadi Grama Sabhas secured legal land patta titles under Forest Rights Act, solar drinking water borewells, and 100% child school enrollment.",
      beforeImage: "/images/vermicompost_pit.jpg",
      afterImage: "/images/team_and_community.jpg",
      impactQuote: "“For three generations we were invisible in the revenue records. Praja Pragati Trust stood with us in the collectorate until our forest rights pattas were signed.”",
      beneficiary: "Ramanamma & 42 Yanadi families, Pellakur Hub",
      deltaMetric1: {
        label: "Forest Land Legal Patta",
        before: "0 Acres",
        after: "120 Acres (100% Titled)",
        progress: 100
      },
      deltaMetric2: {
        label: "Child School Enrollment",
        before: "12% Attendance",
        after: "100% Enrolled in 91 Schools",
        progress: 100
      }
    },
    {
      id: 'bonded',
      title: "Bonded Labour Rescue & Reintegration",
      category: "Human Rights & Liberation",
      location: "Tiruvallur & Ambur Regional Hubs",
      beforeLabel: "Generational Debt Bondage at Brick Kilns",
      beforeText: "Generations trapped in third-party debt bondage at hazardous brick kilns, working 16 hours daily with zero wages and violence.",
      afterLabel: "Legal Release Certificates & Dignity",
      afterText: "Secured Sub-Collector Release Certificates under Section 370 IPC, government debt liquidation, Rs 20,000 immediate rehabilitation, and sustainable livelihoods.",
      beforeImage: "/images/office_ambur_bonded_labour.jpg",
      afterImage: "/images/rescued_labourers_community.jpg",
      impactQuote: "“When the trust field team arrived with the revenue division officer, our chains were broken. Today my children go to school, not the brick kiln.”",
      beneficiary: "Munuswamy & Family, Rescued Brick Kiln Workers",
      deltaMetric1: {
        label: "Legal Release Certificates",
        before: "0% Freedom",
        after: "100% (1,200+ Rescued)",
        progress: 100
      },
      deltaMetric2: {
        label: "Immediate Rehabilitation Aid",
        before: "Rs 0 / Exploited",
        after: "Rs 20,000 Govt Grant Secured",
        progress: 95
      }
    },
    {
      id: 'farming',
      title: "5-Layer Climate-Resilient Natural Farming",
      category: "Sustainable Agriculture",
      location: "Chittoor & Annamayya Districts, AP",
      beforeLabel: "Pesticide Debt & Depleted Soil",
      beforeText: "Crippling chemical pesticide debt (Rs 35,000/acre), dried borewells, and declining soil fertility forcing farmer distress migration.",
      afterLabel: "100% Chemical-Free Multi-Tier Abundance",
      afterText: "Adopted zero-chemical 5-layer multi-tier cropping, indigenous seed banks, and farm ponds yielding continuous income all 12 months.",
      beforeImage: "/images/organic_farming_posters.jpg",
      afterImage: "/images/natural_farming_field.jpg",
      impactQuote: "“My input cost dropped from Rs 35,000 to near zero using Jeevamrutham. My farm now feeds my family and pays for my daughter's college education.”",
      beneficiary: "Subbaraju, Certified Natural Farmer, Chittoor",
      deltaMetric1: {
        label: "Chemical Input Cost Saved",
        before: "Rs 35,000 Debt",
        after: "Rs 0 Debt (100% Saved)",
        progress: 100
      },
      deltaMetric2: {
        label: "Year-Round Crop Harvest",
        before: "1 Monocrop Season",
        after: "12 Months Continuous Yield",
        progress: 96
      }
    }
  ];

  const current = stories[activeStory];

  // Auto-cycle stories every 8 seconds if auto-play is on
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
      setSliderPos(50);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, stories.length]);

  // Gentle oscillating wipe animation when slider is idle in autoplay
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    let frame;
    let angle = 0;
    const animateSlider = () => {
      angle += 0.02;
      // Oscillate gently between 35% and 65%
      const newPos = 50 + Math.sin(angle) * 15;
      setSliderPos(newPos);
      frame = requestAnimationFrame(animateSlider);
    };
    frame = requestAnimationFrame(animateSlider);
    return () => cancelAnimationFrame(frame);
  }, [isAutoPlaying, isDragging]);

  // Handle Dragging Slider
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#0c1a16] transition-colors relative overflow-hidden" id="impact">
      
      {/* Background Soft Organic Radiance */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-200/20 dark:bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 bg-emerald-600 rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400 font-mono">
                {t.lensTitle || "Grassroots Transformation"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f2d37] dark:text-white tracking-tight font-display">
              Real Lives. Lasting Impact.
            </h2>
            <p className="text-base text-[#5a6a70] dark:text-emerald-200/80 max-w-2xl">
              {t.lensSub || "Witness the real-world before and after transformation delivered by Praja Pragati Trust."}
            </p>
          </div>

          {/* Interactive Story Tabs with Active Progress Bead */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {stories.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => {
                  setActiveStory(idx);
                  setIsAutoPlaying(false);
                  setSliderPos(50);
                }}
                className={`relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs flex items-center gap-2 ${
                  activeStory === idx
                    ? 'bg-[#166534] text-white shadow-md scale-102'
                    : 'bg-[#f7f5ef] dark:bg-emerald-950/60 text-[#334155] dark:text-zinc-300 hover:bg-emerald-50'
                }`}
              >
                {activeStory === idx && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                )}
                <span>{story.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Transformation Card with Fluid Curves & Ambient Glow */}
        <div className="bg-[#fdfbf7] dark:bg-[#132822] rounded-3xl sm:rounded-5xl p-6 sm:p-10 lg:p-12 border border-[#eae5d8] dark:border-emerald-800 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 cols: Before vs After Split Narrative & Delta Gauges */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-[#d97706] dark:text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>{current.location}</span>
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#166534] dark:text-emerald-300 border border-emerald-300/50">
                  Verified Casework
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2d37] dark:text-white font-display tracking-tight leading-tight">
                {current.title}
              </h3>

              {/* Before & After Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                
                {/* Before Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1a16] border border-rose-200 dark:border-rose-900/40 relative shadow-2xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-[11px] font-bold font-mono text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                      {t.lensBeforeLabel || "Before Intervention"}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#0f2d37] dark:text-zinc-200 mb-1">
                    {current.beforeLabel}
                  </div>
                  <p className="text-[11px] text-[#5a6a70] dark:text-zinc-400 leading-relaxed">
                    {current.beforeText}
                  </p>
                </div>

                {/* After Card */}
                <div className="p-4 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 relative shadow-2xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-[11px] font-bold font-mono text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                      {t.lensAfterLabel || "After PPT Action"}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#166534] dark:text-emerald-200 mb-1">
                    {current.afterLabel}
                  </div>
                  <p className="text-[11px] text-[#0f2d37] dark:text-emerald-100 font-medium leading-relaxed">
                    {current.afterText}
                  </p>
                </div>

              </div>

              {/* ANIMATED DELTA METRICS (Different approach: Side-by-side progression gauges) */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#0c1a16]/80 border border-[#eae5d8] dark:border-emerald-800/60">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="font-bold text-[#0f2d37] dark:text-white">{current.deltaMetric1.label}</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-extrabold">{current.deltaMetric1.after}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-[#166534] transition-all duration-1000 ease-out"
                      style={{ width: `${current.deltaMetric1.progress}%` }}
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#0c1a16]/80 border border-[#eae5d8] dark:border-emerald-800/60">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="font-bold text-[#0f2d37] dark:text-white">{current.deltaMetric2.label}</span>
                    <span className="text-amber-600 dark:text-amber-300 font-extrabold">{current.deltaMetric2.after}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-1000 ease-out"
                      style={{ width: `${current.deltaMetric2.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Voice of Grassroots with Animated Audio Waveform */}
              <div className="pt-3 border-t border-[#eae5d8] dark:border-emerald-900/50">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-[#d97706] dark:text-amber-400">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Recorded Field Testimony</span>
                  
                  {/* 5 Animated Audio EQ Bars */}
                  <div className="flex items-end gap-1 h-3.5 ml-1">
                    <span className="w-1 bg-amber-500 rounded-full animate-audio-bar-1" />
                    <span className="w-1 bg-[#166534] dark:bg-emerald-400 rounded-full animate-audio-bar-2" />
                    <span className="w-1 bg-[#881337] dark:bg-rose-400 rounded-full animate-audio-bar-3" />
                    <span className="w-1 bg-amber-500 rounded-full animate-audio-bar-4" />
                    <span className="w-1 bg-[#166534] dark:bg-emerald-400 rounded-full animate-audio-bar-5" />
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm italic text-[#4a5568] dark:text-emerald-100/90 leading-relaxed bg-white/60 dark:bg-[#0c1a16]/60 p-3.5 rounded-2xl border border-zinc-200/60 dark:border-emerald-900/40">
                  {current.impactQuote}
                  <footer className="mt-2 text-xs font-bold not-italic text-[#0f2d37] dark:text-white">
                    — {current.beneficiary}
                  </footer>
                </blockquote>
              </div>

            </div>

            {/* Right 6 cols: INTERACTIVE BEFORE ↔ AFTER COMPARISON SLIDER (The Transformation Wipe) */}
            <div className="lg:col-span-6">
              <div className="space-y-3">
                
                {/* Top Control Bar for Slider */}
                <div className="flex items-center justify-between text-xs font-mono px-1">
                  <span className="text-[#5a6a70] dark:text-emerald-300 font-bold flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Slide to Compare Reality</span>
                  </span>
                  
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0c1a16] border border-zinc-200 dark:border-emerald-800 text-xs font-bold text-[#0f2d37] dark:text-emerald-200 hover:bg-emerald-50 shadow-2xs transition-colors"
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-3 h-3 text-amber-600" />
                        <span>Pause Lens</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                        <span>Auto-Scan</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Interactive Split Comparison Box */}
                <div 
                  ref={containerRef}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onClick={(e) => handleMove(e.clientX)}
                  className="relative h-[340px] sm:h-[420px] lg:h-[460px] w-full rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border-2 border-emerald-600/40 cursor-ew-resize select-none group"
                >
                  
                  {/* Layer 1: AFTER Image (Full Width Background) */}
                  <img
                    src={current.afterImage}
                    alt={`${current.title} After PPT`}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />
                  
                  {/* Layer 2: BEFORE Image (Clipped from left using sliderPos) */}
                  <div 
                    className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                    style={{ width: `${sliderPos}%` }}
                  >
                    <img
                      src={current.beforeImage}
                      alt={`${current.title} Before PPT`}
                      className="absolute inset-0 h-full object-cover object-center filter grayscale contrast-110 pointer-events-none"
                      style={{ 
                        width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                        maxWidth: 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-red-950/20 pointer-events-none" />
                  </div>

                  {/* Gradient Shadow Top & Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                  {/* Before Label (Left Side) */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-950/80 text-rose-200 border border-rose-500/50 backdrop-blur-md shadow-lg">
                      BEFORE INTERVENTION
                    </span>
                  </div>

                  {/* After Label (Right Side) */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#166534]/90 text-emerald-100 border border-emerald-400/50 backdrop-blur-md shadow-lg">
                      AFTER PPT ACTION
                    </span>
                  </div>

                  {/* Central Dividing Glowing Laser Line */}
                  <div 
                    className="absolute inset-y-0 w-1 bg-amber-400 z-30 shadow-[0_0_15px_rgba(251,191,36,0.9)] pointer-events-none animate-laser-glow"
                    style={{ left: `${sliderPos}%` }}
                  >
                    {/* Interactive Drag Handle Bead */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-[#0f2d37] border-2 border-amber-400 shadow-2xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                      <span className="text-[10px] font-black tracking-tighter">◂▸</span>
                    </div>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between text-white text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs border border-white/20">
                      {current.title}
                    </span>
                    <span className="text-[11px] text-amber-300 font-bold hidden sm:inline">
                      Drag left or right
                    </span>
                  </div>

                </div>

                {/* Micro Help Text */}
                <div className="text-center text-[11px] font-mono text-[#5a6a70] dark:text-emerald-300/80">
                  Slide horizontally to witness the grassroots before & after transformation
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
