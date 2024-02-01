import { AppContextInterface, AppCtx } from '@/components/Header/Context';
import { NavMenuType } from '@/components/Header/navMenuList';
import MobileEyeTreatments from '@/components/Header/SubMenus/MobileEyeTreatments';
import OurSpecialistsMobile from '@/components/Header/SubMenus/OurSpecialists/OurSpecialistsMobile';
import SubMenuLink from '@/components/Header/SubMenus/SubMenuLink';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useContext } from 'react';

interface NavMenuProps {
    setOpenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

/**
 * Navigation menu component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NavMenu = ({ setOpenMobileMenu }: NavMenuProps): JSX.Element => {
    const router = useRouter();
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    // const innerAppCtx: InnerAppContext | null = useContext(MobileNavbarContext);

    return (
        <div className="px-6">
            <ul className="grid w-full content-start justify-items-start">
                {appCtx?.navMenus.map((menu: NavMenuType, index) => (
                    <li key={index} className="leading-16 block w-full cursor-pointer">
                        <ParentMenuItem
                            menu={menu}
                            router={router}
                            setOpenMobileMenu={setOpenMobileMenu}
                            index={index}
                            appCtx={appCtx}
                        />

                        {/* Submenus */}
                        {menu.submenu && (
                            <div
                                className={`grid max-h-0 gap-4 overflow-hidden transition-all duration-1000 ${
                                    menu.subMenuOpen && 'max-h-[120rem]'
                                }`}
                            >
                                {menu.slug === 'cataract' && (
                                    <div className="mt-4 grid">
                                        {menu.submenu?.map((menu, i) => (
                                            <SubMenuLink
                                                {...menu}
                                                isActive={router.pathname === menu.url}
                                                key={i}
                                                className="first:pt-8 last:pb-8"
                                                setOpenMobileMenu={setOpenMobileMenu}
                                            />
                                        ))}
                                    </div>
                                )}

                                {menu.slug === 'laser-eye-surgery' && (
                                    <div className="mt-4 grid">
                                        {menu.submenu?.map((menu, i) => (
                                            <SubMenuLink
                                                {...menu}
                                                isActive={router.pathname === menu.url}
                                                key={i}
                                                className="first:pt-8 last:pb-8"
                                                setOpenMobileMenu={setOpenMobileMenu}
                                            />
                                        ))}
                                    </div>
                                )}
                                {menu.slug === 'eye-treatments' && (
                                    <MobileEyeTreatments
                                        router={router}
                                        setOpenMobileMenu={setOpenMobileMenu}
                                        soloLinks={[
                                            {
                                                name: 'Retina treatments',
                                                url: '/retina-treatments'
                                            }
                                        ]}
                                    />
                                )}

                                {menu.slug === 'pricing-and-financing' && (
                                    <MobileEyeTreatments
                                        setOpenMobileMenu={setOpenMobileMenu}
                                        router={router}
                                        submenus={[
                                            {
                                                active: true,
                                                name: 'Consultation prices',
                                                menus: [
                                                    {
                                                        name: 'Our prices',
                                                        url: '/pricing-and-financing/our-prices',
                                                        slug: 'pricing-and-financing/our-prices',
                                                        metaDescription: 'Our vision treatment prices'
                                                    },
                                                    {
                                                        name: 'Financing your treatment',
                                                        url: '/pricing-and-financing/financing-your-treatment',
                                                        slug: 'pricing-and-financing/financing-your-treatment',
                                                        metaDescription: 'Tailored plans to suit your budget'
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Insurance partners & finance',
                                                menus: [
                                                    {
                                                        name: 'Our health insurance partners',
                                                        url: '/pricing-and-financing/financing-your-treatment#insurance',
                                                        slug: 'our-health-insurance-partners',
                                                        metaDescription: 'For the insured patients'
                                                    },
                                                    {
                                                        name: 'Finance calculator',
                                                        url: '/pricing-and-financing/financing-your-treatment#calculator',
                                                        slug: 'our-health-insurance-partners',
                                                        metaDescription: 'Spread the cost to fit your budget'
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Treatment prices',
                                                menus: [
                                                    {
                                                        name: 'Cataract surgery cost',
                                                        url: '/cataract/price',
                                                        slug: 'cataract-surgery-cost',
                                                        metaDescription:
                                                            'Save you an average of £1,000 for your cataract treatment'
                                                    },
                                                    {
                                                        name: 'ReLEx SMILE treatments cost',
                                                        url: '/relex-smile-london/price',
                                                        slug: 'relex-smile-treatments-cost',
                                                        metaDescription:
                                                            'ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments.'
                                                    },
                                                    {
                                                        name: 'Presbyond treatments cost',
                                                        url: '/presbyond-london/price',
                                                        slug: 'presbyond-treatments-cost',
                                                        metaDescription: 'Save an average of £1,000'
                                                    },
                                                    {
                                                        name: 'Glaucoma surgery cost',
                                                        url: '/glaucoma-treatment/price',
                                                        slug: 'glaucoma-surgery-cost',
                                                        metaDescription: 'Glaucoma treatment and management cost London'
                                                    },
                                                    {
                                                        name: 'Myopia Treatment cost',
                                                        url: '/myopia/price',
                                                        slug: 'myopia-treatment-cost',
                                                        metaDescription:
                                                            'Myopia control management & treatment cost London'
                                                    },
                                                    {
                                                        name: 'YAG laser capsulotomy surgery cost',
                                                        url: '/cataract/yag-capsulotomy-for-pco/price',
                                                        slug: 'yag-capsulotomy-for-pco',
                                                        metaDescription:
                                                            'A comprehensive consultation and YAG laser treatment'
                                                    }
                                                ]
                                            }
                                        ]}
                                    />
                                )}

                                {menu.slug === 'about-us' && (
                                    <div className="mt-4 grid">
                                        {menu.submenu?.map((menu, i) => (
                                            <SubMenuLink
                                                {...menu}
                                                isActive={router.pathname === menu.url}
                                                key={i}
                                                className="first:pt-8 last:pb-8"
                                                setOpenMobileMenu={setOpenMobileMenu}
                                            />
                                        ))}
                                    </div>
                                )}

                                {menu.slug === 'our-specialists' && (
                                    <OurSpecialistsMobile router={router} setOpenMobileMenu={setOpenMobileMenu} />
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
    appCtx: AppContextInterface;
    index: number;
}

/**
 * Parent menu item component
 *
 * @param {NavMenuType} menu
 * @param {NextRouter} router
 * @param {Dispatch<SetStateAction<boolean>> | undefined} setOpenMobileMenu
 * @param {AppContextInterface} appCtx
 * @param {number} index
 * @returns {JSX.Element}
 * @constructor
 */
const ParentMenuItem = ({ menu, router, setOpenMobileMenu, appCtx, index }: ParentMenuItemProps): JSX.Element => {
    const isMenuActive = router.pathname === menu.url;

    return (
        <span
            className="flex items-center justify-between gap-2 py-6"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                menu.submenu && appCtx?.toggleSubmenu({ index });
            }}
        >
            {menu.submenu ? (
                <>
                    <span
                        className={`font-mulishBold text-[1.6rem] capitalize leading-8 ${
                            isMenuActive ? 'text-[#09F]' : 'text-white'
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
                            stroke="#fff"
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
                    className={`relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 ${
                        isMenuActive ? 'text-[#09F]' : 'text-white'
                    }`}
                    onClick={() => setOpenMobileMenu && setOpenMobileMenu(false)}
                >
                    {menu.name}

                    {isMenuActive && (
                        <span
                            className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#09F]"></span>
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
