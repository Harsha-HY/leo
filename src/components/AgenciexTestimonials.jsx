import React from 'react';
import { Star, Quote } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import TiltCard from './TiltCard';

export default function AgenciexTestimonials() {
  const { theme } = useTheme();

  const testimonials = [
    ...pptData.testimonials,
    {
      quote: "Praja Pragati Trust's unyielding dedication to rescuing bonded laborers in brick kilns and granite mines is a benchmark for human rights casework in the state. Their team coordinates seamlessly with Revenue and Police authorities to secure immediate release and rehabilitation.",
      author: "Mr. K. Narayana Rao",
      role: "Advocate & Human Rights Defender",
      location: "Tirupati District Court"
    },
    {
      quote: "Project DROP in Vijayawada and Visakhapatnam showed how civic participation and scientific waste management can keep hundreds of metric tonnes of plastic out of the Krishna River and Bay of Bengal. PPT executed the grassroots collection with exemplary rigor.",
      author: "Dr. S. Bhargavi",
      role: "Environmental Consultant",
      location: "Visakhapatnam Operations"
    },
    {
      quote: "For decades, our Yanadi tribe had no ration cards, no voter ID, and no land ownership. PPT sat with our elders, mapped our lands, and fought for our RoFR titles. Today our children study in English medium schools and we farm our own ancestral plots.",
      author: "Chenchu Ramaiah",
      role: "Tribal Elder & Sangha President",
      location: "Sri Kalahasti Mandal"
    }
  ];

  return (
    <section className={`py-20 sm:py-28 ${theme.bg} border-b ${theme.border} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Star Rating Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            Community Voices & Endorsements
          </span>

          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.subBg} border ${theme.border} text-xs font-medium ${theme.text}`}>
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span className="font-bold">4.9</span>
            <span className={theme.textMuted}>• 41 Years of Grassroots Trust</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.15] font-display`}>
            Trusted by global foundations, district administrations & community leaders.
          </h2>
          <p className={`text-base sm:text-lg ${theme.textMuted} mt-3`}>
            Real voices from the field — bonded labour survivors, organic farmers, anganwadi teachers, and institutional partners whose lives and mandates PPT has touched.
          </p>
        </div>

        {/* Testimonials 3D 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <TiltCard
              key={idx}
              maxTilt={8}
              scale={1.02}
              className={`p-7 sm:p-8 rounded-3xl ${theme.subBg} border ${theme.border} ${theme.hoverBorder} transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-2xl group`}
            >
              <div className="space-y-4 translate-z-10">
                <Quote
                  style={{ color: theme.accent }}
                  className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity translate-z-20"
                />
                <p className={`text-xs sm:text-sm ${theme.text} leading-relaxed italic`}>
                  "{t.quote}"
                </p>
              </div>

              <div className={`pt-4 border-t ${theme.border} flex items-center justify-between translate-z-10`}>
                <div>
                  <h4 className={`text-sm font-bold ${theme.text} font-display`}>
                    {t.author}
                  </h4>
                  <p
                    style={{ color: theme.accent }}
                    className="text-xs font-semibold"
                  >
                    {t.role}
                  </p>
                  <p className={`text-[11px] ${theme.textMuted} font-mono`}>
                    {t.location}
                  </p>
                </div>
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-9 h-9 rounded-full border flex items-center justify-center font-bold text-xs"
                >
                  <span style={{ color: theme.accent }}>{t.author.charAt(0)}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
