import { NextSeo } from 'next-seo';

interface PropInterface {
    children?: JSX.Element | JSX.Element[];
    title: string;
    description?: string;
}

/**
 * Page component which will be use in every page as a wrapper
 *
 * This component will also set the page title in browsers
 *
 * @param {JSX.Element | JSX.Element[] | undefined} children
 * @param {string} title
 * @param {Pick<PageInterface, never>} other
 * @returns {JSX.Element}
 */
const Page = ({ children, title, description, ...other }: PropInterface): JSX.Element => {
    return (
        <>
            <NextSeo
                title={`${title} | BSA`}
                description={description || ''}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon.ico'
                    }
                ]}
            />

            {children}
        </>
    );
};

export default Page;
