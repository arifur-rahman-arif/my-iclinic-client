import { forwardRef } from 'react';

interface PropTypes {
    children: JSX.Element | JSX.Element[];
    className?: string | null;
    defaultClassName?: string | null;
}

/**
 * Container with a full width
 *
 * @param {PropTypes} { children, className }
 * @returns {*}  {JSX.Element}
 */
const ContainerFluid = forwardRef(
    (
        { children, className, defaultClassName = 'relative mx-auto w-full px-8 xl:px-0', ...others }: PropTypes,
        ref: any
    ): JSX.Element => {
        return (
            <div ref={ref} className={`${defaultClassName} ${className} px-8 xl:px-0`} {...others}>
                {children}
            </div>
        );
    }
);

export default ContainerFluid;
