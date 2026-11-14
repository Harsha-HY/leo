import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function AgenciexFooter({ onOpenDonate }) {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const org = pptData.organization;

  return (
    <footer className={`${theme.cardBg} border-t ${theme.border} pt-12 sm:pt-16 pb-12 ${theme.text} transition-colors`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 1 col on mobile, 2 col on tablet, 12 cols on desktop */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b ${theme.border}`}>
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#e4e4e4] dark:border-zinc-700 p-0.5 bg-white shrink-0 shadow-xs">
                <img
                  src="/images/ppt-logo.jpg"
                  alt="Praja Pragati Trust"
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
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
            </Link>

            <p className={`text-xs ${theme.textMuted} leading-relaxed max-w-sm`}>
              Empowering marginalized communities, eradicating bonded labour, ensuring child rights, and restoring ecological balance across South India.
            </p>

            <div className={`pt-2 flex flex-wrap items-center gap-2 text-xs ${theme.textMuted}`}>
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${theme.subBg} border ${theme.border} font-mono text-[11px]`}>
                <ShieldCheck style={{ color: theme.accent }} className="w-3.5 h-3.5" />
                <span>Regd. Deed 24/83</span>
              </span>
              <span className="font-mono text-[11px]">Machilipatnam</span>
            </div>
          </div>

          {/* Column 2: Multi-Page Directory Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${theme.textMuted} block`}>
              Directory
            </span>
            <ul className={`space-y-2 text-xs font-medium ${theme.textMuted}`}>
              <li>
                <Link to="/" className={`hover:${theme.text} transition-colors`}>{t.navHome}</Link>
              </li>
              <li>
                <Link to="/about" className={`hover:${theme.text} transition-colors`}>{t.navAbout}</Link>
              </li>
              <li>
                <Link to="/our-work" className={`hover:${theme.text} transition-colors`}>{t.navOurWork}</Link>
              </li>
              <li>
                <Link to="/impact" className={`hover:${theme.text} transition-colors`}>{t.navImpact}</Link>
              </li>
              <li>
                <Link to="/stories" className={`hover:${theme.text} transition-colors`}>{t.navStories}</Link>
              </li>
              <li>
                <Link to="/transparency" className={`hover:${theme.text} transition-colors`}>{t.navTransparency}</Link>
              </li>
              <li>
                <Link to="/contact" className={`hover:${theme.text} transition-colors`}>{t.navContact}</Link>
              </li>
              <li>
                <Link to="/donate" style={{ color: theme.accent }} className="font-semibold hover:underline">
                  {t.navDonate} (80G)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Thematic Pillars Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${theme.textMuted} block`}>
              Thematic Focus Areas
            </span>
            <ul className={`space-y-2 text-xs ${theme.textMuted}`}>
              <li>
                <Link to="/our-work/agriculture-environment" className={`hover:${theme.text} transition-colors block leading-relaxed`}>
                  • Agriculture & Environment
                </Link>
              </li>
              <li>
                <Link to="/our-work/child-development" className={`hover:${theme.text} transition-colors block leading-relaxed`}>
                  • Child Development & Education
                </Link>
              </li>
              <li>
                <Link to="/our-work/women-livelihoods" className={`hover:${theme.text} transition-colors block leading-relaxed`}>
                  • Women Empowerment & Livelihoods
                </Link>
              </li>
              <li>
                <Link to="/our-work/bonded-labour-tribal-welfare" className={`hover:${theme.text} transition-colors block leading-relaxed`}>
                  • Bonded Labour & Tribal Welfare
                </Link>
              </li>
              <li className="pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono">
                <span className="block text-zinc-400">Statutory Clearances:</span>
                <span className="text-zinc-600 dark:text-zinc-300">FCRA • 80G • 12A • CSR-1</span>
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
            <div className={`text-xs ${theme.textMuted} space-y-1 font-mono break-all`}>
              <p>Ph: {org.phone}</p>
              <p>Mob: {org.mobile}</p>
              <p>Email: {org.emailPrimary}</p>
            </div>

            <div className="pt-2">
              <Link
                to="/donate"
                style={{ backgroundColor: theme.accent }}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>{t.btnDonate80G.split('(')[0]}</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${theme.textMuted} text-center sm:text-left`}>
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {t.trustName}. {t.footerCopy}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] font-mono">
            <span>Non-Profit Registered Trust Act 1882</span>
            <span>•</span>
            <span>Tirupati, Andhra Pradesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
}