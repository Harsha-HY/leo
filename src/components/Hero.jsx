import React from 'react';
import { ArrowUpRight, ShieldCheck, Award, Users, CheckCircle2, Heart, ArrowRight } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function Hero({ onOpenDonate }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Chip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>41+ Years of Grassroots Impact • Estd. 1983</span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-600">Tirupati, South India</span>
          </div>
        </div>

        {/* Main Heading - Agenciex Editorial Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-zinc-950 tracking-tight leading-[1.08]">
            Empowering people, protecting dignity, and sustaining futures.
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed">
            <strong className="text-zinc-900 font-medium">Praja Pragati Trust (PPT)</strong> is a non-profit civil society organisation dedicated to tribal community welfare, eliminating child and bonded labour, advancing quality rural education, and pioneering climate-resilient agriculture across South India.
          </p>

          {/* Action Buttons - Shadcn Clean Style */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 shadow-xs transition-all group"
            >
              <span>Explore Initiatives</span>
              <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenDonate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-zinc-900 bg-white hover:bg-zinc-50 border border-zinc-200 shadow-xs transition-all"
            >
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>Donate (80G Tax-Exempt)</span>
            </button>
          </div>

          {/* Statutory Credibility Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-600">
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200">
              ✓ 80G Tax Exemption (Till 2032)
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200">
              ✓ 12A Registered (Till 2037)
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200">
              ✓ FCRA Approved (MHA 010140011)
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200">
              ✓ NITI Aayog: AP/2013/0068300
            </span>
          </div>
        </div>

        {/* Hero Visual Card Showcase */}
        <div className="mt-12 sm:mt-14">
          <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
            
            {/* Top Bar of Showcase */}
            <div className="px-6 py-3.5 border-b border-zinc-200 bg-zinc-50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider">
                  PRAJA PRAGATI TRUST • ANNUAL REPORT OVERVIEW
                </span>
              </div>
              <span className="text-xs text-zinc-600 font-medium">
                Audited Key Indicators 2025 – 2026
              </span>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
              
              {/* Photo Area */}
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-zinc-100 overflow-hidden">
                <img
                  src="/images/hero_happy_children.jpg"
                  alt="Children and community empowered by Praja Pragati Trust"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-sm border border-zinc-200 text-xs text-zinc-800 shadow-xs flex items-center justify-between">
                  <span>"Education is every child's right — boy or girl, rich or poor."</span>
                  <span className="font-semibold text-zinc-950 font-mono pl-3 shrink-0">17,179+ Reached</span>
                </div>
              </div>

              {/* Stats Column - Clean Shadcn Grid */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-zinc-500 font-semibold block mb-1">
                    Grassroots Metrics
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Direct Impact Milestones
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-2xl sm:text-3xl font-bold text-zinc-950 block">
                      489
                    </span>
                    <span className="text-xs font-medium text-zinc-700 block mt-0.5">
                      Bonded Labour Rescued
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      Across 382 worksites
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-2xl sm:text-3xl font-bold text-zinc-950 block">
                      441
                    </span>
                    <span className="text-xs font-medium text-zinc-700 block mt-0.5">
                      Anganwadi Centres
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      100 Model AWCs
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-2xl sm:text-3xl font-bold text-zinc-950 block">
                      1,351
                    </span>
                    <span className="text-xs font-medium text-zinc-700 block mt-0.5">
                      Acres Natural Farming
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      805 marginal farmers
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <span className="text-2xl sm:text-3xl font-bold text-zinc-950 block">
                      8,643
                    </span>
                    <span className="text-xs font-medium text-zinc-700 block mt-0.5">
                      Govt Scheme Enrolments
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      e-Shram, ABHA, PMJJBY
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 leading-relaxed">
                  <p className="font-semibold text-zinc-900 mb-0.5">
                    Constitutional Justice & Community Action
                  </p>
                  <p>
                    Mobilizing Released Bonded Labour Associations (RBLA), Trilinga Unorganised Workers Union (1,200+ members), and 26 Natural Farming Interest Groups.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
                  <span>Registered under Indian Trusts Act 1882</span>
                  <a href="#about" className="text-zinc-900 font-medium hover:underline inline-flex items-center gap-1">
                    <span>Read History</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
