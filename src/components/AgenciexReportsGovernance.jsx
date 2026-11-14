import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2, User, Landmark, Eye, ExternalLink } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import TiltCard from './TiltCard';

export default function AgenciexReportsGovernance() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('reports');
  const [previewDoc, setPreviewDoc] = useState(null);

  const reports = pptData.annualReports;
  const board = pptData.governingBoard;
  const org = pptData.organization;

  return (
    <section id="governance" className={`py-20 sm:py-28 ${theme.subBg} border-b ${theme.border} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span
            style={{ color: theme.accent }}
            className="text-xs font-mono font-semibold uppercase tracking-wider"
          >
            Governance, Audits & Reports
          </span>
        </div>

        {/* Section Heading & Switcher Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className={`text-3xl sm:text-5xl font-extrabold ${theme.text} tracking-tight leading-[1.15] font-display`}>
              Total transparency in action and governance.
            </h2>
            <p className={`text-sm sm:text-base ${theme.textMuted} mt-3`}>
              Review our annual activity filings, audited balances, and board stewardship across 41 years of continuous service.
            </p>
          </div>

          {/* Switcher Tabs */}
          <div className={`flex items-center gap-1.5 p-1 ${theme.cardBg} rounded-full border ${theme.border} shadow-xs`}>
            <button
              onClick={() => setActiveTab('reports')}
              style={{
                backgroundColor: activeTab === 'reports' ? theme.accent : undefined,
                color: activeTab === 'reports' ? '#ffffff' : undefined,
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'reports' ? 'shadow-md' : theme.textMuted
              }`}
            >
              Annual Reports
            </button>
            <button
              onClick={() => setActiveTab('board')}
              style={{
                backgroundColor: activeTab === 'board' ? theme.accent : undefined,
                color: activeTab === 'board' ? '#ffffff' : undefined,
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'board' ? 'shadow-md' : theme.textMuted
              }`}
            >
              Board of Trustees
            </button>
            <button
              onClick={() => setActiveTab('statutory')}
              style={{
                backgroundColor: activeTab === 'statutory' ? theme.accent : undefined,
                color: activeTab === 'statutory' ? '#ffffff' : undefined,
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'statutory' ? 'shadow-md' : theme.textMuted
              }`}
            >
              Statutory Credentials
            </button>
          </div>
        </div>

        {/* TAB 1: Annual Reports */}
        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {reports.map((report, idx) => (
              <TiltCard
                key={idx}
                maxTilt={8}
                scale={1.02}
                className={`p-7 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} transition-all flex flex-col justify-between group shadow-sm hover:shadow-2xl`}
              >
                <div className="space-y-4 translate-z-10">
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        backgroundColor: theme.accentLight,
                        color: theme.accent,
                        borderColor: theme.accentBorder
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border"
                    >
                      {report.year}
                    </span>
                    <span className={`text-xs font-mono ${theme.textMuted}`}>
                      {report.pages}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className={`text-xl font-bold ${theme.text} group-hover:text-[#ff6036] transition-colors font-display`}>
                      {report.title}
                    </h3>
                    <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed`}>
                      "{report.theme}"
                    </p>
                  </div>

                  <div className={`pt-3 border-t ${theme.border} space-y-1`}>
                    <span className={`text-[10px] font-mono font-medium uppercase ${theme.textMuted}`}>
                      Report Highlights:
                    </span>
                    <p className={`text-xs ${theme.text} font-medium leading-relaxed`}>
                      {report.highlights}
                    </p>
                  </div>
                </div>

                <div className={`pt-6 mt-6 border-t ${theme.border} flex items-center justify-between translate-z-10`}>
                  <button
                    onClick={() => setPreviewDoc(report)}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${theme.text} hover:opacity-80 transition-opacity`}
                  >
                    <Eye style={{ color: theme.accent }} className="w-3.5 h-3.5" />
                    <span>Read Executive Summary</span>
                  </button>

                  <a
                    href="/images/chairman_m_srinivasulu.jpg"
                    download={report.downloadName}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold ${theme.text} bg-[#f7f7f7] dark:bg-zinc-800 hover:bg-[#ebebeb] dark:hover:bg-zinc-700 border ${theme.border} transition-all`}
                  >
                    <Download className={`w-3 h-3 ${theme.textMuted}`} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        )}

        {/* TAB 2: Board of Trustees */}
        {activeTab === 'board' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {board.map((member, idx) => (
              <TiltCard
                key={idx}
                maxTilt={8}
                scale={1.02}
                className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} transition-all flex flex-col justify-between group shadow-sm hover:shadow-2xl`}
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
                    <span
                      style={{ color: theme.accent }}
                      className="text-[10px] font-mono uppercase tracking-wider font-bold"
                    >
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
        )}

        {/* TAB 3: Statutory Credentials */}
        {activeTab === 'statutory' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            
            {/* Box 1: Government & Tax Registrations */}
            <div className={`p-8 rounded-3xl ${theme.cardBg} border ${theme.border} space-y-6 shadow-sm`}>
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-10 h-10 rounded-xl border flex items-center justify-center"
                >
                  <ShieldCheck style={{ color: theme.accent }} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${theme.text} font-display`}>
                    Statutory & Tax Certifications
                  </h3>
                  <p className={`text-xs ${theme.textMuted}`}>
                    Full government compliance with permanent exemptions
                  </p>
                </div>
              </div>

              <div className={`divide-y ${theme.border} text-xs`}>
                <div className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${theme.textMuted}`}>Trust Deed Registration:</span>
                  <span className={`font-mono font-bold ${theme.text}`}>{org.registrationNo}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${theme.textMuted}`}>NITI Aayog NGO Darpan:</span>
                  <span className={`font-mono font-bold ${theme.text}`}>{org.darpanId}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${theme.textMuted}`}>FCRA Registration (MHA):</span>
                  <span className={`font-mono font-bold ${theme.text}`}>{org.fcraNo}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${theme.textMuted}`}>MCA Form CSR-1:</span>
                  <span className={`font-mono font-bold ${theme.text}`}>{org.csrNo}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${theme.textMuted}`}>Income Tax Section 12A:</span>
                  <span className={`font-mono font-bold ${theme.text}`}>{org.tax12A.split('(')[0]}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${theme.textMuted}`}>Section 80G Tax Exemption:</span>
                  <span style={{ color: theme.accent }} className="font-mono font-bold">{org.tax80G.split('(')[0]}</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className={`font-medium ${theme.textMuted}`}>PAN / TAN Numbers:</span>
                  <span className={`font-mono font-bold ${theme.text}`}>{org.panNo} / {org.tanNo}</span>
                </div>
              </div>
            </div>

            {/* Box 2: Official Banking & 80G Channel */}
            <div className={`p-8 rounded-3xl ${theme.cardBg} border ${theme.border} space-y-6 flex flex-col justify-between shadow-sm`}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center"
                  >
                    <Landmark style={{ color: theme.accent }} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${theme.text} font-display`}>
                      Official Bank Account Details
                    </h3>
                    <p className={`text-xs ${theme.textMuted}`}>
                      Direct institutional and CSR contributions
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl ${theme.subBg} border ${theme.border} space-y-3 font-mono text-xs`}>
                  <div className="flex justify-between">
                    <span className={theme.textMuted}>Account Name:</span>
                    <span className={`font-bold ${theme.text}`}>{bank.accountName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={theme.textMuted}>Account Number:</span>
                    <span style={{ color: theme.accent }} className="font-bold text-sm">{bank.accountNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={theme.textMuted}>IFSC Code:</span>
                    <span className={`font-bold ${theme.text}`}>{bank.ifscCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={theme.textMuted}>Bank & Branch:</span>
                    <span className={`font-bold ${theme.text}`}>{bank.bankName}, {bank.branch}</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: theme.accentLight,
                  borderColor: theme.accentBorder
                }}
                className="p-4 rounded-2xl border text-xs space-y-1"
              >
                <span style={{ color: theme.accent }} className="font-bold block">Donor 80G Receipt Instructions:</span>
                <p className={theme.textMuted}>
                  After remitting your donation, kindly email your transfer reference (UTR) with donor PAN and address to <span className={`font-mono ${theme.text}`}>{org.emailPrimary}</span> to receive Form 10BE and 80G receipt.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Report Summary Modal */}
      {previewDoc && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setPreviewDoc(null)}
        >
          <div 
            className={`${theme.cardBg} rounded-3xl max-w-xl w-full p-8 border ${theme.border} shadow-2xl space-y-6 animate-scaleUp`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span
                style={{
                  backgroundColor: theme.accentLight,
                  color: theme.accent,
                  borderColor: theme.accentBorder
                }}
                className="px-3 py-1 rounded-full text-xs font-mono font-bold border"
              >
                {previewDoc.year}
              </span>
              <button
                onClick={() => setPreviewDoc(null)}
                className={`${theme.textMuted} hover:${theme.text} font-bold text-sm`}
              >
                Close
              </button>
            </div>

            <div>
              <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                {previewDoc.title}
              </h3>
              <p className={`text-xs font-mono ${theme.textMuted} mt-1`}>
                {previewDoc.pages} • Audited Activity Document
              </p>
            </div>

            <div className={`p-4 rounded-2xl ${theme.subBg} border ${theme.border} space-y-2`}>
              <span className={`text-xs font-mono font-bold uppercase ${theme.text}`}>Theme & Focus</span>
              <p className={`text-sm ${theme.textMuted}`}>"{previewDoc.theme}"</p>
            </div>

            <div className="space-y-2">
              <span className={`text-xs font-mono font-bold uppercase ${theme.text}`}>Audited Metrics Highlights</span>
              <p className={`text-sm ${theme.text} leading-relaxed`}>
                {previewDoc.highlights}
              </p>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setPreviewDoc(null)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold ${theme.text} ${theme.subBg} border ${theme.border}`}
              >
                Dismiss
              </button>
              <a
                href="/images/chairman_m_srinivasulu.jpg"
                download={previewDoc.downloadName}
                style={{ backgroundColor: theme.accent }}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white hover:opacity-90"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
