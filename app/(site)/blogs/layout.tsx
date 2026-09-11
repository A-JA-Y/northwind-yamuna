import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Northwind Sector 22D & Yamuna Expressway",
  description:
    "Guides on buying in Sector 22D, Yamuna Expressway — airport impact, payment plans, furnished vs bare-shell, and Northwind Estates project updates.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
