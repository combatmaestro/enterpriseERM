import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#161C28] text-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start"> 
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <h3 className="text-3xl sm:text-4xl md:text-5xl/snug font-bold text-white leading-snug">
            Take Control of Risk <br /> Today
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed">
            With Enterprise.AI, risk management becomes a business enabler, not a burden. 
            Streamline processes, stay compliant, and make smarter decisions across the enterprise. 
            Start leveraging AI-driven insights to transform the way your organization manages risk.
          </p>
        </div>

        {/* Right content */}
        <div className="flex justify-center">
          <div className="bg-[#222938] text-white p-6 md:p-8 lg:p-10 space-y-6 rounded-xl shadow-soft max-w-md w-full">
            <img src='Group 223.svg' className='object-contain w-full max-w-xs mx-auto h-24' alt="Illustration" />
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="Email" className="mb-1 text-sm font-medium">Email</label>
                <input 
                  id='Email' 
                  type="email"
                  className="w-full rounded-md px-4 py-3 text-sm bg-white text-slate-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A049E]/50" 
                  placeholder="Enter your email" 
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Message" className='mb-1 text-sm font-medium'>Message</label>
                <textarea 
                  id='Message' 
                  rows={4}
                  className="w-full rounded-md px-4 py-3 text-sm bg-white text-slate-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A049E]/50" 
                  placeholder="Your message"
                />
              </div>

              <Button variant="default" type="submit" className="w-full btn-primary py-3 text-white font-semibold">
                Request Demo
              </Button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
