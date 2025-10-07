'use client';

import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import USPSection from '@/app/components/USPSection';
import FeaturesSection from '@/app/components/FeaturesSection';
import ScreenshotsSection from '@/app/components/ScreenshotsSection';
import BenefitsSection from '@/app/components/benefitssection';
import PricingSection from '@/app/components/PricingSection';
import AboutSection from '@/app/components/aboutsection';
import CTASection from '@/app/components/CTASection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <USPSection />
      <FeaturesSection />
      {/* <ComparisonSection /> */}
      <ScreenshotsSection />
      <BenefitsSection />
      <PricingSection />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
