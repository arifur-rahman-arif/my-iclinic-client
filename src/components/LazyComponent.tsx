import { ReactNode, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Suspense } from 'react';
import { useOnScreen } from '@/hooks';

interface LazyComponentInterface {
    children: ReactNode;
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
const LazyComponent = ({ children }: LazyComponentInterface): JSX.Element => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const isElementIntersecting = useOnScreen(divRef);

    if (isElementIntersecting) {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    }

    return (
        <div ref={divRef} className="w-full pt-[0.1rem]">
            <Suspense fallback={<Fallback />}>{isElementIntersecting && children}</Suspense>
        </div>
    );
};

export default LazyComponent;
