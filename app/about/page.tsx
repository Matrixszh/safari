"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CardNav, { CardNavItem } from "../../components/CardNav";
import FramerMoveableThumbnails from "../components/MovableCarousal";
import ButtonCreativeRight from "../components/ButtonF";

const SLIDESHOW_IMAGES = [
  "/About3.JPG",
  "/Aboutme4.JPG",
  "/Aboutme5.jpg"
];

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

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-5 min-h-screen font-sans bg-white">
      <CardNav
        logo="/logo.png"
        logoAlt="Syed Nouman"
        items={navItems}
        baseColor="#ffffff"
        menuColor="#000000"
        buttonBgColor="#000000"
        buttonTextColor="#ffffff"
      />

      {/* Page Title Header */}
      <header className="relative w-full grid place-content-center py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent drop-shadow-sm opacity-90">
            The Story
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light tracking-widest text-gray-600 uppercase">
            the man behind the lens
          </p>
        </motion.div>
      </header>

      {/* Story Header & Carousel Section */}
      <div className="bg-white">
        {/* Redesigned About Section - Text Left, Image Right */}
        <div className="pt-10 max-w-[1400px] mx-auto px-6 pb-24 md:pb-32">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center">
            {/* Image Slideshow (Right on Desktop) */}
            <div className="w-full md:w-1/2 relative h-[600px] md:h-[700px]">
              <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src={SLIDESHOW_IMAGES[currentSlide]}
                      alt="Syed Nouman Portrait"
                      fill
                      className="object-cover"
                      priority={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                  {SLIDESHOW_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content (Left on Desktop) */}
            <div className="w-full md:w-1/2 space-y-8 md:space-y-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide text-black uppercase mb-8 drop-shadow-sm border-b-3 border-[#F7E07E] inline-block pb-2">
  About Me
</h2>
                <div className="space-y-6 text-lg md:text-xl font-light text-gray-800 leading-relaxed">
                  <p>
                    Specializing in the apex predators of the Indian subcontinent, Syed Nouman is a professional wildlife photographer whose work is built on years of fieldcraft and quiet persistence. His practice moves beyond traditional documentation, leaning into a style of magical realism where light and subject converge to create images that feel both grounded and unreal.
                  </p>
                  <p>
                    
By focusing on transient elements and natural behaviour, Syed captures rare, intimate glimpses into the lives of India’s tigers and the ancient wild.
                  </p>
                  <p>
                    <span className="font-bold ">Note on the Craft:</span> All images are captured in-camera using natural light. No digital composites are used to create the "unreal" atmospheres; they are simply the result of waiting for the moment reality tilts.
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm md:text-base tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
                      Conservation Statement
                    </h3>
                    <p>
                      Wildlife photography comes with responsibility. I follow ethical guidelines to ensure animals are never stressed, baited, or disturbed for the sake of an image. If my work encourages even one person to care more deeply about wildlife and conservation, it’s doing its job.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <ButtonCreativeRight label="My Work" href="/work" />
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
