import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';

import { barAnimation } from '@/utils/gsapFunctions';
import Link from 'next/link';

interface LinkInterface {
    href: string;
    className?: string;
    defaultClassName?: string;
    children: ReactNode;
    indicatorColor?: string;
    onClick?: (e: MouseEvent) => void;
    excludeAnimation?: boolean;
    target?: string;
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
    defaultClassName = 'font-mulishMedium text-[1.6rem] leading-[2.4rem] relative inline-block',
    indicatorColor,
    children,
    onClick,
    excludeAnimation,
    target
}: LinkInterface): JSX.Element => {
    const indicator = useRef<HTMLSpanElement>(null);
    const [animationActive, setAnimationActive] = useState<boolean>(false);

    useEffect(() => {
        barAnimation();
    }, [animationActive]);

    return (
        <Link
            href={href}
            target={target}
            className={`${defaultClassName || ''} ${className || ''}`}
            onMouseOver={() => {
                !excludeAnimation && setAnimationActive(true);
            }}
            onMouseLeave={() => {
                !excludeAnimation && setAnimationActive(false);
            }}
            onClick={onClick}
        >
            {children}
            {!excludeAnimation && (
                <span
                    ref={indicator}
                    className={`link-bar absolute bottom-0 left-0 h-1 w-0 translate-y-1 rounded-full ${
                        indicatorColor ? indicatorColor : 'bg-brand'
                    } ${animationActive ? 'bar-animation' : 'bar-animation-inactive'}`}
                ></span>
            )}
        </Link>
    );
};

export default LinkText;
