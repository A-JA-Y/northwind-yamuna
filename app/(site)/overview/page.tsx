import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import ProjectHighlights from "@/components/ProjectHighlights";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Overview | 5 Acres, 4 Towers, 600+ Homes",
  description:
    "Full overview of Northwind Sector 22D on Yamuna Expressway — 5-acre wellness community, 4 towers of G+30, only 6 homes per floor, fully furnished 3 & 4 BHK at ₹8,500/sq ft.",
  alternates: { canonical: "https://northwindyamuna.com/overview" },
};

const glanceRows = [
  ["Project name", "Northwind Estates Sector 22D (Northwind Wellness)"],
  ["Developer", "Northwind Estates"],
  ["Location", "Sector 22D, Yamuna Expressway, Greater Noida (YEIDA)"],
  ["Land parcel", "5 acres (YEIDA auction, May 2026)"],
  ["Towers", "4 (glass-facade, placed on the 4 corners)"],
  ["Floors", "G+30"],
  ["Total residences", "600+"],
  ["Apartments per floor", "6 (only 2 per core / wing)"],
  ["Lifts per tower", "6"],
  ["Configurations", "3 BHK + 2T (1,467 sq. ft.) | 3 BHK + 3T (1,675 sq. ft.) | 4 BHK + 4T + Servant (1,950 sq. ft.) | 4 BHK + 5T + Servant + Study (2,550 sq. ft.)"],
  ["Furnishing", "Fully furnished — Italian marble flooring, 5-star inverter ACs"],
  ["Floor-to-floor height", "11.25 ft (highest on Yamuna Expressway till date)"],
  ["Clubhouse", "50,000+ sq. ft."],
  ["Green & open space", "75%"],
  ["Amenities", "28+ (wellness-themed)"],
  ["Architects", "ACPL"],
  ["Development cost", "₹650+ crore (planned)"],
  ["Launch price", "₹8,500 / sq. ft. all inclusive* | 3 BHK from ₹1.25 Cr* | 4 BHK from ₹1.66 Cr*"],
  ["Payment plan", "20×5* (five instalments of 20%)"],
  ["RERA", "Under process"],
  ["Possession", "Tentative 2030–31*"],
];

