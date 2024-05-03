import { LinkText } from '@/components/Link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import CookieIcon from '@/icons/cookie.png';
import Image from 'next/image';
import { Button2 } from '@/components/Buttons';

/**
 * Cookie consent component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const CookieConsent = (): JSX.Element => {
    const [showCookieConsent, setShowCookieConsent] = useState(!localStorage.getItem('cookieConsentAccepted'));

    useEffect(() => {
        const cookieConsentAccepted = localStorage.getItem('cookieConsentAccepted');

        if (cookieConsentAccepted) setShowCookieConsent(false);
    }, []);

    /**
     * Handle the cookie accept button click
     */
    const handleAccept = () => {
        localStorage.setItem('cookieConsentAccepted', 'true');
        setShowCookieConsent(false);
    };

    if (showCookieConsent) {
        return (
            <div
                className={`${styles.styles} fixed bottom-0 left-0 z-[999] grid h-screen w-screen place-content-center bg-[rgba(5,_24,_33,_0.30)]`}
            >
                <div className="grid max-w-[53.4rem] place-items-center content-center gap-6 rounded-radius2 bg-white p-12 md:p-24">
                    <Image className="h-[4rem] w-[4rem] md:h-24 md:w-24" src={CookieIcon} alt="" />
                    <span className="text-center font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                        We use cookies
                    </span>

                    <p className="text-center">
                        This site uses cookies to improve your online experience, allow you to share content on social
                        media, and measure traffic to this website.
                    </p>
                    <LinkText
                        href="/cookie-policy"
                        indicatorColor="bg-[#0099FF]"
                        className="text-center !font-mulishBold text-[1.4rem] leading-8 text-[#0099FF]"
                    >
                        Cookies policy
                    </LinkText>

                    <Button2 type="button" text="Accept" onClick={handleAccept} className="mt-6 justify-self-center" />
                </div>
            </div>
        );
    }

    return <></>;
};

export default CookieConsent;
