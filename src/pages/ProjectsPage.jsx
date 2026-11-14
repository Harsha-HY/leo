import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, Heart, CheckCircle2, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import Trending3DCylinderDeck from '../components/Trending3DCylinderDeck';
import TiltCard from '../components/TiltCard';

export default function ProjectsPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const projects = pptData.flagshipProjects;

  const categories = [
    'All',
    'Child Protection & Anti-Trafficking',
    'Child Education & ECCE',
    'Climate Resilience & Natural Farming',
    'Human Rights & Legal Justice',
    'Urban Sustainability & Recycling',
    'Financial Inclusion & Security',
    'Tribal Welfare & Skills'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className={`pt-28 sm:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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
            <span>Selected Work & Casework Directory</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            8 Flagship Programs • Audited Case Records
          </span>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          Enduring social change <br />
          proven <span style={{ color: theme.accent }}>on the ground.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-6 max-w-3xl leading-relaxed`}>
          Every project executed by Praja Pragati Trust is supported by institutional philanthropy partners, government departments, and legal release documentation.
        </p>
      </section>

      {/* 2. Trending 3D Cylindrical Orbiting Project Deck */}
      <Trending3DCylinderDeck onSelectProject={(p) => setModalProject(p)} />

      {/* 3. Filterable Projects Grid */}
      <section className={`py-20 ${theme.bg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    backgroundColor: isActive ? theme.accent : undefined,
                    color: isActive ? '#ffffff' : undefined,
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'shadow-md'
                      : `bg-[#f7f7f7] dark:bg-zinc-800 ${theme.textMuted} hover:${theme.text} border ${theme.border}`
                  }`}
                >
                  {cat === 'All' ? 'All Interventions' : cat}
                </button>
              );
            })}
          </div>

          {/* 3D Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={8}
                scale={1.02}
                onClick={() => setModalProject(project)}
                className={`group ${theme.cardBg} rounded-3xl border ${theme.cardBorder} ${theme.hoverBorder} transition-all overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl flex flex-col justify-between`}
              >
                <div>
                  {/* Photo with Category & Partner */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/images/hero_happy_children.jpg";
                      }}
                    />
                    <div className="absolute top-4 left-4 translate-z-20">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-zinc-900/90 text-[#151515] dark:text-white border border-[#e4e4e4] dark:border-zinc-700 shadow-md backdrop-blur-xs">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between translate-z-20">
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#151515]/85 text-white backdrop-blur-xs shadow-sm">
                        Partner: {project.partner.split('&')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-3 translate-z-10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={theme.textMuted}>Audited Project Report</span>
                      <span style={{ color: theme.accent }} className="flex items-center gap-1 font-bold group-hover:translate-x-0.5 transition-transform">
                        <span>View case</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-bold ${theme.text} group-hover:text-[#ff6036] transition-colors leading-snug font-display`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed line-clamp-2`}>
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 translate-z-10">
                  <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t ${theme.border}`}>
                    {project.stats.map((stat, sIdx) => (
                      <div key={sIdx} className={`p-2.5 rounded-xl ${theme.subBg} border ${theme.border}`}>
                        <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block truncate`}>
                          {stat.label}
                        </span>
                        <span className={`text-sm font-bold ${theme.text}`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Detail Modal */}
      {modalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setModalProject(null)}
        >
          <div 
            className={`${theme.cardBg} rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border ${theme.border} shadow-2xl animate-scaleUp`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Photo Header */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900">
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/images/hero_happy_children.jpg";
                }}
              />
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-zinc-800 text-[#151515] dark:text-white flex items-center justify-center shadow-md transition-all active:scale-95"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span
                  style={{ backgroundColor: theme.accent }}
                  className="px-3.5 py-1 rounded-full text-xs font-semibold text-white shadow-md"
                >
                  {modalProject.category}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className={`text-xs font-mono uppercase ${theme.textMuted}`}>
                  Partner / Donor: {modalProject.partner}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-bold ${theme.text} leading-tight font-display`}>
                  {modalProject.title}
                </h3>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {modalProject.stats.map((stat, idx) => (
                  <div key={idx} className={`p-3 rounded-2xl ${theme.subBg} border ${theme.border}`}>
                    <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block`}>
                      {stat.label}
                    </span>
                    <span className={`text-lg font-extrabold ${theme.text}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-2">
                <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.text}`}>
                  Casework & Implementation Summary
                </h4>
                <p className={`text-sm ${theme.textMuted} leading-relaxed`}>
                  {modalProject.details}
                </p>
              </div>

              {/* Statutory Footnote */}
              <div
                style={{
                  backgroundColor: theme.accentLight,
                  borderColor: theme.accentBorder
                }}
                className="p-4 rounded-2xl border space-y-1.5 text-xs"
              >
                <div style={{ color: theme.accent }} className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Audited Grassroots Record</span>
                </div>
                <p className={theme.textMuted}>
                  All casework is audited and reported under Ministry of Home Affairs (FCRA 010140011) and NITI Aayog NGO Darpan.
                </p>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setModalProject(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#151515] hover:bg-[#2b2b2b] dark:bg-white dark:text-[#151515] transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
