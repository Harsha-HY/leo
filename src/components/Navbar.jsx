import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ShieldCheck, ChevronRight, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { pptData } from '../data/pptData';

export default function Navbar({ onOpenDonate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Pillars", href: "#pillars" },
    { name: "Projects", href: "#projects" },
    { name: "Impact", href: "#impact" },
    { name: "Governance", href: "#governance" },
    { name: "Offices", href: "#offices" },
    { name: "Reports", href: "#reports" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav className={`mx-auto max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-sm' 
            : 'bg-white/80 backdrop-blur-sm border border-zinc-200/60 shadow-none'
        }`}>
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-300 p-0.5 bg-white shadow-xs group-hover:scale-105 transition-transform">
              <img 
                src="/images/ppt-logo.jpg" 
                alt="Praja Pragati Trust Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-zinc-950 text-sm sm:text-base tracking-tight">
                  Praja Pragati Trust
                </span>
                <span className="hidden md:inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                  Estd 1983
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 font-normal -mt-0.5 hidden sm:block">
                Tirupati, Andhra Pradesh
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenDonate}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-all shadow-xs active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
              <span>Donate (80G)</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 animate-fadeIn">
          <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
            <div className="px-3 py-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </a>
            ))}
            
            <div className="mt-4 pt-4 border-t border-zinc-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-3 rounded-full text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                <span>Donate with 80G Tax Exemption</span>
              </button>

              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 space-y-2">
                <div className="flex items-center gap-2 text-zinc-900 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-zinc-700" />
                  <span>Govt. Registered Trust Since 1983</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{pptData.organization.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{pptData.organization.emailPrimary}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
