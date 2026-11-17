import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import EnquirySection from "@/components/EnquirySection";
import YouTubeLite from "@/components/YouTubeLite";
import heroImg from "@/assets/about-2.webp";
import towersImg from "@/assets/highlight-1.webp";
import furnishedImg from "@/assets/highlight-2.webp";
import gatedEntryImg from "@/assets/about-3.webp";
import expresswayImg from "@/assets/highlight-5.webp";
import masterPlanImg from "@/assets/master-plan.webp";

const PAGE_URL = "https://northwindyamuna.com/villa-vs-flat-yamuna-expressway";
const TITLE = "Villa vs Flat vs Plot on Yamuna Expressway: What to Buy";
const H1 = "Villa vs Flat on Yamuna Expressway: How to Decide Near Jewar Airport";
const DESCRIPTION =
  "Villa vs flat on Yamuna Expressway: compare price, upkeep, rent and resale, see where a YEIDA plot fits, and what a furnished 3 or 4 BHK near Jewar costs.";
const PUBLISHED = "2026-11-17";

const AIRPORT_SOURCE =
  "https://newsonair.gov.in/noida-international-airport-in-jewar-begins-commercial-flight-operations-this-morning/";
const HOUSING_EXPRESSWAY_SOURCE = "https://housing.com/in/buy/greater_noida/yamuna_expressway";
const HOUSING_VILLAS_SOURCE = "https://housing.com/in/buy/greater_noida/villas-greater_noida_2";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "villa vs flat",
    "villa vs flat on yamuna expressway",
    "villa or flat which is better",
    "difference between villa and flat",
    "flat vs villa",
    "yeida plot vs flat",
    "flats near jewar airport",
    "3 bhk flats in sector 22d",
    "4 bhk flats in sector 22d",
    "northwind sector 22d",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Northwind Yamuna",
    locale: "en_IN",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [
      {
        url: "https://northwindyamuna.com/hero.webp",
        width: 1903,
        height: 960,
        alt: "Northwind Estates Sector 22D towers on the Yamuna Expressway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://northwindyamuna.com/hero.webp"],
  },
};

/* ─────────────────────────────────────────────
   CONTENT
───────────────────────────────────────────── */

