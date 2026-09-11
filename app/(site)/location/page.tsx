import type { Metadata } from "next";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Location | 15 Min from Noida Airport",
  description:
    "Northwind Estates Sector 22D Yamuna Expressway location: 15 min to Noida International Airport, 5 min to Film City, 10 min to BIC, 25 min to Pari Chowk.",
  alternates: { canonical: "https://northwindyamuna.com/location" },
};

const locationHighlights = [
  "Sector 22D — among the YEIDA sectors closest to Noida International Airport",
  "Noida International Airport (Jewar, DXN) — about 15 minutes",
  "International Film City, Sector 21 — adjacent sector, about 5 minutes",
  "Jewar toll plaza, Yamuna Expressway — about 8 minutes",
  "Buddh International Circuit, Sector 25 — about 10 minutes",
  "Eastern Peripheral Expressway interchange — about 15 minutes",
  "Pari Chowk, Greater Noida — about 25 minutes",
  "Authority-laid roads, water, sewer and power to a master plan",
];

const distanceData = [
  { destination: "Noida International Airport (Jewar, DXN)", distance: "10–15 km", time: "15 min" },
  { destination: "International Film City, Sector 21", distance: "Adjacent sector", time: "5 min" },
  { destination: "Jewar toll plaza, Yamuna Expressway", distance: "—", time: "8 min" },
  { destination: "Buddh International Circuit, Sector 25", distance: "—", time: "10 min" },
  { destination: "Eastern Peripheral Expressway interchange", distance: "—", time: "15 min" },
  { destination: "Gautam Buddha University", distance: "—", time: "20 min" },
  { destination: "Pari Chowk, Greater Noida", distance: "18–25 km", time: "25 min" },
  { destination: "Galgotias University, Knowledge Park", distance: "—", time: "25 min" },
  { destination: "Noida Sector 18 (DLF Mall of India)", distance: "—", time: "45 min" },
  { destination: "Delhi border, Kalindi Kunj", distance: "—", time: "60 min" },
  { destination: "Agra via Yamuna Expressway", distance: "—", time: "90 min" },
];

const educationData = [
  "Gautam Buddha University — 20 mins",
  "Galgotias University, Knowledge Park — 25 mins",
  "Knowledge Park cluster of colleges — 25 mins",
  "Sharda University — 30 mins",
  "Schools in Greater Noida (Pari Chowk belt) — 25 mins",
  "YEIDA sector plan allots school plots within and around Sector 22D",
];

const healthcareData = [
  "Hospitals in Greater Noida (Pari Chowk / Knowledge Park) — about 25 mins",
  "Kailash Hospital, Greater Noida — about 25 mins",
  "Yatharth Super-Specialty Hospital — about 30 mins",
  "Sharda Hospital — about 30 mins",
  "Airport-linked medical and hospitality infrastructure under construction near Jewar",
  "Medical Devices Park, Sector 28 — in the corridor",
];

const workspaceData = [
  "Noida International Airport — aviation, hotel, MRO, cargo and logistics jobs, 15 mins",
  "International Film City, Sector 21 — studios and support workforce, 5 mins",
  "Medical Devices Park, Sector 28 — in the corridor",
  "Electronics and semiconductor manufacturing clusters — YEIDA belt",
  "Toy Park and Apparel Park — YEIDA belt",
  "Knowledge Park corporate and institutional cluster — 25 mins",
];

const lifestyleData = [
  "Buddh International Circuit, Sector 25 — 10 mins",
  "Jaypee Greens Town Centre — 25 mins",
  "The Grand Venice Mall, Pari Chowk — 25 mins",
  "Noida Sector 18 (Atta Market / DLF Mall of India) — 45 mins",
  "Agra (Taj Mahal) via Yamuna Expressway — 90 mins",
  "Airport-linked hotels and retail under construction near Jewar",
];

