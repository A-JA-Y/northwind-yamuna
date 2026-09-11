import Link from "next/link";
import { footerNavLinks } from "@/data/siteNav";

export default function Footer() {
  const half = Math.ceil(footerNavLinks.length / 2);
  const col1 = footerNavLinks.slice(0, half);
  const col2 = footerNavLinks.slice(half);

  return (
    <footer className="w-full bg-[#141004] border-t border-[rgba(242,242,242,0.11)] px-[30px] py-[20px] font-[400]">
      <div className="flex flex-col m-auto max-w-5xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-2">
          <div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Northwind Yamuna
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              Northwind Yamuna is the official enquiry portal run by Real Revenue, an
              authorised channel partner for Northwind Estates&apos; new launch in Sector 22D,
              Yamuna Expressway — fully furnished 3 &amp; 4 BHK wellness homes, 15 minutes
              from Noida International Airport.
            </p>
          </div>

          {/* Quick Links — two sub-columns */}
          <div className="lg:col-span-2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="flex flex-col gap-2">
                {col1.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {col2.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Contact
            </p>
            <div className="flex items-start gap-1.5 text-gray-300 text-xs mb-2">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Site: Northwind Estates, Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh
            </div>
            <div className="flex items-start gap-1.5 text-gray-300 text-xs mb-2">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Developer&apos;s corporate office: Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-xs">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+919717700596" className="hover:text-[#DCA54A] transition-colors">+91 97177 00596</a>
            </div>
            <p className="text-gray-500 text-[11px] mt-2">
              Call / WhatsApp · 10 am – 7 pm, all days
            </p>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            Disclaimer : This website (northwindyamuna.com) is owned and operated by Real
            Revenue, a unit of Earlydays Innovations Pvt. Ltd., an authorised channel partner
            for Northwind Estates. It is not the official website of the developer. The content
            on this site — including project details, prices, areas, payment plans, amenities,
            specifications, images, renders and timelines — is for information purposes only
            and is based on launch communication available at the time of publishing. All
            figures marked with an asterisk (*) are indicative and subject to change without
            prior notice. Areas mentioned are super built-up areas unless stated otherwise.
            Images and renders are artistic impressions and do not form part of any offer or
            contract. Nothing on this site constitutes an offer, invitation to offer, or legal
            commitment of any kind. Buyers are advised to verify all details, approvals and
            the UP RERA registration status with the developer before making any booking
            decision. By submitting your details you consent to being contacted by Real
            Revenue regarding this project.
          </p>
          <hr className="border-t border-gray-700 mt-3" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          <p className="text-[#fff] text-xs tracking-wide">
            Copyright &copy; 2026{" "}
            <span className="font-bold">Real Revenue (Earlydays Innovations Pvt. Ltd.)</span> All
            Rights Reserved · Authorised Channel Partner
          </p>
          <span className="text-white/20 hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="text-[#fff] text-xs hover:text-[#DCA54A] transition-colors">
            Privacy Policy / Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