const toc = [
  { label: "Villa, flat or plot: the basics", href: "#basics" },
  { label: "Side by side", href: "#side-by-side" },
  { label: "Price", href: "#price" },
  { label: "Availability", href: "#availability" },
  { label: "Daily living", href: "#daily-living" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Safety", href: "#safety" },
  { label: "Investment: rent, resale, appreciation", href: "#investment" },
  { label: "Payment and timing", href: "#payment" },
  { label: "Which one should you pick?", href: "#which-one" },
  { label: "Before you commit", href: "#checklist" },
  { label: "Northwind Sector 22D", href: "#northwind" },
  { label: "FAQs", href: "#faqs" },
];

const comparisonRows: [string, string, string, string][] = [
  ["Upfront cost", "Highest", "Lowest for a ready home", "Land only, building cost extra"],
  ["Move-in", "Ready or under construction", "At possession", "After you build"],
  ["Rent", "Possible, but few tenants", "Easiest to rent out", "None until built"],
  ["Upkeep", "All yours", "Shared", "Yours once built"],
  ["Security", "Gated community", "Gated tower", "Depends on the sector"],
  ["Effort", "Medium", "Low", "High"],
  ["Resale", "Slow, few buyers", "Quicker", "Depends on location"],
];

const priceCards = [
  { value: "₹1.25 Cr*", label: "3 BHK, 1,467 sq. ft." },
  { value: "₹2.17 Cr*", label: "4 BHK + servant + study, 2,550 sq. ft." },
  { value: "₹8,500", label: "Per sq. ft., all inclusive*" },
  { value: "20×5", label: "Five instalments of 20%" },
];

const pickCards = [
  {
    title: "Pick a villa if",
    points: [
      "You have a bigger budget and want a ready house with land",
      "You need space for a large family",
      "You’re happy to hold for many years, given how few buyers there are at resale",
    ],
    highlight: false,
  },
  {
    title: "Pick a plot if",
    points: [
      "You want to design and build your own home",
      "You can fund construction separately and supervise it",
      "You don’t need rental income for years",
    ],
    highlight: false,
  },
  {
    title: "Pick a flat if",
    points: [
      "You want a ready, low-effort home near the airport",
      "You’d like rental income soon after handover",
      "You’re an NRI, a first-time buyer or an investor",
    ],
    highlight: true,
  },
];

const faqs = [
  {
    q: "Villa vs flat: which is better on Yamuna Expressway?",
    a: "For most buyers, a flat. It costs less, can be rented out sooner and needs less upkeep. A villa suits buyers with a bigger budget who want land, privacy and room for a large family, and who don’t mind a small resale market.",
  },
  {
    q: "Should I buy a YEIDA plot or a flat?",
    a: "A plot gives you land and the freedom to design, but you pay for construction separately, handle the approvals and wait to move in. It also earns nothing until a house is built. A flat skips all that: once it’s handed over, you can move in or rent it out.",
  },
  {
    q: "Is a flat near Jewar airport good for rental income?",
    a: "It can be. Commercial flights started at Noida International Airport on 15 June 2026, and jobs at the airport and nearby Film City add to rental demand. Furnished flats are the easiest to rent out.",
  },
  {
    q: "What is the price of Northwind Sector 22D?",
    a: "Indicative launch prices start at ₹1.25 crore* for a 1,467 sq. ft. 3 BHK and go up to ₹2.17 crore* for a 2,550 sq. ft. 4 BHK with a study, at ₹8,500 per sq. ft. all inclusive*.",
  },
  {
    q: "What does “all inclusive” cover at Northwind?",
    a: "It covers furnishing, floor and park-facing PLC, one covered car park, Northwind Wellness Club membership, and power backup and infrastructure charges. GST, stamp duty, registration and IFMS are extra.",
  },
  {
    q: "What is the 20×5 payment plan?",
    a: "You pay five instalments of 20% each, linked to construction milestones, with the last one due on offer of possession.",
  },
  {
    q: "Is Northwind Sector 22D RERA registered?",
    a: "UP RERA registration is under process. The number will be published once it’s granted, and you can check its status at up-rera.in.",
  },
  {
    q: "Does Northwind offer villas or plots?",
    a: "No. Northwind Sector 22D offers only 3 and 4 BHK flats.",
  },
];

/* ─────────────────────────────────────────────
   SCHEMA
───────────────────────────────────────────── */

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      headline: H1,
      description: DESCRIPTION,
      url: PAGE_URL,
      mainEntityOfPage: PAGE_URL,
      image: "https://northwindyamuna.com/hero.webp",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: "en-IN",
      author: { "@type": "Organization", name: "Real Revenue" },
      publisher: { "@type": "Organization", name: "Real Revenue" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://northwindyamuna.com/" },
        { "@type": "ListItem", position: 2, name: "Villa vs Flat on Yamuna Expressway", item: PAGE_URL },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────
   SMALL PIECES
───────────────────────────────────────────── */

const linkCls = "text-[#c8922a] font-semibold hover:underline";
const h2Cls = "scroll-mt-28 text-2xl md:text-3xl font-semibold text-gray-900 mb-5";
const pCls = "text-base md:text-[17px] leading-relaxed text-gray-700 mb-5";

function ExternalSource({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer nofollow" className={linkCls}>
      {children}
    </a>
  );
}

function Figure({
  src,
  alt,
  caption,
  priority = false,
  narrow = false,
}: {
  src: React.ComponentProps<typeof Image>["src"];
  alt: string;
  caption: string;
  priority?: boolean;
  /** For portrait images, so they don't run taller than the screen. */
  narrow?: boolean;
}) {
  return (
    <figure className={`my-8 ${narrow ? "max-w-sm mx-auto" : ""}`}>
      <div className="overflow-hidden rounded-xl border border-[#e5dcc5] shadow-sm bg-[#FAF8F4]">
        <Image
          src={src}
          alt={alt}
          priority={priority}
          placeholder="blur"
          sizes={narrow ? "(max-width: 640px) 100vw, 384px" : "(max-width: 768px) 100vw, 768px"}
          className="w-full h-auto"
        />
      </div>
      <figcaption className="mt-3 text-xs md:text-sm text-gray-500 leading-relaxed">{caption}</figcaption>
    </figure>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function VillaVsFlatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="hero-section relative w-full min-h-[440px] md:min-h-[520px] flex items-end overflow-hidden">
        <Image
          src={heroImg}
          alt="Northwind Estates towers illuminated at night from the approach road on the Yamuna Expressway"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 md:py-16">
          <p className="uppercase text-xs md:text-sm tracking-widest text-[#DCA54A] font-semibold mb-3">
            Buyer’s Guide · Yamuna Expressway
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl">{H1}</h1>
          <p className="text-gray-200 text-sm md:text-lg mt-4 max-w-3xl leading-relaxed">
            Compare price, upkeep, rent and resale, see where a YEIDA plot fits, and what a furnished
            3 or 4 BHK near Jewar costs.
          </p>
          <p className="text-white/70 text-xs mt-5">
            By Real Revenue ·{" "}
            <time dateTime={PUBLISHED}>17 November 2026</time>
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="w-full bg-[#FAF8F4] border-b border-[#e5dcc5]">
        <ol className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap gap-2 text-xs text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#c8922a]">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-800">Villa vs Flat on Yamuna Expressway</li>
        </ol>
      </nav>

      <ModalWrapper />

      <section className="w-full bg-white py-12 md:py-16 px-6">
        <article className="max-w-3xl mx-auto">
          {/* INTRO */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            For years, a lot of buyers on the Yamuna Expressway came looking for plots. Then Noida
            International Airport at Jewar{" "}
            <ExternalSource href={AIRPORT_SOURCE}>
              began commercial flight operations on 15 June 2026
            </ExternalSource>
            , and the choice got wider. Now the same buyer often looks at a YEIDA plot, a villa in a
            gated township and a furnished flat in a high-rise, all in one weekend.
          </p>
          <p className={pCls}>
            Most guides only ask “villa or flat, which is better?” On the expressway a plot is usually
            the third option, so this guide covers all three. It settles the villa vs flat on Yamuna
            Expressway question with real price points, and compares cost, time to move in, rent,
            upkeep, safety and resale.
          </p>

          {/* TOC */}
          <nav
            aria-label="On this page"
            className="my-10 rounded-xl border border-[#e5dcc5] bg-[#FAF8F4] p-6"
          >
            <p className="uppercase text-xs tracking-widest text-[#DCA54A] font-semibold mb-4">
              On this page
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal pl-5 text-sm text-gray-700">
              {toc.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#c8922a] hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* BASICS */}
          <h2 id="basics" className={h2Cls}>Villa, Flat or Plot: The Basics</h2>
          <p className={pCls}>
            A <strong>villa</strong> is a ready house on its own plot, usually G+1 or G+2, sold inside
            a gated community with shared roads and security.
          </p>
          <p className={pCls}>
            A <strong>flat</strong> is a home inside an apartment tower. The difference between villa
            and flat is mostly about ownership and effort. With a villa you hold a plot and look after
            the whole house. A flat owner shares the land, and the society takes care of the building.
          </p>
          <p className={pCls}>
            A <strong>YEIDA plot</strong> is land only. You build your own house, at your own pace and
            your own cost.
          </p>
          <p className={pCls}>
            Whichever you choose, the land here comes from the development authority on lease. That’s
            why the Northwind{" "}
            <Link href="/price" className={linkCls}>cost sheet</Link> lists a one-time lease rent,
            payable at possession.
          </p>
          <Figure
            src={towersImg}
            alt="Northwind Sector 22D apartment towers on the Yamuna Expressway"
            caption="A flat is a home inside an apartment tower. Northwind Sector 22D has four G+30 towers with only six homes per floor. Artist’s impression."
          />

          {/* SIDE BY SIDE */}
          <h2 id="side-by-side" className={`${h2Cls} mt-12`}>Villa vs Flat vs Plot: Side by Side</h2>
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-10">
            <table className="w-full text-xs sm:text-sm text-left">
              <caption className="sr-only">
                Villa vs flat vs plot on the Yamuna Expressway compared on cost, move-in, rent, upkeep,
                security, effort and resale
              </caption>
              <thead className="bg-[#FAF8F4] text-gray-900">
                <tr>
                  <th scope="col" className="px-2 sm:px-4 py-2.5 sm:py-3 font-semibold">Point</th>
                  <th scope="col" className="px-2 sm:px-4 py-2.5 sm:py-3 font-semibold">Villa</th>
                  <th scope="col" className="px-2 sm:px-4 py-2.5 sm:py-3 font-semibold text-[#a8761c]">Flat</th>
                  <th scope="col" className="px-2 sm:px-4 py-2.5 sm:py-3 font-semibold">Plot</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([point, villa, flat, plot]) => (
                  <tr key={point} className="border-t border-[#e5dcc5]">
                    <th scope="row" className="px-2 sm:px-4 py-2.5 sm:py-3 font-semibold text-gray-900 bg-[#FAF8F4]/60 sm:whitespace-nowrap">
                      {point}
                    </th>
                    <td className="px-2 sm:px-4 py-2.5 sm:py-3 text-gray-600">{villa}</td>
                    <td className="px-2 sm:px-4 py-2.5 sm:py-3 text-gray-800 bg-[#FDF6E7]">{flat}</td>
                    <td className="px-2 sm:px-4 py-2.5 sm:py-3 text-gray-600">{plot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PRICE */}
          <h2 id="price" className={h2Cls}>Price</h2>
          <p className={pCls}>
            On the expressway, the price gap between a villa and a flat is smaller than people expect,
            but it’s still there.{" "}
            <ExternalSource href={HOUSING_VILLAS_SOURCE}>Portal listings</ExternalSource> for one
            Sector 25 YEIDA township show 3 BHK flats from about ₹1.35 crore to ₹2.28 crore, a 3 BHK
            villa at around ₹2.26 crore, and 5 BHK villas at roughly ₹4 crore to ₹6 crore.
          </p>
          <p className={pCls}>
            At Northwind Sector 22D, indicative launch prices start at ₹1.25 crore* for a 1,467 sq. ft.
            3 BHK and go up to ₹2.17 crore* for a 2,550 sq. ft. 4 BHK with a servant room and study.
            The ₹8,500 per sq. ft. rate is quoted as all inclusive. It covers furnishing, floor and
            park-facing PLC, one covered car park, Northwind Wellness Club membership, and power backup
            and infrastructure charges. GST at 5%, stamp duty, registration and IFMS are extra.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
            {priceCards.map((card) => (
              <div
                key={card.label}
                className="rounded-lg border border-[#e5dcc5] bg-[#FAF8F4] p-4 text-center"
              >
                <p className="text-xl md:text-2xl font-bold text-[#a8761c]">{card.value}</p>
                <p className="text-xs text-gray-600 mt-1 leading-snug">{card.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 italic -mt-4 mb-6">
            *Indicative launch pricing; subject to change. See the full{" "}
            <Link href="/price" className={linkCls}>price list and cost sheet</Link>.
          </p>
          <p className={pCls}>
            A plot looks cheapest on paper, but the land price is only the start. Before you compare
            it fairly with a ready home, add construction, approvals, a boundary wall, utility
            connections, and a year or more of overseeing the build.
          </p>

          {/* AVAILABILITY */}
          <h2 id="availability" className={`${h2Cls} mt-12`}>Availability</h2>
          <p className={pCls}>
            Choice matters too.{" "}
            <ExternalSource href={HOUSING_EXPRESSWAY_SOURCE}>Housing.com</ExternalSource> lists more
            than 1,210 flats but only about 19 houses and villas for sale on the Yamuna Expressway.
            With so few villas on the market, you get fewer options when you buy and fewer buyers when
            you sell. In the flat vs villa trade-off, that’s a clear point for flats.
          </p>
          <div
            className="my-8 rounded-xl border border-[#e5dcc5] p-6"
            role="img"
            aria-label="Listings on the Yamuna Expressway: more than 1,210 flats against about 19 houses and villas"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Homes listed for sale on the Yamuna Expressway (Housing.com)
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-gray-900">Flats</span>
                  <span className="text-gray-700">1,210+</span>
                </div>
                <div className="h-3 rounded-full bg-[#F0E6C5] overflow-hidden">
                  <div className="h-full w-full rounded-full bg-[#DCA54A]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold text-gray-900">Houses &amp; villas</span>
                  <span className="text-gray-700">~19</span>
                </div>
                <div className="h-3 rounded-full bg-[#F0E6C5] overflow-hidden">
                  <div className="h-full w-[1.6%] min-w-[6px] rounded-full bg-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* DAILY LIVING */}
          <h2 id="daily-living" className={`${h2Cls} mt-12`}>Daily Living</h2>
          <p className={pCls}>
            A villa gives you things a flat can’t: your own entrance, a lawn, a terrace, and no shared
            walls. For a large joint family, that’s hard to give up.
          </p>
          <p className={pCls}>
            A flat wins on ease. At Northwind, the homes come fully furnished, each tower has six
            lifts, and there are six apartments on each floor. If you’re an NRI or an investor planning
            to rent the home out, a furnished flat saves you months of setting it up. See the layouts
            on the <Link href="/floor-plans" className={linkCls}>floor plans</Link> page and the
            fittings on the <Link href="/specifications" className={linkCls}>specifications</Link>{" "}
            page.
          </p>
          <Figure
            src={furnishedImg}
            alt="Fully furnished living and dining room in a Northwind Sector 22D apartment"
            caption="Homes at Northwind come fully furnished, so a flat can be lived in or rented out without months of fit-out. Indicative interior render."
            narrow
          />

          {/* MAINTENANCE */}
          <h2 id="maintenance" className={`${h2Cls} mt-12`}>Maintenance</h2>
          <p className={pCls}>
            Western UP summers are harsh, and the monsoon arrives in a rush. A villa owner deals with
            terrace waterproofing, wall cracks, pumps, the garden and the boundary wall alone. A plot
            owner takes all of that on too, after first spending a year or more building. In a tower,
            the facility team looks after the structure and the shared services, and you pay a fixed
            monthly charge.
          </p>

          {/* SAFETY */}
          <h2 id="safety" className={`${h2Cls} mt-12`}>Safety</h2>
          <p className={pCls}>
            Many sectors along the expressway are still filling up. A standalone house in a half-built
            sector can feel isolated at night, and you’d have to arrange your own guard. A gated tower
            gives you security, neighbours and power backup from the day you move in. If you’re buying
            for elderly parents, that counts for more than an extra room.
          </p>
          <Figure
            src={gatedEntryImg}
            alt="Gated tower entrance and drop-off at a Northwind Estates residential project"
            caption="A gated tower gives you security, neighbours and power backup from the day you move in. Artist’s impression."
          />

          {/* INVESTMENT */}
          <h2 id="investment" className={`${h2Cls} mt-12`}>Villa vs Flat Investment on the Expressway</h2>
          <p className={pCls}>
            <strong>Rent.</strong> The airport is drawing new jobs to the belt, and so is the
            International Film City in Sector 21, about five minutes from Sector 22D. Most of the
            people taking those jobs will rent flats. That’s why flats near Jewar airport, especially
            furnished ones, can start earning soon after handover. A plot earns nothing until a house
            is built on it.
          </p>
          <p className={pCls}>
            <strong>Resale.</strong> With so few villas listed, selling one depends on finding the
            right buyer. Flats in a large branded project have a much wider pool of buyers.
          </p>
          <p className={pCls}>
            <strong>Appreciation.</strong> Land-heavy assets like plots and villas can gain a lot over
            a long hold, especially near new infrastructure. Flats benefit from the same airport and
            expressway growth, with a smaller ticket and less risk of sitting empty.
          </p>
          <Figure
            src={expresswayImg}
            alt="The Yamuna Expressway corridor leading towards Noida International Airport"
            caption="The Yamuna Expressway corridor. Sector 22D is about 15 minutes from Noida International Airport."
          />
          <p className={pCls}>
            For the numbers behind this, read{" "}
            <Link href="/blogs/northwind-sector-22d-investment-guide-2026" className={linkCls}>
              Is Northwind Sector 22D a good investment in 2026?
            </Link>
          </p>

          {/* PAYMENT */}
          <h2 id="payment" className={`${h2Cls} mt-12`}>Payment and Timing</h2>
          <p className={pCls}>
            How you pay differs a lot between the three. A plot is mostly paid for in full, and then
            you fund the construction yourself. A ready villa needs the whole amount at purchase. An
            under-construction flat spreads the cost out. Northwind’s 20×5 plan splits the price into
            five instalments of 20%, linked to construction milestones, with the last one due on offer
            of possession. Our{" "}
            <Link href="/blogs/northwind-sector-22d-20x5-payment-plan" className={linkCls}>
              20×5 payment plan explainer
            </Link>{" "}
            walks through a worked example.
          </p>
          <div className="my-6 rounded-lg border-l-4 border-[#DCA54A] bg-[#FDF6E7] px-5 py-4 text-sm text-gray-700 leading-relaxed">
            The project’s UP RERA registration is under process, and the number will be published once
            it’s granted. Check the registration on{" "}
            <ExternalSource href="https://www.up-rera.in/">up-rera.in</ExternalSource> before you pay
            anything.
          </div>

          {/* WHICH ONE */}
          <h2 id="which-one" className={`${h2Cls} mt-12`}>Which One Should You Pick?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {pickCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-xl border p-5 ${
                  card.highlight
                    ? "border-[#DCA54A] bg-[#FDF6E7] shadow-md"
                    : "border-[#e5dcc5] bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CHECKLIST */}
          <h2 id="checklist" className={h2Cls}>Before You Commit</h2>
          <ul className="space-y-3 mb-10">
            {[
              <>
                Check UP RERA registration on{" "}
                <ExternalSource href="https://www.up-rera.in/">up-rera.in</ExternalSource>. This
                applies to villa communities too.
              </>,
              <>Read the lease deed, the lease rent and the transfer terms.</>,
              <>
                For a plot, ask about building plan approval and how long construction will
                realistically take.
              </>,
              <>Ask for the RERA carpet area. Prices here are quoted on super area.</>,
              <>For a furnished home, get the furnishing list, the brands and the warranty in writing.</>,
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-base text-gray-700 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#DCA54A] text-[11px] font-bold text-white"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* NORTHWIND */}
          <h2 id="northwind" className={h2Cls}>Northwind Sector 22D</h2>
          <p className={pCls}>
            If a flat suits your plan, Northwind Sector 22D is a 5-acre project in Sector 22D, Yamuna
            Expressway, by Northwind Estates Pvt. Ltd., with four towers placed at the four corners of
            the site. The towers are G+30 and hold more than 600 fully furnished homes.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6 text-base text-gray-700 leading-relaxed">
            <li>
              <strong>3 BHK:</strong> 1,467 and 1,675 sq. ft. See the{" "}
              <Link href="/3-bhk-flats-sector-22d-yamuna-expressway" className={linkCls}>
                3 BHK flats in Sector 22D
              </Link>
            </li>
            <li>
              <strong>4 BHK:</strong> 1,950 and 2,550 sq. ft., with a servant room. See the{" "}
              <Link href="/4-bhk-flats-sector-22d-yamuna-expressway" className={linkCls}>
                4 BHK flats in Sector 22D
              </Link>
            </li>
            <li>
              <strong>Airport:</strong> about 15 minutes to Noida International Airport. See the{" "}
              <Link href="/blogs/northwind-sector-22d-distance-from-jewar-airport" className={linkCls}>
                route and drive time
              </Link>
            </li>
            <li>
              <strong>RERA:</strong> under process
            </li>
          </ul>
          <Figure
            src={masterPlanImg}
            alt="Master plan of Northwind Sector 22D showing four towers, central green and clubhouse on the 5-acre site"
            caption="Northwind Sector 22D master plan: four G+30 towers on a 5-acre site. Indicative; subject to approved drawings."
          />
          <p className={pCls}>
            See the <Link href="/amenities" className={linkCls}>amenities</Link>,{" "}
            <Link href="/location" className={linkCls}>location</Link> and{" "}
            <Link href="/northwind-estates" className={linkCls}>Northwind Estates</Link> pages for
            more.
          </p>

          {/* VIDEO */}
          <div className="my-12 rounded-xl border border-[#e5dcc5] bg-[#FAF8F4] p-5 md:p-6">
            <p className="uppercase text-xs tracking-widest text-[#DCA54A] font-semibold mb-2">
              Developer walkthrough
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              See What a Northwind Estates Community Looks Like
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Sector 22D is still at launch stage, so this tour is of NorthWind Sanctuary, the
              developer’s ongoing project in Sector Pi-1, Greater Noida. It is built on the same
              low-density, fewer-homes-per-floor approach planned for Sector 22D.
            </p>
            <div className="overflow-hidden rounded-lg shadow-md">
              <YouTubeLite videoid="D7aZuzIDetY" title="NorthWind Sanctuary developer walkthrough" />
            </div>
          </div>

          {/* FAQS */}
          <h2 id="faqs" className={h2Cls}>FAQs</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 text-base mb-2">
                  {i + 1}. {faq.q}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* CONCLUSION */}
          <h2 id="conclusion" className={h2Cls}>Conclusion</h2>
          <p className={pCls}>
            Villa vs flat on the Yamuna Expressway has no single winner. A villa gives you land and
            space, but there are few buyers when you sell. A plot gives you freedom, but it takes money,
            time and patience. A flat is the easiest way to own near the airport, and you can rent it
            out soon after handover. For most buyers, especially first-time owners, NRIs and investors,
            that last option makes the most sense.
          </p>
          <p className={pCls}>
            To get the cost sheet for 3 and 4 BHK homes at Northwind Sector 22D,{" "}
            <Link href="/contact" className={linkCls}>contact us</Link> or call{" "}
            <a href="tel:+919717700596" className={linkCls}>+91 97177 00596</a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
            <a
              href="tel:+919717700596"
              className="inline-block text-center bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-md transition-colors shadow-md"
            >
              Call +91 97177 00596
            </a>
            <a
              href="#book-site-visit"
              className="inline-block text-center border border-[#DCA54A] text-[#a8761c] hover:bg-[#FDF6E7] text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-md transition-colors"
            >
              Get the Cost Sheet
            </a>
          </div>

          <p className="mt-12 pt-6 border-t border-[#e5dcc5] text-xs text-gray-500 italic leading-relaxed">
            This website is run by Real Revenue, a unit of Earlydays Innovations Pvt. Ltd., an
            authorised channel partner for Northwind Estates, and is not the developer’s official
            website. Prices, areas, payment plans and renders are for information only. Verify all
            details, including RERA status, with the developer.
          </p>
        </article>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
      <EnquirySection />
    </>
  );
}
