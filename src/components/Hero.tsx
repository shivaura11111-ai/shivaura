import Image from "next/image";
import Link from "next/link";
import ConsultationForm from "./ConsultationForm";
import StatsBar from "./StatsBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-image.jpeg"
          alt="Luxury Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-black/20" />
      </div>

      <div className="relative z-10 flex min-h-screen items-start pt-36 lg:pt-44">
        <div className="container-architect w-full">
          <div className="grid items-center gap-16 lg:grid-cols-2">
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

<div className="mx-auto w-full max-w-[300px] lg:relative lg:-top-44 lg:ml-auto lg:mr-0">
  <ConsultationForm />
</div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <StatsBar />
      </div>
    </section>
  );
}
