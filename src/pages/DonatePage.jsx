import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Copy, 
  Check, 
  HelpCircle, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2,
  Landmark,
  Building,
  Mail
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import TiltCard from '../components/TiltCard';

export default function DonatePage() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const org = pptData.organization;
  const bank = org.bankDetails;

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

  const faqs = [
    {
      q: "Are donations to Praja Pragati Trust eligible for tax exemption?",
      a: "Yes. All donations made by Indian citizens or corporate entities are eligible for 50% deduction under Section 80G of the Income Tax Act 1961 (Order No. AAATP8682K25HY02, valid till 2031-32)."
    },
    {
      q: "How do I receive my official 80G Tax Exemption Receipt (Form 10BE)?",
      a: "Immediately after completing your bank transfer, email your transfer reference (UTR/Transaction ID), donor PAN number, and full postal address to ppt_srinu@rediffmail.com. We issue and file your stamped Form 10BE receipt within 48 hours."
    },
    {
      q: "Can corporate organizations donate through Corporate Social Responsibility (CSR)?",
      a: "Yes. Praja Pragati Trust is formally registered with the Ministry of Corporate Affairs (MCA) under Form CSR-1 with Registration Number CSR00017363. We provide audited utilization certificates and detailed impact deliverables for CSR boards."
    },
    {
      q: "Can international donors or foreign foundations contribute?",
      a: "Yes. Praja Pragati Trust holds an active Foreign Contribution Regulation Act (FCRA) registration issued by the Ministry of Home Affairs, Government of India (FCRA Regd. No. 010140011, valid through 31/03/2028)."
    }
  ];

  return (
    <div className={`pt-28 sm:pt-36 ${theme.bg} transition-colors select-none`}>
      
      {/* 1. Page Hero Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center gap-2 mb-4">
          <span
            style={{
              backgroundColor: theme.accentLight,
              color: theme.accent,
              borderColor: theme.accentBorder,
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold border shadow-xs"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>50% Tax Exemption Under Section 80G</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            Order: AAATP8682K25HY02 • IT Act 1961
          </span>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          Support grassroots justice. <br />
          Transform a <span style={{ color: theme.accent }}>vulnerable life.</span>
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-6 max-w-3xl leading-relaxed`}>
          Your tax-exempt contribution directly funds emergency legal rescue for bonded laborers, organic bio-inputs for smallholder farmers, and foundational education for tribal children.
        </p>
      </section>

      {/* 2. Official Bank Transfer Card (Centerpiece) */}
      <section className={`py-16 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Bank Details Box (7 cols) */}
            <TiltCard
              maxTilt={6}
              scale={1.01}
              className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-xl space-y-6`}
            >
              <div className="flex items-center justify-between pb-4 border-b ${theme.border}">
                <div className="flex items-center gap-3">
                  <div
                    style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                    className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0"
                  >
                    <Landmark style={{ color: theme.accent }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme.text} font-display`}>
                      Official Canara Bank Account
                    </h3>
                    <span className={`text-xs ${theme.textMuted} font-mono`}>
                      Tirupati Main Branch • Verified Trust Account
                    </span>
                  </div>
                </div>

                <span
                  style={{ backgroundColor: theme.accentLight, color: theme.accent }}
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold"
                >
                  80G Certified
                </span>
              </div>

              {/* Account Credentials with 1-Click Copy */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block mb-1`}>
                    Beneficiary Name:
                  </span>
                  <span className={`text-base font-bold ${theme.text}`}>
                    {bank.accountName}
                  </span>
                </div>

                <div>
                  <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block mb-1`}>
                    Account Number:
                  </span>
                  <div className={`flex items-center justify-between p-3 rounded-2xl ${theme.subBg} border ${theme.border}`}>
                    <span style={{ color: theme.accent }} className="font-mono font-black text-lg tracking-wider">
                      {bank.accountNumber}
                    </span>
                    <button
                      onClick={() => handleCopy(bank.accountNumber, 'acc')}
                      className="px-3 py-1.5 rounded-xl bg-[#151515] dark:bg-white text-white dark:text-[#151515] font-semibold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                    >
                      {copiedAcc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAcc ? "Copied" : "Copy Account"}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block mb-1`}>
                    IFSC Code:
                  </span>
                  <div className={`flex items-center justify-between p-3 rounded-2xl ${theme.subBg} border ${theme.border}`}>
                    <span className={`font-mono font-bold text-base ${theme.text}`}>
                      {bank.ifscCode}
                    </span>
                    <button
                      onClick={() => handleCopy(bank.ifscCode, 'ifsc')}
                      className={`px-3 py-1.5 rounded-xl ${theme.cardBg} border ${theme.border} text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all`}
                    >
                      {copiedIfsc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedIfsc ? "Copied" : "Copy IFSC"}</span>
                    </button>
                  </div>
                </div>

                <div className={`pt-2 border-t ${theme.border} text-[11px] ${theme.textMuted}`}>
                  <span>Branch Location: </span>
                  <strong className={theme.text}>{bank.bankName}, {bank.branch}</strong>
                </div>
              </div>

              {/* Transfer Methods */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] font-mono">
                <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">NEFT</span>
                <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">RTGS</span>
                <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">IMPS</span>
                <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">UPI Transfer</span>
              </div>
            </TiltCard>

            {/* Right: Step-by-Step 80G Receipt Guide (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className={`p-8 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-sm space-y-4`}>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck style={{ color: theme.accent }} className="w-5 h-5" />
                  <h4 className={`font-bold text-base ${theme.text} font-display`}>
                    How to Claim Your 80G Receipt
                  </h4>
                </div>

                <ol className="space-y-3 text-xs leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span style={{ backgroundColor: theme.accent }} className="w-5 h-5 rounded-full text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      1
                    </span>
                    <span className={theme.text}>
                      Transfer your contribution via NEFT / RTGS / IMPS / UPI to our Canara Bank account.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span style={{ backgroundColor: theme.accent }} className="w-5 h-5 rounded-full text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      2
                    </span>
                    <span className={theme.text}>
                      Email the transfer screenshot/UTR, your <strong>PAN number</strong>, and postal address to <span className="font-mono text-[#ff6036]">{org.emailPrimary}</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span style={{ backgroundColor: theme.accent }} className="w-5 h-5 rounded-full text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      3
                    </span>
                    <span className={theme.text}>
                      Receive your official stamped digital <strong>Form 10BE Certificate</strong> within 48 hours for your income tax deduction.
                    </span>
                  </li>
                </ol>

                <div className="pt-2">
                  <a
                    href={`mailto:${org.emailPrimary}?subject=Donation%20Receipt%20Request`}
                    style={{ backgroundColor: theme.accent }}
                    className="w-full py-3 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Transfer Screenshot</span>
                  </a>
                </div>
              </div>

              {/* Statutory Registrations Mini Box */}
              <div className={`p-6 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-xs space-y-2 text-xs font-mono`}>
                <div className="flex justify-between">
                  <span className={theme.textMuted}>80G Order:</span>
                  <span className={`font-bold ${theme.text}`}>AAATP8682K25HY02</span>
                </div>
                <div className="flex justify-between">
                  <span className={theme.textMuted}>12A Order:</span>
                  <span className={`font-bold ${theme.text}`}>AAATP8682K25HY01</span>
                </div>
                <div className="flex justify-between">
                  <span className={theme.textMuted}>MCA CSR-1:</span>
                  <span className={`font-bold ${theme.text}`}>CSR00017363</span>
                </div>
                <div className="flex justify-between">
                  <span className={theme.textMuted}>PAN Number:</span>
                  <span className={`font-bold ${theme.text}`}>{org.panNo}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) */}
      <section className={`py-20 ${theme.bg}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span style={{ color: theme.accent }} className="text-xs font-mono font-semibold uppercase tracking-wider">
              Donor Information
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${theme.text} font-display`}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl ${theme.subBg} border ${theme.border} space-y-2`}
              >
                <div className="flex items-center gap-2">
                  <HelpCircle style={{ color: theme.accent }} className="w-4 h-4 shrink-0" />
                  <h4 className={`text-base font-bold ${theme.text} font-display`}>
                    {faq.q}
                  </h4>
                </div>
                <p className={`text-xs sm:text-sm ${theme.textMuted} leading-relaxed pl-6`}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
