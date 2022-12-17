const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-US', 'fr', 'nl-NL'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-US'
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        // domains: [
        //   {
        //     domain: 'example.com',
        //     defaultLocale: 'en-US',
        //   },
        //   {
        //     domain: 'example.nl',
        //     defaultLocale: 'nl-NL',
        //   },
        //   {
        //     domain: 'example.fr',
        //     defaultLocale: 'fr',
        //     // an optional http field can also be used to test
        //     // locale domains locally with http instead of https
        //     http: true,
        //   },
        // ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    // Need this, if it is a static file export
    // trailingSlash: true,
    // experimental:{appDir: true}
    // assetPrefix: './' // Turn off this option if next static export is needed
}

// module.exports = nextConfig

module.exports = withBundleAnalyzer(nextConfig);