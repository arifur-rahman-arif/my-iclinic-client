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
const H2Variant1 = ({
    children,
    defaultClassName = 'w-full font-latoBold md:text-[4rem] text-[3.6rem] leading-[4rem] normal-case md:leading-[4rem]',
    className
}: H4Variant1Interface): JSX.Element => {
    return <h2 className={`${defaultClassName} ${className}`}>{children}</h2>;
};

export default H2Variant1;
