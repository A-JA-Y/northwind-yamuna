import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Price List 2026 | 3 BHK from ₹1.23 Cr*",
  description:
    "Northwind Sector 22D Yamuna Expressway price list: 3 BHK 1,675 sq ft from ₹1.23 Cr*, 4 BHK 2,200 sq ft on request. 20×5 payment plan, offers and cost breakup.",
  alternates: { canonical: "https://northwindyamuna.com/price" },
  keywords:
    "northwind estates yamuna expressway sector 22d price, northwind sector 22d price list, northwind yamuna expressway payment plan, 3 bhk price sector 22d, 20x5 payment plan",
};

const priceTable = [
  { type: "3 BHK + 3T", size: "1,675 sq. ft.", price: "₹1.23 Cr* onwards", rate: "≈ ₹7,350 / sq. ft.*" },
  { type: "4 BHK + 4T + Servant", size: "2,200 sq. ft.", price: "On request", rate: "On request" },
];

const paymentPlan = [
  { stage: "On booking / allotment", payment: "20% of total cost*" },
  { stage: "Subsequent construction milestones", payment: "5% at each milestone until completion*" },
  { stage: "On offer of possession", payment: "Balance, plus registration charges" },
];

const costSheet = [
  { head: "Basic cost (launch price)", amount: "₹1,23,00,000*" },
  { head: "GST @ 5% (under-construction)", amount: "₹6,15,000*" },
  { head: "Stamp duty + registration (UP, approx. 7%)", amount: "₹8,61,000*" },
  { head: "IFMS and other charges", amount: "As per price sheet" },
  { head: "Indicative total", amount: "₹1.37–1.40 Cr*" },
];

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Price & Payment Plan"
        subtitle="Launch pricing, September 2026 — furnished homes at a per-square-foot rate below what bare-shell launches in the sector are quoting."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">Northwind Estates Sector 22D Price List and Payment Plan</h1>
            <p className="text-lg leading-relaxed mb-6">
              This page carries the launch pricing shared for Northwind Sector 22D as of September
              2026, the <strong>20×5 payment structure</strong>, what is included and what is
              extra, and how the price compares with other launches in the sector. Figures marked *
              are indicative and will be updated as the developer revises the price sheet.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get Today&apos;s Price Sheet on WhatsApp &rarr;
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Launch Price List</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Super Area</th>
                    <th className="px-5 py-4">Launch Price</th>
                    <th className="px-5 py-4">Effective Rate</th>
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
              *Indicative launch pricing, inclusive of furnishing. Subject to change without
              notice. Floor-rise, PLC and view premium may apply on select units.
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
                The plan keeps the upfront outlay at one-fifth of the cost and spreads the balance
                across construction stages, which suits buyers funding through a home loan. The full
                milestone schedule is part of the price sheet.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What the Launch Price Includes</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6 text-sm">
                <li>Fully furnished home as per the furnishing schedule (modular kitchen, wardrobes, ACs, false ceiling and lighting, sanitary fittings)</li>
                <li>One covered car park</li>
                <li>Club membership</li>
                <li>Power backup and water connection provisions as per the approved plan</li>
              </ul>
              <p className="font-semibold mb-2 text-sm">Extra, as applicable:</p>
              <p className="text-sm">
                GST, stamp duty and registration, IFMS (interest-free maintenance security),
                additional car park, external development / infrastructure charges if levied by the
                authority, and any floor-rise, PLC or view premium.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Northwind Compares in Sector 22D</h2>
            <p className="mb-4 text-sm leading-relaxed">
              Premium apartment launches in Sector 22D during 2026 have quoted basic sale prices of
              ₹9,000–₹9,500 per sq. ft. for bare-shell homes, with furnished interiors adding
              roughly ₹900–₹1,200 per sq. ft. on top. Northwind&apos;s ₹1.23 Cr* for a furnished
              1,675 sq. ft. 3 BHK works out to about ₹7,350 per sq. ft.*, which puts it at the value
              end of the sector while offering lower density (three homes per floor) than most of
              its neighbours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Approximate Cost Sheet — 3 BHK (Illustrative)</h2>
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
                value; check current rates at registration. Total excludes home loan costs.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Home Loan and EMI</h2>
              <p className="mb-4 text-sm leading-relaxed">
                On a ₹1.23 Cr* home with 80% funding, a ₹98 lakh loan at 8.5% over 20 years works
                out to an EMI of roughly ₹85,000 per month. Loans are sanctioned by banks and HFCs
                once the project holds a UP RERA registration; pre-approvals can be started earlier
                on the basis of income documents.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Launch Offers</h2>
              <p className="text-sm leading-relaxed">
                Early buyers at Northwind Sector 22D get first pick of towers, floors and
                central-green-facing units at the launch price. Offers change with inventory, so
                ask for the current sheet rather than relying on a screenshot.
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — Price and Payment</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Is ₹1.23 Cr the all-inclusive price?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  It is the launch basic price* for the 3 BHK, inclusive of furnishing. GST, stamp
                  duty, registration and IFMS are additional.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Can I pay more than 20% upfront for a discount?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Down-payment and flexi plans are sometimes offered on select inventory. Ask the
                  project advisor for current options.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">Will the price go up after RERA registration?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Launch prices are usually the lowest point in a project&apos;s life cycle.
                  Revisions after registration are common in Sector 22D, where neighbouring projects
                  have raised rates within months of launch.
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
