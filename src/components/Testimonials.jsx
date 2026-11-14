import React from 'react';
import { Quote, Star, MapPin, Users2, Heart } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function Testimonials() {
  const testimonials = pptData.testimonials;
  const communities = pptData.targetCommunities;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
            <Heart className="w-3.5 h-3.5 text-zinc-800" />
            <span>Community Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Voices from the Field
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Real testimonies from liberated bonded workers, local educators, and organic farmers whose dignity and livelihoods were restored.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <Quote className="w-6 h-6 text-zinc-400 mb-4" />
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-950">
                    {t.author}
                  </h4>
                  <span className="text-[11px] text-zinc-600 block">
                    {t.role}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <div className="flex gap-0.5 text-zinc-800">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-zinc-800" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Target Communities Overview */}
        <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-zinc-200 gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 font-semibold block mb-0.5">
                Target Demographics
              </span>
              <h3 className="text-lg font-bold text-zinc-950">
                Marginalised Communities Served
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-600">
              <Users2 className="w-3.5 h-3.5 text-zinc-700" />
              <span>Priority Support Across South India</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {communities.map((c, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-zinc-200 space-y-1.5 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                  <h4 className="font-bold text-zinc-950 text-xs sm:text-sm">
                    {c.name}
                  </h4>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
