import gsap from 'gsap';
import { MutableRefObject, RefObject, useEffect } from 'react';

/**
 * The bar animation for the main parent menus
 */
export const barAnimation = () => {
    if (document.querySelectorAll('.bar-animation-inactive').length) {
        gsap.to('.bar-animation-inactive', {
            width: '0%',
            duration: 0.4,
            overwrite: true
        });
    }

    if (document.querySelector('.bar-animation')) {
        gsap.to('.bar-animation', {
            width: '100%',
            duration: 1.5,
            ease: 'elastic.out(1, 0.3)'
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
            duration: 1.2,
            ease: 'elastic.out(1, 0.3)'
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
    useEffect(() => {
        if (!trigger.current) return;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: trigger.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });

        timeline.to(pinRef.current, {
            width: width,
            duration: 2,
            ease: 'expo.inOut'
        });
    }, []);
};

/**
 * Image scale animation that will scale down the initial extra size
 *
 * @param {{ pinRef: MutableRefObject<any> }} { pinRef }
 */
export const imageScaleAnimation = ({ imageRef }: { imageRef: MutableRefObject<any> }) => {
    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            }
        });

        timeline.to(imageRef.current, {
            scale: 1,
            duration: 1.5,
            opacity: 1,
            marginTop: 0,
            ease: 'sine.inOut'
        });
    }, []);
};
