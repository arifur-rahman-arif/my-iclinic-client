import { navMenuList } from '@/components/Header/navMenuList';
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
    const router = useRouter();
    // Const dispatch = useDispatch();
    //
    // // Close the navigation submenus if users clicks outside the navigation menu
    // const ref = useOnclickOutside(() => {
    //     const windowWidth = window.innerWidth;
    //
    //     // Close the submenus if user is in desktop screen
    //     if (windowWidth > 1280) dispatch(closeParentSubmenus());
    // });

    return (
        <ul className="flex w-full items-center justify-end gap-9">
            {navMenuList.map((menu: NavMenuType, index) => {
                return <NavLink key={index} menu={menu} isMenuActive={router.pathname === menu.url} />;
            })}
        </ul>
    );
};

export default NavMenu;
