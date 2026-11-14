import React, { useState } from 'react';
import { FileText, Download, Eye, X, CheckCircle2, BookOpen } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function AnnualReports() {
  const [activeReportModal, setActiveReportModal] = useState(null);

  const reports = pptData.annualReports;

  const reportDetails = {
    '2025 - 2026': {
      highlights: [
        "Abolition of Bonded Labour: 489 labourers rescued across 382 surveyed worksites in 21 districts.",
        "Child Development & Education: 17,179 children reached through 441 Anganwadis and 91 schools.",
        "Sustainable Agriculture: 1,351 acres covered with 805 small and marginal farmers under natural farming.",
        "Project DROP: 43.7 MT of plastic collected and recycled across 309 urban points in Vijayawada and Vizag.",
        "Govt Entitlement Linkages: 8,643 community members enrolled in e-Shram, ABHA, PMJJBY, and BOCW.",
        "Financial Literacy: 40 RBI DEAF camps reaching 2,412 women on digital payments and cyber safety."
      ],
      chairmanQuote: "It gives me great pleasure to present the PPT Annual Report 2025–2026, which reflects another year of dedicated service, collective commitment, and meaningful progress towards building a more equitable and inclusive society."
    },
    '2024 - 2025': {
      highlights: [
        "Safe Village Program: 96 SVPs conducted in 32 panchayats, sensitizing 13,430 girls and preventing 6 child marriages.",
        "APIIATP World Bank: Supported 1,200 farming households, achieving 25-30% productivity rise across 38 WUAs.",
        "Anti-Bonded Labour: 338 bonded labourers rescued through 28 coordinated government operations in 2 states.",
        "Universal Salt Iodization: 1,200 samples tested across all 26 districts of AP; 5 state circulars issued.",
        "Project DROP Phase II: Activated 109 new locations and collected 280.4 MT of recyclable plastic waste."
      ],
      chairmanQuote: "Despite facing numerous field-level challenges, we remained committed to our mission and explored innovative solutions to address malnutrition, poor health, child labour, school dropouts, and forced migration."
    },
    '2023 - 2024': {
      highlights: [
        "Adolescent & Child Development: Reached 16,298 beneficiaries across 153 villages and 150 schools.",
        "Universal Salt Iodization Project: Tested 2,000+ salt samples, achieving 84% lab compliance with NABL.",
        "Jal Jeevan Mission: Provided household tap water connections across 94 GPs in Kuppam and 103 GPs in Sathyavedu.",
        "Anti-Bonded Labour: Rescued 372 individuals, trained 3,275 community leaders, and activated 42 vigilance bodies.",
        "Housing Welfare: Assisted 490 vulnerable tribal families in obtaining free PMAY housing."
      ],
      chairmanQuote: "We are honoured to present the PPT Activity Report for 2023-2024, a year in which our staff, volunteers, and community leaders created excellent grassroots impacts."
    },
    '2026': {
      highlights: [
        "Four-Decade Institutional Blueprint: Comprehensive audit of 41 years of service from 1983 to 2026.",
        "Statutory Matrix: 12A (valid till 2037), 80G (valid till 2032), FCRA (valid till 2028), CSR, and NITI Aayog.",
        "Staff & Volunteer Roster: 78 full-time personnel and volunteers across 6 operational hubs.",
        "Governing Board Profile: Trustee backgrounds, qualifications, and democratic oversight mechanisms.",
        "Infrastructure & Networks: Full details of physical centres in Tirupati, Ambur, Vizag, and Hyderabad."
      ],
      chairmanQuote: "Realization of Grama Swaraj — creating a sustained and empowered civil society through holistic, rights-based rural development."
    }
  };

  return (
    <section id="reports" className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Annual Reports & Profiles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              Access official activity reports and organizational profiles submitted to government departments and auditing bodies.
            </p>
          </div>

          <div className="text-xs text-zinc-500 bg-white border border-zinc-200 px-3.5 py-2 rounded-full shadow-xs self-start md:self-auto">
            4 Official Publications Available
          </div>
        </div>

        {/* Reports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reports.map((report, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-zinc-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold text-zinc-900 bg-zinc-100 border border-zinc-200">
                    {report.year}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    {report.pages}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 mb-3">
                  <FileText className="w-6 h-6 text-zinc-700 mb-2" />
                  <h3 className="font-bold text-zinc-950 text-sm leading-snug">
                    {report.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-700 font-medium mb-1.5 italic">
                  "{report.theme}"
                </p>

                <p className="text-[11px] text-zinc-500 leading-relaxed mb-5">
                  {report.highlights}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-zinc-100">
                <button
                  onClick={() => setActiveReportModal(report)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Summary</span>
                </button>

                <button
                  onClick={() => {
                    alert(`Preparing download for: ${report.downloadName}\nFull report highlights are available in the summary viewer.`);
                  }}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Summary Modal */}
      {activeReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-3xl shadow-xl p-6 sm:p-8 text-left">
            
            <button
              onClick={() => setActiveReportModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1.5 pr-8">
              <span className="text-[11px] font-mono font-bold text-zinc-800 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
                {activeReportModal.year} Publication
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                {activeReportModal.title}
              </h3>
              <p className="text-xs text-zinc-600">
                {activeReportModal.theme} • {activeReportModal.pages}
              </p>
            </div>

            {reportDetails[activeReportModal.year] && (
              <div className="mt-5 space-y-5">
                
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-semibold block mb-1">
                    Chairman's Statement (Mr. M. Srinivasulu):
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-800 italic leading-relaxed">
                    "{reportDetails[activeReportModal.year].chairmanQuote}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-semibold tracking-wider text-zinc-500 mb-2">
                    Key Programme Milestones:
                  </h4>
                  <div className="space-y-2">
                    {reportDetails[activeReportModal.year].highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-50 border border-zinc-200/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-700">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">
                Extracted directly from submitted annual filing records.
              </span>
              <button
                onClick={() => setActiveReportModal(null)}
                className="px-4 py-2 rounded-full text-xs font-medium text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
