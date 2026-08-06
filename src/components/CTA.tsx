import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="section-padding relative overflow-hidden bg-deepgreen-950"
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #faf7f1 0, #faf7f1 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="container-architect relative mx-auto max-w-2xl text-center">
        <header>
          <h2
            id="cta-heading"
            className="mb-4 text-3xl font-semibold leading-tight text-offwhite sm:text-4xl"
          >
            Ready to Build Your Dream Space?
          </h2>

          <p className="mb-9 leading-relaxed text-offwhite/70">
            Let&apos;s turn your ideas into a thoughtfully designed space that
            reflects your vision, lifestyle, and aspirations.
          </p>
        </header>

        <nav
          aria-label="Consultation contact options"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            aria-label="Book a free interior design consultation with Shivaura"
            className="btn-primary !bg-gold-500 !text-charcoal-950 hover:!bg-gold-400"
          >
            Book Free Consultation
          </Link>

          <a
            href="tel:+919000000000"
            aria-label="Call Shivaura for interior design consultation"
            className="btn-outline-light"
          >
            <Phone size={18} aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/919000000000?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Shivaura on WhatsApp"
            className="btn-outline-light"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>
        </nav>
      </div>
    </section>
  );
}