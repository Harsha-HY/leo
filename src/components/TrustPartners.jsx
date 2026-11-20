import React from 'react';
import { pptData } from '../data/pptData';

export default function TrustPartners() {
  const partners = pptData.partnersAndDonors;
  const marqueeList = [...partners, ...partners];

  return (
    <section className="py-12 bg-white dark:bg-[#0c1a16] border-y border-[#eae5d8] dark:border-emerald-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5a6a70] dark:text-emerald-400">
          Trusted by Premier National & International Foundations Since 1983
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#fdfbf7] dark:bg-[#132822] border border-[#e6e2d8] dark:border-emerald-800/80 hover:border-emerald-500 shadow-2xs hover:shadow-md transition-all group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
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
                <span className="text-xs font-bold text-[#0f2d37] dark:text-white whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[10px] text-[#5a6a70] dark:text-emerald-300/80 whitespace-nowrap font-mono">
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
