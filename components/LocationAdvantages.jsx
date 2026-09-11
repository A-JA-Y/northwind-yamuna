const checkItems = [
  "Noida International Airport (Jewar, DXN) — about 15 minutes",
  "International Film City, Sector 21 — about 5 minutes",
  "Jewar toll plaza, Yamuna Expressway — about 8 minutes",
  "Buddh International Circuit — about 10 minutes",
  "Eastern Peripheral Expressway interchange — about 15 minutes",
  "Pari Chowk, Greater Noida — about 25 minutes",
  "Noida Sector 18 — about 45 minutes",
  "Agra via Yamuna Expressway — about 90 minutes",
];

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
          Location &amp; Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight">
          Sector 22D — The Airport Corridor, Already Operational
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Strategic Connectivity
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Sector 22D is among the YEIDA residential sectors closest to Noida
              International Airport, with the International Film City coming up in the
              adjoining Sector 21. Roads, water, sewer and power are laid by the authority
              to a master plan — infrastructure that usually arrives years after a launch
              is already visible from the site.
            </p>

            <ul className="space-y-4">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">

                  {/* Check Icon */}
                  <span className="text-[#c8922a] mt-1">
                    ✓
                  </span>

                  <span className="text-gray-800 text-sm">
                    {item}
                  </span>
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
              ></iframe>
            </div>

            {/* Small CTA */}
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
  );
}
