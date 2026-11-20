import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Mail, Phone, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useLanguage } from '../context/LanguageContext';

export default function TrustFooter({ onOpenDonate }) {
  const { t } = useLanguage();
  const org = pptData.organization;

  return (
    <footer className="bg-gradient-to-b from-[#240b14] via-[#1a0f16] to-[#120a10] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden transition-colors border-t-2 border-amber-500/30">
      
      {/* Decorative Radiant Light Bleeds */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid with Warm Jewel Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-rose-900/40">
          
          {/* Column 1: Identity & 41-Year Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group inline-flex">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/70 p-0.5 bg-white shrink-0 shadow-lg">
                <img
                  src="/images/ppt-logo.jpg"
                  alt="Praja Pragati Trust Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight block font-display">
                  {t.trustName}
                </span>
                <span className="text-xs text-amber-300 font-mono font-bold">
                  Established 1983 • 41 Years of Grassroots Trust
                </span>
              </div>
            </Link>

            <p className="text-xs text-rose-100/80 leading-relaxed max-w-sm">
              Empowering marginalized tribal communities, liberating bonded labourers, protecting child rights, and restoring ecological balance across South India.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/60 font-mono text-[11px] text-amber-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Regd. Deed 24/83 • Indian Trusts Act 1882</span>
              </span>
              <span className="font-mono text-[11px] text-zinc-300">Tirupati • South India</span>
            </div>
          </div>

          {/* Column 2: Directory Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block">
              Pages Directory
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-rose-100/80">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors">{t.navHome}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors">{t.navAbout}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors">{t.navWork || "Our Work"}</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-300 transition-colors">{t.navProjects}</Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-amber-300 transition-colors">{t.navImpact}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors">{t.navContact || "Get Involved"}</Link>
              </li>
              <li>
                <Link to="/donate" className="text-amber-300 font-bold hover:underline flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-amber-300" />
                  <span>Donate (80G Tax-Exempt)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Accreditations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block">
              Statutory Clearances
            </span>
            <ul className="space-y-2 text-xs text-rose-100/85">
              <li className="flex items-start gap-1.5">
                <span className="font-mono text-amber-400 font-bold">•</span>
                <span><strong className="text-white">Section 80G:</strong> Tax Exemption AAATP8682K25HY02</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-mono text-amber-400 font-bold">•</span>
                <span><strong className="text-white">Section 12A:</strong> IT Act Permanent Registration</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-mono text-amber-400 font-bold">•</span>
                <span><strong className="text-white">FCRA:</strong> 010140011 (Ministry of Home Affairs)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-mono text-amber-400 font-bold">•</span>
                <span><strong className="text-white">NITI Aayog:</strong> AP/2013/0068300 (NGO Darpan)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="font-mono text-amber-400 font-bold">•</span>
                <span><strong className="text-white">CSR-1:</strong> CSR00017363 (Ministry of Corporate Affairs)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office & Bank (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block">
              Registered Head Office
            </span>
            <p className="text-xs text-rose-100/80 leading-relaxed">
              {org.registeredOffice}
            </p>
            <div className="text-xs text-rose-200/90 space-y-1 font-mono">
              <p>Ph: {org.phone}</p>
              <p>Mob: {org.mobile}</p>
              <p>Email: {org.emailPrimary}</p>
            </div>

            <div className="pt-2">
              <Link
                to="/donate"
                className="w-full py-3 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#7c1d34] flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 active:scale-95 transition-all"
              >
                <Heart className="w-4 h-4 fill-[#7c1d34]" />
                <span>Support Our Grassroots Work</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Zero Theme Names, Zero Framer Watermarks */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-200/70">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {t.trustName}. {t.footerCopy}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-amber-300/80">
            <span>Non-Profit Registered Trust Act 1882</span>
            <span>•</span>
            <span>Tirupati, Andhra Pradesh, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
