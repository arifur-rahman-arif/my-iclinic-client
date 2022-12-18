import { Anchor, NavbarInterface, anchorPosition, toggleNavbar } from '@/features/navbar/navbarSlice';
import { barAnimation, dotAnimation } from '@/utils/gsapFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeftCircle } from 'react-icons/bs';

import { AppState } from '@/store';
import { Button } from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from '@/components/header/NavLink';
import { NavMenuType } from '@/features/navbar/navMenuList';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';

const Drawer = dynamic(() => import('@mui/material/Drawer'));

interface MobileNavbarInstance {
    removeIndicator: () => void;
}

/**
 * Mobile navbar component
 * @returns {JSX.Element}
 * @constructor
 */
const MobileNavbar = ({ removeIndicator }: MobileNavbarInstance): JSX.Element => {
    const { navbarPositionState, navMenus } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const dispatch = useDispatch();
    const router = useRouter();

    // eslint-disable-next-line valid-jsdoc
    /**
     * Toggle the navigation state to close it or open it
     *
     * @param {Anchor} anchor
     * @param {boolean} open
     * @returns {(event: (KeyboardEvent | MouseEvent)) => void}
     */
    const toggleDrawer =
        (anchor: Anchor, open: boolean): ((event: KeyboardEvent | MouseEvent) => void) =>
        (event: KeyboardEvent | MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
        };

    useEffect(() => {
        setTimeout(() => {
            barAnimation();
            dotAnimation();
        }, 300);
    });

    return (
        <Drawer
            anchor={anchorPosition}
            open={navbarPositionState[anchorPosition]}
            onClose={toggleDrawer(anchorPosition, false)}
            className="relative xl:hidden"
        >
            <div className="grid w-full min-w-[30rem] grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-center gap-16 py-8">
                <div className="flex w-full items-center justify-between px-8">
                    <Link
                        href="/"
                        onClick={() => {
                            removeIndicator();
                            dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
                        }}
                        className=""
                    >
                        <Image
                            src="/images/logos/logo-iclinic-desktop.png"
                            alt="My-iClinic"
                            width={154}
                            height={36}
                            quality={30}
                            priority
                        />
                    </Link>

                    <IconButton
                        onClick={() => {
                            dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
                        }}
                    >
                        <BsArrowLeftCircle className="text-[2.5rem]" />
                    </IconButton>
                </div>

                <ul className="flex h-full w-full flex-col items-start justify-start gap-10 px-12">
                    {navMenus.map((menu: NavMenuType, index: number) => (
                        <NavLink
                            index={index}
                            key={index}
                            menu={menu}
                            isMenuActive={router.pathname === menu.url}
                            closeMobileMenu
                            router={router}
                        />
                    ))}
                </ul>

                <div className="grid place-items-center">
                    <Button
                        type="anchor"
                        text="Book a consultation"
                        iconPosition="left"
                        icon={
                            <Image
                                src="/images/icons/icon-calendar-outline-darker.svg"
                                alt=""
                                width={20}
                                height={20}
                                quality={2}
                                className="h-8 w-8"
                            />
                        }
                    />
                </div>
            </div>
        </Drawer>
    );
};

export default MobileNavbar;
