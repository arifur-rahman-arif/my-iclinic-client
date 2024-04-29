// @ts-nocheck
import HTMLReactParser from 'html-react-parser';
import Head from 'next/head';
// import Script from 'next/script';
// import { useRouter } from 'next/router';

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
    // const router = useRouter();

    return (
        <>
            <Head>
                {!yoastJson?.title && <title>{title}</title>}
                {!yoastJson?.description && <meta name="description" content={description} />}

                <meta name="google-site-verification" content="SAbAmq8u2_y-9zCpgFoI4X7bPFEeDxtda1gDc12Hr-w" />
                <meta name="p:domain_verify" content="da57493c63d00becdd459241e65ec009" />
                {/* <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} /> */}
                {/* <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} /> */}
                {seo && HTMLReactParser(seo)}
            </Head>

            {children}
        </>
    );
};

export default Page;
