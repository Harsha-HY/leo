import React from 'react';
import { MapPin, Phone, Building } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import TiltCard from './TiltCard';

export default function AgenciexOffices() {
  const { theme } = useTheme();
  const offices = pptData.officeLocations;

  return (
    <section id="offices" className={`py-20 sm:py-28 ${theme.bg} border-b ${theme.border} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            Geographic Footprint & Field Offices
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.15] font-display`}>
            Where we work across South India.
          </h2>
          <p className={`text-base sm:text-lg ${theme.textMuted} mt-3`}>
            With headquarters in the temple city of Tirupati, our active field offices span Andhra Pradesh, Tamil Nadu, and Telangana to ensure immediate on-ground response.
          </p>
        </div>

        {/* 6 Offices 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, idx) => (
            <TiltCard
              key={idx}
              maxTilt={8}
              scale={1.02}
              className={`${theme.cardBg} rounded-3xl border ${theme.cardBorder} ${theme.hoverBorder} transition-all overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-2xl`}
            >
              <div>
                {/* 3D Office Photo */}
                <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/images/office_tirupati_head.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3 translate-z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-zinc-900/90 text-[#151515] dark:text-white border border-[#e4e4e4] dark:border-zinc-700 shadow-md backdrop-blur-xs">
                      {office.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 translate-z-20">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#151515]/85 text-white backdrop-blur-xs shadow-sm">
                      {office.state}
                    </span>
                  </div>
                </div>

                {/* Office Info */}
                <div className="p-6 space-y-3 translate-z-10">
                  <div>
                    <h3 className={`text-xl font-bold ${theme.text} font-display group-hover:text-[#ff6036] transition-colors`}>
                      {office.city}
                    </h3>
                    <p className={`text-xs ${theme.textMuted} flex items-start gap-1.5 mt-1 leading-snug`}>
                      <MapPin style={{ color: theme.accent }} className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                  </div>

                  <div className={`pt-2 border-t ${theme.border}`}>
                    <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block`}>
                      Program Focus:
                    </span>
                    <p className={`text-xs ${theme.text} font-medium mt-0.5 leading-relaxed`}>
                      {office.focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Contact Info */}
              <div className="px-6 pb-6 pt-0 translate-z-10">
                <div className={`pt-3 border-t ${theme.border} flex items-center justify-between text-xs ${theme.textMuted}`}>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Phone style={{ color: theme.accent }} className="w-3 h-3" />
                    <span>{office.phone || "+91 98482 42394"}</span>
                  </span>
                  <span
                    style={{ color: theme.accent }}
                    className="text-[10px] font-mono uppercase font-semibold"
                  >
                    Field Active
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
