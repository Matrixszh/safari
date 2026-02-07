"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BottomNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { 
      name: "HOME", 
      href: "/", 
      image: "/hero.jpeg",
      desc: "Return to the beginning"
    },
    { 
      name: "ABOUT", 
      href: "/about", 
      image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699",
      desc: "Learn more about me"
    },
    { 
      name: "SAFARI", 
      href: "/safari", 
      image: "/safariland.jpeg",
      desc: "Discover my work"
    },
    
    { 
      name: "WORK", 
      href: "/work", 
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e",
      desc: "Get in touch"
    },
    { 
      name: "CONTACT", 
      href: "#", 
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e",
      desc: "Get in touch"
    },
  ];

  return (
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
        className="h-[1px] w-[60vw] md:w-[30vw] bg-amber-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 1.0, ease: "easeInOut" }}
      />

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="mt-4 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.0 }}
      >
        <span className="text-[8px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <div className="relative h-12 w-[1px] overflow-hidden bg-white/10">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-amber-200/50"
            animate={{ y: [-24, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
