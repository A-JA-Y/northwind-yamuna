import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Price List 2026 | ₹8,500/Sq. Ft. All Inclusive",
  description:
    "Northwind Sector 22D Yamuna Expressway price list: ₹8,500 per sq ft all inclusive. 3 BHK from ₹1.25 Cr*, 4 BHK from ₹1.66 Cr*. 20×5 payment plan, PLC, charges and cost breakup.",
  alternates: { canonical: "https://northwindyamuna.com/price" },
  keywords:
    "northwind estates yamuna expressway sector 22d price, northwind sector 22d price list, northwind yamuna expressway payment plan, 3 bhk price sector 22d, 20x5 payment plan",
};

const priceTable = [
  { type: "3 BHK + 2T", size: "1,467 sq. ft.", price: "₹1.25 Cr* onwards", rate: "₹8,500 / sq. ft. all inclusive*" },
  { type: "3 BHK + 3T", size: "1,675 sq. ft.", price: "₹1.42 Cr* onwards", rate: "₹8,500 / sq. ft. all inclusive*" },
  { type: "4 BHK + 4T + Servant", size: "1,950 sq. ft.", price: "₹1.66 Cr* onwards", rate: "₹8,500 / sq. ft. all inclusive*" },
  { type: "4 BHK + 5T + Servant + Study", size: "2,550 sq. ft.", price: "₹2.17 Cr* onwards", rate: "₹8,500 / sq. ft. all inclusive*" },
];

const paymentPlan = [
  { stage: "At the time of booking", payment: "20%" },
  { stage: "On completion of ground floor", payment: "20%" },
  { stage: "On completion of 15th floor roof", payment: "20%" },
  { stage: "On completion of superstructure", payment: "20%" },
  { stage: "On offer of possession", payment: "20%" },
];

const clpPlan = [
  { stage: "At the time of booking", payment: "10%" },
  { stage: "Within 30 days of booking", payment: "10%" },
  { stage: "On start of excavation", payment: "10%" },
  { stage: "On completion of basement", payment: "7.5%" },
  { stage: "On completion of ground floor roof", payment: "7.5%" },
  { stage: "On completion of 5th floor roof", payment: "10%" },
  { stage: "On completion of 14th floor roof", payment: "10%" },
  { stage: "On completion of superstructure", payment: "15%" },
  { stage: "On OC received", payment: "10%" },
  { stage: "On offer of possession", payment: "10%" },
];

const standardPriceList = [
  { head: "Basic selling price (BSP) on super area", amount: "₹8,899 / sq. ft. (for 100 units)" },
  { head: "Floor PLC — floors 1 to 5", amount: "₹200 / sq. ft." },
  { head: "Floor PLC — floors 6 to 15", amount: "₹300 / sq. ft." },
  { head: "Floor PLC — floors 16 to 25", amount: "₹200 / sq. ft." },
  { head: "Floor PLC — floors 26 to 28", amount: "₹50 / sq. ft." },
  { head: "Park-facing PLC", amount: "₹300 / sq. ft." },
  { head: "1 covered car parking", amount: "₹4,00,000" },
  { head: "Northwind Wellness Club membership", amount: "₹4,00,000" },
  { head: "Electricity infra charges", amount: "₹1,00,000" },
  { head: "Power backup (up to 5 KVA)", amount: "₹1,00,000" },
  { head: "One-time lease rent", amount: "As per actual (payable at possession)" },
  { head: "IFMS", amount: "₹50 / sq. ft. (payable at possession)" },
  { head: "1 year advance maintenance + GST", amount: "As per actual (payable at possession)" },
];

