import { useOnScreen } from '@/hooks';
import { useEffect, useRef } from 'react';

import { Autoplay, EffectFade, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';
import { SliderListInterface } from './journeySliderList';
import Slide from './Slide';

interface StackSliderInterface {
    sliderList: SliderListInterface[];
}

/**
 * JourneySlider slider component that will act as vertical slider in mobile devices
 *
 * @param {HorizontalSliderPropsInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const JourneySlider = ({ sliderList }: StackSliderInterface): JSX.Element => {
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

        // SwiperRef.current?.swiper.autoplay.stop();
    }, [onEnter, onLeave]);

    return (
        <Swiper
            effect="fade"
            loop={true}
            grabCursor={true}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            autoHeight={false}
            mousewheel={{
                invert: false
            }}
            speed={800}
            modules={[EffectFade, Pagination, Mousewheel, Autoplay]}
            className={`${styles.style} ${styles.fadeIn} ${styles.journeySlider}`}
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
                <SwiperSlide className="w-full pb-12 sm:px-12 md:pb-0" key={index}>
                    <Slide
                        {...item}
                        index={index}
                        swiperRef={swiperRef}
                        active={true}
                        sliderListLength={sliderList.length}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default JourneySlider;
