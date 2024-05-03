// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        // formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost'
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000'
            },
            {
                protocol: 'http',
                hostname: 'digilab.local'
            },
            {
                protocol: 'http',
                hostname: 'my-iclinic.local'
            },
            {
                protocol: 'https',
                hostname: 'myiclinicn.sg-host.com'
            },
            {
                protocol: 'https',
                hostname: 'my-iclinic.co.uk'
            },
            {
                protocol: 'https',
                hostname: 'staging2.myiclinicn.sg-host.com'
            },
            {
                protocol: 'https',
                hostname: 'localhost'
            }
        ]
    },
    i18n: {
        // These are all the locales you want to support in
        // your application
        // locales: ['en-US', 'fr', 'nl-NL'],
        locales: ['en-GB'],
        // This is the default locale you want to be used when visiting
        defaultLocale: 'en-GB'
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
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)?', // Use a regular expression to match all routes
                headers: [
                    // {
                    //     key: 'Content-Security-Policy',
                    //     value: 'script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https://myiclinic-help.freshchat.com https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://connect.facebook.net; style-src \'self\' \'unsafe-inline\' https://myiclinic-help.freshchat.com; img-src \'self\' https://myiclinicn.sg-host.com https://www.google.com data:; frame-ancestors *;'
                    // },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    // {
                    //     key: 'X-Frame-Options',
                    //     value: 'SAMEORIGIN'
                    // },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    }
                ]
            }
        ];
    },
    // async rewrites() {
    //     return [{
    //         source: '/robots.txt',
    //         destination: '/api/robots'
    //     }];
    // },
    async redirects() {
        return [
            {
                source: '/articles/page/1',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/home',
                destination: '/',
                permanent: true
            },
            {
                source: '/faqs-blog',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/faqs',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/100-optical-how-was-it-what-is-our-impression-about-it-bp',
                destination: '/articles/100-optical-how-was-it-what-is-our-impression-about-it-bp',
                permanent: true
            },
            {
                source: '/7-keys-to-maintaining-good-eye-health',
                destination: '/articles/7-keys-to-maintaining-good-eye-health',
                permanent: true
            },
            {
                source: '/a-guide-to-understanding-myopia-bp',
                destination: '/articles/a-guide-to-understanding-myopia-bp',
                permanent: true
            },
            {
                source: '/myopia-short-sightedness',
                destination: '/articles/myopia-short-sightedness',
                permanent: true
            },
            {
                source: '/a-special-gift',
                destination: '/articles/a-special-gift',
                permanent: true
            },
            {
                source: '/a-week-before-christmas-we-welcomed-jack-to-our-clinic-what-led-him-here-and-how-did-it-feel-to-work-with-us-the-answers-come-in-the-article-below-bp',
                destination:
                    '/articles/a-week-before-christmas-we-welcomed-jack-to-our-clinic-what-led-him-here-and-how-did-it-feel-to-work-with-us-the-answers-come-in-the-article-below-bp',
                permanent: true
            },
            {
                source: '/allergies-how-to-treat-them-bp',
                destination: '/articles/allergies-how-to-treat-them-bp',
                permanent: true
            },
            {
                source: '/amd-awareness-month-bp',
                destination: '/articles/amd-awareness-month-bp',
                permanent: true
            },
            {
                source: '/another-successful-cet-event-at-my-iclinic-bp',
                destination: '/articles/another-successful-cet-event-at-my-iclinic-bp',
                permanent: true
            },
            {
                source: '/battling-the-cold-weather-protect-your-eyes-bp',
                destination: '/articles/battling-the-cold-weather-protect-your-eyes-bp',
                permanent: true
            },
            {
                source: '/beauty-doesnt-have-to-mean-pain-bp',
                destination: '/articles/beauty-doesnt-have-to-mean-pain-bp',
                permanent: true
            },
            {
                source: '/camera-obscura-bp',
                destination: '/articles/camera-obscura-bp',
                permanent: true
            },
            {
                source: '/can-my-vision-get-worse-again-after-laser-eye-surgery-what-is-regression-bp',
                destination: '/articles/can-my-vision-get-worse-again-after-laser-eye-surgery-what-is-regression-bp',
                permanent: true
            },
            {
                source: '/can-wearing-soft-contact-lenses-be-a-risk-to-your-vision-bp',
                destination: '/articles/can-wearing-soft-contact-lenses-be-a-risk-to-your-vision-bp',
                permanent: true
            },
            {
                source: '/computer-vision-syndrome-the-dangers-of-modern-living-bp',
                destination: '/articles/computer-vision-syndrome-the-dangers-of-modern-living-bp',
                permanent: true
            },
            {
                source: '/forget-what-you-think-you-know-about-laser-eye-surgery-bp',
                destination: '/articles/forget-what-you-think-you-know-about-laser-eye-surgery-bp',
                permanent: true
            },
            {
                source: '/gaywood-eye-clinic-celebrates-special-milestone-bp',
                destination: '/articles/gaywood-eye-clinic-celebrates-special-milestone-bp',
                permanent: true
            },
            {
                source: '/glasses-are-not-a-solution-bp',
                destination: '/articles/glasses-are-not-a-solution-bp',
                permanent: true
            },
            {
                source: '/glaucoma-awareness-month-bp',
                destination: '/articles/glaucoma-awareness-month-bp',
                permanent: true
            },
            {
                source: '/hereditary-glaucoma-and-diabetes-am-i-at-risk-bp',
                destination: '/articles/hereditary-glaucoma-and-diabetes-am-i-at-risk-bp',
                permanent: true
            },
            {
                source: '/how-did-amanda-join-my-iclinic-bp',
                destination: '/articles/how-did-amanda-join-my-iclinic-bp',
                permanent: true
            },
            {
                source: '/how-do-virtual-reality-goggles-work-bp',
                destination: '/articles/how-do-virtual-reality-goggles-work-bp',
                permanent: true
            },
            {
                source: '/how-to-choose-where-to-go-to-have-your-laser-corrective-eye-surgery-bp',
                destination: '/articles/how-to-choose-where-to-go-to-have-your-laser-corrective-eye-surgery-bp',
                permanent: true
            },
            {
                source: '/how-to-treat-and-prevent-myopia-bp',
                destination: '/articles/how-to-treat-and-prevent-myopia-bp',
                permanent: true
            },
            {
                source: '/i-tried-to-do-laser-eye-surgery-by-myself-it-was-unexpected-bp',
                destination: '/articles/i-tried-to-do-laser-eye-surgery-by-myself-it-was-unexpected-bp',
                permanent: true
            },
            {
                source: '/if-you-really-had-the-choice-would-you-choose-to-be-short-sighted-bp',
                destination: '/articles/if-you-really-had-the-choice-would-you-choose-to-be-short-sighted-bp',
                permanent: true
            },
            {
                source: '/in-the-zone-bp',
                destination: '/articles/in-the-zone-bp',
                permanent: true
            },
            {
                source: '/introducing-low-dose-atropine-for-kids-bp',
                destination: '/articles/introducing-low-dose-atropine-for-kids-bp',
                permanent: true
            },
            {
                source: '/is-laser-eye-surgery-safe',
                destination: '/articles/is-laser-eye-surgery-safe',
                permanent: true
            },
            {
                source: '/keratoconus-what-you-should-know-bp',
                destination: '/articles/keratoconus-what-you-should-know-bp',
                permanent: true
            },
            {
                source: '/laser-assessment-procedure-what-is-going-to-happen-when-i-am-going-to-have-my-eyes-tasted-for-laser-bp',
                destination:
                    '/articles/laser-assessment-procedure-what-is-going-to-happen-when-i-am-going-to-have-my-eyes-tasted-for-laser-bp',
                permanent: true
            },
            {
                source: '/laser-eye-surgery-safety-the-inside-story-on-the-worlds-most-popular-elective-surgery-bp',
                destination:
                    '/articles/laser-eye-surgery-safety-the-inside-story-on-the-worlds-most-popular-elective-surgery-bp',
                permanent: true
            },
            {
                source: '/laser-eye-surgery-the-patients-view-bp',
                destination: '/articles/laser-eye-surgery-the-patients-view-bp',
                permanent: true
            },
            {
                source: '/multifocal-lenses-vs-monovision-vs-presbyond-which-option-is-right-for-me-bp',
                destination: '/articles/multifocal-lenses-vs-monovision-vs-presbyond-which-option-is-right-for-me-bp',
                permanent: true
            },
            {
                source: '/my-iclinic-at-100-optical-2016-in-london-bp',
                destination: '/articles/my-iclinic-at-100-optical-2016-in-london-bp',
                permanent: true
            },
            {
                source: '/my-iclinic-trip-to-switzerland-bp',
                destination: '/articles/my-iclinic-trip-to-switzerland-bp',
                permanent: true
            },
            {
                source: '/nutrition-and-hydration-week-bp',
                destination: '/articles/nutrition-and-hydration-week-bp',
                permanent: true
            },
            {
                source: '/protect-your-eyes-during-firework-shows-heres-what-you-need-to-know-bp',
                destination: '/articles/protect-your-eyes-during-firework-shows-heres-what-you-need-to-know-bp',
                permanent: true
            },
            {
                source: '/seeing-in-the-dark-bp',
                destination: '/articles/seeing-in-the-dark-bp',
                permanent: true
            },
            {
                source: '/seeing-in-the-dark-sicilian-courgette-recipe-bp',
                destination: '/articles/seeing-in-the-dark-sicilian-courgette-recipe-bp',
                permanent: true
            },
            {
                source: '/should-price-be-a-decision-maker-bp',
                destination: '/articles/should-price-be-a-decision-maker-bp',
                permanent: true
            },
            {
                source: '/stressawarenessmonth-bp',
                destination: '/articles/stressawarenessmonth-bp',
                permanent: true
            },
            {
                source: '/sunny-days-and-ultraviolet-rays-bp',
                destination: '/articles/sunny-days-and-ultraviolet-rays-bp',
                permanent: true
            },
            {
                source: '/take-a-minute-to-relax-stress-can-be-bad-for-your-eyes-bp',
                destination: '/articles/take-a-minute-to-relax-stress-can-be-bad-for-your-eyes-bp',
                permanent: true
            },
            {
                source: '/the-affect-of-decorative-contacts-can-be-frightful-for-your-eye-health-bp',
                destination: '/articles/the-affect-of-decorative-contacts-can-be-frightful-for-your-eye-health-bp',
                permanent: true
            },
            {
                source: '/the-battle-against-diabetes-bp',
                destination: '/articles/the-battle-against-diabetes-bp',
                permanent: true
            },
            {
                source: '/the-day-of-the-smile-procedure-what-will-happen-bp',
                destination: '/articles/the-day-of-the-smile-procedure-what-will-happen-bp',
                permanent: true
            },
            {
                source: '/the-dos-and-donts-after-cataract-surgery-bp',
                destination: '/articles/the-dos-and-donts-after-cataract-surgery-bp',
                permanent: true
            },
            {
                source: '/the-dos-and-donts-after-glaucoma-surgery-bp',
                destination: '/articles/the-dos-and-donts-after-glaucoma-surgery-bp',
                permanent: true
            },
            {
                source: '/the-guardian-article-wave-goodbye-to-reading-glasses',
                destination: '/articles/the-guardian-article-wave-goodbye-to-reading-glasses',
                permanent: true
            },
            {
                source: '/time-spent-on-putting-in-contacts-whats-the-alternative-bp',
                destination: '/articles/time-spent-on-putting-in-contacts-whats-the-alternative-bp',
                permanent: true
            },
            {
                source: '/top-10-myths-about-laser-eye-surgery-bp',
                destination: '/articles/top-10-myths-about-laser-eye-surgery-bp',
                permanent: true
            },
            {
                source: '/what-are-myopia-hypermetropia-and-astigmatism-bp',
                destination: '/articles/what-are-myopia-hypermetropia-and-astigmatism-bp',
                permanent: true
            },
            {
                source: '/what-causes-myopia-in-children-and-how-to-help-myopic-kids-bp',
                destination: '/articles/what-causes-myopia-in-children-and-how-to-help-myopic-kids-bp',
                permanent: true
            },
            {
                source: '/what-is-laser-surgery-can-it-help-me-get-rid-of-my-glasses-bp',
                destination: '/articles/what-is-laser-surgery-can-it-help-me-get-rid-of-my-glasses-bp',
                permanent: true
            },
            {
                source: '/what-is-the-spectacle-free-zone-bp',
                destination: '/articles/what-is-the-spectacle-free-zone-bp',
                permanent: true
            },
            {
                source: '/what-to-expect-on-the-day-of-your-laser-eye-surgery-consultation-bp',
                destination: '/articles/what-to-expect-on-the-day-of-your-laser-eye-surgery-consultation-bp',
                permanent: true
            },
            {
                source: '/why-contact-wearers-should-ditch-contacts-and-opt-for-laser-bp',
                destination: '/articles/why-contact-wearers-should-ditch-contacts-and-opt-for-laser-bp',
                permanent: true
            },
            {
                source: '/why-do-so-many-people-over-40-need-those-annoying-little-reading-glasses-bp',
                destination: '/articles/why-do-so-many-people-over-40-need-those-annoying-little-reading-glasses-bp',
                permanent: true
            },
            {
                source: '/why-should-contact-wearers-ditch-contact-lenses-and-opt-for-laser-eye-surgery-bp',
                destination: '/articles/why-should-contact-wearers-ditch-contact-lenses-and-opt-for-laser-eye-surgery-bp',
                permanent: true
            },
            {
                source: '/why-should-you-consider-presbyond-after-cataract-surgery-bp',
                destination: '/articles/why-should-you-consider-presbyond-after-cataract-surgery-bp',
                permanent: true
            },
            {
                source: '/vision-development-in-babies-bp',
                destination: '/articles/vision-development-in-babies-bp',
                permanent: true
            },
            {
                source: '/eye-conditions/astigmatism',
                destination: '/astigmatism-treatment',
                permanent: true
            },
            {
                source: '/eye-treatments/blepharitis',
                destination: '/blepharitis-treatment',
                permanent: true
            },
            {
                source: '/cataract-surgery',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/eye-conditions/cataracts',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/eye-conditions/conjunctivitis',
                destination: '/conjuctivitis-treatment-london',
                permanent: true
            },
            {
                source: '/eye-conditions/double-vision',
                destination: '/double-vision-treatment-london',
                permanent: true
            },
            {
                source: '/eye-conditions/dry-eyes',
                destination: '/dry-eyes-treatment-london',
                permanent: true
            },
            {
                source: '/eye-treatments/eyelid-cysts-chalazion-and-styes',
                destination: '/eyelid-surgery-london',
                permanent: true
            },
            {
                source: '/eye-conditions/flashes-and-floaters',
                destination: '/flashes-floaters',
                permanent: true
            },
            {
                source: '/eye-conditions/glaucoma',
                destination: '/glaucoma-treatment',
                permanent: true
            },
            {
                source: '/eye-treatments/glaucoma-treatment',
                destination: '/glaucoma-treatment',
                permanent: true
            },
            {
                source: '/eye-treatments/icl-eye-surgery',
                destination: '/icl',
                permanent: true
            },
            {
                source: '/implantable-contact-lens-consultation',
                destination: '/icl',
                permanent: true
            },
            {
                source: '/eye-treatments/keratoconus-cross-linking',
                destination: '/keratoconus',
                permanent: true
            },
            {
                source: '/eye-treatments/keratoconus',
                destination: '/keratoconus',
                permanent: true
            },
            {
                source: '/laser-eye-surgery/lasek-prk',
                destination: '/lasek-prk',
                permanent: true
            },
            {
                source: '/lp-lasek-london',
                destination: '/lasek-prk',
                permanent: true
            },
            {
                source: '/lp-lasek-prk-london',
                destination: '/lasek-prk',
                permanent: true
            },
            {
                source: '/lp-prk-london',
                destination: '/lasek-prk',
                permanent: true
            },
            {
                source: '/laser-eye-surgery/lasik',
                destination: '/lasik-london',
                permanent: true
            },
            {
                source: '/lp-lasik-london-2',
                destination: '/lasik-london',
                permanent: true
            },
            {
                source: '/eye-conditions/lazy-eyes-amblyopia',
                destination: '/lazy-eyes-treatement',
                permanent: true
            },
            {
                source: '/eye-conditions/macular-degeneration-amd-treatment',
                destination: '/macular-degeneration',
                permanent: true
            },
            {
                source: '/eye-treatments/macular-degeneration',
                destination: '/macular-degeneration',
                permanent: true
            },
            {
                source: '/eye-treatments/myopia-control-clinic',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/why-my-iclinic/meet-the-team',
                destination: '/our-specialists',
                permanent: true
            },
            {
                source: '/why-my-iclinic',
                destination: '/our-specialists/our-eye-diagnostics-technology',
                permanent: true
            },
            // {
            //     source: '/eye-treatments/paediatric-eye-care',
            //     destination: '/paediatric-eye-care',
            //     permanent: true
            // },
            {
                source: '/eye-conditions/presbyopia-reading-glasses',
                destination: '/presbyond-london',
                permanent: true
            },
            {
                source: '/laser-eye-surgery/presbyond',
                destination: '/presbyond-london',
                permanent: true
            },
            {
                source: '/price-financing',
                destination: '/pricing-and-financing/our-prices',
                permanent: true
            },
            {
                source: '/laser-eye-surgery/relex-smile',
                destination: '/relex-smile-london',
                permanent: true
            },
            { source: '/our-prices', destination: '/pricing-and-financing/our-prices', permanent: true },
            { source: '/blog-post-template', destination: '/', permanent: true },
            { source: '/eye-treatments', destination: '/', permanent: true },
            { source: '/__trashed-2', destination: '/', permanent: true },
            { source: '/the-top-wallets-of-2019', destination: '/', permanent: true },
            { source: '/amd-awareness-month-bp/feed', destination: '/', permanent: true },
            { source: '/portfolio-items', destination: '/', permanent: true },
            { source: '/amd-awareness-month', destination: '/', permanent: true },
            { source: '/amd-awareness-month-bp', destination: '/', permanent: true },
            { source: '/embed', destination: '/', permanent: true },
            { source: '/wp-admin/admin-ajax.php', destination: '/', permanent: true },
            { source: '/glasses-are-not-a-solution/feed', destination: '/', permanent: true },
            { source: '/author/sashamossman', destination: '/', permanent: true },
            { source: '/iselfie', destination: '/', permanent: true },
            {
                source: '/glasses-are-not-a-solution',
                destination: '/',
                permanent: true
            },
            {
                source: '/our-clinic',
                destination: '/about-us',
                permanent: true
            },
            {
                source: '/why-my-iclinic/testimonials',
                destination: '/about-us',
                permanent: true
            },
            {
                source: '/our-clinic',
                destination: '/about-us',
                permanent: true
            },
            {
                source: '/faqs-blog/page/2',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/faqs-blog/page/3',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/faqs-blog/page/4',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/news/post/669',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/author/ladfah-suwichacherdchu',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/author/caterina-abbrescia',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/author/elisa-friedl',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/author/my-iclinic',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/7-keys-to-maintaining-good-eye-he',
                destination: '/articles/7-keys-to-maintaining-good-eye-health',
                permanent: true
            },
            {
                source: '/battling-the-cold-weather-protect-your-eyes',
                destination: '/articles/battling-the-cold-weather-protect-your-eyes-bp',
                permanent: true
            },
            {
                source: '/beauty-doesnt-have-to-mean-pain',
                destination: '/articles/beauty-doesnt-have-to-mean-pain-bp',
                permanent: true
            },
            {
                source: '/camera-obscura-bp/feed',
                destination: '/articles/camera-obscura-bp',
                permanent: true
            },
            {
                source: '/camera-obscura',
                destination: '/articles/camera-obscura-bp',
                permanent: true
            },
            {
                source: '/can-my-vision-get-worse-again-after-laser-eye-surgery-what-is-regression',
                destination: '/articles/can-my-vision-get-worse-again-after-laser-eye-surgery-what-is-regression-bp',
                permanent: true
            },
            {
                source: '/can-wearing-soft-contact-lenses-be-a-risk-to-your-vision',
                destination: '/articles/can-wearing-soft-contact-lenses-be-a-risk-to-your-vision-bp',
                permanent: true
            },
            {
                source: '/forget-what-you-think-you-know-about-laser-eye-surgery',
                destination: '/articles/forget-what-you-think-you-know-about-laser-eye-surgery-bp',
                permanent: true
            },
            {
                source: '/forget-what-you-think-you-know-about-laser-eye-surgery-bp/feed',
                destination: '/articles/forget-what-you-think-you-know-about-laser-eye-surgery-bp',
                permanent: true
            },
            {
                source: '/gaywood-eye-clinic-celebrates-special-milestone',
                destination: '/articles/gaywood-eye-clinic-celebrates-special-milestone-bp',
                permanent: true
            },
            {
                source: '/hereditary-glaucoma-and-diabetes-am-i-at-risk',
                destination: '/articles/hereditary-glaucoma-and-diabetes-am-i-at-risk-bp',
                permanent: true
            },
            {
                source: '/how-to-choose-where-to-go-to-have-your-laser-corrective-eye-surgery-bp/feed',
                destination: '/articles/how-to-choose-where-to-go-to-have-your-laser-corrective-eye-surgery-bp',
                permanent: true
            },
            {
                source: '/how-to-treat-and-prevent-myopia-bp/feed',
                destination: '/articles/how-to-treat-and-prevent-myopia-bp',
                permanent: true
            },
            {
                source: '/i-tried-to-do-laser-eye-surgery-by-myself-it-was-unexpected',
                destination: '/articles/i-tried-to-do-laser-eye-surgery-by-myself-it-was-unexpected-bp',
                permanent: true
            },
            {
                source: '/if-you-really-had-the-choice-would-you-choose-to-be-short-sighted',
                destination: '/articles/if-you-really-had-the-choice-would-you-choose-to-be-short-sighted-bp',
                permanent: true
            },
            {
                source: '/introducing-low-dose-atropine-for-kids',
                destination: '/articles/introducing-low-dose-atropine-for-kids-bp',
                permanent: true
            },
            {
                source: '/laser-assessment-procedure-what-is-going-to-happen-when-i-am-going-to-have-my-eyes-tasted-for-laser',
                destination: '/articles/laser-assessment-procedure-what-is-going-to-happen-when-i-am-going-to-have-my-eyes-tasted-for-laser-bp',
                permanent: true
            },
            {
                source: '/laser-eye-surgery-the-patients-view',
                destination: '/articles/laser-eye-surgery-the-patients-view-bp',
                permanent: true
            },
            {
                source: '/my-iclinic-trip-to-switzerland-bp/feed',
                destination: '/articles/my-iclinic-trip-to-switzerland-bp',
                permanent: true
            },
            {
                source: '/seeing-in-the-dark-sicilian-courgette-recipe',
                destination: '/articles/seeing-in-the-dark-sicilian-courgette-recipe-bp',
                permanent: true
            },
            {
                source: '/take-a-minute-to-relax-stress-can-be-bad-for-your-eyes-bp/feed',
                destination: '/articles/take-a-minute-to-relax-stress-can-be-bad-for-your-eyes-bp',
                permanent: true
            },
            {
                source: '/the-dos-and-donts-after-cataract-surgery',
                destination: '/articles/the-dos-and-donts-after-cataract-surgery-bp',
                permanent: true
            },
            {
                source: '/time-spent-on-putting-in-contacts-whats-the-alternative',
                destination: '/articles/time-spent-on-putting-in-contacts-whats-the-alternative-bp',
                permanent: true
            },
            {
                source: '/vision-development-in-babies',
                destination: '/articles/vision-development-in-babies-bp',
                permanent: true
            },
            {
                source: '/vision-development-in-babies-bp/feed',
                destination: '/articles/vision-development-in-babies-bp',
                permanent: true
            },
            {
                source: '/vision-development-in-babies/feed',
                destination: '/articles/vision-development-in-babies-bp',
                permanent: true
            },
            {
                source: '/eye-conditions/hyperopia-long-sightedness',
                destination: '/articles/what-are-myopia-hypermetropia-and-astigmatism-bp',
                permanent: true
            },
            {
                source: '/hyperopia-long-sightedness',
                destination: '/articles/what-are-myopia-hypermetropia-and-astigmatism-bp',
                permanent: true
            },
            {
                source: '/long-sightedness-hyperopia',
                destination: '/articles/what-are-myopia-hypermetropia-and-astigmatism-bp',
                permanent: true
            },
            {
                source: '/what-causes-myopia-in-children-and-how-to-help-myopic-kids',
                destination: '/articles/what-causes-myopia-in-children-and-how-to-help-myopic-kids-bp',
                permanent: true
            },
            {
                source: '/why-contact-wearers-should-ditch-contacts-and-opt-for-laser',
                destination: '/articles/why-contact-wearers-should-ditch-contacts-and-opt-for-laser-bp',
                permanent: true
            },
            {
                source: '/why-do-so-many-people-over-40-need-those-annoying-little-reading-glasses',
                destination: '/articles/why-do-so-many-people-over-40-need-those-annoying-little-reading-glasses-bp',
                permanent: true
            },
            {
                source: '/why-should-you-consider-presbyond-after-cataract-surgery',
                destination: '/articles/why-should-you-consider-presbyond-after-cataract-surgery-bp',
                permanent: true
            },
            {
                source: '/blepharitis',
                destination: '/blepharitis-treatment',
                permanent: true
            },
            {
                source: '/lp-cataract-surgery',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/refractive-cataract-surgery',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/cataract-surgery-60',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/cataracts',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/conjunctivitis',
                destination: '/conjuctivitis-treatment-london',
                permanent: true
            },
            {
                source: '/typ-call-me-back',
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/book-a-consultation',
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/learn-more-about-eye-treatments',
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/cet-meetings',
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/double-vision',
                destination: '/double-vision-treatment-london',
                permanent: true
            },
            {
                source: '/eye-conditions/dry-eyes',
                has: [{ type: 'query', key: 'fb-edit', value: '1' }],
                destination: '/dry-eyes-treatment-london',
                permanent: true
            },
            {
                source: '/dry-eyes',
                has: [{ type: 'query', key: 'fb-edit', value: '1' }],
                destination: '/dry-eyes-treatment-london',
                permanent: true
            },
            {
                source: '/flashes-and-floaters',
                destination: '/flashes-floaters',
                permanent: true
            },
            {
                source: '/lens-replacement-rle',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/implantable-contact-lenses-icl',
                destination: '/icl',
                permanent: true
            },
            {
                source: '/eye-treatments/icl-',
                destination: '/icl',
                permanent: true
            },
            {
                source: '/eye-treatments/icl-eye-surgery',
                destination: '/icl',
                permanent: true
            },
            {
                source: '/icl-eye-surgery',
                destination: '/icl',
                permanent: true
            },
            {
                source: '/corneal-cross-linking',
                destination: '/keratoconus',
                permanent: true
            },
            {
                source: '/keratoconus-cross-linking',
                destination: '/keratoconus',
                permanent: true
            },
            {
                source: '/lp-laser-eye-surgery',
                destination: '/lasek-prk',
                permanent: true
            },
            {
                source: '/laser-eye-',
                destination: '/lasek-prk',
                permanent: true
            },
            {
                source: '/laser-eye-surgery/lasik/Want',
                destination: '/lasik-london',
                permanent: true
            },
            {
                source: '/lazy-eyes-amblyopia',
                destination: '/lazy-eyes-treatement',
                permanent: true
            },
            {
                source: '/macula',
                destination: '/macular-degeneration',
                permanent: true
            },
            {
                source: '/category/myopia',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/short-sightedness-myopia',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/articles/myopia-short-sightedness',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/myopia-short-sightedness',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/myopia-control',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/myopia-control-clinic',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/our-eye-diagnostics-technology',
                destination: '/our-specialists/our-eye-diagnostics-technology',
                permanent: true
            },
            {
                source: '/team/dr-sancy-low',
                destination: '/our-specialists/sancy-low',
                permanent: true
            },
            {
                source: '/eye-conditions/paediatric-ophthalmologist',
                destination: '/paediatric-eye-care',
                permanent: true
            },
            {
                source: '/laser-treatment/presbyopia-correction',
                destination: '/presbyond-london',
                permanent: true
            },
            {
                source: '/presbyond',
                destination: '/presbyond-london',
                permanent: true
            },
            {
                source: '/presbyopia-reading-glasses',
                destination: '/presbyond-london',
                permanent: true
            },
            {
                source: '/prices',
                destination: '/pricing-and-financing/our-prices',
                permanent: true
            },
            {
                source: '/terms-conditions',
                destination: '/privacy-policies',
                permanent: true
            },
            {
                source: '/privacy',
                destination: '/privacy-policies',
                permanent: true
            },
            {
                source: '/relex-smile',
                destination: '/relex-smile-london',
                permanent: true
            },
            {
                source: '/100-optical-how-was-it-what-is-our-impression-about-it-bp/feed',
                destination: '/articles/100-optical-how-was-it-what-is-our-impression-about-it-bp',
                permanent: true
            },
            {
                source: '/amd-awareness-month-bp/',
                destination: '/',
                permanent: true
            },
            {
                source: '/amd-awareness-month-bp/feed',
                destination: '/',
                permanent: true
            },
            {
                source: '/amd-awareness-month',
                destination: '/',
                permanent: true
            },
            {
                source: '/blog-post-template',
                destination: '/',
                permanent: true
            },
            {
                source: '/book-an-appointment',
                has: [{ type: 'query', key: 'fb-edit', value: '1' }],
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/callback',
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/eye-conditions',
                destination: '/',
                permanent: true
            },
            {
                source: '/eye-conditions/cataract-surgery',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/eye-conditions/macular-degeneration',
                destination: '/macular-degeneration',
                permanent: true
            },
            {
                source: '/eye-conditions/myopia-short-sightedness',
                destination: '/myopia',
                permanent: true
            },
            {
                source: '/eye-treatments',
                destination: '/',
                permanent: true
            },
            {
                source: '/find-us-in-north-london',
                destination: '/about-us',
                permanent: true
            },
            {
                source: '/how-did-amanda-join-my-iclinic-bp/feed',
                destination: '/articles/how-did-amanda-join-my-iclinic-bp',
                permanent: true
            },
            {
                source: '/how-to-treat-and-prevent-myopia',
                destination: '/articles/how-to-treat-and-prevent-myopia-bp',
                permanent: true
            },
            {
                source: '/keratoconus-what-you-should-know',
                destination: '/articles/keratoconus-what-you-should-know-bp',
                permanent: true
            },
            {
                source: '/laser-treatment/vis',
                destination: '/',
                permanent: true
            },
            {
                source: '/laser-treatment/vision-correction',
                destination: '/',
                permanent: true
            },
            {
                source: '/lasik',
                destination: '/lasik-london',
                permanent: true
            },
            {
                source: '/nutrition-and-hydration-week',
                destination: '/',
                permanent: true
            },
            {
                source: '/our-clinic/our-staff',
                destination: '/our-specialists',
                permanent: true
            },
            {
                source: '/our-prices',
                destination: '/pricing-and-financing/our-prices',
                permanent: true
            },
            {
                source: '/team/john-bolger',
                destination: '/our-specialists/john-bolger',
                permanent: true
            },
            {
                source: '/testimonials',
                destination: '/our-specialists',
                permanent: true
            },
            {
                source: '/what-are-myopia-hypermetropia-and-astigmatism',
                destination: '/articles/what-are-myopia-hypermetropia-and-astigmatism-bp',
                permanent: true
            },
            {
                source: '/what-is-laser-surgery-can-it-help-me-get-rid-of-my-glasses',
                destination: '/articles/what-is-laser-surgery-can-it-help-me-get-rid-of-my-glasses-bp',
                permanent: true
            },
            {
                source: '/what-is-the-spectacle-free-zone',
                destination: '/articles/what-is-the-spectacle-free-zone-bp',
                permanent: true
            },
            {
                source: '/wp-cont/uploads/09/08_Vision.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2019/09/210x210-Presbyond-Booklet-2019.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2019/09/Myopia-Control-Leaflet-PDF.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2019/09/Time-Spent-on-Putting-in-Contacts-What',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2019/10/210x210-Smile-Booklet-2019.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2020/01/Glaucoma-Leaflet-Updated-2019.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2020/09/08_Vision.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2021/08/Presbyond-Guide-2021-V2.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/wp-content/uploads/2021/08/YAG-Laser-Capsulotomy-Guide-2019.pdf',
                destination: '/',
                permanent: true
            },
            {
                source: '/__trashed',
                destination: '/',
                permanent: true
            },
            {
                source: '/astigmatism',
                destination: '/astigmatism-treatment',
                permanent: true
            },
            {
                source: '/articles/stressawarenessmonth-bp',
                destination: '/articles',
                permanent: true
            },
            {
                source: '/emergencies-and-second-opinion',
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/eye-conditions/diabetic-eye-disease',
                destination: '/articles/the-battle-against-diabetes-bp',
                permanent: true
            },
            {
                source: '/why-do-so-many-people-over-40-need-those-annoying-little-reading-glasses-bp',
                destination: '/articles/why-do-so-many-people-over-40-need-those-annoying-little-reading-glasses-bp',
                permanent: true
            },
            {
                source: '/cataract-surgery-london-eye-clinic-equipment.html',
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/articles/allergies-how-to-treat-them-bp',
                destination: '/articles/allergies-of-the-eyes-and-how-to-treat-them',
                permanent: true
            },
            {
                source: '/laser-treatment/vision-correction/m-107',
                destination: '/icl#vision_correction',
                permanent: true
            },
            {
                source: '/news/post/glasses-are-not-a-solution',
                has: [{ type: 'query', key: 'id', value: 'af0c156b-f15e-4177-aa0a-82797c6ae47a' }],
                destination: '/articles/why-do-so-many-people-over-40-need-those-annoying-little-reading-glasses-bp',
                permanent: true
            },
            {
                source: '/news/post/100-optical-how-was-it-what-is-our-impression-about-it',
                destination: '/articles/100-optical-how-was-it-what-is-our-impression-about-it-bp',
                permanent: true
            },
            {
                source: '/articles/take-a-minute-to-relax-stress-can-be-bad-for-your-eyes-bp',
                destination: '/articles/how-stress-can-be-bad-for-your-eyes',
                permanent: true
            },
            {
                source: '/a-guide-to-understanding-myopia-bp',
                destination: '/articles/myopia-vs-hyperopia',
                permanent: true
            },
            {
                source: '/articles/laser-assessment-procedure-what-is-going-to-happen-when-i-am-going-to-have-my-eyes-tasted-for-laser-bp',
                destination: '/articles/laser-eye-surgery-assessment-procedure',
                permanent: true
            },
            {
                source: '/articles/allergies-how-to-treat-them-bp',
                destination: '/articles/allergies-of-the-eyes-and-how-to-treat-them',
                permanent: true
            },
            {
                source: '/articles/in-the-zone-bp',
                destination: '/articles/your-vision-navigating-the-grey-zone',
                permanent: true
            },
            {
                source: '/articles/what-is-laser-surgery-can-it-help-me-get-rid-of-my-glasses-bp',
                destination: '/articles/what-is-refractive-surgery',
                permanent: true
            },
            {
                source: '/what-is-laser-surgery-can-it-help-me-get-rid-of-my-glasses-bp',
                destination: '/articles/what-is-refractive-surgery',
                permanent: true
            },
            {
                source: '/news/post/another-successful-cet-event-at-my-iclinic',
                destination: '/articles/another-successful-cet-event-at-my-iclinic-bp',
                permanent: true
            },
            {
                source: '/news/post/computer-vision-syndrome-the-dangers-of-modern-living',
                destination: '/articles/computer-vision-syndrome-the-dangers-of-modern-living-bp',
                permanent: true
            },
            {
                source: '/specialist/bola-bolger',
                destination: '/our-specialists/bola-bolger',
                permanent: true
            },
            {
                source: '/specialist/maria-dimitry',
                destination: '/our-specialists/maria-dimitry',
                permanent: true
            },
            {
                source: '/faq',
                destination: '/articles/fast-faqs-to-understand-myopia',
                permanent: true
            },
            {
                source: '/cookies-policy',
                destination: '/cookie-policy',
                permanent: true
            },
            {
                source: '/specialist/fatima-mangera',
                destination: '/our-specialists/fatima-mangera',
                permanent: true
            },
            {
                source: '/specialist/tina-khanam',
                destination: '/our-specialists/tina-khanam',
                permanent: true
            },
            {
                source: '/eye-conditions/macular-degeneration-treatment',
                destination: '/macular-degeneration',
                permanent: true
            },
            {
                source: '/news/post/how-do-virtual-reality-goggles-work',
                destination: '/articles/the-future-of-virtual-reality-headsets-for-eye-health',
                permanent: true
            },
            {
                source: '/news/post/smile-vs-lasik-what-is-the-difference-between-them',
                destination: '/articles/the-complete-guide-to-lasek-eye-surgery',
                permanent: true
            },
            {
                source: '/glaucoma-treatment-price',
                destination: '/glaucoma-treatment/price',
                permanent: true
            },
            {
                source: '/premium-lenses',
                destination: '/icl',
                permanent: true
            },
            {
                source: '/news/post/camera-obscura',
                destination: '/articles/camera-obscura-bp',
                permanent: true
            },
            {
                source: '/news/post/seeing-in-the-dark-sicilian-courgette-recipe',
                destination: '/articles/seeing-in-the-dark-bp',
                permanent: true
            },
            {
                source: '/news/post/i-tried-to-do-laser-eye-surgery-by-myself-it-was-unexpected',
                destination: '/articles/i-tried-to-do-laser-eye-surgery-by-myself-it-was-unexpected-bp',
                permanent: true
            },
            {
                source: '/news/post/what-is-the-spectacle-free-zone',
                destination: '/articles/what-is-the-spectacle-free-zone-bp',
                permanent: true
            },
            {
                source: '/news/post/can-my-vision-get-worse-again-after-laser-eye-surgery-what-is-regression',
                destination: '/articles/can-my-vision-get-worse-again-after-laser-eye-surgery-what-is-regression-bp',
                permanent: true
            },
            {
                source: '/news/post/vision-development-in-babies',
                destination: '/articles/vision-development-in-babies-bp',
                permanent: true
            },
            {
                source: '/yag-capsulotomy-for-pco-price',
                destination: '/cataract/yag-capsulotomy-for-pco/price',
                permanent: true
            },
            {
                source: '/cataract-price',
                destination: '/cataract/price',
                permanent: true
            },
            {
                source: '/financing-your-treatment',
                destination: '/pricing-and-financing/financing-your-treatment',
                permanent: true
            },
            {
                source: '/specialist',
                destination: '/our-specialists',
                permanent: true
            },
            {
                source: '/eye-treatments/paediatric-eye-care',
                destination: '/paediatric-eye-care',
                permanent: true
            },
            {
                source: '/relex-smile-london-price',
                destination: '/relex-smile-london',
                permanent: true
            },
            {
                source: '/specialist/sheila-luk',
                destination: '/our-specialists/sheila-luk',
                permanent: true
            },
            {
                source: '/yag-capsulotomy-for-pco',
                destination: '/cataract/yag-capsulotomy-for-pco',
                permanent: true
            },
            {
                source: '/news/post/should-price-be-a-decision-maker',
                destination: '/articles/should-price-be-a-decision-maker-bp',
                permanent: true
            },
            {
                source: '/specialist/john-bolger',
                destination: '/our-specialists/john-bolger',
                permanent: true
            },
            {
                source: '/specialist/sancy-low',
                destination: '/our-specialists/sancy-low',
                permanent: true
            },
            {
                source: '/icl-price',
                destination: '/icl/price',
                permanent: true
            },
            {
                source: '/articles/the-best-laser-eye-surgery-in-london/best-laser-eye-surgery-london-uk',
                destination: '/articles/the-best-laser-eye-surgery-in-london',
                permanent: true
            },
            {
                source: '/contact-us',
                has: [{ type: 'query', key: 'fb-edit', value: '1' }],
                destination: '/contact-us',
                permanent: true
            },
            {
                source: '/cataract',
                has: [{ type: 'query', key: 'source', value: 'post_page---------------------------' }],
                destination: '/cataract',
                permanent: true
            },
            {
                source: '/glaucoma-treatment',
                has: [{ type: 'query', key: 'source', value: 'post_page---------------------------' }],
                destination: '/glaucoma-treatment',
                permanent: true
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'page_id', value: '963' }],
                destination: '/',
                permanent: true
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'page_id', value: '886' }],
                destination: '/',
                permanent: true
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'page_id', value: '940' }],
                destination: '/',
                permanent: true
            },
        ];
    }
    // typescript: {
    //     // !! WARN !!
    //     // Dangerously allow production builds to successfully complete even if
    //     // your project has type errors.
    //     // !! WARN !!
    //     ignoreBuildErrors: true
    // },
    // eslint: {
    //     // Warning: This allows production builds to successfully complete even if
    //     // your project has ESLint errors.
    //     ignoreDuringBuilds: true
    // }
};

module.exports = nextConfig;

// module.exports = withBundleAnalyzer(nextConfig);
