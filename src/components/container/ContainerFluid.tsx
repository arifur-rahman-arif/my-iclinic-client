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
const ContainerFluid = ({
    children,
    className,
    defaultClassName = 'relative mx-auto w-full px-8 xl:px-0',
    ...others
}: PropTypes): JSX.Element => {
    return (
        <div className={`${defaultClassName} ${className} px-8 xl:px-0`} {...others}>
            {children}
        </div>
    );
};

export default ContainerFluid;
