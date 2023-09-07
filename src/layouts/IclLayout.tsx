import { FontResizer } from '@/components/FontResizer';
import { Footer } from '@/components/Footer';
import GoodbyeModal from '@/components/GoodbyeModal';
import ABTestingHeader from '@/components/Header/ABTestingHeader';
import { AlertInterface } from '@/features/alert/alertSlice';
import { AppState } from '@/store';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

const Alert = dynamic(() => import('@/components/Alert/Alert'));
const BottomMenu = dynamic(() => import('@/components/page-sections/BottomMenu/BottomMenu'), {
    ssr: false
});

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
const IclLayout = ({ children }: PropTypes): JSX.Element => {
    const { showAlert } = useSelector((state: AppState) => state.alert as AlertInterface);

    return (
        <div>
            <FontResizer />

            <FreshChatScript />

            <ABTestingHeader />
            {children}
            <Footer excludeFooterHeader excludeFooterLinks />

            {showAlert && <Alert />}
            <GoodbyeModal />

            <BottomMenu />
        </div>
    );
};

export default IclLayout;
