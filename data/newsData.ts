export type NewsMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-yeida-auction",

    /* SEO */
    title:
      "NorthWind Estates Secures 5-Acre YEIDA Land Parcel in Sector 22D with ₹189 Crore Winning Bid",
    slug: "northwind-estates-yeida-auction-sector-22d-189-crore",
    excerpt:
      "NorthWind Estates emerged as the highest bidder in YEIDA's group housing auction, securing 5 acres in Sector 22D — the plot behind the Northwind Wellness launch.",
    metaTitle:
      "NorthWind Estates Wins Sector 22D Plot | ₹189 Cr YEIDA Auction",
    metaDescription:
      "NorthWind Estates secured a 5-acre YEIDA parcel in Sector 22D, Yamuna Expressway with a ₹189 crore winning bid in May 2026 — the land behind the new wellness launch.",
    keywords: [
      "northwind estates yeida auction",
      "sector 22d yamuna expressway",
      "yeida group housing auction 2026",
      "northwind estates sector 22d",
      "yamuna expressway land auction",
    ],
    canonical:
      "https://northwindyamuna.com/news/northwind-estates-yeida-auction-sector-22d-189-crore",

    /* Display */
    image: "/news-1.webp",
    altText:
      "NorthWind Estates wins 5-acre YEIDA group housing parcel in Sector 22D, Yamuna Expressway",
    date: "2026-05-30",
    updatedAt: "2026-09-10",
    author: "Real Revenue News Desk",
    category: "Project News",
    readTime: "5 min read",
    featured: true,
    tags: [
      "yeida",
      "sector 22d",
      "northwind estates",
      "yamuna expressway",
      "land auction",
      "jewar airport",
    ],

    /* Extra */
    location: "Yamuna Expressway, Greater Noida",
    newsType: "Project",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "NorthWind Estates Secures 5-Acre YEIDA Land Parcel in Sector 22D with ₹189 Crore Winning Bid",
      description:
        "NorthWind Estates emerged as the highest bidder in YEIDA's group housing auction, securing 5 acres in Sector 22D on the Yamuna Expressway for ₹189 crore.",
      image: ["https://northwindyamuna.com/news-1.webp"],
      datePublished: "2026-05-30",
      dateModified: "2026-09-10",
      author: {
        "@type": "Organization",
        name: "Real Revenue",
      },
      publisher: {
        "@type": "Organization",
        name: "Real Revenue",
        logo: {
          "@type": "ImageObject",
          url: "https://northwindyamuna.com/hero.webp",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://northwindyamuna.com/news/northwind-estates-yeida-auction-sector-22d-189-crore",
      },
      articleSection: "Real Estate",
      keywords:
        "NorthWind Estates, YEIDA auction, Sector 22D, Yamuna Expressway, Jewar airport, group housing",
      about: [
        {
          "@type": "Place",
          name: "Sector 22D, Yamuna Expressway",
        },
        {
          "@type": "Organization",
          name: "NorthWind Estates",
        },
      ],
    },
  },
  {
    id: "news-airport-operational",

    /* SEO */
    title:
      "Noida International Airport Begins Commercial Flights — What It Means for Sector 22D",
    slug: "noida-international-airport-operational-sector-22d",
    excerpt:
      "Commercial flights began at Jewar on 15 June 2026. Phase 1 handles 12 million passengers a year, and the sectors closest to the airport — including 22D — feel it first.",
    metaTitle:
      "Noida Airport Now Operational | Impact on Sector 22D Homes",
    metaDescription:
      "Noida International Airport (DXN) began commercial flights on 15 June 2026. What Phase 1's 12 MPPA capacity and the 70 MPPA master plan mean for Sector 22D buyers.",
    keywords: [
      "noida international airport operational",
      "jewar airport flights",
      "sector 22d yamuna expressway",
      "yamuna expressway property after jewar airport",
      "DXN airport",
    ],
    canonical:
      "https://northwindyamuna.com/news/noida-international-airport-operational-sector-22d",

    /* Display */
    image: "/news-2.webp",
    altText:
      "Noida International Airport terminal at Jewar, 15 minutes from Sector 22D on the Yamuna Expressway",
    date: "2026-06-16",
    updatedAt: "2026-09-10",
    author: "Real Revenue News Desk",
    category: "Infrastructure",
    readTime: "6 min read",
    featured: false,
    tags: [
      "jewar airport",
      "noida international airport",
      "yamuna expressway",
      "sector 22d",
      "infrastructure",
    ],

    /* Extra */
    location: "Jewar, Gautam Buddh Nagar",
    newsType: "Infrastructure",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Noida International Airport Begins Commercial Flights — What It Means for Sector 22D",
      description:
        "Commercial flights began at Noida International Airport (Jewar) on 15 June 2026, with Phase 1 capacity of 12 million passengers a year scaling to 70 million by Phase 4.",
      image: ["https://northwindyamuna.com/news-2.webp"],
      datePublished: "2026-06-16",
      dateModified: "2026-09-10",
      author: {
        "@type": "Organization",
        name: "Real Revenue",
      },
      publisher: {
        "@type": "Organization",
        name: "Real Revenue",
        logo: {
          "@type": "ImageObject",
          url: "https://northwindyamuna.com/hero.webp",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://northwindyamuna.com/news/noida-international-airport-operational-sector-22d",
      },
      articleSection: "Infrastructure",
      keywords:
        "Noida International Airport, Jewar, DXN, Yamuna Expressway, Sector 22D, real estate",
      about: [
        {
          "@type": "Place",
          name: "Noida International Airport, Jewar",
        },
        {
          "@type": "Place",
          name: "Sector 22D, Yamuna Expressway",
        },
      ],
    },
  },
];

export default NewsData;
