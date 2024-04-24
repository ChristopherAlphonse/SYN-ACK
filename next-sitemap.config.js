/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 1,
    sitemapSize: 5000,
    alternateRefs: [
        {
            href: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
            hreflang: "en",
        },
    ],
    robotsTxtOptions: {
        additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`],
    },
    alternateRefsOutput: true,
};
