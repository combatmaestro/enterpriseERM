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
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fluidfit.ai – AI Powered Business Automation</title>
        <meta
          name="description"
          content="Automate workflows, boost efficiency, and scale your business using Fluidfit.ai's advanced AI capabilities."
        />
        <meta property="og:title" content="Fluidfit.ai – AI Powered Business Automation" />
        <meta
          property="og:description"
          content="Automate workflows, boost efficiency, and scale your business using Fluidfit.ai's advanced AI capabilities."
        />
        <meta property="og:image" content="https://your-domain.com/og-image.png" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-saas-black text-white">
        <Navbar />
        <main>
          <HeroSection />
          <CompanySection />
          <FeaturesSection />
          <CoreCapabilities />
          <WhoGains />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
