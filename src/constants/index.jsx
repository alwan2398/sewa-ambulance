import { Heart, MapPin, PhoneCall, Timer } from "lucide-react";

export const navMenu = [
  {
    name: "Home",
    path: "#hero",
  },
  {
    name: "Service",
    path: "#service",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

export const myServices = [
  {
    id: 1,
    title: "Ambulans Darurat 24 Jam",
    desc: "Layanan ambulans yang siap membantu di setiap kondisi darurat",
    icon: Timer,
    bgColor: "#E54D2E",
    delay: 0.9,
  },
  {
    id: 2,
    title: "Ambulans Non-Darurat",
    desc: "Solusi transportasi medis untuk kebutuhan rujukan rumah sakit atau perjalanan medis non-darurat.",
    icon: PhoneCall,
    bgColor: "#2E77E5FF",
    delay: 0.9,
  },
  {
    id: 3,
    title: "Mengantar sesuai tujuan & lokasi",
    desc: "Kami siap mengantar pasien ke rumah sakit atau tujuan lainnya.",
    icon: MapPin,
    bgColor: "#17D640FF",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Cepat & Tepat dan Siaga",
    desc: "Kami siap datang dan mengantar pasien secepat mungkin dengan pelayanan terbaik.",
    icon: Heart,
    bgColor: "#F11595FF",
    delay: 0.9,
  },
];
