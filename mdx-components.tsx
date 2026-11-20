/**
 * mdx-components.tsx
 */

import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps, type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheck, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import YouTubeLite from "@/components/YouTubeLite";

export { Link };

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

type StatItem = { value: string; label: string };
type ConnItem = { label: string; dist: string };
type GridCard = { title: string; body: string };
type PriceRow = { config: string; size: string; price: string; rate: string };
type FAQItem = { q: string; a: string };
type AngleCard = { icon: string; title: string; body: string; tags: string[] };
type RentalCard = { title: string; range: string; note: string };








/* ─────────────────────────────────────────────
   TAG CHIP
───────────────────────────────────────────── */

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-emerald-50 text-emerald-900 text-[10.5px] font-medium px-2.5 py-0.5 rounded-full mr-1.5 mb-1 font-sans">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   CALLOUT / ALERT
───────────────────────────────────────────── */

export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "note";
}) {
  const styles = {
    info: "bg-blue-50 border-blue-100 text-blue-900",
    warning: "bg-amber-50 border-amber-100 text-amber-900",
    success: "bg-emerald-50 border-emerald-100 text-emerald-900",
    note: "bg-gray-50 border-gray-200 text-gray-900",
  };

  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    success: "✅",
    note: "📝",
  };

  return (
    <div className={`flex gap-4 p-5 rounded-xl border my-8 ${styles[type]}`}>
      <span className="text-xl flex-shrink-0">{icons[type]}</span>
      <div className="text-[15px] leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   YOUTUBE
───────────────────────────────────────────── */

export function YouTube({ id, title }: { id: string; title?: string }) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl shadow-xl aspect-video bg-gray-100 border border-gray-100">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title ?? "YouTube video player"}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   LEAD PARAGRAPH
───────────────────────────────────────────── */

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[1.2rem] md:text-[1.35rem] leading-relaxed text-gray-700 font-light mb-10 border-b border-gray-50 pb-8">
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────
   FLEX GRID
───────────────────────────────────────────── */

export function Grid({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) {
  const colMap: Record<number, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };
  return (
    <div className={`grid grid-cols-1 ${colMap[cols] || "md:grid-cols-2"} gap-6 my-10`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TYPOGRAPHY / HEADINGS
───────────────────────────────────────────── */

export function H1({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="font-serif text-[2.5rem] md:text-[3.2rem] leading-tight font-bold text-gray-900 mb-8 tracking-tight"
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="font-serif text-[1.8rem] md:text-[2.1rem] leading-snug font-semibold text-gray-900 mt-16 mb-6 pb-3 border-b-2 border-emerald-600/20 relative group scroll-mt-24"
      {...props}
    >
      <span className="absolute -left-0 bottom-[-2px] w-16 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-24"></span>
      {children}
    </h2>
  );
}

export function H3({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="font-serif text-[1.4rem] md:text-[1.6rem] leading-relaxed font-semibold text-gray-800 mt-12 mb-5 scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className="font-sans text-[1.1rem] uppercase tracking-widest font-bold text-emerald-800 mt-10 mb-4"
      {...props}
    >
      {children}
    </h4>
  );
}

export function H5({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className="text-lg font-serif italic text-emerald-700 mt-10 mb-4"
      {...props}
    >
      {children}
    </h5>
  );
}

export function H6({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      className="text-sm font-sans uppercase tracking-[0.2em] font-medium text-gray-400 mt-8 mb-4"
      {...props}
    >
      {children}
    </h6>
  );
}

/* ─────────────────────────────────────────────
   HERO BAND
───────────────────────────────────────────── */

export function HeroBand({
  label,
  title,
  isH1=true,
  sub,
  tags = [],
}: {
  label: string;
  title: string;
  isH1?: boolean;
  sub: string;
  tags?: string[];
}) {
  return (
    <div className="relative bg-gray-50 rounded-xl px-8 pt-8 pb-7 mb-10 overflow-hidden border-l-4 border-emerald-600">
      <p className="text-[10.5px] tracking-widest uppercase text-emerald-600 font-medium mb-2">
        {label}
      </p>
      {isH1 ?(<h1 className="font-serif text-[2rem] leading-snug font-semibold text-gray-900 mb-3">
        {title}
      </h1>):( <h2 className="font-serif text-[2rem] leading-snug font-semibold text-gray-900 mb-3">
        {title}
      </h2>)
      }
      
      <p className="text-[0.95rem] text-gray-500 font-light leading-relaxed">
        {sub}
      </p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────── */

export function TOC({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="border border-gray-200 rounded-xl px-6 py-5 mb-10">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-3">
        Contents
      </p>
      <ol className="list-decimal list-inside space-y-1">
        {items.map((item) => (
          <li key={item.href} className="text-sm text-gray-500">
            <Link href={item.href} className="text-emerald-600 hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STAT GRID
───────────────────────────────────────────── */

export function StatGrid({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-7">
      {items.map((s) => (
        <div
          key={s.label}
          className="bg-gray-50 rounded-lg px-4 py-3.5 text-center"
        >
          <div className="font-serif text-2xl text-emerald-600 font-semibold">
            {s.value}
          </div>
          <div className="text-[10.5px] uppercase tracking-wide text-gray-400 mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PULL QUOTE
───────────────────────────────────────────── */

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-[3px] border-emerald-500 pl-5 pr-4 py-3.5 my-7 bg-gray-50 rounded-r-lg">
      <div className="font-serif text-[1.1rem] italic text-gray-700 font-normal m-0">
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRICE TABLE
───────────────────────────────────────────── */

export function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {["Configuration", "Size Range", "Price Range", "Avg. Rate/sq. ft."].map((h) => (
              <th
                key={h}
                className="bg-emerald-800 text-white px-3.5 py-2.5 text-left font-medium text-[0.82rem]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : "bg-white"}>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-normal text-gray-800">
                {row.config}
              </td>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-light text-gray-600">
                {row.size}
              </td>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-light text-gray-600">
                {row.price}
              </td>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-light text-gray-600">
                {row.rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[0.75rem] text-gray-400 mt-2">
        Prices are indicative launch figures, September 2026, and subject to change.
        Floor-rise, PLC and view premium may apply on select units.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   INFO GRID
───────────────────────────────────────────── */

export function InfoGrid({ cards }: { cards: GridCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-gray-50 rounded-lg px-4 py-3.5 text-sm text-gray-500 font-light"
        >
          <strong className="block text-gray-900 font-medium mb-1 text-[0.9rem]">
            {c.title}
          </strong>
          {c.body}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONNECTIVITY LIST
───────────────────────────────────────────── */

export function ConnList({ items }: { items: ConnItem[] }) {
  return (
    <div className="border border-gray-200 rounded-lg px-4 py-3 my-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 py-2.5 ${i < items.length - 1 ? "border-b border-gray-100" : ""
            }`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
          <span className="flex-1 text-sm text-gray-800">{item.label}</span>
          <span className="text-[0.8rem] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full flex-shrink-0">
            {item.dist}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ANGLE CARDS
───────────────────────────────────────────── */

export function AngleGrid({ cards }: { cards: AngleCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
      {cards.map((c) => (
        <div
          key={c.title}
          className="border border-gray-200 rounded-xl p-5"
        >
          <div className="text-2xl mb-2">{c.icon}</div>
          <h3 className="text-[0.975rem] font-medium text-gray-900 mb-2 mt-0">
            {c.title}
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-3 mt-0">
            {c.body}
          </p>
          <div className="flex flex-wrap gap-1">
            {c.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   RENTAL GRID
───────────────────────────────────────────── */

export function RentalGrid({ cards }: { cards: RentalCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-gray-50 rounded-lg px-4 py-3.5 text-sm"
        >
          <strong className="block text-gray-900 font-medium mb-1">
            {c.title}
          </strong>
          <span className="text-gray-700">{c.range}</span>
          <br />
          <span className="text-[0.8rem] text-gray-400">{c.note}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-2 my-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="border border-gray-200 rounded-lg overflow-hidden group"
        >
          <summary className="flex justify-between items-center px-4 py-3.5 text-sm font-medium text-gray-900 cursor-pointer bg-gray-50 hover:bg-white list-none select-none">
            {item.q}
            <span className="text-gray-400 text-xs ml-3 flex-shrink-0 transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <div className="px-4 py-3 text-sm text-gray-500 font-light leading-relaxed bg-white">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CTA BOX
───────────────────────────────────────────── */

export function CTABox({
  title,
  sub,
  buttonLabel,
  href,
}: {
  title: string;
  sub: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <div className="bg-emerald-800 rounded-xl px-8 py-7 my-10 text-center">
      <h3 className="font-serif text-2xl text-white font-semibold mb-2">
        {title}
      </h3>
      <p className="text-white/80 text-sm mb-5 leading-relaxed">{sub}</p>
      <Link
        href={href}
        className="inline-block bg-white text-emerald-800 text-sm font-medium px-6 py-2.5 rounded-md hover:bg-emerald-50 transition-colors"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DISCLAIMER
───────────────────────────────────────────── */

export function Disclaimer({ description }: { description: string }) {
  return (
    <div className="text-[0.75rem] text-gray-400 text-center mt-6 leading-relaxed">
      {description}
    </div>
  );
}


/* ─────────────────────────────────────────────
   BLOG FIGURE (static-imported image + caption)
───────────────────────────────────────────── */

export function BlogFigure({
  src,
  alt,
  caption,
  narrow = false,
  crop,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  /** For portrait images, so they don't run taller than the screen. */
  narrow?: boolean;
  /** Show a wide letterbox slice of the image, anchored to its lower part (e.g. to trim empty sky). */
  crop?: "wide-bottom";
}) {
  const sizes = narrow ? "(max-width: 640px) 100vw, 448px" : "(max-width: 1024px) 100vw, 820px";
  return (
    <figure className={`my-10 ${narrow ? "max-w-md mx-auto" : ""}`}>
      <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-gray-50">
        {crop ? (
          <div className="relative aspect-[16/7]">
            <Image
              src={src}
              alt={alt}
              placeholder="blur"
              fill
              sizes={sizes}
              className="object-cover object-[center_85%]"
            />
          </div>
        ) : (
          <Image src={src} alt={alt} placeholder="blur" sizes={sizes} className="w-full h-auto" />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-[13px] text-gray-500 font-light leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   VIDEO CARD (lightweight YouTube embed)
───────────────────────────────────────────── */

export function VideoEmbed({
  id,
  title,
  label = "Watch",
  caption,
  source,
}: {
  id: string;
  title: string;
  label?: string;
  caption?: string;
  source?: string;
}) {
  return (
    <figure className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5">
      <div className="mb-3">
        <p className="text-[10.5px] uppercase tracking-widest text-emerald-600 font-medium mb-1">
          {label}
        </p>
        <p className="font-serif text-lg text-gray-900 font-semibold leading-snug">{title}</p>
      </div>
      {/* lite-youtube caps itself at 720px wide by default; let it fill the card */}
      <div className="overflow-hidden rounded-xl shadow-md [&_lite-youtube]:!max-w-none">
        <YouTubeLite videoid={id} title={title} />
      </div>
      {(caption || source) && (
        <figcaption className="mt-3 text-[13px] text-gray-500 font-light leading-relaxed">
          {caption}
          {source && (
            <span className="block text-xs text-gray-400 mt-1">Video: {source}, via YouTube</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   COST SHEET (receipt-style rows)
───────────────────────────────────────────── */

type CostRow = { label: string; value: string; note?: string; strong?: boolean };

const toneBorder = {
  own: "border-t-[#c8952a]",
  rent: "border-t-emerald-600",
};

const toneText = {
  own: "text-[#a8761d]",
  rent: "text-emerald-700",
};

export function CostSheet({
  title,
  tone = "own",
  rows,
}: {
  title: string;
  tone?: "own" | "rent";
  rows: CostRow[];
}) {
  return (
    <div className={`rounded-2xl border border-gray-200 border-t-4 ${toneBorder[tone]} bg-white p-5 shadow-sm`}>
      <p className={`text-[11px] uppercase tracking-widest font-semibold mb-3 ${toneText[tone]}`}>
        {title}
      </p>
      <dl className="divide-y divide-gray-100">
        {rows.map((r) => (
          <div key={r.label} className={`py-2.5 ${r.strong ? "bg-gray-50 -mx-2 px-2 rounded-md" : ""}`}>
            <div className="flex items-baseline justify-between gap-4">
              <dt className={`text-sm ${r.strong ? "font-medium text-gray-900" : "text-gray-600"}`}>
                {r.label}
              </dt>
              <dd className={`text-sm tabular-nums text-right whitespace-nowrap ${r.strong ? "font-semibold text-gray-900" : "text-gray-800"}`}>
                {r.value}
              </dd>
            </div>
            {r.note && <p className="text-xs text-gray-400 mt-1 leading-relaxed">{r.note}</p>}
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COMPARISON BARS
───────────────────────────────────────────── */

type BarItem = {
  label: string;
  value: number;
  display: string;
  tone?: "own" | "rent";
};

const toneBar = {
  own: "bg-[#c8952a]",
  rent: "bg-emerald-600",
};

export function CompareBars({
  title,
  items,
  caption,
}: {
  title?: string;
  items: BarItem[];
  caption?: string;
}) {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <figure className="my-10 rounded-2xl border border-gray-200 p-5 md:p-6">
      {title && (
        <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-5">{title}</p>
      )}
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-baseline justify-between gap-4 mb-1.5">
              <span className="text-sm text-gray-700">{item.label}</span>
              <span className="font-serif text-lg font-semibold text-gray-900 tabular-nums whitespace-nowrap">
                {item.display}
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full ${toneBar[item.tone ?? "rent"]}`}
                style={{ width: `${Math.round((item.value / max) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="text-xs text-gray-400 mt-5 leading-relaxed">{caption}</figcaption>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   PAYMENT PLAN TIMELINE (own money vs loan)
───────────────────────────────────────────── */

type PlanStep = { stage: string; share: string; funding: string; tone: "own" | "mixed" | "loan" };

export function PlanTimeline({
  steps,
  ownShare,
  caption,
}: {
  steps: PlanStep[];
  /** Percentage of the price paid from your own money, shown on the bar. */
  ownShare: number;
  caption?: string;
}) {
  const dot = {
    own: "bg-[#c8952a]",
    mixed: "bg-gradient-to-r from-[#c8952a] to-emerald-700",
    loan: "bg-emerald-700",
  };
  return (
    <figure className="my-10 rounded-2xl border border-gray-200 p-5 md:p-6">
      <div className="flex h-9 w-full overflow-hidden rounded-lg text-[11px] font-medium text-white">
        <div className="flex items-center justify-center bg-[#c8952a] whitespace-nowrap" style={{ width: `${ownShare}%` }}>
          <span className="sm:hidden">Own {ownShare}%</span>
          <span className="hidden sm:inline">Own money {ownShare}%</span>
        </div>
        <div className="flex flex-1 items-center justify-center bg-emerald-700 whitespace-nowrap">
          Home loan {100 - ownShare}%
        </div>
      </div>
      <ol className="mt-5 grid grid-cols-1 sm:grid-cols-5 gap-3 list-none p-0">
        {steps.map((s, i) => (
          <li key={s.stage} className="rounded-xl bg-gray-50 px-3.5 py-3 sm:text-center">
            <div className="flex sm:flex-col items-center gap-2 sm:gap-1.5">
              <span className={`inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${dot[s.tone]}`}>
                {i + 1}
              </span>
              <span className="text-sm font-medium text-gray-900 leading-snug sm:min-h-[2.5rem] sm:flex sm:items-center sm:justify-center">
                {s.stage}
              </span>
            </div>
            <p className="font-serif text-xl text-emerald-700 font-semibold mt-1.5">{s.share}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{s.funding}</p>
          </li>
        ))}
      </ol>
      {caption && (
        <figcaption className="text-xs text-gray-400 mt-4 leading-relaxed">{caption}</figcaption>
      )}
    </figure>
  );
}

/* ─────────────────────────────────────────────
   DATA TABLE (generic headers, optional highlight)
───────────────────────────────────────────── */

export function DataTable({
  caption,
  headers,
  rows,
  highlight,
  note,
}: {
  caption?: string;
  headers: string[];
  rows: string[][];
  /** [rowIndex, colIndex] of a cell to emphasise. */
  highlight?: [number, number];
  note?: string;
}) {
  return (
    <>
    <div className="my-8 rounded-xl border border-gray-200 overflow-hidden">
      {caption && (
        <p
          aria-hidden
          className="text-left text-[11px] uppercase tracking-widest text-gray-400 font-medium px-4 pt-4 pb-3 m-0"
        >
          {caption}
        </p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr>
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="bg-emerald-800 text-white px-2.5 sm:px-4 py-2.5 text-left font-medium text-[0.78rem] sm:text-[0.82rem] align-bottom"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r} className={r % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                {row.map((cell, c) => {
                  const isHi = highlight && highlight[0] === r && highlight[1] === c;
                  const cls = `px-2.5 sm:px-4 py-2.5 border-b border-gray-100 tabular-nums text-[13px] sm:text-sm sm:whitespace-nowrap ${
                    isHi
                      ? "bg-emerald-50 text-emerald-900 font-semibold ring-2 ring-inset ring-emerald-500"
                      : c === 0
                        ? "text-gray-900 font-normal"
                        : "text-gray-600 font-light"
                  }`;
                  return c === 0 ? (
                    <th key={c} scope="row" className={`${cls} text-left`}>
                      {cell}
                    </th>
                  ) : (
                    <td key={c} className={cls}>
                      {/* On narrow screens break only after the first word ("7.8%" / "a year"), never mid-phrase */}
                      {cell.includes(" ") ? (
                        <>
                          <span className="whitespace-nowrap">{cell.slice(0, cell.indexOf(" "))}</span>{" "}
                          <span className="whitespace-nowrap">{cell.slice(cell.indexOf(" ") + 1)}</span>
                        </>
                      ) : (
                        cell
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {note && <p className="text-[0.78rem] text-gray-400 -mt-5 mb-8 leading-relaxed">{note}</p>}
    </>
  );
}

/* ─────────────────────────────────────────────
   SPLIT CARDS (two checklists side by side)
───────────────────────────────────────────── */

type SplitCard = { title: string; tone?: "own" | "rent"; items: string[] };

export function SplitCards({ cards }: { cards: SplitCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
      {cards.map((card) => {
        const tone = card.tone ?? "rent";
        return (
          <div
            key={card.title}
            className={`rounded-2xl border border-gray-200 border-t-4 ${toneBorder[tone]} bg-white p-5 shadow-sm`}
          >
            <p className={`font-serif text-lg font-semibold mb-3 ${toneText[tone]}`}>{card.title}</p>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {card.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[15px] text-gray-600 leading-relaxed">
                  <FaCheck className={`mt-1.5 h-3 w-3 flex-shrink-0 ${toneText[tone]}`} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CTA STRIP (call / WhatsApp / page buttons)
───────────────────────────────────────────── */

type CTAAction = { label: string; href: string; variant?: "primary" | "secondary" | "whatsapp" | "call" };

export function CTAStrip({
  eyebrow,
  title,
  sub,
  actions,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  actions: CTAAction[];
}) {
  const btn = {
    primary: "bg-emerald-800 text-white hover:bg-emerald-900",
    secondary: "bg-white text-emerald-800 border border-emerald-800/30 hover:border-emerald-800",
    whatsapp: "bg-[#1f9d55] text-white hover:bg-[#188046]",
    call: "bg-[#c8952a] text-white hover:bg-[#a8761d]",
  };
  const icon = {
    primary: <FaArrowRight className="h-3 w-3" aria-hidden />,
    secondary: <FaArrowRight className="h-3 w-3" aria-hidden />,
    whatsapp: <FaWhatsapp className="h-4 w-4" aria-hidden />,
    call: <FaPhoneAlt className="h-3 w-3" aria-hidden />,
  };
  return (
    <div className="my-10 rounded-2xl border border-[#e5dcc5] bg-[#FAF8F4] px-6 py-6 md:px-8 md:py-7">
      {eyebrow && (
        <p className="text-[10.5px] uppercase tracking-widest text-[#a8761d] font-semibold mb-1.5">{eyebrow}</p>
      )}
      <p className="font-serif text-xl md:text-2xl text-gray-900 font-semibold leading-snug">{title}</p>
      {sub && <p className="text-sm text-gray-600 mt-2 leading-relaxed">{sub}</p>}
      <div className="mt-5 flex flex-wrap gap-3">
        {actions.map((a) => {
          const variant = a.variant ?? "primary";
          const cls = `inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium no-underline transition-colors ${btn[variant]}`;
          const content = (
            <>
              {variant === "whatsapp" || variant === "call" ? icon[variant] : null}
              {a.label}
              {variant === "primary" || variant === "secondary" ? icon[variant] : null}
            </>
          );
          const external = /^(https?:|tel:|mailto:)/.test(a.href);
          return external ? (
            <a
              key={a.label}
              href={a.href}
              className={cls}
              {...(a.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {content}
            </a>
          ) : (
            <Link key={a.label} href={a.href} className={cls}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   OPTIMISED IMAGE WRAPPER
───────────────────────────────────────────── */

function MDXImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt ?? ""}
      className="rounded-xl w-full h-auto"
    />
  );
}

/* ─────────────────────────────────────────────
   NEWS SPECIFIC COMPONENTS (HTML REPLICATION)
───────────────────────────────────────────── */

export function ArticleWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[680px] mx-auto py-6 md:py-12 px-4 md:px-0" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
      {children}
    </div>
  );
}

export function NewsCategory({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#1a3a2a] text-[#a8d5b5] text-[11px] font-medium tracking-[0.08em] uppercase px-[10px] py-[4px] rounded-[3px] mb-4 font-sans">
      {children}
    </span>
  );
}

export function NewsHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-[30px] font-[900] leading-[1.18] text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
      {children}
    </h1>
  );
}

export function NewsSubhead({ children }: { children: React.ReactNode }) {
  return (
    <div className="italic text-[16px] font-[300] text-gray-500 leading-[1.6] mb-4 pl-4 border-l-[3px] border-[#2e7d52]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
      {children}
    </div>
  );
}

export function NewsMeta({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-3 border-t-[0.5px] border-b-[0.5px] border-gray-200 mb-6 flex-wrap text-[12px] text-gray-500 font-sans">
      {children}
    </div>
  );
}

export function NewsStatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] my-6">
      {children}
    </div>
  );
}

export function NewsStatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-gray-50 border-[0.5px] border-gray-200 rounded-lg p-4 text-center">
      <span className="text-[26px] font-[700] text-[#2e7d52] block leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
        {num}
      </span>
      <span className="font-sans text-[11px] text-gray-400 mt-1 block leading-[1.4]">
        {label}
      </span>
    </div>
  );
}


export function NewsPullQuote({ quote, cite }: { quote: string; cite: string }) {
  return (
    <div className="my-6 p-5 md:p-6 bg-gray-50 border-l-4 border-[#2e7d52] rounded-r-lg">
      <p className="italic text-[18px] text-gray-800 mb-2 leading-[1.5]" style={{ fontFamily: "'Playfair Display', serif" }}>
        &ldquo;{quote}&rdquo;
      </p>
      {cite && (
        <cite className="font-sans text-[12px] text-gray-400 not-italic">
          — {cite}
        </cite>
      )}
    </div>
  );
}

export function NewsHighlightBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#f0faf4] border-[0.5px] border-[#a8d5b5] rounded-lg p-5 md:p-6 my-6">
      <h4 className="font-sans text-[12px] font-[500] uppercase tracking-[0.06em] text-[#2e7d52] mb-3">
        {title}
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-[14px] leading-[1.7] text-gray-800" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NewsCTAStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 my-10 flex-wrap items-center">
      {children}
    </div>
  );
}
export function NewsButton({
  href,
  title,
  variant = "primary",
}: {
  href: string;
  title: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={`
        group relative inline-flex items-center justify-center
        px-6 py-2 text-sm font-medium tracking-wide
        transition-all duration-300 ease-out
        rounded-[2px]
        ${variant === "primary"
          ? "bg-[#1a3a2a] text-white shadow-sm hover:shadow-md hover:bg-[#224d38] active:scale-[0.98]"
          : "bg-transparent text-[#1a3a2a] border border-[#1a3a2a]/40 hover:border-[#1a3a2a] hover:bg-[#f5f5f5] active:scale-[0.98]"
        }
      `}
    >
      {title}
    </Link>
  );
}


/* ─────────────────────────────────────────────
   EXPORT — useMDXComponents
───────────────────────────────────────────── */

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,

    p: ({ children }) => (
      <p className="text-[17.5px] leading-[1.85] text-gray-600 font-light mb-6">
        {children}
      </p>
    ),



    strong: ({ children }) => (
      <strong className="font-medium text-gray-900">
        {children}
      </strong>
    ),

    ul: ({ children }) => (
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 text-[15.5px]">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-2 mb-6 text-gray-600 text-[15.5px]">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),


    img: (props) => <MDXImage {...(props as ImageProps)} />,
    a: ({ href, children, ...rest }) => (
      <Link
        href={href ?? "#"}
        className="text-[#2e7d52] font-medium underline underline-offset-4 decoration-emerald-200 hover:decoration-[#2e7d52] transition-colors"
        {...rest}
      >
        {children}
      </Link>
    ),
    hr: () => <hr className="border-none border-t border-gray-200 my-8" />,

    HeroBand,
    TOC,
    StatGrid,
    PullQuote,
    PriceTable,
    InfoGrid,
    ConnList,
    AngleGrid,
    RentalGrid,
    FAQ,
    CTABox,
    Disclaimer,
    Tag,
    BlogFigure,
    VideoEmbed,
    CostSheet,
    CompareBars,
    PlanTimeline,
    DataTable,
    SplitCards,
    CTAStrip,

    /* News Components */
    ArticleWrap,
    NewsCategory,
    NewsHeadline,
    NewsSubhead,
    NewsMeta,
    NewsStatGrid,
    NewsStatCard,
    NewsPullQuote,
    NewsHighlightBox,
    NewsCTAStrip,
    NewsButton,
    Link,

    Callout,
    YouTube,
    Lead,
    Grid,
  };
}