"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_INTERVAL = 4200;
const pad = (n) => String(n).padStart(2, "0");

export default function ImageSlider({ images, label = "Image gallery" }) {
  const count = images.length;
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [dragging, setDragging] = useState(false);

  const rootRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, delta: 0 });

  const isPaused = hovered || dragging || !inView;

  const goTo = useCallback(
    (index) => setCurrent(((index % count) + count) % count),
    [count]
  );
  const nextSlide = useCallback(() => setCurrent((i) => (i + 1) % count), [count]);
  const prevSlide = useCallback(() => setCurrent((i) => (i - 1 + count) % count), [count]);

  /* `current` is a dependency so manual navigation restarts the timer and the
     progress dot never runs out of step with the actual advance. */
  useEffect(() => {
    if (isPaused || count <= 1) return undefined;
    const interval = setInterval(nextSlide, AUTO_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, count, current]);

  /* Only auto-play while the slider is actually on screen. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  const setDragOffset = (px) => {
    rootRef.current?.style.setProperty("--carousel-drag", `${px}px`);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target.closest("button")) return;
    drag.current = { active: true, startX: event.clientX, delta: 0 };
    rootRef.current?.setPointerCapture?.(event.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (event) => {
    const d = drag.current;
    if (!d.active) return;
    d.delta = event.clientX - d.startX;
    setDragOffset(d.delta * 0.35);
  };

  const endDrag = () => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    setDragging(false);
    setDragOffset(0);
    if (d.delta < -40) nextSlide();
    else if (d.delta > 40) prevSlide();
    d.delta = 0;
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") nextSlide();
    else if (event.key === "ArrowLeft") prevSlide();
    else if (event.key === "Home") goTo(0);
    else if (event.key === "End") goTo(count - 1);
    else return;
    event.preventDefault();
  };

  return (
    <div
      ref={rootRef}
      className={`carousel-root relative w-full h-full overflow-hidden rounded shadow-2xl group/slider outline-none ${
        dragging ? "is-dragging" : ""
      }`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
      onDragStart={(event) => event.preventDefault()}
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
            draggable={false}
          />
        </div>
      ))}

      {/* Bottom gradient for control legibility */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent pointer-events-none z-10" />

      {/* Counter */}
      <div className="carousel-count" aria-hidden="true">
        <span key={current} className="carousel-count-current">{pad(current + 1)}</span>
        <span className="carousel-count-total">/ {pad(count)}</span>
      </div>

      <p className="sr-only" aria-live="polite">
        Image {current + 1} of {count}
      </p>

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
