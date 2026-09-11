import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D FAQs | Price, RERA, Possession, Reviews",
  description:
    "Answers on Northwind Estates Sector 22D Yamuna Expressway — price, RERA status, possession, furnishing, payment plan, location, site visits and reviews.",
  alternates: { canonical: "https://northwindyamuna.com/faqs" },
};

const faqSections: { heading: string; faqs: { q: string; a: string }[] }[] = [
  {
    heading: "Project Basics",
    faqs: [
      {
        q: "What is Northwind Estates Sector 22D?",
        a: "A new residential launch by Northwind Estates on a 5-acre YEIDA plot in Sector 22D, Yamuna Expressway — six towers of G+30, 540 fully furnished 3 and 4 BHK homes, three homes per floor, planned as a wellness community.",
      },
      {
        q: "Why is it also called Northwind Wellness?",
        a: "Wellness is the theme of the master plan and clubhouse — spa, yoga, reflexology, jogging loops and a large central green. Sales teams and partners use 'Northwind Wellness' as the working name; the official project name will be published with the RERA registration.",
      },
      {
        q: "How big is the project?",
        a: "5 acres, 6 towers, G+30 floors, 540 residences.",
      },
    ],
  },
  {
    heading: "Homes",
    faqs: [
      {
        q: "What configurations are available?",
        a: "3 BHK + 3T at 1,675 sq. ft. and 4 BHK + 4T + servant at 2,200 sq. ft. super area.",
      },
      {
        q: "Are the homes furnished?",
        a: "Yes — modular kitchen, wardrobes, ACs, false ceilings with lighting and sanitary fittings are part of the offer.",
      },
      {
        q: "How many homes per floor?",
        a: "Three, served by four high-speed lifts per tower.",
      },
    ],
  },
  {
    heading: "Price and Payment",
    faqs: [
      {
        q: "What is the starting price?",
        a: "₹1.23 Cr* for the 3 BHK. 4 BHK pricing on request.",
      },
      {
        q: "What is the payment plan?",
        a: "20×5* — 20% at booking, balance in 5% construction-linked instalments.",
      },
      {
        q: "What charges are extra?",
        a: "GST, stamp duty, registration, IFMS, additional parking, and any floor-rise, PLC or view premium.",
      },
    ],
  },
  {
    heading: "Approvals and Timeline",
    faqs: [
      {
        q: "Is Northwind Sector 22D RERA registered?",
        a: "Registration is under process. The number will be displayed here once granted. Until then, bookings are expressions of interest with refundable terms.",
      },
      {
        q: "When is possession?",
        a: "Tentatively 2030–31*, to be confirmed at registration.",
      },
      {
        q: "Is the land title clear?",
        a: "The plot was allotted by YEIDA through an open auction in May 2026, which gives the project a clean, authority-allotted title.",
      },
    ],
  },
  {
    heading: "Location",
    faqs: [
      {
        q: "How far is the airport?",
        a: "Noida International Airport is 10–15 km away, about 15 minutes by road.",
      },
      {
        q: "What is nearby?",
        a: "International Film City (Sector 21) is the adjoining sector; Buddh International Circuit is about 10 minutes; Pari Chowk about 25 minutes.",
      },
    ],
  },
  {
    heading: "Buying Process",
    faqs: [
      {
        q: "How do I book?",
        a: "Call +91 97177 00596 or submit the form. A project advisor shares the price sheet and available units, arranges a site visit, and guides you through the expression-of-interest and allotment steps.",
      },
      {
        q: "Is there any brokerage or extra charge for booking through this site?",
        a: "No. Real Revenue is an authorised channel partner and is paid by the developer. You get the same price and offers as at the developer's sales office.",
      },
      {
        q: "Can NRIs buy?",
        a: "Yes. NRIs can buy residential property in India through NRE/NRO accounts; we assist with documentation and power-of-attorney formalities.",
      },
    ],
  },
  {
    heading: "Reviews",
    faqs: [
      {
        q: "What do buyers say about Northwind Estates?",
        a: "The developer's flagship, NorthWind Sanctuary, is known in Greater Noida for its low density, large homes and IGBC Platinum pre-certification. Sector 22D is a launch-stage project, so reviews will build as construction progresses; we recommend visiting Sanctuary to judge the quality first-hand.",
      },
    ],
  },
];

export default function FaqsPage() {
  const allFaqs = faqSections.flatMap((s) => s.faqs);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://northwindyamuna.com/" },
              { "@type": "ListItem", position: 2, name: "FAQs", item: "https://northwindyamuna.com/faqs" },
            ],
          }),
        }}
      />

      <PageBanner
        eyebrow="Help & Answers"
        title="Northwind Estates Sector 22D — Frequently Asked Questions"
        subtitle="Price, RERA status, possession, furnishing, payment plan, location, site visits and the booking process — answered."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqSections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{section.heading}</h2>
              <div className="space-y-4">
                {section.faqs.map((f) => (
                  <div key={f.q} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 text-base mb-2">{f.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <p className="text-gray-600 text-sm mb-4">Still have a question?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919717700596?text=Hi%2C%20I%20am%20interested%20in%20Northwind%20Estates%20Sector%2022D%20Yamuna%20Expressway.%20Please%20share%20the%20price%20list%20and%20brochure."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md transition-colors"
              >
                WhatsApp +91 97177 00596
              </a>
              <Link
                href="/contact"
                className="inline-block border-2 border-[#DCA54A] text-[#DCA54A] hover:bg-[#DCA54A] hover:text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md transition-colors"
              >
                Request a Call Back
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
