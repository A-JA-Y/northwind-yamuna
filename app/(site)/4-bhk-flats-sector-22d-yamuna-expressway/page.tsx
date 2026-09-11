import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "4 BHK Flats in Sector 22D Yamuna Expressway | Northwind",
  description:
    "Fully furnished 4 BHK + servant flats in Sector 22D Yamuna Expressway by Northwind Estates. 2,200 sq ft, 3-side open, 4 lifts per tower. Price on request.",
  alternates: {
    canonical: "https://northwindyamuna.com/4-bhk-flats-sector-22d-yamuna-expressway",
  },
};

const glanceTable = [
  ["Configuration", "4 BHK + 4 Toilets + Servant room"],
  ["Super area", "2,200 sq. ft."],
  ["Balconies", "Wide living/dining balcony + master bedroom balcony"],
  ["Kitchen", "Modular, with utility and servant access"],
  ["Furnishing", "Fully furnished"],
  ["Homes per floor", "3"],
  ["Lifts per tower", "4"],
  ["Price", "On request"],
  ["Payment plan", "20×5*"],
];

export default function FourBhkPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences · Limited Inventory"
        title="4 BHK Flats in Sector 22D, Yamuna Expressway"
        subtitle="A 2,200 sq. ft. fully furnished home with four bedrooms, four toilets and a servant room — three-side open on a floor shared with only two other families."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              4 BHK Flats in Sector 22D, Yamuna Expressway — Northwind Estates
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              The 4 BHK at Northwind Sector 22D is a <strong>2,200 sq. ft.</strong> fully furnished
              home with four bedrooms, four toilets and a servant room, planned three-side open on
              a floor shared with only two other families. Pricing is shared on request because
              inventory in this configuration is limited to a fraction of the 540 homes.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Request the 4 BHK Price Sheet &rarr;
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
              *Indicative. Subject to change without notice. Areas are super built-up.
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
              bedrooms, each with an attached toilet, complete the plan — one of them works well as
              a study or a parents&apos; room on the quieter side of the floor plate.
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
                <li>Modular kitchen with hob, chimney, tall unit and under-counter storage</li>
                <li>Wardrobes in all four bedrooms; walk-in wardrobe framing in the master bedroom</li>
                <li>Split air-conditioners in the living-dining area and all four bedrooms</li>
                <li>False ceiling with LED lighting across living, dining and bedrooms</li>
                <li>Premium sanitaryware and CP fittings; shower enclosures in master and one more toilet</li>
                <li>Video door phone, digital main-door lock and provision for home automation</li>
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
                Launch pricing for the 4 BHK is shared on request so that buyers get the current
                floor-wise sheet rather than a figure that changes with inventory. The payment
                structure is the same 20×5 plan*: 20% at booking, balance in construction-linked 5%
                instalments. GST, stamp duty and registration are extra as applicable.
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
              of these households, and a 2,200 sq. ft. four-bedroom is rare in a project where every
              floor has only three homes.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — 4 BHK at Northwind Sector 22D</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">How many 4 BHK units are there?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The exact tower-wise split will be published with the RERA registration. 4 BHKs
                  are a minority of the 540 homes, which is why pricing is on request.
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
                  Yes, subject to availability. Families often take two of the three homes on a
                  floor to have the level nearly to themselves.
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
