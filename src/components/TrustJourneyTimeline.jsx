import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Award, CheckCircle2, ChevronRight, Landmark, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustJourneyTimeline() {
  const { t } = useLanguage();
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const milestones = [
    {
      year: '1983',
      title: 'Inception & Deed Registration',
      subtitle: 'Machilipatnam, Krishna District',
      desc: 'Founded on Gandhian Grama Swaraj principles by M. Srinivasulu and grassroots social workers. Formally registered under the Indian Trusts Act 1882 (Deed No. 24/83).',
      badge: 'Deed No. 24/83',
      tag: 'Estd. 1983',
      accentColor: '#166534'
    },
    {
      year: '1996',
      title: 'Yanadi Tribal Land Rights Movement',
      subtitle: 'Nellore & Tirupati Border Belt',
      desc: 'Pioneered legal land title claims for marginalized Yanadi tribes under the Forest Rights framework, establishing 40+ village sanghams.',
      badge: 'Tribal Welfare',
      tag: 'Land Pattas',
      accentColor: '#15803d'
    },
    {
      year: '2005',
      title: 'National Bonded Labour Taskforce',
      subtitle: 'Inter-State Rescue Coordination',
      desc: 'Partnered with district administrations across Andhra Pradesh and Tamil Nadu to rescue bonded labourers from hazardous brick kilns, securing official release certificates.',
      badge: '1,200+ Rescued',
      tag: 'Human Rights',
      accentColor: '#881337'
    },
    {
      year: '2014',
      title: 'NITI Aayog & 80G Tax Exemption',
      subtitle: 'Statutory Transparency Milestones',
      desc: 'Empaneled on NITI Aayog NGO Darpan (AP/2013/0068300) and granted Section 80G income tax exemption to encourage transparent domestic philanthropy.',
      badge: 'Sec 80G & 12A',
      tag: 'Govt. Empaneled',
      accentColor: '#0284c7'
    },
    {
      year: '2021',
      title: 'Project DROP & Urban Plastic Management',
      subtitle: 'Vizag, Tirupati & Vijayawada',
      desc: 'Launched Project DROP in partnership with IPCA, mobilizing 50+ collection trucks, community street plays, and safe informal waste picker integration.',
      badge: 'Eco Recycling',
      tag: 'Waste Recovery',
      accentColor: '#0f766e'
    },
    {
      year: '2026',
      title: '18,000+ Children & 5,000+ Farmers',
      subtitle: 'South India Grassroots Footprint',
      desc: 'Active across 3 States (AP, Telangana, Tamil Nadu) with 6 regional offices, supporting 91 schools, 222 anganwadis, and 5,000+ zero-chemical organic farmers.',
      badge: '41 Years of Service',
      tag: 'Living Legacy',
      accentColor: '#d97706'
    }
  ];

  // Scroll-driven line animation calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress when timeline enters bottom 80% of screen to top 20%
      const start = rect.top - windowHeight * 0.75;
      const totalHeight = rect.height;
      const current = -start;
      
      const progress = Math.max(0, Math.min(1, current / totalHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-[#fdfbf7] dark:bg-[#091512] transition-colors relative overflow-hidden">
      
      {/* Background Radiant Auras */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700 text-[#b45309] dark:text-amber-300 text-xs font-mono font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>41 YEARS OF UNBROKEN SERVICE • 1983 - 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f2d37] dark:text-white tracking-tight font-display">
            A Journey of Courage & Community
          </h2>
          <p className="text-base text-[#5a6a70] dark:text-emerald-200/80">
            Scroll down to watch our historical milestones unfold — from rural roots in Machilipatnam to regional transformation across South India.
          </p>
        </div>

        {/* Curved Milestone Pathway with Scroll-Animated Connecting Line */}
        <div ref={timelineRef} className="relative">
          
          {/* Desktop Central Connecting Track & Scroll-Animated Line */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1.5 bg-zinc-200/80 dark:bg-emerald-950/80 -translate-x-1/2 rounded-full overflow-visible">
            {/* The Active Glowing Line that grows as the user scrolls! */}
            <div 
              style={{ height: `${scrollProgress * 100}%` }}
              className="w-full bg-gradient-to-b from-[#166534] via-[#d97706] to-[#881337] rounded-full transition-all duration-75 relative shadow-sm"
            >
              {/* Glowing Laser Pulse Head at the bottom tip */}
              {scrollProgress > 0 && scrollProgress < 0.99 && (
                <div className="absolute -bottom-2 -left-1.5 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-amber-300/60 shadow-lg shadow-amber-400/80 animate-ping" />
              )}
            </div>
          </div>

          {/* Mobile Left Connecting Track & Animated Line */}
          <div className="lg:hidden absolute left-6 top-4 bottom-4 w-1 bg-zinc-200 dark:bg-emerald-950 rounded-full">
            <div 
              style={{ height: `${scrollProgress * 100}%` }}
              className="w-full bg-gradient-to-b from-[#166534] via-[#d97706] to-[#881337] rounded-full transition-all duration-75"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const milestoneThreshold = idx / (milestones.length - 1);
              const isReached = scrollProgress >= milestoneThreshold - 0.08;

              return (
                <div 
                  key={item.year}
                  className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-14 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (6 cols) */}
                  <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`bg-white dark:bg-[#132822] p-6 sm:p-8 rounded-3xl sm:rounded-4xl shadow-md transition-all duration-500 border ${
                      isReached 
                        ? 'border-amber-400/80 dark:border-amber-500/60 shadow-xl shadow-amber-500/5 -translate-y-1' 
                        : 'border-[#eae5d8] dark:border-emerald-800/80'
                    } relative group`}>
                      
                      <div className={`flex flex-wrap items-center gap-2 mb-2.5 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                        <span 
                          style={{
                            backgroundColor: isReached ? `${item.accentColor}15` : undefined,
                            color: item.accentColor,
                            borderColor: `${item.accentColor}40`
                          }}
                          className="text-xs font-mono font-bold px-3 py-1 rounded-full border shadow-2xs"
                        >
                          {item.badge}
                        </span>
                        <span className="text-xs text-[#5a6a70] dark:text-emerald-400 font-mono font-semibold">
                          {item.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#0f2d37] dark:text-white font-display mb-2.5">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4a5568] dark:text-zinc-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Year Bubble in Center that lights up when reached! */}
                  <div className="absolute left-6 lg:static -translate-x-1/2 lg:translate-x-0 z-20">
                    <div 
                      style={{
                        backgroundColor: isReached ? item.accentColor : '#166534',
                        boxShadow: isReached ? `0 0 25px ${item.accentColor}60` : undefined
                      }}
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full text-white border-4 transition-all duration-500 flex items-center justify-center font-display font-extrabold text-xs sm:text-base shrink-0 ${
                        isReached
                          ? 'border-amber-300 scale-110 shadow-xl'
                          : 'border-white dark:border-emerald-900 opacity-80 scale-95'
                      }`}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Empty placeholder for 50-50 symmetry on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
