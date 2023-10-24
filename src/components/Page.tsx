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
 * @param {Omit<PropInterface, 'description' | 'title' | 'seo' | 'children' | 'yoastJson'>} other
 * @returns {JSX.Element}
 * @constructor
 */
const Page = ({ children, title, description, seo, yoastJson }: PropInterface): JSX.Element => {
    const router = useRouter();

    return (
        <>
            <Head>
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

                {!yoastJson?.title && <title>{title}</title>}
                {!yoastJson?.description && <meta name="description" content={description} />}

                <meta name="google-site-verification" content="SAbAmq8u2_y-9zCpgFoI4X7bPFEeDxtda1gDc12Hr-w" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
                {seo && HTMLReactParser(seo)}
            </Head>

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
