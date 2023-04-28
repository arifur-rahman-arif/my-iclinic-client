import { SliderListInterface } from '@/components/Slider/JourneySlider/journeySliderList';
import Slide from '@/components/Slider/JourneySlider/Slide';
import { useOnScreen } from '@/hooks';
import { useEffect, useRef } from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';

interface SliderProps {
    sliderList: SliderListInterface[];
}

/**
 * Slider
 *
 *
 * @param {SliderListInterface[]} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const Slider = ({ sliderList }: SliderProps) => {
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
            } else {
                swiperRef.current?.swiper.autoplay.start();
            }
        } else {
            swiperRef.current?.swiper.autoplay.stop();
        }

        // SwiperRef.current?.swiper.autoplay.stop();
    }, [onEnter, onLeave]);

    return (
        <Swiper
            effect="fade"
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            autoHeight={true}
            speed={800}
            navigation={true}
            modules={[EffectFade, Navigation, Autoplay]}
            className={`${styles.style} ${styles.fadeIn} ${styles.offScreenSlider} ${styles.journeySlider}`}
            ref={swiperRef}
        >
            {sliderList.map((item, index) => (
                <SwiperSlide className="w-full md:pb-0" key={index}>
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

export default Slider;
