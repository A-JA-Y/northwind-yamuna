

const interiorFeatures = ["Large-format vitrified tile flooring", "False ceiling with LED lighting", "Premium sanitaryware & CP fittings", "Video door phone & digital main-door lock"];
const furnishedItems = ["Modular kitchen", "Split ACs", "Wardrobes", "Light fittings"];
const layoutFeatures = ["Three-side-open corner homes", "Only 3 apartments per floor", "4 high-speed lifts per tower", "Wide balconies off living & master"];

const nearby = {
  "Airport Corridor": ["Noida Intl. Airport — 15 min", "Film City, Sector 21 — 5 min", "Buddh Intl. Circuit — 10 min"],
  Education: ["Gautam Buddha University", "Galgotias University", "Knowledge Park Colleges"],
  "Work & Industry": ["Medical Devices Park", "Semiconductor Clusters", "Toy & Apparel Parks"],
};

export default function VillaFeatures() {
  return (
    <section
      className="w-full py-12 px-4 sm:px-8"
      style={{ backgroundColor: "#faf6e8" }}
      id="investment-benefits"
    >
      <div className="max-w-5xl mx-auto">
        <h6 className="text-center uppercase mb-3" style={{ color: "#c8922a", letterSpacing: "2.5px", fontSize: "11px", fontWeight: 600 }}>
          Fully furnished, three-side open
        </h6>
        <h2
          className="text-center font-bold text-gray-900 mb-10"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", lineHeight: "1.25", color: "#2c1f0e" }}
        >
          Residence Features &amp; Investment Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Card 1 — Interiors */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Interiors &amp; Design
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Delivered ready to live in
            </h3>
            <ul className="space-y-2 mb-4">
              {interiorFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "0.5px solid #e8dfc8", paddingTop: "10px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                Fully furnished includes
              </p>
              <div className="flex flex-wrap gap-1.5">
                {furnishedItems.map((item) => (
                  <span key={item} style={{ fontSize: "12px", background: "#faf6e8", color: "#7a5c1e", padding: "3px 10px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Space & Layout */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Space &amp; Layout
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Two configurations
            </h3>
            <div className="flex gap-2 mb-4">
              {[
                { label: "3 BHK", sub: "1,675 sq. ft." },
                { label: "4 BHK", sub: "2,200 sq. ft." },
              ].map((v) => (
                <div key={v.label} className="flex-1 text-center py-3" style={{ background: "#faf6e8", border: "0.5px solid #d4c9ae" }}>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#DCA54A" }}>{v.label}</div>
                  <div style={{ fontSize: "11px", color: "#8a7a5a" }}>{v.sub}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {layoutFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — Social Infrastructure */}
          <div className="bg-white p-7" style={{ borderTop: "3px solid #DCA54A" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              The Corridor
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Growth already visible
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(nearby).map(([category, items]) => (
                <div key={category}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px" }}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} style={{ fontSize: "12px", color: "#5c4a2a", background: "#faf6e8", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
