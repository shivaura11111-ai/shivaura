export interface Service {
  title: string;
  description: string;
  href: string;
  icon:
    | "layout-grid"
    | "building-2"
    | "house"
    | "building"
    | "sofa"
    | "castle"
    | "hard-hat"
    | "box"
    | "layers"
    | "hammer";
}

export const services: Service[] = [
  {
    title: "2D Floor Plan Design",
    description:
      "Professional and practical floor plans designed according to your plot dimensions, requirements, and lifestyle.",
    href: "/services/2d-floor-plan",
    icon: "layout-grid",
  },
  {
    title: "3D Front Elevation",
    description:
      "Create a realistic visual identity for your home with modern 3D exterior elevation designs.",
    href: "/services/3d-front-elevation",
    icon: "building-2",
  },
  {
    title: "Residential Architecture",
    description:
      "Complete architectural planning for independent houses, villas, apartments, and residential projects.",
    href: "/services/residential-architecture",
    icon: "house",
  },
  {
    title: "Commercial Architecture",
    description:
      "Functional and attractive architectural solutions for offices, retail spaces, showrooms, and commercial buildings.",
    href: "/services/commercial-architecture",
    icon: "building",
  },
  {
    title: "Interior Design",
    description:
      "Beautiful, functional, and personalized interiors designed around your lifestyle and brand identity.",
    href: "/services/interior-design",
    icon: "sofa",
  },
  {
    title: "Villa Design",
    description:
      "Premium villa architecture with modern planning, elegant elevations, and luxurious interiors.",
    href: "/services/villa-design",
    icon: "castle",
  },
  {
    title: "Construction Consultancy",
    description:
      "Professional guidance throughout the construction journey to help you make informed decisions.",
    href: "/services/construction-consultancy",
    icon: "hard-hat",
  },
  {
    title: "3D Visualization",
    description:
      "High-quality 3D visualizations that help clients understand their future spaces before construction begins.",
    href: "/services/3d-visualization",
    icon: "box",
  },
  {
    title: "Structural Planning",
    description:
      "Detailed structural planning focused on safety, stability, and long-term performance.",
    href: "/services/structural-planning",
    icon: "layers",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces into modern, functional, and beautiful environments.",
    href: "/services/renovation-remodeling",
    icon: "hammer",
  },
];
