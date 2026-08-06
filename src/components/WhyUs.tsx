import {
  Users,
  Sparkles,
  LayoutTemplate,
  MessageSquareText,
  ScanEye,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { whyUs } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  sparkles: Sparkles,
  "layout-template": LayoutTemplate,
  "message-square-text": MessageSquareText,
  "scan-eye": ScanEye,
  headset: Headset,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-beige/40">
      <div className="container-architect">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Our Advantage</span>
          <h2 className="text-3xl font-semibold leading-tight text-charcoal-900 sm:text-4xl">
            Why Choose Shivaura?
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-deepgreen-700 text-offwhite">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1.5 font-medium text-charcoal-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-800/70">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
