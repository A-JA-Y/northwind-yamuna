import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy & Disclaimer | Northwind Yamuna",
  description:
    "Privacy policy and disclaimer for northwindyamuna.com, the Northwind Estates Sector 22D channel-partner marketing website. Read terms of use and disclaimer.",
  alternates: { canonical: "https://northwindyamuna.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy / Disclaimer"
        subtitle="Please read the following terms before using this website."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h2>
            <p>
              This website (northwindyamuna.com) is owned and operated by Real Revenue, a unit of
              Earlydays Innovations Pvt. Ltd., an authorised channel partner for Northwind
              Estates. It is not the official website of the developer. All rights for logos and
              images are reserved by the developer.
            </p>
            <p className="mt-3">
              The content on this site — including project details, prices, areas, payment plans,
              amenities, specifications, images, renders and timelines — is for information
              purposes only and is based on launch communication available at the time of
              publishing. All figures marked with an asterisk (*) are indicative and subject to
              change without prior notice. Areas mentioned are super built-up areas unless stated
              otherwise. Images and renders are artistic impressions and do not form part of any
              offer or contract. Nothing on this site constitutes an offer, invitation to offer,
              or legal commitment of any kind.
            </p>
            <p className="mt-3">
              By using or accessing this website you agree with this disclaimer without any
              limitation. Buyers are advised to verify all details, approvals and the UP RERA
              registration status with the developer before making any booking decision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">RERA Status</h2>
            <p>
              UP RERA registration for Northwind Estates Sector 22D is under process. The
              registration number will be published on this website and on all marketing material
              as soon as it is granted. Verify on up-rera.in. Bookings before registration are
              accepted as expressions of interest with refundable terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Privacy Policy</h2>
            <p>
              We respect your privacy. Information submitted through enquiry forms on this website
              (such as name, phone number, and email) is used only to respond to your request and
              provide project-related information.
            </p>
            <p className="mt-3">
              We do not sell your personal data to third parties. Data may be shared with
              authorised representatives solely for the purpose of assisting you with
              project-related queries. By submitting your details you consent to being contacted
              by Real Revenue about Northwind Estates Sector 22D via call, SMS and WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Information</h2>
            <p>
              Project details, pricing, floor plans, and availability mentioned on this website
              are indicative and subject to change without prior notice. Users are advised to
              verify all details with the authorised sales team before making any decision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
            <p>
              For any queries regarding this website, please visit our{" "}
              <a href="/contact" className="text-[#DCA54A] hover:underline">
                Contact
              </a>{" "}
              page or call{" "}
              <a href="tel:+919717700596" className="text-[#DCA54A] hover:underline">
                +91 97177 00596
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
