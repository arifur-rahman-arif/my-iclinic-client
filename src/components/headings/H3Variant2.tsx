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
 *     defaultClassName = 'w-full font-latoBold text-[4rem] normal-case leading-16',
 *     className
 * }
 * @returns {*}  {JSX.Element}
 */
const H3Variant2 = ({
    children,
    defaultClassName = 'w-full font-latoBold md:text-[3rem] text-[2.4rem] leading-[3.2rem] normal-case md:leading-[3.6rem]',
    className
}: H4Variant1Interface): JSX.Element => {
    return <h3 className={`${defaultClassName} ${className}`}>{children}</h3>;
};

export default H3Variant2;
