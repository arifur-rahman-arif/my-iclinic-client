import { FontResizer } from '@/components/FontResizer';
import { Header } from '@/components/Header';
import LazyComponent from '@/components/LazyComponent';
import { AlertInterface } from '@/features/alert/alertSlice';
import { AppState } from '@/store';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';

const Footer = dynamic(() => import('@/components/Footer/Footer'));
const Alert = dynamic(() => import('@/components/Alert/Alert'));
const BottomMenu = dynamic(() => import('@/components/page-sections/BottomMenu/BottomMenu'), {
    ssr: false
});
const CookieConsent = dynamic(() => import('@/components/CookieConsent/CookieConsent'));
const FreshChatScript = dynamic(() => import('@/components/FreshChatScript'));

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
    const [loadChatBot, setLoadChatBot] = useState<boolean>(false);

    /**
     * When user enters the mouse in screen or user touches the screen load the chatbot
     */
    const handleMouseEnter = () => {
        setLoadChatBot(true);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter}>
            <Script
                dangerouslySetInnerHTML={{
                    __html: `history.scrollRestoration = "manual"`
                }}
            />
            {/* @ts-ignore */}
            {loadChatBot && <FreshChatScript />}

            <FontResizer />

            <Header />
            {children}
            <LazyComponent triggerPosition={-100}>
                <Footer />
            </LazyComponent>

            {showAlert && <Alert />}

            <BottomMenu />
            {loadChatBot && <CookieConsent />}
        </div>
    );
};

export default MainLayout;
