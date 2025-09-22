// src/pages/Contact.jsx
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"; // will show toast if you included Sonner

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" }
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Replace /api/contact with your real endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Message sent — we will reply within 1 business day.");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="py-16">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Contact <span className="gradient-text">Enterprise.AI</span></h1>
            <p className="text-gray-300 mb-6">
              Have a question about pricing, partnership, or integrations? Drop us a message and our team will get back to you.
            </p>

            <div className="bg-saas-darkGray rounded-xl p-6 border border-gray-800 card-shadow">
              <h3 className="font-semibold mb-2">Office</h3>
              <p className="text-gray-400 text-sm mb-4">
                8-2-231/23/1, Mothi Nagar, Hyderabad
              </p>
              <p className="text-gray-400 text-sm">hello@enterprise.ai</p>
              <p className="text-gray-400 text-sm">+91 90000 00000</p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Business hours</h4>
              <p className="text-gray-400 text-sm">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-saas-darkGray rounded-xl p-6 border border-gray-800 card-shadow space-y-4">
              <div>
                <label className="text-sm text-gray-300 block mb-1">Name</label>
                <input {...register("name")} className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-md outline-none focus:border-saas-orange" />
                {errors.name && <p className="text-rose-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-1">Email</label>
                <input {...register("email")} className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-md outline-none focus:border-saas-orange" />
                {errors.email && <p className="text-rose-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-1">Company (optional)</label>
                <input {...register("company")} className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-md outline-none focus:border-saas-orange" />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-1">Message</label>
                <textarea {...register("message")} rows={5} className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-md outline-none focus:border-saas-orange" />
                {errors.message && <p className="text-rose-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" disabled={submitting} className="bg-saas-orange text-saas-black font-semibold px-5 py-2 rounded-lg disabled:opacity-60">
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <p className="text-sm text-gray-400">We respond within 1 business day</p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
