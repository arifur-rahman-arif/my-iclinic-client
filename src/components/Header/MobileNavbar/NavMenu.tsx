import ComponentLoader from '@/components/ComponentLoader';
import { AppContextInterface, AppCtx } from '@/components/Header/Context';
import { InnerAppContext, MobileNavbarContext } from '@/components/Header/MobileNavbar/MobileNavbar';
import { NavMenuType } from '@/components/Header/navMenuList';
import { Articles } from '@/components/Header/SubMenus/Articles';
import { SubMenu } from '@/components/Header/SubMenus/Cataract';
import { LinkStyle } from '@/components/Link';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Dispatch, SetStateAction, useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import EyeTreatments from '../SubMenus/EyeTreatments/EyeTreatments';
import OurSpecialists from '../SubMenus/OurSpecialists/OurSpecialists';
import PricingFinancing from '../SubMenus/PricingFinancing/PricingFinancing';

interface NavMenuProps {}

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = ({}: NavMenuProps): JSX.Element => {
    const router = useRouter();
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const innerAppCtx: InnerAppContext | null = useContext(MobileNavbarContext);

    return (
        <div className="mobile-navbar px-6">
            <ul className="grid w-full content-start justify-items-start">
                {appCtx?.navMenus.map((menu: NavMenuType, index) => (
                    <li
                        key={index}
                        className="leading-16 min-h-16 block w-full cursor-pointer py-6"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            menu.submenu && appCtx?.toggleSubmenu({ index });
                        }}
                    >
                        {/* Parent menus */}
                        <ParentMenuItem
                            menu={menu}
                            router={router}
                            setOpenMobileMenu={innerAppCtx?.setOpenMobileMenu}
                        />

                        {/* Submenus */}
                        {menu.submenu && (
                            <div
                                className={`mb-1 grid max-h-0 gap-4 overflow-hidden transition-all duration-500 ${
                                    menu.subMenuOpen && 'mt-8 max-h-[200rem]'
                                }`}
                            >
                                {menu.slug === 'cataract' && (
                                    <SubMenu
                                        router={router}
                                        submenu={menu.submenu}
                                        subMenuTitle="Cataract"
                                        blogsTitle="More about cataract surgery"
                                        posts={innerAppCtx?.navMenuData?.cataractPosts}
                                    />
                                )}
                                {menu.slug === 'vision-correction' && (
                                    <SubMenu
                                        router={router}
                                        submenu={menu.submenu}
                                        subMenuTitle="Vision correction"
                                        blogsTitle="More about vision correction"
                                        posts={innerAppCtx?.navMenuData?.surgeryPosts}
                                    />
                                )}
                                {menu.slug === 'eye-treatments' && (
                                    <EyeTreatments router={router} submenu={menu.submenu} />
                                )}
                                {menu.slug === 'our-specialists' && (
                                    <OurSpecialists router={router} submenu={menu.submenu} />
                                )}
                                {menu.slug === 'pricing-and-financing' && (
                                    <PricingFinancing
                                        router={router}
                                        submenu={menu.submenu}
                                        posts={innerAppCtx?.navMenuData?.iclinicPosts}
                                    />
                                )}
                                {menu.slug === 'articles' && (
                                    <div className="grid gap-12">
                                        {innerAppCtx?.navMenuData.articles ? (
                                            <Articles articlesData={innerAppCtx?.navMenuData.articles} />
                                        ) : (
                                            <ComponentLoader />
                                        )}
                                        <div className="flex items-center justify-center gap-2">
                                            <LinkStyle
                                                url="/articles"
                                                className="justify-self-center font-mulishBold !text-[1.6rem] leading-8"
                                            >
                                                View full articles lists
                                            </LinkStyle>
                                            <FaArrowRight className="h-6 w-6 translate-y-[0.1rem] fill-blue" />
                                        </div>
                                    </div>
                                )}
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
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>> | undefined;
}

/**
 * Parent menu item component
 *
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @returns {JSX.Element}
 * @constructor
 */
const ParentMenuItem = ({ menu, router, setOpenMobileMenu }: ParentMenuItemProps) => {
    const isMenuActive = router.pathname === menu.url;

    return (
        <span className="flex items-center justify-between gap-2">
            {menu.submenu ? (
                <>
                    <span
                        className={`relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
                            isMenuActive && 'text-[#9B9FA1]'
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
                        className={`h-[1.2rem] w-[1.2rem] translate-y-[0.1rem] -rotate-90 transition-all duration-500 hover:text-brand group-hover/menu-item:-rotate-90 ${
                            menu.subMenuOpen && 'rotate-0'
                        }`}
                    >
                        <path
                            d="M1 1L7 7L13 1"
                            stroke="#222D30"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`transition-all duration-500 group-hover/menu-item:!stroke-[#9B9FA1] ${
                                isMenuActive && '!stroke-[#9B9FA1]'
                            }`}
                        />
                    </svg>
                </>
            ) : (
                <Link
                    href={menu.url}
                    className={`relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
                        isMenuActive && 'text-[#9B9FA1]'
                    }`}
                    onClick={() => setOpenMobileMenu && setOpenMobileMenu(false)}
                >
                    {menu.name}

                    {isMenuActive && (
                        <span className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span>
                    )}
                </Link>
            )}
        </span>
    );
};
//
// interface SubMenuLinkProps {
//     name: ReactNode;
//     url: string;
//     router: NextRouter;
//     openMobileMenu: boolean;
//     setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
// }

//
// /**
//  * Submenu link component
//  *
//  * @param {string} linkText
//  * @param {string} url
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const SubMenuLink = ({ name, url, router, openMobileMenu, setOpenMobileMenu }: SubMenuLinkProps): JSX.Element => {
//     const isMenuActive = router.pathname === url;
//
//     return (
//         <Link
//             href={url}
//             className={`block w-full whitespace-nowrap font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 hover:text-brand ${
//                 isMenuActive && 'text-brand'
//             }`}
//             onClick={() => setOpenMobileMenu(!openMobileMenu)}
//         >
//             {name}
//         </Link>
//     );
// };
