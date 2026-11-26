/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://northwindyamuna.com",
  // Static export: `next build` has already copied public/ into out/ by the time this
  // runs, so write sitemap.xml (and robots.txt) straight into the deployed folder.
  outDir: "out",
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // app/apple-icon.png builds as a route; it is an icon, not a page.
  exclude: ["/thank-you", "/apple-icon.png"],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
