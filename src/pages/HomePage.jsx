import React from 'react';
import TrustHero from '../components/TrustHero';
import TrustFocusAreas from '../components/TrustFocusAreas';
import TrustPartners from '../components/TrustPartners';
import TrustTransformation from '../components/TrustTransformation';
import TrustJourneyTimeline from '../components/TrustJourneyTimeline';
import TrustGovernance from '../components/TrustGovernance';
import TrustBankCTA from '../components/TrustBankCTA';

export default function HomePage({ onOpenDonate, onSelectProject }) {
  return (
    <div className="space-y-0 selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. Hero Section matching Reference Screenshot (Photo + Golden Curves + 5-Stat Bar) */}
      <TrustHero onOpenDonate={onOpenDonate} />

      {/* 2. Our Three Areas of Impact matching Reference Screenshot (3 Cards + Other Interventions) */}
      <TrustFocusAreas onOpenDonate={onOpenDonate} />

      {/* 3. Institutional Partner Marquee */}
      <TrustPartners />

      {/* 4. Grassroots Transformation Stories (Before vs After Evidence) */}
      <TrustTransformation onOpenDonate={onOpenDonate} />

      {/* 5. 41-Year Trust Journey (Curved Milestones from 1983 to 2026) */}
      <TrustJourneyTimeline />

      {/* 6. Leadership, Board of Trustees & Statutory Accreditations */}
      <TrustGovernance onOpenDonate={onOpenDonate} />

      {/* 7. Canara Bank Direct Transfer Card & 80G Donation Banner */}
      <TrustBankCTA onOpenDonate={onOpenDonate} />
    </div>
  );
}
