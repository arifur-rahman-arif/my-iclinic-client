import { NavMenuType } from '@/components/header/navMenuLIst';
import Link from 'next/link';
import { ReactElement } from 'react';

interface NavLinkInterface {
    menu: NavMenuType;
}

/**
 * Navigation link component
 * @param {NavMenuType} menu
 * @returns {React.ReactElement}
 * @constructor
 */
const NavLink = ({ menu }: NavLinkInterface): ReactElement => {
    return (
        <li>
            <Link
                className="font-mulishBold text-[1.5rem] decoration-brand underline-offset-8 transition-all hover:underline"
                href={menu.url}
            >
                {menu.name || ''}
            </Link>
        </li>
    );
};

export default NavLink;
