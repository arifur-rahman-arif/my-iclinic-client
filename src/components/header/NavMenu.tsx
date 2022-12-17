import { NavbarInterface, closeSubmenus } from '@/features/navbar/navbarSlice';
import { barAnimation, dotAnimation } from '@/utils/gsapFunctions';

import { AppState } from '@/store';
import NavLink from './NavLink';
import { NavMenuType } from '@/features/navbar/navMenuList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useOnclickOutside } from '@/hooks';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = (): JSX.Element => {
    const dispatch = useDispatch();

    const { navMenus } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const router = useRouter();

    // Close the navigation submenus if users clicks outside of the navigation menu
    const ref = useOnclickOutside(() => {
        const windowWidth = window.innerWidth;

        // Close the submenus if user is in desktop screen
        if (windowWidth > 1280) dispatch(closeSubmenus());
    });

    useEffect(() => {
        barAnimation();
        dotAnimation();
    });

    return (
        <nav className="hidden h-full w-full pl-[7.3rem] xl:block" ref={ref}>
            <ul className="flex h-full w-full items-center justify-end gap-10">
                {navMenus.map((menu: NavMenuType, index: number) => {
                    return (
                        <NavLink
                            index={index}
                            key={index}
                            menu={menu}
                            isMenuActive={router.pathname === menu.url}
                            router={router}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMenu;
