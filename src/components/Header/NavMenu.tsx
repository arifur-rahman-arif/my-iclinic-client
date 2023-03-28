import { navMenuList, NavMenuType } from '@/components/Header/navMenuList';
import { useRouter } from 'next/router';
import NavLink from './NavLink';

interface NavMenuProps {
    navMenuData: any;
}

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = ({ navMenuData }: NavMenuProps): JSX.Element => {
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
        <ul className="col-span-full flex h-24 items-center gap-12">
            {navMenuList.map((menu: NavMenuType, index) => {
                return <NavLink key={index} menu={menu} router={router} navMenuData={navMenuData} />;
            })}
        </ul>
    );
};

export default NavMenu;
