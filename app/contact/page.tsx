"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import BottomNav from "../components/BottomNav";
import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredDates: "",
    connectOverMeeting: false,
    focus: [] as string[]
  });

  const focusOptions = [
    "Tigers",
    "Leopards",
    "Raptors and birds",
    "Or, open to all wildlife"
  ];

  const handleFocusChange = (option: string) => {
    setFormData(prev => {
      const newFocus = prev.focus.includes(option)
        ? prev.focus.filter(item => item !== option)
        : [...prev.focus, option];
      return { ...prev, focus: newFocus };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Replace these with your actual EmailJS credentials
    // You need to create an account at https://www.emailjs.com/
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      // In a real scenario with valid credentials, you would uncomment this:
      /*
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          dates: formData.preferredDates,
          meeting_request: formData.connectOverMeeting ? "Yes" : "No",
          focus_areas: formData.focus.join(", "),
        },
        PUBLIC_KEY
      );
      */
      
      // Simulating network request for now since credentials are placeholders
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        preferredDates: "",
        connectOverMeeting: false,
        focus: []
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ReactLenis root>
      <main className="bg-white min-h-screen text-black font-sans overflow-x-hidden">
        {/* Safari-style Header */}
        <section className="relative w-full h-auto bg-black">
          <div className="relative h-[20vh]">
             <BottomNav openDirection="down" variant="header" />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
          
          {/* Quote Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32 max-w-4xl mx-auto"
          >
            <blockquote className="text-3xl md:text-5xl font-serif font-light leading-tight text-gray-800">
              "The wilderness holds answers to questions we have not yet learned to ask."
            </blockquote>
            <cite className="block mt-8 text-[#D4AF37] tracking-widest text-sm uppercase not-italic">
              — Nancy Newhall
            </cite>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">Let's Connect</h2>
                <div className="h-0.5 w-20 bg-[#D4AF37] mb-8" />
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Whether you're looking to book a safari, inquire about prints, or simply share a story from the wild, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-8 text-lg font-light">
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Email</span>
                  <a href="mailto:hello@syednouman.com" className="hover:text-[#D4AF37] transition-colors">hello@syednouman.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Location</span>
                  <span>Based in India • Available Worldwide</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2">Socials</span>
                  <div className="flex gap-6">
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">Twitter</a>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/5 p-8 md:p-12 rounded-sm border border-black/10"
            >
              <h3 className="text-2xl font-serif text-black mb-8">Booking Inquiry</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-600">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Preferred Dates */}
                <div className="space-y-2">
                  <label htmlFor="dates" className="text-xs uppercase tracking-widest text-gray-600">Preferred Dates</label>
                  <input
                    type="text"
                    id="dates"
                    value={formData.preferredDates}
                    onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 py-3 text-black focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="e.g., March 2024"
                  />
                </div>

                {/* Connect over Meeting */}
                <div className="flex items-start gap-4 pt-2">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="meeting"
                      checked={formData.connectOverMeeting}
                      onChange={(e) => setFormData({ ...formData, connectOverMeeting: e.target.checked })}
                      className="peer h-5 w-5 cursor-pointer appearance-none rounded-sm border border-black/30 checked:border-[#D4AF37] checked:bg-[#D4AF37] transition-all"
                    />
                    <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <label htmlFor="meeting" className="text-sm text-gray-600 cursor-pointer select-none">
                    Connect over a meeting
                    <span className="block text-xs text-gray-500 mt-1">We can schedule a video call to discuss your itinerary.</span>
                  </label>
                </div>

                {/* Focus Areas */}
                <div className="space-y-4 pt-4">
                  <label className="text-xs uppercase tracking-widest text-gray-600 block mb-4">Focus Areas (Select all that apply)</label>
                  <div className="grid grid-cols-1 gap-3">
                    {focusOptions.map((option) => (
                      <div key={option} className="flex items-center gap-3 group cursor-pointer" onClick={() => handleFocusChange(option)}>
                        <div className={`w-5 h-5 border rounded-sm flex items-center justify-center transition-all ${formData.focus.includes(option) ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-black/30 group-hover:border-black/50'}`}>
                          {formData.focus.includes(option) && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className={`text-sm transition-colors ${formData.focus.includes(option) ? 'text-black font-medium' : 'text-gray-600 group-hover:text-black'}`}>
                          {option}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-white font-medium tracking-widest uppercase py-4 mt-8 hover:bg-[#b89730] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-green-600 text-center text-sm mt-4">Message sent successfully! We'll be in touch soon.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 text-center text-sm mt-4">Something went wrong. Please try again later.</p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
