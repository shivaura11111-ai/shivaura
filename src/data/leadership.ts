export interface LeadershipMember {
  name: string;
  role: string;
  org: string;
  image: string;
  about: string;
  education: string;
  expertise: string;
  vision: string;
}

export const leadership: LeadershipMember[] = [
  {
    name: "Ar. Rohit Prakash",
    role: "CEO & Founder",
    org: "shivaura",
    image: "/images/ceo.webp",
    about:
      "Ar. Rohit Prakash is an architect and founder of Shivaura, dedicated to designing sustainable, functional, and timeless spaces that combine innovation with practical living.",
    education: "Bachelor of Architecture (B.Arch)",
    expertise: "Architecture, Interiors, Planning & Design",
    vision: "Sustainable, Functional & Timeless Architecture",
  },
  {
    name: "Ravi Prakash",
    role: "Chief Operating Officer",
    org: "shivaura",
    image: "/images/coo.webp",
    about:
      "Ravi Prakash is the Chief Operating Officer (COO) at Shivaura, dedicated to ensuring efficient project execution, operational excellence, and consistent quality across every project.",
    education: "ITI (Civil)",
    expertise: "Operations, Project Execution & Quality Management",
    vision: "Delivering Excellence Through Operational Efficiency",
  },
  {
    name: "Khushi Bhardwaj",
    role: "HR Manager",
    org: "shivaura",
    image: "/images/hr.webp",
    about:
      "Khushi Bhardwaj is the HR Manager at Shivaura, dedicated to building talented teams, fostering employee growth, and creating a positive workplace culture.",
    education: "MBA (HR), SCDL Pune",
    expertise: "Talent Acquisition, Employee Engagement & HR Strategy",
    vision: "Building Strong Teams for Organizational Growth",
  },
  {
    name: "Ar. Nidhi Priya",
    role: "Architect",
    org: "shivaura",
    image: "/images/architect.webp",
    about:
      "Ar. Nidhi Priya is an architect at Shivaura, dedicated to designing functional, sustainable, and aesthetically balanced spaces that enhance everyday living.",
    education: "Bachelor of Architecture (B.Arch)",
    expertise: "Architecture, Sustainable Design & Space Planning",
    vision: "Designing Functional & Sustainable Spaces",
  },
];
