import React from 'react';
import { NavigationSection } from './components/NavigationSection';
import { HeroSection } from './components/HeroSection';
import { StatisticsSection } from './components/StatisticsSection';
import { FeaturedPrograms } from './components/FeaturedPrograms';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white w-full">
      <NavigationSection />
      <HeroSection />
      <StatisticsSection />
      <FeaturedPrograms />
      <PartnersSection />
      <AboutSection />
      <ReviewsSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
