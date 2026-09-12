"use client";

import { useEffect, useState } from "react";

const isElement = (el: Element): el is HTMLElement =>
  el instanceof HTMLElement && el.tagName !== "SCRIPT" && el.tagName !== "HR";

export default function ExperienceEnhancer({ children }: { children: React.ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // The hero has its own entrance and parallax; keep it out of the reveal system.
    const sections = Array.from(
      document.querySelectorAll("main section, body > div section, footer")
    ).filter((section) => !section.classList.contains("hero-section"));

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");

      // Cascade the reveal through repeating cards/list items inside each
      // section instead of having the whole block pop in at once.
      const groups = section.querySelectorAll('[class*="grid-cols"], ul, ol');
      groups.forEach((group) => {
        const items = Array.from(group.children).filter(isElement);
        if (items.length > 1 && items.length <= 12) {
          items.forEach((item, i) => {
            item.classList.add("reveal-item");
            item.style.transitionDelay = `${Math.min(i * 70, 560)}ms`;
          });
        }
      });

      // Two-column rows (text beside media) slide in from opposite sides.
      const rows = section.querySelectorAll('[class*="md:flex-row"], [class*="lg:flex-row"]');
      rows.forEach((row) => {
        const kids = Array.from(row.children).filter(isElement);
        if (kids.length !== 2) return;
        if (kids.some((k) => k.closest(".reveal-item, .reveal-from-left, .reveal-from-right"))) return;
        kids[0].classList.add("reveal-from-left");
        kids[1].classList.add("reveal-from-right");
      });

      // Heading blocks: eyebrow → title → intro, each a beat after the last.
      section.querySelectorAll("h1, h2").forEach((heading) => {
        if (!(heading instanceof HTMLElement)) return;
        if (heading.closest(".reveal-item, .reveal-heading")) return;

        const before = heading.previousElementSibling;
        const after = heading.nextElementSibling;
        let delay = 0;

        if (before instanceof HTMLElement && /^(H6|P|SPAN)$/.test(before.tagName)) {
          before.classList.add("reveal-item");
          before.style.transitionDelay = "0ms";
          delay = 90;
        }
        heading.classList.add("reveal-heading");
        heading.style.transitionDelay = `${delay}ms`;
        if (after instanceof HTMLElement && after.tagName === "P") {
          after.classList.add("reveal-item");
          after.style.transitionDelay = `${delay + 110}ms`;
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

    // Safety net: anything already at or above the fold (deep link, restored
    // scroll position, #anchor jump, or an instant scroll that skipped past a
    // section without ever intersecting) is shown immediately. Only sections
    // still waiting are checked, so the per-scroll cost shrinks to zero.
    const pending = new Set(sections);
    const revealAlreadyPast = () => {
      if (!pending.size) return;
      const viewportBottom = window.innerHeight;
      pending.forEach((section) => {
        if (section.classList.contains("is-visible")) {
          pending.delete(section);
          return;
        }
        if (section.getBoundingClientRect().top < viewportBottom) {
          section.classList.add("is-visible");
          observer.unobserve(section);
          pending.delete(section);
        }
      });
    };
    revealAlreadyPast();

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      setShowTop(window.scrollY > 520);
      revealAlreadyPast();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
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
