import Head from 'next/head';
import * as process from 'process';

interface PropInterface {
    children?: JSX.Element | JSX.Element[];
    title: string;
    description?: string;
    seo?: any;
    yoastJson?: any;
}

/**
 * Page component which will be use in every page as a wrapper
 *
 * @param {JSX.Element | JSX.Element[] | undefined} children
 * @param {string} title
 * @param {string | undefined} description
 * @param {any} seo
 * @param {any} yoastJson
 * @param {Omit<PropInterface, "description" | "title" | "seo" | "children" | "yoastJson">} other
 * @returns {JSX.Element}
 * @constructor
 */
const Page = ({ children, title, description, seo, yoastJson, ...other }: PropInterface): JSX.Element => {
    return (
        <>
            {/* <NextSeo */}
            {/*     title={`${title} | My-iClinic`} */}
            {/*     description={description || ''} */}
            {/*     additionalLinkTags={[ */}
            {/*         { */}
            {/*             rel: 'icon', */}
            {/*             href: '/favicon.ico' */}
            {/*         } */}
            {/*         // { */}
            {/*         //     rel: 'manifest', */}
            {/*         //     href: '/manifest.json' */}
            {/*         // } */}
            {/*     ]} */}
            {/* /> */}

            <Head>
                <title>{yoastJson?.title || title}</title>
                {seo && (
                    <div
                        dangerouslySetInnerHTML={{ __html: seo?.replaceAll(process.env.WP_URL, process.env.SITE_URL) }}
                    />
                )}
                <meta name="twitter:card" content={yoastJson?.twitter_card || 'summary_large_image'} />
                <meta name="twitter:image" content={yoastJson?.twitter_image || ''} />
            </Head>

            {children}
        </>
    );
};

export default Page;
