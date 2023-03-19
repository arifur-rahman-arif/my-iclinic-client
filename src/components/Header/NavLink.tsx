import {
    closeSubmenu,
    NavbarInterface,
    openSubmenu,
    toggleSubmenu as reduxToggleSubmenu
} from '@/features/navbar/navbarSlice';
import { NavMenuType } from '@/features/navbar/navMenuList';
import { useDeviceSize } from '@/hooks';
import { FaAngleRight } from 'react-icons/fa';

import { AppState } from '@/store';
import { IconButton } from '@mui/material';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleLink from './SingleLink';
import styles from './styles/menu.module.scss';

export interface NavLinkInterface {
    menu: NavMenuType;
    isMenuActive: boolean;
}

/**
 * Navigation link component
 *
 * @param {number} index
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @param {boolean | undefined} closeMobileMenu
 * @returns {JSX.Element}
 * @constructor
 */
const NavLink = ({ menu, isMenuActive }: NavLinkInterface): JSX.Element => {
    // Const { navMenus } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    // const dispatch = useDispatch();
    const routerObject = useRouter();
    const deviceSize = useDeviceSize();
    // Const [lastY, setLastY] = useState<number>(0);

    const submenuRef = useRef<HTMLDivElement | null>(null);
    const iconRef = useRef<HTMLButtonElement | null>(null);
    // Const [menuStateClass, setMenuStateClass] = useState<string>('overflow-hidden');

    /**
     * Toggle the submenu state
     *
     * @param {string} slug
     * @param {boolean} isParentMenu
     */
    // const toggleSubmenu = (slug: string, isParentMenu: boolean) => {
    //     dispatch(
    //         reduxToggleSubmenu({
    //             menuSlug: slug,
    //             isParentMenu
    //         })
    //     );
    // };

    // useEffect(() => {
    //     if (!submenuRef.current) return;
    //
    //     if (menu.subMenuOpen) {
    //         // Rotate -90deg the submenu icon
    //         iconRef.current &&
    //             gsap.to(iconRef.current, {
    //                 rotate: -90,
    //                 duration: 0.8,
    //                 ease: 'expo.inOut'
    //             });
    //         // Open the submenu
    //         if (deviceSize === 'xl') {
    //             gsap.to(submenuRef.current, {
    //                 maxHeight: 'fit-content',
    //                 opacity: 1,
    //                 duration: 0.8,
    //                 ease: 'expo.inOut'
    //             });
    //         } else {
    //             gsap.to(submenuRef.current, {
    //                 maxHeight: '500rem',
    //                 opacity: 1,
    //                 duration: 0.8,
    //                 ease: 'expo.inOut'
    //             });
    //         }
    //     } else {
    //         // Rotate 0deg the submenu icon
    //         gsap.to(iconRef.current, {
    //             rotate: 0,
    //             duration: 0.8,
    //             ease: 'expo.inOut'
    //         });
    //         // Close the submenu
    //         if (deviceSize === 'xl') {
    //             gsap.to(submenuRef.current, {
    //                 duration: 0.8,
    //                 opacity: 0,
    //                 ease: 'expo.inOut'
    //             });
    //         } else {
    //             gsap.to(submenuRef.current, {
    //                 maxHeight: 0,
    //                 duration: 0.8,
    //                 opacity: 0,
    //                 ease: 'expo.inOut'
    //             });
    //         }
    //     }
    //
    //     // If (menu.subMenuOpen) {
    //     //     setTimeout(() => {
    //     //         setMenuStateClass('overflow-y-auto');
    //     //     }, 500);
    //     // } else {
    //     //     setMenuStateClass('overflow-hidden');
    //     // }
    // }, [navMenus]);

    // Preserve the submenu open style based on state when page loads first time
    // useEffect(() => {
    //     if (menu.subMenuOpen) {
    //         // Rotate -90deg the submenu icon
    //         iconRef.current &&
    //             gsap.to(iconRef.current, {
    //                 rotate: -90,
    //                 duration: 0,
    //                 ease: 'expo.inOut'
    //             });
    //         // Open the submenu
    //         submenuRef.current &&
    //             gsap.to(submenuRef.current, {
    //                 maxHeight: '200rem',
    //                 duration: 0,
    //                 ease: 'expo.inOut'
    //             });
    //     } else {
    //         // Rotate 0deg the submenu icon
    //         iconRef.current &&
    //             gsap.to(iconRef.current, {
    //                 rotate: 0,
    //                 duration: 0,
    //                 ease: 'expo.inOut'
    //             });
    //         // Close the submenu
    //         submenuRef.current &&
    //             gsap.to(submenuRef.current, {
    //                 maxHeight: 0,
    //                 duration: 0,
    //                 ease: 'expo.inOut'
    //             });
    //     }
    // }, []);

    // /**
    //  * Move the menu to vertical way when user cursor moves over the submenu
    //  *
    //  * @param {React.MouseEvent<HTMLDivElement>} event
    //  */
    // const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    //     event.preventDefault();
    //     const { current } = submenuRef;
    //
    //     if (!current) return;
    //
    //     const { clientY } = event;
    //     const deltaY = (clientY - lastY) / 1.5;
    //
    //     setLastY(clientY);
    //
    //     current.scrollTop += deltaY;
    // };

    return (
        <li className="group/menu-item relative block grid h-full place-items-center">
            <span className="flex items-center justify-center gap-1">
                <Link
                    href={menu.url}
                    className="font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 group-hover/menu-item:text-brand"
                >
                    {menu.name}
                </Link>
                {menu.submenu && (
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
                            className="transition-all  duration-500 group-hover/menu-item:!stroke-brand "
                        />
                    </svg>
                )}
            </span>

            {menu.submenu?.length && (
                <div className="pointer-events-none absolute top-0 left-0 top-full opacity-0 transition-all duration-500 group-hover/menu-item:pointer-events-auto group-hover/menu-item:opacity-100">
                    <div className="flex flex-col items-start justify-start gap-6 rounded-bl-primary rounded-br-primary bg-white px-8 py-8 shadow-md">
                        {menu.submenu.map((item, index) => (
                            <span className="flex items-center justify-center gap-1">
                                <Link
                                    href={item.url}
                                    className="whitespace-nowrap font-mulishMedium text-[1.6rem] capitalize leading-8 transition-all duration-500 hover:text-brand"
                                >
                                    {item.name}
                                </Link>
                                {/* {menu.submenu && ( */}
                                {/*     <Image */}
                                {/*         src="/images/icons/icon-arrow-down.svg" */}
                                {/*         className="h-[1.2rem] w-[1.2rem] translate-y-[0.1rem] transition-all duration-500 hover:text-brand group-hover/menu-item:-rotate-90" */}
                                {/*         alt="" */}
                                {/*         width={14} */}
                                {/*         height={14} */}
                                {/*     /> */}
                                {/* )} */}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/*     {menu?.submenu ? ( */}
            {/*         <li */}
            {/*             className={`flex w-full flex-col items-start justify-center xl:w-auto group/menu-list ${ */}
            {/*                 menu.parentMenu && 'parent-menu' */}
            {/*             } ${menu.megaMenu ? styles.styles : 'relative'}`} */}
            {/*         > */}
            {/*             /!* The parent menu text *!/ */}
            {/*             <div */}
            {/*                 className={`relative flex ${ */}
            {/*                     menu.parentMenu ? 'items-center' : 'items-start' */}
            {/*                 } justify-between xl:justify-start xl:gap-0`} */}
            {/*                 onMouseEnter={(e) => { */}
            {/*                     if (deviceSize === 'xl') { */}
            {/*                         menu.parentMenu && dispatch(openSubmenu({ menuSlug: menu.slug })); */}
            {/*                     } */}
            {/*                 }} */}
            {/*             > */}
            {/*                 <SingleLink */}
            {/*                     menu={menu} */}
            {/*                     isMenuActive={isMenuActive} */}
            {/*                     closeMobileMenu={closeMobileMenu} */}
            {/*                     index={index} */}
            {/*                 /> */}

            {/*                 <IconButton */}
            {/*                     ref={iconRef} */}
            {/*                     className={`absolute right-0 top-0 xl:relative ${ */}
            {/*                         menu.parentMenu ? 'xl:translate-y-[0.1rem]' : 'xl:-translate-y-[0.1rem] xl:!hidden' */}
            {/*                     } xl:!px-1`} */}
            {/*                     title="Dropdown" */}
            {/*                     onClick={(e) => { */}
            {/*                         e.preventDefault(); */}
            {/*                         e.stopPropagation(); */}
            {/*                         toggleSubmenu(menu.slug, menu.parentMenu || false); */}
            {/*                     }} */}
            {/*                 > */}
            {/*
            {/*                 </IconButton> */}
            {/*             </div> */}

            {/*             <div */}
            {/*                 ref={submenuRef} */}
            {/*                 className={`submenu left-0 opacity-0 max-h-0 rounded-bl-primary rounded-br-primary xl:top-full xl:bg-white  ${ */}
            {/*                     menu.parentSubmenu ? `xl:absolute xl:pl-6 xl:left-0` : '' */}
            {/*                 } ${menu.parentMenu && 'xl:mt-10'} ${ */}
            {/*                     menu.megaMenu && 'xl:w-full xl:shadow-shadow2 xl:!mt-0 xl:!pl-0' */}
            {/*                 } ${menu.subMenuOpen ? styles.activeSubmenu : styles.disabledSubmenu}`} */}
            {/*                 onMouseLeave={() => { */}
            {/*                     if (deviceSize === 'xl') { */}
            {/*                         menu.parentMenu && dispatch(closeSubmenu({ menuSlug: menu.slug })); */}
            {/*                     } */}
            {/*                 }} */}
            {/*             > */}
            {/*                 <ul */}
            {/*                     className={`ml-8 flex mt-8 xl:mt-0 xl:gap-6 items-start flex-col justify-start gap-8 xl:ml-0 ${ */}
            {/*                         menu.parentSubmenu ? 'xl:py-8' : '' */}
            {/*                     } ${!menu.parentMenu && '!mt-6'} xl:pl-8 ${ */}
            {/*                         menu.megaMenu ? */}
            {/*                             `xl:flex-wrap xl:flex-row xl:gap-16 xl:!py-16 xl:!px-16 xl:grid xl:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]` : */}
            {/*                             'xl:pr-14 ' */}
            {/*                     }`} */}
            {/*                 > */}
            {/*                     {menu.submenu.map((menu: NavMenuType, index: number) => ( */}
            {/*                         <NavLink */}
            {/*                             index={index} */}
            {/*                             key={index} */}
            {/*                             menu={menu} */}
            {/*                             isMenuActive={routerObject?.pathname === menu.url} */}
            {/*                             closeMobileMenu */}
            {/*                         /> */}
            {/*                     ))} */}
            {/*                 </ul> */}
            {/*             </div> */}
            {/*         </li> */}
            {/*     ) : ( */}
            {/*         <li className="group/menu-list"> */}
            {/*             <SingleLink */}
            {/*                 menu={menu} */}
            {/*                 isMenuActive={isMenuActive} */}
            {/*                 closeMobileMenu={closeMobileMenu} */}
            {/*                 index={index} */}
            {/*             /> */}
            {/*         </li> */}
            {/*     )} */}
        </li>
    );
};

export default NavLink;
