"use client";
import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface ImageWithSettings {
  src: string;
  alt: string;
  settings: {
    iso: string;
    aperture: string;
    shutter: string;
  };
}

interface SafariTopicProps {
  title: string;
  children: React.ReactNode;
  images: ImageWithSettings[];
}

export default function SafariTopic({ title, children, images }: SafariTopicProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleSlideClick = (index: number) => {
    if (activeSlide === index) {
        setActiveSlide(null);
        emblaApi?.plugins()?.autoplay.play();
    } else {
        setActiveSlide(index);
        emblaApi?.plugins()?.autoplay.stop();
    }
  };

  return (
    <section className="w-full bg-white/80 py-12 border-b border-y-amber-400 last:border-0">
      <div className="max-w-7xl mx-auto px-4 md:px-24">
        
        {/* Content Section */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-[0.1em] text-black uppercase">
              {title}
            </h2>
            <div className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        </div>

        {/* Carousel Section */}
        <motion.div 
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-sm border border-black/10 bg-gray-50" ref={emblaRef}>
            <div className="flex">
              {images.map((item, index) => (
                <div 
                    key={index} 
                    className="relative flex-[0_0_100%] min-w-0 aspect-[16/9] md:aspect-[21/9] group cursor-pointer"
                    onClick={() => handleSlideClick(index)}
                >
                   <Image
                      src={item.src}
                      alt={item.alt || `${title} - Image ${index + 1}`}
                      fill
                      className={`object-cover transition-all duration-500 ${activeSlide === index ? 'brightness-50 blur-[2px]' : 'group-hover:brightness-50 group-hover:blur-[2px]'}`}
                    />
                   
                   {/* Camera Settings Overlay */}
                   <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeSlide === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <div className="bg-black/60 backdrop-blur-md border border-[#F7E07E]/30 p-6 md:p-8 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[#F7E07E] text-xs uppercase tracking-[0.2em] mb-2">Camera Settings</span>
                                <div className="flex items-center gap-6 text-white font-light text-lg md:text-xl tracking-wide">
                                    <div className="flex flex-col items-center">
                                        <span className="text-white/50 text-[10px] uppercase tracking-widest mb-1">ISO</span>
                                        {item.settings.iso}
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/20" />
                                    <div className="flex flex-col items-center">
                                        <span className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Aperture</span>
                                        {item.settings.aperture}
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/20" />
                                    <div className="flex flex-col items-center">
                                        <span className="text-white/50 text-[10px] uppercase tracking-widest mb-1">Shutter</span>
                                        {item.settings.shutter}
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`group relative h-1 transition-all duration-500 ${
                  index === selectedIndex ? "w-16 bg-[#F7E07E]" : "w-8 bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
