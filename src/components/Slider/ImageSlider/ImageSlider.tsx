import styles from '@/components/Slider/styles/Swiper.module.scss';
import { useOnScreen } from '@/hooks';
import { ReactNode, useEffect, useRef } from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper } from 'swiper/react';

interface ImageSliderInterface {
    children: ReactNode;
}

/**
 * Image fade in slider
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
const ImageSlider = ({ children }: ImageSliderInterface): JSX.Element => {
    const swiperRef = useRef<any>(null);

    const { onEnter } = useOnScreen({ ref: swiperRef, repeat: true });
    const { onLeave } = useOnScreen({ ref: swiperRef, triggerPosition: '40%', repeat: true });

    useEffect(() => {
        // When the slider enters start the slider
        // When slider is scrolled to 30% of viewport stop the slider autoplay
        // If slider is again in the viewport start the slider again
        if (onEnter) {
            if (onLeave) {
                swiperRef.current.swiper.autoplay.stop();
            } else {
                swiperRef.current.swiper.autoplay.start();
            }
        } else {
            swiperRef.current.swiper?.autoplay.stop();
        }
    }, [onEnter, onLeave]);

    return (
        <Swiper
            effect="fade"
            grabCursor={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            speed={1000}
            loop={true}
            modules={[EffectFade, Autoplay]}
            autoHeight={false}
            className={`${styles.style} ${styles.fadeIn} w-full`}
            ref={swiperRef}
        >
            {children}
        </Swiper>
    );
};

export default ImageSlider;
