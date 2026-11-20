import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import TrustNavbar from './components/TrustNavbar';
import TrustFooter from './components/TrustFooter';
import DonationModal from './components/DonationModal';

// Multi-Page Views
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import AgricultureEnvironmentPage from './pages/work/AgricultureEnvironmentPage';
import ChildDevelopmentPage from './pages/work/ChildDevelopmentPage';
import WomenLivelihoodsPage from './pages/work/WomenLivelihoodsPage';
import BondedLabourTribalWelfarePage from './pages/work/BondedLabourTribalWelfarePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ImpactPage from './pages/ImpactPage';
import StoriesPage from './pages/StoriesPage';
import TransparencyPage from './pages/TransparencyPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';

function MainLayout() {
  const { theme } = useTheme();
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`relative min-h-screen ${theme.bg} ${theme.text} flex flex-col antialiased transition-colors duration-300 font-sans`}>
      {/* Scroll to Top on every route transition */}
      <ScrollToTop />

      {/* Radiant Curved Trust Header matching Reference Screenshot with Multilingual Translation */}
      <TrustNavbar 
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      {/* Dynamic Multi-Page Router */}
      <main className="flex-1">
        <Routes>
          {/* 1. Home (/) */}
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenDonate={() => setDonateModalOpen(true)}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            } 
          />

          {/* 2. About Us (/about) */}
          <Route 
            path="/about" 
            element={
              <AboutPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 3. Our Work (/our-work) */}
          <Route 
            path="/our-work" 
            element={
              <OurWorkPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 4. Agriculture & Environment (/our-work/agriculture-environment) */}
          <Route 
            path="/our-work/agriculture-environment" 
            element={
              <AgricultureEnvironmentPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 5. Child Development & Education (/our-work/child-development) */}
          <Route 
            path="/our-work/child-development" 
            element={
              <ChildDevelopmentPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 6. Women Empowerment & Livelihoods (/our-work/women-livelihoods) */}
          <Route 
            path="/our-work/women-livelihoods" 
            element={
              <WomenLivelihoodsPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 7. Bonded Labour & Tribal Welfare (/our-work/bonded-labour-tribal-welfare) */}
          <Route 
            path="/our-work/bonded-labour-tribal-welfare" 
            element={
              <BondedLabourTribalWelfarePage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 8. Impact (/impact) */}
          <Route 
            path="/impact" 
            element={
              <ImpactPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 9. Stories & Updates (/stories) */}
          <Route 
            path="/stories" 
            element={
              <StoriesPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 10. Transparency (/transparency) */}
          <Route 
            path="/transparency" 
            element={
              <TransparencyPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* 11. Contact (/contact) */}
          <Route 
            path="/contact" 
            element={
              <ContactPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />

          {/* Legacy & Supplemental Routes */}
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/projects" 
            element={
              <ProjectsPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/donate" 
            element={<DonatePage />} 
          />

          {/* Catch-all redirect to Home */}
          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </main>

      {/* Clean Organic Waves Trust Footer - Zero Framer Branding, Zero Theme Names */}
      <TrustFooter 
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      {/* 80G Bank Contribution Modal */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}