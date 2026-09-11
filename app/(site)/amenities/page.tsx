import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Wellness Amenities | 30+ Facilities in Sector 22D",
  description:
    "30+ wellness amenities at Northwind Estates Sector 22D Yamuna Expressway — spa clubhouse, heated pool, yoga deck, jogging track, sports courts and more.",
  alternates: { canonical: "https://northwindyamuna.com/amenities" },
};

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
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
                "name": "Amenities",
                "item": "https://northwindyamuna.com/amenities"
              }
            ]
          })
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What amenities does Northwind Sector 22D offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The planned amenity list has 30+ facilities: a wellness clubhouse with spa, sauna and steam, a temperature-controlled swimming pool with kids' pool, a fully equipped gym, yoga and meditation deck, jogging track and cycling loop, reflexology path, multipurpose and badminton courts, squash court, cricket net, indoor games lounge, banquet hall, mini theatre, co-working lounge, café, guest suites, amphitheatre, senior citizen zone, kids' play area with crèche, pet park and more."
                }
              },
              {
                "@type": "Question",
                "name": "Is club membership included in the price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, club membership is part of the launch price. Monthly maintenance charges are separate and will be fixed closer to possession."
                }
              },
              {
                "@type": "Question",
                "name": "When will the clubhouse be ready?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The clubhouse is planned to be completed along with the first phase of towers so that it is usable from the first possessions."
                }
              },
              {
                "@type": "Question",
                "name": "Are guests allowed to use the amenities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Guest usage rules are set by the residents' association after handover; most communities allow accompanied guests with nominal charges for the pool and guest suites."
                }
              },
              {
                "@type": "Question",
                "name": "Why does low density matter for amenities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With 540 homes on 5 acres and only three homes per floor, the pool, gym and courts are shared by far fewer families than in a typical 1,000-plus-unit township — finding a lane in the pool or a badminton slot on a weekend is a very different experience."
                }
              },
              {
                "@type": "Question",
                "name": "Is the ground level vehicle-free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Parking is planned in the basement and stilt levels, keeping the ground level vehicle-free for the central green, walking loops and outdoor wellness spaces."
                }
              }
            ]
          })
        }}
      />

      {/* Schema Markup - Local Business / RealEstateAgent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": "https://northwindyamuna.com/#realestateagent",
            "name": "Northwind Sector 22D Sales Desk — Real Revenue",
            "description": "Authorised channel partner for Northwind Estates Sector 22D, a wellness-led residential launch on the Yamuna Expressway, Greater Noida.",
            "url": "https://northwindyamuna.com/",
            "image": "https://northwindyamuna.com/hero.webp",
            "telephone": "+91-9717700596",
            "priceRange": "₹₹₹",
            "areaServed": {
              "@type": "Place",
              "name": "Yamuna Expressway, Greater Noida, Uttar Pradesh"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 22D, Yamuna Expressway",
              "addressLocality": "Greater Noida",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.2405",
              "longitude": "77.5330"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "10:00",
              "closes": "19:00"
            }
          })
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/amenities-hero.webp"
            alt="Northwind Estates Sector 22D Yamuna Expressway — wellness amenities and central green"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Wellness
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            30+ ways to live well — a campus planned so that a healthier daily routine happens
            inside it.
          </p>

        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* Intro Content Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Amenities at Northwind Wellness, Sector 22D — 30+ Ways to Live Well
          </h1>

          {/* Intro */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            Northwind Sector 22D has been planned around wellness — the idea that the campus
            should support a healthier daily routine without residents needing to leave it. A
            morning walk on the jogging loop, an evening swim in a temperature-controlled pool, a
            weekend yoga session on the deck: the master plan is built so these happen a lift ride
            away from your front door.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            With 540 homes on five acres and only three homes per floor, every facility is shared
            by far fewer families than in a typical township. All amenities are as per the
            proposed plan and will be finalised with the approved drawings.
          </p>
        </div>
      </section>

      {/* Low density section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Low Density, Felt Daily
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Three homes per floor and four lifts per tower mean the pool, gym and courts are
            shared by a resident base a fraction of the size of a 1,000-plus-unit township.
            Finding a lane in the pool on a weekend or a slot on the badminton court is a very
            different experience here.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            The towers sit along the periphery of the 5-acre site, giving the heart of the campus
            over to a landscaped central green with the clubhouse and pool at its centre — and a
            vehicle-free ground level, with parking in the basement and stilt.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/overview"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              Project Overview →
            </Link>
            <Link
              href="/northwind-estates"
              className="text-[#DCA54A] hover:underline font-medium"
            >
              About Northwind Estates →
            </Link>
          </div>
        </div>
      </section>

      {/* The amenity groups */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            The 30+ Planned Amenities, Grouped by How You&apos;ll Use Them
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-gray-700 mb-12">
            The amenity programme leans deliberately towards everyday wellness — spa, yoga,
            reflexology and green loops — backed by sports, community, sustainability and
            safety infrastructure.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Wellness & fitness */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wellness &amp; Fitness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wellness clubhouse with spa, sauna and steam rooms; temperature-controlled
                swimming pool with deck and a separate kids&apos; pool; fully equipped gymnasium
                with cardio and strength zones; yoga and meditation deck; aerobics and dance
                studio.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Outdoors: a jogging track and cycling loop around the central green, a reflexology
                walking path, and an herb and organic garden.
              </p>
            </div>

            {/* Card 2 - Sports */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sports</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multipurpose court for basketball, volleyball and tennis; badminton court and
                squash court; cricket practice net; an indoor games lounge with table tennis,
                billiards, carrom and chess; and a skating rink for children.
              </p>
            </div>

            {/* Card 3 - Community & leisure */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community &amp; Leisure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Banquet and party hall; mini theatre; co-working lounge with meeting room; library
                and reading lounge; café and convenience store; guest suites for visiting family;
                amphitheatre and event lawn; senior citizen zone with shaded seating; kids&apos;
                play area with soft-fall surface, crèche and activity room; and a pet park.
              </p>
            </div>

            {/* Card 4 - Green & sustainable */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Green &amp; Sustainable</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A large central landscaped green with the towers on the periphery; rainwater
                harvesting; a sewage treatment plant with treated-water reuse for landscaping;
                solar lighting in common areas; waste segregation and organic composting; and EV
                charging points in parking.
              </p>
            </div>

            {/* Card 5 - Safety & convenience */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety &amp; Convenience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                3-tier security — gate, tower entry and apartment level — with CCTV and manned
                lobbies; video door phone and intercom in every home; four high-speed lifts per
                tower including a stretcher-size lift; 100% power backup for common areas and
                standard backup for apartments; fire detection and suppression as per NBC norms.
              </p>
            </div>

            {/* Card 6 - Vehicle-free ground */}
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vehicle-Free Ground Level</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Basement and stilt parking keep cars off the ground level, so the central green,
                walking loops, kids&apos; zones and senior areas stay safe, quiet and genuinely
                usable every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location complement */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Amenities That Complement an Airport-Corridor Location
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            The campus amenities are made more valuable by where they sit: Sector 22D is among the
            YEIDA sectors closest to the operational Noida International Airport, with the
            International Film City coming up next door in Sector 21. Inside the gates, daily
            wellness; outside, the fastest-growing infrastructure corridor in the NCR.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/location"
              className="px-6 py-3 bg-[#DCA54A] text-white rounded-lg hover:bg-[#c9953a] transition-colors font-medium"
            >
              View Location &amp; Connectivity
            </Link>
            <Link
              href="/floor-plans"
              className="px-6 py-3 border-2 border-[#DCA54A] text-[#DCA54A] rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors font-medium"
            >
              Explore Floor Plans
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ text section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            FAQs — Amenities
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 text-base mb-2">Is club membership included in the price?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, club membership is part of the launch price. Monthly maintenance charges are
                separate and will be fixed closer to possession.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 text-base mb-2">When will the clubhouse be ready?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The clubhouse is planned to be completed along with the first phase of towers so
                that it is usable from the first possessions.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 text-base mb-2">Are guests allowed to use the amenities?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Guest usage rules are set by the residents&apos; association after handover; most
                communities allow accompanied guests with nominal charges for the pool and guest
                suites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20  bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Walk the Master Plan with a Project Advisor
          </h2>
          <p className="text-lg md:text-xl text-black mb-6 leading-relaxed">
            From the spa clubhouse and temperature-controlled pool to the yoga deck, reflexology
            path and jogging loop around the central green, every element of Northwind Sector 22D
            is planned to make wellness a daily habit rather than a weekend plan.
          </p>
          <p className="text-lg text-black mb-8 leading-relaxed">
            Site visits run daily with pick-up from Pari Chowk and select Noida locations — and
            can include NorthWind Sanctuary in Sector Pi-1 on the same trip.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#c9953a] transition-colors text-lg"
            >
              Book a Site Visit
            </Link>
            <Link
              href="/blogs"
              className="px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg"
            >
              Blog &amp; News
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
