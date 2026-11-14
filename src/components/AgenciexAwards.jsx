import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function AgenciexAwards() {
  const { theme } = useTheme();

  const awards = [
    {
      year: "2024 – 2026",
      title: "FCRA Permanent Registration Renewed",
      regNo: "Registration No. 010140011 (Valid to 31/03/2028)",
      platform: "Ministry of Home Affairs (MHA), Govt. of India",
      domain: "Global Grants Compliance"
    },
    {
      year: "2024",
      title: "Institutional Governance Audit (100% Score)",
      regNo: "Multi-year programmatic and financial clean audit",
      platform: "Azim Premji Foundation",
      domain: "Financial & Social Audit"
    },
    {
      year: "2023",
      title: "NITI Aayog NGO Darpan Empanelled",
      regNo: "Darpan Unique ID: AP/2013/0068300",
      platform: "NITI Aayog, Government of India",
      domain: "National NGO Accreditation"
    },
    {
      year: "2022",
      title: "Section 12A & 80G Permanent Tax Exemption",
      regNo: "12A: AAATP8682K25HY01 • 80G: AAATP8682K25HY02",
      platform: "Income Tax Department, Govt. of India",
      domain: "Tax Exemption for Donors"
    },
    {
      year: "2021",
      title: "Corporate Social Responsibility (CSR) Registered",
      regNo: "Form CSR-1 Reg. No: CSR00017363",
      platform: "Ministry of Corporate Affairs (MCA)",
      domain: "Corporate CSR Partnerships"
    },
    {
      year: "2020",
      title: "Best Grassroots Partner for Child Protection",
      regNo: "State-level citation for model Anganwadis & bridge schools",
      platform: "India Literacy Project (ILP)",
      domain: "Primary & Early Education"
    },
    {
      year: "2018",
      title: "District Commendation for Bonded Labour Elimination",
      regNo: "Official Release Certificates issued to 489 laborers",
      platform: "District Administration (Vellore & Chittoor)",
      domain: "Anti-Trafficking & Justice"
    },
    {
      year: "1983",
      title: "Registered under Indian Trusts Act 1882",
      regNo: "Deed No. 24/83, Registered at Machilipatnam",
      platform: "Sub-Registrar of Assurances, AP",
      domain: "Foundational Trust Charter"
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
            Awards & Recognition
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.15] font-display`}>
            Four decades of institutional credibility & recognition.
          </h2>
          <p className={`text-base sm:text-lg ${theme.textMuted} mt-3`}>
            Our statutory certifications, independent audits, and government accreditations reflect our uncompromising commitment to financial transparency and social integrity.
          </p>
        </div>

        {/* Agenciex Awards Table */}
        <div className={`${theme.cardBg} rounded-3xl border ${theme.cardBorder} overflow-hidden shadow-sm`}>
          
          {/* Table Header */}
          <div className={`hidden md:grid grid-cols-12 gap-4 px-8 py-4 ${theme.subBg} border-b ${theme.border} text-xs font-mono font-semibold uppercase tracking-wider ${theme.textMuted}`}>
            <div className="col-span-2">Year</div>
            <div className="col-span-4">Recognition & Milestone</div>
            <div className="col-span-3">Platform / Authority</div>
            <div className="col-span-3 text-right">Domain</div>
          </div>

          {/* Table Rows */}
          <div className={`divide-y ${theme.border}`}>
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 md:px-8 py-5 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40 transition-colors items-center"
              >
                {/* Year */}
                <div className="md:col-span-2">
                  <span
                    style={{
                      backgroundColor: theme.accentLight,
                      color: theme.accent,
                      borderColor: theme.accentBorder
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border"
                  >
                    {award.year}
                  </span>
                </div>

                {/* Recognition Title */}
                <div className="md:col-span-4 space-y-0.5">
                  <h4 className={`text-sm sm:text-base font-bold ${theme.text} font-display`}>
                    {award.title}
                  </h4>
                  <p className={`text-xs ${theme.textMuted} font-mono`}>
                    {award.regNo}
                  </p>
                </div>

                {/* Platform */}
                <div className={`md:col-span-3 text-xs sm:text-sm ${theme.textMuted} font-medium`}>
                  <span className="md:hidden text-xs font-mono uppercase mr-1">Issued by: </span>
                  {award.platform}
                </div>

                {/* Domain */}
                <div className="md:col-span-3 md:text-right">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold ${theme.text} ${theme.subBg} px-3 py-1 rounded-full border ${theme.border}`}>
                    <CheckCircle2 style={{ color: theme.accent }} className="w-3 h-3" />
                    <span>{award.domain}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
