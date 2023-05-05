import { useOnScreen } from '@/hooks';
import { ReactNode, Suspense, useRef } from 'react';

interface LazyComponentInterface {
    children: ReactNode;
    triggerPosition?: number;
}

/**
 * Fallback component for the lazily loading component
 *
 * @returns {*}  {JSX.Element}
 */
const Fallback = (): JSX.Element => {
    return (
        <div className="mt-24 grid w-full place-items-center sm:mt-36 lg:mt-48">
            <span className="mx-auto justify-self-center bg-brandLight px-12 py-6 font-mulishBold text-secondary shadow-shadow1">
                Please wait. Section loading...
            </span>
        </div>
    );
};

/**
 * HOC component that loads other components lazily when the section is visible on the screen
 *
 * @param {LazyComponentInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const LazyComponent = ({ children, triggerPosition }: LazyComponentInterface): JSX.Element => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: divRef, triggerPosition: triggerPosition || 200 });

    return (
        <div ref={divRef} className="w-full">
            <Suspense fallback={<Fallback />}>{onEnter && children}</Suspense>
        </div>
    );
};

export default LazyComponent;
