"use client";
import { FaCheck } from "react-icons/fa";
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


          <ImageSlider
            images={[projectBuilding, projectBuilding2, pic2, township, launge]}
            label="Project gallery"
          />
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
            Four iconic towers of G+30, placed on the four corners of the site, hold 600+ fully
            furnished residences. Every floor carries only six apartments, served by six lifts,
            so each home enjoys daylight, cross-ventilation and privacy — while 75% of the site
            is kept green and open for a central landscaped green, walking loops and a 50,000
            sq. ft. wellness clubhouse.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Noida International Airport is about 15 minutes away and began commercial flights in
            June 2026; the 1,000-acre International Film City is coming up in the adjoining
            Sector 21. Designed by ACPL, with Italian marble flooring and a grand 11.25 ft
            floor-to-floor height in every home.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "5 Acres · 4 Towers · G+30 · 600+ Residences",
              "Only 6 Homes per Floor · 6 Lifts per Tower",
              "Fully Furnished 3 & 4 BHK · 28+ Amenities",
              "₹8,500/Sq. Ft. All Inclusive* · 20×5 Payment Plan*",
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
