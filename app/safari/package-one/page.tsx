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

const HERO_SLIDES = [
  
  {
    src: "/SafariLand.JPG",
    alt: "Dudhwa Tiger Reserve landscape in golden light"
  },
  {
    src: "/RDhero.JPG",
    alt: "Rajaji Tiger Reserve terrain at dusk"
  }
];

const HERO_CAROUSEL_IMAGES = [
  {
    src: "/Dudhwa.JPG",
    alt: "Elephants moving through Rajaji riverbed at dusk"
  },
  {
    src: "/SafariLand.JPG",
    alt: "Tiger habitat in the Terai landscape"
  },
  {
    src: "/Safari2.JPG",
    alt: "Predator silhouette in golden light"
  }
];

export default function SafariPackageOnePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <ReactLenis root>
      <main className=" bg-gray-100 min-h-screen text-black font-sans overflow-x-hidden">
        <CardNav
          logo="/logo.png"
          logoAlt="Syed Nouman"
          items={navItems}
          baseColor="#ffffff"
          menuColor="#000000"
          buttonBgColor="#000000"
          buttonTextColor="#ffffff"
        />

        <section className="relative w-full min-h-[80vh] md:min-h-screen text-white">
          <div className="absolute inset-0">
            <AnimatePresence>
              <motion.div
                key={heroIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Image
                  src={HERO_SLIDES[heroIndex].src}
                  alt={HERO_SLIDES[heroIndex].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeroIndex(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === heroIndex
                    ? "w-10 bg-white"
                    : "w-4 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to hero slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-12 bg-gray-100 border-b border-black/5">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              THE northern strongholds
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight text-black">
              Rajaji &amp; Dudhwa
            </h1>
            <div className="space-y-5 text-lg md:text-xl font-light leading-relaxed text-gray-800">
              <p>
                Where the Shivaliks break, Rajaji Tiger Reserve emerges as a rugged corridor of dry deciduous forests and seasonal riverbeds. Defined by stone and silence, a landscape where migration paths of the Asian Elephants carve through the foothills of the North. Within these golden, dust-lit shadows, the leopards here find a fortress of rock and river.
              </p>
              <p>
                The heart of all Sal, Dudhwa Tiger Reserve stands as a massive, ancient expanse of the Terai’s alluvial landscape. Defined by moisture and mystery, a place where the Himalayan foothills meet the swamps, creating a permanent, ethereal haze. Within these deep indigo shadows, the giants of the subcontinent move undisturbed. A stronghold for the apex predators. These two reserves form the ultimate stage for the Quiet Arts.
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
                <h2 className="text-2xl md:text-3xl font-serif text-black">
                  Begin the Quiet Arts
                </h2>
                <p className="text-base md:text-lg font-light text-gray-700">
                  Share how you&apos;d like to connect for this circuit and I&apos;ll follow up with details, timings, and next steps.
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
                <div className="flex items-start gap-3">
                  <input
                    id="connect-meeting"
                    type="checkbox"
                    className="mt-1 h-4 w-4 border-gray-300 text-black focus:ring-[#D4AF37]"
                  />
                  <label htmlFor="connect-meeting" className="text-sm md:text-base text-gray-700">
                    Connect over a meeting
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Additional comments
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

            <div className="relative h-72 md:h-full min-h-[280px] rounded-sm overflow-hidden bg-black">
              <Image
                src={HERO_CAROUSEL_IMAGES[currentSlide].src}
                alt={HERO_CAROUSEL_IMAGES[currentSlide].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="text-xs md:text-sm text-white/80 tracking-[0.25em] uppercase">
                  Hero Shot {currentSlide + 1} / {HERO_CAROUSEL_IMAGES.length}
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
