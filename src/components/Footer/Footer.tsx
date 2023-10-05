import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import dynamic from 'next/dynamic';
import FooterBody from './FooterBody';

const FooterHeader = dynamic(() => import('./FooterHeader'), {
    loading: () => <ComponentLoader />
});

interface FooterProps {
    excludeFooterHeader?: boolean;
    excludeFooterLinks?: boolean;
}

/**
 * Footer container
 *
 * @returns JSX.Element
 */
const Footer = ({ excludeFooterHeader, excludeFooterLinks }: FooterProps): JSX.Element => {
    return (
        <footer className="mt-20 w-full bg-[#003E79] pb-44 sm:mt-36 sm:pb-16 md:pb-28 lg:mt-40">
            {!excludeFooterHeader ? (
                <LazyComponent>
                    <FooterHeader />
                </LazyComponent>
            ) : null}

            <FooterBody excludeFooterLinks={excludeFooterLinks} />
        </footer>
    );
};

export default Footer;
