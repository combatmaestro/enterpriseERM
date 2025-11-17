import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TeamCard = ({ image, name, role }) => (
  <div className="bg-saas-darkGray rounded-xl p-6 text-center border border-gray-800 card-shadow">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
    <h4 className="font-semibold text-white">{name}</h4>
    <p className="text-gray-400 text-sm">{role}</p>
  </div>
);

const About = () => {
  return (
    <>
      <Helmet>
        <title>About EnterpriseRM.AI – Our Mission, Values & Vision</title>
        <meta
          name="description"
          content="Learn about EnterpriseRM.AI, our mission to simplify enterprise risk management, our core values, and how our AI-powered platform helps organizations stay compliant and proactive."
        />
        <meta property="og:title" content="About EnterpriseRM.AI" />
        <meta
          property="og:description"
          content="Discover how EnterpriseRM.AI uses AI-driven insights to help organizations manage risk, compliance, and operational resilience."
        />
        <meta property="og:image" content="https://your-domain.com/about-og-image.png" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-saas-black text-white">
        <Navbar />
        <main className="py-16">
          <div className="section-container">
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="gradient-text">EnterpriseRM.AI</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                At <span className="font-semibold">EnterpriseRM.AI</span>, we believe risk management should be simple, intelligent, and actionable.
              </p>
            </div>

            {/* Mission & Bio */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 mb-4">
                  We combine the rigor of traditional ERM frameworks with the agility of modern AI technology.
                </p>

                <h3 className="text-lg font-semibold mb-2">What we build</h3>
                <p className="text-gray-300 mb-4">
                  Automated assessments, risk registers, compliance libraries, and predictive analytics—all unified.
                </p>

                <h3 className="text-lg font-semibold mb-2">Who we serve</h3>
                <p className="text-gray-400 mb-2">
                  Enterprises, financial institutions, regulated industries, and fast-growing businesses.
                </p>

                <p className="text-saas-orange font-semibold mt-4">
                  EnterpriseRM.AI – Turning risk into opportunity, powered by intelligence.
                </p>
              </div>

              <div>
                <div className="bg-saas-darkGray rounded-xl p-6 border border-gray-800 card-shadow">
                  <h3 className="text-xl font-semibold mb-3">EnterpriseRM.AI — Bio</h3>
                  <p className="text-gray-300 mb-3">
                    An AI-powered enterprise risk management platform built for clarity, compliance, and predictive insights.
                  </p>
                  <p className="text-gray-300 mb-3">
                    We replace outdated spreadsheets with a proactive, real-time approach to risk and compliance.
                  </p>
                  <p className="text-gray-300">
                    Making ERM smarter, scalable, and actionable—that’s our mission.
                  </p>
                </div>

                <div className="mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                    alt="About EnterpriseRM.AI"
                    className="rounded-xl w-full mt-4 object-cover card-shadow"
                  />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 card-shadow">
                  <h4 className="font-semibold text-white mb-2">Security-first</h4>
                  <p className="text-gray-400 text-sm">Security drives every feature we build.</p>
                </div>
                <div className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 card-shadow">
                  <h4 className="font-semibold text-white mb-2">Transparency</h4>
                  <p className="text-gray-400 text-sm">Auditability and clarity in every insight.</p>
                </div>
                <div className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 card-shadow">
                  <h4 className="font-semibold text-white mb-2">Customer-first</h4>
                  <p className="text-gray-400 text-sm">Real-world needs drive product innovation.</p>
                </div>
              </div>
            </div>

            {/* Partnership CTA */}
            <div className="bg-saas-darkGray rounded-xl p-8 border border-gray-800 card-shadow">
              <h3 className="text-xl font-semibold mb-4">Want to partner with us?</h3>
              <p className="text-gray-300 mb-6">
                We're exploring integration and reseller partnerships. Let’s connect.
              </p>
              <a
                href="/contact"
                className="inline-block bg-saas-orange text-saas-black font-semibold px-5 py-3 rounded-lg"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
