import { stats } from "@/data/content";

export default function StatsBar() {
  return (
    <div className="border-t border-offwhite/10 bg-charcoal-950/70 backdrop-blur-sm">
      <div className="container-architect grid grid-cols-2 gap-6 py-8 sm:grid-cols-4 sm:py-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-display text-3xl font-semibold text-offwhite sm:text-4xl">
              {stat.value}
              {stat.suffix}
            </p>
            <p className="mt-1 text-xs tracking-wide text-offwhite/70 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
