import React from 'react';
import { ArrowUpRight, Heart, ShieldCheck } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function AgenciexFooter({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const org = pptData.organization;

  return (
    <footer className={`${theme.cardBg} border-t ${theme.border} pt-16 pb-12 ${theme.text} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b ${theme.border}`}>
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 p-0.5 bg-white shrink-0 shadow-xs">
                <img
                  src="/images/ppt-logo.jpg"
                  alt="Praja Pragati Trust"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className={`font-bold text-base ${theme.text} tracking-tight block font-display`}>
                  {t.trustName}
                </span>
                <span style={{ color: theme.accent }} className="text-xs font-mono font-semibold">
                  Established 1983 • 41 Years
                </span>
              </div>
            </div>

            <p className={`text-xs ${theme.textMuted} leading-relaxed max-w-sm`}>
              Empowering marginalized communities, eradicating bonded labour, ensuring child rights, and restoring ecological balance across South India.
            </p>

            <div className={`pt-2 flex items-center gap-2 text-xs ${theme.textMuted}`}>
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${theme.subBg} border ${theme.border} font-mono text-[11px]`}>
                <ShieldCheck style={{ color: theme.accent }} className="w-3.5 h-3.5" />
                <span>Regd. Deed 24/83</span>
              </span>
              <span className="font-mono text-[11px]">Machilipatnam</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${theme.textMuted} block`}>
              Directory
            </span>
            <ul className={`space-y-2 text-xs font-medium ${theme.textMuted}`}>
              <li>
                <a href="#about" className={`hover:${theme.text} transition-colors`}>{t.navAbout}</a>
              </li>
              <li>
                <a href="#services" className={`hover:${theme.text} transition-colors`}>{t.navServices}</a>
              </li>
              <li>
                <a href="#projects" className={`hover:${theme.text} transition-colors`}>{t.navProjects}</a>
              </li>
              <li>
                <a href="#impact" className={`hover:${theme.text} transition-colors`}>{t.navImpact}</a>
              </li>
              <li>
                <a href="#governance" className={`hover:${theme.text} transition-colors`}>{t.navGovernance}</a>
              </li>
              <li>
                <a href="#offices" className={`hover:${theme.text} transition-colors`}>{t.navOffices}</a>
              </li>
              <li>
                <a href="#contact" className={`hover:${theme.text} transition-colors`}>{t.navContact}</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Accreditations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${theme.textMuted} block`}>
              Accreditations
            </span>
            <ul className={`space-y-2 text-xs ${theme.textMuted}`}>
              <li className="flex items-start gap-1.5">
                <span style={{ color: theme.accent }} className="font-mono font-bold">•</span>
                <span><strong className={theme.text}>FCRA:</strong> 010140011 (MHA)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span style={{ color: theme.accent }} className="font-mono font-bold">•</span>
                <span><strong className={theme.text}>Section 80G:</strong> Tax Exemption</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span style={{ color: theme.accent }} className="font-mono font-bold">•</span>
                <span><strong className={theme.text}>Section 12A:</strong> IT Act Permanent</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span style={{ color: theme.accent }} className="font-mono font-bold">•</span>
                <span><strong className={theme.text}>NITI Aayog:</strong> AP/2013/0068300</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span style={{ color: theme.accent }} className="font-mono font-bold">•</span>
                <span><strong className={theme.text}>CSR-1:</strong> CSR00017363 (MCA)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office & Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${theme.textMuted} block`}>
              Registered Head Office
            </span>
            <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
              {org.registeredOffice}
            </p>
            <div className={`text-xs ${theme.textMuted} space-y-1 font-mono`}>
              <p>Ph: {org.phone}</p>
              <p>Mob: {org.mobile}</p>
              <p>Email: {org.emailPrimary}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                style={{ backgroundColor: theme.accent }}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>{t.btnDonate80G.split('(')[0]}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean Copyright, No Framer Branding, No Theme Names */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${theme.textMuted}`}>
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {t.trustName}. {t.footerCopy}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Non-Profit Registered Trust Act 1882</span>
            <span>•</span>
            <span>Tirupati, Andhra Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
