import { FontResizer } from '@/components/FontResizer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AlertInterface } from '@/features/alert/alertSlice';
import { AppState } from '@/store';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

    useEffect(() => {
        setTimeout(() => {
            setLoadChatBot(true);
        }, 4000);
    }, []);

    return (
        <div onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter}>
            <Script
                dangerouslySetInnerHTML={{
                    __html: `history.scrollRestoration = "manual"`
                }}
            />
            {/* @ts-ignore */}
            <FreshChatScript />

            <FontResizer />

            <Header />
            {children}
            <Footer />

            {showAlert && <Alert />}

            <BottomMenu />
            {loadChatBot && <CookieConsent />}
        </div>
    );
};

export default MainLayout;
