import { ReactNode, useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { barAnimation } from '@/utils/gsapFunctions';

interface LinkInterface {
    href: string;
    className?: string;
    defaultClassName?: string;
    children: ReactNode;
    indicatorColor?: string;
}

/**
 * Link component for the website
 *
 * @param {LinkInterface} {
 *     href,
 *     className,
 *     defaultClassName = 'font-mulishMedium text-[1.6rem] leading-[2.4rem] relative block',
 *     indicatorColor,
 *     children
 * }
 * @returns {*}  {JSX.Element}
 */
const LinkText = ({
    href,
    className,
    defaultClassName = 'font-mulishMedium text-[1.8rem] leading-[2.4rem] relative inline-block',
    indicatorColor,
    children
}: LinkInterface): JSX.Element => {
    const indicator = useRef<HTMLSpanElement>(null);
    const [animationActive, setAnimationActive] = useState<boolean>(false);

    useEffect(() => {
        barAnimation();
    }, [animationActive]);

    return (
        <Link
            href={href}
            className={`${defaultClassName || ''} ${className || ''}`}
            onMouseOver={() => {
                setAnimationActive(true);
            }}
            onMouseLeave={() => {
                setAnimationActive(false);
            }}
        >
            {children}
            <span
                ref={indicator}
                className={`absolute bottom-0 left-0 h-1 w-0 translate-y-1 rounded-full ${
                    indicatorColor ? indicatorColor : 'bg-brand'
                } ${animationActive ? 'bar-animation' : 'bar-animation-inactive'}`}
            ></span>
        </Link>
    );
};

export default LinkText;
