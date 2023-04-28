import FooterBody from './FooterBody';
import FooterHeader from './FooterHeader';

/**
 * Footer container
 *
 * @returns JSX.Element
 */
const Footer = (): JSX.Element => {
    return (
        <footer className="mt-20 w-full bg-[#063147] pb-44 sm:mt-36 sm:pb-16 md:pb-28 lg:mt-40">
            <FooterHeader />
            <FooterBody />
        </footer>
    );
};

export default Footer;
