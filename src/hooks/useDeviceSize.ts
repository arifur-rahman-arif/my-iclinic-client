import { useEffect, useState } from 'react';

type AcceptedDeviceSizes = 'small' | 'large';

/**
 * Hooks to detect the screen size either on resize or page load
 *
 * @returns {*}  {AcceptedDeviceSizes}
 */
const useDeviceSize = (): AcceptedDeviceSizes => {
    const [deviceSize, setDeviceSize] = useState<AcceptedDeviceSizes>('small');

    useEffect(() => {
        changeDeviceSize();

        window.addEventListener('resize', changeDeviceSize);
    }, []);

    /**
     * Change the state base on the screen size
     */
    const changeDeviceSize = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth < 768) {
            setDeviceSize('small');
        } else {
            setDeviceSize('large');
        }
    };

    return deviceSize;
};

export default useDeviceSize;
