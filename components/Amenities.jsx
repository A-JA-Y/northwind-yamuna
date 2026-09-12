"use client";
import {
  FaSpa,
  FaSwimmingPool,
  FaDumbbell,
  FaLeaf,
  FaRunning,
  FaBasketballBall,
  FaTableTennis,
  FaFilm,
  FaLaptop,
  FaShieldAlt,
} from "react-icons/fa";

import g1 from "@/assets/amenity-1.webp";
import g2 from "@/assets/amenity-2.webp";
import g3 from "@/assets/amenity-3.webp";
import g4 from "@/assets/amenity-4.webp";
import g5 from "@/assets/amenity-5.webp";
import g6 from "@/assets/amenity-6.webp";
import g7 from "@/assets/amenity-7.webp";


const images = [g1, g2, g3, g4, g5, g6, g7];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaSpa />,            text: "50,000 Sq. Ft. Wellness Clubhouse with Spa, Sauna & Steam" },
  { icon: <FaSwimmingPool />,   text: "Temperature-Controlled Pool with Kids' Pool" },
  { icon: <FaDumbbell />,       text: "Fully Equipped Gym — Cardio & Strength Zones" },
  { icon: <FaLeaf />,           text: "Yoga & Meditation Deck; Reflexology Path" },
  { icon: <FaRunning />,        text: "Jogging Track & Cycling Loop Around the Central Green" },
  { icon: <FaBasketballBall />, text: "Multipurpose, Badminton & Squash Courts" },
  { icon: <FaTableTennis />,    text: "Indoor Games Lounge — TT, Billiards, Carrom, Chess" },
  { icon: <FaFilm />,           text: "Banquet Hall, Mini Theatre & Amphitheatre" },
  { icon: <FaLaptop />,         text: "Co-working Lounge, Library & Café" },
  { icon: <FaShieldAlt />,      text: "3-Tier Security, CCTV & Video Door Phones" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#4F3318] py-16 px-6 md:px-12 lg:px-20 text-[#FDE6C0] relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Mirrored background */}
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <h6 className="text-[#DCA54A] uppercase mb-4">
            28+ Wellness &amp; Lifestyle Amenities
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            A Campus Planned So Healthy Routines Happen Inside It
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              Northwind Sector 22D is themed around everyday wellness. With 600+ homes on five
              acres, only six homes per floor and a 50,000 sq. ft. clubhouse, every facility is
              shared by far fewer families than in a typical township.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li key={i} className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1.5">
                  <span className="flex-shrink-0 text-lg text-[#DCA54A] transition-transform duration-300 group-hover:scale-125">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              Plus rainwater harvesting, solar-lit common areas, EV charging, guest suites,
              crèche, pet park and a vehicle-free ground level — amenities are as per the
              proposed plan and will be finalised with the approved drawings.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0">
  <ImageSlider images={images} label="Amenities gallery" />
</div>

        </div>
      </div>
    </section>
  );
}
