import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Play, Pause } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { pptData } from '../data/pptData';

export default function Trending3DCylinderDeck({ onSelectProject }) {
  const { theme } = useTheme();
  const [rotation, setRotation] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const projects = pptData.flagshipProjects.slice(0, 6);
  const count = projects.length;
  const radius = 340; // distance in Z space
  const angleStep = 360 / count;

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev - angleStep);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoRotate, angleStep]);

  const handlePrev = () => {
    setAutoRotate(false);
    setRotation((prev) => prev + angleStep);
  };

  const handleNext = () => {
    setAutoRotate(false);
    setRotation((prev) => prev - angleStep);
  };

  return (
    <section className={`py-20 sm:py-28 ${theme.subBg} border-b ${theme.border} transition-colors overflow-hidden select-none`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                style={{ color: theme.accent }}
                className="text-xs font-mono font-semibold uppercase tracking-wider"
              >
                Trending 3D Cylindrical Deck
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 text-[#717171] border border-[#e4e4e4] dark:border-zinc-700">
                Spatial Orbit
              </span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.12] font-display`}>
              Spin through our field interventions in 3D.
            </h2>
            <p className={`text-sm sm:text-base ${theme.textMuted} mt-2`}>
              Interact with our flagship programs positioned across a 360-degree spatial carousel.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-2.5 rounded-full border ${theme.border} ${theme.cardBg} ${theme.text} hover:scale-105 transition-all text-xs flex items-center gap-1.5 shadow-xs`}
              title="Toggle Auto Spin"
            >
              {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="font-mono text-[11px] hidden sm:inline">{autoRotate ? "Pause Orbit" : "Auto Spin"}</span>
            </button>

            <button
              onClick={handlePrev}
              className={`p-2.5 rounded-full border ${theme.border} ${theme.cardBg} ${theme.text} hover:scale-105 transition-all shadow-xs`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className={`p-2.5 rounded-full border ${theme.border} ${theme.cardBg} ${theme.text} hover:scale-105 transition-all shadow-xs`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Cylindrical Stage Viewport */}
        <div className="relative h-[480px] w-full flex items-center justify-center perspective-1000">
          
          <div
            style={{
              transform: `rotateX(-5deg) rotateY(${rotation}deg)`,
              transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            className="relative w-72 sm:w-80 h-96 preserve-3d"
          >
            {projects.map((p, index) => {
              const cardAngle = index * angleStep;

              return (
                <div
                  key={p.id}
                  onClick={() => onSelectProject(p)}
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  }}
                  className={`absolute inset-0 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} hover:border-[#ff6036] shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer group transition-all backface-hidden flex flex-col justify-between`}
                >
                  {/* Photo with gradient overlay */}
                  <div className="relative h-52 overflow-hidden bg-zinc-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/images/hero_happy_children.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/95 dark:bg-black/80 text-[#151515] dark:text-white border border-white/20 shadow-xs">
                        {p.category.split('&')[0]}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono text-zinc-300 block uppercase">
                        {p.partner.split('&')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className={`font-bold text-sm ${theme.text} line-clamp-1 group-hover:text-[#ff6036] transition-colors`}>
                        {p.title}
                      </h4>
                      <p className={`text-xs ${theme.textMuted} line-clamp-2 mt-1 leading-relaxed`}>
                        {p.summary}
                      </p>
                    </div>

                    <div className={`pt-2 border-t ${theme.border} flex items-center justify-between text-xs`}>
                      <span className={`text-[10px] font-mono ${theme.textMuted}`}>
                        Tap to inspect
                      </span>
                      <span
                        style={{ color: theme.accent }}
                        className="flex items-center gap-0.5 font-bold text-xs"
                      >
                        <span>View</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
