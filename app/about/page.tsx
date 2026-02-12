"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "../components/BottomNav";
import FramerMoveableThumbnails from "../components/MovableCarousal";
import ButtonCreativeRight from "../components/ButtonF";

const SLIDESHOW_IMAGES = [
  "/About.JPG",
  "/About2.JPG",
  "/About3.JPG"
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
    <main className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-auto bg-black">
        {/* Logo - Top Center */}
        <motion.div 
          className="absolute top-8 md:top-12 left-0 right-0 z-20 flex justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
        </motion.div>

        {/* Bottom Navigation */}
        <div className="relative h-[20vh]">
            <BottomNav openDirection="down" />
        </div>
      </section>

      {/* Story Header & Carousel Section */}
      <div className="bg-white">
     
        
        {/* Redesigned About Section - Image Left, Text Right */}
        <div className="pt-20 max-w-[1400px] mx-auto px-6 pb-24 md:pb-32">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
            {/* Left: Image Slideshow */}
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

            {/* Right: Content */}
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
                </div>
              </div>
              <div className="pt-8">
                <ButtonCreativeRight label="My Work" href="/work" />
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Middle Text Section (Moved from Home) */}
      <section className="px-6 py-24 md:py-32 bg-white">
        <div className="items-center mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl leading-relaxed text-gray-800 font-light mb-12">
            Finding a home or renting a car isn&apos;t just about{" "}
            <span className="font-bold text-[#F7E07E]">keys and contracts</span>
            —it&apos;s about setting the scene for all those{" "}
            <span className="font-serif italic text-3xl md:text-5xl text-black">unforgettable moments</span>{" "}
            with family and friends. Let&apos;s get you the perfect place (or wheels)
            to make memories happen.
          </h2>
        
          <div className="flex justify-center">
            <ButtonCreativeRight label="Contact" href="/work" />
          </div>
            
        </div>
        
      </section>

      {/* Bottom Content Section (Moved from Home) */}
      <section className="">
        <FramerMoveableThumbnails/>
      </section>
    </main>
  );
}
