import { useFontZoom } from '@/hooks';
import Image from 'next/image';
import LetterIcon from '@/icons/icon-letter-aa-large.svg';

/**
 * Increase or decrease the font size of the website
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FontResizer = () => {
    const { handleZoomToggle } = useFontZoom();

    return (
        <button
            className="fixed top-[40%] right-0 z-10 hidden cursor-pointer rounded-primary shadow-shadow1 sm:block"
            onClick={handleZoomToggle}
        >
            <Image src={LetterIcon} alt="Font Resizer" />
        </button>
    );
};

export default FontResizer;
