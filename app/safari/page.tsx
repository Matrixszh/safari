"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ReactLenis } from "lenis/react";
import CardNav, { CardNavItem } from "../../components/CardNav";
import SafariTopic from "../components/SafariTopic";
import ButtonCreativeRight from "../components/ButtonF";

const navItems: CardNavItem[] = [
  {
    label: "Home",
    bgColor: "#ffffff",
    textColor: "#111827",
    links: [
      { label: "Home", href: "/", ariaLabel: "Go to home page" }
    ]
  },
  {
    label: "About",
    bgColor: "#f9fafb",
    textColor: "#111827",
    links: [
      { label: "About", href: "/about", ariaLabel: "Learn about me" }
    ]
  },
  {
    label: "Works",
    bgColor: "#f3f4f6",
    textColor: "#111827",
    links: [
      { label: "Works", href: "/work", ariaLabel: "View my work" }
    ]
  },
  {
    label: "Safari",
    bgColor: "#e5e7eb",
    textColor: "#111827",
    links: [
      {
        label: "Safari",
        href: "/safari",
        ariaLabel: "Go to safari page"
      },
      {
        label: "Terai Predator Circuit",
        href: "/safari/package-one",
        ariaLabel: "View Terai Predator Circuit safari package"
      },
      {
        label: "Rivers & Grasslands Route",
        href: "/safari/package-two",
        ariaLabel: "View Rivers and Grasslands Route safari package"
      }
    ]
  },
  {
    label: "Contact",
    bgColor: "#fefce8",
    textColor: "#111827",
    links: [
      { label: "Contact", href: "/contact", ariaLabel: "Get in touch" }
    ]
  }
];

const TOPIC_2_IMAGES = [
  { 
    src: "/Safari2.JPG", 
    alt: "Safari Moment 2",
    settings: { iso: "200", aperture: "f/5.6", shutter: "1/2000s" }
  },
  
  
  { 
    src: "/Safari2.2.JPG", 
    alt: "Safari Moment 6",
    settings: { iso: "320", aperture: "f/5.6", shutter: "1/1600s" }
  },
  { 
    src: "/Safari2.4.JPG", 
    alt: "Safari Moment 4",
    settings: { iso: "100", aperture: "f/8.0", shutter: "1/500s" }
  },
  { 
    src: "/Safari2.6.JPG", 
    alt: "Safari Moment 6",
    settings: { iso: "320", aperture: "f/5.6", shutter: "1/1600s" }
  }
];

const TOPIC_3_IMAGES = [
  { 
    src: "/Unused.JPG", 
    alt: "Sunrise Savannah",
    settings: { iso: "640", aperture: "f/4.0", shutter: "1/800s" }
  },
  { 
    src: "/Unused1.JPG", 
    alt: "Sunrise Savannah",
    settings: { iso: "640", aperture: "f/4.0", shutter: "1/800s" }
  },
  { 
    src: "/Unused6.JPG", 
    alt: "Elephant Herd",
    settings: { iso: "500", aperture: "f/5.6", shutter: "1/1200s" }
  }
];

