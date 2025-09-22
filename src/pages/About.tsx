// src/pages/About.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TeamCard = ({ image, name, role }) => (
  <div className="bg-saas-darkGray rounded-xl p-6 text-center border border-gray-800 card-shadow">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
    <h4 className="font-semibold text-white">{name}</h4>
    <p className="text-gray-400 text-sm">{role}</p>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">EnterpriseRM.AI</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              At <span className="font-semibold">EnterpriseRM.AI</span>, we believe risk management should be simple, intelligent, and actionable. Our platform empowers enterprises to identify, assess, and mitigate risks with precision—using AI-driven insights and real-time analytics.
            </p>
          </div>

          {/* Mission & Bio */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                We combine the rigor of traditional enterprise risk management (ERM) frameworks with the agility of modern technology. From compliance monitoring to operational risk tracking, EnterpriseRM.AI provides a unified solution that adapts to your business environment.
              </p>

              <h3 className="text-lg font-semibold mb-2">What we build</h3>
              <p className="text-gray-300 mb-4">
                With features like automated assessments, customizable risk registers, compliance libraries, and predictive analytics, we help organizations move beyond static spreadsheets and into a future where risks are managed proactively.
              </p>

              <h3 className="text-lg font-semibold mb-2">Who we serve</h3>
              <p className="text-gray-400 mb-2">
                Enterprises, financial institutions, technology providers, and regulated industries seeking resilience, compliance, and operational excellence.
              </p>

              <p className="text-saas-orange font-semibold mt-4">EnterpriseRM.AI – Turning risk into opportunity, powered by intelligence.</p>
            </div>

            <div>
              <div className="bg-saas-darkGray rounded-xl p-6 border border-gray-800 card-shadow">
                <h3 className="text-xl font-semibold mb-3">EnterpriseRM.AI — Bio</h3>
                <p className="text-gray-300 mb-3">
                  EnterpriseRM.AI is an AI-powered enterprise risk management platform that helps organizations turn complexity into clarity. We bring together risk identification, compliance automation, and predictive analytics in one intelligent solution—so enterprises can manage uncertainty with confidence.
                </p>
                <p className="text-gray-300 mb-3">
                  Designed for regulated industries and fast-growing businesses, EnterpriseRM.AI replaces static spreadsheets with a proactive, data-driven approach to risk and compliance.
                </p>
                <p className="text-gray-300">
                  Our goal is simple: to make enterprise risk management smarter, scalable, and actionable.
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

          {/* Values / Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 card-shadow">
                <h4 className="font-semibold text-white mb-2">Security-first</h4>
                <p className="text-gray-400 text-sm">We design with security and compliance at the center of every feature.</p>
              </div>
              <div className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 card-shadow">
                <h4 className="font-semibold text-white mb-2">Transparency</h4>
                <p className="text-gray-400 text-sm">Auditability and clarity are integral to how we present risk and recommendations.</p>
              </div>
              <div className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 card-shadow">
                <h4 className="font-semibold text-white mb-2">Customer-first</h4>
                <p className="text-gray-400 text-sm">We build with customers — product decisions are led by real-world needs and outcomes.</p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          {/* <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <TeamCard image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" name="Asha Patel" role="CEO" />
              <TeamCard image="https://images.unsplash.com/photo-1545996124-4d1e6488f9b8?auto=format&fit=crop&w=400&q=80" name="Ravi Kumar" role="CTO" />
              <TeamCard image="https://images.unsplash.com/photo-1545996124-5a1f1fbb1a02?auto=format&fit=crop&w=400&q=80" name="Maya Rao" role="Head of Product" />
            </div>
          </div> */}

          {/* Partnership CTA */}
          <div className="bg-saas-darkGray rounded-xl p-8 border border-gray-800 card-shadow">
            <h3 className="text-xl font-semibold mb-4">Want to partner with us?</h3>
            <p className="text-gray-300 mb-6">
              We’re actively talking to partners for integrations, reselling and joint go-to-market. Reach out and let’s chat.
            </p>
            <a href="/contact" className="inline-block bg-saas-orange text-saas-black font-semibold px-5 py-3 rounded-lg">
              Contact Sales
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
