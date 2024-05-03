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
            <ul className={`${styles.list} mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12`}>
                <li>
                    <LinkText
                        title="Privacy Policy"
                        href="/privacy-policies"
                        className="text-[#0099FF]"
                        indicatorColor="bg-white"
                    >
                        Privacy Policy
                    </LinkText>
                </li>
                <li>
                    <LinkText
                        title="Terms and Conditions"
                        href="/terms-and-conditions"
                        className="text-[#0099FF]"
                        indicatorColor="bg-[#0099FF]"
                    >
                        Terms and Conditions
                    </LinkText>
                </li>
                <li>
                    <LinkText
                        title="Cookies Policy"
                        href="/cookie-policy"
                        className="text-[#0099FF]"
                        indicatorColor="bg-[#0099FF]"
                    >
                        Cookies Policy
                    </LinkText>
                </li>
                <li>
                    <LinkText
                        title="Complaints Procedure"
                        href="/complaint"
                        className="text-[#0099FF]"
                        indicatorColor="bg-[#0099FF]"
                    >
                        Complaints Procedure
                    </LinkText>
                </li>
                <li>
                    <LinkText title="Sitemap" href="/sitemap" className="text-[#0099FF]" indicatorColor="bg-[#0099FF]">
                        Sitemap
                    </LinkText>
                </li>
            </ul>

            <div className={`mt-6 h-[0.1rem] w-full overflow-hidden bg-white`}></div>
        </div>
    );
};

export default FooterBottomLinks;
