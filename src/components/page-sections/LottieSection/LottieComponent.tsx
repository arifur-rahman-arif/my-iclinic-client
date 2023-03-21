import * as animationDataLarge from '@/lottie/presbyond-large.lottie.json';
import * as animationData from '@/lottie/presbyond.lottie.json';
import Lottie from 'react-lottie';
import { useDeviceSize, smallSizes, largeSizes } from '@/hooks';

interface LottieComponentInterface {
    startAnimation: boolean;
}

/**
 * Lottie component
 *
 * @returns {*}  {JSX.Element}
 */
const LottieComponent = ({ startAnimation = false }: LottieComponentInterface): JSX.Element => {
    const deviceSize = useDeviceSize();

    return (
        <>
            {smallSizes.includes(deviceSize) && (
                <div className="md:hidden">
                    <Lottie
                        options={{
                            animationData: animationData,
                            autoplay: true,
                            loop: false
                        }}
                        isPaused={!startAnimation}
                        speed={1}
                        title="Lottie animation"
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'transparent',
                            pointerEvents: 'none'
                        }}
                    />
                </div>
            )}
            {largeSizes.includes(deviceSize) && (
                <div className="hidden md:block">
                    <Lottie
                        options={{
                            animationData: animationDataLarge,
                            autoplay: true,
                            loop: false
                        }}
                        isPaused={!startAnimation}
                        speed={1}
                        title="Lottie animation"
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'transparent',
                            pointerEvents: 'none'
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default LottieComponent;
