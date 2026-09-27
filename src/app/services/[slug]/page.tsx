"use client";

import { useParams } from "next/navigation";

const servicesData: Record<string, any> = {
  "3d-front-elevation": {
    title: "3D Front Elevation Projects",
    cards: [
      {
        id: 1,
        tag: "Villa",
        title: "Modern Minimal Villa",
        location: "Ranchi, Jharkhand",
        plot: "40 x 60 ft",
        floors: "G + 1",
        image: "img-1.png" // Yahan apne PC/public folder wali image ka path daal
      },
      {
        id: 2,
        tag: "Duplex",
        title: "Contemporary Duplex",
        location: "Noida, Uttar Pradesh",
        plot: "30 x 50 ft",
        floors: "G + 1",
        image: "/your-image-2.jpg"
      },
      {
        id: 3,
        tag: "Bungalow",
        title: "Stone & Glass Facade",
        location: "Delhi, India",
        plot: "45 x 70 ft",
        floors: "G + 1",
        image: "/your-image-3.jpg"
      },
      {
        id: 4,
        tag: "Modern",
        title: "Luxury Glass House",
        location: "Gurgaon, Haryana",
        plot: "50 x 80 ft",
        floors: "G + 2",
        image: "/your-image-4.jpg"
      },
      {
        id: 5,
        tag: "Traditional",
        title: "Royal Indian Haveli",
        location: "Jaipur, Rajasthan",
        plot: "60 x 90 ft",
        floors: "G + 2",
        image: "/your-image-5.jpg"
      },
      {
        id: 6,
        tag: "Apartment",
        title: "Urban Smart Studio",
        location: "Bangalore, Karnataka",
        plot: "30 x 40 ft",
        floors: "G + 3",
        image: "/your-image-6.jpg"
      },
      {
        id: 7,
        tag: "Penthouse",
        title: "Skyview Terrace Villa",
        location: "Mumbai, Maharashtra",
        plot: "40 x 50 ft",
        floors: "G + 1",
        image: "/your-image-7.jpg"
      },
      {
        id: 8,
        tag: "Minimalist",
        title: "Compact Urban Home",
        location: "Patna, Bihar",
        plot: "25 x 45 ft",
        floors: "G + 2",
        image: "/your-image-8.jpg"
      }
    ]
  },
  "construction-consultancy": {
    title: "Construction Consultancy Projects",
    cards: [
      {
        id: 1,
        tag: "Commercial",
        title: "Corporate Office Complex",
        location: "Patna, Bihar",
        plot: "60 x 80 ft",
        floors: "G + 3",
        image: "/your-image-1.jpg"
      }
    ]
  },
  "structural-planning": {
    title: "Structural Planning & Engineering",
    cards: [
      {
        id: 1,
        tag: "High-Rise",
        title: "Skyline Residential Tower",
        location: "Noida, Uttar Pradesh",
        plot: "100 x 120 ft",
        floors: "G + 12",
        image: "/your-image-1.jpg"
      }
    ]
  },
  "renovation-remodeling": {
    title: "Renovation & Remodeling Works",
    cards: [
      {
        id: 1,
        tag: "Interior",
        title: "Heritage Bungalow Restoration",
        location: "Delhi, India",
        plot: "50 x 50 ft",
        floors: "G + 2",
        image: "/your-image-1.jpg"
      }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const currentService = servicesData[slug] || null;

  return (
    <div className="bg-[#f9f6f3] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black text-[#0b2545] capitalize mb-10 text-center">
          {currentService ? currentService.title : slug.replace(/-/g, " ")}
        </h1>

        {currentService && currentService.cards && currentService.cards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentService.cards.map((card: any) => (
              <div key={card.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {card.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mb-4">
                    📍 {card.location}
                  </p>

                  <div className="grid grid-cols-2 bg-gray-50 rounded-xl p-3 mb-6 border border-gray-100 text-center">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-gray-400">PLOT</span>
                      <span className="text-sm font-bold text-gray-800">{card.plot}</span>
                    </div>
                    <div className="border-l border-gray-200">
                      <span className="block text-[10px] uppercase font-bold text-gray-400">FLOORS</span>
                      <span className="text-sm font-bold text-gray-800">{card.floors}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm">
                    View Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm max-w-xl mx-auto">
            <p className="text-gray-500 text-lg font-medium mb-2">Projects for this category are coming soon!</p>
            <p className="text-gray-400 text-sm">Hum jald hi is service ke projects yahan update karenge.</p>
          </div>
        )}
      </div>
    </div>
  );
}