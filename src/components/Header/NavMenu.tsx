import { closeParentSubmenus, NavbarInterface } from '@/features/navbar/navbarSlice';
import { NavMenuType } from '@/features/navbar/navMenuList';
import { useOnclickOutside } from '@/hooks';

import { AppState } from '@/store';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import NavLink from './NavLink';

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = (): JSX.Element => {
    const { navMenus } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const router = useRouter();
    const dispatch = useDispatch();

    // Close the navigation submenus if users clicks outside the navigation menu
    const ref = useOnclickOutside(() => {
        const windowWidth = window.innerWidth;

        // Close the submenus if user is in desktop screen
        if (windowWidth > 1280) dispatch(closeParentSubmenus());
    });

    return (
        <nav className="hidden h-full w-full xl:block" ref={ref}>
            <ul className="flex h-full w-full items-center justify-end gap-8">
                {navMenus.map((menu: NavMenuType, index: number) => {
                    return (
                        <NavLink index={index} key={index} menu={menu} isMenuActive={router.pathname === menu.url} />
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMenu;