const futureInfraProjects = [
  "Noida International Airport — operational since 15 June 2026, scaling from 12 to 70 million passengers a year",
  "International Film City, Sector 21 — Phase 1 on 230 acres, first studio targeted by end-2026",
  "Aqua Line metro extension towards the airport — through the YEIDA corridor",
  "Film City–airport pod taxi corridor — planned",
  "Ghaziabad–Jewar RRTS extension — DPR stage",
  "Medical Devices Park, Sector 28 — under development",
  "Electronics and semiconductor clusters — YEIDA belt",
  "Toy Park and Apparel Park — YEIDA belt",
];

const faqData = [
  {
    question: "Where exactly is the Northwind Estates Sector 22D location?",
    answer: "Northwind Estates is in Sector 22D, Yamuna Expressway, within the YEIDA notified area of Greater Noida, Gautam Buddh Nagar district, Uttar Pradesh — about 15 minutes from Noida International Airport and next to the International Film City sector."
  },
  {
    question: "How far is Sector 22D from Noida International Airport?",
    answer: "Noida International Airport (Jewar, DXN) is 10–15 km away, about 15 minutes by road via the Yamuna Expressway. Commercial flights began on 15 June 2026."
  },
  {
    question: "What is the pin code for Sector 22D, Yamuna Expressway?",
    answer: "The sector falls under the YEIDA notified area in Gautam Buddh Nagar; the postal pin is assigned by the nearest post office and will be confirmed in the allotment documents."
  },
  {
    question: "How far is Sector 22D from Noida?",
    answer: "Noida Sector 18 is about 45 minutes by road via the Yamuna and Noida Expressways."
  },
  {
    question: "Is there a metro station near Sector 22D?",
    answer: "Not yet. The Aqua Line extension towards the airport is planned; the nearest operational station is at Greater Noida, about 20 minutes away."
  },
  {
    question: "Is Sector 22D a good location for investment?",
    answer: "Sector 22D sits in the belt of YEIDA sectors closest to the operational Noida International Airport, with the International Film City next door and the Medical Devices Park, semiconductor, toy and apparel clusters in the corridor — the infrastructure that usually arrives years after a launch is already visible from the site."
  }
];

