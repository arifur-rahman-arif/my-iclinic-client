import { ReactNode } from 'react';

interface LazyComponentInterface {
    children: ReactNode;
    triggerPosition?: number;
}

/**
 * HOC component that loads other components lazily when the section is visible on the screen
 *
 * @param {LazyComponentInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const LazyComponent = ({ children }: LazyComponentInterface): JSX.Element => {
    return <>{children}</>;
};

export default LazyComponent;
