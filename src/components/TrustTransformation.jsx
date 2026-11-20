import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustTransformation({ onOpenDonate }) {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 'yanadi',
      title: "Yanadi Tribal Land & Forest Rights",
      category: "Tribal Empowerment",
      location: "Nellore & Tirupati Districts, AP",
      beforeText: "Isolated in fringe forests without land ownership, identity cards, drinking water, or school access.",
      afterText: "Organized Yanadi Grama Sabhas secured legal land patta titles, solar drinking water borewells, and 100% child school enrollment.",
      beforeImage: "/images/vermicompost_pit.jpg",
      afterImage: "/images/team_and_community.jpg",
      impactQuote: "“For three generations we were invisible in the revenue records. Praja Pragati Trust stood with us in the collectorate until our forest rights pattas were signed.”",
      beneficiary: "Ramanamma & 42 Yanadi families, Pellakur",
      metrics: "42 Families Titled • 120 Acres Secured"
    },
    {
      id: 'bonded',
      title: "Bonded Labour Rescue & Reintegration",
      category: "Human Rights",
      location: "Tiruvallur & Ambur Regional Hubs",
      beforeText: "Generations trapped in third-party debt bondage at hazardous brick kilns, working 16 hours daily with zero wages.",
      afterText: "Secured Sub-Collector Release Certificates, government debt liquidation, Rs 20,000 immediate rehabilitation, and sustainable livelihoods.",
      beforeImage: "/images/office_ambur_bonded_labour.jpg",
      afterImage: "/images/rescued_labourers_community.jpg",
      impactQuote: "“When the trust field team arrived with the revenue division officer, our chains were broken. Today my children go to school, not the brick kiln.”",
      beneficiary: "Munuswamy & Family, Rescued Worker",
      metrics: "1,200+ Rescued • 100% Release Certs Filed"
    },
    {
      id: 'farming',
      title: "5-Layer Climate-Resilient Natural Farming",
      category: "Sustainable Agriculture",
      location: "Chittoor & Annamayya Districts, AP",
      beforeText: "Crippling chemical pesticide debt, dried borewells, and declining soil fertility forcing farmer distress migration.",
      afterText: "Adopted zero-chemical 5-layer multi-tier cropping, indigenous seed banks, and farm ponds yielding continuous income all 12 months.",
      beforeImage: "/images/organic_farming_posters.jpg",
      afterImage: "/images/natural_farming_field.jpg",
      impactQuote: "“My input cost dropped from Rs 35,000 to near zero using Jeevamrutham. My farm now feeds my family and pays for my daughter's college.”",
      beneficiary: "Subbaraju, Certified Natural Farmer",
      metrics: "5,000+ Farmers • 100% Chemical Free"
    }
  ];

  const current = stories[activeStory];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#0c1a16] transition-colors relative overflow-hidden">
      
      {/* Decorative Wavy Curve Header Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1 w-8 bg-emerald-600 rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#166534] dark:text-emerald-400 font-mono">
                {t.lensTitle || "Grassroots Transformation"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f2d37] dark:text-white tracking-tight font-display">
              Real Lives. Lasting Impact.
            </h2>
            <p className="text-base text-[#5a6a70] dark:text-emerald-200/80 max-w-2xl mt-2">
              {t.lensSub || "Witness the real-world before and after transformation delivered by Praja Pragati Trust."}
            </p>
          </div>

          {/* Interactive Story Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {stories.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => setActiveStory(idx)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeStory === idx
                    ? 'bg-[#166534] text-white shadow-md'
                    : 'bg-[#f7f5ef] dark:bg-emerald-950/60 text-[#334155] dark:text-zinc-300 hover:bg-emerald-50'
                }`}
              >
                {story.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Transformation Card with Fluid Curves */}
        <div className="bg-[#fdfbf7] dark:bg-[#132822] rounded-3xl sm:rounded-5xl p-6 sm:p-10 lg:p-12 border border-[#eae5d8] dark:border-emerald-800 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 cols: Before vs After Split Comparison */}
            <div className="lg:col-span-6 space-y-4">
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase text-[#d97706] dark:text-amber-400">
                  {current.location}
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#166534] dark:text-emerald-300">
                  {current.metrics}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f2d37] dark:text-white font-display">
                {current.title}
              </h3>

              {/* Before Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0c1a16] border border-rose-200 dark:border-rose-900/40 relative">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold font-mono text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                    {t.lensBeforeLabel || "Before Intervention"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5568] dark:text-zinc-300 leading-relaxed">
                  {current.beforeText}
                </p>
              </div>

              {/* After Card with Forest Green Accent */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 relative">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    {t.lensAfterLabel || "After PPT Action"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0f2d37] dark:text-emerald-100 font-medium leading-relaxed">
                  {current.afterText}
                </p>
              </div>

              {/* Quote from Beneficiary */}
              <div className="pt-2 border-t border-[#eae5d8] dark:border-emerald-900/50">
                <blockquote className="text-xs sm:text-sm italic text-[#5a6a70] dark:text-emerald-200/90 leading-relaxed">
                  {current.impactQuote}
                </blockquote>
                <div className="mt-2 text-xs font-bold text-[#0f2d37] dark:text-white">
                  — {current.beneficiary}
                </div>
              </div>

            </div>

            {/* Right 6 cols: Visual Evidence with curved photo frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border-2 border-emerald-600/30 group">
                <img
                  src={current.afterImage}
                  alt={current.title}
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 block mb-1">
                    Verified Field Documentation
                  </span>
                  <div className="text-sm sm:text-base font-bold">
                    {current.title}
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
