
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import bghero from "../assets/hero-desktop.webp";
import banner768 from "../assets/hero-mobile.webp";
import aboutView from "../assets/about-1.webp";
import wellnessView from "../assets/amenity-3.webp";
import landscapeView from "../assets/about-5.webp";

const Hero = () => {
  const slides = [
    { desktop: bghero, mobile: banner768, alt: "Northwind Estates residences at Sector 22D" },
    { desktop: aboutView, mobile: aboutView, alt: "Northwind Estates landscaped residences" },
    { desktop: wellnessView, mobile: wellnessView, alt: "Northwind Estates wellness amenity" },
    { desktop: landscapeView, mobile: landscapeView, alt: "Northwind Estates central green" },
  ];
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef(null);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = setInterval(() => {
      setCurrent((slide) => (slide + 1) % slides.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);
  const handleTouchStart = (event) => { touchStart.current = event.touches[0].clientX; };
  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) goTo(current + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <section
      className="w-full hero-section"
      aria-label="Northwind Estates gallery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full h-[62vh] min-h-[420px] md:h-[70vh] items-center relative overflow-hidden">
        {slides.map((slide, index) => (
          <picture
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <source media="(max-width: 767px)" srcSet={slide.mobile.src} />
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              quality={90}
              className={`object-cover object-[right_top] hero-image ${index === current ? "hero-image-active" : ""}`}
            />
          </picture>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#171b18]/30 via-transparent to-white/5 pointer-events-none" />

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={slide.alt}
              type="button"
              role="tab"
              aria-label={`Show slide ${index + 1}`}
              aria-selected={index === current}
              onClick={() => goTo(index)}
              className={`h-1.5 transition-all duration-500 ${index === current ? "w-10 bg-white" : "w-5 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>

        <button type="button" aria-label="Previous hero image" onClick={() => goTo(current - 1)} className="hero-arrow left-4 md:left-8">‹</button>
        <button type="button" aria-label="Next hero image" onClick={() => goTo(current + 1)} className="hero-arrow right-4 md:right-8">›</button>
      </div>
    </section>
  );
};

export default Hero;
