import { LinkText } from '@/components/Link';
import React from 'react';
import styles from './styles/FooterBottomLInks.module.scss';

/**
 * Footer body links component
 *
 * @returns {*}  {JSX.Element}
 */
const FooterBottomLinks = (): JSX.Element => {
    return (
        <div>
            <ul className={`${styles.list} mt-6 flex flex-wrap items-center justify-center gap-12`}>
                <li>
                    <LinkText href="/privacy-policies" className="text-white" indicatorColor="bg-white">
                        Privacy Policy
                    </LinkText>
                </li>
                {/* <li> */}
                {/*    <LinkText href="/privacy-policies" className="text-white" indicatorColor="bg-white"> */}
                {/*        Terms and condition */}
                {/*    </LinkText> */}
                {/* </li> */}
                <li>
                    <LinkText href="/cookie-policy" className="text-white" indicatorColor="bg-white">
                        Cookies Policy
                    </LinkText>
                </li>
                <li>
                    <LinkText href="/complaint" className="text-white" indicatorColor="bg-white">
                        Complaints Procedure
                    </LinkText>
                </li>
                <li>
                    <LinkText href="/sitemap" className="text-white" indicatorColor="bg-white">
                        Sitemap
                    </LinkText>
                </li>
            </ul>

            <div className={`mt-6 h-[0.1rem] w-full overflow-hidden bg-white`}></div>
        </div>
    );
};

export default FooterBottomLinks;
