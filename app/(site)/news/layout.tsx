import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Northwind Sector 22D",
  description:
    "Stay updated with the latest news, developments, and infrastructure updates around Sector 22D, the Yamuna Expressway and Noida International Airport.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
