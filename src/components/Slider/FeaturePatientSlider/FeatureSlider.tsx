import styles from '../styles/Swiper.module.scss';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import { useOnScreen } from '@/hooks';
import { ReactNode, useEffect, useRef } from 'react';
import { Swiper } from 'swiper/react';

interface StackSliderInterface {
    children: ReactNode;
}

/**
 * StackSlider slider component that will act as vertical slider in mobile devices
 *
 * @returns {*}  {JSX.Element}
 */
const FeatureSlider = ({ children }: StackSliderInterface): JSX.Element => {
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
            swiperRef.current?.swiper.autoplay.stop();
            if (onLeave) swiperRef.current?.swiper.slideNext();
        }
    }, [onEnter, onLeave]);

    return (
        <Swiper
            effect="fade"
            grabCursor={true}
            navigation={true}
            pagination={{
                clickable: true,
                type: 'fraction'
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            speed={800}
            autoHeight={false}
            modules={[EffectFade, Pagination, Navigation, Autoplay]}
            className={`${styles.style} ${styles.fadeIn} ${styles.featureSlider} w-full `}
            ref={swiperRef}
        >
            {children}
        </Swiper>
    );
};

export default FeatureSlider;
