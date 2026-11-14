import React, { useState } from 'react';
import { Sprout, BookOpen, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function ThematicPillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = pptData.thematicPillars;

  const icons = [
    <Sprout className="w-5 h-5 text-zinc-900" />,
    <BookOpen className="w-5 h-5 text-zinc-900" />,
    <Scale className="w-5 h-5 text-zinc-900" />
  ];

  return (
    <section id="pillars" className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
            <span>Thematic Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Three Core Strategic Focus Areas
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            PPT addresses rural poverty through an interconnected rights-based model uniting ecological sustainability, children's educational care, and legal liberation.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {pillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900'
                    : 'bg-white/60 border-zinc-200 hover:border-zinc-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-50 text-zinc-600'}`}>
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className={`font-semibold text-base ${isActive ? 'text-zinc-950' : 'text-zinc-700'}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                    {pillar.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Card */}
        {pillars[activePillar] && (
          <div className="rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {pillars[activePillar].badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                    {pillars[activePillar].title}
                  </h3>

                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    {pillars[activePillar].description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs uppercase font-semibold tracking-wider text-zinc-500 block">
                      Field Interventions & Deliverables:
                    </span>
                    {pillars[activePillar].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-zinc-700 leading-normal">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500">
                    Aligned with UN Sustainable Development Goals (SDGs)
                  </span>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:underline"
                  >
                    <span>View Project Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Photo */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-zinc-100 overflow-hidden">
                <img
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/images/hero_happy_children.jpg";
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-sm border border-zinc-200 text-xs text-zinc-800">
                  <p className="font-medium">{pillars[activePillar].tagline}</p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
