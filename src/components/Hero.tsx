"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ConsultationForm from "./ConsultationForm";
import StatsBar from "./StatsBar";

const slides = [
  "/images/bg-image.webp",
  "/images/bg-img.webp",
  "/images/bg-image.webp",
  "/images/bg-img.webp",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // After reaching the 3rd slide, silently reset
    // to the beginning after the sliding animation.
    if (currentSlide === 2) {
      const timeout = setTimeout(() => {
        setCurrentSlide(0);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentSlide]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal-950">

      {/* =========================
          CONTINUOUS LEFT SLIDER
      ========================== */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            width: "400%",
            transform: `translateX(-${currentSlide * 25}%)`,
          }}
        >
          {slides.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-full w-1/4 shrink-0"
            >
              <Image
                src={image}
                alt={`Luxury Architecture ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-black/20" />
      </div>

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div className="relative z-10 flex min-h-screen items-start pt-36 lg:pt-44">
        <div className="container-architect w-full">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="max-w-xl lg:-mt-24">

              <span className="inline-block rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold-400">
                Architecture • Interior • Planning
              </span>

              <h1 className="mt-6 text-5xl font-semibold leading-tight text-offwhite lg:text-7xl">
                Modern Spaces.
                <br />
                Timeless Design.
              </h1>

              <p className="mt-6 text-lg leading-8 text-offwhite/80">
                Premium architecture and interior design solutions crafted to
                create elegant and functional spaces.
              </p>

              <div className="mt-10 flex gap-5">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>

                <Link href="/projects" className="btn-outline-light">
                  View Projects
                </Link>
              </div>

            </div>

            {/* CONSULTATION FORM */}
            <div className="mx-auto w-full max-w-[300px] lg:relative lg:-top-44 lg:ml-auto lg:mr-0">
              <ConsultationForm />
            </div>

          </div>

        </div>
      </div>

      {/* =========================
          STATS BAR
      ========================== */}
      <div className="relative z-10">
        <StatsBar />
      </div>

    </section>
  );
}