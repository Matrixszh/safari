"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import BottomNav from "../components/BottomNav";

// Chapter Data
const chapters = [
  {
    id: "I",
    title: "Northern Giants",
    description: "Majestic rulers of the North. Silent wanderers of the misty forests, carrying the weight of ancient winters.",
    image: "/Chapter1.JPG", // Tiger/Elephant placeholder (using Tiger as safer bet for India context)
    heightClass: "h-[100vh] md:h-[100vh]",
    widthClass: "w-[100vw] md:w-[80vw]"
  },
  {
    id: "II",
    title: "The Terai Throne",
    description: "A daughter of Kishanpur’s most iconic lineage, photographed pushing into uncharted territory. Perched on a sandhill like a makeshift throne, she isn’t just resting, she is claiming her future.",
    image: "/Chapter2.JPG", // Tiger on hill/rock
    heightClass: "h-[50vh] md:h-[100vh]",
    widthClass: "w-[100vw] md:w-[40vw]"
  },
  {
    id: "III",
    title: "Kin and Kingdom",
    description: "Survival in the emerald deep. A study of the bloodline. Where the future of the Shivalik Hills finds its footing.",
    image: "/Chapter3.JPG", // Tiger cubs or family
    heightClass: "h-[70vh] md:h-[100vh]",
    widthClass: "w-[100vw] md:w-[40vw]"
  },
  {
    id: "IV",
    title: "The Spotted Ghost",
    description: "A game of shadows. Owner of the void. An elusive presence, brought to light.",
    image: "/Chapter4.JPG", // Default/fallback
    heightClass: "h-[60vh] md:h-[100vh]",
    widthClass: "w-[100vw] md:w-[40vw]",
    images: [
      "/Chapter4.JPG",
      "/Chapter4.4.JPG",
      "/Chapter4.2.JPG",
      "/Chapter4.3.JPG"
    ]
  },
  {
    id: "V",
    title: "Delicate Wings, Endless Sky",
    description: "Precision frames of India’s most vibrant life",
    image: "/Chapter5.JPG", // Bird
    heightClass: "h-[55vh] md:h-[75vh]",
    widthClass: "w-[100vw] md:w-[85vw]"
  },
  {
    id: "VI",
    title: "Delicate Wings, Endless Sky",
    description: "Precision frames of India’s most vibrant life",
    image: "/Chapter6.JPG", // Bird
    heightClass: "h-[55vh] md:h-[75vh]",
    widthClass: "w-[100vw] md:w-[85vw]"
  }

];

export default function WorksPage() {
  return (
    <ReactLenis root>
      <main className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[100dvh] w-full overflow-hidden">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0">
              <Image
                src="/workshero.JPG"
                alt="Northern Giants Hero"
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

          {/* Bottom Navigation */}
          <BottomNav />
        </section>

        {/* Page Title Header */}
        <header className="relative w-full grid place-content-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter text-[#F7E07E] drop-shadow-lg opacity-90">
              The Works
            </h1>
            <p className="mt-6 text-lg md:text-xl font-light tracking-widest text-gray-400 uppercase">
              A Journey Through the Wild
            </p>
          </motion.div>
        </header>

        {/* Chapters List */}
        <div className="pb-32 px-4 md:px-12 max-w-[1600px] mx-auto space-y-32 md:space-y-48">
          {chapters.map((chapter, index) => (
            <ChapterItem key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </main>
    </ReactLenis>
  );
}

function ChapterItem({ chapter, index }: { chapter: any; index: number }) {
  const ref = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Only run slideshow logic if chapter has multiple images
  useEffect(() => {
    if (!chapter.images || chapter.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % chapter.images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [chapter.images]);
  
  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center gap-12 min-h-[70vh]"
    >
      {/* Text Side */}
      <div className="w-full max-w-4xl mx-auto space-y-8 text-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="block text-8xl md:text-9xl font-serif text-[#222] absolute -top-16 left-1/2 -translate-x-1/2 -z-10 select-none">
            {chapter.id}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F7E07E] mb-6">
            <span className="text-sm tracking-widest text-gray-500 block mb-2 font-sans uppercase">Chapter {chapter.id}</span>
            {chapter.title}
          </h2>
          <div className="h-1 w-24 bg-[#F7E07E] mb-8 mx-auto" />
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            {chapter.description}
          </p>
        </motion.div>
      </div>

      {/* Image Side - Dynamic Dimensions */}
      <div className={`${chapter.widthClass || "w-[100vw]"} ${chapter.heightClass || "h-[60vh] md:h-[100vh]"} relative overflow-hidden group mx-auto rounded-sm`}>
        <AnimatePresence mode="wait">
          {chapter.images && chapter.images.length > 1 ? (
            <motion.div
              key={currentSlide}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={chapter.images[currentSlide]}
                alt={`${chapter.title} - Slide ${currentSlide + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
            </motion.div>
          ) : (
            <motion.div className="absolute inset-0 w-full h-full">
              <Image
                src={chapter.image}
                alt={chapter.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Dots Indicator for Slideshow */}
        {chapter.images && chapter.images.length > 1 && (
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
            {chapter.images.map((_: any, idx: number) => (
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
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}
