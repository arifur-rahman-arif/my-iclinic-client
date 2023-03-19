import { Container } from '@/components/Container';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import NavMenu from './NavMenu';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
// Import { useEffect, useRef, useState } from 'react';
//
// const MobileNavbar = dynamic(() => import('@/components/Header/MobileNavbar'));
// const NavMenu = dynamic(() => import('@/components/Header/NavMenu'));

/**
 * Header component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (): JSX.Element => {
    // Const [loadMobileMenu, setLoadMobileMenu] = useState<boolean>(false);
    // const [loadDesktopMenu, setLoadDesktopMenu] = useState<boolean>(false);
    // const headerRef = useRef<HTMLElement | null>(null);
    //
    // useEffect(() => {
    //     loadMenu();
    //
    //     window.addEventListener('resize', () => {
    //         loadMenu();
    //     });
    //
    //     // When user start scrolling make the header slide down from top and make it sticky
    //     window.addEventListener('scroll', () => {
    //         if (!headerRef.current) return;
    //
    //         const clientRect = headerRef.current?.getBoundingClientRect();
    //
    //         if (!clientRect) return;
    //
    //         const activePosition = clientRect?.height - 80;
    //
    //         const currentScrollPosition = window.pageYOffset;
    //
    //         // If body tag current position is more that active position than active, the header slide down animation
    //         if (currentScrollPosition > activePosition) {
    //             headerRef.current?.classList.add('sticky-nav');
    //         } else {
    //             headerRef.current?.classList.remove('sticky-nav');
    //         }
    //     });
    // }, []);
    //
    // /**
    //  * Load the menu for either desktop or for mobile based on screen size
    //  */
    // const loadMenu = () => {
    //     const windowWidth = window.innerWidth;
    //
    //     if (windowWidth < 1280) {
    //         !loadMobileMenu && setLoadMobileMenu(true);
    //     } else {
    //         !loadDesktopMenu && setLoadDesktopMenu(true);
    //     }
    // };

    return (
        <>
            {/* {loadMobileMenu && <MobileNavbar />} */}
            <header className="sticky top-0 left-0 z-[99] w-full bg-white">
                <Container className="grid grid-cols-[auto_1fr] py-4">
                    <Link href="/" className="">
                        <Image
                            src="/images/logos/logo-iclinic-desktop.png"
                            alt="My-iClinic"
                            width={154}
                            height={36}
                            quality={100}
                            priority
                            className="non-sticky-logo"
                        />
                        <Image
                            src="/images/logos/iclinic-rounded.png"
                            alt="My-iClinic"
                            width={65}
                            height={48}
                            unoptimized={true}
                            className="sticky-logo hidden"
                        />
                    </Link>

                    {/* Nav contact details */}
                    <div className="contact-details hidden items-center justify-start gap-24 xl:flex xl:justify-self-end">
                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-telephone-outline.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <a href="tel:0208 445 8877">
                                <span className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                    (+44) 0208 445 8877
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-mail-outline-dark.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                reception@my-iclinic.co.uk
                            </span>
                        </div>

                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-map-outline.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <span className="relative block font-mulishBold text-[1.6rem] leading-[2.4rem]">
                                960 High Rd, London N12 9RY
                            </span>
                        </div>
                    </div>

                    <div className="col-span-full grid grid-cols-[1fr_auto] gap-8">
                        <NavMenu />
                        <div className="hidden place-items-end xl:grid">
                            <BookConsultation />
                        </div>
                    </div>

                    <Hamburger />
                </Container>
            </header>
        </>
    );
};

export default Header;