const costSheet = [
  { head: "All-inclusive cost (1,467 sq. ft. × ₹8,500)", amount: "₹1,24,69,500*" },
  { head: "GST @ 5% (under-construction)", amount: "₹6,23,475*" },
  { head: "Stamp duty + registration (UP, approx. 7%)", amount: "₹8,72,865*" },
  { head: "IFMS @ ₹50 / sq. ft. (at possession)", amount: "₹73,350*" },
  { head: "Indicative total", amount: "₹1.40–1.42 Cr*" },
];

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Price & Payment Plan"
        subtitle="Launch pricing, September 2026 — fully furnished homes at ₹8,500 per sq. ft. all inclusive on a 20×5 payment plan. Limited founder inventory; price revision coming soon."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Northwind Estates Sector 22D Price List and Payment Plan</h1>
            <p className="text-lg leading-relaxed mb-6">
              This page carries the launch pricing shared for Northwind Sector 22D as of September
              2026 — <strong>₹8,500 per sq. ft. all inclusive</strong> on limited founder
              inventory — the <strong>20×5 payment plan</strong>, the standard price list with
              PLC and additional charges, what is included and what is extra, and how the price
              compares with other launches in the sector. Figures marked * are indicative and
              will be updated as the developer revises the price sheet.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get Today&apos;s Price Sheet on WhatsApp &rarr;
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Launch Price List — ₹8,500 / Sq. Ft. All Inclusive*</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Super Area</th>
                    <th className="px-5 py-4">Launch Price</th>
                    <th className="px-5 py-4">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((row) => (
                    <tr key={row.type} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{row.type}</td>
                      <td className="px-5 py-4 text-gray-600">{row.size}</td>
                      <td className="px-5 py-4 text-gray-800 font-semibold">{row.price}</td>
                      <td className="px-5 py-4 text-gray-600">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              *Indicative launch pricing on limited founder inventory, calculated as super area ×
              ₹8,500. All inclusive of furnishing, PLC, car parking, club membership, power backup
              and infra charges. GST, stamp duty, registration and IFMS are extra. Subject to
              change without notice — price revision coming soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">20×5 Payment Plan Explained</h2>
              <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-5 py-4">Stage</th>
                      <th className="px-5 py-4">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentPlan.map((row) => (
                      <tr key={row.stage} className="border-t border-[#e5dcc5]">
                        <td className="px-5 py-3 text-gray-700">{row.stage}</td>
                        <td className="px-5 py-3 font-semibold text-gray-900">{row.payment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Five equal instalments of 20% — one at booking and four tied to visible construction
                milestones, with the last at offer of possession. The plan keeps the upfront outlay
                at one-fifth of the cost and suits buyers funding through a home loan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Construction Linked Plan (CLP)</h2>
              <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-5 py-4">Stage</th>
                      <th className="px-5 py-4">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clpPlan.map((row) => (
                      <tr key={row.stage} className="border-t border-[#e5dcc5]">
                        <td className="px-5 py-3 text-gray-700">{row.stage}</td>
                        <td className="px-5 py-3 font-semibold text-gray-900">{row.payment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                A standard construction-linked alternative for buyers who prefer smaller, more
                frequent instalments. Ask the project advisor which plan applies to your unit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Standard Price List (w.e.f. 1 September 2026)</h2>
              <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
                <table className="w-full text-sm text-left">
                  <tbody>
                    {standardPriceList.map((row) => (
                      <tr key={row.head} className="border-t border-[#e5dcc5] first:border-t-0">
                        <td className="px-5 py-3 text-gray-700">{row.head}</td>
                        <td className="px-5 py-3 text-gray-900 font-semibold whitespace-nowrap">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic">
                The standard list applies once founder inventory at the ₹8,500 all-inclusive rate
                is sold out. 5% GST applicable. NPCL, IGL connection and other government charges
                as per actual; stamp duty as per actual at the time of registry.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What the All-Inclusive Price Includes</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-sm">
                <li>Fully furnished home as per the furnishing schedule (modular kitchen with hob, chimney and RO, modular wardrobes, 5-star inverter ACs, Italian marble / imported stone flooring, smart lock and video door phone)</li>
                <li>Floor and park-facing PLC</li>
                <li>One covered car park</li>
                <li>Northwind Wellness Club membership</li>
                <li>Electricity infra charges and power backup (up to 5 KVA)</li>
              </ul>
              <p className="font-semibold mb-2 text-sm">Extra, as applicable:</p>
              <p className="text-sm">
                GST (5%), stamp duty and registration, IFMS (₹50 per sq. ft.), one-time lease
                rent, one year advance maintenance, additional car park, and NPCL / IGL connection
                or other government charges as per actual.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Northwind Compares in Sector 22D</h2>
            <p className="mb-4 text-sm leading-relaxed">
              Premium apartment launches in Sector 22D during 2026 have quoted basic sale prices of
              ₹9,000–₹9,500 per sq. ft. for bare-shell homes, with PLC, parking and club charges
              on top and furnished interiors adding roughly ₹900–₹1,200 per sq. ft. more.
              Northwind&apos;s ₹8,500 per sq. ft.* is all inclusive for a fully furnished home
              with Italian marble flooring and an 11.25 ft floor-to-floor height, which puts it at
              the value end of the sector while offering lower density (six homes per floor, two
              per wing) than most of its neighbours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Approximate Cost Sheet — 3 BHK + 2T (Illustrative)</h2>
              <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
                <table className="w-full text-sm text-left">
                  <tbody>
                    {costSheet.map((row, i) => (
                      <tr key={row.head} className={`border-t border-[#e5dcc5] first:border-t-0 ${i === costSheet.length - 1 ? "bg-[#FAF8F4] font-semibold" : ""}`}>
                        <td className="px-5 py-3 text-gray-700">{row.head}</td>
                        <td className="px-5 py-3 text-gray-900">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic">
                Stamp duty is lower for women buyers in Uttar Pradesh on the first ₹10 lakh of
                value; check current rates at registration. Total excludes home loan costs, lease
                rent and advance maintenance.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Home Loan and EMI</h2>
              <p className="mb-4 text-sm leading-relaxed">
                On a ₹1.25 Cr* home with 80% funding, a ₹1 Cr loan at 8.5% over 20 years works
                out to an EMI of roughly ₹87,000 per month. Loans are sanctioned by banks and HFCs
                once the project holds a UP RERA registration; pre-approvals can be started earlier
                on the basis of income documents.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Launch Offers</h2>
              <p className="text-sm leading-relaxed">
                Founder inventory at ₹8,500 per sq. ft. all inclusive is limited and a price
                revision is coming soon. Early buyers get first pick of towers, floors and
                park-facing units at the launch price. Offers change with inventory, so ask for
                the current sheet rather than relying on a screenshot.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — Price and Payment</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Is ₹8,500 per sq. ft. the all-inclusive price?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes — on founder inventory, ₹8,500 per sq. ft.* covers the basic price,
                  furnishing, PLC, one car park, club membership, power backup and infra charges.
                  GST, stamp duty, registration and IFMS are additional.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">What does 20×5 mean?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Five instalments of 20% each: at booking, on completion of the ground floor, on
                  completion of the 15th floor roof, on completion of the superstructure, and on
                  offer of possession.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Will the price go up after RERA registration?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The developer has already announced that a price revision is coming soon, and
                  the standard price list carries a BSP of ₹8,899 per sq. ft. plus charges.
                  Launch prices are usually the lowest point in a project&apos;s life cycle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
            <p><strong>Project:</strong> Northwind Estates, Sector 22D, Yamuna Expressway, Greater Noida (YEIDA), Uttar Pradesh</p>
            <p><strong>Developer:</strong> NorthWind Estates Pvt. Ltd., Plot 07, Sector Pi-1, Greater Noida 201306</p>
            <p><strong>RERA:</strong> Under process — the registration number will be published here on grant. Verify at up-rera.in</p>
            <p><strong>Contact:</strong> +91 97177 00596 (Call / WhatsApp, 10 am – 7 pm, all days)</p>
            <p><strong>Page last reviewed:</strong> September 2026</p>
          </div>

          <div className="text-center pt-4">
            <a
              href="tel:+919717700596"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Lock the Launch Price — Call +91 97177 00596
            </a>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
