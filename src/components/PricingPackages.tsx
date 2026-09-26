"use client";

import { useState } from "react";

export default function PricingPackages() {
  const [activeCity, setActiveCity] = useState("Patna");

  const packages = [
    {
      name: "Silver Package",
      price: "₹6/sqft",
      isPopular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
      ],
      buttonText: "Choose Silver Package",
    },
    {
      name: "Gold Package",
      price: "₹8/sqft",
      isPopular: true,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
      ],
      buttonText: "Choose Gold Package",
    },
    {
      name: "Platinum Package",
      price: "₹30/sqft",
      isPopular: false,
      features: [
        "Floor Plan",
        "Plumbing Design",
        "Electric Design",
        "3D Front Elevation",
        "Column Layout Design",
        "Pile/Footing Layout Design",
        "Tie Beam Detail Design",
        "Slab Beam Detail Design",
        "Slab Reinforcement Details Design",
        "Staircase Section Details",
        "Septic Tank & Borewell Position",
        "3D Interior Design",
      ],
      buttonText: "Choose Platinum Package",
    },
  ];

  return (
    <section className="bg-[#f9f6f3] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-3 mb-12">
          {["Patna", "Noida"].map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-8 py-2.5 rounded-lg font-medium text-sm transition shadow-sm ${
                activeCity === city
                  ? "bg-[#e32929] text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${
                pkg.isPopular
                  ? "border-2 border-[#e32929]"
                  : "border border-gray-200"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-8 bg-[#e32929] text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl md:text-4xl font-extrabold text-[#e32929] mb-8">
                  {pkg.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
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

              <button
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition ${
                  pkg.isPopular
                    ? "bg-[#e32929] text-white hover:bg-red-700 shadow-md shadow-red-500/20"
                    : "border-2 border-[#e32929] text-[#e32929] hover:bg-red-50"
                }`}
              >
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}