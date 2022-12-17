import { NavbarInterface, anchorPosition, closeSubmenus, toggleNavbar } from '@/features/navbar/navbarSlice';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '@/store';
import Link from 'next/link';
import { NavLinkInterface } from '@/components/header/NavLink';
import { useRef } from 'react';

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
    const indicator = useRef<HTMLSpanElement>(null);
    const { navbarPositionState } = useSelector((state: AppState) => state.navbar as NavbarInterface);
    const dispatch = useDispatch();

    /**
     * Animate the indicator
     *
     * @param {boolean} dotAnimation
     */
    const handleClick = (dotAnimation: boolean) => {
        const windowWidth = window.innerWidth;

        if (windowWidth < 1280) {
            typeof closeMobileMenu === 'boolean' &&
                setTimeout(() => {
                    dispatch(toggleNavbar(!navbarPositionState[anchorPosition]));
                }, 300);
        }

        if (windowWidth > 1280) {
            setTimeout(() => {
                dispatch(closeSubmenus());
            }, 300);
        }
    };

    let listClass = '';
    let indicatorClass = '';

    if (menu.parentMenu) {
        listClass = `relative ${
            !isMenuActive ? 'decoration-brand underline-offset-8 transition-all sm:hover:underline' : ''
        }`;
        // For the parent menus the indicator animation will be a bar animation
        indicatorClass = `w-0 h-2 bg-brand rounded-full absolute bottom-0 left-0 translate-y-4 ${
            isMenuActive ? 'bar-animation' : 'bar-animation-inactive'
        }`;
    }

    if (menu.dotAnimation) {
        listClass = `relative pl-1`;
        // For the sub menus the indicator animation will be a dot animation
        indicatorClass = `w-4 h-4 scale-0 bg-brand rounded-full absolute left-0 top-2/4 -translate-y-2/4 -translate-x-6 ${
            isMenuActive ? 'dot-animation' : 'dot-animation-inactive'
        }`;
    }

    return (
        <div
            className={`pr-3 xl:pr-0 ${listClass}`}
            onClick={() => {
                handleClick(menu.dotAnimation || false);
            }}
        >
            <Link className="whitespace-nowrap font-mulishBold text-[1.5rem]" href={menu.url}>
                {menu.name || ''}
            </Link>

            {/* Indicator */}
            <span ref={indicator} className={indicatorClass}></span>
        </div>
    );
};

export default SingleLink;
