import * as animationData from '@/lottie/check.lottie2.json';
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
            style={{ width: 150, height: 150, background: 'transparent', borderRadius: '50%' }}
        />
    );
};

export default LottieComponent;
