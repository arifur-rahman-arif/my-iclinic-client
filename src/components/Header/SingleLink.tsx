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
        <div className={`pr-3 xl:pr-0 group/menu-item relative`}>
            {menu.submenu ? (
                <>
                    {menu.parentMenu ? (
                        <span className="xl:whitespace-nowrap font-mulishMedium text-[1.6rem] leading-8 cursor-pointer">
                            {menu.name || ''}
                        </span>
                    ) : (
                        <span className="xl:whitespace-nowrap font-mulishMedium text-[1.6rem] xl:text-[1.8rem] leading-8 cursor-pointer">
                            {menu.name || ''}
                        </span>
                    )}
                </>
            ) : (
                <Link
                    className={`xl:whitespace-nowrap font-mulishMedium text-[1.6rem] leading-[2.4rem] cursor-pointer`}
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
            {!menu.parentMenu && (
                <span
                    className={`w-4 h-4 bg-brand rounded-full transition-all duration-700 absolute left-0 top-2/4 -translate-y-[35%] -translate-x-8 ${
                        isMenuActive && !menu.parentMenu ? 'scale-100' : 'scale-0'
                    } block`}
                ></span>
            )}
            {!menu.parentMenu && menu.submenu && (
                <span
                    className={`${
                        isMenuActive ? 'w-full' : 'w-0'
                    } group-hover/menu-item:w-full transition-all duration-500 h-1 bg-brand rounded-full absolute bottom-0 left-0 translate-y-3 z-[99]`}
                ></span>
            )}

            {/* Underline bar for parent menu */}
            {menu.parentMenu && (
                <span
                    className={`hidden xl:inline-block ${isMenuActive ? 'w-full' : 'w-0'} ${
                        menu.subMenuOpen && 'w-full'
                    } group-hover/menu-list:w-full transition-all duration-300 h-1 bg-brand rounded-full absolute bottom-0 left-0 translate-y-3 z-[99]`}
                ></span>
            )}
        </div>
    );
};

export default SingleLink;
