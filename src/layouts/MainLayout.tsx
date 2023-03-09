import { Header } from '@/components/Header';
import LazyComponent from '@/components/LazyComponent';
import { AlertInterface } from '@/features/alert/alertSlice';
import { smallSizes, useDeviceSize } from '@/hooks';
import { AppState } from '@/store';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';

const Footer = dynamic(() => import('@/components/Footer/Footer'));
const Alert = dynamic(() => import('@/components/Alert/Alert'));
const BottomMenu = dynamic(() => import('@/components/page-sections/BottomMenu/BottomMenu'));

interface PropTypes {
    children: ReactNode;
}

/**
 * MainLayout layout
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
const MainLayout = ({ children }: PropTypes): JSX.Element => {
    const { showAlert } = useSelector((state: AppState) => state.alert as AlertInterface);
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const [loadChatbot, setLoadChatbot] = useState<boolean>(false);
    const deviceSize = useDeviceSize();

    setTimeout(() => {
        if (smallSizes.includes(deviceSize)) {
            setLoadCallbackSection(true);
        }
        setLoadChatbot(true);
    }, 2500);

    return (
        <>
            <Script
                dangerouslySetInnerHTML={{
                    __html: `history.scrollRestoration = "manual"`
                }}
            />
            {/* @ts-ignore */}
            {loadChatbot && <Script src="//fw-cdn.com/3699003/3133103.js" chat="true" strategy="lazyOnload" />}
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
