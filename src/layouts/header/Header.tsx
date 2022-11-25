import Link from 'next/link';
import { useState, MouseEvent, useRef, useEffect } from 'react';
import Hamburger from './hamburger/Hamburger';
import Navbar from './Navbar';

/**
 * Header layout
 *
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
    const header = useRef<HTMLElement>(null);
    const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);
    const [stickyNavActive, setStickyNavActive] = useState<boolean>(false);

    useEffect(() => {
        const mastheadSection = document.querySelector('.masthead');

        window.addEventListener('scroll', () => {
            const clientRect = mastheadSection?.getBoundingClientRect();

            if (clientRect !== undefined && clientRect.top * -1 > clientRect.height) {
                setStickyNavActive(true);
            } else {
                setStickyNavActive(false);
            }
        });
    });

    /**
     * Toggle the state of the hamburger menu
     *
     * @param {MouseEvent<HTMLElement>} e
     */
    const toggleMenu = (e: MouseEvent<HTMLElement>) => {
        setHamburgerActive(!hamburgerActive);
    };

    /**
     * Close the menu
     *
     * @param {MouseEvent<HTMLElement>} e
     */
    const closeMenu = () => {
        setHamburgerActive(false);
    };

    return (
        <header
            ref={header}
            className={`sticky top-0 left-0 z-50 mx-auto w-full bg-white shadow-md ${
                (stickyNavActive && 'md:sticky md:bg-white md:shadow-md') ||
                'max-w-[var(--container-width)] md:relative md:bg-transparent md:shadow-none'
            }`}
        >
            <div
                className={`relative grid h-[9rem] w-full grid-cols-[1fr_auto] items-center justify-items-start px-8  md:h-auto xl:grid-cols-2 xl:px-0 ${
                    (stickyNavActive && 'md:mx-auto md:max-w-[var(--container-width)]') || ''
                }`}
            >
                <div className={`${(stickyNavActive && 'md:mt-0') || 'md:mt-[4.8rem]'} grid place-items-center`}>
                    <Link href="/">
                        <img
                            className={`w-[12rem] object-contain md:h-[8.2rem] md:w-[16rem]`}
                            src="/images/logos/logo.svg"
                            alt=""
                        />
                    </Link>
                </div>

                <Navbar hamburgerActive={hamburgerActive} stickyNavActive={stickyNavActive} closeMenu={closeMenu} />

                <Hamburger hamburgerActive={hamburgerActive} toggleMenu={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;
