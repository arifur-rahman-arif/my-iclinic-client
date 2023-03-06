import { LinkText } from '@/components/Link';
import styles from './styles/FooterBottomLInks.module.scss';

/**
 * Footer body links component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterBottomLinks = (): JSX.Element => {
    return (
        <ul className={`${styles.list} mt-6 flex flex-wrap items-center justify-center gap-12`}>
            <li>
                <LinkText href="#">Privacy Policy</LinkText>
            </li>
            <li>
                <LinkText href="#">Terms and condition</LinkText>
            </li>
            <li>
                <LinkText href="#">Cookies Policy</LinkText>
            </li>
        </ul>
    );
};

export default FooterBottomLinks;
