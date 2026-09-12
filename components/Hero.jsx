"use client";

import Carousel from "@/components/ui/carousel";
import { useModal } from "./ModalContext";

import exteriorNight from "../assets/about-2.webp";
import lagoonPool from "../assets/amenity-1.webp";
import poolTwilight from "../assets/amenity-5.webp";
import centralGreen from "../assets/highlight-4.webp";
import clubhouseEntry from "../assets/amenity-7.webp";
import linesPattern from "../assets/Lines-PNG-Free-Image.webp";

const Hero = () => {
  const { openModal } = useModal();

  const slides = [
    {
      src: exteriorNight,
      alt: "Northwind Estates towers illuminated at night from the approach road",
      title: "The Address",
      description: "Six slim G+30 towers on five acres, 15 minutes from Noida International Airport.",
      button: "Explore the Project",
      href: "/overview",
    },
    {
      src: lagoonPool,
      alt: "Lagoon-style swimming pool framed by palms and landscaped decks",
      title: "Lagoon Pool",
      description: "A temperature-controlled lagoon pool set into the central landscaped green.",
      button: "See All Amenities",
      href: "/amenities",
    },
    {
      src: poolTwilight,
      alt: "Temperature-controlled pool at twilight beside the residences",
      title: "Pool Deck",
      description: "Evening pool deck beside the residences, shared by only three homes per floor.",
      button: "Book a Site Visit",
      onClick: openModal,
    },
    {
      src: centralGreen,
      alt: "Landscaped central green with seating pavilion and flowering beds",
      title: "Central Green",
      description: "Walking loops, seating pavilions and open lawns at the heart of the campus.",
      button: "View Floor Plans",
      href: "/floor-plans",
    },
    {
      src: clubhouseEntry,
      alt: "Wellness clubhouse entrance with water feature at twilight",
      title: "Clubhouse",
      description: "Wellness clubhouse with spa, sauna, steam and a fully equipped gym.",
      button: "Download E-Brochure",
      onClick: openModal,
    },
  ];

  return (
    <section className="hero-section relative w-full overflow-hidden" aria-label="Northwind Estates gallery">
      {/* Backdrop: deep brand brown with a soft gold glow and the line texture */}
      <div className="hero-backdrop absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${linesPattern.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "contain",
          }}
        />
      </div>

      <p className="hero-kicker">
        New Launch · Sector 22D, Yamuna Expressway · Fully Furnished 3 &amp; 4 BHK
      </p>

      <div className="relative w-full pb-[92px] md:pb-[184px]">
        <Carousel slides={slides} ariaLabel="Northwind Estates gallery" />
      </div>
    </section>
  );
};

export default Hero;
