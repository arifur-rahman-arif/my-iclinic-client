import { Container } from '@/components/Container';
import MenuCta from '@/components/Header/MenuCta';
import Link from 'next/link';
import { NextRouter } from 'next/router';
import { FaAngleDown } from 'react-icons/fa';
import { NavMenuType } from './navMenuList';
import { SubMenu } from './SubMenus/Cataract';
import EyeTreatments from './SubMenus/EyeTreatments/EyeTreatments';
import OurSpecialists from './SubMenus/OurSpecialists/OurSpecialists';
import PricingFinancing from './SubMenus/PricingFinancing/PricingFinancing';

export interface NavLinkInterface {
    menu: NavMenuType;
    router: NextRouter;
    navMenuData: any;
}

/**
 * Navigation link component
 *
 * @param {number} index
 * @param {NavMenuType} menu
 * @returns {JSX.Element}
 * @constructor
 */
const NavLink = ({ menu, router, navMenuData }: NavLinkInterface): JSX.Element => {
    return (
        <li className="group/menu-item parent-menu block grid h-full place-items-center">
            {/* Parent menus */}
            <ParentMenuItem router={router} menu={menu} />

            {/* Submenus */}
            {menu.submenu?.length && (
                <div className="mega-submenu absolute left-0 top-full z-[99] grid max-h-0 w-screen grid-rows-[1fr_auto] overflow-y-auto overflow-x-hidden bg-white transition-all duration-1000 group-hover/menu-item:max-h-[calc(100vh_-_19rem)] group-hover/menu-item:drop-shadow-md">
                    <Container className="relative">
                        {menu.slug === 'cataract' && (
                            <SubMenu
                                router={router}
                                submenu={menu.submenu}
                                subMenuTitle="Cataract"
                                blogsTitle="More about cataract surgery"
                                posts={navMenuData?.cataractPosts}
                            />
                        )}
                        {menu.slug === 'vision-correction' && (
                            <SubMenu
                                router={router}
                                submenu={menu.submenu}
                                subMenuTitle="Vision correction"
                                blogsTitle="More about vision correction "
                                posts={navMenuData?.surgeryPosts}
                            />
                        )}
                        {menu.slug === 'eye-treatments' && <EyeTreatments router={router} submenu={menu.submenu} />}
                        {menu.slug === 'our-specialists' && <OurSpecialists router={router} submenu={menu.submenu} />}
                        {menu.slug === 'pricing-and-financing' && (
                            <PricingFinancing
                                router={router}
                                submenu={menu.submenu}
                                posts={navMenuData?.iclinicPosts}
                            />
                        )}
                    </Container>
                    <MenuCta />
                </div>
            )}
        </li>
    );
};

export default NavLink;

/**
 * Parent menu item component
 *
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @returns {JSX.Element}
 * @constructor
 */
const ParentMenuItem = ({ menu, router }: { menu: NavMenuType; router: NextRouter }) => {
    const isMenuActive = router.pathname === menu.url;

    return (
        <span className="relative flex items-center justify-center gap-2">
            {menu.submenu ? (
                <>
                    <span
                        className={`relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
                            isMenuActive && 'text-[#9B9FA1]'
                        }`}
                    >
                        {menu.name}
                        {isMenuActive && (
                            <span className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span>
                        )}
                    </span>

                    <FaAngleDown className="h-[1.2rem] w-[1.2rem] -rotate-90 fill-[#CDCFD0] transition-all duration-500 group-hover/menu-item:rotate-0 group-hover/menu-item:fill-[#9B9FA1]" />
                </>
            ) : (
                <Link
                    href={menu.url}
                    title={menu.name as string}
                    className={`relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
                        isMenuActive && 'text-[#9B9FA1]'
                    }`}
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
// /**
//  * Submenu link component
//  *
//  * @param {string} linkText
//  * @param {string} url
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const SubMenuLink = ({ name, url, router }: { name: ReactNode; url: string; router: NextRouter }): JSX.Element => {
//     const isMenuActive = router.pathname === url;
//
//     return (
//         <Link
//             href={url}
//             className={`block w-full whitespace-nowrap font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 hover:text-brand ${
//                 isMenuActive && 'text-brand'
//             }`}
//         >
//             {name}
//         </Link>
//     );
// };
