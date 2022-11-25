interface PropInterface {
    children: JSX.Element | JSX.Element[];
    className?: string;
    defaultClassName?: string;
}

/**
 * General section of a webpage
 *
 * @param {PropTypes} { children, className }
 * @returns {*}  {JSX.Element}
 */
const Section = ({
    children,
    className,
    defaultClassName = 'mt-24 w-full sm:mt-36 md:mt-48'
}: PropInterface): JSX.Element => {
    return <section className={`${defaultClassName || ''} ${className || ''}`}>{children}</section>;
};

export default Section;
