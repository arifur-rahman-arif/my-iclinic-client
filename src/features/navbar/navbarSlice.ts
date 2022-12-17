import { navMenuList, NavMenuType } from '@/features/navbar/navMenuList';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavbarPosition {
    top: boolean;
    left: boolean;
    right: boolean;
    bottom: boolean;
}

export type Anchor = 'top' | 'left' | 'bottom' | 'right';
export const anchorPosition: Anchor = 'left';

export interface NavbarInterface {
    navbarPositionState: NavbarPosition;
    navMenus: NavMenuType[];
}

const initialState: NavbarInterface = {
    navbarPositionState: {
        top: false,
        left: false,
        bottom: false,
        right: false
    },
    navMenus: navMenuList
};

const navbarSlice = createSlice({
    name: 'navbarSlice',
    initialState,
    reducers: {
        toggleNavbar: (state: NavbarInterface, action: PayloadAction<boolean>) => {
            state.navbarPositionState[anchorPosition] = action.payload;
        },
        toggleSubmenu: (
            state: NavbarInterface,
            action: PayloadAction<{ menuSlug: string; menu?: NavMenuType; isParentMenu?: boolean }>
        ) => {
            const { menuSlug, isParentMenu } = action.payload;

            state.navMenus = closeOtherSubmenus({
                navMenus: state.navMenus,
                menuSlug,
                isParentMenu: isParentMenu || false
            });
            state.navMenus = openCurrentSubmenu(state.navMenus, menuSlug);
        },
        closeSubmenus: (state: NavbarInterface) => {
            state.navMenus = closeAllSubmenu(state.navMenus);
        }
    }
});

/**
 * Open the submenu when clicked by changing the menu state
 *
 * @param {NavMenuType[]} navMenus
 * @param {string} menuSlug
 * @returns {*}  {NavMenuType[]}
 */
const openCurrentSubmenu = (navMenus: NavMenuType[], menuSlug: string): NavMenuType[] => {
    navMenus.forEach((navMenu, index) => {
        if (navMenu.slug === menuSlug) {
            return (navMenus[index].subMenuOpen = !navMenus[index].subMenuOpen);
        } else {
            navMenu.submenu ? openCurrentSubmenu(navMenu.submenu, menuSlug) : '';
        }
    });

    return navMenus;
};

/**
 * Close all other submenus & it's children if another parent menu is opened.
 *
 * @param {{navMenus: NavMenuType[], menuSlug: string, isParentMenu: boolean}} props
 * @returns {NavMenuType[]}
 */
const closeOtherSubmenus = (props: {
    navMenus: NavMenuType[];
    menuSlug: string;
    isParentMenu: boolean;
}): NavMenuType[] => {
    const { navMenus, menuSlug, isParentMenu } = props;

    // If menu is a parent menu then don't modify the menu state & return the unchanged menu state
    if (!isParentMenu) return navMenus;

    navMenus.forEach((navMenu, index) => {
        if (navMenu.submenu) {
            closeOtherSubmenus({
                navMenus: navMenu.submenu,
                menuSlug,
                isParentMenu
            });
        }

        if (navMenu.slug !== menuSlug) {
            return (navMenus[index].subMenuOpen = false);
        }
    });

    return navMenus;
};

/**
 * Close all te submenu if a menu link is clicked
 *
 * @param {NavMenuType[]} navMenus
 * @returns {*}  {NavMenuType[]}
 */
const closeAllSubmenu = (navMenus: NavMenuType[]): NavMenuType[] => {
    navMenus.forEach((navMenu, index) => {
        navMenus[index].subMenuOpen = false;
        if (navMenu.submenu) closeAllSubmenu(navMenu.submenu);
    });

    return navMenus;
};

export const { toggleNavbar, toggleSubmenu, closeSubmenus } = navbarSlice.actions;
export default navbarSlice.reducer;
