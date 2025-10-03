import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import CompanySection from '@/components/CompanySection';
import CoreCapabilities from '@/components/CoreCapability';
import WhoGains from '@/components/WhoGains';

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <CompanySection/>
        <FeaturesSection />
        <CoreCapabilities/>
        <WhoGains/>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
