import React from 'react';
import { ArrowRight, Compass, Scale, Landmark } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TiltCard from './TiltCard';

export default function AgenciexApproach() {
  const { theme } = useTheme();

  const steps = [
    {
      step: "01",
      icon: <Compass className="w-5 h-5 text-white" />,
      title: "Grassroots Mobilization & Grama Swaraj",
      subtitle: "Building participatory people's committees",
      desc: "We enter unreached tribal habitations and rural pockets through Participatory Rural Appraisal (PRA). We establish Village Development Committees (VDCs), Yanadi Sanghas, and Youth Clubs so communities articulate their own priorities.",
      deliverables: [
        "Participatory village mapping & vulnerability census",
        "Door-to-door entitlement gap analysis (Ration, Aadhaar, Land)",
        "Empowering women through 240+ Self-Help Groups (SHGs)"
      ]
    },
    {
      step: "02",
      icon: <Scale className="w-5 h-5 text-white" />,
      title: "Multi-Stakeholder Action & Legal Remedy",
      subtitle: "Securing statutory rights and accountability",
      desc: "When rights are violated — from bonded labour to denial of tribal land pattas — we mobilize statutory enforcement alongside Sub-Collectors, District Magistrates, Police Departments, and the District Legal Services Authority.",
      deliverables: [
        "Filing worksite complaints & obtaining Release Certificates",
        "Enforcing Section 370 IPC & Bonded Labour Act 1976",
        "Processing RoFR forest land rights claims with Forest Dept."
      ]
    },
    {
      step: "03",
      icon: <Landmark className="w-5 h-5 text-white" />,
      title: "Sustainable Community Institutions",
      subtitle: "Ensuring long-term independence & exit strategy",
      desc: "Our ultimate objective is not permanent charity, but self-reliance. We federate community groups into Farmer Producer Organizations (FPOs), Worker Unions, and School Management Committees that sustain progress without external dependence.",
      deliverables: [
        "Trilinga Unorganised Workers Union (TUWU) governance",
        "Farmer Interest Groups (NFIGs) managing bio-input shops",
        "Village Child Protection Committees active in 96 Gram Panchayats"
      ]
    }
  ];

  return (
    <section className={`py-20 sm:py-28 ${theme.bg} border-b ${theme.border} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            Our Approach
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.15] font-display`}>
            A structured pathway from vulnerability to self-reliance.
          </h2>
          <p className={`text-base sm:text-lg ${theme.textMuted} mt-3`}>
            Our time-tested 3-stage model ensures grassroots empowerment translates into constitutional rights and self-governing institutions.
          </p>
        </div>

        {/* 3 Steps 3D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((s) => (
            <TiltCard
              key={s.step}
              maxTilt={10}
              scale={1.02}
              className={`${theme.subBg} rounded-3xl border ${theme.cardBorder} ${theme.hoverBorder} transition-all p-7 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-2xl`}
            >
              <div className="space-y-6 translate-z-10">
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between">
                  <span
                    style={{ color: theme.accent }}
                    className="text-3xl sm:text-5xl font-extrabold font-mono"
                  >
                    {s.step}
                  </span>
                  <div
                    style={{ backgroundColor: theme.accent }}
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-md translate-z-20"
                  >
                    {s.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                    {s.title}
                  </h3>
                  <span className={`text-xs font-mono ${theme.textMuted} block`}>
                    {s.subtitle}
                  </span>
                  <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed pt-2`}>
                    {s.desc}
                  </p>
                </div>

                {/* Deliverables */}
                <div className={`pt-4 border-t ${theme.border} space-y-2`}>
                  <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider ${theme.text}`}>
                    Tangible Process Steps
                  </span>
                  <ul className="space-y-2">
                    {s.deliverables.map((del, i) => (
                      <li key={i} className={`text-xs ${theme.textMuted} flex items-start gap-2`}>
                        <ArrowRight
                          style={{ color: theme.accent }}
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t ${theme.border} text-[11px] font-mono ${theme.textMuted} flex items-center justify-between translate-z-10`}>
                <span>Phase {s.step} Methodology</span>
                <span style={{ color: theme.accent }} className="font-semibold">Standardized SOP</span>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
