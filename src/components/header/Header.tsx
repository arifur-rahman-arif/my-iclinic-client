import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import { Container } from '@/components/container';
import Hamburger from '@/components/header/hamburger/Hamburger';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from '@/components/header/NavMenu';
import dynamic from 'next/dynamic';
import gsap from 'gsap';

const MobileNavbar = dynamic(() => import('@/components/header/MobileNavbar'));

/**
 * Header component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (): JSX.Element => {
    const [loadMobileMenu, setLoadMobileMenu] = useState<boolean>(false);
    const headerRef = useRef<HTMLHeadingElement>(null);

    /**
     *  Animate the indicator
     */
    const removeIndicator = () => {
        document.querySelectorAll('.indicator').forEach((element) => {
            gsap.to(element, {
                width: '0%',
                duration: 0.3,
                ease: 'expo.out'
            });
        });
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            document.querySelector('.active-indicator') &&
                gsap.to('.active-indicator', {
                    width: '100%',
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.3)'
                });
        });

        // Load the mobile menu after 500ms to improve the page load time
        setTimeout(() => {
            setLoadMobileMenu(true);
        }, 500);

        // When user start scrolling make the header slide down from top and make it sticky
        window.addEventListener('scroll', () => {
            if (!headerRef.current) return;

            const clientRect = headerRef.current?.getBoundingClientRect();

            if (!clientRect) return;

            const activePosition = clientRect?.height - 80;

            const currentScrollPosition = window.pageYOffset;

            // If body tag current position is more that active position than active the header slide down animation
            if (currentScrollPosition > activePosition) {
                headerRef.current.classList.add('sticky-nav');
            } else {
                headerRef.current.classList.remove('sticky-nav');
            }
        });
    }, []);

    return (
        <>
            {loadMobileMenu && <MobileNavbar removeIndicator={removeIndicator} />}
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 z-[99] h-24 w-full bg-white transition-all duration-500 xl:h-[11.4rem]`}
            >
                <Container className="grid h-full grid-cols-1 items-center gap-12 xl:grid-cols-[1fr_auto]">
                    <div className="grid h-full grid-cols-[auto_1fr] items-center bg-white xl:grid-cols-[auto_1fr_auto]">
                        <Link href="/" className="" onClick={removeIndicator}>
                            <Image
                                src="/images/logos/logo-iclinic-desktop.png"
                                alt="My-iClinic"
                                width={154}
                                height={36}
                                quality={30}
                                priority
                            />
                        </Link>

                        {/*  Navigation links  */}
                        <NavMenu />

                        {/*    Round box */}
                        {/* <div className="hidden h-[5.8rem] w-[5.8rem] cursor-pointer items-center justify-center gap-[0.06rem] rounded-full border-2 border-brand bg-brand transition-all duration-300 hover:bg-transparent xl:flex">
                            <span className="relative -top-1 font-latoBold text-[2.8rem] capitalize">A</span>
                            <span className="relative top-1 font-latoBold text-[2.8rem]">a</span>
                        </div> */}

                        <Hamburger />
                    </div>

                    <div className="hidden place-items-end xl:grid">
                        <Button
                            type="anchor"
                            text="Book a consultation"
                            iconPosition="left"
                            icon={
                                <Image
                                    src="/images/icons/icon-calendar-outline-darker.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                        />
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
