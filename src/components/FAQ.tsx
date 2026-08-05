"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-beige/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-architect max-w-3xl">
        <div className="mb-12">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="text-3xl font-semibold leading-tight text-charcoal-900 sm:text-4xl">
            Common Questions, Answered
          </h2>
        </div>

        <div className="divide-y divide-charcoal-900/10 border-b border-t border-charcoal-900/10">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
                >
                  <span className="font-medium text-charcoal-900">
                    {item.question}
                  </span>
                  <Plus
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-deepgreen-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-architect"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    paddingBottom: isOpen ? "1.25rem" : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pr-8 text-sm leading-relaxed text-charcoal-800/70">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
