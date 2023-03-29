import { Container } from '@/components/Container';
import ArticleMenu from '@/components/Header/ArticleMenu';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import { useGetMenuDataQuery } from '@/services/navMenuData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ContactDetails from './ContactDetails';
import NavMenu from './NavMenu';

const MobileNavbar = dynamic(() => import('./MobileNavbar/MobileNavbar'));

/**
 * Header component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (): JSX.Element => {
    const [loadMobileMenu, setLoadMobileMenu] = useState<boolean>(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const headerRef = useRef<HTMLHeadingElement | null>(null);

    // @ts-ignore
    const { data, isSuccess } = useGetMenuDataQuery();

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
                    navMenuData={isSuccess && data}
                />
            )}
            <header
                ref={headerRef}
                className="relative sticky top-0 left-0 z-[100] w-full bg-white shadow-shadow3 transition-all duration-500 xl:shadow-none"
            >
                <Container className="grid grid-cols-[auto_1fr] items-center gap-12 gap-y-4 gap-x-40 xl:py-6">
                    <Link href="/" className="self-start py-4">
                        <Image
                            src="/images/logos/logo-iclinic-desktop.png"
                            alt="My-iClinic"
                            width={154}
                            height={36}
                            quality={100}
                            priority
                        />
                    </Link>

                    <div className="hidden grid-cols-[auto_1fr] gap-y-12 xl:grid">
                        {/* Top nav links */}

                        <div className="flex items-center justify-start gap-12">
                            <ArticleMenu articles={isSuccess && data.articles} />
                            <Link
                                href=""
                                aria-label="About us"
                                className="font-mulishMedium text-[1.6rem] leading-8 text-[#51585B]"
                            >
                                About us
                            </Link>
                            <Link
                                href="/contact-us"
                                aria-label="Contact us"
                                className="font-mulishMedium text-[1.6rem] leading-8 text-[#51585B]"
                            >
                                Contact us
                            </Link>
                        </div>

                        {/* Nav contact button */}
                        <ContactDetails />

                        <NavMenu navMenuData={isSuccess && data} />
                    </div>

                    <Hamburger
                        onClick={() => {
                            setLoadMobileMenu(true);
                            setOpenMobileMenu(!openMobileMenu);
                        }}
                    />
                </Container>
            </header>
        </>
    );
};

export default Header;
