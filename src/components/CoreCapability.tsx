import React from "react";

const list = [
  {title: "Risk Register", text: "Centralize all enterprise risks in one structured repository. Track, categorize, and monitor risks efficiently. Assign ownership and keep your teams accountable."},
  {title: "Dynamic Dashboards", text: "Customizable dashboards provide both executive summaries and detailed operational insights. Visualize risk trends in real time. Make informed decisions quickly."},
  {title: "Workflow Automation", text: "Streamline assessments, incident reporting, approvals, and follow-ups with automated workflows. Reduce manual effort and human error. Ensure timely action across teams."},
  {title: "Compliance Management", text: "Map each risk directly to relevant regulations, frameworks, and internal controls. Stay audit-ready with accurate evidence. Simplify reporting across the organization."},
  {title: "Audit Support", text: "Generate detailed, audit-ready reports with one click. Save time and ensure consistency. Demonstrate compliance and accountability effortlessly."},
];

export default function CoreCapabilities(){
  return (
    <section className="py-12 md:py-20 relative  bg-gradient-to-tr from-[#1A049E]/10 via-white to-[#02C2EC]/10 p-6 flex items-center justify-center">
    <img src="Vector.svg" className="md:block hidden relative left-[92%] bottom-[300px]" width={120} height={120}/>
      <div className="max-w-7xl mx-auto px-6 gap-8 flex flex-col sm:gap-13">
        <h2 className="sm:text-3xl text-2xl text-textPrimary font-bold">Core Capabilities</h2>
        <ol className="space-y-6">
          {list.map((it, idx) => (
            <li key={idx} className="py-2 border-b border-gray-200">
              <h3 className="font-semibold text-textPrimary text-lg">{idx+1}. {it.title}</h3>
              <p className="text-secondary mt-2">{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    <img src="Vector.svg" className="md:block hidden rotate-180 relative right-[92%] top-[320px]" width={120} height={120}/>
    </section>
  );
}
