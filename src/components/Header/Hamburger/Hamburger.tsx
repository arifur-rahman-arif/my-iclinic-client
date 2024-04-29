import Image from 'next/image';
import { MouseEvent } from 'react';
import IconHamburger from '@/icons/icon-hamburger.svg';

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
            title="Menu"
            className={`flex items-center justify-center gap-4 justify-self-end xl:hidden`}
        >
            <Image src={IconHamburger} alt="" />
            <span className="font-mulishBold text-[1.6rem] leading-8">Menu</span>
        </button>
    );
};

export default Hamburger;
