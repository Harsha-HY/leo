import React from 'react';
import { Award, Eye, Compass, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function AboutGovernance() {
  const board = pptData.governingBoard;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Profile & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            About Praja Pragati Trust
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Founded on 15th April 1983 in Machilipatnam under The Indian Trusts Act 1882, PPT is guided by Gandhian principles of simple living and high thinking, dedicated to community self-reliance and fundamental rights.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-900">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-500 font-semibold">
                    Vision
                  </span>
                  <h3 className="text-lg font-bold text-zinc-950">
                    Realization of "Grama Swaraj"
                  </h3>
                </div>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                "{pptData.vision}"
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-zinc-200 text-xs text-zinc-500">
              Mahatma Gandhi's ideal of self-sustained rural communities.
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-900">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-500 font-semibold">
                    Mission
                  </span>
                  <h3 className="text-lg font-bold text-zinc-950">
                    Empowering the Voiceless
                  </h3>
                </div>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                "{pptData.mission}"
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-zinc-200 text-xs text-zinc-500">
              Participatory rural action and institutional strengthening.
            </div>
          </div>

        </div>

        {/* Guiding Principles Grid */}
        <div className="mb-16">
          <h3 className="text-base font-bold text-zinc-950 mb-4 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-zinc-700" />
            <span>Guiding Principles</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {pptData.guidingPrinciples.map((gp, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-zinc-50 border border-zinc-200"
              >
                <span className="text-xs font-mono text-zinc-400 font-bold block mb-1">
                  0{i + 1}
                </span>
                <h4 className="text-xs font-bold text-zinc-900 mb-1">
                  {gp.title}
                </h4>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  {gp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Trustees */}
        <div id="governance" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 font-semibold block mb-0.5">
                Governance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                Board of Trustees (2023 – contd.)
              </h3>
            </div>
            <span className="text-xs text-zinc-500">
              Managing the functions and projects of PPT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {board.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl bg-zinc-50 border border-zinc-200 p-4 flex flex-col justify-between hover:border-zinc-300 transition-colors"
              >
                <div>
                  <div className="w-24 h-24 mx-auto mb-3 rounded-xl overflow-hidden border border-zinc-200 bg-white">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/images/chairman_m_srinivasulu.jpg";
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="text-sm font-bold text-zinc-950">
                      {member.name}
                    </h4>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-200 text-zinc-800">
                      {member.role}
                    </span>
                    <span className="block mt-1 text-[11px] text-zinc-500 font-mono">
                      {member.qualification}
                    </span>
                    <p className="mt-2 text-[11px] text-zinc-600 leading-snug line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-200 text-[10px] text-zinc-500 text-center font-mono">
                  {member.occupation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Statutory Registrations */}
        <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-zinc-200 gap-2">
            <div>
              <span className="text-xs font-mono uppercase text-zinc-500 font-semibold block mb-0.5">
                Statutory Compliance
              </span>
              <h3 className="text-lg font-bold text-zinc-950">
                Official Certifications & Tax Exemption Numbers
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-700 bg-white border border-zinc-200 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Audit Compliance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Trust Registration</span>
              <span className="text-sm font-bold text-zinc-950 block">Regd No. 24/83</span>
              <span className="text-[11px] text-zinc-600 block">Trust Deed Act 1882 (Machilipatnam, 1983)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">80G Tax Exemption</span>
              <span className="text-sm font-bold text-zinc-950 block">AAATP8682K25HY02</span>
              <span className="text-[11px] text-zinc-600 block">Valid to 31/03/2032 (50% Tax Exemption)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">12A Tax Registration</span>
              <span className="text-sm font-bold text-zinc-950 block">AAATP8682K25HY01</span>
              <span className="text-[11px] text-zinc-600 block">Valid to 31/03/2037 under IT Act</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">FCRA MHA Registration</span>
              <span className="text-sm font-bold text-zinc-950 block">010140011</span>
              <span className="text-[11px] text-zinc-600 block">Renewed 01/04/2023 to 31/03/2028</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">NITI Aayog NGO Darpan</span>
              <span className="text-sm font-bold text-zinc-950 block font-mono">AP/2013/0068300</span>
              <span className="text-[11px] text-zinc-600 block">Empanelled with Govt. of India</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">CSR Empanelment</span>
              <span className="text-sm font-bold text-zinc-950 block font-mono">CSR00017363</span>
              <span className="text-[11px] text-zinc-600 block">Eligible for Corporate CSR Grants</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Permanent Account No.</span>
              <span className="text-sm font-bold text-zinc-950 block font-mono">AAATP8682K</span>
              <span className="text-[11px] text-zinc-600 block">TAN: HYDP13059E</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-zinc-200">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Headquarters Contact</span>
              <span className="text-sm font-bold text-zinc-950 block">Tirupati - 517502</span>
              <span className="text-[11px] text-zinc-600 block">Ph: 0877-2244392 | Mob: 098482 42394</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
