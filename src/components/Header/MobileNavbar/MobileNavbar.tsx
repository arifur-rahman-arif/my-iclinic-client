import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import Context from 'src/components/Header/Context';
import NavMenu from './NavMenu';

interface MobileNavbarProps {
    openMobileMenu: boolean;
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

/**
 * Mobile navbar component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MobileNavbar = ({ openMobileMenu, setOpenMobileMenu }: MobileNavbarProps): JSX.Element => {
    return (
        <>
            <Context>
                <div
                    className={`fixed top-0 left-0 z-[100] grid h-screen w-[95%] -translate-x-full grid-rows-[auto_1fr_auto] gap-16 bg-white p-6 shadow-shadow2 transition-all duration-500 sm:w-[85%] md:w-[40rem] xl:hidden ${
                        openMobileMenu && '!translate-x-0'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <Link href="/" className="" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                            <Image
                                src="/images/logos/logo-iclinic-desktop.png"
                                alt="My-iClinic"
                                width={154}
                                height={36}
                                quality={100}
                                priority
                            />
                        </Link>

                        <IconButton aria-label="Close navigation" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                            <BsArrowLeftCircle className="text-[2.5rem]" />
                        </IconButton>
                    </div>

                    <NavMenu setOpenMobileMenu={setOpenMobileMenu} openMobileMenu={openMobileMenu} />

                    <div className="grid place-items-end justify-self-center">
                        <BookConsultation />
                    </div>
                </div>
            </Context>

            {/* The overlay */}
            <div
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                className={`fixed top-0 left-0 z-[99] h-screen w-full bg-black transition-all duration-500 xl:hidden ${
                    openMobileMenu ? 'pointer-events-auto opacity-50' : 'pointer-events-none opacity-0'
                } `}
            ></div>
        </>
    );
};

export default MobileNavbar;
