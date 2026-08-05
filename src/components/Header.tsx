"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
 
  useEffect(() => {
    // Check scroll position immediately when component mounts
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Set initial state based on current scroll position
    handleScroll();

    // Mark component as mounted
    setMounted(true);

    // Listen for future scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 relative transition-all duration-500 ${
        // Prevent transparent flash during page refresh
        !mounted
          ? "bg-offwhite/95 shadow-sm backdrop-blur-sm"
          : scrolled
          ? "bg-offwhite/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-architect flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-3 transition duration-300 group-hover:scale-105">
            {/* Circular Logo */}
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-gold-500/30 bg-white shadow-md">
              <Image
                src="/images/logo.webp"
                alt="Shivaura Architects Logo"
                width={64}
                height={64}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Logo Text */}
            <div className={`flex flex-col leading-none ${bodoni.className}`}>
                <span className="text-[34px] font-medium tracking-[0.06em] text-[#111111]">
                  Shivaura
                </span>

                <span className="mt-1 text-[11px] uppercase tracking-[0.5em] text-[#b79a67]">
                  Architects
                </span>
              </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-[15px] font-medium text-charcoal-800 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:text-deepgreen-700 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-100 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-charcoal-900/10 bg-offwhite lg:hidden"
        >
          <div className="container-architect flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-charcoal-800 transition-colors hover:bg-deepgreen-700/5 hover:text-deepgreen-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}