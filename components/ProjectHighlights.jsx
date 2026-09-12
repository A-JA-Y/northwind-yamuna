"use client";

import Image from "next/image";

import lowDensity from "@/assets/highlight-1.webp";
import furnished from "@/assets/highlight-2.webp";
import wellness from "@/assets/highlight-3.webp";
import centralGreen from "@/assets/highlight-4.webp";
import airport from "@/assets/highlight-5.webp";

const cards = [
  {
    title: "Only 6 Homes per Floor · 6 Lifts",
    image: lowDensity,
  },
  {
    title: "Fully Furnished 3 & 4 BHK Homes",
    image: furnished,
  },
  {
    title: "50,000 Sq. Ft. Wellness Clubhouse",
    image: wellness,
  },
  {
    title: "75% Green & Open Spaces",
    image: centralGreen,
  },
  {
    title: "15 Min from Noida Intl. Airport",
    image: airport,
  },
];

export default function ProjectHighlights() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm">
          Northwind Wellness
        </h6>

        {/* Heading */}
        <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight">
          Fewer Homes. More Open Ground.
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed">
          Four iconic towers placed on the four corners of five acres, only six homes on each
          floor with six lifts, and 75% of the site kept green and open around a 50,000 sq. ft.
          clubhouse with 28+ amenities.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                placeholder="blur"
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                quality={80}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

              {/* Title */}
              <div className="absolute bottom-0 p-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <span
                  aria-hidden="true"
                  className="block h-[2px] w-8 mb-2 bg-[#DCA54A] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <p className="text-white text-sm font-medium leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
