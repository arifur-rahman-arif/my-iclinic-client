import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useOnScreen } from '@/hooks';
import ComponentLoader from '@/components/ComponentLoader';

const Lottie = dynamic(() => import('./LottieFile'), {
    loading: () => <ComponentLoader className="h-full min-h-min md:min-h-min" />
});

interface LottieComponentInterface {
    animationData: any;
    loop?: boolean;
}

/**
 * Lottie component
 *
 * @returns {*}  {JSX.Element}
 */
const LottieComponent = ({ animationData, loop }: LottieComponentInterface): JSX.Element => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef, triggerPosition: 100 });

    return (
        <div ref={containerRef} className="row-start-1 justify-self-center md:row-auto md:justify-self-auto">
            {onEnter ? (
                <Lottie animationData={animationData} loop={loop} />
            ) : (
                <ComponentLoader className="h-full min-h-min md:min-h-min" />
            )}
        </div>
    );
};

export default LottieComponent;
