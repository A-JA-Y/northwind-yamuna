"use client";

import { useEffect, useState } from "react";

export default function ExperienceEnhancer({ children }: { children: React.ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("main section, body > div section, footer")
    );
    sections.forEach((section) => {
      section.classList.add("scroll-reveal");

      // Cascade the reveal through repeating cards/list items inside each
      // section instead of having the whole block pop in at once.
      const groups = section.querySelectorAll('[class*="grid-cols"], ul, ol');
      groups.forEach((group) => {
        const items = Array.from(group.children).filter(
          (el) => el instanceof HTMLElement && el.tagName !== "SCRIPT"
        ) as HTMLElement[];
        if (items.length > 1 && items.length <= 12) {
          items.forEach((item, i) => {
            item.classList.add("reveal-item");
            item.style.transitionDelay = `${Math.min(i * 70, 560)}ms`;
          });
        }
      });
    });

    // threshold 0 (not a ratio): a section taller than the viewport can never
    // reach a high ratio, and would otherwise stay invisible forever.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -80px" }
    );

    sections.forEach((section) => observer.observe(section));

    // Safety net: anything already at or above the fold on load (deep link,
    // restored scroll position, #anchor) is shown immediately rather than
    // waiting for a scroll event that may never come.
    const revealAlreadyPast = () => {
      sections.forEach((section) => {
        if (section.classList.contains("is-visible")) return;
        if (section.getBoundingClientRect().top < window.innerHeight) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      });
    };
    revealAlreadyPast();

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      setShowTop(window.scrollY > 520);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      {children}
      <button
        type="button"
        aria-label="Back to top"
        className={`back-to-top ${showTop ? "back-to-top-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span aria-hidden="true">↑</span>
      </button>
    </>
  );
}