import { ReactNode } from 'react';

interface H4Variant1Interface {
    children: ReactNode;
    defaultClassName?: string;
    className?: string;
}

/**
 * A variant of h3 tag
 *
 * @param {H4Variant1Interface} {
 *     children,
 *     defaultClassName = 'w-full font-latoBold text-[4rem] normal-case leading-16',
 *     className
 * }
 * @returns {*}  {JSX.Element}
 */
const H3Variant3 = ({
    children,
    defaultClassName = 'w-full font-latoBold text-[2rem] normal-case leading-[3.2rem] md:text-[2.4rem] md:leading-[3.2rem]',
    className
}: H4Variant1Interface): JSX.Element => {
    return <h3 className={`${defaultClassName} ${className}`}>{children}</h3>;
};

export default H3Variant3;
