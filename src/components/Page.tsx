// @ts-nocheck
import HTMLReactParser from 'html-react-parser';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
const Page = ({ children, title, description, seo, yoastJson }: PropInterface): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <Head>
                {!yoastJson?.title && <title>{title}</title>}
                {!yoastJson?.description && <meta name="description" content={description} />}

                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
                {seo && HTMLReactParser(seo)}

                {/* <script */}
                {/*     type="application/ld+json" */}
                {/*     dangerouslySetInnerHTML={{ __html: JSON.stringify(yoastJson?.schema) }} */}
                {/* /> */}

                {/* Google Tag Manager */}
                <script
                    async
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-MFT6DQQ');`
                    }}
                />
                {/* End Google Tag Manager */}
            </Head>

            {/* <NextSeo */}
            {/*     title={yoastJson?.title || title} */}
            {/*     description={yoastJson?.description || description} */}
            {/*      */}
            {/*     // canonical={ */}
            {/*     //     query ? */}
            {/*     //         `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}?category=${query}` : */}
            {/*     //         `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}` */}
            {/*     // } */}
            {/*     // canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} */}
            {/* /> */}

            {/* <Head> */}
            {/*     <title>{yoastJson?.title || title}</title> */}
            {/*     <meta name="description" content={yoastJson?.description || description} /> */}

            {/*     <meta */}
            {/*         name="robots" */}
            {/*         content={`${yoastJson?.robots?.index},${yoastJson?.robots?.follow},${yoastJson?.robots['max-snippet']},${yoastJson?.robots['max-image-preview']},${yoastJson?.robots['max-video-preview']}`} */}
            {/*     /> */}
            {/*     /!* <link rel="canonical" href={yoastJson.canonical} /> *!/ */}

            {/*     <meta property="og:locale" content={yoastJson?.og_locale} /> */}
            {/*     <meta property="og:type" content={yoastJson?.og_type} /> */}
            {/*     <meta property="og:title" content={yoastJson?.og_title} /> */}
            {/*     <meta property="og:description" content={yoastJson?.og_description} /> */}
            {/*     <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} /> */}
            {/*     <meta property="og:site_name" content={yoastJson?.og_site_name} /> */}
            {/*     <meta property="article:published_time" content={yoastJson?.article_published_time} /> */}
            {/*     <meta property="article:modified_time" content={yoastJson?.article_modified_time} /> */}
            {/*     {yoastJson?.og_image.length && */}
            {/*         yoastJson?.og_image.map((image: any, index: any) => ( */}
            {/*             <meta key={index} property="og:image" content={image.url} /> */}
            {/*         ))} */}
            {/*     <meta name="author" content={yoastJson?.author} /> */}
            {/*     <meta name="twitter:card" content={yoastJson?.twitter_card} /> */}
            {/*     {yoastJson?.twitter_misc && */}
            {/*         Object.entries(yoastJson?.twitter_misc).map(([key, value], index) => ( */}
            {/*             <meta key={index} name={`twitter:${key}`} content={value as any} /> */}
            {/*         ))} */}

            {/*     <script */}
            {/*         type="application/ld+json" */}
            {/*         dangerouslySetInnerHTML={{ __html: JSON.stringify(yoastJson?.schema) }} */}
            {/*     /> */}
            {/* </Head> */}

            {/* Google Tag Manager (noscript) */}
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-MFT6DQQ"
                  height="0"
                  width="0"
                  style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
              `
                }}
            />
            {/* End Google Tag Manager (noscript) */}

            {children}
        </>
    );
};

export default Page;
