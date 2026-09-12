import { FaMapMarkerAlt, FaPlane, FaFilm, FaBuilding, FaLeaf, FaConciergeBell, FaCouch, FaShieldAlt } from "react-icons/fa";

export default function ReasonsToInvest() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Reasons to Invest
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Buyers Are Shortlisting Northwind in Sector 22D
          </h2>

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            An operational international airport 15 minutes away, the International Film City
            next door, and a fully furnished, low-density launch at ₹8,500 per sq. ft. all
            inclusive* on a 20×5 payment plan.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">

          {/* Left: Key Reasons */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Reasons
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaPlane />, text: "15 minutes from operational Noida International Airport" },
                { icon: <FaFilm />, text: "International Film City in adjoining Sector 21" },
                { icon: <FaMapMarkerAlt />, text: "YEIDA-planned sector with authority-laid infrastructure" },
                { icon: <FaBuilding />, text: "Only 6 homes per floor with 6 lifts per tower" },
                { icon: <FaLeaf />, text: "Wellness master plan with 75% green and open space" },
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-1.5">
                  <span className="text-[#DCA54A] text-lg transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Additional Value */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Value
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaCouch />, text: "Fully furnished homes at ₹8,500/sq. ft. all inclusive*" },
                { icon: <FaConciergeBell />, text: "20×5 payment plan* — five equal instalments of 20%" },
                { icon: <FaShieldAlt />, text: "Clean YEIDA-auction title; CREDAI-member developer" },
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-1.5">
                  <span className="text-[#DCA54A] text-lg transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Closing */}

          </div>

        </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center">
              For end users, this means a furnished, move-in-ready wellness home. For investors,
              it means rental demand from the airport, Film City and industrial-park workforce
              over the next five years — with lower density than most of the sector.
            </p>
      </div>
    </section>
  );
}
