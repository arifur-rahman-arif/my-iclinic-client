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
            name: 'About Us',
            url: '/about-us',
            slug: 'about-us',
            subMenuOpen: false,
            submenu: [
                {
                    name: 'About Us',
                    url: '/about-us',
                    slug: 'about-us',
                    metaDescription:
                        'We are a leading private laser eye clinic in North London, offering expert treatments by experienced surgeons. Trust us for clearer vision.'
                },
                {
                    name: 'Complaint',
                    url: '/complaint',
                    slug: 'complaint',
                    metaDescription:
                        "Our complaints procedure outlines the steps you need to take. We're here to help you resolve any issues you may have."
                },
                {
                    name: 'Translation Service',
                    url: '/translation-service',
                    slug: 'translation-service',
                    metaDescription: 'Understand your care journey with us'
                },
                {
                    name: 'Charity',
                    url: '/charity',
                    slug: 'charity',
                    metaDescription: 'Discover ways to make a meaningful impact through our charity initiatives.'
                }
            ]
        },
        // {
        //     name: 'Vision Correction',
        //     url: '/vision-correction',
        //     slug: 'vision-correction'
        // },
        {
            name: 'Articles',
            url: '/articles',
            slug: 'articles'
        },
        {
            name: 'Contact Us',
            url: '/contact-us',
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
