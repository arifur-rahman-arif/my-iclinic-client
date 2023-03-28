import { navMenuList, NavMenuType } from '@/components/Header/navMenuList';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface AppContextInterface {
    navMenus: NavMenuType[];
    setNavMenus: Dispatch<SetStateAction<NavMenuType[]>>;
    toggleSubmenu: ({ index }: { index: number }) => void;
}

interface PropInterface {
    children: Array<JSX.Element> | JSX.Element;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

/**
 * Context of a navigation menu for mobile devices
 *
 * @param {Array<JSX.Element> | JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
const Context = ({ children }: PropInterface): JSX.Element => {
    const [navMenus, setNavMenus] = useState<NavMenuType[]>([
        ...navMenuList,
        {
            name: 'Articles',
            url: '/articles',
            slug: 'articles',
            subMenuOpen: false,
            submenu: []
        },
        {
            name: 'About Us',
            url: '#',
            slug: 'about-us'
        },
        {
            name: 'Contact Us',
            url: '#',
            slug: 'contact-us'
        }
    ]);

    /**
     * Toggle the parent submenus
     * @param {number} index
     */
    const toggleSubmenu = ({ index }: { index: number }) => {
        setNavMenus((currentMenus) => {
            return currentMenus.map((menu, i) => {
                if (index === i) {
                    // Open the clicked submenu
                    return { ...menu, subMenuOpen: !menu.subMenuOpen };
                } else if (menu.submenu) {
                    // Close all other submenus
                    return { ...menu, subMenuOpen: false };
                }
                return menu;
            });
        });
    };

    return <AppCtx.Provider value={{ navMenus, setNavMenus, toggleSubmenu }}>{children}</AppCtx.Provider>;
};

export default Context;
