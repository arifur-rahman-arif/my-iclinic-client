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

            const windowWidth = window.innerWidth;

            if (windowWidth < 1280) {
                state.navMenus = closeOtherSubmenus({
                    navMenus: state.navMenus,
                    menuSlug,
                    isParentMenu: isParentMenu || false
                });
            }
            state.navMenus = openCurrentSubmenu(state.navMenus, menuSlug);
        },
        closeSubmenus: (state: NavbarInterface) => {
            state.navMenus = closeAllSubmenu(state.navMenus);
        },
        openSubmenu: (state: NavbarInterface, action: PayloadAction<{ menuSlug: string }>) => {
            const { menuSlug } = action.payload;
            state.navMenus = openCurrentSubmenu(state.navMenus, menuSlug);
        },
        closeSubmenu: (state: NavbarInterface, action: PayloadAction<{ menuSlug: string }>) => {
            const { menuSlug } = action.payload;
            state.navMenus = closeCurrentSubmenu(state.navMenus, menuSlug);
        },
        closeParentSubmenus: (state: NavbarInterface) => {
            state.navMenus = state.navMenus.map((menu) => {
                menu.subMenuOpen = false;
                return menu;
            });
        }
    }
});

/**
 * Open the submenu when clicked by changing the menu state
 *
 * @param {NavMenuType[]} navMenus
 * @param {string} menuSlug
 * @param {string} device
 * @returns {NavMenuType[]}
 */
const openCurrentSubmenu = (
    navMenus: NavMenuType[],
    menuSlug: string,
    device: 'mobile' | 'desktop' = 'mobile'
): NavMenuType[] => {
    const windowWidth = window.innerWidth;

    navMenus.forEach((navMenu, index) => {
        if (navMenu.slug === menuSlug) {
            return (navMenus[index].subMenuOpen = true);
        } else {
            if (windowWidth >= 1280) {
                if (navMenus[index].parentSubmenu) navMenus[index].subMenuOpen = false;
            }
            navMenu.submenu ? openCurrentSubmenu(navMenu.submenu, menuSlug) : '';
        }
    });

    return navMenus;
};

/**
 * Close current submenu
 *
 * @param {NavMenuType[]} navMenus
 * @param {string} menuSlug
 * @returns {*}  {NavMenuType[]}
 */
const closeCurrentSubmenu = (navMenus: NavMenuType[], menuSlug: string): NavMenuType[] => {
    navMenus.forEach((navMenu, index) => {
        if (navMenu.slug === menuSlug) {
            return (navMenus[index].subMenuOpen = false);
        } else {
            navMenu.submenu ? closeCurrentSubmenu(navMenu.submenu, menuSlug) : '';
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

export const { toggleNavbar, toggleSubmenu, closeSubmenus, openSubmenu, closeSubmenu, closeParentSubmenus } =
    navbarSlice.actions;
export default navbarSlice.reducer;
