module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    generateRobotsTxt: true,
    exclude: ['/admin', '/articles-sitemap.xml'],
    generateIndexSitemap: false,
    additionalSitemaps: [],
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.SITE_URL}/articles-sitemap.xml`
        ]
    }
};
