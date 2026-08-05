import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="section-padding bg-deepgreen-900 text-offwhite">
      <div className="container-architect">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow !text-gold-400">How We Work</span>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Our Simple Design Process
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="relative hidden grid-cols-6 gap-6 lg:grid">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 h-px bg-offwhite/15"
          />
          {processSteps.map((step) => (
            <div key={step.number} className="relative">
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 font-display font-semibold text-charcoal-950">
                {step.number}
              </div>
              <h3 className="mb-2 font-medium text-offwhite">{step.title}</h3>
              <p className="text-sm leading-relaxed text-offwhite/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="relative space-y-8 pl-8 lg:hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[15px] top-2 w-px bg-offwhite/15"
          />
          {processSteps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 font-display text-xs font-semibold text-charcoal-950">
                {step.number}
              </div>
              <h3 className="mb-1 font-medium text-offwhite">{step.title}</h3>
              <p className="text-sm leading-relaxed text-offwhite/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
