import { ReactNode } from 'react';

type NavigationProps = {
    children: ReactNode;
};

/**
 * No navigation layout for public error routes
 *
 * @param {NavigationProps} children
 * @returns {JSX.Element}
 * @constructor
 */
const NoNavigationLayout = ({ children }: NavigationProps): JSX.Element => {
    return <>{children}</>;
};

export default NoNavigationLayout;
