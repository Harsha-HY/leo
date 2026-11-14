import React, { useState } from 'react';
import { ArrowRight, Heart, Copy, Check, ShieldCheck, Mail, Phone } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';

export default function AgenciexCTA({ onOpenDonate }) {
  const { theme } = useTheme();
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  const org = pptData.organization;
  const bank = org.bankDetails;

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
    <section id="contact" className={`py-20 sm:py-28 ${theme.subBg} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Dark Agenciex CTA Box */}
        <div className="bg-[#151515] rounded-3xl p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Luminous dynamic glow */}
          <div
            style={{ backgroundColor: `${theme.accent}20` }}
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#262626] border border-[#333333]">
                <span
                  style={{ backgroundColor: theme.accent }}
                  className="w-2 h-2 rounded-full animate-pulse"
                />
                <span style={{ color: theme.accent }}>Get in Touch • 80G Tax Deductible</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] font-display">
                Let’s build a just and equitable society together.
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                Partner with Praja Pragati Trust. Every rupee directly empowers tribal families, secures child protection, provides emergency legal rescue to bonded workers, and regenerates rural farm lands.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDonate}
                  style={{ backgroundColor: theme.accent }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white hover:opacity-90 transition-all shadow-md active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Donate with 80G Exemption</span>
                </button>

                <a
                  href={`mailto:${org.emailPrimary}?subject=Partnership%20Inquiry%20with%20Praja%20Pragati%20Trust`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#262626] hover:bg-[#333333] border border-[#404040] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Chairman</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>

              {/* Contact phone & address footer */}
              <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Phone style={{ color: theme.accent }} className="w-4 h-4" />
                  <span>{org.phone} | {org.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail style={{ color: theme.accent }} className="w-4 h-4" />
                  <span>{org.emailPrimary}</span>
                </div>
              </div>
            </div>

            {/* Right Bank Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#212121] rounded-3xl p-6 sm:p-7 border border-[#333333] space-y-5 shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-[#333333]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck style={{ color: theme.accent }} className="w-4 h-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      Official Canara Bank A/C
                    </span>
                  </div>
                  <span
                    style={{
                      backgroundColor: `${theme.accent}25`,
                      color: theme.accent
                    }}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold"
                  >
                    80G Approved
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                      Account Name:
                    </span>
                    <span className="font-bold text-white text-sm">
                      {bank.accountName}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                      Account Number:
                    </span>
                    <div className="flex items-center justify-between bg-[#151515] p-2.5 rounded-xl border border-[#333333]">
                      <span
                        style={{ color: theme.accent }}
                        className="font-mono font-extrabold text-base tracking-wider"
                      >
                        {bank.accountNumber}
                      </span>
                      <button
                        onClick={() => handleCopy(bank.accountNumber, 'acc')}
                        className="p-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#383838] text-zinc-300 transition-colors flex items-center gap-1 text-[11px]"
                      >
                        {copiedAcc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedAcc ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                      IFSC Code:
                    </span>
                    <div className="flex items-center justify-between bg-[#151515] p-2.5 rounded-xl border border-[#333333]">
                      <span className="font-mono font-bold text-white text-sm">
                        {bank.ifscCode}
                      </span>
                      <button
                        onClick={() => handleCopy(bank.ifscCode, 'ifsc')}
                        className="p-1.5 rounded-lg bg-[#2b2b2b] hover:bg-[#383838] text-zinc-300 transition-colors flex items-center gap-1 text-[11px]"
                      >
                        {copiedIfsc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedIfsc ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-1 text-[11px] text-zinc-400">
                    <span>Bank & Branch: </span>
                    <span className="text-zinc-200">{bank.bankName}, {bank.branch}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#333333] text-[11px] text-zinc-400 leading-snug">
                  Transfer via NEFT, RTGS, IMPS, or UPI. For official 80G receipt, kindly email transaction reference to <span className="text-white underline">{org.emailPrimary}</span>.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
