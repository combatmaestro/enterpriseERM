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
          <title>Enterprise Risk Management Software | Cloud ERM Solutions for Business Risk</title>

    <meta
      name="description"
      content="Discover the best enterprise risk management (ERM) software to protect and grow your business. Enterprise.AI offers cloud ERM solutions that streamline your enterprise risk management framework and enhance compliance."
    />
    <meta name="keywords" content="enterprise risk management, ERM software, risk management solutions, cloud ERM, business risk management, enterprise risk management framework, what is ERM, best ERM software" />
    <meta name="author" content="Enterprise.AI" />
   
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
