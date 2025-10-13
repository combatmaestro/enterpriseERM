import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    try {
      // Replace with your actual API endpoint
      const res = await fetch("https://cyber-vie-learning-platform-client-ten.vercel.app/user/admin/enterprise-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Network error");

      toast.success("Request sent! We'll get back to you soon.");
      setFormData({ email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#161C28] text-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left section */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <h3 className="text-3xl sm:text-4xl md:text-5xl/snug font-bold text-white leading-snug">
            Take Control of Risk <br /> Today
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed">
            With Enterprise.AI, risk management becomes a business enabler, not a
            burden. Streamline processes, stay compliant, and make smarter
            decisions across the enterprise. Start leveraging AI-driven insights
            to transform the way your organization manages risk.
          </p>
        </div>

        {/* Right section - Form */}
        <div className="flex justify-center">
          <div className="bg-[#222938] text-white p-6 md:p-8 lg:p-10 space-y-6 rounded-xl shadow-soft max-w-md w-full">
            <img
              src="Group 223.svg"
              className="object-contain w-full max-w-xs mx-auto h-24"
              alt="Illustration"
            />

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md px-4 py-3 text-sm bg-white text-slate-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A049E]/50"
                  placeholder="Enter your email"
                />
              </div>

              {/* ✅ Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md px-4 py-3 text-sm bg-white text-slate-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A049E]/50"
                  placeholder="+91 90000 00000"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md px-4 py-3 text-sm bg-white text-slate-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#1A049E]/50"
                  placeholder="Your message"
                />
              </div>

              <Button
                variant="default"
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 text-white font-semibold"
              >
                {loading ? "Sending..." : "Request Demo"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
