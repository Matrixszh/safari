"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Slide {
  id: number;
  desktopSrc: string;
  mobileSrc: string;
  quote: string;
  author: string;
}

const slides: Slide[] = [
  {
    id: 1,
    desktopSrc: "/heroland.JPG",
    mobileSrc: "/heroport.JPG",
    quote: "In every walk with nature one receives far more than he seeks.",
    author: "John Muir"
  },
  {
    id: 2,
    desktopSrc: "/heroland3.JPG",
    mobileSrc: "/heroport3.JPG",
    quote: "The earth has music for those who listen.",
    author: "Shakespeare"
  },
  {
    id: 3,
    desktopSrc: "/workshero.JPG",
    mobileSrc: "/workshero.JPG",
    quote: "Wilderness is not a luxury but a necessity of the human spirit.",
    author: "Edward Abbey"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full group">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slides[currentSlide].id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src={slides[currentSlide].desktopSrc}
              alt="Hero Slideshow Desktop"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Mobile Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src={slides[currentSlide].mobileSrc}
              alt="Hero Slideshow Mobile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-radial-gradient-vignette opacity-60" />
        </motion.div>
      </AnimatePresence>

      {/* Quote Overlay - Reveals on Hover */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="max-w-4xl px-6 text-center transition-all duration-700 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-2xl md:text-5xl font-light text-white leading-tight tracking-wide italic mb-6 drop-shadow-lg">
            "{slides[currentSlide].quote}"
          </p>
          <p className="text-sm md:text-lg text-[#F7E07E] tracking-[0.2em] uppercase font-medium">
            — {slides[currentSlide].author}
          </p>
        </div>
      </div>
    </div>
  );
}
