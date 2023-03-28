import ComponentLoader from '@/components/ComponentLoader';
import MenuCta from '@/components/Header/MenuCta';
import { useGetMenuDataQuery } from '@/services/navMenuData';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { createContext, Dispatch, SetStateAction } from 'react';
import { BiLeftArrowCircle } from 'react-icons/bi';
import Context from 'src/components/Header/Context';
import NavMenu from './NavMenu';

interface MobileNavbarProps {
    openMobileMenu: boolean;
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
    navMenuData: any;
}

export interface InnerAppContext {
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
    navMenuData: any;
}

// Create a new inner context context
export const MobileNavbarContext = createContext<InnerAppContext | null>(null);

/**
 * Mobile navbar component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MobileNavbar = ({ openMobileMenu, setOpenMobileMenu, navMenuData }: MobileNavbarProps): JSX.Element => {
    return (
        <>
            <Context>
                <MobileNavbarContext.Provider value={{ setOpenMobileMenu, navMenuData }}>
                    <div
                        className={`fixed top-0 left-0 z-[101] grid max-h-screen w-full -translate-y-full grid-rows-[auto_1fr] gap-16 overflow-y-auto bg-white pt-6 shadow-shadow2 transition-all duration-500 xl:hidden ${
                            openMobileMenu && '!translate-y-0'
                        }`}
                    >
                        <div className="flex items-center justify-between px-6">
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

                            <IconButton
                                aria-label="Close navigation"
                                onClick={() => setOpenMobileMenu(!openMobileMenu)}
                                className="flex items-center justify-center gap-4"
                            >
                                <BiLeftArrowCircle className="text-[2.5rem]" />
                                <span className="font-mulishBold text-[1.4rem] leading-[2.4rem]">Back</span>
                            </IconButton>
                        </div>

                        <NavMenu />

                        <MenuCta setOpenMobileMenu={setOpenMobileMenu} />
                    </div>
                </MobileNavbarContext.Provider>
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
