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

    // EmailJS values come from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are available
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");

      alert(
        "Email service is not configured. Please try again later."
      );

      setSubmitting(false);
      return;
    }

    const fullName = (
      form.elements.namedItem("fullName") as HTMLInputElement
    ).value;

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    ).value;

    const city = (
      form.elements.namedItem("city") as HTMLSelectElement
    ).value;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          fullName,
          phone,
          city,
        },
        publicKey
      );

      alert("Form submitted successfully!");

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-3xl bg-[#111111]">
      {/* Header */}
      <div className="flex justify-end">
        <div className="rounded-bl-2xl bg-gold-500 px-6 py-2 text-sm font-semibold text-white">
          Free Consultation
        </div>
      </div>

      {/* Form Content */}
      <div className="px-5 pb-6 pt-5">
        <h2
          id="consultation-heading"
          className="mb-6 text-xl font-bold text-white"
        >
          Get a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <label htmlFor="fullName" className="sr-only">
              Full Name
            </label>

            <User
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              aria-required="true"
              autoComplete="name"
              placeholder="Full Name"
              className="h-14 w-full rounded-xl border border-[#53647d] bg-[#3a3a3a] px-12 text-base text-white placeholder:text-gray-300 outline-none focus:border-[#d4a940]"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>

            <Phone
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              id="phone"
              type="tel"
              name="phone"
              required
              aria-required="true"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Phone Number"
              className="h-14 w-full rounded-xl border border-[#53647d] bg-[#3a3a3a] px-12 text-base text-white placeholder:text-gray-300 outline-none focus:border-[#d4a940]"
            />
          </div>

          {/* City */}
          <div className="relative">
            <label htmlFor="city" className="sr-only">
              Select City
            </label>

            <Phone
              size={18}
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              id="city"
              name="city"
              required
              aria-required="true"
              defaultValue=""
              autoComplete="address-level2"
              className="h-14 w-full appearance-none rounded-xl border border-[#53647d] bg-[#111111] px-12 pr-10 text-base text-white outline-none focus:border-[#d4a940]"
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
              size={20}
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            aria-busy={submitting}
            className="h-14 w-full rounded-xl bg-gold-500 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending..." : "LET'S BUILD YOUR DREAM"}
          </button>
        </form>

        {/* Security Text */}
        <p className="mt-5 text-center text-sm text-[#8fa3c2]">
          🔒 Your information is 100% secure.
        </p>
      </div>
    </section>
  );
}