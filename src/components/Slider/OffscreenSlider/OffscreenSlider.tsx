import Slide, { SlideInterface } from './Slide';
import { useOnScreen } from '@/hooks';
import { useEffect, useRef } from 'react';
import { Autoplay, EffectFade, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';

interface OffscreenSliderInterface {
    sliderList: SlideInterface[];
}

/**
 * OffScreen Slider
 *
 * @param {SlideInterface[]} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const OffscreenSlider = ({ sliderList }: OffscreenSliderInterface): JSX.Element => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const { onEnter } = useOnScreen({ ref: swiperRef, repeat: true });
    const { onLeave } = useOnScreen({ ref: swiperRef, triggerPosition: '40%', repeat: true });

    useEffect(() => {
        if (!swiperRef.current) return;

        // When the slider enters start the slider
        // When slider is scrolled to 30% of viewport stop the slider autoplay
        // If slider is again in the viewport start the slider again
        if (onEnter) {
            if (onLeave) {
                swiperRef.current?.swiper.autoplay.stop();
                swiperRef.current?.swiper.mousewheel.enable();
            } else {
                swiperRef.current?.swiper.autoplay.start();
            }
        } else {
            swiperRef.current?.swiper.autoplay.stop();
            if (onLeave) swiperRef.current?.swiper.slideNext();
        }
    }, [onEnter, onLeave]);

    return (
        <Swiper
            effect="fade"
            loop={true}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            mousewheel={{
                invert: false
            }}
            autoHeight={false}
            speed={800}
            modules={[EffectFade, Pagination, Mousewheel, Autoplay]}
            className={`${styles.style} ${styles.fadeIn} ${styles.offScreenSlider}`}
            ref={swiperRef}
            onScroll={(swiper) => {
                if (swiper?.realIndex == sliderList.length - 1 && swiper?.previousIndex == sliderList.length - 1) {
                    setTimeout(() => {
                        swiper.mousewheel.disable();
                    }, 300);
                }
            }}
        >
            {sliderList.map((item, index) => (
                <SwiperSlide className="w-full pb-0 pl-8 md:pl-16 md:pb-0">
                    <Slide {...item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OffscreenSlider;
