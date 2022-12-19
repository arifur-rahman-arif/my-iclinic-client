import { Header } from '@/components/header';
import LazyComponent from '@/components/LazyComponent';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { AlertInterface } from '@/features/alert/alertSlice';
import { AppState } from '@/store';

const Footer = dynamic(() => import('@/components/footer/Footer'));
const Alert = dynamic(() => import('@/components/alert/Alert'));

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
    const { showAlert } = useSelector((state: AppState) => state.alert as AlertInterface);

    return (
        <>
            <Header />
            {children}
            <LazyComponent>
                <Footer />
            </LazyComponent>
            {showAlert && <Alert />}
        </>
    );
};

export default MainLayout;
