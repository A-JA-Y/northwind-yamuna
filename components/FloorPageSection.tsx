"use client";
import { useState } from "react";
import Image from "next/image";

import plan3bhk from "@/assets/plan-1.webp";
import plan4bhk from "@/assets/plan-2.webp";
import masterPlan from "@/assets/master-plan.webp";

import { useModal } from "./ModalContext";
import usePlansUnlocked from "@/utils/usePlansUnlocked";

// Apartment floor plan data
const apartmentPlans = [
  {
    id: "3bhk",
    type: "3 BHK",
    size: "1,675 sq. ft.",
    config: "3 BHK + 3T",
    price: "₹1.23 Cr*",
    image: plan3bhk,
    description:
      "Entrance foyer opening to a continuous living-dining space with the main balcony along it; separate kitchen with utility balcony; corner master bedroom with private balcony; attached toilet for every bedroom. Two balconies, openings on three sides.",
    features: ["3 Bedrooms", "3 Toilets", "2 Balconies", "Utility Balcony", "Three-Side Open", "Fully Furnished"],
  },
  {
    id: "4bhk",
    type: "4 BHK",
    size: "2,200 sq. ft.",
    config: "4 BHK + 4T + Servant",
    price: "On request",
    image: plan4bhk,
    description:
      "Large living-dining with a wide front balcony; kitchen with utility, servant room and toilet off the service side; corner master suite with walk-in wardrobe zone and private balcony; three more en-suite bedrooms — one works as a study.",
    features: ["4 Bedrooms", "4 Toilets", "Servant Room", "Walk-in Wardrobe", "Three-Side Open", "Fully Furnished"],
  },
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const isUnlocked = usePlansUnlocked(isLeadSubmitted);
  const [activePlan, setActivePlan] = useState<(typeof apartmentPlans)[0] | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("");

  // Price comparison table data
  const priceData = [
    { type: "3 BHK + 3T", size: "1,675 sq. ft.", config: "3 BHK", price: "₹1.23 Cr* onwards" },
    { type: "4 BHK + 4T + Servant", size: "2,200 sq. ft.", config: "4 BHK", price: "On request" },
  ];

  return (
    <section className="w-full py-16 px-6" id="floor-plans" aria-label="Northwind Sector 22D Floor Plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* H1 Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Northwind Sector 22D Floor Plans — 3 BHK and 4 BHK Layouts
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Northwind Sector 22D offers two apartment layouts across its six towers. Both are
            three-side open, both put the living-dining space and master bedroom on the balcony
            side, and both keep the kitchen and service areas together. The plans below describe
            the room arrangement; tower-specific dimensioned drawings are shared with the price
            list and will form part of the agreement.
          </p>
          <button
            onClick={() => openModal()}
            className="mt-6 bg-[#DCA54A] text-white text-sm px-8 py-3 rounded uppercase font-semibold hover:bg-[#c9943a] transition"
            aria-label="Download Floor Plans"
          >
            Download All Floor Plans
          </button>
        </div>

        {/* H2 - Typical floor plate */}
        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Typical Floor Plate — 3 Homes, 4 Lifts
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm">
            Each tower floor holds three apartments arranged around a central core of four
            high-speed lifts and two staircases. The arrangement gives each home a corner
            position with openings on three sides. Service shafts and refuse chutes are planned
            in the core, away from the living spaces.
          </p>
        </div>

        {/* H2 - Price Chart */}
        <div className="mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Northwind Sector 22D Configurations at a Glance
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-[#DCA54A] text-white">
                  <th className="px-4 py-3 text-left">Configuration</th>
                  <th className="px-4 py-3 text-left">Super Area</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Launch Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((item, idx) => (
                  <tr
                    key={item.type}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-semibold">{item.type}</td>
                    <td className="px-4 py-3">{item.size}</td>
                    <td className="px-4 py-3">{item.config}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            *Indicative launch pricing, inclusive of furnishing; subject to change without notice.
            Areas are super built-up — the RERA carpet area will be published with the
            registration.
          </p>
        </div>

        {/* H2 - Floor Plan Configurations */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            The Two Layouts
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-10">
            No 2 BHKs and no 5 BHKs — the project is planned with 3 BHK and 4 BHK homes only,
            every one of them a fully furnished, three-side-open corner home.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {apartmentPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-100"
                onClick={() => {
                  if (!isUnlocked) {
                    openModal();
                  } else {
                    setActivePlan(plan);
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={`${plan.config} Northwind Sector 22D Floor Plan - ${plan.size}`}
                    className={`w-full h-full object-cover transition duration-500 ${
                      !isUnlocked ? "blur-[2px] scale-105" : "hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm font-semibold">
                      🔒 Unlock to View
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-xs px-3 py-1 rounded">
                    {plan.type}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {plan.config} <span className="text-sm font-normal">({plan.size})</span>
                  </h3>
                  <p className="text-sm text-[#DCA54A] font-semibold">{plan.type} · {plan.price}</p>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-3">{plan.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {plan.features.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {plan.features.length > 4 && (
                      <span className="text-[10px] text-gray-500">+{plan.features.length - 4} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* H2 - Selection Guide Table */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Choose the Right Layout for You
          </h2>

          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left">If You Are...</th>
                  <th className="px-4 py-3 text-left">Recommended Home</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { buyer: "A family of four to five", unit: "3 BHK (1,675 sq. ft. · ₹1.23 Cr*)", why: "The most in-demand ticket size in the sector, with an attached toilet for every bedroom" },
                  { buyer: "A first-time buyer in the corridor", unit: "3 BHK ⭐", why: "Lowest entry ticket into a low-density, fully furnished project" },
                  { buyer: "A rental investor", unit: "3 BHK", why: "Furnished units rent fastest to airport and Film City staff" },
                  { buyer: "A joint family or one with live-in help", unit: "4 BHK (2,200 sq. ft.)", why: "Servant room with separate access, four en-suite bedrooms" },
                  { buyer: "Working from home often", unit: "4 BHK", why: "The fourth bedroom works as a dedicated study" },
                  { buyer: "An NRI wanting lock-and-leave", unit: "4 BHK", why: "Large, furnished home 15 minutes from the airport" },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="px-4 py-3 font-medium">{item.buyer}</td>
                    <td className="px-4 py-3 font-semibold text-[#DCA54A]">{item.unit}</td>
                    <td className="px-4 py-3 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* H2 - Master Plan Section */}
        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Northwind Sector 22D Master Plan
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm mb-6">
            The master plan places the six G+30 towers along the periphery of the 5-acre site,
            leaving a large central landscaped green with the clubhouse and pool at its heart.
            A jogging and cycling loop rings the green, with the reflexology path and senior
            zones on the quieter edge — and the ground level kept vehicle-free with basement
            and stilt parking.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-sm mb-6">
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>Six towers on the periphery, central green at the heart</li>
              <li>Clubhouse and pool visible from most homes</li>
              <li>Jogging &amp; cycling loop, reflexology path</li>
            </ul>
            <ul className="space-y-1 list-disc list-inside text-gray-600">
              <li>Basement and stilt parking — vehicle-free ground</li>
              <li>Separate entry for residents and service traffic</li>
              <li>Yoga deck, kids&apos; zone and sports court</li>
            </ul>
          </div>

          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto"
            onClick={() => {
              if (!isUnlocked) {
                openModal();
              } else {
                setIsMasterOpen(true);
              }
            }}
          >
            <Image
              src={masterPlan}
              alt="Northwind Sector 22D Master Plan - Towers on the Periphery Around a Central Green"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[1px] scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">📐 Northwind Sector 22D Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button
                className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="View Master Plan"
              >
                {isUnlocked ? "View Master Plan" : "Unlock Now"}
              </button>
            </div>
            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => {
                if (!isUnlocked) openModal();
                else setIsMasterOpen(true);
              }}
              className="bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase hover:bg-[#c9943a] transition"
            >
              View Master Plan
            </button>
          </div>
        </div>

        {/* H2 - How to read the areas */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            How to Read the Areas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm text-center">
            The 1,675 and 2,200 sq. ft. figures are super built-up areas, which include the
            apartment, balconies and a proportionate share of common areas. The RERA carpet
            area, which counts only the usable area inside the walls, will be published with the
            registration. Ask the project advisor for both numbers before comparing with other
            projects.
          </p>
        </div>

        {/* H2 - PDF Download Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 md:p-8 text-center border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get Dimensioned Floor Plans &amp; the Master Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            Tower-specific dimensioned drawings for the 3 BHK and 4 BHK, along with the master
            plan and the current price sheet, are shared directly with verified buyers on
            WhatsApp and email.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            Share your name, phone and preferred configuration and our project advisor will send
            the latest set within a few hours — or call +91 97177 00596.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Your Name"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Phone Number"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Email Address"
              />
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#DCA54A]"
                aria-label="Preferred Configuration"
              >
                <option value="">Preferred Configuration</option>
                <option value="3bhk">3 BHK + 3T — 1,675 sq. ft.</option>
                <option value="4bhk">4 BHK + 4T + Servant — 2,200 sq. ft.</option>
                <option value="unsure">Not sure yet</option>
              </select>
              <button
                onClick={() => openModal()}
                className="bg-[#DCA54A] text-white font-semibold px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
              >
                Email Me the Floor Plans
              </button>
            </div>
          </div>
        </div>

        {/* H2 - Price Info */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Floor Plan Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The 3 BHK starts at <strong>₹1.23 Cr*</strong> (≈ ₹7,350 per sq. ft.* for a
            furnished home) and the 4 BHK is priced on request. Floor-rise, PLC and view premium
            may apply on select units, so pricing is shared on a one-to-one basis to make sure
            you get the current floor-wise sheet.
          </p>
          <p className="mt-3">
            For the latest pricing, visit the{" "}
            <a href="/price" className="text-[#DCA54A] hover:underline">
              Price page
            </a>{" "}
            or request a callback through the{" "}
            <a href="/contact" className="text-[#DCA54A] hover:underline">
              Contact form
            </a>.
          </p>
        </div>
      </div>

      {/* FLOOR PLAN MODAL */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePlan.config} Floor Plan`}
          onClick={() => setActivePlan(null)}
        >
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePlan(null)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close plan preview"
            >
              ✕
            </button>

            <div className="mb-3">
              <h3 className="text-lg font-bold text-gray-900">
                {activePlan.config} Floor Plan
              </h3>
              <p className="text-sm text-gray-600">
                {activePlan.size} · {activePlan.price}
              </p>
            </div>

            <Image
              src={activePlan.image}
              alt={`${activePlan.config} Northwind Sector 22D Floor Plan - ${activePlan.size}`}
              className="w-full h-auto object-contain"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {activePlan.features.map((feature) => (
                <span key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Northwind Sector 22D Master Plan"
          onClick={() => setIsMasterOpen(false)}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMasterOpen(false)}
              className="absolute top-2 right-2 text-black text-xl hover:text-gray-600 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close master plan"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              Northwind Sector 22D Master Plan
            </h3>

            <Image
              src={masterPlan}
              alt="Northwind Sector 22D Master Plan - Complete Site Layout"
              className="w-full h-auto object-contain mb-4"
            />

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/brochure.pdf"
                download
                className="bg-[#DCA54A] text-white text-sm px-6 py-3 rounded uppercase hover:bg-[#c9943a] transition"
                aria-label="Download E-Brochure"
              >
                📥 Download E-Brochure
              </a>
              <button
                onClick={() => {
                  setIsMasterOpen(false);
                  openModal();
                }}
                className="bg-gray-200 text-gray-700 text-sm px-6 py-3 rounded uppercase hover:bg-gray-300 transition"
              >
                Request Price Sheet
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
