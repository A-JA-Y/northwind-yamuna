import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "4 BHK Flats in Sector 22D Yamuna Expressway | Northwind",
  description:
    "Fully furnished 4 BHK + servant flats in Sector 22D Yamuna Expressway by Northwind Estates. 4 BHK + 4T 1,950 sq ft and 4 BHK + 5T + study 2,550 sq ft, 6 lifts per tower. From ₹1.66 Cr* at ₹8,500/sq ft all inclusive.",
  alternates: {
    canonical: "https://northwindyamuna.com/4-bhk-flats-sector-22d-yamuna-expressway",
  },
};

const glanceTable = [
  ["Configurations", "4 BHK + 4 Toilets + Servant | 4 BHK + 5 Toilets + Servant + Study"],
  ["Super area", "1,950 sq. ft. (4 BHK + 4T + S) | 2,550 sq. ft. (4 BHK + 5T + S + Study)"],
  ["Balconies", "Wide living/dining balcony + master bedroom balcony"],
  ["Kitchen", "Modular with hob, chimney and RO; utility and servant access"],
  ["Furnishing", "Fully furnished — Italian marble flooring, 5-star inverter ACs"],
  ["Floor-to-floor height", "11.25 ft"],
  ["Homes per floor", "6 (only 2 per core / wing)"],
  ["Lifts per tower", "6"],
  ["Launch price", "₹1.66 Cr* (1,950 sq. ft.) | ₹2.17 Cr* (2,550 sq. ft.) — ₹8,500 / sq. ft. all inclusive*"],
  ["Payment plan", "20×5* (five instalments of 20%)"],
];

export default function FourBhkPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences · Limited Inventory"
        title="4 BHK Flats in Sector 22D, Yamuna Expressway"
        subtitle="Two fully furnished 4 BHK layouts — 1,950 sq. ft. with four toilets and a servant room, and 2,550 sq. ft. with five toilets, a servant room and a study — on floors of only six homes, two per wing, from ₹1.66 Cr*."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              4 BHK Flats in Sector 22D, Yamuna Expressway — Northwind Estates
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              The 4 BHK at Northwind Sector 22D comes in two fully furnished layouts — a
              <strong> 1,950 sq. ft. 4 BHK + 4T + Servant</strong> and a <strong>2,550 sq. ft.
              4 BHK + 5T + Servant + Study</strong> — each planned as one of only six apartments on
              its floor, with just one neighbour sharing its core / wing. At <strong>₹8,500 per
              sq. ft. all inclusive*</strong> the 4 BHK starts at <strong>₹1.66 Cr*</strong>;
              inventory in this configuration is a limited share of the 600+ homes.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get the 4 BHK Price Sheet on WhatsApp &rarr;
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4 BHK at a Glance</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <tbody>
                  {glanceTable.map(([label, value]) => (
                    <tr key={label} className="border-t border-[#e5dcc5] first:border-t-0">
                      <td className="px-5 py-3 font-semibold text-gray-900 whitespace-nowrap bg-[#FAF8F4]">{label}</td>
                      <td className="px-5 py-3 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              *Indicative launch pricing on limited founder inventory (super area × ₹8,500);
              subject to change without notice. GST, stamp duty, registration and IFMS extra.
              Areas are super built-up. Price revision coming soon.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layout Walk-Through</h2>
            <p className="mb-4 text-sm leading-relaxed">
              The apartment opens through a foyer into a large living and dining area with a wide
              balcony that runs along the front. The kitchen sits beside the dining space with a
              utility area and a servant room with its own toilet, planned so household help can
              come and go without crossing the living room. The master bedroom is a corner suite
              with a walk-in wardrobe zone, an attached toilet and a private balcony. Three more
              bedrooms, each with an attached toilet, complete the 1,950 sq. ft. plan. The 2,550
              sq. ft. layout adds a family lounge, a fifth toilet and a dedicated study on the
              quieter side of the floor plate. Every room enjoys the grand 11.25 ft floor-to-floor
              height.
            </p>
            <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold text-sm">
              See the 4 BHK floor plan →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What &quot;Fully Furnished&quot; Includes in the 4 BHK
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-sm">
                <li>Italian marble / imported stone flooring in living, dining, foyer and family lounge; laminated wooden flooring in the master bedroom</li>
                <li>Modular kitchen with hob, chimney and RO</li>
                <li>Modular wardrobes in all four bedrooms; walk-in wardrobe zone in the master bedroom</li>
                <li>5-star inverter split air-conditioners in the living-dining area and all four bedrooms</li>
                <li>Branded CP fittings and chinaware in all toilets</li>
                <li>Video door phone and smart lock at the main door</li>
              </ul>
              <p className="text-xs text-gray-500 italic">
                Final furnishing schedule will be annexed to the builder-buyer agreement.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Price and Payment Plan for the 4 BHK
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                The 1,950 sq. ft. 4 BHK + 4T + Servant starts at <strong>₹1.66 Cr*</strong> and
                the 2,550 sq. ft. 4 BHK + 5T + Servant + Study at <strong>₹2.17 Cr*</strong>, both
                at ₹8,500 per sq. ft. all inclusive on limited founder inventory. The payment
                structure is the same 20×5 plan*: five equal instalments of 20% from booking to
                possession. GST, stamp duty, registration and IFMS are extra as applicable.
              </p>
              <p className="text-sm">
                <Link href="/price" className="text-[#c8922a] hover:underline font-semibold">
                  See the payment plan in detail →
                </Link>
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who Is Buying the 4 BHK</h2>
            <p className="text-sm leading-relaxed">
              Joint families upgrading from Greater Noida or Noida, senior professionals and
              business owners who fly often, and NRIs who want a large, furnished, lock-and-leave
              home 15 minutes from the airport. The servant room is a practical necessity for most
              of these households, and a 2,550 sq. ft. four-bedroom with a study is rare in a
              project where every floor has only six homes, two per wing.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — 4 BHK at Northwind Sector 22D</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">How many 4 BHK units are there?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The exact tower-wise split will be published with the RERA registration. 4 BHKs
                  are a minority of the 600+ homes, so founder inventory at ₹8,500 per sq. ft. is
                  limited.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Does the servant room have a separate entry?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The servant room and utility are planned off the kitchen side so that help can use
                  the service passage without crossing the living area. Confirm the exact door
                  placement on the tower-specific plan.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Can two 4 BHKs on the same floor be bought together?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes, subject to availability. With only two apartments per core / wing, families
                  often take both homes in a wing to have the lobby entirely to themselves.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <a
              href="tel:+919717700596"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              See the 4 BHK Plan — Call +91 97177 00596
            </a>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
      <VillaFeatures />
      <ReasonsToInvest />
    </>
  );
}
