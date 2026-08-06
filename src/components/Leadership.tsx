import Image from "next/image";
import {
  GraduationCap,
  Building2,
  Lightbulb,
  Linkedin,
  Instagram,
} from "lucide-react";
import { leadership } from "@/data/leadership";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-offwhite">
      <div className="container-architect">
        <div className="mb-14 text-center">
          <span className="eyebrow">Leadership</span>

          <h2 className="mt-2 text-4xl font-bold text-charcoal-900">
            Meet Our Leadership
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-charcoal-700">
            Meet the visionary leaders behind Shivaura who
            combine creativity, innovation, strategic thinking, operational
            excellence and people leadership to build inspiring architectural
            projects.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="flex flex-col items-center text-center">
                <div className="relative h-44 w-44 overflow-hidden rounded-full border-[5px] border-gold-600">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-charcoal-900">
                  {member.name}
                </h3>

                <p className="text-gray-600">{member.role}</p>

                <p className="mt-1 font-semibold text-black">
                  {member.org}
                </p>
              </div>

              {/* About */}
              <div className="mt-6 flex-1">
                <h4 className="mb-3 text-lg font-semibold">About</h4>

                <p className="text-sm leading-7 text-black">
                  {member.about}
                </p>
              </div>

              {/* Details */}
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-gray-50 p-4 text-center">
                  <GraduationCap
                    size={24}
                    className="mx-auto mb-3 text-gold-500"
                  />

                  <h5 className="font-semibold">Education</h5>

                  <p className="mt-2 text-sm text-gold-500">
                    {member.education}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4 text-center">
                  <Building2
                    size={24}
                    className="mx-auto mb-3 text-gold-500"
                  />

                  <h5 className="font-semibold">Expertise</h5>

                  <p className="mt-2 text-sm text-gray-600">
                    {member.expertise}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4 text-center">
                  <Lightbulb
                    size={24}
                    className="mx-auto mb-3 text-deepgreen-700"
                  />

                  <h5 className="font-semibold">Vision</h5>

                  <p className="mt-2 text-sm text-gray-600">
                    {member.vision}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-deepgreen-700 hover:text-white"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-deepgreen-700 hover:text-white"
                    aria-label={`${member.name} on Instagram`}
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}