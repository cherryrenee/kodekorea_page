import React from 'react';
import { NavigationSection } from './components/NavigationSection';
import { BottomUpHero } from './components/BottomUpHero';
import { StatisticsSection } from './components/StatisticsSection';
import { WhyKodeKorea } from './components/WhyKodeKorea';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-background w-full">
      <NavigationSection />
      <BottomUpHero />
      <StatisticsSection />
      <WhyKodeKorea />
      <PartnersSection />
      <AboutSection />
      <ReviewsSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
