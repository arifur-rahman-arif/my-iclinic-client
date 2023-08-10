import { useFontZoom } from '@/hooks';
import LetterIcon from '@/icons/icon-letter-aa-large.svg';
import Image from 'next/image';

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
            className="fixed top-[40%] right-0 z-10 hidden translate-x-8 cursor-pointer rounded-bl-primary rounded-tl-primary border-t-2 border-b-2 border-l-2 pr-8 shadow-shadow1 transition-all duration-500 hover:border-brand sm:block"
            onClick={handleZoomToggle}
        >
            <Image src={LetterIcon} alt="Font Resizer" />
        </button>
    );
};

export default FontResizer;
