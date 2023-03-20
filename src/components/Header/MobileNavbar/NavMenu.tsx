import { AppContextInterface, AppCtx } from '@/components/Header/Context';
import { NavMenuType } from '@/components/Header/navMenuList';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Dispatch, ReactNode, SetStateAction, useContext } from 'react';

interface NavMenuProps {
    openMobileMenu: boolean;
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = ({ openMobileMenu, setOpenMobileMenu }: NavMenuProps): JSX.Element => {
    const router = useRouter();
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    //
    // // Close the navigation submenus if users clicks outside the navigation menu
    // const ref = useOnclickOutside(() => {
    //     const windowWidth = window.innerWidth;
    //
    //     // Close the submenus if user is in desktop screen
    //     if (windowWidth > 1280) dispatch(closeParentSubmenus());
    // });

    return (
        <div className="mobile-navbar overflow-y-scroll">
            <ul className="grid w-full content-start justify-items-start">
                {appCtx?.navMenus.map((menu: NavMenuType, index) => (
                    <li
                        key={index}
                        className="leading-16 min-h-16 block w-full cursor-pointer py-4"
                        onClick={() => {
                            menu.submenu?.length && appCtx?.toggleSubmenu({ index });
                        }}
                    >
                        {/* Parent menus */}
                        <ParentMenuItem
                            menu={menu}
                            router={router}
                            openMobileMenu={openMobileMenu}
                            setOpenMobileMenu={setOpenMobileMenu}
                        />

                        {/* Submenus */}
                        {menu.submenu?.length && (
                            <div
                                className={`mb-1 grid max-h-0 gap-4 overflow-hidden pl-4 transition-all duration-500 ${
                                    menu.subMenuOpen && 'mt-8 max-h-[200rem]'
                                }`}
                            >
                                {menu.submenu.map((item, index) => (
                                    <div key={index}>
                                        {!item.submenu ? (
                                            <SubMenuLink
                                                {...item}
                                                router={router}
                                                openMobileMenu={openMobileMenu}
                                                setOpenMobileMenu={setOpenMobileMenu}
                                            />
                                        ) : (
                                            <div className="w-full">
                                                <span key={index} className="font-mulishBold text-[1.6rem] leading-8">
                                                    {item.name}
                                                </span>
                                                <div className="mt-4 flex w-full flex-col items-start justify-start gap-6 pl-4">
                                                    {item.submenu?.map((item, index) => (
                                                        <SubMenuLink
                                                            key={index}
                                                            {...item}
                                                            router={router}
                                                            openMobileMenu={openMobileMenu}
                                                            setOpenMobileMenu={setOpenMobileMenu}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavMenu;

interface ParentMenuItemProps {
    menu: NavMenuType;
    router: NextRouter;
    openMobileMenu: boolean;
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

/**
 * Parent menu item component
 *
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @returns {JSX.Element}
 * @constructor
 */
const ParentMenuItem = ({ menu, router, openMobileMenu, setOpenMobileMenu }: ParentMenuItemProps) => {
    const isMenuActive = router.pathname === menu.url;

    return (
        <span className="flex items-center justify-start gap-2">
            {menu.submenu ? (
                <>
                    <span
                        className={`font-mulishBold text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-brand ${
                            isMenuActive && 'text-brand'
                        }`}
                    >
                        {menu.name}
                    </span>

                    <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[1.2rem] w-[1.2rem] translate-y-[0.1rem] transition-all duration-500 hover:text-brand group-hover/menu-item:-rotate-90"
                    >
                        <path
                            d="M1 1L7 7L13 1"
                            stroke="#222D30"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-all duration-500 group-hover/menu-item:!stroke-brand ${
                                isMenuActive && '!stroke-brand'
                            }`}
                        />
                    </svg>
                </>
            ) : (
                <Link
                    href={menu.url}
                    className={`font-mulishBold text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-brand ${
                        isMenuActive && 'text-brand'
                    }`}
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                >
                    {menu.name}
                </Link>
            )}
        </span>
    );
};

interface SubMenuLinkProps {
    name: ReactNode;
    url: string;
    router: NextRouter;
    openMobileMenu: boolean;
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

/**
 * Submenu link component
 *
 * @param {string} linkText
 * @param {string} url
 * @returns {JSX.Element}
 * @constructor
 */
const SubMenuLink = ({ name, url, router, openMobileMenu, setOpenMobileMenu }: SubMenuLinkProps): JSX.Element => {
    const isMenuActive = router.pathname === url;

    return (
        <Link
            href={url}
            className={`block w-full whitespace-nowrap font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 hover:text-brand ${
                isMenuActive && 'text-brand'
            }`}
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
            {name}
        </Link>
    );
};
