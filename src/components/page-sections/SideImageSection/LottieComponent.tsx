import * as animationData from '@/lottie/scroll-down.lottie.json';
import { getElementTopPosition } from '@/utils/miscellaneous';
import { useRef } from 'react';
import Lottie from 'react-lottie';

/**
 * Lottie component
 *
 * @returns {*}  {JSX.Element}
 */
const LottieComponent = (): JSX.Element => {
    const anchorRef = useRef<HTMLSpanElement | null>(null);
    return (
        <span
            className="mt-12 cursor-pointer place-self-center md:mt-40"
            onClick={(e) => {
                window.scrollTo(0, getElementTopPosition(anchorRef.current as HTMLElement) + 100);
            }}
            ref={anchorRef}
        >
            <Lottie
                options={{
                    animationData: animationData,
                    autoplay: true,
                    loop: true
                }}
                speed={1}
                title="Scroll down"
                style={{ width: '7.3rem', height: '7.3rem', background: 'transparent', pointerEvents: 'none' }}
            />
        </span>
    );
};

export default LottieComponent;
