import { ReactNode } from 'react';
import Header from './header/Header';

import { NextSeo } from 'next-seo';
import { Footer } from 'src/layouts/footer';

interface PropTypes {
    children: ReactNode;
}

/**
 * MainLayout layout
 *
 * @param {NavigationProps} children
 * @returns {JSX.Element}
 */
const MainLayout = ({ children }: PropTypes): JSX.Element => {
    return (
        <>
            <NextSeo
                title="Private swimming lessons at your home | BSA"
                description="With our private one-to-one swim lessons, you will see rapid
                progress in your swimming day to day. All our instructors are
                certified with over 20 years of experience."
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon.ico'
                    }
                ]}
            />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
