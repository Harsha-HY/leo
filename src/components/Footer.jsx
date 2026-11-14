import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function Footer({ onOpenDonate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 bg-white pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-zinc-200">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-300 p-0.5 bg-white">
                <img
                  src="/images/ppt-logo.jpg"
                  alt="Praja Pragati Trust Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-bold text-zinc-950 text-base tracking-tight block">
                  Praja Pragati Trust
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  Registered Civil Society Organisation • Since 1983
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed max-w-sm">
              Empowering marginalized and vulnerable tribal communities across Andhra Pradesh, Tamil Nadu, Telangana, and Karnataka through rights protection, natural farming, and inclusive education.
            </p>

            <div className="pt-1 flex flex-wrap gap-1.5 text-[10px] text-zinc-600">
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200">
                Reg: 24/83
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 font-medium text-zinc-900">
                80G Valid to 2032
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200">
                12A Valid to 2037
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200">
                FCRA: 010140011
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-600">
              <li><a href="#about" className="hover:text-zinc-950 transition-colors">About Us</a></li>
              <li><a href="#pillars" className="hover:text-zinc-950 transition-colors">Thematic Pillars</a></li>
              <li><a href="#projects" className="hover:text-zinc-950 transition-colors">Flagship Projects</a></li>
              <li><a href="#impact" className="hover:text-zinc-950 transition-colors">Impact Metrics</a></li>
              <li><a href="#governance" className="hover:text-zinc-950 transition-colors">Governing Board</a></li>
              <li><a href="#offices" className="hover:text-zinc-950 transition-colors">Field Offices</a></li>
            </ul>
          </div>

          {/* Key Programmes */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">
              Key Programs
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-600">
              <li><a href="#projects" className="hover:text-zinc-950 transition-colors">Bonded Labour Elimination</a></li>
              <li><a href="#projects" className="hover:text-zinc-950 transition-colors">India Literacy Project</a></li>
              <li><a href="#projects" className="hover:text-zinc-950 transition-colors">Project DROP Plastic</a></li>
              <li><a href="#projects" className="hover:text-zinc-950 transition-colors">Natural Farming (APF)</a></li>
              <li><a href="#projects" className="hover:text-zinc-950 transition-colors">Safe Village Program</a></li>
              <li><a href="#projects" className="hover:text-zinc-950 transition-colors">Universal Salt Iodization</a></li>
            </ul>
          </div>

          {/* Direct Support */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-950">
              Support Our Work
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Support verified casework, learning materials for tribal children, and sustainable agricultural conversion.
            </p>
            <button
              onClick={onOpenDonate}
              className="w-full py-2 px-3 rounded-full text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Donate (80G Tax-Exempt)</span>
            </button>
            <div className="text-[11px] text-zinc-500 font-mono">
              Canara Bank A/c: 1965101010276
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div>
            © 1983 – 2026 Praja Pragati Trust (PPT). All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#reports" className="hover:text-zinc-900 transition-colors">
              Annual Reports
            </a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">
              Contact Desk
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
