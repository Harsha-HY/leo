import React, { useState } from 'react';
import { BarChart3, Trees, GraduationCap, HeartHandshake, CheckCircle } from 'lucide-react';

export default function ImpactStats() {
  const [activeYear, setActiveYear] = useState('2025-26');

  const yearData = {
    '2025-26': {
      title: "Fiscal Year 2025 – 2026",
      subtitle: "Milestone year: 17,179+ children reached, 489 bonded labourers rescued, 441 AWCs supported.",
      pillars: [
        {
          name: "Environment, Agriculture & Climate",
          icon: <Trees className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Farmers Supported", value: "805 Farmers" },
            { label: "Sustainable Farmland", value: "1,351 Acres" },
            { label: "Farmer Groups Formed", value: "26 FIGs" },
            { label: "Water Wells / Borewells", value: "10 Units" },
            { label: "Vermicompost & Drums", value: "62 Units" },
            { label: "Urban Plastic Management", value: "309 Locations" },
            { label: "Plastic Recycled", value: "43.7 MT" },
            { label: "Citizens Sensitized", value: "50,000+ People" }
          ]
        },
        {
          name: "Children, Education & Protection",
          icon: <GraduationCap className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Total Children Reached", value: "17,179" },
            { label: "Anganwadi Centres (AWCs)", value: "441 AWCs" },
            { label: "Primary & High Schools", value: "91 Schools" },
            { label: "Anganwadi Workers Trained", value: "224 AWWs" },
            { label: "Career Guidance Students", value: "3,451 Students" },
            { label: "Holland Code Tests", value: "2,435 Students" },
            { label: "Libraries & Science Kits", value: "68 Kits / Units" },
            { label: "Safe Village Adolescents", value: "3,780 Girls/Boys" }
          ]
        },
        {
          name: "Livelihoods, Financial Inclusion & Justice",
          icon: <HeartHandshake className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Bonded Labour Rescued", value: "489 Persons" },
            { label: "Migrant Workers Rescued", value: "109 Workers" },
            { label: "Worksites Surveyed", value: "382 Worksites" },
            { label: "Districts Covered (AP & TN)", value: "21 Districts" },
            { label: "Govt Scheme Linkages", value: "8,643 Members" },
            { label: "RBI DEAF Financial Literacy", value: "40 Camps (2,412 W)" },
            { label: "Women Tailors Trained", value: "50 Yanadi Women" },
            { label: "Flood Relief Families (Goonj)", value: "550 Families" }
          ]
        }
      ]
    },
    '2024-25': {
      title: "Fiscal Year 2024 – 2025",
      subtitle: "Safe Village Program expansion, World Bank APIIATP agriculture, and DROP Phase II.",
      pillars: [
        {
          name: "Environment & Agriculture",
          icon: <Trees className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "APIIATP Farm Families", value: "1,200 Families" },
            { label: "Productivity Increase", value: "+25% to +30%" },
            { label: "Water Users Assns (WUAs)", value: "38 WUAs" },
            { label: "Tanks & Check Dams", value: "27 Units" },
            { label: "DROP Phase II Locations", value: "109 Activated" },
            { label: "Plastic Waste Collected", value: "280.4 MT" },
            { label: "Community Street Plays", value: "100 Shows" },
            { label: "Beach & River Cleanups", value: "833 Participants" }
          ]
        },
        {
          name: "Child Rights & Safe Village",
          icon: <GraduationCap className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Safe Village Programs", value: "96 Villages" },
            { label: "Vigilance Committees (CVC)", value: "78 Committees" },
            { label: "Girls Sensitized on Rights", value: "13,430 Girls" },
            { label: "Child Marriages Stopped", value: "6 Stopped" },
            { label: "Gram Rakshaks Appointed", value: "96 Champions" },
            { label: "Nodal Teachers Trained", value: "82 Teachers" },
            { label: "Children in Contests", value: "4,800+ Students" },
            { label: "Helpline Assistance", value: "1098, 181" }
          ]
        },
        {
          name: "Health, Public Justice & Entitlements",
          icon: <HeartHandshake className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Bonded Labour Rescued", value: "338 Persons" },
            { label: "Successful Rescue Raids", value: "28 Operations" },
            { label: "Workers Sensitized on BLSA", value: "5,50,000+" },
            { label: "USI Salt Samples Tested", value: "1,200 Across 26 Dts" },
            { label: "NIDDCP Circulars Issued", value: "5 Govt Depts" },
            { label: "Child Development Reach", value: "37,624 Individuals" },
            { label: "Government Entitlements", value: "8,643 Enrolled" },
            { label: "Flood Relief Families", value: "1,300 Families" }
          ]
        }
      ]
    },
    '2023-24': {
      title: "Fiscal Year 2023 – 2024",
      subtitle: "Universal Salt Iodization rollout, Jal Jeevan Mission, and adolescent empowerment.",
      pillars: [
        {
          name: "Health & Nutrition Rights",
          icon: <Trees className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Universal Salt Iodization", value: "26 Districts AP" },
            { label: "Lab Titration Samples", value: "2,000+ Tested" },
            { label: "NABL Validation Check", value: "84% Compliant" },
            { label: "District USI Meetings", value: "8 Meetings" },
            { label: "Nutrition Gardens Formed", value: "10 Gardens" },
            { label: "Mothers' Health Groups", value: "80 Mothers/Mo" },
            { label: "Immunization Camps", value: "100% Coverage" },
            { label: "Dietary Awareness", value: "1,857 Participants" }
          ]
        },
        {
          name: "Adolescent & Child Development",
          icon: <GraduationCap className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Total Beneficiaries", value: "16,298 Children" },
            { label: "Villages Reached", value: "153 Villages" },
            { label: "Schools Covered", value: "150 Schools" },
            { label: "Model Anganwadis", value: "104 AWCs" },
            { label: "Village Learning Centres", value: "75 Centres" },
            { label: "Libraries Established", value: "30 Libraries" },
            { label: "Science Kits (ILP)", value: "14 Schools" },
            { label: "Dropouts Mainstreamed", value: "584 Children" }
          ]
        },
        {
          name: "Water Access & Anti-Bonded Labour",
          icon: <HeartHandshake className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Jal Jeevan Kuppam Div", value: "94 GPs" },
            { label: "Jal Jeevan Sathyavedu", value: "103 GPs" },
            { label: "VWSC Bank Accounts", value: "100% Opened" },
            { label: "Bonded Labour Rescued", value: "372 Persons" },
            { label: "Villages Surveyed", value: "556 Villages" },
            { label: "Vigilance Committees", value: "42 Activated" },
            { label: "Community Leaders Trained", value: "3,275 Leaders" },
            { label: "PMAY Tribal Houses", value: "490 Families" }
          ]
        }
      ]
    },
    'cumulative': {
      title: "Cumulative Footprint (1983 – 2026)",
      subtitle: "Over four decades of institutional credibility, legal casework, and rural development.",
      pillars: [
        {
          name: "Ecological & Rural Growth",
          icon: <Trees className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Small Farmers Supported", value: "5,000+ Farmers" },
            { label: "Irrigation Structures", value: "120+ Tanks & Dams" },
            { label: "Fallow Land Revived", value: "1,500+ Acres" },
            { label: "Urban Plastic Diverted", value: "350+ MT" },
            { label: "Water User Associations", value: "115+ Groups" },
            { label: "Self-Help Groups Promoted", value: "350+ SHGs" },
            { label: "Women Micro-Enterprises", value: "2,500+ Units" },
            { label: "Environmental Rallies", value: "300+ Campaigns" }
          ]
        },
        {
          name: "Education, Children & Youth",
          icon: <GraduationCap className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Total Children Impacted", value: "75,000+" },
            { label: "Anganwadis Strengthened", value: "299 AWCs" },
            { label: "Primary Schools Upgraded", value: "262 Schools" },
            { label: "High Schools Supported", value: "78 High Schools" },
            { label: "Community Libraries", value: "85 Libraries" },
            { label: "Child Marriages Stopped", value: "120+ Prevented" },
            { label: "Dropouts Re-enrolled", value: "3,500+ Children" },
            { label: "Youth Clubs Formed", value: "150+ Clubs" }
          ]
        },
        {
          name: "Human Rights, Rescue & Justice",
          icon: <HeartHandshake className="w-5 h-5 text-zinc-900" />,
          stats: [
            { label: "Bonded Labour Rescued", value: "2,100+ Survivors" },
            { label: "Court Prosecutions Handled", value: "180+ Cases" },
            { label: "Panchayats Mobilized", value: "850+ Gram Sabhas" },
            { label: "Identity & Entitlement Cards", value: "45,000+ Citizens" },
            { label: "Released Labour Unions", value: "RBLA & TUWU" },
            { label: "States of Active Operation", value: "4 Southern States" },
            { label: "Audited Annual Reports", value: "40+ Years" },
            { label: "Statutory Compliance", value: "100% In Good Standing" }
          ]
        }
      ]
    }
  };

  const current = yearData[activeYear];

  return (
    <section id="impact" className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Audited Data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Impact Metrics by Reporting Year
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600">
            Official performance data extracted from our published annual reports.
          </p>

          {/* Year Switcher Buttons */}
          <div className="mt-6 inline-flex p-1 rounded-full bg-white border border-zinc-200 shadow-xs">
            {[
              { id: '2025-26', label: '2025 – 26' },
              { id: '2024-25', label: '2024 – 25' },
              { id: '2023-24', label: '2023 – 24' },
              { id: 'cumulative', label: '40-Year Cumulative' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveYear(tab.id)}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeYear === tab.id
                    ? 'bg-zinc-900 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Period Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-950">
              {current.title}
            </h3>
            <p className="text-xs text-zinc-600">
              {current.subtitle}
            </p>
          </div>
          <span className="text-xs text-zinc-500 font-mono self-start sm:self-auto">
            Audited & Verified
          </span>
        </div>

        {/* 3 Pillar Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {current.pillars.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-zinc-200 p-5 sm:p-6 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-zinc-100">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200">
                    {p.icon}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-zinc-950">
                    {p.name}
                  </h4>
                </div>

                <div className="space-y-2">
                  {p.stats.map((st, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-zinc-50/60 border border-zinc-100 flex items-center justify-between"
                    >
                      <span className="text-xs text-zinc-600">
                        {st.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-zinc-950 font-mono">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Field Progress</span>
                <span className="text-zinc-700 font-medium">100% Achieved</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
