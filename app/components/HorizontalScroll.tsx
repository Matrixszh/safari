"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "Tracking the Giants",
    description: "Join me in the field for a private safari experience centered on patience and a shared appreciation for the wild. Whether you are behind a lens or simply there to witness the North’s great predators, these trips are designed for those who want to spend time truly observing the rhythm of the forest.",
    image: "/safariland.jpeg"
  },
  {
    id: 2,
    title: "The Approach",
    content: (
      <ul className="space-y-6 text-left max-w-2xl mx-auto">
        <li className="flex flex-col gap-1 border-l-2 border-[#F7E07E] pl-4">
          <strong className="text-[#F7E07E] text-xl tracking-wider">In-Depth Tracking</strong>
          <span className="text-white/80 text-lg font-light">We use years of field craft to track the region’s key species, focusing primarily on the apex predators.</span>
        </li>
        <li className="flex flex-col gap-1 border-l-2 border-[#F7E07E] pl-4">
          <strong className="text-[#F7E07E] text-xl tracking-wider">Ecosystem Perspective</strong>
          <span className="text-white/80 text-lg font-light">We value every layer of the landscape, from raptors to the smaller details that complete a wilderness story.</span>
        </li>
        <li className="flex flex-col gap-1 border-l-2 border-[#F7E07E] pl-4">
          <strong className="text-[#F7E07E] text-xl tracking-wider">Strategic Positioning</strong>
          <span className="text-white/80 text-lg font-light">Every sighting is approached with light and angles in mind for the optimal shot.</span>
        </li>
      </ul>
    ),
    image: "/safariport.jpeg"
  },
  {
    id: 3,
    title: "What to Expect",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/5 p-6 backdrop-blur-sm border border-white/10 rounded-sm">
          <strong className="block text-[#F7E07E] text-2xl mb-2 tracking-wide">Private Vehicles</strong>
          <span className="text-white/80 text-lg font-light leading-relaxed">Your safari is custom-tailored to your pace. We don't rush sightings and prioritize quiet areas whenever possible.</span>
        </div>
        <div className="bg-white/5 p-6 backdrop-blur-sm border border-white/10 rounded-sm">
          <strong className="block text-[#F7E07E] text-2xl mb-2 tracking-wide">Authenticity</strong>
          <span className="text-white/80 text-lg font-light leading-relaxed">No guarantees, just dedicated tracking and a commitment to being in the right place when the moment happens.</span>
        </div>
      </div>
    ),
    image: "/safariland.jpeg"
  }
];

export default function HorizontalScroll() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [Autoplay({ delay: 8000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('scroll', onScroll);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi, onSelect, onScroll]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <section className="relative w-full h-[90vh] bg-black overflow-hidden group">
      <div className="absolute inset-0 z-0">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full flex">
            {CAROUSEL_ITEMS.map((item, index) => (
              <div key={item.id} className="embla__slide relative flex-[0_0_100%] h-full min-w-0">
                {/* Parallax Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                   <motion.div 
                     className="relative w-full h-full"
                     initial={{ scale: 1.2 }}
                     animate={{ scale: index === selectedIndex ? 1 : 1.2 }}
                     transition={{ duration: 8, ease: "easeOut" }}
                   >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-40 transition-opacity duration-1000"
                      priority={item.id === 1}
                    />
                   </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-24 text-center">
                  <AnimatePresence mode="wait">
                    {index === selectedIndex && (
                      <motion.div
                        key={`content-${item.id}`}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-5xl"
                      >
                        <h2 className="text-4xl md:text-8xl font-thin mb-8 md:mb-16 tracking-[0.1em] text-white uppercase mix-blend-overlay">
                          {item.title}
                        </h2>
                        
                        {item.description ? (
                          <p className="text-white/80 text-lg md:text-2xl font-light leading-loose max-w-3xl mx-auto">
                            {item.description}
                          </p>
                        ) : (
                          <div className="text-white/80 text-lg md:text-xl font-light">
                            {item.content}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Progress Bar Navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {CAROUSEL_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`group relative h-1 transition-all duration-500 ${
              index === selectedIndex ? "w-16 bg-[#F7E07E]" : "w-8 bg-white/20 hover:bg-white/40"
            }`}
          >
            <span className="absolute -top-4 left-0 w-full text-center text-[10px] text-white/0 group-hover:text-white/70 transition-all duration-300 uppercase tracking-widest">
              0{index + 1}
            </span>
          </button>
        ))}
      </div>
      
      {/* Decorative Side Lines */}
      <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
      <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

    </section>
  );
}
