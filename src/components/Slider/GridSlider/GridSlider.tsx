import { useDeviceSize, useOnScreen } from '@/hooks';
import { Children, useEffect, useRef } from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';

interface GridSlider1Interface {
    children: JSX.Element[];
}

/**
 * SustainableSlider page slider
 *
 * @param {SustainableSliderInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const GridSlider = ({ children }: GridSlider1Interface): JSX.Element => {
    const childrenCount: number = Children.count(children);
    const swiperRef = useRef<SwiperRef | null>(null);
    const deviceSize = useDeviceSize();
    const { onEnter } = useOnScreen({ ref: swiperRef, repeat: true });
    const { onLeave } = useOnScreen({ ref: swiperRef, triggerPosition: '40%', repeat: true });

    useEffect(() => {
        // When the slider enters start the slider
        // When slider is scrolled to 30% of viewport stop the slider autoplay
        // If slider is again in the viewport start the slider again
        if (onEnter) {
            if (onLeave) {
                swiperRef?.current?.swiper?.autoplay.stop();
            } else {
                swiperRef?.current?.swiper?.autoplay.start();
            }
        } else {
            swiperRef?.current?.swiper?.autoplay.stop();
        }
    }, [onEnter, onLeave]);

    useEffect(() => {
        if (!swiperRef.current) return;

        if (['xs'].includes(deviceSize)) {
            swiperRef?.current?.swiper?.init();
            swiperRef?.current?.swiper?.enable();
        }
        if (['small', 'medium', 'large', 'xl'].includes(deviceSize)) {
            swiperRef?.current?.swiper?.destroy(true, true);
        }
    }, [deviceSize]);

    return (
        <Swiper
            autoHeight={false}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className={`${styles.gridSlider}`}
            init={false}
            ref={swiperRef}
        >
            {[...Array(childrenCount)].map((_, index) => (
                <SwiperSlide key={index} className="pt-4 pb-20 sm:py-2">
                    {children[index]}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GridSlider;
