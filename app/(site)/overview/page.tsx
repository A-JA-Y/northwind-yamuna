import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import ProjectHighlights from "@/components/ProjectHighlights";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Overview | 5 Acres, 6 Towers, 540 Homes",
  description:
    "Full overview of Northwind Sector 22D on Yamuna Expressway — 5-acre wellness community, 6 towers of G+30, only 3 homes per floor, fully furnished 3 & 4 BHK.",
  alternates: { canonical: "https://northwindyamuna.com/overview" },
};

const glanceRows = [
  ["Project name", "Northwind Estates Sector 22D (Northwind Wellness)"],
  ["Developer", "Northwind Estates"],
  ["Location", "Sector 22D, Yamuna Expressway, Greater Noida (YEIDA)"],
  ["Land parcel", "5 acres (YEIDA auction, May 2026)"],
  ["Towers", "6"],
  ["Floors", "G+30"],
  ["Total residences", "540"],
  ["Apartments per floor", "3"],
  ["Lifts per tower", "4 high-speed"],
  ["Configurations", "3 BHK + 3T (1,675 sq. ft.) | 4 BHK + 4T + Servant (2,200 sq. ft.)"],
  ["Furnishing", "Fully furnished"],
  ["Amenities", "30+ (wellness-themed)"],
  ["Architects", "Confluence"],
  ["Launch price", "3 BHK from ₹1.23 Cr* | 4 BHK on request"],
  ["Payment plan", "20×5*"],
  ["RERA", "Under process"],
  ["Possession", "Tentative 2030–31*"],
];

export default function OverviewPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="Northwind Sector 22D — Project Overview"
        subtitle="The first Yamuna Expressway project from Northwind Estates — a wellness-led residential community on a 5-acre YEIDA plot, 15 minutes from Noida International Airport."
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
                Most 5-acre group housing plots on the expressway are planned with four to six
                apartments per floor. Northwind has gone the other way: six slim towers, three homes
                on each floor, four lifts per tower. The result is 540 homes on a footprint that
                leaves the ground level largely open for a central green, walking and cycling loops,
                and outdoor wellness spaces. Every apartment is three-side open, which brings in
                daylight from more than one direction and allows real cross-ventilation instead of a
                single-aspect layout.
              </p>
            </div>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wellness as the Organising Idea</h2>
              <p className="mb-4 text-sm leading-relaxed">
                The project is being marketed as Northwind Wellness for a reason. The clubhouse
                programme leans towards spa, sauna, steam, yoga and meditation rather than only a
                gym and a banquet hall. Outdoor spaces include a reflexology path, senior citizen
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
              modular kitchen, wardrobes in all bedrooms, split air-conditioners, false ceilings
              with light fittings and bathroom fittings are all part of the offer. For an end user,
              it removes six to nine months of interior work after possession. For an investor, a
              furnished home rents faster and at a premium in an airport-driven market.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Two Configurations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">3 BHK + 3 Toilets — 1,675 sq. ft.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A compact-luxury three-bedroom home with a living-dining space that opens to the
                  main balcony, a separate kitchen with utility, and an attached toilet for every
                  bedroom. Suited to families of four to five and to investors who want the most
                  in-demand ticket size in the sector.
                </p>
                <Link href="/3-bhk-flats-sector-22d-yamuna-expressway" className="inline-block mt-3 text-sm text-[#c8922a] hover:underline font-semibold">
                  Explore the 3 BHK →
                </Link>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-lg font-bold text-gray-900 mb-2">4 BHK + 4 Toilets + Servant — 2,200 sq. ft.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A four-bedroom home with a servant room and toilet, a larger living-dining area
                  and wider balconies. Suited to joint families, buyers upgrading from Noida or
                  Greater Noida, and NRIs who want a ready home near the airport.
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
                The 3 BHK starts at ₹1.23 Cr* under the launch offer, which works out to roughly
                ₹7,350 per sq. ft.* for a furnished home. For context, premium bare-shell launches
                in Sector 22D are currently quoting ₹9,000–₹9,500 per sq. ft. The 4 BHK price is
                shared on request. Payment is on a 20×5 plan* — 20% at booking, balance in
                construction-linked 5% instalments.
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
