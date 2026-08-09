import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  ClipboardList,
  MessagesSquare,
  HeartHandshake,
} from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Creative Ideas",
    description: "Modern and unique designs tailored to your lifestyle.",
  },
  {
    icon: ClipboardList,
    title: "Smart Planning",
    description: "Thoughtfully planned spaces with maximum functionality.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    description: "Transparent updates from concept to completion.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "Your vision is at the heart of everything we create.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-offwhite"
      aria-labelledby="about-heading"
    >
      <div className="container-architect grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Image */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0">
          <Image
            src="/images/interior.webp"
            alt="Modern interior design by Shivaura showcasing elegant living space"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="rounded-xl object-cover shadow-2xl"
          />

          {/* Experience Card */}
          <div className="absolute -bottom-5 -right-5 rounded-xl bg-deepgreen-800 px-6 py-5 text-white shadow-xl">
            <h3 className="text-3xl font-bold">5+</h3>
            <p className="text-sm text-white/80">
              Years of Interior Design Experience
            </p>
          </div>
        </div>

        {/* Right Content */}
        <article>
          <header>
            <span className="eyebrow">About Us</span>

            <h2
              id="about-heading"
              className="mb-6 mt-2 text-3xl font-bold leading-tight text-charcoal-900 sm:text-4xl"
            >
              Crafting Elegant Spaces with Purpose
            </h2>
          </header>

          <p className="mb-6 leading-8 text-charcoal-700">
            <strong>Shivaura</strong> creates modern, functional, and inspiring
            interiors that perfectly blend beauty, comfort, and practicality.
            Every project is thoughtfully designed to reflect your personality
            while delivering exceptional quality.
          </p>

          <p className="mb-8 leading-8 text-charcoal-700">
            From residential homes to commercial spaces, we transform ideas into
            timeless designs that inspire and elevate everyday living through
            premium interior design solutions.
          </p>

          {/* Highlights */}
          <div
            className="mb-10 grid gap-6 sm:grid-cols-2"
            aria-label="Why Choose Shivaura"
          >
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-deepgreen-700/10 text-deepgreen-700"
                  aria-hidden="true"
                >
                  <item.icon size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-charcoal-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/about"
            className="btn-secondary inline-flex items-center rounded-lg px-6 py-3 transition-all duration-300 hover:scale-105"
            aria-label="Learn more about Shivaura interior design company"
          >
            Learn More
          </Link>
        </article>
      </div>
    </section>
  );
}