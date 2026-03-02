"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";
import { ReactLenis } from "lenis/react";
import CardNav, { CardNavItem } from "../../components/CardNav";
import { Check } from "lucide-react";

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
        label: "Rajaji & Dudhwa",
        href: "/safari/package-one",
        ariaLabel: "View Rajaji and Dudhwa safari package"
      },
      {
        label: "Tadoba & Pench",
        href: "/safari/package-two",
        ariaLabel: "View Tadoba and Pench safari package"
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

export default function ThankYouPage() {
  return (
    <ReactLenis root>
      {/* Google Conversion Tracking */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17962473688"
      />
      <Script id="google-conversion-tag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17962473688');
        `}
      </Script>

      <div className="min-h-screen bg-[#F5F5F0] flex flex-col">
        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
          <CardNav
            logo="/logo.png"
            logoAlt="Safari Logo"
            items={navItems}
            className="pointer-events-auto"
          />
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-10 h-10 text-green-600" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Thank You for Reaching Out
            </h1>

            {/* Subtext */}
            <p className="font-sans text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
              We have received your enquiry and will get back to you shortly. Get ready for an unforgettable journey into the wild.
            </p>

            {/* Action Button */}
            <div className="pt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm md:text-base tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-black transition-colors rounded-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
