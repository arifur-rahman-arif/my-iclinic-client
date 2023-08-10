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
    const [zoomed, setZoomed] = useState<boolean>(false);
    const [originalStyles, setOriginalStyles] = useState<
        Map<
            HTMLElement,
            {
                fontSize: string;
                lineHeight: string;
            }
        >
    >(new Map());
    const percentage = 15;

    /**
     * Toggle the website font size
     */
    const handleZoomToggle = () => {
        if (!zoomed) {
            const textElements = document.querySelectorAll(
                'p, span, h1, h2, h3, h4, h5, h6, li, a, button, strong, b, div, input, article, code, blockquote'
            );

            const newStylesMap = new Map<HTMLElement, { fontSize: string; lineHeight: string }>();

            textElements.forEach((element) => {
                if (!element.closest('header')) {
                    const computedStyle = getComputedStyle(element);
                    const currentFontSize = computedStyle.fontSize;
                    const currentLineHeight = computedStyle.lineHeight;

                    newStylesMap.set(element as HTMLElement, {
                        fontSize: currentFontSize,
                        lineHeight: currentLineHeight
                    });

                    const newFontSize = (parseFloat(currentFontSize) * (1 + percentage / 100)).toFixed(2) + 'px';
                    const newLineHeight = (parseFloat(currentLineHeight) * (1 + percentage / 100)).toFixed(2) + 'px';

                    (element as HTMLElement).style.fontSize = newFontSize;
                    (element as HTMLElement).style.lineHeight = newLineHeight;
                }
            });

            setOriginalStyles(newStylesMap);
            setZoomed(true);
        } else {
            originalStyles.forEach((styles, element) => {
                element.style.fontSize = styles.fontSize;
                element.style.lineHeight = styles.lineHeight;
            });

            setOriginalStyles(new Map());
            setZoomed(false);
        }
    };

    return { handleZoomToggle };
};

export default useFontZoom;
