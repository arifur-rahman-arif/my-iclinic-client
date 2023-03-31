import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
const Page = ({ children, title, description, seo, yoastJson }: PropInterface): JSX.Element => {
    const router = useRouter();
    const query = router?.query?.category || null;

    return (
        <>
            {/* <Head> */}
            {/*     {!yoastJson?.title && <title>{title}</title>} */}
            {/*     {!yoastJson?.description && <meta name="description" content={description} />} */}

            {/*     {seo && */}
            {/*         HTMLReactParser(seo?.replaceAll(process.env.NEXT_PUBLIC_WP_URL, process.env.NEXT_PUBLIC_SITE_URL))} */}
            {/* </Head> */}

            <NextSeo
                title={yoastJson?.title || title}
                description={yoastJson?.description || description}
                canonical={
                    query ?
                        `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}?category=${query}` :
                        `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`
                }
            />

            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(yoastJson.schema) }}
                />
            </Head>

            {children}
        </>
    );
};

export default Page;
