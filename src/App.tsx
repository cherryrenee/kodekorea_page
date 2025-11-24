import { HeroSection } from './components/HeroSection';
import { StatisticsSection } from './components/StatisticsSection';
import { FeaturedPrograms } from './components/FeaturedPrograms';
import { PartnersSection } from './components/PartnersSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white w-full max-w-[390px] mx-auto">
      <HeroSection />
      <StatisticsSection />
      <FeaturedPrograms />
      <PartnersSection />
      <AboutSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
