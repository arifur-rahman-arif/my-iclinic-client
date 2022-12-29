import { useEffect, useState } from 'react';

export type AcceptedDeviceSizes = 'xs' | 'small' | 'medium' | 'large' | 'xl' | '';

export const smallSizes = ['xs', 'small'];
export const largeSizes = ['medium', 'large', 'xl'];

/**
 * Hooks to detect the screen size either on resize or page load
 *
 * @param {(number | null)} [customScreenSize=null]
 * @returns {*}  {AcceptedDeviceSizes}
 */
const useDeviceSize = (): AcceptedDeviceSizes => {
    const [deviceSize, setDeviceSize] = useState<AcceptedDeviceSizes>('');

    useEffect(() => {
        changeDeviceSize();

        window.addEventListener('resize', changeDeviceSize);
    }, []);

    /**
     * Change the state base on the screen size
     */
    const changeDeviceSize = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth >= 0 && windowWidth < 640) {
            setDeviceSize('xs');
        }

        if (windowWidth >= 640 && windowWidth < 768) {
            setDeviceSize('small');
        }

        if (windowWidth >= 768 && windowWidth < 1024) {
            setDeviceSize('medium');
        }

        if (windowWidth >= 1024 && windowWidth < 1280) {
            setDeviceSize('large');
        }

        if (windowWidth >= 1280) {
            setDeviceSize('xl');
        }
    };

    return deviceSize;
};

export default useDeviceSize;
