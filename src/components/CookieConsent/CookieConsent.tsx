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
                className={`${styles.styles} fixed bottom-0 left-0 z-[999] flex translate-x-8 -translate-y-8 items-center justify-center gap-6 rounded-primary bg-white py-6 px-8 shadow-shadow1`}
            >
                <Image className="h-[3.6rem] w-[3.6rem]" src={CookieIcon} alt="" />
                <span className="font-latoMedium text-[1.6rem] text-heading">
                    We use{' '}
                    <LinkStyle url="/cookie-policy" className="!font-latoMedium !text-[1.5rem] ">
                        Cookies.
                    </LinkStyle>{' '}
                </span>

                <button
                    className="rounded-2xl border-2 border-brand bg-brand px-4 py-1 font-latoBold text-[1.4rem] text-white transition-all duration-500 hover:bg-transparent hover:text-brand"
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
