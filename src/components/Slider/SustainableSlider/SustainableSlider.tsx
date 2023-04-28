import styles from '../styles/Swiper.module.scss';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import { useOnScreen } from '@/hooks';
import { Children, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SustainableSliderInterface {
    children: JSX.Element[];
}

/**
 * SustainableSlider page slider
 *
 * @param {SustainableSliderInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const SustainableSlider = ({ children }: SustainableSliderInterface): JSX.Element => {
    const childrenCount: number = Children.count(children);

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
            swiperRef.current.swiper.autoplay.stop();
        }
    }, [onEnter, onLeave]);

    return (
        <Swiper
            effect="fade"
            grabCursor={true}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            speed={800}
            autoHeight={false}
            modules={[EffectFade, Pagination, Navigation, Autoplay]}
            className={`${styles.style} ${styles.fadeIn} ${styles.sustainableSlider} w-full`}
            ref={swiperRef}
        >
            {[...Array(childrenCount)].map((_, index) => (
                <SwiperSlide key={index}>{children[index]}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SustainableSlider;
