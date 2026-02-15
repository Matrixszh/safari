 "use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import CardNav, { CardNavItem } from "../../../components/CardNav";

const navItems: CardNavItem[] = [
  {
    label: "Home",
    bgColor: "#ffffff",
    textColor: "#111827",
    links: [
      { label: "Home", href: "/", ariaLabel: "Go to home page" }
    ]
  },
  {
    label: "About",
    bgColor: "#f9fafb",
    textColor: "#111827",
    links: [
      { label: "About", href: "/about", ariaLabel: "Learn about me" }
    ]
  },
  {
    label: "Works",
    bgColor: "#f3f4f6",
    textColor: "#111827",
    links: [
      { label: "Works", href: "/work", ariaLabel: "View my work" }
    ]
  },
  {
    label: "Safari",
    bgColor: "#e5e7eb",
    textColor: "#111827",
    links: [
      {
        label: "Safari",
        href: "/safari",
        ariaLabel: "Go to safari page"
      },
      {
        label: "Terai Predator Circuit",
        href: "/safari/package-one",
        ariaLabel: "View Terai Predator Circuit safari package"
      },
      {
        label: "Rivers & Grasslands Route",
        href: "/safari/package-two",
        ariaLabel: "View Rivers and Grasslands Route safari package"
      }
    ]
  },
  {
    label: "Contact",
    bgColor: "#fefce8",
    textColor: "#111827",
    links: [
      { label: "Contact", href: "/contact", ariaLabel: "Get in touch" }
    ]
  }
];

export default function SafariPackageTwoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <ReactLenis root>
      <main className="pt-5 bg-white min-h-screen text-black font-sans overflow-x-hidden">
        <CardNav
          logo="/logo.png"
          logoAlt="Syed Nouman"
          items={navItems}
          baseColor="#ffffff"
          menuColor="#000000"
          buttonBgColor="#000000"
          buttonTextColor="#ffffff"
        />

        <section className="relative w-full bg-black text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-12 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <span className="text-xs tracking-[0.3em] uppercase text-[#F7E07E]">
                  Safari Package
                </span>
                <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                  Rivers & Grasslands Route
                </h1>
                <p className="text-lg md:text-xl font-light text-gray-200">
                  A route built around contrast: quiet river edges, open meadows, and deep forest corridors, stitched into one continuous story.
                </p>
              </div>
              <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden">
                <Image
                  src="/Safari2.2.JPG"
                  alt="Riverine grassland safari"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-black">
              Introduction
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
              This route is for guests who enjoy variation in mood and habitat. Instead of anchoring to a single landscape, we move through different zones so you experience how the same species behaves and appears in changing light and terrain.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-black">
              What these parks have to offer
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
              Expect broad riverbeds, misty grasslands, and forest edges that attract both predators and prey. Morning and evening transitions are particularly rewarding here, with strong opportunities for silhouettes, backlit frames, and layered compositions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-black">
              What I offer in this safari package
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
              We plan each drive to make the most of changing light, selecting routes that amplify the character of each park. You receive field guidance on pacing, lens choice, and how to adapt your visual approach as the landscapes shift beneath the same sky.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 md:px-12 bg-gray-50 border-t border-black/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-black">
                Register your interest
              </h2>
              <p className="text-lg font-light text-gray-700">
                Send through a brief note below and I&apos;ll respond with suggested dates, park combinations, and how this route can be tailored to you.
              </p>
            </motion.div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Preferred dates or window
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  placeholder="For example: Early March, or a specific week"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Anything specific you are hoping to focus on
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
                  placeholder="Species, photographic themes, or any accessibility considerations."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-sm bg-black text-white text-sm md:text-base tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit enquiry"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
