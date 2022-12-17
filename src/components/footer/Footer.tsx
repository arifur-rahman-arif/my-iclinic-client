import FooterBody from './FooterBody';
import FooterHeader from './FooterHeader';

/**
 * Footer container
 *
 * @returns JSX.Element
 */
const Footer = (): JSX.Element => {
    return (
        <footer className="mt-24 w-full bg-brandLight pb-12 sm:mt-36 lg:mt-48">
            <FooterHeader />
            <FooterBody />
        </footer>
    );
};

export default Footer;
