"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_INTERVAL = 4200;

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef(null);

  const goTo = useCallback(
    (index) => setCurrent((index + images.length) % images.length),
    [images.length]
  );
  const nextSlide = useCallback(() => goTo(current + 1), [current, goTo]);
  const prevSlide = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused || images.length <= 1) return undefined;
    const interval = setInterval(nextSlide, AUTO_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, images.length]);

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };
  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 40) {
      if (distance < 0) nextSlide();
      else prevSlide();
    }
    touchStart.current = null;
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") nextSlide();
    if (event.key === "ArrowLeft") prevSlide();
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded shadow-2xl group/slider outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image gallery"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide absolute inset-0 ${
            index === current ? "carousel-slide-active" : ""
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
            fill
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
            quality={85}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Bottom gradient for control legibility */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent pointer-events-none z-10" />

      {/* Left Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous image"
        className="carousel-arrow left-3 opacity-100 sm:opacity-0 sm:group-hover/slider:opacity-100 focus-visible:opacity-100"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 2.5L4 8l6 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="carousel-arrow right-3 opacity-100 sm:opacity-0 sm:group-hover/slider:opacity-100 focus-visible:opacity-100"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 2.5l6 5.5-6 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Progress-fill indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20" role="tablist" aria-label="Slides">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            onClick={() => goTo(index)}
            aria-label={`Show image ${index + 1}`}
            aria-selected={index === current}
            className="carousel-dot"
          >
            <span
              className="carousel-dot-fill"
              style={{
                animationPlayState: index === current && !isPaused ? "running" : "paused",
                width: index === current ? undefined : index < current ? "100%" : "0%",
              }}
              data-active={index === current || undefined}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
