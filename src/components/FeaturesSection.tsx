import { Activity, Check, Command, PieChart } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Activity,
    title: "Unified Risk View",
    desc: "Get complete visibility by consolidating all risks into one platform.",
  },
  {
    icon: PieChart,
    title: "Smart Prioritization",
    desc: "Focus on critical risks with real-time scoring and heat maps.",
  },
  {
    icon: Command,
    title: "Seamless Collaboration",
    desc: "Keep teams aligned with workflows, alerts, and smooth communication.",
  },
  {
    icon: Check,
    title: "Regulatory Ready",
    desc: "Stay audit-ready with built-in compliance mapping across global standards.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="product" className="sm:py-16 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left side */}
        <div>
          <h2 className="sm:text-4xl/relaxed text-3xl max-sm:text-center font-semibold mb-4">
            Why Choose <br /> Enterprise.AI?
          </h2>
          <p className="text-secondary max-w-lg">
            Enterprise.AI empowers organizations to manage all types of
            enterprise risks in one unified platform with clarity and precision.
            From real-time insights to seamless collaboration and regulatory
            compliance, it helps your teams act smarter, faster, and more
            confidently.
          </p>
        </div>

        {/* Right side */}
        <div className="space-y-11">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="feature-card flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl p-2 bg-white shadow-lg shadow-gray-200 flex items-center justify-center text-primary">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-textPrimary">{f.title}</h3>
                  <p className="text-md text-secondary max-w-md">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
