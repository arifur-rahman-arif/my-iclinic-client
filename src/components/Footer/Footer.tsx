import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import dynamic from 'next/dynamic';
import FooterBody from './FooterBody';
const FooterHeader = dynamic(() => import('./FooterHeader'), {
    loading: () => <ComponentLoader />
});

/**
 * Footer container
 *
 * @returns JSX.Element
 */
const Footer = (): JSX.Element => {
    return (
        <footer className="mt-20 w-full bg-[#063147] pb-44 sm:mt-36 sm:pb-16 md:pb-28 lg:mt-40">
            <LazyComponent>
                <FooterHeader />
            </LazyComponent>
            <FooterBody />
        </footer>
    );
};

export default Footer;
