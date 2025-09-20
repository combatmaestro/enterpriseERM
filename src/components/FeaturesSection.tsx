
import React from 'react';
import { Check, Search, Settings, User, Home, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-saas-orange" />,
    title: 'Unified Risk View',
    description: 'Consolidate financial, operational, compliance, cybersecurity,and strategic risks into a single, accessible platform.'
  },
  {
    icon: <Settings className="h-6 w-6 text-saas-orange" />,
    title: 'Data-Driven Prioritization',
    description: 'Use real-time scoring, trend analysis, and visual heat maps to focus on the risks that matter most.'
  },
  {
    icon: <User className="h-6 w-6 text-saas-orange" />,
    title: 'Built for Enterprise Collaboration',
    description: 'Enable seamless communication between risk managers, business units, and leadership with configurable workflows and approval processes.'
  },
  {
    icon: <Home className="h-6 w-6 text-saas-orange" />,
    title: 'Regulatory Alignment',
    description: 'Stay prepared for audits and regulatory reviews with compliance mapping across ISO 27001, SOC 2, HIPAA, NIST 800-53,FedRAMP, and more.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-saas-orange" />,
    title: 'Scalable and Secure',
    description: 'Whether you operate regionally or globally, Enterprise.AI scales with your business and meets the highest security standards.'
  },
  {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: 'Workflow Automation',
    description: 'Streamline risk assessments, incident reporting,approvals, and follow-up actions with automated workflows.'
  },
  {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: 'Risk Register',
    description: 'A centralized, structured repository for identifying, categorizing, and tracking risks across the enterprise.'
  },
   {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: 'Dynamic Dashboards and Analytics',
    description: 'A centralized, structured repository for identifying, categorizing, and tracking risks across the enterprise.'
  },
  {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: 'Compliance Management',
    description: 'Map risks directly to relevant controls, frameworks,and regulatory requirements.'
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-saas-black py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span> to Boost Your Business
          </h2>
          <p className="text-gray-400">
            Our comprehensive suite of tools will help you streamline operations 
            and achieve your business goals more efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
