import { Header } from '@/components/header';
import { ReactNode } from 'react';

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
            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;
