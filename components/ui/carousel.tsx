"use client";

/*
 * Adapted from Aceternity UI's "carousel" registry item
 * (npx shadcn@latest add @aceternity/carousel-demo).
 *
 * Project adaptations:
 *  - next/image with static imports (blur placeholder, responsive sizes)
 *  - optional description, href (Link) or onClick per slide
 *  - autoplay that pauses on hover / focus / off-screen / hidden tab
 *  - pointer swipe, keyboard navigation, live region
 *  - tilt/parallax written straight to CSS vars (no per-slide rAF loop)
 *  - Tabler arrow from react-icons instead of a new @tabler/icons-react dep
 *  - valid list markup (the <li> is the outer element)
 */

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type SyntheticEvent,
} from "react";
import { TbArrowNarrowRight } from "react-icons/tb";

export interface SlideData {
  title: string;
  button: string;
  src: StaticImageData | string;
  alt?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  onSelect: (index: number) => void;
}

const pad = (n: number) => String(n).padStart(2, "0");

const Slide = ({ slide, index, current, onSelect }: SlideProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  const isActive = current === index;
  const { src, button, title, description, href, onClick, alt } = slide;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${event.clientX - (r.left + r.width / 2)}px`);
    el.style.setProperty("--y", `${event.clientY - (r.top + r.height / 2)}px`);
  };

  const handleMouseLeave = () => {
    tiltRef.current?.style.setProperty("--x", "0px");
    tiltRef.current?.style.setProperty("--y", "0px");
  };

  const handleCtaClick = (event: SyntheticEvent) => {
    if (!isActive) {
      event.preventDefault();
      onSelect(index);
      return;
    }
    onClick?.();
  };

  const cta = href ? (
    <Link href={href} className="ac-slide-btn" tabIndex={isActive ? 0 : -1} onClick={handleCtaClick}>
      {button}
      <TbArrowNarrowRight aria-hidden="true" />
    </Link>
  ) : (
    <button type="button" className="ac-slide-btn" tabIndex={isActive ? 0 : -1} onClick={handleCtaClick}>
      {button}
      <TbArrowNarrowRight aria-hidden="true" />
    </button>
  );

  return (
    <li className="ac-slide" aria-current={isActive ? "true" : undefined}>
      <div
        ref={tiltRef}
        className={`ac-slide-tilt ${isActive ? "is-active" : ""}`}
        onClick={() => !isActive && onSelect(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="ac-slide-media">
          <Image
            src={src}
            alt={alt ?? title}
            fill
            priority={index === 0}
            placeholder={typeof src === "string" ? undefined : "blur"}
            sizes="(max-width: 768px) 84vw, 980px"
            draggable={false}
            className="ac-slide-img object-cover"
          />
          <div className="ac-slide-shade" aria-hidden="true" />
        </div>

        <article className="ac-slide-copy">
          <h2 className="ac-slide-title">{title}</h2>
          {description && <p className="ac-slide-desc">{description}</p>}
          <div className="ac-slide-actions">{cta}</div>
        </article>
      </div>
    </li>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => (
  <button
    type="button"
    className="ac-control"
    data-dir={type}
    title={title}
    aria-label={title}
    onClick={handleClick}
  >
    <TbArrowNarrowRight aria-hidden="true" />
  </button>
);

interface CarouselProps {
  slides: SlideData[];
  /** Milliseconds between automatic advances. 0 disables autoplay. */
  autoPlay?: number;
  ariaLabel?: string;
}

export default function Carousel({ slides, autoPlay = 6000, ariaLabel = "Gallery" }: CarouselProps) {
  const count = slides.length;
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, delta: 0, suppressClick: false });
  const id = useId();

  const isPaused = hovered || !inView || !tabVisible || autoPlay <= 0 || count <= 1;

  const goTo = useCallback((index: number) => setCurrent(((index % count) + count) % count), [count]);
  const handleNextClick = useCallback(() => setCurrent((i) => (i + 1) % count), [count]);
  const handlePreviousClick = useCallback(() => setCurrent((i) => (i - 1 + count) % count), [count]);

  /* Autoplay; `current` is a dependency so any manual move restarts the timer. */
  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(handleNextClick, autoPlay);
    return () => clearInterval(timer);
  }, [isPaused, autoPlay, handleNextClick, current]);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    });
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, []);

  /* Swipe (mouse + touch). A drag that moves the carousel swallows the click
     that follows it so a slide's CTA is not triggered by accident. */
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { active: true, startX: event.clientX, delta: 0, suppressClick: false };
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    drag.current.delta = event.clientX - drag.current.startX;
  };
  const onPointerUp = () => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    if (Math.abs(d.delta) > 50) {
      d.suppressClick = true;
      if (d.delta < 0) handleNextClick();
      else handlePreviousClick();
    }
  };
  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (drag.current.suppressClick) {
      drag.current.suppressClick = false;
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") handleNextClick();
    else if (event.key === "ArrowLeft") handlePreviousClick();
    else if (event.key === "Home") goTo(0);
    else if (event.key === "End") goTo(count - 1);
    else return;
    event.preventDefault();
  };

  return (
    <div
      ref={rootRef}
      className="ac-carousel relative mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      aria-labelledby={`carousel-heading-${id}`}
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClickCapture={onClickCapture}
      onDragStart={(event) => event.preventDefault()}
    >
      <ul
        className="ac-track absolute top-0 left-0 flex"
        style={{ transform: `translateX(-${current * (100 / count)}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={slide.title} slide={slide} index={index} current={current} onSelect={goTo} />
        ))}
      </ul>

      <div className="ac-controls">
        <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />

        <div className="ac-counter" aria-hidden="true">
          <span key={current} className="ac-counter-current">{pad(current + 1)}</span>
          <span className="ac-counter-bar">
            <span
              key={`fill-${current}`}
              className="ac-counter-fill"
              style={{
                animationDuration: `${autoPlay}ms`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </span>
          <span className="ac-counter-total">{pad(count)}</span>
        </div>

        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>

      <p id={`carousel-heading-${id}`} className="sr-only" aria-live="polite">
        Slide {current + 1} of {count}: {slides[current]?.title}
      </p>
    </div>
  );
}
