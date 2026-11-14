import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Compass, 
  Award, 
  Scale, 
  Users, 
  Sprout,
  Landmark
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import TiltCard from '../components/TiltCard';

export default function AboutPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const org = pptData.organization;
  const board = pptData.governingBoard;
  const principles = pptData.guidingPrinciples;

  return (
    <div className={`pt-28 sm:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
            <span>About Praja Pragati Trust</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            Deed No. 24/83 • Indian Trusts Act 1882
          </span>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          Rooted in Grama Swaraj. <br />
          <span style={{ color: theme.accent }}>Four decades</span> of unbroken service.
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-6 max-w-3xl leading-relaxed`}>
          Founded in 1983 in Machilipatnam, Praja Pragati Trust is a non-profit, non-political voluntary organization committed to uplifting historically excluded tribal communities, liberating bonded laborers, protecting children, and restoring climate resilience across South India.
        </p>
      </section>

      {/* 2. Philosophy, Vision & Mission (Editorial 2-Card Grid) */}
      <section className={`py-16 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <TiltCard
              maxTilt={6}
              scale={1.01}
              className={`p-8 sm:p-10 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6`}
            >
              <div className="space-y-4 translate-z-10">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted}`}>
                    Vision & Goal
                  </span>
                  <Compass style={{ color: theme.accent }} className="w-5 h-5 translate-z-20" />
                </div>
                <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display`}>
                  Realization of "Grama Swaraj"
                </h3>
                <p className={`text-sm sm:text-base ${theme.textMuted} leading-relaxed`}>
                  "{pptData.vision}"
                </p>
              </div>

              <div className={`pt-4 border-t ${theme.border} flex items-center justify-between text-xs font-mono ${theme.text} translate-z-10`}>
                <span>Registered Trust Deed 24/83</span>
                <span style={{ color: theme.accent }} className="font-bold">Since 1983</span>
              </div>
            </TiltCard>

            {/* Mission Card */}
            <TiltCard
              maxTilt={6}
              scale={1.01}
              className={`p-8 sm:p-10 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6`}
            >
              <div className="space-y-4 translate-z-10">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted}`}>
                    Mission Statement
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs translate-z-20">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                    <span className={`ml-1 ${theme.text} font-mono`}>100% Score</span>
                  </div>
                </div>
                <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display`}>
                  Holistic Development & Self-Reliance
                </h3>
                <p className={`text-sm sm:text-base ${theme.textMuted} leading-relaxed`}>
                  "{pptData.mission}"
                </p>
              </div>

              <div className={`pt-4 border-t ${theme.border} flex items-center justify-between text-xs font-mono ${theme.text} translate-z-10`}>
                <span className={theme.textMuted}>Institutional Audit: Azim Premji Foundation</span>
                <span style={{ color: theme.accent }} className="font-bold">NITI Aayog Empanelled</span>
              </div>
            </TiltCard>

          </div>
        </div>
      </section>

      {/* 3. Chairman Spotlight: Mr. M. Srinivasulu */}
      <section className={`py-20 ${theme.bg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span style={{ color: theme.accent }} className="text-xs font-mono font-semibold uppercase tracking-wider">
              Leadership & Founder
            </span>
          </div>

          <TiltCard
            maxTilt={5}
            scale={1.01}
            className={`p-8 sm:p-12 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-lg flex flex-col lg:flex-row items-center gap-10`}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-[#e4e4e4] dark:border-zinc-700 shrink-0 bg-zinc-100 dark:bg-zinc-800 shadow-xl translate-z-20">
              <img
                src="/images/chairman_m_srinivasulu.jpg"
                alt="Mr. M. Srinivasulu, Chairman"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 translate-z-10">
              <div>
                <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider">
                  Founder & Chairman
                </span>
                <h2 className={`text-2xl sm:text-4xl font-extrabold ${theme.text} font-display mt-0.5`}>
                  Mr. M. Srinivasulu
                </h2>
                <p className={`text-xs ${theme.textMuted} font-mono mt-1`}>
                  B. Com • Social Development Specialist • 41+ Years Grassroots Experience
                </p>
              </div>

              <p className={`text-sm sm:text-base ${theme.textMuted} leading-relaxed`}>
                "True social development does not mean creating continuous dependency on relief. Our founding conviction since 1983 is that marginalized tribal families, bonded laborers, and rural women possess the dignity, resilience, and wisdom to lead their own institutions. PPT acts as a bridge to secure constitutional rights, land titles, and self-reliant livelihood collectives."
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-emerald-500 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>489 Bonded Labourers Rescued</span>
                </span>
                <span className="flex items-center gap-1.5 text-indigo-500 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>4,120+ RoFR Land Titles</span>
                </span>
                <span className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>17,179+ Children Protected</span>
                </span>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* 4. Full Board of Trustees Grid */}
      <section className={`py-20 ${theme.subBg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span style={{ color: theme.accent }} className="text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
              Fiduciary Stewardship
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
              Board of Trustees
            </h2>
            <p className={`text-sm ${theme.textMuted} mt-2`}>
              Governed by seasoned social workers, health experts, and community leaders complying with the Indian Trusts Act 1882.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((member, idx) => (
              <TiltCard
                key={idx}
                maxTilt={8}
                scale={1.02}
                className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between group`}
              >
                <div className="space-y-4 translate-z-10">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 shadow-md translate-z-20">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/images/chairman_m_srinivasulu.jpg";
                      }}
                    />
                  </div>

                  <div>
                    <span style={{ color: theme.accent }} className="text-[10px] font-mono uppercase tracking-wider font-bold">
                      {member.role}
                    </span>
                    <h3 className={`text-lg font-bold ${theme.text} mt-0.5 font-display`}>
                      {member.name}
                    </h3>
                    <p className={`text-xs ${theme.textMuted} font-mono mt-0.5`}>
                      {member.qualification} • {member.occupation}
                    </p>
                  </div>

                  <p className={`text-xs ${theme.textMuted} leading-relaxed pt-2 border-t ${theme.border}`}>
                    {member.bio}
                  </p>
                </div>

                <div className={`pt-4 mt-4 border-t ${theme.border} flex items-center justify-between text-[11px] font-mono ${theme.textMuted} translate-z-10`}>
                  <span>Fiduciary Trustee</span>
                  <span style={{ color: theme.accent }}>Indian Trusts Act</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 5 Guiding Principles */}
      <section className={`py-20 ${theme.bg} border-b ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span style={{ color: theme.accent }} className="text-xs font-mono font-semibold uppercase tracking-wider block mb-2">
              Our Compass
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
              Guiding Principles & Ethics
            </h2>
            <p className={`text-sm ${theme.textMuted} mt-2`}>
              Every village committee, field center, and legal caseworker operates according to five non-negotiable principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-3xl ${theme.subBg} border ${theme.border} space-y-2`}
              >
                <span style={{ color: theme.accent }} className="text-xs font-mono font-bold">
                  Principle 0{idx + 1}
                </span>
                <h3 className={`text-base font-bold ${theme.text} font-display`}>
                  {pr.title}
                </h3>
                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Statutory Clearances & Audit Standing */}
      <section className={`py-20 ${theme.subBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`p-8 sm:p-12 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-xl flex flex-col md:flex-row items-center justify-between gap-8`}>
            <div className="space-y-3">
              <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider">
                Full Statutory Compliance
              </span>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display`}>
                Ready to partner on CSR or Institutional Grants?
              </h3>
              <p className={`text-xs sm:text-sm ${theme.textMuted} max-w-xl`}>
                PPT holds valid Section 80G (50% tax exemption), Section 12A permanent exemption, FCRA Registration (010140011), and MCA CSR-1 (CSR00017363) credentials.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenDonate}
                style={{ backgroundColor: theme.accent }}
                className="px-6 py-3 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center gap-2"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate with 80G Exemption</span>
              </button>

              <Link
                to="/contact"
                className={`px-6 py-3 rounded-full text-xs font-semibold ${theme.text} bg-[#f7f7f7] dark:bg-zinc-800 border ${theme.border} hover:bg-zinc-200 transition-all`}
              >
                Contact Trustees
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
