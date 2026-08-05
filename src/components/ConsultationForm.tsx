"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Phone, ChevronDown } from "lucide-react";
import { cities } from "@/data/content";

export default function ConsultationForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitting(true);

    const form = e.currentTarget;

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your Service ID
        "YOUR_TEMPLATE_ID", // Replace with your Template ID
        {
          fullName: (form.fullName as HTMLInputElement).value,
          phone: (form.phone as HTMLInputElement).value,
          city: (form.city as HTMLSelectElement).value,
        },
        "YOUR_PUBLIC_KEY" // Replace with your Public Key
      );

      alert("Form submitted successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send. Please try again.");
    }

    setSubmitting(false);
  }

  return (
    <div className="relative overflow-hidden rounded-[18px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.18)]">
      <div className="absolute -top-3 right-4">
        <div className="rounded-bl-xl rounded-tr-xl rounded-tl-xl bg-gold-500 px-4 py-1.5">
          <span className="text-xs font-semibold text-white">
            Free Consultation
          </span>
        </div>
      </div>

      <div className="px-5 pt-8 pb-6">
        <h2 className="mb-6 text-base font-bold text-[#14274E]">
          Get a Free Consultation
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <User
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
              className="h-10 w-full rounded-lg border border-[#1F3B6D] px-10 text-xs outline-none focus:border-gold-500"
            />
          </div>

          <div className="relative">
            <Phone
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="h-10 w-full rounded-lg border border-[#1F3B6D] px-10 text-xs outline-none focus:border-gold-500"
            />
          </div>

          <div className="relative">
            <Phone
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              name="city"
              required
              defaultValue=""
              className="h-10 w-full appearance-none rounded-lg border border-[#1F3B6D] bg-white px-10 text-xs outline-none focus:border-gold-500"
            >
              <option value="" disabled>
                Select City
              </option>

              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="h-10 w-full rounded-lg bg-gold-500 text-xs font-semibold uppercase tracking-wide text-white hover:bg-gold-600"
          >
            {submitting ? "Sending..." : "LET'S BUILD YOUR DREAM"}
          </button>
        </form>

        <p className="mt-4 text-center text-[10px] text-gray-500">
          🔒 Your information is 100% secure.
        </p>
      </div>
    </div>
  );
}