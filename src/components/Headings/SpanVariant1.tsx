import { ReactNode } from 'react';

interface H4Variant1Interface {
    children: ReactNode;
    defaultClassName?: string;
    className?: string;
}

/**
 * A variant of h4 tag other than global h4 tag
 *
 * @param {H4Variant1Interface} {
 *     children,
 *     defaultClassName = 'w-full font-latoBold text-[3.2rem] normal-case leading-[3.6rem]',
 *     className
 * }
 * @returns {*}  {JSX.Element}
 */
const SpanVariant1 = ({
    children,
    defaultClassName = 'relative overflow-hidden font-latoBold text-[1.8rem] uppercase leading-[1.8rem] text-heading2 md:text-[2rem] md:leading-[2.8rem]',
    className
}: H4Variant1Interface): JSX.Element => {
    return <span className={`${defaultClassName} ${className}`}>{children}</span>;
};

export default SpanVariant1;
