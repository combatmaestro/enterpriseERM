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
      <title>Enterprise Risk Management Software | Cloud ERM Solutions</title>

    <meta
      name="description"
      content="Enterpriserm.AI offers modern enterprise risk management (ERM) software to streamline governance, risk, and compliance with cloud-based solutions."
    />

    <meta name="author" content="Enterpriserm.AI" />
    <meta name="google-site-verification" content="z8l8bUTe8eH0WfDFUvqiygPVKVfh93MeUi2bewIhEpY" />

   
    <meta property="og:title" content="Enterprise Risk Management Software | Cloud ERM Solutions" />
    <meta property="og:description" content="Cloud ERM platform to modernize governance, risk, and compliance for enterprises." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://enterpriserm.ai/og-image.jpg" />
    <meta property="og:url" content="https://enterpriserm.ai/" />

  
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@EnterpriseAI_app" />
    <meta name="twitter:title" content="Enterprise Risk Management Software" />
    <meta name="twitter:description" content="Cloud-based ERM solutions for enterprises." />
    <meta name="twitter:image" content="https://enterpriserm.ai/og-image.jpg" />

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
