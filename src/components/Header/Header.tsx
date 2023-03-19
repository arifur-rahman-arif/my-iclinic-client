import { Container } from '@/components/Container';
import ContactDetails from './ContactDetails';
import Hamburger from '@/components/Header/Hamburger/Hamburger';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavMenu from './NavMenu';

const MobileNavbar = dynamic(() => import('src/components/Header/MobileNavbar/MobileNavbar'));

/**
 * Header component for the app
 * @returns {JSX.Element}
 * @constructor
 */
const Header = (): JSX.Element => {
    const [loadMobileMenu, setLoadMobileMenu] = useState<boolean>(false);
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    return (
        <>
            {loadMobileMenu && <MobileNavbar openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />}
            <header className="sticky top-0 left-0 z-[99] w-full bg-white shadow-shadow2 xl:shadow-none">
                <Container className="relative grid grid-cols-[auto_1fr] items-center gap-y-4 py-4">
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

                    {/* Nav contact details */}
                    <ContactDetails />

                    <div className="col-span-full grid hidden grid-cols-[1fr_auto] gap-8 xl:grid">
                        <NavMenu />
                        <div className="hidden place-items-end xl:grid">
                            <BookConsultation />
                        </div>
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
