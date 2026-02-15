import Link from "next/link";
import { Instagram, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-amber-300 bg-black text-white pt-24 pb-12 relative z-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] bg-gradient-to-b from-[#F7E07E] via-[#D4AF37] to-[#8C6D1F] bg-clip-text text-transparent uppercase">
              Syed Nouman
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
              Dedicated to wildlife conservation and storytelling through the lens.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h3 className="text-[#F7E07E] text-sm tracking-[0.2em] uppercase mb-4">Explore</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Safari", href: "/safari" },
                { name: "Work", href: "/work" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-light flex items-center gap-2 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#F7E07E]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Social Column */}
          <div className="space-y-6">
            <h3 className="text-[#F7E07E] text-sm tracking-[0.2em] uppercase mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#F7E07E] hover:text-[#F7E07E] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            
              <a href="mailto:hello@syednouman.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#F7E07E] hover:text-[#F7E07E] transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-light tracking-wider">
          <p>&copy; {currentYear} Syed Nouman Photography. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
