import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Specifications | Fully Furnished Homes",
  description:
    "Specifications of Northwind Estates Sector 22D fully furnished flats — modular kitchen, wardrobes, ACs, flooring, doors, windows, electricals and security.",
  alternates: { canonical: "https://northwindyamuna.com/specifications" },
};

const specGroups = [
  {
    title: "Structure",
    items: [
      "Earthquake-resistant RCC frame structure designed for Seismic Zone IV",
      "Four G+30 glass-facade towers — the first on the Yamuna Expressway — with basement and stilt parking",
      "Grand 11.25 ft floor-to-floor height, the highest on the Yamuna Expressway till date",
      "Only 2 apartments per core / wing, 6 apartments per floor, 6 lifts per tower",
    ],
  },
  {
    title: "Living / Dining / Foyer / Family Lounge",
    items: [
      "Flooring: Italian marble / imported stone",
      "Walls: acrylic emulsion paint",
      "Ceiling: acrylic emulsion with boxing wherever required for concealing services",
      "5-star inverter split air-conditioners",
    ],
  },
  {
    title: "Master Bedroom (Furnished)",
    items: [
      "Flooring: laminated wooden flooring",
      "Walls and ceiling: acrylic emulsion paint with boxing wherever required",
      "Modular wardrobe of standard make",
      "5-star inverter split air-conditioner (1.5 to 2 ton as per design)",
    ],
  },
  {
    title: "Other Bedrooms (Furnished)",
    items: [
      "Flooring: premium vitrified tiles",
      "Walls and ceiling: acrylic emulsion paint with boxing wherever required",
      "Modular wardrobe of standard make",
      "5-star inverter split air-conditioner in every bedroom",
    ],
  },
  {
    title: "Kitchen (Furnished)",
    items: [
      "Modular cabinetry with hob, chimney and RO",
      "Counter: artificial stone / stone",
      "Flooring: vitrified tiles; walls: tiles / acrylic emulsion paint",
      "Servant / utility room with vitrified tile flooring",
    ],
  },
  {
    title: "Toilets",
    items: [
      "Flooring: vitrified / ceramic tiles; walls: tiles / acrylic emulsion paint",
      "Counter in master toilet: artificial stone / stone",
      "Branded CP fittings and chinaware fixtures",
      "False ceiling with trap door wherever required",
    ],
  },
  {
    title: "Balconies & Terraces",
    items: [
      "Flooring: vitrified / ceramic tiles",
      "Walls and ceiling: exterior paint",
      "Railing: combination of RCC, stainless steel and glass",
    ],
  },
  {
    title: "Doors, Windows & Electricals",
    items: [
      "External doors and windows: UPVC / aluminium",
      "Internal doors: factory-finished engineered doors",
      "Modular electrical switches",
      "Power backup up to 5 KVA per apartment; 100% backup for common areas and lifts",
    ],
  },
  {
    title: "Smart Features & Common Areas",
    items: [
      "Smart lock at the main door with video door phone",
      "One parking spot per apartment",
      "Designer lift lobbies; 6 lifts per tower",
      "Internal circulation: one 6-seater electric buggy per tower",
      "Fire detection, sprinklers and hydrants as per NBC norms",
    ],
  },
  {
    title: "Security",
    items: [
      "3-tier security: main gate, tower entry and apartment level",
      "CCTV in common areas, basements and lobbies",
      "Video door phone and intercom to security",
    ],
  },
];

export default function SpecificationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Specifications"
        title="What a Fully Furnished Home Includes"
        subtitle="Northwind Sector 22D is offered as a fully furnished home with Italian marble flooring, 5-star inverter ACs and an 11.25 ft floor-to-floor height — unusual for a launch in this price band. Here is the planned standard for structure, finishes and furnishing."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              Northwind Sector 22D Specifications — Fully Furnished Flats on the Yamuna Expressway
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              The specifications below are taken from the developer&apos;s sales brochure and
              describe the planned standard for structure, finishes and furnishing at Northwind
              Sector 22D — the first glass-facade residential apartments on the Yamuna Expressway,
              designed by ACPL. The final specification sheet and furnishing schedule will be
              annexed to the builder-buyer agreement and may vary within the same standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specGroups.map((group) => (
              <div key={group.title} className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h2 className="text-lg font-bold text-gray-900 mb-3">{group.title}</h2>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#c8952a] mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Buy Furnished Instead of Bare-Shell
            </h2>
            <p className="mb-4 text-sm leading-relaxed">
              A bare-shell 3 BHK of this size typically needs ₹15–20 lakh and six to nine months of
              interior work before it can be lived in or let out. A furnished home moves that cost
              into the same price and payment plan, is ready to rent from the day of possession,
              and — because the furnishing is done at scale by the developer — usually comes in
              cheaper than a one-off interior job.
            </p>
            <p className="text-sm">
              <Link href="/price" className="text-[#c8922a] hover:underline font-semibold">
                See how the furnished price compares in the sector →
              </Link>
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — Specifications</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Can I opt out of the furnishing for a lower price?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The launch offer is for furnished homes. Ask the project advisor whether a
                  bare-shell option exists on specific inventory.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Which brands will be used?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Brand names for sanitaryware, fittings, ACs and kitchen hardware will be listed in
                  the furnishing schedule annexed to the agreement.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Is there a warranty on furnishing?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Manufacturer warranties on appliances and fittings pass to the buyer; structural
                  defects are covered under RERA&apos;s five-year defect liability.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <a
              href="https://wa.me/919717700596?text=Hi%2C%20I%20am%20interested%20in%20Northwind%20Estates%20Sector%2022D%20Yamuna%20Expressway.%20Please%20share%20the%20detailed%20specification%20sheet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Get the Detailed Specification Sheet
            </a>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