export default function OverviewPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="Northwind Sector 22D — Project Overview"
        subtitle="The first Yamuna Expressway project from Northwind Estates — a wellness-led residential community of four glass-facade towers on a 5-acre YEIDA plot, 15 minutes from Noida International Airport."
      />
      <ModalWrapper />
      <AboutProject heading={true} />

      {/* Project at a glance */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project at a Glance</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <tbody>
                  {glanceRows.map(([label, value]) => (
                    <tr key={label} className="border-t border-[#e5dcc5] first:border-t-0">
                      <td className="px-5 py-3 font-semibold text-gray-900 whitespace-nowrap bg-[#FAF8F4]">{label}</td>
                      <td className="px-5 py-3 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              *Indicative. Subject to change without notice. Areas are super built-up. Possession
              tentatively 2030–31, to be confirmed on UP RERA registration.
            </p>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Land and How It Was Acquired</h2>
            <p className="mb-4 text-sm leading-relaxed">
              In May 2026, Northwind Estates emerged as the highest bidder in a YEIDA auction for a
              5-acre group housing parcel in Sector 22D, with a bid of ₹189 crore. The company&apos;s
              chairman, Mr. Manoj Kumar Garg, described the Yamuna Expressway region as entering a
              new phase of urban and economic transformation, with infrastructure on a scale that
              creates long-term ecosystems rather than short-term real estate cycles. A YEIDA
              allotment through open auction also means a clean title and a defined development
              timeline, which matters when you are buying at launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fewer Homes, More Open Ground</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Most 5-acre group housing plots on the expressway are planned with eight to ten
                apartments per floor. Northwind has gone the other way: four iconic glass-facade
                towers placed on the four corners of the site, only six homes on each floor — two
                per core / wing — and six lifts per tower. The result is 600+ homes on a footprint
                that keeps 75% of the land green and open for a central green, walking and cycling
                loops, and outdoor wellness spaces. A grand 11.25 ft floor-to-floor height, the
                highest on the Yamuna Expressway till date, gives every apartment an unmatched
                sense of space.
              </p>
            </div>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wellness as the Organising Idea</h2>
              <p className="mb-4 text-sm leading-relaxed">
                The project is being marketed as Northwind Wellness for a reason. The 50,000+
                sq. ft. clubhouse programme leans towards spa, sauna, steam, yoga and meditation
                rather than only a gym and a banquet hall. Outdoor spaces include a reflexology path, senior citizen
                seating zones, a jogging track and an herb garden. The intent is that daily routines
                — a morning walk, an evening swim, a weekend yoga session — happen inside the campus
                rather than needing a drive.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Homes That Come Furnished</h2>
            <p className="mb-4 text-sm leading-relaxed">
              The launch covers fully furnished apartments. In practical terms that means the
              modular kitchen with hob, chimney and RO, modular wardrobes in all bedrooms, 5-star
              inverter air-conditioners, Italian marble / imported stone flooring, branded CP
              fittings and a smart lock with video door phone are all part of the offer. For an end user,
              it removes six to nine months of interior work after possession. For an investor, a
              furnished home rents faster and at a premium in an airport-driven market.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Four Configurations — Sizes Start From 1,467 Sq. Ft.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">3 BHK + 2 Toilets — 1,467 sq. ft.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The entry point into the project: a three-bedroom home with a living-dining
                  space that opens to the main balcony, a separate modular kitchen with utility,
                  an attached master toilet and a second common toilet. From ₹1.25 Cr*.
                </p>
                <Link href="/3-bhk-flats-sector-22d-yamuna-expressway" className="inline-block mt-3 text-sm text-[#c8922a] hover:underline font-semibold">
                  Explore the 3 BHK →
                </Link>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">3 BHK + 3 Toilets — 1,675 sq. ft.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A compact-luxury three-bedroom home with an attached toilet for every bedroom
                  and a utility balcony off the kitchen. Suited to families of four to five and to
                  investors who want the most in-demand ticket size in the sector. From ₹1.42 Cr*.
                </p>
                <Link href="/3-bhk-flats-sector-22d-yamuna-expressway" className="inline-block mt-3 text-sm text-[#c8922a] hover:underline font-semibold">
                  Explore the 3 BHK →
                </Link>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4 BHK + 4 Toilets + Servant — 1,950 sq. ft.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A four-bedroom home with a servant room and toilet, a larger living-dining area
                  and wider balconies. Suited to joint families and buyers upgrading from Noida or
                  Greater Noida. From ₹1.66 Cr*.
                </p>
                <Link href="/4-bhk-flats-sector-22d-yamuna-expressway" className="inline-block mt-3 text-sm text-[#c8922a] hover:underline font-semibold">
                  Explore the 4 BHK →
                </Link>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4 BHK + 5 Toilets + Servant + Study — 2,550 sq. ft.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The largest home in the project: four en-suite bedrooms, a fifth toilet, a
                  servant room, a family lounge and a dedicated study. Suited to large joint
                  families and NRIs who want a ready, lock-and-leave home near the airport. From
                  ₹2.17 Cr*.
                </p>
                <Link href="/4-bhk-flats-sector-22d-yamuna-expressway" className="inline-block mt-3 text-sm text-[#c8922a] hover:underline font-semibold">
                  Explore the 4 BHK →
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Payment</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Every home is priced at ₹8,500 per sq. ft. all inclusive* on limited founder
                inventory — the 3 BHK from ₹1.25 Cr* and the 4 BHK from ₹1.66 Cr*, fully
                furnished. For context, premium bare-shell launches in Sector 22D are currently
                quoting ₹9,000–₹9,500 per sq. ft. plus charges. Payment is on a 20×5 plan* —
                five equal instalments of 20%, from booking to possession. A price revision is
                coming soon.
              </p>
              <Link href="/price" className="text-[#c8922a] hover:underline font-semibold text-sm">
                See the full price &amp; payment plan →
              </Link>
            </div>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Approvals and Timeline</h2>
              <p className="mb-4 text-sm leading-relaxed">
                UP RERA registration is under process and will be published here the moment it is
                granted. Possession is tentatively planned for 2030–31*, which is consistent with a
                G+30 development on a parcel allotted in mid-2026. Until registration, bookings are
                accepted as expressions of interest with full refund terms.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who This Project Is For</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                Families working in Noida, Greater Noida or the expressway industrial belt who want
                more space and cleaner air than a Noida high-rise offers at the same budget.
              </li>
              <li>
                Frequent flyers and aviation, hospitality and logistics professionals who benefit
                from a 15-minute airport commute.
              </li>
              <li>
                Investors looking at rental demand from airport, Film City and industrial-park staff
                over the next five years.
              </li>
              <li>
                NRIs who want a furnished, lock-and-leave home in the NCR&apos;s fastest-developing
                corridor.
              </li>
            </ul>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <Link
              href="/contact"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Get the Overview Deck &amp; Price List
            </Link>
          </div>
        </div>
      </section>

      <ProjectHighlights />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
