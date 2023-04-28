import { Container } from '@/components/Container';
import ArticleMenu from '@/components/Header/ArticleMenu';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import { useGetMenuDataQuery } from '@/services/navMenuData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

    const router = useRouter();

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
                className="sticky top-0 left-0 z-[99] w-full bg-white shadow-md transition-all duration-500 xl:shadow-none"
            >
                <Container className="grid grid-cols-[auto_1fr] items-center gap-12 gap-y-4 gap-x-40 xl:py-12">
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
                                href="/about-us"
                                aria-label="About us"
                                className={`relative cursor-pointer font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 hover:text-[#9B9FA1] ${
                                    router.pathname === '/about-us' && 'text-[#9B9FA1]'
                                }`}
                            >
                                About us
                                {router.pathname === '/about-us' && (
                                    <span className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span>
                                )}
                            </Link>
                            <Link
                                href="/contact-us"
                                aria-label="Contact us"
                                className={`relative cursor-pointer font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 hover:text-[#9B9FA1] ${
                                    router.pathname === '/contact-us' && 'text-[#9B9FA1]'
                                }`}
                            >
                                Contact us
                                {router.pathname === '/contact-us' && (
                                    <span className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span>
                                )}
                            </Link>
                        </div>

                        {/* Nav contact button */}
                        <ContactDetails />

                        <div className="col-span-full hidden h-[0.1rem] w-full max-w-[78rem] bg-[#E6E7E8] xl:block"></div>

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
