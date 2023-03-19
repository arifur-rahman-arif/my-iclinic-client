import { navMenuList } from '@/components/Header/navMenuList';
import { NavMenuType } from '@/features/navbar/navMenuList';
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
        <ul className="flex w-full items-center justify-end gap-9">
            {navMenuList.map((menu: NavMenuType, index) => {
                return <NavLink key={index} menu={menu} router={router} />;
            })}
        </ul>
    );
};

export default NavMenu;
