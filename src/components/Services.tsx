import Link from "next/link";
import {
  LayoutGrid,
  Building2,
  House,
  Building,
  Sofa,
  Castle,
  HardHat,
  Box,
  Layers,
  Hammer,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/data/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  "layout-grid": LayoutGrid,
  "building-2": Building2,
  house: House,
  building: Building,
  sofa: Sofa,
  castle: Castle,
  "hard-hat": HardHat,
  box: Box,
  layers: Layers,
  hammer: Hammer,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-beige/40">
      <div className="container-architect">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow text-gold-500">
            What We Do
          </span>

          <h2 className="mb-4 text-3xl font-semibold leading-tight text-black sm:text-4xl">
            Our Architecture &amp; Design Services
          </h2>

          <p className="leading-relaxed text-charcoal-800/70">
            Complete design solutions for residential and commercial spaces —
            from the first floor plan sketch to the final 3D visualisation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={service.title}
                className="group flex h-full flex-col rounded-lg border border-gold-500/20 bg-offwhite p-7 shadow-sm transition-all duration-300 hover:border-gold-500 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-semibold text-black transition-colors duration-300 group-hover:text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal-800/70">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-medium text-black transition-all duration-300 hover:text-black"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}