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
    org: "Greenn Bugg House Deziign",
    image: "/images/ceo.webp",
    about:
      "Ar. Rohit Prakash is a graduate of Apeejay Institute of Technology – School of Architecture & Planning (AIT-SAP), Greater Noida. He founded Greenn Bugg House Deziign with the vision of creating sustainable, functional and timeless architecture that blends innovation with practical living.",
    education: "Bachelor of Architecture (B.Arch)",
    expertise: "Architecture, Interiors, Planning & Design",
    vision: "Sustainable, Functional & Timeless Architecture",
  },
  {
    name: "Ravi Prakash",
    role: "Chief Operating Officer",
    org: "Greenn Bugg House Deziign",
    image: "/images/coo.webp",
    about:
      "Ravi Prakash is the Chief Operating Officer (COO) at Greenn Bugg House Deziign. With an ITI qualification and specialization in the civil field, he oversees daily operations, project execution, and quality management. His practical expertise and commitment to excellence ensure the smooth delivery of projects while maintaining the highest standards of efficiency, reliability, and client satisfaction.",
    education: "ITI (Civil)",
    expertise: "Operations, Project Execution & Quality Management",
    vision: "Delivering Excellence Through Operational Efficiency",
  },
  {
    name: "Khushi Bhardwaj",
    role: "HR Manager",
    org: "Greenn Bugg House Deziign",
    image: "/images/hr.webp",
    about:
      "Khushi Bhardwaj is an HR Manager with an MBA in Human Resource Management from Symbiosis Centre for Distance Learning (SCDL), Pune. She is passionate about talent acquisition, employee engagement, and building high-performing teams that contribute to organizational success.",
    education: "MBA (HR), SCDL Pune",
    expertise: "Talent Acquisition, Employee Engagement & HR Strategy",
    vision: "Building Strong Teams for Organizational Growth",
  },
  {
    name: "Ar. Nidhi Priya",
    role: "Architect",
    org: "Greenn Bugg House Deziign",
    image: "/images/architect.webp",
    about:
      "Ar. Nidhi Priya is a graduate of the School of Architecture, Government College of Engineering (GCE), Gaya, Bihar, holding a Bachelor's degree in Architecture. She is driven by a passion for designing spaces that seamlessly integrate functionality, aesthetics, and sustainability while responding thoughtfully to their cultural and environmental context.",
    education: "Bachelor of Architecture (B.Arch)",
    expertise: "Architecture, Sustainable Design & Space Planning",
    vision: "Designing Functional & Sustainable Spaces",
  },
];
