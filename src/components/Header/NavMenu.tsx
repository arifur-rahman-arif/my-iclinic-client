import { navMenuList, NavMenuType } from '@/components/Header/navMenuList';
import { useRouter } from 'next/router';
import NavLink from './NavLink';

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = (): JSX.Element => {
    const router = useRouter();
    //
    // // Close the navigation submenus if users clicks outside the navigation menu
    // const ref = useOnclickOutside(() => {
    //     const windowWidth = window.innerWidth;
    //
    //     // Close the submenus if user is in desktop screen
    //     if (windowWidth > 1280) dispatch(closeParentSubmenus());
    // });

    return (
        <ul className="hidden h-full items-center justify-end xl:flex">
            {navMenuList.map((menu: NavMenuType, index) => {
                return <NavLink key={index} menu={menu} router={router} />;
            })}
        </ul>
    );
};

export default NavMenu;
