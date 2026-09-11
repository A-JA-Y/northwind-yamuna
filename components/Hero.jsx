
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import bghero from "../assets/hero-desktop.webp";
import banner768 from "../assets/hero-mobile.webp";
import sanctuaryAerial from "../assets/sanctuary-aerial.webp";
import sanctuaryPool from "../assets/sanctuary-pool-twilight.webp";
import sanctuaryLawn from "../assets/sanctuary-open-lawn.webp";

const Hero = () => {
  const slides = [
    { desktop: bghero, mobile: banner768, alt: "Northwind Estates residences at Sector 22D", position: "object-[right_top]" },
    { desktop: sanctuaryAerial, mobile: sanctuaryAerial, alt: "NorthWind Sanctuary aerial view of towers, pool and landscaped green", position: "object-[center_60%]" },
    { desktop: sanctuaryPool, mobile: sanctuaryPool, alt: "NorthWind Sanctuary twilight swimming pool", position: "object-center" },
    { desktop: sanctuaryLawn, mobile: sanctuaryLawn, alt: "NorthWind Sanctuary open lawn and landscaped green", position: "object-center" },
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
              placeholder="blur"
              sizes="100vw"
              quality={90}
              className={`object-cover ${slide.position} hero-image ${index === current ? "hero-image-active" : ""}`}
            />
          </picture>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#171b18]/30 via-transparent to-white/5 pointer-events-none" />

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={slide.alt}
              type="button"
              role="tab"
              aria-label={`Show slide ${index + 1}`}
              aria-selected={index === current}
              onClick={() => goTo(index)}
              className="carousel-dot"
              style={{ width: index === current ? 40 : 18, height: 6 }}
            >
              <span
                className="carousel-dot-fill"
                style={{
                  "--carousel-duration": "5200ms",
                  animationPlayState: index === current && !isPaused ? "running" : "paused",
                  width: index === current ? undefined : index < current ? "100%" : "0%",
                }}
                data-active={index === current || undefined}
              />
            </button>
          ))}
        </div>

        <button type="button" aria-label="Previous hero image" onClick={() => goTo(current - 1)} className="hero-arrow left-4 md:left-8">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 2.5L4 8l6 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" aria-label="Next hero image" onClick={() => goTo(current + 1)} className="hero-arrow right-4 md:right-8">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 2.5l6 5.5-6 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="hero-scroll-cue hidden sm:flex" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
};

export default Hero;
