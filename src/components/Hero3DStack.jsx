import React, { useState, useRef } from 'react';
import { ArrowUpRight, ShieldCheck, Heart, Sparkles, Sprout } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero3DStack({ onSelectProject }) {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const cards = [
    {
      id: "children",
      title: "Child Protection & RTE Education",
      metric: "17,179+ Children",
      desc: "441 Model Anganwadis, STEM Labs & 1098 Childline Care",
      image: "/images/hero_happy_children.jpg",
      badge: "Quality Education",
      icon: <Sparkles className="w-3.5 h-3.5 text-white" />
    },
    {
      id: "farming",
      title: "Climate Resilience & Natural Farming",
      metric: "1,351+ Acres",
      desc: "Zero-budget bio-inputs, water budgeting & 26 farmer collectives",
      image: "/images/natural_farming_field.jpg",
      badge: "Ecological Action",
      icon: <Sprout className="w-3.5 h-3.5 text-white" />
    },
    {
      id: "labour",
      title: "Abolition of Bonded Labour",
      metric: "489 Freed Survivors",
      desc: "Release Certificates, prosecution casework & RBLA unionization",
      image: "/images/rescued_labourers_community.jpg",
      badge: "Human Rights & Law",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-white" />
    }
  ];

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
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto py-8 perspective-1000 select-none"
    >
      {/* 3D Floating Stage */}
      <div
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
        className="relative h-96 sm:h-[420px] preserve-3d flex items-center justify-center"
      >
        {cards.map((card, index) => {
          // Calculate stack position relative to active card
          const isCenter = index === activeIndex;
          const isLeft = (index === (activeIndex + 1) % 3);
          const isRight = (index === (activeIndex + 2) % 3);

          let transformStyle = '';
          let zIndex = 10;
          let opacity = 'opacity-100';

          if (isCenter) {
            transformStyle = 'translateZ(50px) scale(1) translateY(0px)';
            zIndex = 30;
          } else if (isLeft) {
            transformStyle = 'translateZ(-20px) translateX(-45px) rotate(-6deg) scale(0.92)';
            zIndex = 20;
            opacity = 'opacity-90 hover:opacity-100';
          } else if (isRight) {
            transformStyle = 'translateZ(-30px) translateX(45px) rotate(6deg) scale(0.92)';
            zIndex = 10;
            opacity = 'opacity-85 hover:opacity-100';
          }

          return (
            <div
              key={card.id}
              onClick={() => setActiveIndex(index)}
              style={{
                transform: transformStyle,
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                zIndex,
              }}
              className={`absolute top-0 w-72 sm:w-80 h-96 rounded-3xl bg-white dark:bg-[#181a24] border border-[#e4e4e4] dark:border-[#262833] shadow-2xl overflow-hidden cursor-pointer group ${opacity}`}
            >
              {/* Photo with 3D Depth */}
              <div className="relative h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating 3D Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    style={{ backgroundColor: theme.accent }}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold text-white shadow-md"
                  >
                    {card.icon}
                    <span>{card.badge}</span>
                  </span>
                </div>

                {/* Big Metric Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
                  <span className="font-extrabold text-xl tracking-tight drop-shadow-md">
                    {card.metric}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                    Audited Record
                  </span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-4 sm:p-5 space-y-1.5 flex flex-col justify-between h-40">
                <div>
                  <h4 className="font-bold text-base text-[#151515] dark:text-white group-hover:text-[#ff6036] transition-colors line-clamp-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#717171] dark:text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e4e4e4] dark:border-[#262833] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#717171]">
                    Click to bring to front
                  </span>
                  <span
                    style={{ color: theme.accent }}
                    className="flex items-center gap-0.5 font-bold text-xs"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Dots */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              backgroundColor: i === activeIndex ? theme.accent : undefined
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === activeIndex
                ? 'w-6'
                : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
