'use client';

import { LinkStyle } from '@/components/Link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import CookieIcon from '@/icons/cookie.png';
import Image from 'next/image';

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
                className={`${styles.styles} flex items-center justify-center rounded-primary py-6 px-8 gap-6 fixed bottom-0 z-[999] left-0 translate-x-8 -translate-y-8 bg-secondary`}
            >
                <Image className="h-[3.6rem] w-[3.6rem]" src={CookieIcon} alt="" />
                <span className="font-latoMedium text-white text-[1.6rem]">
                    We use{' '}
                    <LinkStyle url="/cookie-policy" className="!text-[1.5rem] !font-latoMedium ">
                        Cookies.
                    </LinkStyle>{' '}
                </span>

                <button
                    className="text-heading px-4 py-1 rounded-2xl text-[1.4rem] transition-all duration-500 hover:bg-transparent hover:text-white font-latoBold border-2 bg-brand border-brand"
                    onClick={handleAccept}
                >
                    OK
                </button>
            </div>
        );
    }

    return <></>;
};

export default CookieConsent;
