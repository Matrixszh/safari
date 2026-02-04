"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { 
      name: "HOME", 
      href: "/", 
      image: "https://images.unsplash.com/photo-1511497584788-876760111969",
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
          <div className="absolute inset-0 bg-black/40" />
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
          <div className="text-xl md:text-3xl font-bold tracking-[0.2em] bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[#8C6D1F] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">NOUMAN</div>
        </motion.div>

        {/* Hero Content - Center */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4 pb-[10vh] md:pb-[15vh]">
          <div className="overflow-hidden">
            <motion.h1 
              className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-extralight tracking-widest"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              THE STORY
            </motion.h1>
          </div>
          <motion.p 
            className="text-xs md:text-sm text-gray-300 tracking-wide font-light opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Capturing moments, creating memories
          </motion.p>
        </div>

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
            className="h-[1px] w-[60vw] md:w-[30vw] bg-amber-300"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.6, duration: 1.0, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

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
