import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/northwind-logo-dark.svg";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "About Northwind Estates | Greater Noida Luxury Developer",
  description:
    "Northwind Estates: CREDAI-member developer, 20+ years' experience, ET NOW Emerging Luxury Developer of the Year, builder of NorthWind Sanctuary, Greater Noida.",
  alternates: { canonical: "https://northwindyamuna.com/northwind-estates" },
};

const snapshotRows = [
  ["Company", "NorthWind Estates Pvt. Ltd."],
  ["Chairman & CEO", "Mr. Manoj Kumar Garg"],
  ["Corporate office", "Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306"],
  ["Experience", "20+ years of leadership expertise; 25+ years for the chairman in Greater Noida real estate"],
  ["Delivered", "10 lakh+ sq. ft. across Greater Noida, Noida and Indirapuram"],
  ["Memberships", "CREDAI"],
  ["Recognition", "Emerging Luxury Developer of the Year — ET NOW; Upcoming Ultra Luxury Project of the Year — Times Realty & Infrastructure Conclave 2026"],
  ["Flagship project", "NorthWind Sanctuary, Sector Pi-1, Greater Noida (IGBC Platinum pre-certified)"],
  ["New launch", "Sector 22D, Yamuna Expressway (5 acres, ₹189 crore YEIDA allotment)"],
  ["Architects", "Confluence"],
];

export default function AboutNorthwindEstatesPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About Northwind Estates"
        subtitle="A Greater Noida-based developer built on more than two decades of experience and a philosophy it calls 'The Art of Rare Living' — fewer, larger homes on generous open ground."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="Northwind Estates"
              width={240}
              height={53}
              className="w-auto h-auto max-w-[240px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Northwind Estates (NorthWind Estates Pvt. Ltd.) is a Greater Noida-based real estate
              developer built on more than two decades of experience. The company&apos;s approach
              favours fewer, larger homes on generous open ground over high-density towers, and its
              first project on the Yamuna Expressway — Sector 22D — follows the same thinking.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The group has delivered over 10 lakh sq. ft. across Greater Noida, Noida and
              Indirapuram — Satyam Galleria, Jagat Plaza and Satyam Complex 1 &amp; 2 in Greater
              Noida among them — completing and handing over projects across more than one market
              cycle.
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {[
                "CREDAI member developer with 20+ years of leadership expertise",
                "10 lakh+ sq. ft. delivered across NCR markets",
                "Emerging Luxury Developer of the Year — ET NOW",
                "Flagship NorthWind Sanctuary is IGBC Platinum pre-certified",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#c8952a] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                href="/overview"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore Northwind Sector 22D
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Company Snapshot</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm bg-white">
              <table className="w-full text-sm text-left">
                <tbody>
                  {snapshotRows.map(([label, value]) => (
                    <tr key={label} className="border-t border-[#e5dcc5] first:border-t-0">
                      <td className="px-5 py-3 font-semibold text-gray-900 whitespace-nowrap bg-[#FAF8F4]">{label}</td>
                      <td className="px-5 py-3 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Leadership</h2>
            <p className="mb-4 text-sm leading-relaxed">
              <strong>Mr. Manoj Kumar Garg, Chairman &amp; CEO</strong>, brings more than 25 years
              in Greater Noida&apos;s real estate market and leads strategy, growth and execution.
              Announcing the Sector 22D acquisition, he said the group sees the Yamuna Expressway
              region entering a completely new phase of urban and economic transformation, and that
              infrastructure of the airport&apos;s scale creates long-term ecosystems rather than
              short-term real estate growth — which is why the company chose to commit to the
              corridor early.
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              He is joined by a second-generation leadership team: <strong>Mr. Shaurya Garg</strong>,
              Marketing &amp; Sales Director (B.Tech in Computer Science from Delhi Technological
              University and an MSc in International Real Estate &amp; Planning from University
              College London); <strong>Mr. Anubhav Jain</strong>, Finance &amp; Management Director
              (Business Management, Durham University); and <strong>Mr. Samyak Jain</strong>, Design
              &amp; Construction Director, an architect trained at CEPT Ahmedabad who oversees
              spatial planning, materials and sustainable construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Values the Company Builds On</h2>
              <p className="text-sm leading-relaxed">
                Northwind Estates lists six principles on its corporate site: dynamism,
                sustainability, transparency, innovation, client focus and ethical standards. Its
                stated mission puts &quot;real in realty&quot; at the core — trust, transparency and
                a customer-first approach. In practice that shows up as green pre-certification on
                its flagship, an open-auction land acquisition for its new launch, and a low-density
                planning template it has carried from Greater Noida to the expressway.
              </p>
            </div>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">A Delivered Track Record</h2>
              <p className="text-sm leading-relaxed">
                The group&apos;s delivered portfolio of over 10 lakh sq. ft. includes Satyam
                Galleria (Sector P3), Jagat Plaza (Jagat Farm) and Satyam Complex 1 &amp; 2 (Alpha
                2) in Greater Noida, Mega Mall, Angel Jupiter, Angel Golf Avenue 2 and Angel Mercury
                in Indirapuram, and Angel Techpark in Sector 62, Noida. For a buyer at Sector 22D,
                that history is the practical answer to the first question asked at any launch: has
                this developer finished what it started before?
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What NorthWind Sanctuary Tells You About Sector 22D
            </h2>
            <p className="mb-4 text-sm leading-relaxed">
              The developer&apos;s ongoing flagship, NorthWind Sanctuary in Sector Pi-1, Greater
              Noida, is the closest preview of the Sector 22D launch, because it was planned by the
              same architects (Confluence) on the same principles:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-sm">
              <li>4.5 acres, three towers (Amaltas, Banyan, Cedar), 185 residences — 80% of the site kept as landscaped greens (Sector 22D: 5 acres, six slim towers, a large central green)</li>
              <li>Large, three-side-open 3 BHK and 4 BHK homes (Sector 22D: 1,675 and 2,200 sq. ft., three homes per floor)</li>
              <li>A wellness-led amenity programme — 55-metre Olympic-length pool, reflexology pathway, sky walk, pickleball (Sector 22D: spa clubhouse, yoga deck, reflexology path, jogging loop)</li>
              <li>IGBC Platinum pre-certification, UP RERA UPRERAPRJ798312, and Upcoming Ultra Luxury Project of the Year at the Times Realty &amp; Infrastructure Conclave 2026</li>
            </ul>
            <p className="text-sm leading-relaxed">
              Buyers considering Sector 22D can visit Sanctuary on the same site-visit trip to see
              the developer&apos;s finish quality first-hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Sector 22D Acquisition</h2>
              <p className="text-sm leading-relaxed">
                In May 2026 Northwind Estates was the highest bidder in a YEIDA auction for a 5-acre
                group housing plot in Sector 22D, at ₹189 crore. Buying through an authority
                auction, rather than assembling private land, gives the project a clean title, a
                defined plot and a development schedule set by YEIDA — three things that reduce risk
                for a launch-stage buyer.
              </p>
            </div>
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Buyers Trust a CREDAI Member</h2>
              <p className="text-sm leading-relaxed">
                CREDAI membership commits a developer to a code of conduct on advertising,
                agreements and delivery, and gives buyers a grievance channel beyond the courts.
                Together with the RERA framework, it is one of the practical checks a buyer can make
                before booking at launch.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — The Developer</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Who is the owner of Northwind Estates?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  NorthWind Estates Pvt. Ltd. is led by Mr. Manoj Kumar Garg, Chairman &amp; CEO,
                  with Mr. Shaurya Garg (Marketing &amp; Sales), Mr. Anubhav Jain (Finance &amp;
                  Management) and Mr. Samyak Jain (Design &amp; Construction) as directors. The
                  company is headquartered at Plot 07, Sector Pi-1, Greater Noida.
                </p>
              </div>
              <div className="border border-gray-200 bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">What projects has Northwind Estates delivered?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The group&apos;s delivered portfolio of over 10 lakh sq. ft. includes Satyam
                  Galleria, Jagat Plaza and Satyam Complex 1 &amp; 2 in Greater Noida, Mega Mall,
                  Angel Jupiter, Angel Golf Avenue 2 and Angel Mercury in Indirapuram, and Angel
                  Techpark in Sector 62, Noida. NorthWind Sanctuary in Sector Pi-1 (UP RERA
                  UPRERAPRJ798312, IGBC Platinum pre-certified) is the ongoing flagship.
                </p>
              </div>
              <div className="border border-gray-200 bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">How do I contact the developer directly?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The corporate office is at Plot 07, Sector Pi-1, Greater Noida 201306
                  (+91-888 111 0909, info@nwestates.in, Mon–Sat 10 am–7 pm). For the Sector 22D
                  launch, call the project desk on +91 97177 00596 for pricing and site visits.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <Link
              href="/contact"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Visit Sanctuary &amp; the Sector 22D Site in One Trip
            </Link>
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
