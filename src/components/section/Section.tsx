import { forwardRef } from 'react';

interface PropInterface {
    children: JSX.Element | JSX.Element[];
    id?: string;
    className?: string;
    defaultClassName?: string;
}

/**
 * General section of a webpage
 *
 * @param {PropTypes} { children, className }
 * @returns {*}  {JSX.Element}
 */
const Section = forwardRef(
    (
        { children, id, className, defaultClassName = 'mt-24 w-full sm:mt-36 lg:mt-48' }: PropInterface,
        ref: any
    ): JSX.Element => {
        return (
            <section ref={ref} className={`${defaultClassName || ''} ${className || ''}`} id={id || ''}>
                {children}
            </section>
        );
    }
);

export default Section;
