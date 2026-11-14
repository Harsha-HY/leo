import React, { useState } from 'react';
import { Heart, Copy, Check, ShieldCheck, Building2, Gift } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function DonationSection() {
  const [copiedField, setCopiedField] = useState(null);

  const bank = pptData.organization.bankDetails;

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const impactTiers = [
    {
      amount: "₹ 2,500",
      title: "Foundational Learning Kit",
      desc: "Supplies early childhood education charts and play kits for 1 rural Anganwadi sitting circle."
    },
    {
      amount: "₹ 5,000",
      title: "Small Farmer Bio-Input Kit",
      desc: "Provides 1 Jeevamrutham preparation kit and organic seeds to convert 1 acre to zero-budget farming."
    },
    {
      amount: "₹ 15,000",
      title: "Rescued Labour Re-settlement",
      desc: "Supports emergency nutrition, temporary shelter, and school re-enrollment for a liberated family."
    },
    {
      amount: "₹ 25,000",
      title: "Model Village Learning Centre",
      desc: "Equips a village community centre with library books, science kits, and sports accessories."
    }
  ];

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Support PPT • 80G Tax Exemption</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Contribute to Frontline Community Welfare
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Your contributions directly fund legal rescue operations, preschool materials for tribal children, and organic agriculture for drought-affected farmers. All domestic donations qualify for 50% tax deduction under Section 80G.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Tiers */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 mb-2 flex items-center gap-2">
              <Gift className="w-4 h-4 text-zinc-700" />
              <span>Direct Support Tiers</span>
            </h3>

            <div className="space-y-2.5">
              {impactTiers.map((tier, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start justify-between gap-3 shadow-xs"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-zinc-900 block mb-0.5">
                      {tier.amount}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-950">
                      {tier.title}
                    </h4>
                    <p className="text-[11px] text-zinc-600 mt-0.5 leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-700">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-[11px] text-zinc-600">
              <p>
                <strong>Tax Receipt Process:</strong> Email your transaction reference, Full Name, and PAN to <span className="font-semibold text-zinc-900 font-mono">ppt_srinu@rediffmail.com</span>. We issue official 80G digital tax exemption receipts.
              </p>
            </div>
          </div>

          {/* Right: Bank Details */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white border border-zinc-200 text-zinc-900">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 font-semibold block">
                    Direct Bank Transfer
                  </span>
                  <h4 className="text-base font-bold text-zinc-950">
                    Official Canara Bank Account
                  </h4>
                </div>
              </div>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-200 text-zinc-800 font-semibold">
                80G Verified
              </span>
            </div>

            <div className="space-y-3">
              
              <div className="p-3 rounded-xl bg-white border border-zinc-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono block">Account Beneficiary</span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-950 block">{bank.accountName}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(bank.accountName, 'name')}
                  className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
                  title="Copy Name"
                >
                  {copiedField === 'name' ? <Check className="w-3.5 h-3.5 text-zinc-900" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-white border border-zinc-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono block">Bank & Branch</span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-950 block">{bank.bankName}</span>
                  <span className="text-[11px] text-zinc-500">{bank.branch}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-zinc-900 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-900 uppercase font-mono block font-bold">Account Number</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-zinc-950 tracking-wider block">
                    {bank.accountNumber}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(bank.accountNumber, 'acc')}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  {copiedField === 'acc' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy A/c</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-white border border-zinc-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono block">IFSC Code</span>
                  <span className="text-sm font-mono font-bold text-zinc-950 tracking-wider block">
                    {bank.ifscCode}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(bank.ifscCode, 'ifsc')}
                  className="px-2.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-medium transition-colors flex items-center gap-1"
                >
                  {copiedField === 'ifsc' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy IFSC</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            <div className="p-3 rounded-xl bg-white border border-zinc-200 text-[11px] text-zinc-600 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-zinc-900">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Statutory Registrations:</span>
              </div>
              <p className="text-[11px] text-zinc-600 leading-normal">
                80G: <strong>{pptData.organization.tax80G}</strong> • 12A: <strong>{pptData.organization.tax12A}</strong><br />
                FCRA: <strong>{pptData.organization.fcraNo}</strong> • CSR: <strong>{pptData.organization.csrNo}</strong>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
