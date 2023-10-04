import { Container } from '@/components/Container';
import TopBar from '@/components/Header/TopBar';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Hamburger from './Hamburger/Hamburger';
import NavMenu from './NavMenu';

const MobileNavbar = dynamic(() => import('./MobileNavbar/MobileNavbar'));
const Search = dynamic(() => import('./Search'), {
    ssr: false
});

/**
 * Header component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (): JSX.Element => {
    const [loadMobileMenu, setLoadMobileMenu] = useState<boolean>(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const [openSearch, setOpenSearch] = useState(false);

    useEffect(() => {
        // When user start scrolling add a shadow to it
        window.addEventListener('scroll', () => {
            if (!headerRef.current) return;

            const clientRect = headerRef.current?.getBoundingClientRect();

            if (!clientRect) return;

            const activePosition = clientRect?.height - 80;

            const currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition > activePosition) {
                headerRef.current?.classList.add('add-shadow');
            } else {
                headerRef.current?.classList.remove('add-shadow');
            }
        });
    }, []);

    return (
        <>
            {loadMobileMenu && (
                <MobileNavbar
                    openMobileMenu={openMobileMenu}
                    setOpenMobileMenu={setOpenMobileMenu}
                    setOpenSearch={setOpenSearch}
                />
            )}
            <header
                ref={headerRef}
                className="sticky top-0 left-0 z-[99] mb-8 w-full bg-white shadow-md transition-all duration-500 xl:mb-12 xl:shadow-none"
            >
                <TopBar setOpenSearch={setOpenSearch} />

                <Container className={`mt-4 grid grid-cols-[auto_1fr] items-center gap-x-24`}>
                    <Link href="/" className="self-start py-4">
                        <Image
                            src="/images/logos/logo-iclinic-desktop.png"
                            alt="My-iClinic"
                            width={200}
                            height={90}
                            quality={100}
                            priority
                            className="max-h-[3.6rem] max-w-[15.9rem] object-contain xl:max-h-full xl:max-w-full"
                        />
                    </Link>

                    <NavMenu />

                    {/* Search icon */}
                    <div className="flex items-center justify-center gap-12 justify-self-end xl:hidden">
                        <button type="button" onClick={() => setOpenSearch(true)} className="xl:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z"
                                    stroke="#051821"
                                    strokeOpacity="0.9"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21.5004 21.0004L17.1504 16.6504"
                                    stroke="#051821"
                                    strokeOpacity="0.9"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <Hamburger
                            onClick={() => {
                                setLoadMobileMenu(true);
                                setOpenMobileMenu(!openMobileMenu);
                            }}
                        />
                    </div>
                </Container>
            </header>

            {openSearch && <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />}
        </>
    );
};

export default Header;
