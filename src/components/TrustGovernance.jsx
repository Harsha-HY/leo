import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2, FileText, ArrowRight, Landmark } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function TrustGovernance({ onOpenDonate }) {
  const org = pptData.organization;
  const board = pptData.governingBoard;
  const bank = org.bankDetails;

  const credentials = [
    {
      title: "Section 80G Tax Exemption",
      certNo: "AAATP8682K25HY02",
      authority: "Income Tax Department, Govt of India",
      benefit: "50% Deduction for Donors (Form 10BE issued)",
      color: "border-rose-400 bg-rose-50/60 dark:bg-rose-950/30 text-[#881337] dark:text-rose-300"
    },
    {
      title: "Section 12A Permanent",
      certNo: "AAATP8682KE20214",
      authority: "Director of Income Tax (Exemptions)",
      benefit: "Permanent Non-Profit Trust Recognition",
      color: "border-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 text-[#166534] dark:text-emerald-300"
    },
    {
      title: "FCRA Clearance",
      certNo: "010140011",
      authority: "Ministry of Home Affairs (MHA), New Delhi",
      benefit: "Authorized for International Aid & Philanthropy",
      color: "border-blue-400 bg-blue-50/60 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300"
    },
    {
      title: "NITI Aayog NGO Darpan",
      certNo: "AP/2013/0068300",
      authority: "NITI Aayog, Government of India",
      benefit: "National Empanelment for Central Govt Grants",
      color: "border-amber-400 bg-amber-50/60 dark:bg-amber-950/30 text-[#d97706] dark:text-amber-300"
    },
    {
      title: "MCA CSR-1 Registration",
      certNo: "CSR00017363",
      authority: "Ministry of Corporate Affairs, India",
      benefit: "Eligible for Corporate CSR Fund Deployment",
      color: "border-teal-400 bg-teal-50/60 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300"
    }
  ];

  return (
    <section id="governance" className="py-20 sm:py-28 bg-[#fdfbf7] dark:bg-[#091512] transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 text-[#166534] dark:text-emerald-300 text-xs font-mono font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>TRANSPARENCY, ACCOUNTABILITY & ETHICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f2d37] dark:text-white tracking-tight font-display">
            Governed by Uncompromising Integrity
          </h2>
          <p className="text-base text-[#5a6a70] dark:text-emerald-200/80">
            For 41 years, Praja Pragati Trust has subjected every rupee, intervention, and beneficiary record to statutory public oversight.
          </p>
        </div>

        {/* Chairman & Founder Spotlight */}
        <div className="bg-white dark:bg-[#132822] rounded-3xl sm:rounded-5xl p-6 sm:p-10 lg:p-12 border border-[#eae5d8] dark:border-emerald-800 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Chairman Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-amber-300 dark:border-emerald-700 shadow-xl">
                  <img
                    src="/images/chairman_m_srinivasulu.jpg"
                    alt="M. Srinivasulu - Managing Trustee & Chairman"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#166534] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-md">
                  Founder & Chairman
                </div>
              </div>
            </div>

            {/* Chairman Biography */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] dark:text-amber-400">
                Founder's Vision • 41 Years at the Grassroots
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f2d37] dark:text-white font-display">
                M. Srinivasulu
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5568] dark:text-zinc-300 leading-relaxed">
                A lifelong Gandhian grassroots worker, M. Srinivasulu founded Praja Pragati Trust in 1983 to ensure that the poorest tribal families, bonded labourers, and marginalized children are not forgotten by progress. His leadership spearheaded the liberation of over 1,200 bonded labourers, established education access in 91 schools, and mobilized 5,000+ organic farmers across South India.
              </p>
              <blockquote className="p-4 rounded-2xl bg-[#fdfbf7] dark:bg-[#0c1a16] border-l-4 border-amber-500 text-xs sm:text-sm italic text-[#5a6a70] dark:text-emerald-200/90 leading-relaxed">
                “Real independence begins when the last child in the most remote tribal hamlet can read with dignity and their parents till their own land free from debt.”
              </blockquote>
            </div>

          </div>
        </div>

        {/* Governing Board of Trustees */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2d37] dark:text-white font-display">
              Governing Board of Trustees
            </h3>
            <p className="text-xs text-[#5a6a70] dark:text-emerald-300 font-mono mt-1">
              Registered under Indian Trusts Act 1882 • Deed 24/83
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {board.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#132822] p-4 rounded-3xl border border-[#eae5d8] dark:border-emerald-800/60 shadow-xs hover:shadow-md transition-all text-center group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-600/30 mb-3 bg-zinc-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.src = "/images/ppt-logo.jpg";
                    }}
                  />
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0f2d37] dark:text-white truncate">
                  {member.name}
                </div>
                <div className="text-[11px] text-[#166534] dark:text-emerald-400 font-semibold truncate mt-0.5">
                  {member.role}
                </div>
                <div className="text-[10px] text-[#5a6a70] dark:text-emerald-300/70 truncate font-mono mt-1">
                  {member.qualification}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Accreditations Vault */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f2d37] dark:text-white font-display">
              Statutory Clearances & Compliance Accreditations
            </h3>
            <p className="text-xs text-[#5a6a70] dark:text-emerald-300 font-mono mt-1">
              100% Tax Deductible (80G) • FCRA MHA Approved • NITI Aayog Empaneled
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {credentials.map((c, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-3xl border ${c.color} shadow-xs space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {c.title}
                  </span>
                  <CheckCircle2 className="w-4 h-4 opacity-80" />
                </div>
                <div className="text-base sm:text-lg font-mono font-extrabold tracking-tight">
                  {c.certNo}
                </div>
                <div className="text-xs opacity-90">
                  {c.authority}
                </div>
                <div className="text-[11px] font-mono pt-1 border-t border-current/20 opacity-80">
                  {c.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
