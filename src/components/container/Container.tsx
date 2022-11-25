import { ReactNode, forwardRef } from 'react';

interface PropInterface {
    children: ReactNode;
    className?: string | null;
    defaultClassName?: string | null;
}

/**
 * Container with a fixed max-width
 *
 * @param {PropInterface} { children, className }
 * @returns {*}  {JSX.Element}
 */
const Container = forwardRef(
    (
        {
            children,
            className,
            defaultClassName = 'mx-auto w-full max-w-[var(--container-width)] px-8 xl:px-0',
            ...other
        }: PropInterface,
        ref: any
    ): JSX.Element => {
        return (
            <div ref={ref} {...other} className={`${defaultClassName || ''} ${className || ''}`}>
                {children}
            </div>
        );
    }
);

export default Container;
