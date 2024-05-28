// import { consultantCardList } from '@/components/Card';
// import { ConsultantCardInterface } from '@/components/Card/ConsultantCard';
import SubMenu from '@/components/Header/SubMenus/SubMenu';
// import Image from 'next/image';
import Link from 'next/link';
import { NextRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { NavMenuType } from './navMenuList';
import EyeTreatments from './SubMenus/EyeTreatments/EyeTreatments';
// import OurSpecialists from './SubMenus/OurSpecialists/OurSpecialists';

export interface NavLinkInterface {
    menu: NavMenuType;
    router: NextRouter;
}

/**
 * Navigation link component
 *
 * @param {number} index
 * @param {NavMenuType} menu
 * @returns {JSX.Element}
 * @constructor
 */
const NavLink = ({ menu, router }: NavLinkInterface): JSX.Element => {
    return (
        <li
            className={`group/menu-item parent-menu relative grid h-full place-items-center rounded-tl-[1rem] rounded-tr-[1rem] px-7 transition-all duration-1000 ${
                menu.submenu && 'hover:bg-[#003E79]'
            }`}
        >
            {/* Parent menus */}
            <ParentMenuItem router={router} menu={menu} />

            {/* Submenus */}
            {menu.submenu?.length && (
                <>
                    {menu.slug === 'cataract' && (
                        <SubMenu
                            router={router}
                            submenu={menu.submenu}
                            className="group-hover/menu-item:max-h-[50rem]"
                        />
                    )}

                    {menu.slug === 'laser-eye-surgery' && (
                        <SubMenu
                            className="min-w-[45rem] overflow-y-auto group-hover/menu-item:max-h-[55rem]"
                            router={router}
                            submenu={menu.submenu.slice(1)}
                        />
                    )}

                    {menu.slug === 'eye-treatments' && (
                        <EyeTreatments
                            router={router}
                            soloLinks={[
                                {
                                    name: 'Glaucoma Care clinic',
                                    url: '/glaucoma-treatment'
                                },
                                {
                                    name: 'Eyelid Surgery',
                                    url: '/eyelid-surgery-london'
                                },
                                {
                                    name: 'Macular degeneration',
                                    url: '/macular-degeneration'
                                },
                                {
                                    name: 'Retina treatments',
                                    url: '/retina-treatments'
                                }
                            ]}
                        />
                    )}

                    {menu.slug === 'pricing-and-financing' && (
                        <EyeTreatments
                            router={router}
                            className="-translate-x-[calc(100%_-_16.5rem)]"
                            submenus={[
                                {
                                    active: true,
                                    name: 'Consultation prices'
                                },
                                {
                                    name: 'Insurance partners & finance'
                                },
                                {
                                    name: 'Treatment prices'
                                }
                            ]}
                            innerMenuList={[
                                {
                                    active: true,
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
                                    menus: [
                                        {
                                            name: 'Cataract surgery cost',
                                            url: '/cataract/price',
                                            slug: 'cataract-surgery-cost',
                                            metaDescription: 'Save you an average of £1,000 for your cataract treatment'
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
                                            metaDescription: 'Myopia control management & treatment cost London'
                                        },
                                        {
                                            name: 'YAG laser capsulotomy surgery cost',
                                            url: '/cataract/yag-capsulotomy-for-pco/price',
                                            slug: 'yag-capsulotomy-for-pco',
                                            metaDescription: 'A comprehensive consultation and YAG laser treatment'
                                        }
                                    ]
                                }
                            ]}
                        />
                    )}

                    {/* {menu.slug === 'our-specialists' && <OurSpecialists router={router} />} */}
                </>
            )}
        </li>
    );
};

export default NavLink;

/**
 * Parent menu item component
 *
 * @param {NavMenuType} menu
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const ParentMenuItem = ({ menu, router }: { menu: NavMenuType; router: NextRouter }): JSX.Element => {
    const isMenuActive = router.pathname === menu.url;

    return (
        <span className="relative flex items-center justify-center gap-2">
            {menu.submenu ? (
                <>
                    {menu.slug === 'laser-eye-surgery' ||
                    menu.slug === 'cataract' ||
                    menu.slug === 'pricing-and-financing' ? (
                        <>
                            <Link
                                href={menu.url}
                                title={`${menu.name || ''}`}
                                className={twMerge(
                                    'font-mulishBold text-[1.6rem] leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-white',
                                    isMenuActive && 'text-[#9B9FA1]'
                                )}
                                prefetch={false}
                            >
                                {menu.name}
                            </Link>

                            {isMenuActive && (
                                <span className="absolute left-0 top-full h-1 w-full translate-y-4 rounded-full bg-[#9B9FA1]"></span>
                            )}
                        </>
                    ) : (
                        <span
                            className={twMerge(
                                'font-mulishBold text-[1.6rem] leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-white',
                                isMenuActive && 'text-[#9B9FA1]'
                            )}
                        >
                            {menu.name}
                        </span>
                    )}

                    <FaAngleDown
                        className={twMerge(
                            'h-[1.4rem] w-[1.4rem] translate-y-[0.1rem] -rotate-90 fill-heading transition-all duration-1000 group-hover/menu-item:rotate-0 group-hover/menu-item:fill-white',
                            isMenuActive && 'fill-[#9B9FA1]'
                        )}
                    />
                </>
            ) : (
                <Link
                    href={menu.url}
                    title={menu.name as string}
                    className={`relative cursor-pointer font-mulishBold text-[1.6rem] capitalize leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-[#9B9FA1] ${
                        isMenuActive && 'text-[#9B9FA1]'
                    }`}
                    prefetch={false}
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

// interface SpecialistMenuProps {
//     isMenuActive: boolean;
// }

/**
 * SpecialistMenu component displays a rotating menu item showcasing different specialists.
 *
 * @param {Object} props - The component's properties.
 * @param {boolean} props.isMenuActive - Indicates whether the menu item is active or not.
 *
 * @returns {JSX.Element} The SpecialistMenu component.
 */
// const SpecialistMenu = ({ isMenuActive }: SpecialistMenuProps): JSX.Element => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [activeSpecialist, setActiveSpecialist] = useState<ConsultantCardInterface>(consultantCardList[0]);
//     const [menu, setMenu] = useState<NavMenuType>({
//         name: 'Our Specialists',
//         url: '/our-specialists',
//         slug: 'our-specialists',
//         subMenuOpen: false
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Increment the activeIndex and loop back to 0 if it exceeds the length
//             setActiveIndex((prevIndex) => (prevIndex < consultantCardList.length - 1 ? prevIndex + 1 : 0));
//         }, 4000);

//         // Clear the interval when the component unmounts
//         return () => clearInterval(interval);
//     }, [consultantCardList]);

//     useEffect(() => {
//         // Update the activeSpecialist whenever activeIndex changes
//         const currentSpecialist = consultantCardList[activeIndex];

//         setActiveSpecialist(currentSpecialist);
//         setMenu((prevState) => {
//             return {
//                 ...prevState,
//                 url: currentSpecialist.url
//             };
//         });
//     }, [activeIndex, consultantCardList]);

//     return (
//         <Link href={menu.url} className="hidden cursor-pointer items-center justify-center gap-3 xl:flex">
//             <Image
//                 src={activeSpecialist.image}
//                 alt={activeSpecialist.name}
//                 width={50}
//                 height={50}
//                 unoptimized
//                 className="h-20 w-20 overflow-hidden rounded-full object-cover"
//             />
//             <span className="relative flex items-center justify-center gap-2">
//                 <span
//                     className={twMerge(
//                         'font-mulishBold text-[1.6rem] capitalize leading-8 text-heading transition-all duration-500 group-hover/menu-item:text-white',
//                         isMenuActive && 'text-[#9B9FA1]'
//                     )}
//                 >
//                     Specialists
//                 </span>

//                 <FaAngleDown
//                     className={twMerge(
//                         'h-[1.4rem] w-[1.4rem] translate-y-[0.1rem] -rotate-90 fill-heading transition-all duration-1000 group-hover/menu-item:rotate-0 group-hover/menu-item:fill-white',
//                         isMenuActive && 'fill-[#9B9FA1]'
//                     )}
//                 />
//             </span>
//         </Link>
//     );
// };
