import React from 'react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';

export default function PartnerMarquee() {
  const { theme } = useTheme();
  const partners = pptData.partnersAndDonors;
  const marqueeList = [...partners, ...partners];

  return (
    <section className={`py-10 border-y ${theme.border} ${theme.cardBg} overflow-hidden transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <span className={`text-[11px] sm:text-xs font-semibold uppercase tracking-wider ${theme.textMuted} font-mono`}>
          Trusted Institutional Partners & Supporting Foundations
        </span>
      </div>

      <div className="relative w-full overflow-hidden marquee-container">
        <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={`flex items-center gap-3 px-4 py-2 rounded-full ${theme.subBg} border ${theme.cardBorder} hover:border-[#ff6036] transition-all group`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white p-0.5 border border-[#e4e4e4] dark:border-zinc-700 flex items-center justify-center shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  onError={(e) => {
                    e.target.src = "/images/ppt-logo.jpg";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-xs font-semibold ${theme.text} whitespace-nowrap`}>
                  {partner.name}
                </span>
                <span className={`text-[10px] ${theme.textMuted} whitespace-nowrap`}>
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
