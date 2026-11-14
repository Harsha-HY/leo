import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ArrowRight, 
  ArrowUpRight, 
  Quote, 
  Calendar, 
  Tag, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  UserCheck 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import TiltCard from '../components/TiltCard';
import Trending3DTransformationLens from '../components/Trending3DTransformationLens';

export default function StoriesPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  const testimonials = pptData.testimonials;

  // Rich field update stories from existing verified casework records
  const stories = [
    {
      id: "govindamma-liberation",
      category: "Bonded Labour Rescue",
      tag: "Freedom Casework",
      title: "From 3 Years Debt-Bondage at Brick Kiln to Community Leadership",
      summary: "How V. Govindamma and her family were rescued from illegal confinement, received government rehabilitation assistance, and founded an anti-trafficking survivor collective.",
      beneficiary: "V. Govindamma",
      role: "Survivor & RBLA Community Leader",
      location: "Chengalpattu District",
      date: "Field Update",
      image: "/images/rescued_labourers_community.jpg",
      quote: "Before PPT stepped in, our family was bonded for three years at a brick kiln with no freedom and negligible wages. PPT coordinated with the district collector to issue our Release Certificates and provided seed support. Today my daughters go to school every morning.",
      keyOutcome: "Issued Section 12 Release Certificate, ₹30,000 cash rehabilitation, and children enrolled in regular school."
    },
    {
      id: "model-anganwadi-transformation",
      category: "Child Development",
      tag: "Early Education",
      title: "How Sitting Circles & Joyful TLM Kits Revitalized Rural Anganwadis",
      summary: "Transforming traditional rural childcare into stimulating, sensory preschool spaces with model sitting circles, colorful learning mats, and parent-teacher monitoring committees.",
      beneficiary: "K. Sujatha",
      role: "Senior Anganwadi Teacher",
      location: "KVB Puram Mandal",
      date: "Field Update",
      image: "/images/hero_happy_children.jpg",
      quote: "The model Anganwadi center established by PPT transformed our village. With sitting circles, colorful TLM kits, and the nutrition garden, children run to the center with smiles. Parents now actively attend monitoring meetings.",
      keyOutcome: "441 Anganwadis upgraded; 100 model preschool spaces established with India Literacy Project."
    },
    {
      id: "ramanathan-natural-farming",
      category: "Natural Farming",
      tag: "Climate Action",
      title: "60% Input Cost Reduction Through Jeevamrutham & Water Budgeting",
      summary: "Smallholder farmer M. Ramanathan transitioned 3.5 acres of drought-prone groundnut into certified chemical-free natural farming with continuous green cover.",
      beneficiary: "M. Ramanathan",
      role: "Organic Farmer, NFIG Lead",
      location: "Pallamala Village, B.N. Kandriga",
      date: "Field Update",
      image: "/images/natural_farming_field.jpg",
      quote: "Transitioning to Zero Budget Natural Farming with PPT and Azim Premji Foundation cut my cultivation expenditure by 60%. Using Jeevamrutham and crop water budgeting, my groundnut crop yielded bumper returns despite sparse rainfall.",
      keyOutcome: "Zero chemical pesticide debt, 20% water saving, and local bio-input micro-resource centre."
    },
    {
      id: "yanadi-women-tailoring",
      category: "Tribal Livelihoods",
      tag: "Women Empowerment",
      title: "Yanadi Tribal Women Establishing Independent Tailoring Enterprises",
      summary: "Indigenous forest-dwelling women completing 6 months of industrial garment training with Sri City CSR, securing sewing machines and independent income.",
      beneficiary: "Yanadi Women Collective",
      role: "Self-Employed Tailors",
      location: "Sri City / Tada Mandal",
      date: "Field Update",
      image: "/images/project_sricity_tailoring.jpg",
      quote: "Learning garment production gave us financial independence for the first time. We no longer depend on seasonal low-wage daily labour.",
      keyOutcome: "50 women certified; 100% self-employment rate with local apparel cluster linkage."
    },
    {
      id: "drop-urban-plastic-recycling",
      category: "Environment",
      tag: "Recycling Initiative",
      title: "Project DROP: Community Mobilization for 43+ MT Plastic Recovery",
      summary: "Urban source-segregation and beach cleanups across 309 collection centers in Vijayawada and Visakhapatnam, diverting massive plastic waste from waterways.",
      beneficiary: "Urban Citizen Network",
      role: "DROP Champions",
      location: "Vijayawada & Visakhapatnam",
      date: "Field Update",
      image: "/images/drop_cleanup_drive.jpg",
      quote: "Source segregation campaigns and street plays made ordinary citizens understand how single-use plastics choke our rivers and oceans.",
      keyOutcome: "43.7 MT plastic waste collected and scientifically recycled with IPCA & Kia India."
    },
    {
      id: "safe-village-rbi-deaf",
      category: "Child Protection",
      tag: "Financial & Social Safety",
      title: "Protecting 13,430 Girls from Child Marriage & Financial Scams",
      summary: "Mobilizing Gram Rakshaks and conducting RBI DEAF financial literacy workshops to insulate rural mothers and adolescent girls from predatory loan traps and early marriages.",
      beneficiary: "Gram Rakshak Network",
      role: "Village Guardians",
      location: "96 Safe Villages, Chittoor & Tirupati",
      date: "Field Update",
      image: "/images/children_hands_up_education.jpg",
      quote: "Community vigilance stopped over 40 child marriages and sensitized thousands of mothers on digital banking safety.",
      keyOutcome: "40+ child marriages prevented; 2,412 rural women certified in banking fraud prevention."
    }
  ];

  const categories = ['All', 'Bonded Labour Rescue', 'Child Development', 'Natural Farming', 'Tribal Livelihoods', 'Environment', 'Child Protection'];

  const filteredStories = filter === 'All'
    ? stories
    : stories.filter(s => s.category === filter);

  return (
    <div className={`pt-24 sm:pt-32 lg:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="flex items-center gap-2 mb-4">
          <span
            style={{
              backgroundColor: theme.accentLight,
              color: theme.accent,
              borderColor: theme.accentBorder,
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold border shadow-xs"
          >
            <span
              style={{ backgroundColor: theme.accent }}
              className="w-2 h-2 rounded-full animate-ping"
            />
            <span>Grassroots Voices & Field Casework</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            Verified Beneficiary Accounts • 41 Years of Trust
          </span>
        </div>

        <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          Stories of change & <br />
          <span style={{ color: theme.accent }}>field updates.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-4 sm:mt-6 max-w-3xl leading-relaxed`}>
          Read first-person accounts, survivor testimonials, and community milestones across our educational, anti-trafficking, and climate interventions.
        </p>
      </section>

      {/* 2. 3D Transformation Lens Section (Interactive Before/After Experience) */}
      <Trending3DTransformationLens />

      {/* 3. Category Filter Bar */}
      <section className={`py-12 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    backgroundColor: isActive ? theme.accent : undefined,
                    color: isActive ? '#ffffff' : undefined,
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'shadow-md font-bold'
                      : `bg-white dark:bg-zinc-800 ${theme.textMuted} hover:${theme.text} border ${theme.border}`
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStories.map((story) => (
              <TiltCard
                key={story.id}
                maxTilt={6}
                scale={1.01}
                className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="h-44 sm:h-48 rounded-2xl overflow-hidden bg-zinc-900 relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/images/hero_happy_children.jpg";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/95 dark:bg-black/90 text-[#151515] dark:text-white border border-[#e4e4e4] dark:border-zinc-700 shadow-xs">
                        {story.tag}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#ff6036]" style={{ color: theme.accent }}>
                      <MapPin className="w-3 h-3" />
                      <span>{story.location}</span>
                    </div>

                    <h3 className={`text-lg font-bold ${theme.text} font-display mt-1 leading-snug group-hover:text-[#ff6036] transition-colors`}>
                      {story.title}
                    </h3>

                    <p className={`text-xs ${theme.textMuted} mt-2 leading-relaxed line-clamp-3`}>
                      {story.summary}
                    </p>
                  </div>

                  {/* Beneficiary Quote Box */}
                  <div className={`p-3.5 rounded-2xl ${theme.subBg} border ${theme.border} space-y-2`}>
                    <div className="flex items-center gap-2">
                      <Quote style={{ color: theme.accent }} className="w-4 h-4 shrink-0" />
                      <span className={`text-[11px] font-bold ${theme.text} truncate`}>
                        {story.beneficiary} ({story.role})
                      </span>
                    </div>
                    <p className={`text-[11px] italic ${theme.textMuted} leading-relaxed line-clamp-3`}>
                      "{story.quote}"
                    </p>
                  </div>
                </div>

                <div className={`mt-4 pt-3 border-t ${theme.border} flex items-center justify-between text-[11px] font-mono ${theme.textMuted}`}>
                  <span>Audited Casework</span>
                  <span style={{ color: theme.accent }} className="font-bold">Verified</span>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Action Banner */}
      <section className={`py-16 ${theme.bg} text-center border-t ${theme.border}`}>
        <div className="max-w-2xl mx-auto px-4">
          <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-2">
            Support More Communities
          </span>
          <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.text} font-display mb-4`}>
            Every story begins with community courage and donor trust.
          </h2>
          <p className={`text-xs sm:text-sm ${theme.textMuted} mb-6 leading-relaxed`}>
            Your statutory tax-exempt contribution directly funds child education kits, legal bonded labour defense, and farmer bio-resource centers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenDonate}
              style={{ backgroundColor: theme.accent }}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate (80G Tax-Exempt)</span>
            </button>
            <Link
              to="/transparency"
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold ${theme.text} bg-[#f7f7f7] dark:bg-zinc-800 border ${theme.border} hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all`}
            >
              Inspect Transparency & Reports
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}