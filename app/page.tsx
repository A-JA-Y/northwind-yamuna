import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const ProjectHighlights = dynamic(() => import("@/components/ProjectHighlights"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        Northwind Estates Sector 22D, Yamuna Expressway – Fully Furnished 3 & 4 BHK Wellness Residences
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://northwindyamuna.com/",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://northwindyamuna.com/#organization",
                name: "Real Revenue",
                legalName: "Earlydays Innovations Pvt. Ltd.",
                url: "https://northwindyamuna.com/",
                description:
                  "Authorised channel partner for Northwind Estates Sector 22D, Yamuna Expressway.",
                telephone: "+919717700596",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+919717700596",
                  contactType: "sales",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://northwindyamuna.com/#website",
                url: "https://northwindyamuna.com/",
                name: "Northwind Yamuna",
                publisher: { "@id": "https://northwindyamuna.com/#organization" },
                inLanguage: "en-IN",
              },
              {
                "@type": "ApartmentComplex",
                "@id": "https://northwindyamuna.com/#project",
                name: "Northwind Estates Sector 22D, Yamuna Expressway",
                alternateName: [
                  "Northwind Sector 22D",
                  "Northwind Wellness",
                  "Northwind Yamuna Expressway",
                ],
                url: "https://northwindyamuna.com/",
                image: "https://northwindyamuna.com/hero.webp",
                description:
                  "Fully furnished 3 & 4 BHK wellness residences on 5 acres in Sector 22D, Yamuna Expressway — 4 glass-facade towers of G+30, 600+ homes, only 6 apartments per floor with 6 lifts, 50,000 sq. ft. clubhouse, ₹8,500 per sq. ft. all inclusive, 15 minutes from Noida International Airport.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Sector 22D, Yamuna Expressway",
                  addressLocality: "Greater Noida",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
                geo: { "@type": "GeoCoordinates", latitude: 28.2405, longitude: 77.533 },
                numberOfAccommodationUnits: 600,
                petsAllowed: true,
                amenityFeature: [
                  { "@type": "LocationFeatureSpecification", name: "Wellness clubhouse with spa", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Temperature-controlled swimming pool", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Gymnasium", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Yoga and meditation deck", value: true },
                  { "@type": "LocationFeatureSpecification", name: "Jogging track", value: true },
                  { "@type": "LocationFeatureSpecification", name: "3-tier security", value: true },
                  { "@type": "LocationFeatureSpecification", name: "EV charging", value: true },
                ],
                containsPlace: [
                  {
                    "@type": "Apartment",
                    name: "3 BHK + 2T",
                    numberOfRooms: 3,
                    numberOfBathroomsTotal: 2,
                    floorSize: { "@type": "QuantitativeValue", value: 1467, unitCode: "FTK" },
                    offers: {
                      "@type": "Offer",
                      price: "12469500",
                      priceCurrency: "INR",
                      availability: "https://schema.org/PreOrder",
                      url: "https://northwindyamuna.com/3-bhk-flats-sector-22d-yamuna-expressway",
                    },
                  },
                  {
                    "@type": "Apartment",
                    name: "3 BHK + 3T",
                    numberOfRooms: 3,
                    numberOfBathroomsTotal: 3,
                    floorSize: { "@type": "QuantitativeValue", value: 1675, unitCode: "FTK" },
                    offers: {
                      "@type": "Offer",
                      price: "14237500",
                      priceCurrency: "INR",
                      availability: "https://schema.org/PreOrder",
                      url: "https://northwindyamuna.com/3-bhk-flats-sector-22d-yamuna-expressway",
                    },
                  },
                  {
                    "@type": "Apartment",
                    name: "4 BHK + 4T + Servant",
                    numberOfRooms: 4,
                    numberOfBathroomsTotal: 4,
                    floorSize: { "@type": "QuantitativeValue", value: 1950, unitCode: "FTK" },
                    offers: {
                      "@type": "Offer",
                      price: "16575000",
                      priceCurrency: "INR",
                      availability: "https://schema.org/PreOrder",
                      url: "https://northwindyamuna.com/4-bhk-flats-sector-22d-yamuna-expressway",
                    },
                  },
                  {
                    "@type": "Apartment",
                    name: "4 BHK + 5T + Servant + Study",
                    numberOfRooms: 4,
                    numberOfBathroomsTotal: 5,
                    floorSize: { "@type": "QuantitativeValue", value: 2550, unitCode: "FTK" },
                    offers: {
                      "@type": "Offer",
                      price: "21675000",
                      priceCurrency: "INR",
                      availability: "https://schema.org/PreOrder",
                      url: "https://northwindyamuna.com/4-bhk-flats-sector-22d-yamuna-expressway",
                    },
                  },
                ],
                brand: {
                  "@type": "Organization",
                  name: "Northwind Estates",
                  url: "https://www.northwindestates.com/",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where exactly is Northwind Estates Sector 22D located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The project is in Sector 22D, Yamuna Expressway, within the YEIDA notified area of Greater Noida, Gautam Buddh Nagar, Uttar Pradesh — about 15 minutes from Noida International Airport and next to the International Film City sector.",
                },
              },
              {
                "@type": "Question",
                name: "What is the starting price of Northwind Estates Sector 22D?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All homes are priced at ₹8,500 per sq. ft. all inclusive on limited founder inventory. The 3 BHK + 2T (1,467 sq. ft.) starts at about ₹1.25 Cr, the 3 BHK + 3T (1,675 sq. ft.) at ₹1.42 Cr, the 4 BHK + 4T + Servant (1,950 sq. ft.) at ₹1.66 Cr and the 4 BHK + 5T + Servant + Study (2,550 sq. ft.) at ₹2.17 Cr. Prices are indicative and subject to change; a price revision is expected soon.",
                },
              },
              {
                "@type": "Question",
                name: "Are the apartments fully furnished?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The launch offer covers fully furnished homes — modular kitchen with hob, chimney and RO, modular wardrobes, 5-star inverter air-conditioners, Italian marble flooring, smart lock and video door phone are included as per the furnishing schedule.",
                },
              },
              {
                "@type": "Question",
                name: "Is the project RERA registered?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "UP RERA registration is under process. The number will be displayed on the website as soon as it is issued.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 20×5 payment plan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Five equal instalments of 20%: at booking, on completion of the ground floor, on completion of the 15th floor roof, on completion of the superstructure, and on offer of possession.",
                },
              },
              {
                "@type": "Question",
                name: "When is possession expected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tentatively 2030–31, to be confirmed with the UP RERA registration.",
                },
              },
              {
                "@type": "Question",
                name: "How many flats are there per floor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Only six apartments per floor — two per core / wing — served by six lifts in each of the four G+30 towers.",
                },
              },
            ],
          }),
        }}
      />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="md:px-[30px] md:py-[45px] md:relative md:top-[-98px]">
          <div className="md:block max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject  heading={false}/>
        <Amenities />
        <ProjectHighlights />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <Footer />
    </div>
  );
}
