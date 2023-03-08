import { Container } from '@/components/Container';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MobileNavbar = dynamic(() => import('@/components/Header/MobileNavbar'));
const NavMenu = dynamic(() => import('@/components/Header/NavMenu'));

/**
 * Header component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (): JSX.Element => {
    const [loadMobileMenu, setLoadMobileMenu] = useState<boolean>(false);
    const [loadDesktopMenu, setLoadDesktopMenu] = useState<boolean>(false);
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        loadMenu();

        window.addEventListener('resize', () => {
            loadMenu();
        });

        // When user start scrolling make the header slide down from top and make it sticky
        window.addEventListener('scroll', () => {
            if (!headerRef.current) return;

            const clientRect = headerRef.current?.getBoundingClientRect();

            if (!clientRect) return;

            const activePosition = clientRect?.height - 80;

            const currentScrollPosition = window.pageYOffset;

            // If body tag current position is more that active position than active, the header slide down animation
            if (currentScrollPosition > activePosition) {
                headerRef.current?.classList.add('sticky-nav');
            } else {
                headerRef.current?.classList.remove('sticky-nav');
            }
        });
    }, []);

    /**
     * Load the menu for either desktop or for mobile based on screen size
     */
    const loadMenu = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth < 1280) {
            !loadMobileMenu && setLoadMobileMenu(true);
        } else {
            !loadDesktopMenu && setLoadDesktopMenu(true);
        }
    };

    return (
        <>
            {loadMobileMenu && <MobileNavbar />}
            <header
                ref={headerRef}
                className="fixed overflow-y-auto xl:overflow-visible top-0 left-0 z-[99] h-24 w-full bg-white shadow-shadow1 transition-all duration-500 xl:h-[11.4rem] shadow-none hover:xl:shadow-none xl:shadow-none"
            >
                <Container className="grid h-full grid-cols-1 items-center gap-12 xl:grid-cols-[1fr_auto]">
                    <div className="grid h-full grid-cols-[auto_1fr] items-center bg-white xl:grid-cols-[auto_1fr_auto]">
                        <Link href="/" className="">
                            <Image
                                src="/images/logos/logo-iclinic-desktop.png"
                                alt="My-iClinic"
                                width={154}
                                height={36}
                                quality={100}
                                priority
                            />
                        </Link>

                        {/*  Navigation links  */}
                        {loadDesktopMenu && <NavMenu />}

                        {/*    Round box */}
                        {/* <div className="hidden h-[5.8rem] w-[5.8rem] cursor-pointer items-center justify-center gap-[0.06rem] rounded-full border-2 border-brand bg-brand transition-all duration-300 hover:bg-transparent xl:flex">
                            <span className="relative -top-1 font-latoBold text-[2.8rem] capitalize">A</span>
                            <span className="relative top-1 font-latoBold text-[2.8rem]">a</span>
                        </div> */}

                        <Hamburger />
                    </div>

                    <div className="hidden place-items-end xl:grid">
                        <BookConsultation />
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
