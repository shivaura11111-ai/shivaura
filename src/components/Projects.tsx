import Image from "next/image";
import { User, MapPin, Ruler, Building2 } from "lucide-react";

const projects = [
  {
    title: "RESIDENCE HOME",
    image: "/images/project1.webp",
    client: "Mr Vikash Kumar",
    location: "Noida",
    plot: "2400 sq.ft",
    floors: "G+3 Floors",
  },
  {
    title: "LUXURY VILLA",
    image: "/images/project2.webp",
    client: "Mr Ahmed Khan",
    location: "Gurugram",
    plot: "1800 sq.ft",
    floors: "G+1 Floor",
  },
  {
    title: "FARM HOUSE",
    image: "/images/project3.webp",
    client: "Amit Kumar",
    location: "Lucknow",
    plot: "5000 sq.ft",
    floors: "Ground Floor",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f7f5ef] py-20">
      <div className="container-architect">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-[#1b1b1b]">
            Our Projects
          </h2>

          <p className="mt-3 text-gray-600">
            Explore some of our recently completed architectural projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="border-b pb-4 text-xl font-semibold uppercase tracking-wide text-red-600">
                  {project.title}
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-500">
                      <User size={16} className="text-purple-700" />
                      Name
                    </div>

                    <p className="mt-2 text-lg font-semibold text-[#24314e]">
                      {project.client}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-500">
                      <MapPin size={16} className="text-pink-600" />
                      Location
                    </div>

                    <p className="mt-2 text-lg font-semibold text-[#24314e]">
                      {project.location}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-500">
                      <Ruler size={16} className="text-gray-500" />
                      Plot Size
                    </div>

                    <p className="mt-2 text-lg font-semibold text-[#24314e]">
                      {project.plot}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-500">
                      <Building2 size={16} className="text-sky-600" />
                      Floors
                    </div>

                    <p className="mt-2 text-lg font-semibold text-[#24314e]">
                      {project.floors}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}