import { NavbarInterface, toggleSubmenu as reduxToggleSubmenu } from '@/features/navbar/navbarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { AppState } from '@/store';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { NavMenuType } from '@/features/navbar/navMenuList';
import { NextRouter } from 'next/router';
import SingleLink from './SingleLink';
import gsap from 'gsap';

export interface NavLinkInterface {
    index: number;
    menu: NavMenuType;
    isMenuActive: boolean;
    closeMobileMenu?: boolean;
    router?: NextRouter;
}

/**
 * Navigation link component
 *
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @param {boolean | undefined} closeMobileMenu
 * @param {NextRouter} router
 * @returns {JSX.Element}
 * @constructor
 */
const NavLink = ({ index, menu, isMenuActive, closeMobileMenu, router }: NavLinkInterface): JSX.Element => {
    const { navMenus } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const dispatch = useDispatch();

    const submenuRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);

    /**
     * Toggle the submenu state
     *
     * @param {string} slug
     * @param {boolean} isParentMenu
     */
    const toggleSubmenu = (slug: string, isParentMenu: boolean) => {
        dispatch(
            reduxToggleSubmenu({
                menuSlug: slug,
                isParentMenu
            })
        );
    };

    useEffect(() => {
        if (menu.subMenuOpen) {
            // Rotate -90deg the submenu icon
            iconRef.current &&
                gsap.to(iconRef.current, {
                    rotate: -90,
                    duration: 0.3,
                    ease: 'expo.inOut'
                });
            // Open the submenu
            submenuRef.current &&
                gsap.to(submenuRef.current, {
                    maxHeight: '200rem',
                    duration: 0.3,
                    ease: 'expo.inOut'
                });
        } else {
            // Rotate 0deg the submenu icon
            iconRef.current &&
                gsap.to(iconRef.current, {
                    rotate: 0,
                    duration: 0.3,
                    ease: 'expo.inOut'
                });
            // Close the submenu
            submenuRef.current &&
                gsap.to(submenuRef.current, {
                    maxHeight: 0,
                    duration: 0.3,
                    ease: 'expo.inOut'
                });
        }
    }, [navMenus]);

    // Preserve the submenu open style based on state when page loads first time
    useEffect(() => {
        if (menu.subMenuOpen) {
            // Rotate -90deg the submenu icon
            iconRef.current &&
                gsap.to(iconRef.current, {
                    rotate: -90,
                    duration: 0,
                    ease: 'expo.inOut'
                });
            // Open the submenu
            submenuRef.current &&
                gsap.to(submenuRef.current, {
                    maxHeight: '200rem',
                    duration: 0,
                    ease: 'expo.inOut'
                });
        } else {
            // Rotate 0deg the submenu icon
            iconRef.current &&
                gsap.to(iconRef.current, {
                    rotate: 0,
                    duration: 0,
                    ease: 'expo.inOut'
                });
            // Close the submenu
            submenuRef.current &&
                gsap.to(submenuRef.current, {
                    maxHeight: 0,
                    duration: 0,
                    ease: 'expo.inOut'
                });
        }
    }, []);

    return (
        <>
            {menu?.submenu ? (
                <li className="relative flex w-full flex-col items-start justify-center xl:w-auto">
                    <div className="relative flex w-full items-center justify-between xl:justify-start xl:gap-2 ">
                        <SingleLink
                            menu={menu}
                            isMenuActive={isMenuActive}
                            closeMobileMenu={closeMobileMenu}
                            index={index}
                        />

                        <IconButton
                            // Absolute right-0 top-2/4 -translate-y-2/4 translate-x-14 xl:translate-x-10
                            onClick={() => {
                                toggleSubmenu(menu.slug, menu.parentMenu || false);
                            }}
                            ref={iconRef}
                            className="absolute right-0 top-0 -translate-y-2 xl:relative xl:translate-y-0"
                            title="Dropdown"
                        >
                            <Image
                                src="/images/icons/icon-arrow-down.svg"
                                className="h-[1.4rem] w-[1.4rem]"
                                alt=""
                                width={14}
                                height={14}
                            />
                        </IconButton>
                    </div>

                    <div
                        ref={submenuRef}
                        className={`left-0 max-h-0 overflow-y-clip rounded-primary xl:top-[calc(100%_+_3.5rem)] xl:bg-white  ${
                            menu.parentSubmenu ? 'xl:absolute xl:pl-6 xl:shadow-shadow1' : ''
                        }`}
                    >
                        <ul
                            className={`ml-8 flex flex-col items-start justify-start gap-8 pt-8 xl:ml-0 xl:px-8 ${
                                menu.parentSubmenu ? 'xl:py-8' : ''
                            }`}
                        >
                            {menu.submenu.map((menu: NavMenuType, index: number) => (
                                <NavLink
                                    index={index}
                                    key={index}
                                    menu={menu}
                                    isMenuActive={router?.pathname === menu.url}
                                    closeMobileMenu
                                />
                            ))}
                        </ul>
                    </div>
                </li>
            ) : (
                <li>
                    <SingleLink
                        menu={menu}
                        isMenuActive={isMenuActive}
                        closeMobileMenu={closeMobileMenu}
                        index={index}
                    />
                </li>
            )}
        </>
    );
};

export default NavLink;
