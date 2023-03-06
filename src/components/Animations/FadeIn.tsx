import { useOnScreen } from '@/hooks';
import { cloneElement, useRef } from 'react';

interface FadeInInterface {
    children: JSX.Element;
    className?: string;
    defaultClassName?: string;
}

/**
 * Fade in animation when element is visible in the viewport
 *
 * @returns {*}  {JSX.Element}
 */
const FadeIn = ({
    children,
    defaultClassName = 'will-change-transform transition-all duration-[1.5s]',
    className
}: FadeInInterface): JSX.Element => {
    const elementRef = useRef<HTMLParagraphElement | null>(null);
    const { onEnter } = useOnScreen({ ref: elementRef });

    return (
        <>
            {cloneElement(children, {
                ref: elementRef,
                className: `${defaultClassName} ${className} ${
                    onEnter ? 'translate-y-0 opacity-1' : 'translate-y-4 opacity-0'
                }`
            })}
        </>
    );
};

export default FadeIn;
