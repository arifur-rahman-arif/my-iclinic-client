import { NavLinkInterface } from '@/components/Header/NavLink';
import {
    anchorPosition,
    closeParentSubmenus,
    closeSubmenus,
    NavbarInterface,
    toggleNavbar
} from '@/features/navbar/navbarSlice';
import { AppState } from '@/store';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

interface SingleLinkInterface extends Omit<NavLinkInterface, 'index'> {
    index: number;
}

/**
 * Link component for the list
 * @param {NavMenuType} menu
 * @param {boolean} isMenuActive
 * @param {boolean | undefined} closeMobileMenu
 * @returns {JSX.Element}
 * @constructor
 */
const SingleLink = ({ menu, isMenuActive, closeMobileMenu }: SingleLinkInterface): JSX.Element => {
    const dispatch = useDispatch();
    const { navbarPositionState } = useSelector((state: AppState) => state.navbar as NavbarInterface);

    return (
        <div className={`group/menu-item relative pr-3 xl:pr-0`}>
            {menu.submenu ? (
                <>
                    {menu.parentMenu ? (
                        <span className="cursor-pointer font-mulishMedium text-[1.6rem] leading-8 xl:whitespace-nowrap">
                            {menu.name || ''}
                        </span>
                    ) : (
                        <span className="cursor-pointer font-mulishMedium text-[1.6rem] leading-8 xl:whitespace-nowrap xl:text-[1.8rem]">
                            {menu.name || ''}
                        </span>
                    )}
                </>
            ) : (
                <Link
                    className={`cursor-pointer font-mulishMedium text-[1.6rem] leading-[2.4rem] xl:whitespace-nowrap`}
                    href={menu.url}
                    onClick={(e) => {
                        e.stopPropagation();
                        const windowWidth = window.innerWidth;

                        if (windowWidth < 1280) {
                            typeof closeMobileMenu === 'boolean' &&
                                setTimeout(() => {
                                    dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
                                    dispatch(closeSubmenus());
                                }, 300);
                        } else {
                            dispatch(closeParentSubmenus());
                        }
                    }}
                >
                    {menu.name || ''}
                </Link>
            )}

            {/* Indicator */}
            {!menu.parentMenu && !menu.submenu && (
                <span
                    className={`absolute left-0 top-2/4 h-4 w-4 -translate-y-[35%] -translate-x-8 rounded-full bg-brand transition-all duration-700 ${
                        isMenuActive && !menu.parentMenu ? 'scale-100' : 'scale-0'
                    } block`}
                ></span>
            )}
            {!menu.parentMenu && menu.submenu && !isMenuActive && (
                <span
                    className={`${
                        isMenuActive ? 'w-full' : 'w-0'
                    } absolute bottom-0 left-0 z-[99] h-1 translate-y-3 rounded-full bg-brand transition-all duration-500 group-hover/menu-item:w-full`}
                ></span>
            )}

            {/* Underline bar for parent menu */}
            {menu.parentMenu && (
                <span
                    className={`hidden xl:inline-block ${isMenuActive ? 'w-full' : 'w-0'} ${
                        menu.subMenuOpen && 'w-full'
                    } absolute bottom-0 left-0 z-[99] h-1 translate-y-3 rounded-full bg-brand transition-all duration-300 group-hover/menu-list:w-full`}
                ></span>
            )}
        </div>
    );
};

export default SingleLink;
