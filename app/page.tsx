"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import BottomNav from "./components/BottomNav";
import HeroSlideshow from "./components/HeroSlideshow";
import ButtonCreativeRight from "./components/ButtonF";

export default function Home() {
  useEffect(() => {
    // Clean up
  }, []);

  return (
    <main className="w-full font-sans bg-black">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Slideshow */}
        <HeroSlideshow />

        {/* Logo - Top Center */}
          <motion.div 
            className="absolute top-8 md:top-12 left-0 right-0 z-20 flex justify-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-48 h-12 md:w-64 md:h-16">
              <Image
                src="/logo.png"
                alt="Syed Nouman"
                fill
                className="object-contain drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </motion.div>

          {/* Hero Content - Center */}
          

          {/* Bottom Navigation - Bottom Center */}
          <BottomNav />
      </section>

      {/* Quote Section */}
      <section className="bg-gray-100 py-32 px-6 flex flex-col items-center justify-center min-h-[50vh]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-8xl mx-auto text-center space-y-12"
        >
          <p className="text-lg md:text-2xl lg:text-2xl font-light leading-relaxed bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent ">
            Explore how Syed Nouman’s love for childhood wildlife transitioned into professional art.
          </p>
          
          <div className="flex justify-center">
            <ButtonCreativeRight label="About Me" href="/about" />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
