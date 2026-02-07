"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "../components/BottomNav";
import HorizontalScroll from "../components/HorizontalScroll";

export default function About() {
  return (
    <main className="min-h-screen font-sans bg-[#F9F7F2]">
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
              alt="Photographer background desktop"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Mobile Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1552168324-d612d77725e3"
              alt="Photographer background mobile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 " />
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </motion.div>

        {/* Logo - Top Center */}
        <motion.div 
          className="absolute top-8 md:top-12 left-0 right-0 z-20 flex justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
            <div className="text-md md:text-lg font-light tracking-[0.5em] bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">SYED NOUMAN</div>
        </motion.div>

        {/* Hero Content - Center */}
        
        {/* Bottom Navigation - Bottom Center */}
        <BottomNav />
      </section>

      {/* Story Header & Carousel Section */}
      <div className="bg-black">
        <header className="relative w-full grid place-content-center h-[40vh] md:h-[60vh]">
          <h1 className="text-4xl md:text-7xl font-light tracking-[0.2em] leading-tight text-[#F7E07E] text-center px-4 uppercase">
            Know the Story
          </h1>
        </header>
        <HorizontalScroll />
      </div>

      {/* Middle Text Section (Moved from Home) */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl leading-relaxed text-gray-800 font-light">
            Finding a home or renting a car isn&apos;t just about{" "}
            <span className="font-bold text-black">keys and contracts</span>
            —it&apos;s about setting the scene for all those{" "}
            <span className="font-serif italic text-3xl md:text-5xl">unforgettable moments</span>{" "}
            with family and friends. Let&apos;s get you the perfect place (or wheels)
            to make memories happen.
          </h2>
        </div>
      </section>

      {/* Bottom Content Section (Moved from Home) */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1500964757637-c85e8a162699"
              alt="Tigers"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center lg:pl-12">
            <h3 className="text-5xl font-medium text-black mb-2">Nouman</h3>
            <p className="font-serif italic text-[#4A5D88] text-xl mb-8">
              Professional Photographer
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 max-w-md">
              With a career rooted in Tremblant, I&apos;ve worn many hats—from ski school
              director to real estate developer, and now, broker and rental expert.
              My knowledge of the region and the real estate market, along with
              years of collaboration with Engel & Völkers, allows me to connect
              clients with spaces that capture the best of modern living in harmony
              with nature. Whether you&apos;re looking for a rental or a forever home,
              I&apos;m here to make it happen.
            </p>
            
            <div>
                <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                All Projects
                <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
