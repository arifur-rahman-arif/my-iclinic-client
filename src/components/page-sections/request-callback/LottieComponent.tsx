import * as animationData from '@/lottie/check.lottie.json';
import Lottie from 'react-lottie';

/**
 * Lottie component
 *
 * @returns {*}  {JSX.Element}
 */
const LottieComponent = (): JSX.Element => {
    return (
        <Lottie
            options={{
                animationData: animationData,
                autoplay: true,
                loop: false
            }}
            speed={1}
            title="Thank you"
            style={{ width: '5.3rem', height: '5.3rem', background: 'transparent' }}
        />
    );
};

export default LottieComponent;
