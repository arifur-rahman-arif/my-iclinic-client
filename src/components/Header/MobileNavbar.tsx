import NavLink from '@/components/Header/NavLink';
import { anchorPosition, NavbarInterface, toggleNavbar } from '@/features/navbar/navbarSlice';
import { NavMenuType } from '@/features/navbar/navMenuList';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { AppState } from '@/store';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Mobile navbar component
 * @returns {JSX.Element}
 * @constructor
 */
const MobileNavbar = (): JSX.Element => {
    const { navbarPositionState, navMenus } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const darkLayerRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <>
            <div
                className={`fixed top-0 left-0 z-[999] h-screen -translate-x-full bg-white transition-all duration-[400] ${
                    navbarPositionState[anchorPosition] ? 'translate-x-0 shadow-shadow1' : ''
                }`}
            >
                <div className="grid w-full min-w-[30rem] grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-center gap-16 py-8 max-h-screen overflow-y-auto">
                    <div className="flex w-full items-center justify-between px-8">
                        <Link
                            href="/"
                            onClick={() => {
                                dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
                            }}
                            className=""
                        >
                            <Image
                                src="/images/logos/logo-iclinic-desktop.png"
                                alt="My-iClinic"
                                width={154}
                                height={36}
                                quality={70}
                                priority
                            />
                        </Link>

                        <IconButton
                            aria-label="Close navigation"
                            onClick={() => {
                                dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
                            }}
                        >
                            <BsArrowLeftCircle className="text-[2.5rem]" />
                        </IconButton>
                    </div>

                    <ul className="flex w-full flex-col items-start justify-start gap-10 px-12">
                        {navMenus.map((menu: NavMenuType, index: number) => (
                            <NavLink
                                index={index}
                                key={index}
                                menu={menu}
                                isMenuActive={router.pathname === menu.url}
                                closeMobileMenu={true}
                            />
                        ))}
                    </ul>

                    <div className="grid place-items-center">
                        <BookConsultation />
                    </div>
                </div>
            </div>
            <div
                ref={darkLayerRef}
                onClick={() => {
                    const windowWidth = window.innerWidth;
                    if (windowWidth < 1280) dispatch(toggleNavbar(false));
                }}
                className={`fixed top-0 left-0 z-[998] h-screen w-full bg-black transition-all duration-500 ${
                    navbarPositionState[anchorPosition]
                        ? 'pointer-events-auto opacity-50'
                        : 'pointer-events-none opacity-0'
                } `}
            ></div>
        </>
    );
};

export default MobileNavbar;
