import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import AgenciexNavbar from './components/AgenciexNavbar';
import AgenciexFooter from './components/AgenciexFooter';
import DonationModal from './components/DonationModal';
import ThemeSwitcher from './components/ThemeSwitcher';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ImpactPage from './pages/ImpactPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';

function MainLayout() {
  const { theme } = useTheme();
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`relative min-h-screen ${theme.bg} ${theme.text} flex flex-col antialiased transition-colors duration-300 font-sans`}>
      {/* Scroll to Top on every route change */}
      <ScrollToTop />

      {/* Floating Pill Navbar with Multilingual Language Switcher (Telugu / Tamil / Hindi / English) */}
      <AgenciexNavbar 
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      {/* Dynamic Multi-Page Router */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenDonate={() => setDonateModalOpen(true)}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <AboutPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />
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
            path="/impact" 
            element={
              <ImpactPage 
                onOpenDonate={() => setDonateModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <ContactPage 
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

      {/* Clean Multi-Page Footer - Zero Framer Branding, No Theme Names Mentioned */}
      <AgenciexFooter 
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      {/* Quick 80G Bank Transfer Modal */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />

      {/* Minimalist Floating Mode Pill (Zero verbose theme name text) */}
      <ThemeSwitcher />
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
