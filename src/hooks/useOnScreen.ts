import { MutableRefObject, useEffect, useState } from 'react';

interface UseOnScreenInterface {
    ref: MutableRefObject<any>;
    triggerPosition?: number | string;
    markers?: boolean;
    repeat?: boolean;
}

interface UseOnScreenReturnInterface {
    onEnter: boolean;
    onLeave: boolean;
}

/**
 * Hooks to detect a component is visible on the screen or not.
 * If the component is visible then it will return true
 *
 * @param {*} ref
 * @returns {*}  {boolean}
 */
const useOnScreen = ({
    ref,
    triggerPosition,
    markers = false,
    repeat = false
}: UseOnScreenInterface): UseOnScreenReturnInterface => {
    const [onEnter, setOnEnter] = useState<boolean>(false);
    const [onLeave, setOnLeave] = useState<boolean>(false);

    useEffect(() => {
        if (!ref.current || typeof window == undefined) return;

        if (triggerPosition && (typeof triggerPosition === 'number' || typeof triggerPosition === 'string')) {
            handleInterSection();
            window.addEventListener('scroll', handleInterSection);
            if (markers) injectMarkers();
        } else {
            const observer = new IntersectionObserver(([entry]) => {
                if (repeat) {
                    if (entry.isIntersecting) {
                        setOnEnter(true);
                    } else {
                        setOnEnter(false);
                    }
                } else {
                    if (entry.isIntersecting) {
                        setOnEnter(true);
                        observer.unobserve(entry.target);
                    }
                }
            });

            if (ref.current) {
                observer.observe(ref.current);
            }
        }
    }, []);

    /**
     * Set the 'onEnter' or 'onLeave' state based while scrolling or on load if it's passed the trigger position
     */
    const handleInterSection = (): void => {
        if (!triggerPosition || !ref.current) return;

        const windowHeight = window.innerHeight;
        const clientRect = ref.current.getBoundingClientRect();

        if (typeof triggerPosition === 'string') {
            if (repeat) {
                if (clientRect.top < (windowHeight * parseFloat(triggerPosition)) / 100) {
                    setOnEnter(true);
                } else {
                    setOnEnter(false);
                }

                if (clientRect.bottom < (windowHeight * parseFloat(triggerPosition)) / 100) {
                    setOnLeave(true);
                } else {
                    setOnLeave(false);
                }
            } else {
                if (clientRect.top < (windowHeight * parseFloat(triggerPosition)) / 100) setOnEnter(true);
                if (clientRect.bottom < (windowHeight * parseFloat(triggerPosition)) / 100) setOnLeave(true);
            }
        } else {
            if (repeat) {
                if (clientRect.top < windowHeight + triggerPosition) {
                    setOnEnter(true);
                } else {
                    setOnEnter(false);
                }

                if (clientRect.bottom < windowHeight + triggerPosition) {
                    setOnLeave(true);
                } else {
                    setOnLeave(false);
                }
            } else {
                if (clientRect.top < windowHeight + triggerPosition) setOnEnter(true);
                if (clientRect.bottom < windowHeight + triggerPosition) setOnLeave(true);
            }
        }
    };

    /**
     * Inject a visual marker to the screen according the 'triggerPosition' property
     *
     * @returns {*}  {void}
     */
    const injectMarkers = (): void => {
        if (!triggerPosition || !ref.current || !markers) return;

        const windowHeight = window.innerHeight;
        const clientRect = ref.current.getBoundingClientRect();
        // Absolute pin marker
        const triggerMarker = setElementMarker({ color: 'red' });
        // Relative element marker
        const elementStartingMarker = setElementMarker({ position: clientRect.top, color: 'lime' });
        const elementEndingMarker = setElementMarker({ position: clientRect.top + clientRect.height, color: 'blue' });

        // Set the trigger marker position
        if (typeof triggerPosition === 'string') {
            const positionPoint = (windowHeight * parseFloat(triggerPosition)) / 100;
            if (clientRect.top < positionPoint) return setOnEnter(true);
            triggerMarker.style.top = `${positionPoint}px`;
        } else {
            const positionPoint = windowHeight + triggerPosition;
            if (clientRect.top < positionPoint) return setOnEnter(true);
            triggerMarker.style.top = `${positionPoint}px`;
        }

        // Set the element markers position
        window.addEventListener('scroll', () => {
            const clientRect = ref?.current.getBoundingClientRect();
            elementStartingMarker.style.top = `${clientRect.top}px`;
            elementEndingMarker.style.top = `${clientRect.top + clientRect.height}px`;
        });
    };

    interface ElementMarkerInterface {
        position?: number;
        color: string;
    }

    /**
     * Set the marker position based on element position relative to the screen position
     *
     * @params {{
     *         position?: number;
     *     }} {
     *         position,
     *     }
     * @returns {*}  {HTMLSpanElement}
     */
    const setElementMarker = ({ position, color }: ElementMarkerInterface): HTMLSpanElement => {
        const element = document.createElement('span');
        element.style.width = '30px';
        element.style.height = '10px';
        element.style.background = color;
        element.style.zIndex = '9999';
        element.style.position = 'fixed';
        element.style.right = '0';
        if (position) element.style.top = `${position}px`;

        document.querySelector('body')?.appendChild(element);

        return element;
    };

    return { onEnter, onLeave };
};

export default useOnScreen;
