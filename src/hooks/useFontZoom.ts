import { useState } from 'react';

interface UseFontZoomReturnProps {
    handleZoomToggle: () => void;
}

/**
 * Increase or decrease the website font size
 *
 * @returns {UseFontZoomReturnProps}
 */
const useFontZoom = (): UseFontZoomReturnProps => {
    const [isZoomed, setIsZoomed] = useState<boolean>(false);

    /**
     * Increase or decrease the website font size
     */
    const handleZoomToggle = () => {
        setIsZoomed(!isZoomed);

        const rootElement: Element | null = document.querySelector(':root');
        if (rootElement) {
            rootElement.style.setProperty('--root-font-size', isZoomed ? '62.5%' : '70%');
        }
    };

    return { handleZoomToggle };
};

export default useFontZoom;
