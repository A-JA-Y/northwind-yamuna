import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Northwind Sector 22D Floor Plans | 3 BHK & 4 BHK Layouts",
  description:
    "Northwind Estates Sector 22D floor plans: 3 BHK + 2T 1,467 sq ft, 3 BHK + 3T 1,675 sq ft, 4 BHK + 4T + servant 1,950 sq ft, 4 BHK + 5T + servant + study 2,550 sq ft. Only 6 homes per floor. Download plans.",
  alternates: {
    canonical: "https://northwindyamuna.com/floor-plans",
  },
  keywords:
    "northwind estates yamuna expressway sector 22d floor plan, northwind sector 22d floor plan, 3 bhk floor plan yamuna expressway, 4 bhk floor plan sector 22d, northwind layout",
  openGraph: {
    title: "Northwind Sector 22D Floor Plans | 3 BHK & 4 BHK Layouts",
    description:
      "Northwind Estates Sector 22D floor plans: 3 BHK + 2T 1,467 sq ft, 3 BHK + 3T 1,675 sq ft, 4 BHK + 4T + servant 1,950 sq ft, 4 BHK + 5T + servant + study 2,550 sq ft. Only 6 homes per floor. Download plans.",
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
        subtitle="Four layouts across four glass-facade towers — 3 BHK from 1,467 sq. ft. and 4 BHK with servant room from 1,950 sq. ft., all fully furnished with only six homes per floor."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
