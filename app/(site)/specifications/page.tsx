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
      "G+30 towers with basement and stilt parking",
      "External walls in AAC blocks / RCC with weather-resistant textured paint",
    ],
  },
  {
    title: "Flooring",
    items: [
      "Living, dining and bedrooms: large-format vitrified tiles",
      "Master bedroom: option of laminated wooden flooring as per furnishing schedule",
      "Kitchen and utility: anti-skid vitrified tiles",
      "Toilets: anti-skid ceramic tiles on floor, designer tiles up to ceiling height on walls",
      "Balconies: anti-skid tiles with MS / glass railing",
    ],
  },
  {
    title: "Kitchen (Furnished)",
    items: [
      "Modular kitchen with granite / quartz counter and stainless-steel sink",
      "Hob and chimney",
      "Overhead and under-counter storage, tall unit in the 4 BHK",
      "Provision for water purifier, dishwasher and washing machine in utility",
    ],
  },
  {
    title: "Bedrooms (Furnished)",
    items: [
      "Wardrobes in all bedrooms; walk-in wardrobe framing in the 4 BHK master bedroom",
      "Split air-conditioners in all bedrooms",
      "False ceiling with LED lighting",
    ],
  },
  {
    title: "Living & Dining (Furnished)",
    items: [
      "Split air-conditioners",
      "False ceiling with cove and spot lighting",
      "Provision for TV and home-theatre wiring",
    ],
  },
  {
    title: "Toilets",
    items: [
      "Premium sanitaryware and single-lever CP fittings",
      "Shower enclosure in master toilet (and one more toilet in the 4 BHK)",
      "Hot and cold water mixer, provision for geyser and exhaust",
      "False ceiling with moisture-resistant panels",
    ],
  },
  {
    title: "Doors & Windows",
    items: [
      "Main door: engineered wood frame with veneer / laminate finish, digital lock and video door phone",
      "Internal doors: flush doors with laminate finish and premium hardware",
      "Windows: UPVC / aluminium with glazed panels and mosquito mesh",
    ],
  },
  {
    title: "Electricals",
    items: [
      "Concealed copper wiring with modular switches",
      "Adequate power points in all rooms; AC points pre-wired",
      "MCB / ELCB protection per apartment",
      "Standard power backup for apartments; 100% backup for common areas and lifts",
    ],
  },
  {
    title: "Common Areas & Lifts",
    items: [
      "4 high-speed lifts per tower, including a stretcher-size lift",
      "Air-conditioned ground-floor lobbies with designer finishes",
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
        subtitle="Northwind Sector 22D is offered as a fully furnished home — unusual for a launch in this price band. Here is the planned standard for structure, finishes and furnishing."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              Northwind Sector 22D Specifications — Fully Furnished Flats on the Yamuna Expressway
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              The specifications below describe the planned standard for structure, finishes and
              furnishing at Northwind Sector 22D. The final specification sheet and furnishing
              schedule will be annexed to the builder-buyer agreement and may vary within the same
              standard.
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
