import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen font-sans bg-[#F9F7F2]">
       {/* Navigation - Adapted for light background */}
       <nav className="flex items-center justify-between px-8 py-6 text-black md:px-12">
          <div className="text-2xl font-bold tracking-widest">NOUMAN</div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest">
            <a href="/" className="hover:opacity-60 transition-opacity">HOME</a>
            <a href="/about" className="hover:opacity-60 transition-opacity font-bold">ABOUT</a>
            <a href="#" className="hover:opacity-60 transition-opacity">EXPLORE</a>
            <a href="#" className="border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
              CONTACT
            </a>
          </div>
        </nav>

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
