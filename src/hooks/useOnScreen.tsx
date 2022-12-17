import { useEffect, useState } from 'react';

/**
 * Hooks to detect a component is visible on the screen or not.
 * If the component is visible then it will return true
 *
 * @param {*} ref
 * @returns {*}  {boolean}
 */
const useOnScreen = (ref: any): boolean => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(entry.target);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Window.addEventListener('scroll', () => {
        //     const clientRect = ref.current.getBoundingClientRect();

        //     console.log(clientRect);
        // });
    }, []);

    return isIntersecting;
};

export default useOnScreen;
