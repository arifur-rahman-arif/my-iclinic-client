import { NextSeo } from 'next-seo';

interface PropInterface {
    children?: JSX.Element | JSX.Element[];
    title: string;
    description?: string;
}

/**
 * Page component which will be use in every page as a wrapper
 *
 * @param {JSX.Element | JSX.Element[] | undefined} children
 * @param {string} title
 * @param {string | undefined} description
 * @param {Pick<PropInterface, never>} other
 * @returns {JSX.Element}
 * @constructor
 */
const Page = ({ children, title, description, ...other }: PropInterface): JSX.Element => {
    return (
        <>
            <NextSeo
                title={`${title} | My-iClinic`}
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
