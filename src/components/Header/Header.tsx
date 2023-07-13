import { Container } from '@/components/Container';
import ConsultationDropdown from '@/components/Header/ConsultationDropdown';
import PhoneCall from '@/components/Header/PhoneCall';
import AboutUs from './AboutUs';
import ArticleMenu from './ArticleMenu';
import Hamburger from './Hamburger/Hamburger';
import { useGetMenuDataQuery } from '@/services/navMenuData';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import ContactDetails from './ContactDetails';
import NavMenu from './NavMenu';
import { twMerge } from 'tailwind-merge';

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
    const [scrollDirection, setScrollDirection] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [openSearch, setOpenSearch] = useState(false);

    /**
     * handleScroll method
     * @description stores the current scroll position that gets triggered by the event handler initiated in useEffect
     */
    const handleScroll = () => {
        const position = window.scrollY;
        if (position < scrollPosition) {
            setScrollDirection(true);
        } else {
            setScrollDirection(false);
        }
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]); // https://stackoverflow.com/questions/55817787/access-state-from-event-handler-created-within-react-js-useeffect-hook

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

                    <div
                        className={twMerge(
                            scrollDirection || scrollPosition < 100 ? 'grid-cols-[auto_1fr] gap-y-12' : 'grid-cols-6',
                            'hidden xl:grid'
                        )}
                    >
                        {scrollDirection || scrollPosition < 100 ? (
                            <>
                                {/* Top nav links */}
                                <div className="flex items-center justify-start gap-12">
                                    <ArticleMenu articles={isSuccess && data.articles} />

                                    <AboutUs />

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

                                    <PhoneCall />

                                    <button type="button" onClick={() => setOpenSearch(true)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z"
                                                stroke="#061014"
                                                strokeOpacity="0.9"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21.5004 21.0004L17.1504 16.6504"
                                                stroke="#061014"
                                                strokeOpacity="0.9"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {/* Nav contact button */}
                                <ContactDetails />

                                <div className="col-span-full hidden h-[0.1rem] w-full max-w-[78rem] bg-[#E6E7E8] xl:block"></div>

                                <NavMenu navMenuData={isSuccess && data} />
                            </>
                        ) : (
                            <>
                                <div className="col-span-5">
                                    <NavMenu navMenuData={isSuccess && data} />
                                </div>

                                <ConsultationDropdown setOpenSearch={setOpenSearch} />
                            </>
                        )}
                    </div>

                    {/* Search Icon */}
                    <div className="flex items-center justify-end gap-12">
                        <button type="button" className="xl:hidden" onClick={() => setOpenSearch(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M11.5 19C15.9183 19 19.5 15.4183 19.5 11C19.5 6.58172 15.9183 3 11.5 3C7.08172 3 3.5 6.58172 3.5 11C3.5 15.4183 7.08172 19 11.5 19Z"
                                    stroke="#061014"
                                    strokeOpacity="0.9"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21.5004 21.0004L17.1504 16.6504"
                                    stroke="#061014"
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

            <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
        </>
    );
};

export default Header;
