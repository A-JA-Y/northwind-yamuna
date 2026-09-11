import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "3 BHK Flats in Sector 22D Yamuna Expressway | Northwind",
  description:
    "Fully furnished 3 BHK flats in Sector 22D Yamuna Expressway by Northwind Estates. 1,675 sq ft, 3-side open, 3 homes per floor. From ₹1.23 Cr* on 20×5 plan.",
  alternates: {
    canonical: "https://northwindyamuna.com/3-bhk-flats-sector-22d-yamuna-expressway",
  },
};

const glanceTable = [
  ["Configuration", "3 BHK + 3 Toilets"],
  ["Super area", "1,675 sq. ft."],
  ["Balconies", "Living/dining balcony + master bedroom balcony"],
  ["Kitchen", "Modular, with separate utility"],
  ["Furnishing", "Fully furnished"],
  ["Homes per floor", "3"],
  ["Lifts per tower", "4"],
  ["Launch price", "₹1.23 Cr* onwards"],
  ["Payment plan", "20×5*"],
];

export default function ThreeBhkPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences"
        title="3 BHK Flats in Sector 22D, Yamuna Expressway"
        subtitle="A 1,675 sq. ft. fully furnished home with an attached toilet for each bedroom — one of only three apartments on its floor, from ₹1.23 Cr* under the launch offer."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              3 BHK Flats in Sector 22D, Yamuna Expressway — Northwind Estates
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              The 3 BHK at Northwind Sector 22D is a <strong>1,675 sq. ft.</strong> fully furnished
              home with an attached toilet for each of its three bedrooms, planned as one of only
              three apartments on its floor. It starts at <strong>₹1.23 Cr*</strong> under the
              launch offer and is the configuration most buyers in the sector are asking for.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get the 3 BHK Price Sheet on WhatsApp &rarr;
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3 BHK at a Glance</h2>
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
              *Indicative launch pricing; subject to change without notice. Floor-rise, PLC and view
              premium may apply on select units.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Layout Walk-Through</h2>
            <p className="mb-4 text-sm leading-relaxed">
              You enter into a foyer that opens to the living and dining area, planned as one
              continuous space with the main balcony running along it. The kitchen sits off the
              dining side with a utility balcony for washing and storage. The master bedroom takes a
              corner, with its own balcony and an attached toilet with a shower enclosure. The
              second and third bedrooms each have an attached toilet, one of which doubles as the
              guest toilet. Because there are only three homes on the floor, the apartment is open
              on three sides, so the living room, master bedroom and at least one more bedroom get
              direct light.
            </p>
            <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold text-sm">
              See the 3 BHK floor plan →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What &quot;Fully Furnished&quot; Includes in the 3 BHK
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-sm">
                <li>Modular kitchen with hob, chimney and under-counter storage</li>
                <li>Wardrobes in all three bedrooms</li>
                <li>Split air-conditioners in the living room and all bedrooms</li>
                <li>False ceiling with LED lighting in living, dining and bedrooms</li>
                <li>Sanitaryware and CP fittings from premium brands</li>
                <li>Video door phone and main door with digital lock</li>
              </ul>
              <p className="text-xs text-gray-500 italic">
                Final furnishing schedule will be annexed to the builder-buyer agreement.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Price and Payment Plan for the 3 BHK
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-sm">
                <li><strong>Launch price:</strong> ₹1.23 Cr* onwards</li>
                <li><strong>Effective rate:</strong> ≈ ₹7,350 per sq. ft.* (furnished)</li>
                <li><strong>Booking amount:</strong> 20% of total cost*</li>
                <li><strong>Balance:</strong> Construction-linked 5% instalments*</li>
                <li><strong>GST, stamp duty, registration:</strong> As applicable, extra</li>
              </ul>
              <p className="text-sm">
                <Link href="/price" className="text-[#c8922a] hover:underline font-semibold">
                  Full price list &amp; cost sheet →
                </Link>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who Is Buying the 3 BHK</h2>
              <p className="text-sm leading-relaxed">
                Young families moving out of 2 BHKs in Noida Extension or Greater Noida West,
                professionals posted in the YEIDA industrial belt, and first-time investors who want
                a furnished unit that can be rented out to airport and Film City staff soon after
                possession. At 1,675 sq. ft. it is larger than most 3 BHKs launched in the sector,
                which helps at resale.
              </p>
            </div>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3 BHK vs 4 BHK — How to Choose</h2>
              <p className="text-sm leading-relaxed mb-4">
                Pick the 3 BHK if your household is four to five people, if you want the lowest
                entry ticket into a low-density project, or if you plan to lease it. Pick the 4 BHK
                if you have live-in help, parents visiting for long stretches, or need a dedicated
                work-from-home room. Both share the same floor plate, lifts, amenities and
                furnishing standard.
              </p>
              <Link href="/4-bhk-flats-sector-22d-yamuna-expressway" className="text-[#c8922a] hover:underline font-semibold text-sm">
                Compare with the 4 BHK →
              </Link>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — 3 BHK at Northwind Sector 22D</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">What is the carpet area of the 3 BHK?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The 1,675 sq. ft. figure is super area. The RERA carpet area will be published
                  with the registration and typically runs at 65–70% of super area for this type of
                  layout.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Can I see a sample flat?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A furnished sample flat is planned at the site. Until it is ready, walk-throughs
                  are done on the 3D model at the Greater Noida sales office and on-site.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Is there a preferred floor?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mid to upper floors in the towers facing the central green are the most requested.
                  Floor-rise charges may apply above a certain level; ask for the current floor-wise
                  price sheet.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <a
              href="tel:+919717700596"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Book a Site Visit — Call +91 97177 00596
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
