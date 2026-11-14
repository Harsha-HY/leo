import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Send, 
  Check, 
  Copy, 
  Heart,
  Landmark
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { pptData } from '../data/pptData';
import AgenciexOffices from '../components/AgenciexOffices';

export default function ContactPage({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const org = pptData.organization;
  const bank = org.bankDetails;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 4000);
  };

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
            <span
              style={{ backgroundColor: theme.accent }}
              className="w-2 h-2 rounded-full animate-ping"
            />
            <span>Contact & Regional Hubs</span>
          </span>
          <span className={`text-xs ${theme.textMuted} font-mono hidden sm:inline`}>
            Head Office: Tirupati • 6 Active Field Centers
          </span>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold ${theme.text} tracking-tight leading-[1.05] font-display max-w-4xl`}>
          We are here to help. <br />
          <span style={{ color: theme.accent }}>Get in touch</span> with our trustees.
        </h1>

        <p className={`text-base sm:text-xl ${theme.textMuted} mt-6 max-w-3xl leading-relaxed`}>
          Whether you are an institutional grantmaker, CSR foundation, individual donor, or government official, our leadership team is readily available.
        </p>
      </section>

      {/* 2. Interactive Contact Form & Registered Bank Grid */}
      <section className={`py-16 ${theme.subBg} border-y ${theme.border}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Contact Form (7 cols) */}
            <div className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-lg space-y-6`}>
              <div>
                <span style={{ color: theme.accent }} className="text-xs font-mono font-bold uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className={`text-2xl font-bold ${theme.text} font-display mt-1`}>
                  Send an Inquiry to Praja Pragati Trust
                </h3>
                <p className={`text-xs ${theme.textMuted} mt-1`}>
                  We respond to all donor and partner communications within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Inquiry Sent Successfully</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Thank you for reaching out. Our Chairman and program coordinators will review your message and contact you promptly at the provided email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className={`font-mono font-semibold uppercase text-[10px] ${theme.textMuted}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-2xl ${theme.subBg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 focus:ring-[#ff6036]`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className={`font-mono font-semibold uppercase text-[10px] ${theme.textMuted}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. ramesh@organization.org"
                        className={`w-full px-4 py-3 rounded-2xl ${theme.subBg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 focus:ring-[#ff6036]`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className={`font-mono font-semibold uppercase text-[10px] ${theme.textMuted}`}>
                        Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98482 00000"
                        className={`w-full px-4 py-3 rounded-2xl ${theme.subBg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 focus:ring-[#ff6036]`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className={`font-mono font-semibold uppercase text-[10px] ${theme.textMuted}`}>
                        Inquiry Topic
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl ${theme.subBg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 focus:ring-[#ff6036]`}
                      >
                        <option>General Inquiry</option>
                        <option>CSR Partnership (CSR00017363)</option>
                        <option>80G Tax Exemption Receipt</option>
                        <option>Child Protection / Anti-Trafficking</option>
                        <option>Field Visit Coordination</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className={`font-mono font-semibold uppercase text-[10px] ${theme.textMuted}`}>
                      Message / Proposal Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please share how you would like to collaborate or ask your questions..."
                      className={`w-full px-4 py-3 rounded-2xl ${theme.subBg} border ${theme.border} ${theme.text} focus:outline-none focus:ring-2 focus:ring-[#ff6036]`}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ backgroundColor: theme.accent }}
                    className="w-full py-3.5 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Head Office & Canara Bank Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Head Office Address Box */}
              <div className={`p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-sm space-y-4`}>
                <div className="flex items-center gap-3">
                  <div
                    style={{ backgroundColor: theme.accentLight, borderColor: theme.accentBorder }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center"
                  >
                    <MapPin style={{ color: theme.accent }} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-base ${theme.text} font-display`}>
                      Registered Head Office
                    </h4>
                    <span className={`text-[11px] ${theme.textMuted} font-mono`}>
                      Tirupati, Andhra Pradesh
                    </span>
                  </div>
                </div>

                <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
                  {org.registeredOffice}
                </p>

                <div className={`pt-3 border-t ${theme.border} space-y-2 text-xs font-mono`}>
                  <div className="flex items-center gap-2">
                    <Phone style={{ color: theme.accent }} className="w-3.5 h-3.5" />
                    <span className={theme.text}>Office: {org.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone style={{ color: theme.accent }} className="w-3.5 h-3.5" />
                    <span className={theme.text}>Mobile: {org.mobile}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail style={{ color: theme.accent }} className="w-3.5 h-3.5" />
                    <span className={theme.text}>{org.emailPrimary}</span>
                  </div>
                </div>
              </div>

              {/* Instant Canara Bank Transfer Card */}
              <div className={`p-7 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} shadow-sm space-y-4`}>
                <div className="flex items-center justify-between pb-2 border-b ${theme.border}">
                  <div className="flex items-center gap-2">
                    <Landmark style={{ color: theme.accent }} className="w-4 h-4" />
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.text}`}>
                      Official Canara Bank A/C
                    </span>
                  </div>
                  <span
                    style={{ backgroundColor: theme.accentLight, color: theme.accent }}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold"
                  >
                    80G Approved
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block`}>
                      Account Name:
                    </span>
                    <span className={`font-bold ${theme.text}`}>
                      {bank.accountName}
                    </span>
                  </div>

                  <div>
                    <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block`}>
                      Account Number:
                    </span>
                    <div className={`flex items-center justify-between p-2 rounded-xl ${theme.subBg} border ${theme.border} mt-0.5`}>
                      <span style={{ color: theme.accent }} className="font-mono font-black text-sm">
                        {bank.accountNumber}
                      </span>
                      <button
                        onClick={() => handleCopy(bank.accountNumber, 'acc')}
                        className="px-2 py-1 rounded-lg bg-[#151515] dark:bg-white text-white dark:text-[#151515] text-[10px] flex items-center gap-1"
                      >
                        {copiedAcc ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedAcc ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className={`text-[10px] font-mono uppercase ${theme.textMuted} block`}>
                      IFSC Code:
                    </span>
                    <div className={`flex items-center justify-between p-2 rounded-xl ${theme.subBg} border ${theme.border} mt-0.5`}>
                      <span className={`font-mono font-bold ${theme.text}`}>
                        {bank.ifscCode}
                      </span>
                      <button
                        onClick={() => handleCopy(bank.ifscCode, 'ifsc')}
                        className={`px-2 py-1 rounded-lg ${theme.cardBg} border ${theme.border} text-[10px] flex items-center gap-1`}
                      >
                        {copiedIfsc ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedIfsc ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <p className={`text-[11px] ${theme.textMuted} pt-1`}>
                    Bank: {bank.bankName}, {bank.branch}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. All 6 Regional Field Offices */}
      <AgenciexOffices />

    </div>
  );
}
