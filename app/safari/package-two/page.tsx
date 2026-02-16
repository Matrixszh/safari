"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
        label: "Rajaji & Dudhwa",
        href: "/safari/package-one",
        ariaLabel: "View Rajaji and Dudhwa safari package"
      },
      {
        label: "Tadoba & Pench",
        href: "/safari/package-two",
        ariaLabel: "View Tadoba and Pench safari package"
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

const HERO_CAROUSEL_IMAGES = [
   {
    src: "/TPL2.JPG",
    alt: "Predator silhouette in evening light"
  },
  
 
  {
    src: "/TPC1.JPG",
    alt: "Open grassland with layered trees"
  },
  
  {
    src: "/TPC2.JPG",
    alt: "Open grassland with layered trees"
  },
    {
    src: "/TPC.JPG",
    alt: "Riverbed track framed by trees"
  },
  {
    src: "/TPC3.JPG",
    alt: "Open grassland with layered trees"
  },
  {
    src: "/TPC4.JPG",
    alt: "Predator silhouette in evening light"
  },
 
  {
    src: "/TPC5.JPG",
    alt: "Predator silhouette in evening light"
  }
];

export default function SafariPackageTwoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <ReactLenis root>
      <main className="bg-gray-100 min-h-screen text-black font-sans overflow-x-hidden">
        <section className="relative w-full min-h-[50vh] md:min-h-screen text-white">
          <div className="absolute inset-0">
            <Image
              src="/heroland3.JPG"
              alt="Riverine grassland safari"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 pt-4">
            <CardNav
              logo="/logo.png"
              logoAlt="Syed Nouman"
              items={navItems}
              baseColor="#ffffff"
              menuColor="#000000"
              buttonBgColor="#000000"
              buttonTextColor="#ffffff"
              className="top-0 md:top-0"
            />
          </div>

        </section>

        <section className="py-12 md:py-16 px-4 md:px-12 bg-gray-100 border-b border-black/5">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              the central highlands
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight text-black">
              Tadoba &amp; Pench
            </h1>
            <div className="space-y-5 text-lg md:text-xl font-light leading-relaxed text-gray-800">
              <p>
                Land of Teak and Tiger, Tadoba stands as a rugged stronghold of deciduous hills and expansive lakebeds. This sun-drenched terrain flows into the teak-canopied ridges of Pench; the legendary Satpura range. From high-contrast shadows to life-giving riverbanks, these reserves offer a masterclass in tracking through golden light and the iron-rich dust of India’s central heartland.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-12 bg-gray-100 border-b border-black/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 border border-black/5 rounded-sm p-6 md:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent">
                  Begin the Quiet Arts
                </h2>
                <p className="text-base md:text-lg font-light text-gray-700">
                  Please fill out this form to get in touch with us. We usually respond with an 8-day itinerary within 48 hours.
                </p>
              </div>

              <div className="space-y-4">
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
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Preferred dates
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="date"
                      aria-label="Preferred start date"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                    <input
                      type="date"
                      aria-label="Preferred end date"
                      className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="package-two-connect-meeting"
                    type="checkbox"
                    className="mt-1 h-4 w-4 border-gray-300 text-black focus:ring-[#D4AF37]"
                  />
                  <label htmlFor="package-two-connect-meeting" className="text-sm md:text-base text-gray-700">
                    Connect over a meeting
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Additional Comments
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-sm px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
                    placeholder="Share any context, preferences, or questions you have in mind."
                  />
                </div>
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

            <div className="relative h-150 md:h-full min-h-[280px] rounded-sm overflow-hidden bg-black">
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) {
                        setCurrentSlide((prev) =>
                          (prev + 1) % HERO_CAROUSEL_IMAGES.length
                        );
                      } else if (info.offset.x > 50) {
                        setCurrentSlide((prev) =>
                          prev === 0
                            ? HERO_CAROUSEL_IMAGES.length - 1
                            : prev - 1
                        );
                      }
                    }}
                  >
                    <Image
                      src={HERO_CAROUSEL_IMAGES[currentSlide].src}
                      alt={HERO_CAROUSEL_IMAGES[currentSlide].alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="text-xs md:text-sm text-white/80 tracking-[0.25em] uppercase">
                  {currentSlide + 1} / {HERO_CAROUSEL_IMAGES.length}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? HERO_CAROUSEL_IMAGES.length - 1 : prev - 1
                      )
                    }
                    className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center text-xs transition-colors"
                    aria-label="Previous hero image"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        (prev + 1) % HERO_CAROUSEL_IMAGES.length
                      )
                    }
                    className="h-8 w-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center text-xs transition-colors"
                    aria-label="Next hero image"
                  >
                    ›
                  </button>
                </div>
              </div>

              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {HERO_CAROUSEL_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-white"
                        : "w-3 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to hero image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
