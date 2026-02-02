"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen font-sans bg-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-bold tracking-[0.5em] text-white">
                NOUMAN
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/hero.jpeg"
              alt="Dark forest background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
          </motion.div>

          {/* Logo - Top Center */}
          <motion.div 
            className="absolute top-12 left-0 right-0 z-20 flex justify-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-3xl font-light tracking-[0.2em] text-white">NOUMAN</div>
          </motion.div>

          {/* Hero Content - Center */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pb-[15vh]">
            <div className="overflow-hidden">
              <motion.h1 
                className="mb-6 text-5xl font-extralight tracking-widest md:text-7xl lg:text-8xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                BEYOND THE LENS
              </motion.h1>
            </div>
            <motion.p 
              className="text-sm text-gray-300 tracking-wide font-light opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              description for the above given title
            </motion.p>
          </div>

          {/* Bottom Navigation - Bottom Center */}
          <motion.div 
            className="absolute bottom-16 left-0 right-0 z-20 flex flex-col items-center gap-8 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          >
            <nav className="flex items-center gap-12 text-xs font-medium tracking-widest">
              {["HOME", "ABOUT", "EXPLORE", "CONTACT"].map((item, index) => (
                <a 
                  key={item}
                  href={item === "HOME" ? "/" : item === "ABOUT" ? "/about" : "#"}
                  className="transition-all duration-300 hover:text-amber-400 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Line below menu */}
            <motion.div 
              className="h-[1px] w-[30vw] bg-amber-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 1.0, ease: "easeInOut" }}
            />
          </motion.div>
        </section>
      )}
    </main>
  );
}
