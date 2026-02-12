"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import BottomNav from "../components/BottomNav";

// Chapter Data
const chapters = [
  {
    id: "I",
    title: "Northern Giants",
    description: "Majestic rulers of the North. Silent wanderers of the misty forests, carrying the weight of ancient winters.",
    image: "https://images.unsplash.com/photo-1599596395377-50a30b422473?q=80&w=2940&auto=format&fit=crop" // Tiger/Elephant placeholder (using Tiger as safer bet for India context)
  },
  {
    id: "II",
    title: "The Terai Throne",
    description: "A daughter of Kishanpur’s most iconic lineage, photographed pushing into uncharted territory. Perched on a sandhill like a makeshift throne, she isn’t just resting, she is claiming her future.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=3022&auto=format&fit=crop" // Tiger on hill/rock
  },
  {
    id: "III",
    title: "Kin and Kingdom",
    description: "Survival in the emerald deep. A study of the bloodline. Where the future of the Shivalik Hills finds its footing.",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2940&auto=format&fit=crop" // Tiger cubs or family
  },
  {
    id: "IV",
    title: "The Spotted Ghost",
    description: "A game of shadows. Owner of the void. An elusive presence, brought to light.",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=2940&auto=format&fit=crop" // Leopard
  },
  {
    id: "V",
    title: "Delicate Wings, Endless Sky",
    description: "Precision frames of India’s most vibrant life",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2938&auto=format&fit=crop" // Bird
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
                src="https://images.unsplash.com/photo-1599596395377-50a30b422473?q=80&w=2940&auto=format&fit=crop"
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
            <div className="text-md md:text-lg font-light tracking-[0.5em] bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">SYED NOUMAN</div>
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 min-h-[70vh]`}
    >
      {/* Image Side */}
      <div className="w-full md:w-3/5 h-[50vh] md:h-[80vh] relative overflow-hidden rounded-sm group">
        <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
          <Image
            src={chapter.image}
            alt={chapter.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-2/5 space-y-8 text-center md:text-left relative">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="block text-8xl md:text-9xl font-serif text-[#222] absolute -top-20 -left-10 md:-left-20 -z-10 select-none">
            {chapter.id}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F7E07E] mb-6">
            <span className="text-sm tracking-widest text-gray-500 block mb-2 font-sans uppercase">Chapter {chapter.id}</span>
            {chapter.title}
          </h2>
          <div className="h-1 w-24 bg-[#F7E07E] mb-8 mx-auto md:mx-0" />
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            {chapter.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
