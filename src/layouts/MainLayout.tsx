import { Header } from '@/components/header';
import LazyComponent from '@/components/LazyComponent';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/footer/Footer'));

interface PropTypes {
    children: ReactNode;
}

/**
 * MainLayout layout
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
const MainLayout = ({ children }: PropTypes): JSX.Element => {
    return (
        <>
            <Header />
            {children}
            <LazyComponent>
                <Footer />
            </LazyComponent>
        </>
    );
};

export default MainLayout;
