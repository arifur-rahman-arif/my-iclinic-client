import HTMLReactParser from 'html-react-parser';
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
const Page = ({ children, title, description, seo, yoastJson }: PropInterface): JSX.Element => {
    return (
        <>
            <Head>
                <title>{yoastJson?.title || title}</title>
                {!yoastJson?.description && <meta name="description" content={description} />}
                {seo && HTMLReactParser(seo?.replaceAll(process.env.WP_URL, process.env.SITE_URL))}
                {yoastJson && (
                    <>
                        <meta name="twitter:card" content={yoastJson?.twitter_card || 'summary_large_image'} />
                        <meta name="twitter:image" content={yoastJson?.twitter_image || ''} />
                    </>
                )}
            </Head>

            {children}
        </>
    );
};

export default Page;
