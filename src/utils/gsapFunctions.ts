import { smallSizes } from './../hooks/useDeviceSize';
import { useDeviceSize, useOnScreen } from '@/hooks';
import gsap from 'gsap';
import { MutableRefObject, RefObject, useEffect } from 'react';

/**
 * The bar animation for the main parent menus
 */
export const barAnimation = () => {
    if (document.querySelectorAll('.bar-animation-inactive').length) {
        gsap.to('.bar-animation-inactive', {
            width: '0%',
            duration: 0.8,
            overwrite: true
        });
    }

    if (document.querySelector('.bar-animation')) {
        gsap.to('.bar-animation', {
            width: '100%',
            duration: 1.5,
            ease: 'elastic.out(1, 0.6)'
        });
    }
};

/**
 * The bar animation for the main parent menus
 */
export const dotAnimation = () => {
    if (document.querySelector('.dot-animation-inactive')) {
        gsap.to('.dot-animation-inactive', {
            scale: 0,
            duration: 1.2,
            overwrite: true,
            ease: 'elastic.out(1, 1)'
        });
    }

    if (document.querySelector('.dot-animation')) {
        gsap.to('.dot-animation', {
            scale: 1,
            duration: 2.5,
            ease: 'back.out(1.1)'
        });
    }
};

/**
 * Animate the alert element
 *
 * @param {boolean} showAlert
 * @param {RefObject<HTMLDivElement>} alertRef
 */
export const alertAnimation = (showAlert: boolean, alertRef: RefObject<HTMLDivElement>) => {
    if (showAlert) {
        alertRef.current &&
            gsap.to(alertRef.current, {
                translateY: '-1.5rem',
                duration: 0.5,
                ease: 'elastic.out(0.1, 0.1)'
            });
    } else {
        alertRef.current &&
            gsap.to(alertRef.current, {
                translateY: '100%',
                duration: 0.5,
                ease: 'elastic.out(1, 1)'
            });
    }
};

/**
 * Pin animation starting from width 0 to auto
 *
 * @param {{ pinRef: MutableRefObject<any> }} { pinRef }
 */
export const pinAnimation = ({
    pinRef,
    width,
    trigger
}: {
    pinRef: MutableRefObject<any>;
    width: string;
    trigger: MutableRefObject<any>;
}) => {
    const { onEnter } = useOnScreen({ ref: trigger, triggerPosition: -50 });
    useEffect(() => {
        if (!trigger.current || !onEnter) return;

        gsap.to(pinRef.current, {
            width: width,
            duration: 2,
            ease: 'expo.inOut'
        });
    }, [onEnter]);
};

/**
 * Animation for sliding text left to right
 *
 * @param {{ pinRef: MutableRefObject<any> }} { pinRef }
 */
export const slideRightAnimation = ({
    element,
    trigger
}: {
    element: MutableRefObject<any>;
    trigger: MutableRefObject<any>;
}) => {
    const deviceSize = useDeviceSize();
    const { onEnter } = useOnScreen({ ref: trigger, triggerPosition: smallSizes.includes(deviceSize) ? '80%' : '90%' });
    useEffect(() => {
        if (!trigger.current || !element.current || !onEnter) return;

        gsap.to(element.current, {
            duration: 5,
            transform: 'translateX(100%)'
        });
    }, [deviceSize, onEnter]);
};

/**
 * Fade in animation for text and headings
 *
 * @params {{
 *     element: MutableRefObject<any>;
 *     trigger: MutableRefObject<any>;
 * }} {
 *     element,
 *     trigger
 * }
 */
export const fadeInAnimation = ({
    element,
    trigger
}: {
    element: MutableRefObject<any>;
    trigger: MutableRefObject<any>;
}) => {
    const { onEnter } = useOnScreen({ ref: trigger, triggerPosition: '85%', markers: true });
    useEffect(() => {
        if (!trigger.current || !element.current || !onEnter) return;

        gsap.to(element.current, {
            autoAlpha: 1,
            duration: 1,
            translateY: 0
        });
    }, [onEnter]);
};
