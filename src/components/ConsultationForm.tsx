"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Phone, ChevronDown } from "lucide-react";

const PURPOSES = [
  "Architecture Design",
  "Interior Design",
  "Renovation",
  "Planning & Turnkey",
  "Other Consultation",
];

export default function ConsultationForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const purpose = String(formData.get("purpose") || "").trim();

    if (!name || !phone || !city || !purpose) {
      alert("Please fill all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      const templateParams = { name, phone, city, purpose };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Form submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      alert("Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-3xl bg-[#111111]">
      <div className="flex justify-end">
        <div className="rounded-bl-2xl bg-gold-500 px-6 py-2 text-sm font-semibold text-white">
          Free Consultation
        </div>
      </div>

      <div className="px-5 pb-6 pt-5">
        <h2 id="consultation-heading" className="mb-6 text-xl font-bold text-white">
          Get a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="sr-only">Full Name</label>
            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="h-14 w-full rounded-xl border border-[#53647d] bg-[#3a3a3a] px-12 text-base text-white placeholder:text-gray-300 outline-none focus:border-[#d4a940]"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="h-14 w-full rounded-xl border border-[#53647d] bg-[#3a3a3a] px-12 text-base text-white placeholder:text-gray-300 outline-none focus:border-[#d4a940]"
            />
          </div>

          {/* City Text Input */}
          <div className="relative">
            <label htmlFor="city" className="sr-only">Select City</label>
            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="city"
              type="text"
              name="city"
              required
              placeholder="Select City"
              className="h-14 w-full rounded-xl border border-[#53647d] bg-[#3a3a3a] px-12 text-base text-white placeholder:text-gray-300 outline-none focus:border-[#d4a940]"
            />
          </div>

          {/* Select Purpose Dropdown */}
          <div className="relative">
            <label htmlFor="purpose" className="sr-only">Select Purpose</label>
            <select
              id="purpose"
              name="purpose"
              required
              defaultValue=""
              className="h-14 w-full appearance-none rounded-xl border border-[#53647d] bg-[#3a3a3a] px-5 pr-10 text-base text-white outline-none focus:border-[#d4a940]"
            >
              <option value="" disabled>
                Select Your Purpose
              </option>
              {PURPOSES.map((item) => (
                <option key={item} value={item} className="bg-[#111111] text-white">
                  {item}
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
            className="h-14 w-full rounded-xl bg-gold-500 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending..." : "LET'S BUILD YOUR DREAM"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-[#8fa3c2]">
          🔒 Your information is 100% secure.
        </p>
      </div>
    </section>
  );
}