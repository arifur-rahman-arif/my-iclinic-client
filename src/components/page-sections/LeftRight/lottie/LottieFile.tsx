import Lottie from 'react-lottie';

interface LottieComponentInterface {
    animationData: any;
    loop?: boolean;
}

/**
 * Lottie component
 *
 * @returns {*}  {JSX.Element}
 */
const LottieFile = ({ animationData, loop = true }: LottieComponentInterface): JSX.Element => {
    return (
        <Lottie
            options={{
                animationData: animationData,
                autoplay: true,
                loop: loop
            }}
            speed={1}
            title="Lottie animation"
            style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
                pointerEvents: 'none'
            }}
        />
    );
};

export default LottieFile;
