import { MouseEventHandler } from 'react';
import styles from './styles/Hamburger.module.scss';

interface PropInterface {
    hamburgerActive: boolean;
    // ToggleMenu: Dispatch<SetStateAction<boolean>>
    toggleMenu: MouseEventHandler<HTMLElement>;
}

/**
 * Hamburger component
 *
 * @param {PropInterface} { hamburgerActive, toggleMenu }
 * @returns {*}
 */
const Hamburger = ({ hamburgerActive, toggleMenu }: PropInterface) => {
    return (
        <div
            onClick={toggleMenu}
            className={`${
                (hamburgerActive && styles.hamburgerActive) || ''
            } flex w-[3.5rem] cursor-pointer flex-col gap-[0.5rem] justify-self-end transition-all duration-500 md:hidden`}
        >
            <span className="h-[0.4rem] w-full rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.4rem] w-full rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.4rem] w-full rounded-primary bg-secondary transition-all duration-500"></span>
        </div>
    );
};

export default Hamburger;
