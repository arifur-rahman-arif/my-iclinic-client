import Link from 'next/link';
import { ReactElement } from 'react';

interface ButtonInterface {
    type: 'button' | 'anchor';
    text: string;
    icon?: JSX.Element;
    iconPosition?: 'left' | 'right';
    className?: string;
    defaultClassName?: string;
}

/**
 * Button component
 *
 * @param {"button" | "anchor"} type
 * @param {string} text
 * @param {JSX.Element | undefined} Icon
 * @param {"left" | "right" | undefined} iconPosition
 * @param {string | undefined} className
 * @param {string | undefined} defaultClassName
 * @returns {React.ReactElement}
 * @constructor
 */
const Button = ({
    type,
    text,
    icon: Icon,
    iconPosition,
    className,
    defaultClassName = ''
}: ButtonInterface): ReactElement => {
    return (
        <>
            {type === 'anchor' && (
                <Link
                    className="grid cursor-pointer grid-flow-col place-items-center gap-4 whitespace-nowrap rounded-[12rem] border-2 border-brand bg-brand bg-brand py-6 px-8 font-latoBold text-[1.6rem] capitalize transition-all duration-300 hover:bg-white"
                    href="#"
                >
                    {iconPosition === 'left' && Icon}
                    {text || ''}
                    {iconPosition === 'right' && Icon}
                </Link>
            )}
            {/* {type === 'button' && <button className="consultation__button" href="#"> */}
            {/*    Book a consultation */}
            {/* </button>} */}
        </>
    );
};

export default Button;
