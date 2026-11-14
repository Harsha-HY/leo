import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import AgenciexNavbar from './components/AgenciexNavbar';
import AgenciexHero from './components/AgenciexHero';
import PartnerMarquee from './components/PartnerMarquee';
import Trending3DTransformationLens from './components/Trending3DTransformationLens';
import Trending3DBentoGrid from './components/Trending3DBentoGrid';
import AgenciexAbout from './components/AgenciexAbout';
import AgenciexServices from './components/AgenciexServices';
import Trending3DCylinderDeck from './components/Trending3DCylinderDeck';
import AgenciexProjects from './components/AgenciexProjects';
import AgenciexCommunities from './components/AgenciexCommunities';
import AgenciexApproach from './components/AgenciexApproach';
import AgenciexAwards from './components/AgenciexAwards';
import AgenciexTestimonials from './components/AgenciexTestimonials';
import AgenciexReportsGovernance from './components/AgenciexReportsGovernance';
import AgenciexOffices from './components/AgenciexOffices';
import AgenciexCTA from './components/AgenciexCTA';
import AgenciexFooter from './components/AgenciexFooter';
import DonationModal from './components/DonationModal';
import ThemeSwitcher from './components/ThemeSwitcher';

function MainLayout() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`relative min-h-screen ${theme.bg} ${theme.text} flex flex-col antialiased transition-colors duration-300 font-sans`}>
      {/* Floating Pill Navbar with Multilingual Language Switcher (Telugu / Tamil / Hindi / English) */}
      <AgenciexNavbar 
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero with Multilingual Typewriter text animation & Trending 3D Interactive Stage */}
        <AgenciexHero
          onOpenDonate={() => setDonateModalOpen(true)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Institutional Partner Marquee */}
        <PartnerMarquee />

        {/* Trending 3D Before vs After Transformation Lens (Highest Customer & Donor Satisfaction) */}
        <Trending3DTransformationLens />

        {/* Trending 3D Bento Matrix (Timeline Scrubber, Live Allocation, Compliance Vault, Radar) */}
        <Trending3DBentoGrid 
          onOpenDonate={() => setDonateModalOpen(true)}
        />

        {/* About Section with 3D Depth Cards */}
        <AgenciexAbout />

        {/* Trust Services 3D Pillar Cards with Tangible Deliverables */}
        <AgenciexServices 
          onOpenDonate={() => setDonateModalOpen(true)}
        />

        {/* Trending 3D Cylindrical Orbiting Project Deck */}
        <Trending3DCylinderDeck 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Selected Work: 3D Tilt Project Cards + Detailed Case Study Modal */}
        <AgenciexProjects 
          selectedProject={selectedProject}
          onSelectProject={(project) => setSelectedProject(project)}
          onCloseModal={() => setSelectedProject(null)}
        />

        {/* Communities We Serve: 3D Cards for Yanadi tribes, bonded labour survivors, farmers */}
        <AgenciexCommunities />

        {/* Our 3-Step Approach */}
        <AgenciexApproach />

        {/* Awards & Statutory Recognition Table */}
        <AgenciexAwards />

        {/* Testimonials 3D Grid */}
        <AgenciexTestimonials />

        {/* Governance & Reports: Annual Reports reading room, Board of Trustees, Credentials */}
        <AgenciexReportsGovernance />

        {/* Geographic Footprint: 6 Field Offices with 3D Photo Cards */}
        <AgenciexOffices />

        {/* High-contrast Bottom CTA Banner with Canara Bank Copy Card */}
        <AgenciexCTA 
          onOpenDonate={() => setDonateModalOpen(true)}
        />
      </main>

      {/* Clean Footer - Zero Framer Branding, No Theme Names Mentioned */}
      <AgenciexFooter 
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      {/* 80G Donation & Bank Transfer Modal */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />

      {/* Minimalist Floating Mode Pill (No verbose theme name text) */}
      <ThemeSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </ThemeProvider>
  );
}
