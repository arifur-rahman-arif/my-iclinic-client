import { FontResizer } from '@/components/FontResizer';
import { Footer } from '@/components/Footer';
import GoodbyeModal from '@/components/GoodbyeModal';
import ABTestingHeader from '@/components/Header/ABTestingHeader';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

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
    return (
        <div>
            <FontResizer />

            <FreshChatScript />

            <ABTestingHeader />
            {children}
            <Footer excludeFooterHeader excludeFooterLinks />

            <GoodbyeModal />

            <BottomMenu />
        </div>
    );
};

export default IclLayout;
