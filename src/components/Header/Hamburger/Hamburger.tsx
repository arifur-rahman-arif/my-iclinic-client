import { MouseEvent } from 'react';

interface HamburgerProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

// eslint-disable-next-line valid-jsdoc
/**
 * Hamburger component
 *
 * @param {(event: MouseEvent<HTMLButtonElement>) => void} onClick
 * @returns {JSX.Element}
 * @constructor
 */
const Hamburger = ({ onClick }: HamburgerProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex w-[3.3rem] cursor-pointer flex-col items-end justify-start gap-[0.5rem] justify-self-end transition-all duration-500 xl:hidden `}
        >
            <span className="h-[0.2rem] w-full rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.2rem] w-10 rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.2rem] w-full rounded-primary bg-secondary transition-all duration-500"></span>
            <span className="h-[0.2rem] w-10 rounded-primary bg-secondary transition-all duration-500"></span>
        </button>
    );
};

export default Hamburger;
