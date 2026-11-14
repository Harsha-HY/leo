import React from 'react';
import { ArrowUpRight, ShieldCheck, TreePine, Users, UserX, HeartHandshake } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TiltCard from './TiltCard';

export default function AgenciexCommunities() {
  const { theme } = useTheme();

  const communities = [
    {
      number: "01",
      name: "Yanadi Indigenous Tribes",
      tag: "Vulnerable Scheduled Tribe (ST)",
      icon: <TreePine className="w-5 h-5 text-white" />,
      summary: "One of South India’s most marginalized indigenous groups, traditionally hunter-gatherers and honey collectors living in segregated Chenchu and Yanadi habitations.",
      achievements: [
        "4,120+ families mobilized for Forest Rights (RoFR) land pattas & ration cards",
        "ECCE learning centres in tribal hamlets of Chittoor, Nellore & Tirupati",
        "50 tribal women trained in professional garment manufacturing with Sri City"
      ]
    },
    {
      number: "02",
      name: "Survivors of Bonded Labour",
      tag: "Debt-Bondage & Modern Slavery",
      icon: <UserX className="w-5 h-5 text-white" />,
      summary: "Families trapped in intergenerational debt bondage across brick kilns, stone quarries, rice mills, and agro-plantations in AP, Tamil Nadu, and Telangana.",
      achievements: [
        "489 bonded laborers legally rescued and issued Release Certificates",
        "42 active casework prosecutions with District Legal Services Authorities",
        "Organized Released Bonded Labourers Associations (RBLA) for rehabilitation"
      ]
    },
    {
      number: "03",
      name: "Adolescent Girls & Child Bride Survivors",
      tag: "Child Protection & Safety",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      summary: "Vulnerable young girls in rural mandals facing early dropouts, forced child marriage, lack of menstrual hygiene education, and human trafficking risks.",
      achievements: [
        "40+ child marriages legally halted with District Police & Childline 1098",
        "13,430+ adolescent girls sensitized on bodily safety across 96 Safe Villages",
        "Chulbuli Digital App deployed for sexual and reproductive health education"
      ]
    },
    {
      number: "04",
      name: "Small & Marginal Dryland Farmers",
      tag: "Climate-Resilient Agriculture",
      icon: <Users className="w-5 h-5 text-white" />,
      summary: "Smallholder agrarian families crippled by recurrent drought, depleting borewells, predatory moneylenders, and expensive chemical fertilizers.",
      achievements: [
        "1,351+ acres converted to Zero Budget Natural Farming (ZBNF)",
        "26 Farmer Interest Groups (NFIGs) and bio-resource shops established",
        "Crop Water Budgeting implemented in 24 drought-prone mandals"
      ]
    },
    {
      number: "05",
      name: "Dalits & Unorganized Wage Workers",
      tag: "Social Justice & Equality",
      icon: <HeartHandshake className="w-5 h-5 text-white" />,
      summary: "Landless agricultural labourers and unorganized urban migrant workers seeking minimum wages, social security registration, and housing dignity.",
      achievements: [
        "Trilinga Unorganised Workers Union (TUWU) with 1,200+ registered members",
        "8,643+ households enrolled into e-Shram, ABHA, and government welfare cards",
        "Community leadership training under Grama Swaraj & Panchayat Raj Act"
      ]
    }
  ];

  return (
    <section className={`py-20 sm:py-28 ${theme.subBg} border-b ${theme.border} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            Communities We Serve
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.15] font-display`}>
            Targeting the most vulnerable at the very bottom of the pyramid.
          </h2>
          <p className={`text-base sm:text-lg ${theme.textMuted} mt-3`}>
            In the Gandhian tradition of "Antyodaya" — uplifting the last person first — Praja Pragati Trust concentrates 100% of its resources on populations facing systemic neglect.
          </p>
        </div>

        {/* Agenciex 3D Grid for Communities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((c) => (
            <TiltCard
              key={c.number}
              maxTilt={8}
              scale={1.02}
              className={`p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} transition-all shadow-sm hover:shadow-2xl flex flex-col justify-between group`}
            >
              <div className="space-y-4 translate-z-10">
                <div className="flex items-center justify-between">
                  <div
                    style={{ backgroundColor: theme.accent }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md translate-z-20"
                  >
                    {c.icon}
                  </div>
                  <span
                    style={{ color: theme.accent }}
                    className="font-mono text-xs font-bold"
                  >
                    {c.number}
                  </span>
                </div>

                <div>
                  <span
                    style={{ color: theme.accent }}
                    className="text-[10px] font-mono uppercase tracking-wider block font-semibold"
                  >
                    {c.tag}
                  </span>
                  <h3 className={`text-lg font-bold ${theme.text} mt-1 font-display`}>
                    {c.name}
                  </h3>
                  <p className={`text-xs ${theme.textMuted} mt-2 leading-relaxed`}>
                    {c.summary}
                  </p>
                </div>

                <div className={`pt-2 space-y-2 border-t ${theme.border}`}>
                  <span className={`text-[10px] font-mono font-medium ${theme.textMuted} uppercase`}>
                    Field Milestones:
                  </span>
                  <ul className="space-y-1.5">
                    {c.achievements.map((item, i) => (
                      <li key={i} className={`text-[11px] ${theme.text} flex items-start gap-1.5 leading-snug`}>
                        <span style={{ color: theme.accent }} className="font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`pt-4 mt-4 border-t ${theme.border} flex items-center justify-between text-xs ${theme.textMuted} translate-z-10`}>
                <span>Grassroots Mandate</span>
                <span
                  style={{ color: theme.accent }}
                  className="font-mono text-[11px] font-bold"
                >
                  Since 1983
                </span>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
