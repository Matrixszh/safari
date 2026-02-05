"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "../components/BottomNav";

export default function Safari() {
  return (
    <main className="h-[100dvh] w-full overflow-hidden font-sans bg-black">
      <section className="relative h-full w-full overflow-hidden">
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

        {/* Hero Content - Center */}
      

        {/* Bottom Navigation - Bottom Center */}
        <BottomNav />
      </section>
    </main>
  );
}
