"use client";

import { useState } from "react";

export default function PricingPackages() {
  const [activeCity, setActiveCity] = useState("Bihar");

  const packages = [
    {
      name: "FOUNDATION",
      subtitle: "ESSENTIAL DESIGN PACKAGE",
      tagline: "PERFECT START FOR SMART SPACES",
      price: "₹10/-",
      priceUnit: "PER SQ.FT.",
      idealFor: "Residential buildings, small projects & clients on a smart budget.",
      theme: "green",
      // House Icon for Foundation
      icon: (
        <svg className="w-12 h-12 mx-auto mb-2 text-[#1b4332]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [
        "Concept Design",
        "Floor Plans",
        "Elevations",
        "Basic 3D Views (Exterior)",
        "Working Drawings",
        "Basic Electrical Layout",
        "Basic Plumbing Layout",
        "1-2 Revisions",
        "Design Consultation",
      ],
    },
    {
      name: "SIGNATURE",
      subtitle: "COMPLETE DESIGN PACKAGE",
      tagline: "COMPLETE DESIGN. PERSONALIZED SOLUTIONS.",
      price: "₹19/-",
      priceUnit: "PER SQ.FT.",
      idealFor: "Homeowners, builders & developers looking for a complete design package.",
      theme: "blue",
      isPopular: true,
      // Building/Complex Icon for Signature
      icon: (
        <svg className="w-12 h-12 mx-auto mb-2 text-[#0b2545]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Everything in FOUNDATION",
        "Detailed 3D Exterior Views",
        "Interior Concept & Layouts",
        "Detailed Working Drawings",
        "Electrical Drawings (Detailed)",
        "Plumbing Drawings (Detailed)",
        "Door / Window Schedule",
        "Material & Finish Suggestions",
        "3-4 Revisions",
        "Site Visits (Up to 3)",
      ],
    },
    {
      name: "PINNACLE",
      subtitle: "PREMIUM DESIGN EXPERIENCE",
      tagline: "LUXURY DESIGN. END-TO-END EXCELLENCE.",
      price: "₹50/-",
      priceUnit: "PER SQ.FT.",
      idealFor: "Luxury homes, villas & commercial projects with end-to-end requirements.",
      theme: "purple",
      // Skyline Icon for Pinnacle
      icon: (
        <svg className="w-12 h-12 mx-auto mb-2 text-[#3c1361]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M6 16l2-2m0 0l2 2m-2-2v6m6-12l2-2m0 0l2 2m-2-2v14m-8-8h4m-2-4v4" />
        </svg>
      ),
      features: [
        "Everything in SIGNATURE",
        "Premium 3D Visualization (Exterior)",
        "Full Interior Design",
        "Furniture Layouts",
        "False Ceiling Design",
        "Detailed Electrical Layouts",
        "Detailed Plumbing Layouts",
        "BOQ / Material Specifications",
        "Site Supervision",
        "Contractor Coordination",
        "Regular Site Visits",
        "Project Management Support",
      ],
    },
  ];

  return (
    <section className="bg-[#f9f6f3] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* City Toggle Tabs */}
        <div className="flex gap-3 mb-12">
          {["Patna", "Noida"].map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-8 py-2.5 rounded-lg font-medium text-sm transition shadow-sm ${
                activeCity === city
                  ? "bg-[#1b4332] text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const headerBg =
              pkg.theme === "green"
                ? "bg-[#1b4332] text-white"
                : pkg.theme === "blue"
                ? "bg-[#0b2545] text-white"
                : "bg-[#3c1361] text-white";

            const priceBoxBg =
              pkg.theme === "green"
                ? "bg-[#1b4332] text-white"
                : pkg.theme === "blue"
                ? "bg-[#0b2545] text-white"
                : "bg-[#3c1361] text-white";

            const checkColor =
              pkg.theme === "green"
                ? "text-[#1b4332]"
                : pkg.theme === "blue"
                ? "text-[#0b2545]"
                : "text-[#3c1361]";

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* Top Header with Icon & Name */}
                  <div className="p-6 text-center border-b border-gray-100">
                    {pkg.icon}
                    <h3 className="text-2xl font-black tracking-wide text-gray-900">
                      {pkg.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Tagline Banner */}
                  <div className={`${headerBg} py-2.5 px-4 text-center text-xs font-bold tracking-wider`}>
                    {pkg.tagline}
                  </div>

                  {/* Features List */}
                  <ul className="p-6 space-y-3.5">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                        <svg
                          className={`w-5 h-5 shrink-0 mt-0.5 ${checkColor}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Pricing and Ideal For Section */}
                <div className="p-6 pt-0">
                  <div className={`${priceBoxBg} py-3.5 px-4 rounded-xl text-center mb-6 shadow-sm`}>
                    <span className="text-2xl md:text-3xl font-black">{pkg.price}</span>
                    <span className="text-xs font-semibold tracking-wider opacity-90 ml-1.5">
                      {pkg.priceUnit}
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      IDEAL FOR
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed px-2">
                      {pkg.idealFor}
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