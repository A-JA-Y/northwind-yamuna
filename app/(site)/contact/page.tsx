import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Contact Northwind Sector 22D Sales | Call +91 97177 00596",
  description:
    "Contact the Northwind Estates Sector 22D Yamuna Expressway sales desk for price list, floor plans, site visit and booking. Call or WhatsApp +91 97177 00596.",
  alternates: { canonical: "https://northwindyamuna.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact the Northwind Sector 22D Sales Desk"
        subtitle="Get the launch price list, floor plans, payment schedule and a site visit. Our project advisors are available on call and WhatsApp all seven days, 10 am – 7 pm."
      />
      <ModalWrapper />
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <section className="w-full bg-white pb-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Reach Us</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Call / WhatsApp:{" "}
              <a href="tel:+919717700596" className="text-[#c8922a] font-semibold hover:underline">
                +91 97177 00596
              </a>
              <br />
              Hours: 10:00 am – 7:00 pm, all days
              <br />
              <span className="block mt-2">
                <strong>Site:</strong> Northwind Estates, Sector 22D, Yamuna Expressway, Greater
                Noida, Uttar Pradesh
              </span>
              <span className="block mt-2">
                <strong>Developer&apos;s corporate office:</strong> Plot 07, Sector Pi-1, Greater
                Noida, Uttar Pradesh 201306
              </span>
              <span className="block mt-2 text-xs text-gray-500">
                Marketed by Real Revenue, a unit of Earlydays Innovations Pvt. Ltd. (authorised
                channel partner)
              </span>
            </p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Book a Site Visit</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Site visits run daily with pick-up available from Pari Chowk and select Noida
              locations. A typical visit covers the Sector 22D plot and master plan presentation,
              the Film City and airport approach, and — on request — NorthWind Sanctuary in Sector
              Pi-1 to see the developer&apos;s delivered quality.
            </p>
          </div>

          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
            <h2 className="text-lg font-bold text-gray-900 mb-3">What Happens After You Enquire</h2>
            <ol className="text-sm text-gray-600 leading-relaxed list-decimal pl-4 space-y-1">
              <li>A project advisor calls you back within 15 minutes during working hours.</li>
              <li>You receive the price sheet, floor plans and payment plan on WhatsApp.</li>
              <li>We schedule a site visit at a time that suits you.</li>
              <li>If you go ahead, we guide you through the expression-of-interest, unit selection and documentation.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQs — Contact</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 text-base mb-2">Is this the developer&apos;s office number?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This is the project sales desk run by Real Revenue, an authorised channel partner.
                Pricing and offers are identical to the developer&apos;s.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 text-base mb-2">Can I visit without an appointment?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We recommend booking so that an advisor and the master plan presentation are ready
                for you; walk-ins during working hours are also welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquirySection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
