"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BottomNav({ openDirection = "up" }: { openDirection?: "up" | "down" }) {
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
      className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center gap-4 text-white"
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
                  className={`absolute ${openDirection === 'up' ? 'bottom-full mb-4' : 'top-full mt-4'} w-32 md:w-40 aspect-video rounded-lg overflow-hidden border border-white/20 bg-black/50 backdrop-blur-sm`}
                  initial={{ opacity: 0, y: openDirection === 'up' ? 10 : -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: openDirection === 'up' ? 5 : -5, scale: 0.9 }}
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
      
      {/* Horizontal Line */}
      <motion.div 
        className="h-[1px] w-[60vw] md:w-[30vw] bg-amber-300/60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 1.0, ease: "easeInOut" }}
      />

      {/* Subtle Scroll Indicator */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.0 }}
      >
        <motion.span 
            className="text-[10px] tracking-[0.3em] uppercase"
            animate={{ 
                color: ["rgba(255,255,255,0.4)", "rgba(252,211,77,1)", "rgba(255,255,255,0.4)"] 
            }}
            transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
        >
            Scroll
        </motion.span>
      </motion.div>
    </motion.div>
  );
}