import { 
  Gauge, Cog, Calendar, Ruler, Home, Zap, Plane, Users, Wind, MapPin, Package, FileText, History, Move, Ship
} from "lucide-react";

export interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
}

export interface MarketplaceItem {
  id: number;
  title: string;
  category: "Automotive" | "Yachts" | "Aviation" | "Real Estate";
  price: number;
  location: string;
  image: string;
  media: MediaItem[];
  type: "VIP" | "Private" | "Dealer Inventory";
  createdAt: string;
  specs: {
    label: string;
    value: string;
    icon: any;
  }[];
  detailedSpecs: {
    label: string;
    value: string;
  }[];
  description: string;
  history: string[];
  documents: { title: string; type: string }[];
}

export const DEMO_ITEMS: MarketplaceItem[] = [
  {
    id: 1,
    title: "Bugatti Chiron Super Sport",
    category: "Automotive",
    price: 3800000,
    location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    image: "/images/landing/hero-car.png",
    media: [
      { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-red-sports-car-driving-on-a-mountain-road-34531-large.mp4", thumbnail: "/images/landing/hero-car.png" },
      { type: "image", url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000" },
      { type: "image", url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000" },
      { type: "image", url: "https://images.unsplash.com/photo-1603584173870-7f3ca9304321?auto=format&fit=crop&q=80&w=1000" },
      { type: "image", url: "https://images.unsplash.com/photo-1526726538690-5cbf95642cb0?auto=format&fit=crop&q=80&w=1000" },
    ],
    type: "VIP",
    createdAt: "2026-04-10",
    description: "The Bugatti Chiron Is One Of The World’s Most Exclusive And Powerful Hyper Cars, Engineered To Deliver Unmatched Performance, Luxury, And Precision. Designed By Bugatti Automobiles, The Chiron Represents The Pinnacle Of Automotive Innovation And Craftsmanship. Powered By An 8.0-Liter Quad-Turbocharged W16 Engine, The Chiron Produces An Astonishing 1,500 Horsepower, Enabling Breathtaking Acceleration And A Top Speed Exceeding 400 Km/H. Every Detail Of The Vehicle Is Meticulously Crafted, Combining Cutting-Edge Technology With Handcrafted Luxury Materials.",
    specs: [
      { label: "9,250 kms", value: "9,250", icon: Gauge },
      { label: "Diesel", value: "Diesel", icon: Wind },
      { label: "Automatic", value: "Automatic", icon: Cog },
      { label: "2021", value: "2021", icon: Calendar },
    ],
    detailedSpecs: [
      { label: "Year", value: "2024" },
      { label: "Engine", value: "sdjfkjk" },
      { label: "Transmission", value: "2024" },
      { label: "0-60 MPH", value: "2024" },
      { label: "Interior", value: "2024" },
      { label: "Location", value: "2024" },
      { label: "Mileage", value: "2024" },
      { label: "Horsepower", value: "2024" },
      { label: "Transmission", value: "2024" },
      { label: "Top Speed", value: "2024" },
      { label: "Exterior", value: "2024" },
    ],
    history: [
      "Full service history available",
      "Full service history available",
      "Full service history available",
      "Full service history available",
      "Full service history available",
    ],
    documents: [
      { title: "Title & Registration", type: "PDF" },
      { title: "Title & Registration", type: "PDF" },
      { title: "Title & Registration", type: "PDF" },
      { title: "Title & Registration", type: "PDF" },
    ]
  },
  {
    id: 2,
    title: "Modern Glass Villa",
    category: "Real Estate",
    price: 12500000,
    location: "Malibu Coast, California, USA",
    image: "/images/landing/hero-villa.png",
    media: [
      { type: "image", url: "/images/landing/hero-villa.png" },
      { type: "image", url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" },
      { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-at-night-with-city-lights-in-the-background-28436-large.mp4" },
      { type: "image", url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000" },
    ],
    type: "VIP",
    createdAt: "2026-04-12",
    description: "A breathtaking masterpiece of modern architecture. This glass villa offers panoramic ocean views, an infinity pool that merges with the horizon, and state-of-the-art smart home integration throughout.",
    specs: [
      { label: "8 Beds", value: "8", icon: Home },
      { label: "4 Baths", value: "4", icon: Zap },
      { label: "5,000 sqft", value: "5,000", icon: Move },
      { label: "2021", value: "2021", icon: Calendar },
    ],
    detailedSpecs: [
      { label: "Year-Built", value: "2023" },
      { label: "Total Area", value: "8,500 sqft" },
      { label: "Bedrooms", value: "8 Suites" },
      { label: "Bathrooms", value: "10 Full" },
    ],
    history: ["Full historical records available"],
    documents: [{ title: "Property Deed", type: "PDF" }]
  },
  {
    id: 3,
    title: "Azimut Grande 35 Metri",
    category: "Yachts",
    price: 9500000,
    location: "Monaco Harbor, France",
    image: "/images/landing/hero-yacht.png",
    media: [
      { type: "image", url: "/images/landing/hero-yacht.png" },
      { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-luxury-yacht-sailing-on-blue-ocean-water-43319-large.mp4" },
    ],
    type: "VIP",
    createdAt: "2026-04-11",
    description: "The Azimut Grande 35 Metri is a tri-deck marvel that redefines on-water hospitality. With an raised pilot house and extensive use of carbon fiber, it offers light-filled spaces and multiple outdoor lounge areas.",
    specs: [
      { label: "108 ft", value: "108", icon: Ruler },
      { label: "5 Cabins", value: "5", icon: Ship },
      { label: "12 Guests", value: "12", icon: Users },
      { label: "2021", value: "2021", icon: Calendar },
    ],
    detailedSpecs: [
      { label: "Length", value: "35 Meters" },
      { label: "Hull", value: "GRP & Carbon Fiber" },
    ],
    history: ["Hull certification history available"],
    documents: [{ title: "Ship Registration", type: "PDF" }]
  },
  {
    id: 4,
    title: "Gulfstream G650ER",
    category: "Aviation",
    price: 65000000,
    location: "Teterboro Airport, NJ, USA",
    image: "/images/landing/hero-jet.png",
    media: [
      { type: "image", url: "/images/landing/hero-jet.png" },
      { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-private-jet-flying-above-clouds-43322-large.mp4" },
    ],
    type: "VIP",
    createdAt: "2026-04-13",
    description: "The Gulfstream G650ER is the gold standard for long-range business travel. Reaching speeds of Mach 0.925 and a range of 7,500 nautical miles, it connects the world with unparalleled speed and cabin comfort.",
    specs: [
      { label: "7,000 nm Range", value: "7,000", icon: Plane },
      { label: "16 Passengers", value: "16", icon: Users },
      { label: "Mach 0.925", value: "Mach 0.925", icon: Zap },
      { label: "2021", value: "2021", icon: Calendar },
    ],
    detailedSpecs: [
      { label: "Range", value: "7,500 nm" },
      { label: "Engines", value: "Rolls-Royce BR725" },
    ],
    history: ["Flight logs and maintenance records available"],
    documents: [{ title: "FAA Certificate", type: "PDF" }]
  },
];
