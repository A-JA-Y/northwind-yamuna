const QRSection = () => {
  return (
    <section className="w-full bg-[#141004] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto overflow-hidden">

        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">

          <p className="mb-0.5">
            <strong className="tracking-widest">RERA STATUS:-</strong>{" "}
            <span itemProp="identifier">UP RERA REGISTRATION UNDER PROCESS</span>
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">
            <a
              href="https://up-rera.in/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white no-underline"
            >
              https://up-rera.in/projects
            </a>
          </p>

          <p className="mb-1 text-[#cccccc] text-[12px] max-w-[640px] ml-auto">
            UP RERA registration for Northwind Estates Sector 22D is under process. The
            registration number will be published here and on all marketing material as soon
            as it is granted. Verify on up-rera.in. Bookings before registration are accepted
            as expressions of interest with refundable terms.
          </p>

          <p className="mb-0.5 mt-2">
            <strong className="tracking-widest">DEVELOPER</strong>: NORTHWIND ESTATES PVT. LTD.
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">CORPORATE OFFICE</strong>: PLOT 07, SECTOR PI-1,
          </p>
          <p>GREATER NOIDA, UTTAR PRADESH 201306</p>

        </address>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default QRSection;
