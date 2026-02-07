"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import BottomNav from "../components/BottomNav";
import SafariTopic from "../components/SafariTopic";

// Mock Data for Images
const TOPIC_1_IMAGES = [
  { 
    src: "/safariland.jpeg", 
    alt: "Lion in Grass",
    settings: { iso: "400", aperture: "f/2.8", shutter: "1/1000s" }
  },
  { 
    src: "/safariport.jpeg", 
    alt: "Leopard Portrait",
    settings: { iso: "800", aperture: "f/4.0", shutter: "1/500s" }
  }
];

const TOPIC_2_IMAGES = [
  { 
    src: "/safariport.jpeg", 
    alt: "Tracker Looking",
    settings: { iso: "200", aperture: "f/5.6", shutter: "1/2000s" }
  },
  { 
    src: "/safariland.jpeg", 
    alt: "Vehicle Approach",
    settings: { iso: "100", aperture: "f/8.0", shutter: "1/250s" }
  }
];

const TOPIC_3_IMAGES = [
  { 
    src: "/safariland.jpeg", 
    alt: "Sunrise Savannah",
    settings: { iso: "640", aperture: "f/4.0", shutter: "1/800s" }
  },
  { 
    src: "/safariport.jpeg", 
    alt: "Elephant Herd",
    settings: { iso: "500", aperture: "f/5.6", shutter: "1/1200s" }
  }
];

export default function Safari() {
  return (
    <ReactLenis root>
      <main className="w-full font-sans bg-white">
        {/* Hero Section */}
        <section className="relative h-[100dvh] w-full overflow-hidden">
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
                src="/safariland.jpeg"
                alt="Safari landscape desktop"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Mobile Image */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src="/safariport.jpeg"
                alt="Safari landscape mobile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Dark overlay to ensure text readability */}
            <div className="absolute inset-0" />
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

          {/* Bottom Navigation - Bottom Center */}
          <BottomNav />
        </section>

        <div className="bg-white">
          {/* Section Title Header */}
          <header className="relative w-full grid place-content-center py-12 h-full">
            <h1
              className="text-4xl md:text-7xl font-light tracking-[0.2em] leading-tight bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent text-center px-4 uppercase drop-shadow-sm"
            >
              Safari with Nouman
            </h1>
          </header>
          
          {/* Topics */}
          <div className="flex flex-col">
            {/* Topic 1: Tracking the Giants */}
            <SafariTopic 
              title="Tracking the Giants" 
              images={TOPIC_1_IMAGES}
            >
              <p>
                Join me in the field for a private safari experience centered on patience and a shared appreciation for the wild. Whether you are behind a lens or simply there to witness the North’s great predators, these trips are designed for those who want to spend time truly observing the rhythm of the forest.
              </p>
            </SafariTopic>

            {/* Topic 2: The Approach */}
            <SafariTopic 
              title="The Approach" 
              images={TOPIC_2_IMAGES}
            >
              <ul className="space-y-6 text-left max-w-2xl mx-auto">
                <li className="flex flex-col gap-1 border-l-2 border-[#F7E07E] pl-4">
                  <strong className="text-[#F7E07E] text-xl tracking-wider">In-Depth Tracking</strong>
                  <span className="text-gray-800 text-lg font-light">We use years of field craft to track the region’s key species, focusing primarily on the apex predators.</span>
                </li>
                <li className="flex flex-col gap-1 border-l-2 border-[#F7E07E] pl-4">
                  <strong className="text-[#F7E07E] text-xl tracking-wider">Ecosystem Perspective</strong>
                  <span className="text-gray-800 text-lg font-light">We value every layer of the landscape, from raptors to the smaller details that complete a wilderness story.</span>
                </li>
                <li className="flex flex-col gap-1 border-l-2 border-[#F7E07E] pl-4">
                  <strong className="text-[#F7E07E] text-xl tracking-wider">Strategic Positioning</strong>
                  <span className="text-gray-800 text-lg font-light">Every sighting is approached with light and angles in mind for the optimal shot.</span>
                </li>
              </ul>
            </SafariTopic>

            {/* Topic 3: What to Expect */}
            <SafariTopic 
              title="What to Expect" 
              images={TOPIC_3_IMAGES}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-gray-50 p-6 border border-black/5 rounded-sm shadow-sm">
                  <strong className="block text-[#F7E07E] text-2xl mb-2 tracking-wide">Private Vehicles</strong>
                  <span className="text-gray-800 text-lg font-light leading-relaxed">Your safari is custom-tailored to your pace. We don't rush sightings and prioritize quiet areas whenever possible.</span>
                </div>
                <div className="bg-gray-50 p-6 border border-black/5 rounded-sm shadow-sm">
                  <strong className="block text-[#F7E07E] text-2xl mb-2 tracking-wide">Authenticity</strong>
                  <span className="text-gray-800 text-lg font-light leading-relaxed">No guarantees, just dedicated tracking and a commitment to being in the right place when the moment happens.</span>
                </div>
              </div>
            </SafariTopic>
          </div>
        </div>
      </main>
    </ReactLenis>
  );
}
