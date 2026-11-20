import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Landmark, Copy, Check, ShieldCheck, ArrowRight, Mail, Sparkles, Building2 } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function TrustBankCTA({ onOpenDonate }) {
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);
  const bank = pptData.organization.bankDetails;

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
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#881337] via-[#9f1239] via-[#b91c1c] to-[#d97706] text-white relative overflow-hidden">
      
      {/* Decorative Radiant Sun Glow Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/25 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/4 animate-pulse-subtle" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-400/30 rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/4" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Radiant Wave Contour Line Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full text-white/10 pointer-events-none" 
        viewBox="0 0 1440 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M-100 450 C300 250, 700 550, 1100 350 C1300 250, 1500 400, 1600 350" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeDasharray="8 8"
        />
        <path 
          d="M-50 200 C400 400, 800 100, 1200 300 C1400 400, 1550 250, 1650 300" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left 6 cols: Inspiring Radiant Call to Action */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-mono font-bold text-amber-200 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>Section 80G Tax Exemption (Order AAATP8682K25HY02)</span>
            </div>

            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight font-display leading-[1.08]">
              Empower a Child. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-100">
                Transform a Generation.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-rose-100/95 leading-relaxed max-w-xl font-normal">
              Every rupee directly funds school education kits in 91 villages, free legal aid for bonded labourers, and organic seed banks for tribal farmers.
            </p>

            {/* Radiant Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/donate"
                className="bg-amber-400 hover:bg-amber-300 text-[#7c1d34] px-8 py-4 rounded-full font-extrabold text-sm sm:text-base flex items-center gap-2.5 shadow-2xl hover:shadow-amber-400/40 transition-all active:scale-95 group"
              >
                <Heart className="w-4 h-4 fill-[#7c1d34]" />
                <span>Donate with 80G Tax Exemption</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/contact"
                className="bg-white/15 hover:bg-white/25 text-white border-2 border-white/40 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base backdrop-blur-md transition-all active:scale-95"
              >
                Volunteer or CSR Partnership
              </Link>
            </div>

            {/* Email receipt filing info */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-amber-100 pt-1">
              <Mail className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Email transfer UTR to <strong>ppt_srinu@rediffmail.com</strong> for stamped Form 10BE receipt</span>
            </div>
          </div>

          {/* Right 6 cols: Radiant Canara Bank Official Transfer Card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#0f2d37] rounded-3xl sm:rounded-4xl p-6 sm:p-9 shadow-2xl border-4 border-amber-300/90 relative overflow-hidden">
              
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#881337] via-amber-500 to-[#166534]" />

              <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl tracking-tight font-display text-[#0f2d37]">
                      Direct Bank Transfer (NEFT / IMPS)
                    </h3>
                    <p className="text-xs text-[#5a6a70] font-medium">
                      Canara Bank • Tirupati Main Branch
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-emerald-100 text-[#166534] border border-emerald-300">
                  80G Certified
                </span>
              </div>

              <div className="space-y-4 pt-5">
                
                {/* Account Name */}
                <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/60">
                  <span className="text-[10px] font-mono font-bold text-[#b45309] uppercase block tracking-wider mb-0.5">
                    Account Beneficiary Name
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-[#0f2d37] font-mono">
                    {bank.accountName}
                  </span>
                </div>

                {/* Account Number with 1-Click Copy */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#5a6a70] uppercase block tracking-wider mb-0.5">
                      Account Number (Savings Bank)
                    </span>
                    <span className="text-base sm:text-xl font-mono font-extrabold text-[#166534]">
                      {bank.accountNumber}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(bank.accountNumber, 'acc')}
                    className="px-3.5 py-2 rounded-xl bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
                  >
                    {copiedAcc ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedAcc ? 'Copied!' : 'Copy A/C'}</span>
                  </button>
                </div>

                {/* IFSC Code with 1-Click Copy */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#5a6a70] uppercase block tracking-wider mb-0.5">
                      IFSC Code
                    </span>
                    <span className="text-base sm:text-xl font-mono font-extrabold text-[#881337]">
                      {bank.ifscCode}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(bank.ifscCode, 'ifsc')}
                    className="px-3.5 py-2 rounded-xl bg-[#881337] hover:bg-[#9f1239] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
                  >
                    {copiedIfsc ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedIfsc ? 'Copied!' : 'Copy IFSC'}</span>
                  </button>
                </div>

                {/* Form 10BE claim step */}
                <div className="p-3.5 rounded-2xl bg-amber-100/70 border border-amber-300 flex items-center gap-3 text-xs text-amber-950 font-medium">
                  <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>Official Form 10BE certificate issued and filed directly on the Income Tax portal.</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