export default function LocationPage() {
  return (
    <>


      {/* Main Content Section */}
      <section className="w-full bg-white py-16 px-6" id="location">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
            Location &amp; Connectivity
          </p>

          {/* H1 Heading */}
          <h1 className="text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            Northwind Estates Sector 22D Location — Yamuna Expressway&apos;s Airport Corridor
          </h1>

          {/* Intro Paragraph */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Sector 22D sits on the Yamuna Expressway in the belt of YEIDA sectors closest to
              Noida International Airport. It is a planned residential sector with group housing
              plots allotted to established developers, wide sector roads, and the International
              Film City coming up in the adjoining Sector 21. Unlike most growth-corridor
              launches, the anchor infrastructure here is not a promise — the airport began
              commercial flights on 15 June 2026, and it is about 15 minutes from the site.
            </p>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sector+22D+Yamuna+Expressway+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

          {/* H2 - Address */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Where Exactly is Northwind Sector 22D?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            The project sits on a 5-acre YEIDA-allotted group housing parcel on the eastern side
            of the Yamuna Expressway, in the belt YEIDA has earmarked for premium group housing.
            Nearest expressway access is the Yamuna Expressway service road, with the Jewar toll
            plaza about 8 minutes away.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            The address sits at the meeting point of three growth drivers: the operational Noida
            International Airport to the south, the 1,000-acre International Film City in the
            adjoining Sector 21, and the YEIDA industrial belt — Medical Devices Park,
            electronics and semiconductor clusters, Toy and Apparel Parks — building out around
            it.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
            <p className="font-semibold text-gray-800">Project Address:</p>
            <p className="text-gray-600 text-sm">
              Northwind Estates<br />
              Sector 22D, Yamuna Expressway<br />
              Greater Noida (YEIDA notified area), Gautam Buddh Nagar, Uttar Pradesh
            </p>
          </div>

          {/* H2 - Why Location Matters */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Why the Sector 22D Location Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            When buyers choose a launch-stage home, they are buying the sector as much as the
            project. Sector 22D delivers on the parameters that drive appreciation in the YEIDA
            region:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Airport proximity — among the residential sectors closest to Noida International Airport, which is already operational",
              "A planned sector — YEIDA lays the roads, water, sewer and power to a master plan rather than leaving them to individual projects",
              "A developer cluster — the 2026 auction cycle brought several established developers to the sector, so the neighbourhood builds out together",
              "Film City next door — a large floating and resident workforce that rents furnished homes on long shoots",
              "Industrial belt demand — Medical Devices Park, semiconductor, toy and apparel clusters within the corridor"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Main Content with Map - Keep Original Layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">

            {/* LEFT: TEXT */}
            <div className="flex-1 max-w-lg">

              <h3 className="font-bold text-gray-900 mb-3 text-base">
                Strategic Connectivity
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                The Yamuna Expressway links the sector to the Noida Expressway (towards Delhi),
                the Eastern Peripheral Expressway (towards Ghaziabad, Sonipat and Palwal) and
                Agra — a six-lane, access-controlled spine running past the site.
              </p>

              <ul className="space-y-4">
                {locationHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#c8922a] mt-1">✓</span>
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: MAP */}
            <div className="flex-1 w-full">
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
                <iframe
                  src="https://maps.google.com/maps?q=Sector%2022D%2C%20Yamuna%20Expressway%2C%20Greater%20Noida&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Northwind Estates Sector 22D Location Map"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sector+22D+Yamuna+Expressway+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Sections */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Connectivity from Northwind Sector 22D
          </h2>

          {/* Air Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Noida International Airport — 15 Minutes Away, and Operational</h3>
          <p className="text-gray-600 leading-relaxed mb-3 text-sm">
            Noida International Airport at Jewar started commercial flights on 15 June 2026.
            Phase 1 has a single 3,900-metre runway, a 1,01,590 sq. m. terminal and capacity for
            12 million passengers a year; the master plan takes it to 70 million passengers by
            Phase 4. It is operated by Yamuna International Airport Pvt. Ltd., a wholly owned
            subsidiary of Zurich Airport International AG.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            For Sector 22D residents this means a 15-minute airport run and, over the next
            decade, the arrival of hotels, MRO facilities, logistics parks and the jobs that come
            with them.
          </p>

          {/* Film City */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">International Film City — the Next Sector Over</h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            YEIDA&apos;s International Film City in Sector 21 is a 1,000-acre master plan, with
            Phase 1 on 230 acres being developed by Bayview Bhutani Film City (a partnership
            between filmmaker Boney Kapoor and Bhutani Infra) at an investment of about ₹1,510
            crore. The first permanent studio is targeted by end-2026. Studios bring a large
            floating and resident workforce — exactly the tenant profile that prefers a furnished
            3 BHK on a short lease.
          </p>

          {/* Road Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Road Connectivity</h3>
          <ul className="space-y-1 mb-6">
            {[
              "Yamuna Expressway — six-lane, access-controlled, Noida to Agra, past the site",
              "Jewar toll plaza — 8 minutes",
              "Eastern Peripheral Expressway interchange — 15 minutes (towards Ghaziabad, Sonipat, Palwal)",
              "Noida Expressway link towards Delhi — Kalindi Kunj border in about 60 minutes",
              "Pari Chowk, Greater Noida — 25 minutes",
              "Agra — about 90 minutes down the expressway",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Pipeline Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Connectivity in the Pipeline</h3>
          <ul className="space-y-1 mb-6">
            {[
              "Metro: the Noida–Greater Noida Aqua Line extension towards the airport passes through the YEIDA corridor; the nearest operational station today is around 20 minutes away at Greater Noida",
              "Pod taxi: a planned corridor linking Film City, the airport and YEIDA sectors",
              "Rapid rail: the Ghaziabad–Jewar RRTS extension is at DPR stage",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm">
            Buyers should plan for the first two to three years to lean on Greater Noida for
            schooling and healthcare, with local options growing as the sector populates.
          </p>
        </div>
      </section>

      {/* Distance Snapshot Table */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-6 text-center">
            Distance Chart — Northwind Sector 22D
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Landmark</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Distance</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Approx. Time</th>
                </tr>
              </thead>
              <tbody>
                {distanceData.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.destination}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.distance}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Times are typical off-peak drive times and will vary with traffic.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Education Near Northwind Sector 22D
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Gautam Buddha University and the Knowledge Park cluster of colleges are 20–25 minutes
            towards Greater Noida, with YEIDA&apos;s sector plan allotting institutional plots
            within and around Sector 22D.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {educationData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Healthcare Near Northwind Sector 22D
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Hospitals within Greater Noida are about 25 minutes away today, and airport-linked
            healthcare and hospitality are already under construction closer to Jewar.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {healthcareData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workspaces Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Employment Around Northwind Sector 22D
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            The YEIDA region around Sector 22D is where the state has concentrated its
            new-economy parks — and the rental demand that follows them is largely furnished
            first.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {workspaceData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Lifestyle, Shopping &amp; Entertainment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Retail and dining today lean on Greater Noida; airport-linked hospitality and retail
            are building out closer to Jewar.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {lifestyleData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Future-Proof Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Why the Sector 22D Location is Future-Proof
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Most growth-corridor projects are sold on what will be. Northwind Sector 22D launches
            at the moment its anchor infrastructure is already delivering. Within the corridor:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {futureInfraProjects.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm">
            As these projects come online over the next few years, Sector 22D sits at the centre
            of one of India&apos;s most strategically planned growth corridors.
          </p>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="w-full bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://northwindyamuna.com/location#faq",
                "mainEntity": faqData.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://northwindyamuna.com/location#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://northwindyamuna.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Location",
                    "item": "https://northwindyamuna.com/location"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://northwindyamuna.com/location#webpage",
                "url": "https://northwindyamuna.com/location",
                "name": "Northwind Sector 22D Location | 15 Min from Noida Airport",
                "description": "Northwind Estates Sector 22D Yamuna Expressway location: 15 min to Noida International Airport, 5 min to Film City, 10 min to BIC, 25 min to Pari Chowk.",
                "breadcrumb": {
                  "@id": "https://northwindyamuna.com/location#breadcrumb"
                },
                "about": {
                  "@id": "https://northwindyamuna.com/#project"
                },
                "mainEntity": {
                  "@id": "https://northwindyamuna.com/location#faq"
                },
                "primaryImageOfPage": "https://northwindyamuna.com/hero.webp",
                "inLanguage": "en-IN"
              },
              {
                "@type": "ApartmentComplex",
                "@id": "https://northwindyamuna.com/#project",
                "name": "Northwind Estates Sector 22D, Yamuna Expressway",
                "description": "Fully furnished 3 & 4 BHK wellness residences on 5 acres — 6 towers of G+30, 540 homes, 3 apartments per floor, 15 minutes from Noida International Airport.",
                "url": "https://northwindyamuna.com/",
                "image": "https://northwindyamuna.com/hero.webp",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sector 22D, Yamuna Expressway",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "addressCountry": "IN"
                },
                "amenityFeature": [
                  { "@type": "LocationFeatureSpecification", "name": "Wellness Clubhouse with Spa" },
                  { "@type": "LocationFeatureSpecification", "name": "Central Landscaped Green" }
                ]
              },
              {
                "@type": "RealEstateAgent",
                "@id": "https://northwindyamuna.com/#organization",
                "name": "Northwind Sector 22D Sales Desk — Real Revenue",
                "url": "https://northwindyamuna.com/",
                "logo": "https://northwindyamuna.com/hero.webp",
                "image": "https://northwindyamuna.com/hero.webp",
                "telephone": "+91-9717700596",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sector 22D, Yamuna Expressway",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "addressCountry": "IN"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Greater Noida"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
