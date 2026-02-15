"use client";

import Image from "next/image";

export default function HeroSlideshow() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/heroland.JPG"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="block md:hidden absolute inset-0">
        <Image
          src="/heroport.JPG"
          alt="Hero background mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-radial-gradient-vignette opacity-60" />
    </div>
  );
}
