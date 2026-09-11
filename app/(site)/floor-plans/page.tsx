import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Floor Plans | 3 BHK & 4 BHK Layouts",
  description:
    "Northwind Estates Sector 22D floor plans: 3 BHK + 3T 1,675 sq ft and 4 BHK + 4T + servant 2,200 sq ft. Three-side open, 3 homes per floor. Download plans.",
  alternates: {
    canonical: "https://northwindyamuna.com/floor-plans",
  },
  keywords:
    "northwind estates yamuna expressway sector 22d floor plan, northwind sector 22d floor plan, 3 bhk floor plan yamuna expressway, 4 bhk floor plan sector 22d, northwind layout",
  openGraph: {
    title: "Northwind Sector 22D Floor Plans | 3 BHK & 4 BHK Layouts",
    description:
      "Northwind Estates Sector 22D floor plans: 3 BHK + 3T 1,675 sq ft and 4 BHK + 4T + servant 2,200 sq ft. Three-side open, 3 homes per floor. Download plans.",
    url: "https://northwindyamuna.com/floor-plans",
    type: "website",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Northwind Sector 22D Floor Plans"
        subtitle="Two layouts across six towers — a 1,675 sq. ft. 3 BHK and a 2,200 sq. ft. 4 BHK with servant room, both fully furnished and three-side open."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
