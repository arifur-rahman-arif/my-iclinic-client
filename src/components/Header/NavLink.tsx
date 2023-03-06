import {
    closeSubmenu,
    NavbarInterface,
    openSubmenu,
    toggleSubmenu as reduxToggleSubmenu
} from '@/features/navbar/navbarSlice';
import { NavMenuType } from '@/features/navbar/navMenuList';
import { useDeviceSize } from '@/hooks';

import { AppState } from '@/store';
import { IconButton } from '@mui/material';
import gsap from 'gsap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleLink from './SingleLink';

export interface NavLinkInterface {
    index: number;
    menu: NavMenuType;
    isMenuActive: boolean;
    closeMobileMenu?: boolean;
}

/**
 * Navigation link component
 *
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @param {boolean | undefined} closeMobileMenu
 * @returns {JSX.Element}
 * @constructor
 */
const NavLink = ({ index, menu, isMenuActive, closeMobileMenu }: NavLinkInterface): JSX.Element => {
    const { navMenus } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const dispatch = useDispatch();
    const routerObject = useRouter();
    const deviceSize = useDeviceSize();
    const [lastY, setLastY] = useState<number>(0);

    const submenuRef = useRef<HTMLDivElement | null>(null);
    const iconRef = useRef<HTMLButtonElement | null>(null);
    const [menuStateClass, setMenuStateClass] = useState<string>('overflow-hidden');

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
                    duration: 0.8,
                    ease: 'expo.inOut'
                });
            // Open the submenu
            if (deviceSize === 'xl') {
                submenuRef.current &&
                    gsap.to(submenuRef.current, {
                        maxHeight: '80vh',
                        opacity: 1,
                        duration: 0.8,
                        ease: 'expo.inOut'
                    });
            } else {
                submenuRef.current &&
                    gsap.to(submenuRef.current, {
                        maxHeight: 'max-content',
                        opacity: 1,
                        duration: 0.8,
                        ease: 'expo.inOut'
                    });
            }
        } else {
            // Rotate 0deg the submenu icon
            iconRef.current &&
                gsap.to(iconRef.current, {
                    rotate: 0,
                    duration: 0.8,
                    ease: 'expo.inOut'
                });
            // Close the submenu
            submenuRef.current &&
                gsap.to(submenuRef.current, {
                    maxHeight: 0,
                    duration: 0.8,
                    opacity: 0,
                    ease: 'expo.inOut'
                });
        }

        if (menu.subMenuOpen) {
            setTimeout(() => {
                setMenuStateClass('overflow-y-auto');
            }, 500);
        } else {
            setMenuStateClass('overflow-hidden');
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

    /**
     * Move the menu to vertical way when user cursor moves over the submenu
     *
     * @param {React.MouseEvent<HTMLDivElement>} event
     */
    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        const { current } = submenuRef;

        if (!current) return;

        const { clientY } = event;
        const deltaY = (clientY - lastY) / 1.5;

        setLastY(clientY);

        current.scrollTop += deltaY;
    };

    return (
        <>
            {menu?.submenu ? (
                <li
                    className={`relative flex w-full flex-col items-start justify-center xl:w-auto group/menu-list ${
                        menu.parentMenu && 'parent-menu'
                    }`}
                    onMouseEnter={(e) => {
                        if (deviceSize === 'xl') {
                            menu.parentMenu && dispatch(openSubmenu({ menuSlug: menu.slug }));
                        }
                    }}
                    onMouseLeave={() => {
                        if (deviceSize === 'xl') {
                            if (submenuRef.current) {
                                submenuRef.current.scrollTop = 0;
                            }

                            menu.parentMenu && dispatch(closeSubmenu({ menuSlug: menu.slug }));
                        }
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleSubmenu(menu.slug, menu.parentMenu || false);
                    }}
                >
                    <div
                        className={`relative flex ${
                            menu.parentMenu ? 'items-center' : 'items-start'
                        } justify-between xl:justify-start xl:gap-0`}
                    >
                        <SingleLink
                            menu={menu}
                            isMenuActive={isMenuActive}
                            closeMobileMenu={closeMobileMenu}
                            index={index}
                        />

                        <IconButton
                            ref={iconRef}
                            className={`absolute right-0 top-0 xl:relative ${
                                menu.parentMenu ? 'xl:translate-y-[0.1rem]' : 'xl:-translate-y-[0.1rem]'
                            }`}
                            title="Dropdown"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleSubmenu(menu.slug, menu.parentMenu || false);
                            }}
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
                        className={`submenu left-0 opacity-0 max-h-0 rounded-bl-primary rounded-br-primary ${menuStateClass} xl:top-full xl:bg-white  ${
                            menu.parentSubmenu ? `xl:absolute xl:pl-6 xl:left-0` : ''
                        } ${menu.parentMenu && 'xl:mt-10'}`}
                        onMouseMove={handleMouseMove}
                    >
                        <ul
                            className={`ml-8 flex mt-8 xl:mt-0 xl:gap-6 items-start flex-col justify-start gap-8 xl:ml-0 xl:pl-8 xl:pr-14 ${
                                menu.parentSubmenu ? 'xl:py-8' : ''
                            } ${!menu.parentMenu && '!mt-6'}`}
                        >
                            {menu.submenu.map((menu: NavMenuType, index: number) => (
                                <NavLink
                                    index={index}
                                    key={index}
                                    menu={menu}
                                    isMenuActive={routerObject?.pathname === menu.url}
                                    closeMobileMenu
                                />
                            ))}
                        </ul>
                    </div>

                    {menu.parentMenu && (
                        <span
                            className={`hidden xl:inline-block ${
                                isMenuActive ? 'w-full' : 'w-0'
                            } group-hover/menu-list:w-full transition-all duration-300 h-2 bg-brand rounded-full absolute bottom-0 left-0 translate-y-3 z-[99]`}
                        ></span>
                    )}
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
