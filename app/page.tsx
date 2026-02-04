"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { 
      name: "HOME", 
      href: "/", 
      image: "/heroport.jpeg",
      desc: "Return to the beginning"
    },
    { 
      name: "ABOUT", 
      href: "/about", 
      image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699",
      desc: "Learn more about me"
    },
    { 
      name: "EXPLORE", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      desc: "Discover my work"
    },
    { 
      name: "CONTACT", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e",
      desc: "Get in touch"
    },
  ];

  useEffect(() => {
    // Simulate loading time for the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-[100dvh] w-full overflow-hidden font-sans bg-black">
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
              <h1 className="text-2xl md:text-4xl font-light tracking-[0.5em] bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[#8C6D1F] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                SYED NOUMAN
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
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
                src="/hero.jpeg"
                alt="Dark forest background desktop"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Mobile Image */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src="/heroport.jpeg"
                alt="Dark forest background mobile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0" />
            {/* Vignette effect */}
            <div className="absolute inset-0 " />
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
          <motion.div 
            className="absolute bottom-8 md:bottom-16 left-0 right-0 z-20 flex flex-col items-center gap-6 md:gap-8 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          >
            <nav className="relative flex items-center gap-6 md:gap-12 text-[10px] md:text-xs font-medium tracking-widest">
              {menuItems.map((item) => (
                <div key={item.name} className="relative flex flex-col items-center">
                  {/* Preview Card */}
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        className="absolute bottom-full mb-4 w-32 md:w-40 aspect-video rounded-lg overflow-hidden border border-white/20 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-2">
                          <span className="text-[8px] md:text-[10px] text-white/90 text-center font-light leading-tight">
                            {item.desc}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.a 
                    href={item.href}
                    className="relative py-2 transition-colors duration-300 hover:text-amber-400 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -5 }}
                  >
                    {item.name}
                  </motion.a>
                </div>
              ))}
            </nav>
            
            {/* Line below menu */}
            <motion.div 
              className="h-[1px] w-[60vw] md:w-[25vw] bg-amber-300"
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
