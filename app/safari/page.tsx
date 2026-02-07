"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import BottomNav from "../components/BottomNav";
import HorizontalScroll from "../components/HorizontalScroll";

export default function Safari() {
  return (
    <ReactLenis root>
      <main className="w-full font-sans bg-black">
        {/* Hero Section */}
        <section className="relative h-[100dvh] w-full overflow-hidden">
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
                src="/safariland.jpeg"
                alt="Safari landscape desktop"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Mobile Image */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src="/safariport.jpeg"
                alt="Safari landscape mobile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0" />
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

          {/* Bottom Navigation - Bottom Center */}
          <BottomNav />
        </section>

        <div className="bg-black">
          {/* Section Title Header */}
          <header className="relative w-full grid place-content-center h-[60vh]">
            <h1
              className="text-4xl md:text-7xl font-light tracking-[0.2em] leading-tight text-[#F7E07E] text-center px-4 uppercase"
            >
              Safari with Nouman
            </h1>
          </header>
          
          <HorizontalScroll/>
        </div>
      </main>
    </ReactLenis>
  );
}
