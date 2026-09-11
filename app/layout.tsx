import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




export const metadata: Metadata = {
  metadataBase: new URL("https://northwindyamuna.com"),
  title: "Northwind Estates Sector 22D Yamuna Expressway | 3 & 4 BHK",
  description:
    "Northwind Estates Sector 22D Yamuna Expressway: fully furnished 3 & 4 BHK wellness homes on 5 acres, 15 min from Noida Airport. From ₹1.23 Cr*. Call now.",

  alternates: {
    canonical: "https://northwindyamuna.com/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Northwind Estates Sector 22D, Yamuna Expressway — New Launch",
    description:
      "Fully furnished 3 & 4 BHK wellness homes. 5 acres, 6 towers, only 3 homes per floor. 15 minutes from Noida International Airport.",
    url: "https://northwindyamuna.com/",
    siteName: "Northwind Yamuna",
    images: [
      {
        url: "https://northwindyamuna.com/hero.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Northwind Estates Sector 22D, Yamuna Expressway",
    description:
      "Fully furnished 3 & 4 BHK wellness residences on 5 acres — only 3 homes per floor, 15 minutes from Noida International Airport.",
    images: ["https://northwindyamuna.com/hero.webp"],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
    >
      <Analytics />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