export default function Safari() {
  return (
    <ReactLenis root>
      <main className="pt-5 w-full font-sans">
        <CardNav
          logo="/logo.png"
          logoAlt="Syed Nouman"
          items={navItems}
          baseColor="#ffffff"
          menuColor=""
          buttonBgColor="#000000"
          buttonTextColor="#ffffff"
        />
        <div className="bg-white">
          <section className="pt-16 pb-10 px-4 md:px-8 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-serif tracking-[0.35em] uppercase bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[rgb(140,109,31)] bg-clip-text text-transparent">
              Safari with Nouman
            </h1>
            <p className="mt-8 text-lg md:text-xl font-light leading-relaxed text-gray-800">
              Join Syed For A Transition From Mere Sightings To Disciplined Fieldcraft. These Safaris Are Curated For Those Seeking More Than A Checklist; Focusing On Precision Tracking, Calculus Of Light, And The Patience Required To Witness Moments In Their Rawest Form.
            </p>
            <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-gray-800">
              Whether You Are Behind A Lens Or On A Leisure Journey To Witness The Wild&apos;s True Rhythm, The Focus Remains The Same: Elite Positioning And Deep Immersion.
            </p>
          </section>

          <section className="pb-16 px-4 md:px-8 max-w-6xl mx-auto space-y-10">
            <article className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/SafariLand.JPG"
                alt="Rajaji and Dudhwa tiger walking on forest track"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                <div className="space-y-3">
                  <span className="text-xs md:text-sm tracking-[0.35em] text-[#F7E07E] uppercase">
                    The Northern Strongholds
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                    Rajaji &amp; Dudhwa
                  </h2>
                </div>
                <div>
                  <ButtonCreativeRight
                    label="Explore"
                    href="/safari/package-one"
                  />
                </div>
              </div>
            </article>

            <article className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/Safari2.JPG"
                alt="Tadoba and Pench tiger in blue forest light"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                <div className="space-y-3">
                  <span className="text-xs md:text-sm tracking-[0.35em] text-[#F7E07E] uppercase">
                    The Central Highlands
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">
                    Tadoba &amp; Pench
                  </h2>
                </div>
                <div>
                  <ButtonCreativeRight
                    label="Explore"
                    href="/safari/package-two"
                  />
                </div>
              </div>
            </article>
          </section>

          <div className="flex flex-col">
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
                  <span className="text-gray-800 text-lg font-light leading-relaxed">Your safari is custom-tailored to your pace. We don&apos;t rush sightings and prioritize quiet areas whenever possible.</span>
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
                <div className="relative h-[60vh] md:h-[100vh] w-full rounded-sm overflow-hidden group shadow-lg">
                  <Image 
                    src="/Strategic1.JPG" 
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
                      <p>We chose a specific route to intercept them head-on. This was only possible by anticipating their direction of movement. A calculation rooted in a deep understanding of the territory and knowing this mother named Scissor since she was a cub herself.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Result</strong>
                      <p>We were the first Gypsy on the scene, allowing us to capture clean images while others were still trailing behind us. This uncompromised positioning gave us the time and stillness to make beautiful, printable family portraits.</p>
                    </div>
                  </div>
                </div>
                <div className="order-2 md:order-1 relative h-[60vh] md:h-[100vh] w-full rounded-sm overflow-hidden group shadow-lg">
                  <Image 
                    src="/Strategic2.JPG" 
                    alt="Scissor and Cubs" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </div>

              {/* Case Study 3: Calculus of the Roar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#D4AF37] pl-6">
                    Strategic Win: Calculus of the Roar
                  </h3>
                  <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Scenario</strong>
                      <p>A dominant male vocalizing deep within the thicket. While others followed the sound into a congested trail, we chose instead to follow the direction of his call, reading his movement rather than the crowd.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Positioning</strong>
                      <p>By calculating his trajectory through audio cues, we bypassed the stationary vehicles to secure a downwind advantage, positioning exactly where the forest trail opened and the background ran clean.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Result</strong>
                      <p>First Gypsy on site. The calculation delivered an unobstructed flank shot, capturing the anatomical power and tricep definition of a male in his prime—details usually lost in the chaos of a chase.</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[30vh] md:h-[60vh] w-full rounded-sm overflow-hidden group shadow-lg">
                  <CaseStudySlideshow 
                    images={["/Strategicwin4.JPG"]} 
                    alt="Dominant Male Tiger Roaring"
                  />
                </div>
              </div>
              
              {/* Case Study 4: The Spotted Ghost */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#D4AF37] pl-6">
                    The Spotted Ghost
                  </h3>
                  <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Scenario</strong>
                      <p>A mother leopard and her cubs were active near the road. As the mother moved, the line of vehicles moved with her, creating a chaotic chase dynamic.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Positioning</strong>
                      <p>We stayed back. By observing the play rhythm of the cubs, I predicted they would look for a higher vantage point to keep track of their mother. We positioned the Gypsy at a specific angle near a leaning branch, away from the crowd.</p>
                    </div>
                    <div>
                      <strong className="text-[#D4AF37] block mb-2 uppercase tracking-widest text-sm">The Result</strong>
                      <p>While the other vehicles were stuck in a bottleneck behind us, we were perfectly aligned. The cub climbed almost where we anticipated, giving us an unobstructed, eye-level portrait of the Spotted Ghost in the making.</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[30vh] md:h-[60vh] w-full rounded-sm overflow-hidden group shadow-lg">
                  <CaseStudySlideshow 
                    images={["/Strategic3.JPG", "/Strategic4.JPG"]} 
                    alt="Leopard Cub on Branch"
                  />
                </div>
              </div>

            </div>
          </section>
        </div>
      </main>
    </ReactLenis>
  );
}

function CaseStudySlideshow({ images, alt }: { images: string[], alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[current]}
            alt={`${alt} - Slide ${current + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10 pointer-events-auto">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
