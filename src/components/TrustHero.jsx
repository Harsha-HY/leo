import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar, Users, School, Building2, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustHero({ onOpenDonate }) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Multilingual Typewriter Effect at Starting Headline
  const phrases = t.typewriterPhrases || [
    "Shared Futures.",
    "Child Rights Guardians.",
    "Natural Farming Pioneers.",
    "Bonded Labour Abolitionists.",
    "Empowered Communities."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText.length + 1 === currentPhrase.length) {
          setTypingSpeed(2200); // pause at complete word
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(250);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed]);

  // Real Authentic Praja Pragati Trust Field Photos with Program Data
  const slides = [
    {
      id: 1,
      image: "/images/screenshot_children_hero_hd.jpg",
      tag: "Child Education & Rights",
      title: "91 Schools & 222 Anganwadis Supported",
      metric: "18,000+ Children Reached across South India",
      badgeColor: "bg-[#881337] text-white"
    },
    {
      id: 2,
      image: "/images/children_hands_up_education.jpg",
      tag: "Foundational Literacy & ECCE",
      title: "Active Classroom Learning & Drop-out Prevention",
      metric: "100% School Enrollment & Retention",
      badgeColor: "bg-[#166534] text-white"
    },
    {
      id: 3,
      image: "/images/natural_farming_field.jpg",
      tag: "Sustainable Agriculture",
      title: "5-Layer Climate-Resilient Natural Farming",
      metric: "5,000+ Tribal Farmers Free from Chemical Debt",
      badgeColor: "bg-emerald-700 text-white"
    },
    {
      id: 4,
      image: "/images/children_library_growby.jpg",
      tag: "Village Library Corners",
      title: "Story Books, Learning Kits & STEM Corners",
      metric: "Equipped in 91 Rural & Tribal Schools",
      badgeColor: "bg-[#d97706] text-white"
    },
    {
      id: 5,
      image: "/images/team_and_community.jpg",
      tag: "Women & Tribal Empowerment",
      title: "Self-Help Groups & Adivasi Grama Swaraj",
      metric: "250+ SHG Micro-Enterprises & Land Titles",
      badgeColor: "bg-amber-600 text-white"
    },
    {
      id: 6,
      image: "/images/rescued_labourers_community.jpg",
      tag: "Anti-Trafficking & Justice",
      title: "Liberation & Dignified Community Reintegration",
      metric: "1,200+ Rescued Bonded Labourers",
      badgeColor: "bg-[#881337] text-white"
    }
  ];

  // Auto-change photo every 2 seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-white to-[#f7f5ef] dark:from-[#091512] dark:via-[#0c1a16] dark:to-[#091512]">
      
      {/* Background Radiant Fluid Organic Curves & Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm Golden/Amber Fluid Curve behind Photo */}
        <div className="absolute -top-24 right-0 w-[55vw] max-w-[800px] h-[700px] bg-gradient-to-bl from-amber-200/40 via-emerald-100/30 to-transparent dark:from-emerald-900/20 dark:via-amber-900/10 rounded-bl-[180px] blur-2xl transform rotate-3 animate-pulse-subtle" />
        
        {/* Soft Emerald Glow Blob Left */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-900/20 rounded-full blur-3xl" />
        
        {/* Subtle Decorative Golden Contour Line */}
        <svg 
          className="absolute right-0 top-16 w-1/2 h-[550px] text-amber-300/40 dark:text-amber-500/15" 
          viewBox="0 0 600 550" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M50 0C150 120 30 280 200 380C320 450 480 420 600 500" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeDasharray="6 6"
          />
          <path 
            d="M120 20C240 160 100 320 280 430C380 490 520 460 620 520" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Hero Grid: Left Content (6 cols) + Right FULL PHOTO (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (6 cols): Headline with Typewriting effect */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Small Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-600/20 text-[#166534] dark:text-emerald-300 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#166534] dark:bg-emerald-400 animate-ping" />
              <span>Praja Pragati Trust • Established 1983 • 41 Years of Service</span>
            </div>

            {/* Main Headline with Smooth Typewriter Effect */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#0f2d37] dark:text-white tracking-tight leading-[1.08] font-display">
              {t.heroHeading1 || "Stronger Communities."} <br />
              <span className="inline-flex items-baseline text-transparent bg-clip-text bg-gradient-to-r from-[#166534] via-[#047857] to-[#d97706] dark:from-emerald-400 dark:to-amber-300">
                {displayText}
                <span className="text-amber-500 font-light opacity-90 animate-pulse ml-0.5">|</span>
              </span>
            </h1>

            {/* Subhead matching Reference Screenshot */}
            <p className="text-base sm:text-xl text-[#4a5568] dark:text-emerald-100/80 leading-relaxed font-normal">
              {t.heroSubtitle || "Working with communities towards education, a healthy environment and sustainable livelihoods across South India since 1983."}
            </p>

            {/* Action Buttons matching Reference Screenshot */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Primary Forest Green Button: "Explore Our Work →" */}
              <Link
                to="/services"
                className="bg-[#0e4a45] hover:bg-[#166534] text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-bold inline-flex items-center gap-2.5 transition-all shadow-md hover:shadow-xl hover:shadow-emerald-950/20 active:scale-95 group"
              >
                <span>{t.btnExploreWork || "Explore Our Work"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Secondary Wine Red Button: "Donate Now (80G)" */}
              <Link
                to="/donate"
                className="bg-[#881337] hover:bg-[#9f1239] text-white px-6 py-3.5 rounded-full text-sm sm:text-base font-bold inline-flex items-center gap-2 transition-all shadow-md hover:shadow-xl hover:shadow-rose-950/20 active:scale-95 group"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>{t.btnDonate80G || "Donate (80G Tax-Exempt)"}</span>
              </Link>

            </div>

            {/* Micro Transparency Clearances */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#5a6a70] dark:text-emerald-300/70">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#166534] dark:text-emerald-400" />
                <span>80G Tax Exemption Certified</span>
              </span>
              <span>•</span>
              <span>NITI Aayog: AP/2013/0068300</span>
              <span>•</span>
              <span>CSR-1 Regd.</span>
            </div>

          </div>

          {/* Right Column (6 cols): FULL PHOTO CONTAINER (Height increased, zero obstructive dark boxes) */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer Glow Wrapper */}
            <div className="relative mx-auto w-full">
              
              {/* Background radiant shape with warm amber/gold border */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-400/40 via-emerald-500/25 to-amber-300/50 rounded-[2.8rem] sm:rounded-[3.8rem] blur-xs transform -rotate-1" />
              
              {/* Main Photo Card Container with organic curves */}
              <div className="relative bg-white dark:bg-[#132822] p-2.5 sm:p-3 rounded-[2.8rem] sm:rounded-[3.6rem] shadow-2xl border-2 border-amber-300/80 dark:border-amber-500/50 overflow-hidden group">
                
                {/* FULL HEIGHT PHOTO CONTAINER */}
                <div className="relative h-[380px] sm:h-[480px] lg:h-[520px] w-full rounded-[2.4rem] sm:rounded-[3.2rem] overflow-hidden bg-emerald-950 shadow-inner">
                  
                  {/* Photo Images with smooth 2-second crossfade */}
                  {slides.map((s, idx) => (
                    <div
                      key={s.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className={`w-full h-full object-cover object-center transition-transform duration-2000 ${
                          idx === currentSlide ? 'scale-102' : 'scale-100'
                        }`}
                      />
                    </div>
                  ))}
                  
                  {/* Gentle top tag badge floating cleanly on the top-right corner */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`text-[11px] sm:text-xs font-mono font-bold px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-xs ${active.badgeColor}`}>
                      {active.tag}
                    </span>
                  </div>

                </div>

                {/* Clean, dedicated caption & progress bar underneath the photo */}
                <div className="mt-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-gradient-to-r from-amber-50/90 via-emerald-50/80 to-white dark:from-[#0c1a16] dark:to-[#132822] border border-[#eae5d8] dark:border-emerald-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#0f2d37] dark:text-white truncate">
                        {active.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5a6a70] dark:text-emerald-300 font-mono mt-0.5 font-semibold truncate pl-4.5">
                      {active.metric}
                    </p>
                  </div>

                  {/* 2-Second Interactive Progress Indicators */}
                  <div className="flex items-center gap-1.5 shrink-0 pl-4.5 sm:pl-0">
                    {slides.map((s, idx) => (
                      <button
                        key={s.id}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentSlide ? 'w-7 bg-amber-500 shadow-xs' : 'w-2 bg-zinc-300 dark:bg-emerald-800 hover:bg-zinc-400'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating Pill Badge: 41 Years of Service */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 bg-white dark:bg-[#163942] border border-amber-400/70 dark:border-emerald-700/60 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold text-[#0f2d37] dark:text-emerald-100 animate-float-slow z-30">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>41 Years of Service</span>
              </div>

              {/* Floating Pill Badge: 100% Tax Deductible (80G) */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 bg-[#881337] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 text-xs font-bold animate-float-reverse z-30">
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>80G Tax Exemption</span>
              </div>

            </div>

          </div>

        </div>

        {/* 5-Metric Floating Bar directly below Hero (Exact from Reference Screenshot!) */}
        <div className="mt-14 sm:mt-20">
          <div className="bg-white/95 dark:bg-[#132822]/95 backdrop-blur-md rounded-3xl sm:rounded-4xl p-5 sm:p-7 shadow-xl border border-[#eae5d8] dark:border-emerald-800/80">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100 dark:divide-emerald-800/40">
              
              {/* Stat 1: 1983 - Established */}
              <div className="flex items-center gap-3.5 px-2 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300/50 flex items-center justify-center shrink-0 text-amber-700 dark:text-amber-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2d37] dark:text-white font-display tracking-tight">
                    {t.statEstablished || "1983"}
                  </div>
                  <div className="text-xs text-[#5a6a70] dark:text-emerald-300 font-medium">
                    {t.statEstablishedLabel || "Established"}
                  </div>
                </div>
              </div>

              {/* Stat 2: 18,000+ - Children reached */}
              <div className="flex items-center gap-3.5 px-2 sm:px-4 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300/50 flex items-center justify-center shrink-0 text-[#881337] dark:text-rose-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#881337] dark:text-rose-300 font-display tracking-tight">
                    {t.statChildrenCurrent || "18,000+"}
                  </div>
                  <div className="text-xs text-[#5a6a70] dark:text-emerald-300 font-medium">
                    {t.statChildrenLabel || "Children reached (Current)"}
                  </div>
                </div>
              </div>

              {/* Stat 3: 222 - Anganwadi Centres */}
              <div className="flex items-center gap-3.5 px-2 sm:px-4 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/50 flex items-center justify-center shrink-0 text-[#166534] dark:text-emerald-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#166534] dark:text-emerald-300 font-display tracking-tight">
                    {t.statAnganwadis || "222"}
                  </div>
                  <div className="text-xs text-[#5a6a70] dark:text-emerald-300 font-medium">
                    {t.statAnganwadisLabel || "Anganwadi Centres"}
                  </div>
                </div>
              </div>

              {/* Stat 4: 91 - Schools */}
              <div className="flex items-center gap-3.5 px-2 sm:px-4 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-300/50 flex items-center justify-center shrink-0 text-blue-700 dark:text-blue-400">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2d37] dark:text-white font-display tracking-tight">
                    {t.statSchools || "91"}
                  </div>
                  <div className="text-xs text-[#5a6a70] dark:text-emerald-300 font-medium">
                    {t.statSchoolsLabel || "Schools & Centres"}
                  </div>
                </div>
              </div>

              {/* Stat 5: 3 States - AP, Telangana, Tamil Nadu */}
              <div className="flex items-center gap-3.5 px-2 sm:px-4 pt-2 sm:pt-0 col-span-2 sm:col-span-1">
                <div className="w-11 h-11 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-300/50 flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0f2d37] dark:text-white font-display tracking-tight">
                    {t.statStates || "3"} <span className="text-sm font-normal text-[#5a6a70]">States</span>
                  </div>
                  <div className="text-xs text-[#5a6a70] dark:text-emerald-300 font-medium">
                    {t.statStatesLabel || "AP, Telangana, Tamil Nadu"}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
