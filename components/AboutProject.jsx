"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

import projectBuilding from "../assets/about-1.webp";
import projectBuilding2 from "../assets/about-2.webp";
import pic2 from "../assets/about-3.webp";
import launge from "../assets/about-4.webp";
import township from "../assets/about-5.webp";


import { useModal } from "./ModalContext";

const AboutProject = ({heading}) => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">

        {/* Left: Images */}
        <div className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]">


          <ImageSlider images={[projectBuilding,projectBuilding2,pic2,township,launge]}/>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          {/* Tagline */}
          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            New Launch · Sector 22D · Yamuna Expressway
          </h6>

          {/* Title */}
         {heading ? ( <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            About Northwind Sector 22D
          </h1>):( <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            About Northwind Sector 22D
          </h2>)}

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Northwind Estates has brought its low-density, design-led approach from NorthWind
            Sanctuary in Greater Noida to a five-acre YEIDA parcel in Sector 22D — planned as a
            wellness community rather than a tightly packed high-rise cluster.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Six slim towers of G+30 hold 540 fully furnished residences. Every floor carries only
            three apartments, served by four high-speed lifts, so each home opens on three sides
            for daylight and cross-ventilation — while the ground level is kept largely free for a
            central green, walking loops and open-air wellness spaces.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Noida International Airport is about 15 minutes away and began commercial flights in
            June 2026; the 1,000-acre International Film City is coming up in the adjoining
            Sector 21. Designed by Confluence, the practice behind NorthWind Sanctuary.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "5 Acres · 6 Towers · G+30 · 540 Residences",
              "Only 3 Homes per Floor · 4 Lifts per Tower",
              "Fully Furnished 3 & 4 BHK · Three-Side Open",
              "3 BHK from ₹1.23 Cr* · 20×5 Payment Plan*",
            ].map((item) => (
              <li
                key={item}
                className="group flex items-start gap-2 text-gray-700 text-sm transition-transform duration-300 hover:translate-x-1.5"
              >
                <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm transition-transform duration-300 group-hover:scale-125" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal()}
              className="inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] transition-colors duration-300 cursor-pointer"
            >
              Download E-Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
