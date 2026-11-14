import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Heart, 
  FileCheck, 
  Building2, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import TiltCard from '../components/TiltCard';

export default function TransparencyPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const org = pptData.organization;
  const reports = pptData.annualReports;
  const bank = org.bankDetails;

  const [activeTab, setActiveTab] = useState('compliance');
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'acc') {
      setCopiedAcc(true);
      setTimeout(() => setCopiedAcc(false), 2000);
    } else {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    }
  };

  return (
    <div className={`pt-24 sm:pt-32 lg:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
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
            <span>Statutory Compliance & Fiduciary Audit</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            100% Audit Score • NITI Aayog • FCRA • 80G / 12A
          </span>
        </div>

        <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          Transparency, Audits & <br />
          <span style={{ color: theme.accent }}>Statutory Governance.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-4 sm:mt-6 max-w-3xl leading-relaxed`}>
          Every rupee received by Praja Pragati Trust is accounted for through multi-tier external statutory audits, field social audits, and open compliance filings.
        </p>

        {/* Switcher Navigation */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('compliance')}
            style={{
              backgroundColor: activeTab === 'compliance' ? theme.accent : undefined,
              color: activeTab === 'compliance' ? '#ffffff' : undefined,
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'compliance' ? 'shadow-md font-bold' : `bg-[#f7f7f7] dark:bg-zinc-800 ${theme.textMuted} border ${theme.border}`
            }`}
          >
            Statutory Accreditations
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            style={{
              backgroundColor: activeTab === 'reports' ? theme.accent : undefined,
              color: activeTab === 'reports' ? '#ffffff' : undefined,
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'reports' ? 'shadow-md font-bold' : `bg-[#f7f7f7] dark:bg-zinc-800 ${theme.textMuted} border ${theme.border}`
            }`}
          >
            Annual Activity Reports
          </button>

          <button
            onClick={() => setActiveTab('banking')}
            style={{
              backgroundColor: activeTab === 'banking' ? theme.accent : undefined,
              color: activeTab === 'banking' ? '#ffffff' : undefined,
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'banking' ? 'shadow-md font-bold' : `bg-[#f7f7f7] dark:bg-zinc-800 ${theme.textMuted} border ${theme.border}`
            }`}
          >
            Official Bank Account & 80G
          </button>
        </div>
      </section>

      {/* 2. TAB: Compliance & Credentials */}
      {activeTab === 'compliance' && (
        <section className={`py-12 sm:py-16 ${theme.subBg} border-y ${theme.border}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-4 shadow-xs`}>
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs"
                >
                  <ShieldCheck style={{ color: theme.accent }} className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block`}>
                    Indian Trusts Act 1882
                  </span>
                  <h3 className={`text-lg font-bold ${theme.text} font-display mt-0.5`}>
                    Trust Deed Registration
                  </h3>
                </div>
                <div className={`p-3 rounded-xl ${theme.subBg} border ${theme.border} font-mono text-xs font-bold ${theme.text}`}>
                  Regd. No: {org.registrationNo}
                </div>
                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  Registered under Trust Deed No. 24/83, Book IV at Joint Sub-Registrar Office, Machilipatnam, Krishna District.
                </p>
              </div>

              <div className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-4 shadow-xs`}>
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs"
                >
                  <Building2 style={{ color: theme.accent }} className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block`}>
                    NITI Aayog Portal
                  </span>
                  <h3 className={`text-lg font-bold ${theme.text} font-display mt-0.5`}>
                    NGO Darpan Empanelled
                  </h3>
                </div>
                <div className={`p-3 rounded-xl ${theme.subBg} border ${theme.border} font-mono text-xs font-bold ${theme.text}`}>
                  ID: {org.darpanId}
                </div>
                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  Officially verified by NITI Aayog Government of India for receiving central ministry and state grants.
                </p>
              </div>

              <div className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-4 shadow-xs`}>
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs"
                >
                  <FileCheck style={{ color: theme.accent }} className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block`}>
                    Ministry of Home Affairs
                  </span>
                  <h3 className={`text-lg font-bold ${theme.text} font-display mt-0.5`}>
                    FCRA Valid to 2028
                  </h3>
                </div>
                <div className={`p-3 rounded-xl ${theme.subBg} border ${theme.border} font-mono text-xs font-bold ${theme.text}`}>
                  Regd. No: {org.fcraNo}
                </div>
                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  Fully compliant with Foreign Contribution Regulation Act (FCRA) with designated SBI New Delhi Main Branch account.
                </p>
              </div>

              <div className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-4 shadow-xs`}>
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs"
                >
                  <Heart style={{ color: theme.accent }} className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block`}>
                    Income Tax Department
                  </span>
                  <h3 className={`text-lg font-bold ${theme.text} font-display mt-0.5`}>
                    Section 80G Tax Exemption
                  </h3>
                </div>
                <div className={`p-3 rounded-xl ${theme.subBg} border ${theme.border} font-mono text-xs font-bold ${theme.text} truncate`}>
                  {org.tax80G}
                </div>
                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  Donors are eligible for 50% statutory deduction under Section 80G of the Income Tax Act 1961.
                </p>
              </div>

              <div className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-4 shadow-xs`}>
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs"
                >
                  <ShieldCheck style={{ color: theme.accent }} className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block`}>
                    Permanent Exemption
                  </span>
                  <h3 className={`text-lg font-bold ${theme.text} font-display mt-0.5`}>
                    Section 12A Certified
                  </h3>
                </div>
                <div className={`p-3 rounded-xl ${theme.subBg} border ${theme.border} font-mono text-xs font-bold ${theme.text} truncate`}>
                  {org.tax12A}
                </div>
                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  Certified trust income exemption under Section 12A of the Income Tax Act 1961 valid through 2036-37.
                </p>
              </div>

              <div className={`p-6 sm:p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} space-y-4 shadow-xs`}>
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs"
                >
                  <Building2 style={{ color: theme.accent }} className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block`}>
                    Ministry of Corporate Affairs
                  </span>
                  <h3 className={`text-lg font-bold ${theme.text} font-display mt-0.5`}>
                    CSR-1 Registration
                  </h3>
                </div>
                <div className={`p-3 rounded-xl ${theme.subBg} border ${theme.border} font-mono text-xs font-bold ${theme.text}`}>
                  Form CSR-1: {org.csrNo}
                </div>
                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  Registered with MCA for eligible Corporate Social Responsibility (CSR) partnerships and grants across India.
                </p>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 3. TAB: Annual Reports Directory */}
      {activeTab === 'reports' && (
        <section className={`py-12 sm:py-16 ${theme.subBg} border-y ${theme.border}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="max-w-xl mb-8">
              <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider block mb-1">
                Audited Publications
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${theme.text} font-display`}>
                Annual Activity & Financial Reports
              </h2>
              <p className={`text-xs sm:text-sm ${theme.textMuted} mt-2`}>
                Comprehensive publications detailing field programs, beneficiary matrices, and audited balance sheets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((rep, idx) => (
                <TiltCard
                  key={idx}
                  maxTilt={6}
                  scale={1.01}
                  className={`p-6 sm:p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} ${theme.hoverBorder} shadow-sm hover:shadow-xl transition-all flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        style={{
                          backgroundColor: theme.accentLight,
                          borderColor: theme.accentBorder,
                          color: theme.accent
                        }}
                        className="px-3 py-1 rounded-full text-xs font-mono font-bold border"
                      >
                        {rep.year}
                      </span>
                      <span className={`text-xs font-mono ${theme.textMuted}`}>
                        {rep.pages}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                      {rep.title}
                    </h3>

                    <p className={`text-xs italic ${theme.textMuted} leading-relaxed`}>
                      "{rep.theme}"
                    </p>

                    <div className={`p-3.5 rounded-2xl ${theme.subBg} border ${theme.border}`}>
                      <span className={`text-[10px] font-mono uppercase tracking-wider ${theme.textMuted} block mb-1`}>
                        Audited Highlights:
                      </span>
                      <p className={`text-xs font-medium ${theme.text} leading-relaxed`}>
                        {rep.highlights}
                      </p>
                    </div>
                  </div>

                  <div className={`mt-6 pt-4 border-t ${theme.border} flex items-center justify-between`}>
                    <span className={`text-[11px] font-mono ${theme.textMuted} truncate max-w-[200px]`}>
                      {rep.downloadName}
                    </span>
                    <a
                      href={`/reports/${rep.downloadName}`}
                      download
                      style={{ color: theme.accent }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-mono hover:underline"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </TiltCard>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 4. TAB: Official Banking Details */}
      {activeTab === 'banking' && (
        <section className={`py-12 sm:py-16 ${theme.subBg} border-y ${theme.border}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className={`p-8 sm:p-10 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-lg space-y-6`}>
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-xs"
                >
                  <Landmark style={{ color: theme.accent }} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                    Official Canara Bank Account
                  </h3>
                  <p className={`text-xs ${theme.textMuted}`}>
                    Direct institutional, CSR and general donor transfer channel
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-2xl ${theme.subBg} border ${theme.border} space-y-4 font-mono text-xs`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <span className={theme.textMuted}>Beneficiary Account Name:</span>
                  <span className={`font-bold ${theme.text} text-sm`}>{bank.accountName}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <span className={theme.textMuted}>Bank Account Number:</span>
                  <div className="flex items-center gap-2">
                    <span style={{ color: theme.accent }} className="font-bold text-base">{bank.accountNumber}</span>
                    <button
                      onClick={() => handleCopy(bank.accountNumber, 'acc')}
                      className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs"
                      title="Copy Account Number"
                    >
                      {copiedAcc ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <span className={theme.textMuted}>IFSC Code:</span>
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${theme.text} text-sm`}>{bank.ifscCode}</span>
                    <button
                      onClick={() => handleCopy(bank.ifscCode, 'ifsc')}
                      className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs"
                      title="Copy IFSC Code"
                    >
                      {copiedIfsc ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <span className={theme.textMuted}>Bank & Branch:</span>
                  <span className={`font-bold ${theme.text}`}>{bank.bankName}, {bank.branch}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className={theme.textMuted}>PAN Number:</span>
                  <span className={`font-bold ${theme.text}`}>{org.panNo}</span>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: theme.accentLight,
                  borderColor: theme.accentBorder
                }}
                className="p-5 rounded-2xl border text-xs space-y-2"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck style={{ color: theme.accent }} className="w-4 h-4 shrink-0" />
                  <span style={{ color: theme.accent }} className="font-bold">Form 10BE & 80G Receipt Instructions:</span>
                </div>
                <p className={`${theme.textMuted} leading-relaxed`}>
                  After transferring your donation, please email the transaction reference (UTR number), along with your PAN and postal address to <strong className={theme.text}>{org.emailPrimary}</strong>. We will issue your official Form 10BE tax exemption certificate within 3 working days.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. Bottom Navigation Bar */}
      <section className={`py-12 ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/impact"
            className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.textMuted} hover:${theme.text} transition-colors`}
          >
            ← Back to Impact Overview
          </Link>
          <Link
            to="/contact"
            style={{ color: theme.accent }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:underline"
          >
            <span>Have Questions? Contact Trust Administration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}