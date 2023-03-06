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
const H4Variant1 = ({
    children,
    defaultClassName = 'w-full font-latoBold normal-case text-[2.4rem] leading-[3.2rem]',
    className
}: H4Variant1Interface): JSX.Element => {
    return <h4 className={`${defaultClassName} ${className}`}>{children}</h4>;
};

export default H4Variant1;
