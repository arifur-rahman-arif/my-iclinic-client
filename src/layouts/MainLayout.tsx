import { Header } from '@/components/header';
import LazyComponent from '@/components/LazyComponent';
import { ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { AlertInterface } from '@/features/alert/alertSlice';
import { AppState } from '@/store';
import { useDeviceSize } from '@/hooks';

const Footer = dynamic(() => import('@/components/footer/Footer'));
const Alert = dynamic(() => import('@/components/alert/Alert'));
const BottomMenu = dynamic(() => import('@/components/page-sections/bottom-menu/BottomMenu'));

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
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();

    setTimeout(() => {
        if (deviceSize === 'small') {
            setLoadCallbackSection(true);
        }
    }, 2500);

    return (
        <>
            <Header />
            {children}
            <LazyComponent>
                <Footer />
            </LazyComponent>
            {showAlert && <Alert />}
            {loadCallbackSection ? <BottomMenu /> : <></>}
        </>
    );
};

export default MainLayout;
