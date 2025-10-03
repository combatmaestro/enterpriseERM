import { User } from "lucide-react";
import React from "react";

const grid = [
  {
    title: "Executives & Board Members",
    text: "Gain real-time insights into enterprise-wide risk exposure. Make informed strategic decisions. Ensure the organization stays resilient and compliant.",
  },
  {
    title: "Risk Managers",
    text: "Manage risk registers, assign responsibilities, and monitor remediation efficiently. Track progress and prioritize actions. Reduce operational surprises and increase confidence.",
  },
  {
    title: "Compliance Officers & Auditors",
    text: "Simplify regulatory reporting and demonstrate adherence with evidence-backed reporting. Save time during audits. Reduce compliance risk across the enterprise.",
  },
  {
    title: "Business Unit Leaders",
    text: "Understand and address risks specific to their operations. Collaborate effectively with enterprise risk managers. Maintain transparency and accountability across teams.",
  },
];

export default function WhoGains() {
  return (
    <section className="py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="sm:text-4xl text-3xl text-textPrimary max-sm:text-center font-bold mb-8">
          Who Gains from Enterprise.AI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {grid.map((g, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="sm:w-28 sm:h-14 max-sm:p-3 w-20 h-15 rounded-xl bg-white shadow-lg shadow-gray-200 flex items-center justify-center text-textPrimary">
                  <User />
                </div>
                <div>
                  <h4 className="font-semibold">{g.title}</h4>
                  <p className="text-sm text-secondary mt-2">{g.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
