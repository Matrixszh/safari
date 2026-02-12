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
      <main className="w-full font-sans bg-black">
        {/* Hero Section */}
        <section className="relative w-full h-auto bg-black">
          {/* Bottom Navigation */}
          <div className="relative h-[20vh]">
             <BottomNav openDirection="down" />
          </div>
        </section>
        <div className="bg-white">
          {/* Section Title Header */}
          <header className="relative w-full grid place-content-center pt-12 h-full">
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

          {/* Strategic Wins Section */}
          <section className="py-24 bg-white text-gray-900 px-4 md:px-12 border-t border-black/5">
            <header className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent drop-shadow-sm">Strategic Wins</h2>
              <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto" />
            </header>

            <div className="max-w-7xl mx-auto space-y-32">
              {/* Case Study 1: The Solitary Female */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#D4AF37] pl-6">
                    The Solitary Female
                  </h3>
                  <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Scenario</strong>
                      <p>A solitary female tiger moving through dense cover in the early morning mist.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Positioning</strong>
                      <p>Rather than tailing her closely, we gave her space and time, predicting her trajectory toward a specific opening on the road. Knowing her likely walking direction, we chose to reverse out and hold a wide, clean angle 20 minutes before she arrived.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Result</strong>
                      <p>Because we were the only Gypsy and remained quiet, she emerged onto the path with total confidence. We were rewarded with a perfectly centered portrait, a clean shot in the signature blue Terai region.</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden group shadow-lg">
                  <Image 
                    src="/safariland.jpeg" 
                    alt="Solitary Female Tiger" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              {/* Case Study 2: Scissor and Cubs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div className="order-1 md:order-2 space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#D4AF37] pl-6">
                    Scissor & Her Cubs
                  </h3>
                  <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Scenario</strong>
                      <p>Reports from a morning safari suggested a mother and her cubs were moving through a specific territory.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Positioning</strong>
                      <p>We chose a specific route to intercept them head-on. This was only possible by anticipating their direction of movement. A calculation rooted in a deep understanding of the territory and knowing this mother named ‘Scissor’ since she was a cub herself.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Result</strong>
                      <p>We were the first Gypsy on the scene, allowing us to capture clean images while others were still trailing behind us. This uncompromised positioning gave us the time and stillness to make beautiful, printable family portraits.</p>
                    </div>
                  </div>
                </div>
                <div className="order-2 md:order-1 relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden group shadow-lg">
                  <Image 
                    src="/safariport.jpeg" 
                    alt="Scissor and Cubs" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              {/* Case Study 3: The Spotted Ghost */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#D4AF37] pl-6">
                    The Spotted Ghost
                  </h3>
                  <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Scenario</strong>
                      <p>A mother leopard and her cubs were active near the road. As the mother moved, the line of vehicles moved with her, creating a chaotic "chase" dynamic.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Positioning</strong>
                      <p>We stayed back. By observing the play rhythm of the cubs, I predicted they would look for a higher vantage point to keep track of their mother. We positioned the Gypsy at a specific angle near a leaning branch, away from the crowd.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Result</strong>
                      <p>While the other vehicles were stuck in a bottleneck behind us, we were perfectly aligned. The cub climbed almost where we anticipated, giving us an unobstructed, eye-level portrait of the "Spotted Ghost" in the making.</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden group shadow-lg">
                  <Image 
                    src="/safariland.jpeg" 
                    alt="Leopard Cub on Branch" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              {/* Case Study 4: The Serpentine Path */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div className="order-1 md:order-2 space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#D4AF37] pl-6">
                    The Serpentine Path
                  </h3>
                  <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Scenario</strong>
                      <p>It was minutes before sunset—the final light of the day. Most were heading toward the exit, but the forest was speaking through sharp Langur alarm calls echoing from a specific thicket.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Positioning</strong>
                      <p>While others ignored the calls to make the gate on time, we knew exactly which bend to hold. I positioned the Gypsy to not just catch the tiger, but to frame the serpentine curve of the road itself.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Result</strong>
                      <p>We didn't just get a tiger; we got a story of the journey. He stepped onto the asphalt exactly where the road coiled, looking back to acknowledge our presence. It was a reminder: You don't walk your road twice; do it right.</p>
                    </div>
                  </div>
                </div>
                <div className="order-2 md:order-1 relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden group shadow-lg">
                  <Image 
                    src="/safariport.jpeg" 
                    alt="Tiger on Serpentine Road" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

            </div>
          </section>
        </div>
      </main>
    </ReactLenis>
  );
}
