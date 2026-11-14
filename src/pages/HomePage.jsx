import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AgenciexHero from '../components/AgenciexHero';
import PartnerMarquee from '../components/PartnerMarquee';
import Trending3DTransformationLens from '../components/Trending3DTransformationLens';
import Trending3DBentoGrid from '../components/Trending3DBentoGrid';
import AgenciexAbout from '../components/AgenciexAbout';
import AgenciexServices from '../components/AgenciexServices';
import Trending3DCylinderDeck from '../components/Trending3DCylinderDeck';
import AgenciexProjects from '../components/AgenciexProjects';
import AgenciexCommunities from '../components/AgenciexCommunities';
import AgenciexTestimonials from '../components/AgenciexTestimonials';
import AgenciexCTA from '../components/AgenciexCTA';

export default function HomePage({ onOpenDonate, onSelectProject }) {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Hero with Typewriter & 3D Interactive Stage */}
      <AgenciexHero
        onOpenDonate={onOpenDonate}
        onSelectProject={onSelectProject}
      />

      {/* Institutional Partner Marquee */}
      <PartnerMarquee />

      {/* 3D Before vs After Transformation Lens */}
      <Trending3DTransformationLens />

      {/* 3D Bento Matrix (Timeline Scrubber, Resource Allocation, Compliance Vault, Radar) */}
      <Trending3DBentoGrid 
        onOpenDonate={onOpenDonate}
      />

      {/* About Section Preview with Link to /about */}
      <div className="relative">
        <AgenciexAbout />
        <div className={`py-6 ${theme.bg} border-b ${theme.border} text-center`}>
          <Link
            to="/about"
            style={{ color: theme.accent }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:underline"
          >
            <span>Read full 41-year history, philosophy & board</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Trust Services Preview with Link to /services */}
      <div className="relative">
        <AgenciexServices onOpenDonate={onOpenDonate} />
        <div className={`py-6 ${theme.subBg} border-b ${theme.border} text-center`}>
          <Link
            to="/services"
            style={{ color: theme.accent }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:underline"
          >
            <span>Explore our full programmatic methodology & SOPs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 3D Cylindrical Orbiting Project Deck */}
      <Trending3DCylinderDeck onSelectProject={onSelectProject} />

      {/* Selected Work Grid with Link to /projects */}
      <div className="relative">
        <AgenciexProjects 
          onSelectProject={onSelectProject}
          onCloseModal={() => {}}
        />
        <div className={`py-6 ${theme.bg} border-b ${theme.border} text-center`}>
          <Link
            to="/projects"
            style={{ color: theme.accent }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:underline"
          >
            <span>View complete directory of 8 flagship casework projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Target Communities Served */}
      <AgenciexCommunities />

      {/* Community Testimonials & Endorsements */}
      <AgenciexTestimonials />

      {/* High-Contrast Bottom CTA Banner with Canara Bank Copy Card */}
      <AgenciexCTA onOpenDonate={onOpenDonate} />
    </div>
  );
}
