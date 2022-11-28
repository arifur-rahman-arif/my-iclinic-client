import NavLink from '@/components/header/NavLink';
import { navMenuList, NavMenuType } from '@/components/header/navMenuLIst';

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = (): JSX.Element => {
    //    Const router = useRouter();

    return (
        <nav className="h-full w-full pl-[7.3rem]">
            <ul className="flex h-full w-full items-center justify-center gap-10">
                {navMenuList.map((menu: NavMenuType, index: number) => (
                    <NavLink key={index} menu={menu} />
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;
