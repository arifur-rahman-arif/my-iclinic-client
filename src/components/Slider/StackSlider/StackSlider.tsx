import styles from '../styles/Swiper.module.scss';

import { Autoplay, EffectFade, Mousewheel, Pagination } from 'swiper';

import { useOnScreen } from '@/hooks';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import Slide, { StackSlideInterface } from './Slide';

export interface HorizontalSliderInterface {
    name: string;
    title: string;
    description: string;
    reviewLink: string;
    star?: number;
    avatarUrl?: string;
}

interface StackSliderInterface {
    sliderList: StackSlideInterface[];
    noImages?: boolean;
}

/**
 * StackSlider slider component that will act as vertical slider in mobile devices
 *
 * @param {HorizontalSliderPropsInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const StackSlider = ({ sliderList, noImages }: StackSliderInterface): JSX.Element => {
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
            grabCursor={true}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            speed={800}
            mousewheel={{
                invert: false
            }}
            autoHeight={false}
            modules={[EffectFade, Pagination, Mousewheel, Autoplay]}
            className={`${styles.style} ${styles.fadeIn} ${
                noImages ? styles.stackSliderNoImage : styles.stackSlider
            } -mt-12 flex w-full md:mt-0  md:!overflow-visible  ${
                noImages ? 'md:max-w-[70rem]' : 'md:max-w-[80rem] xl:max-w-[100rem]'
            }`}
            ref={swiperRef}
            onScroll={(swiper) => {
                if (swiper.realIndex == sliderList.length - 1 && swiper.previousIndex == sliderList.length - 1) {
                    setTimeout(() => {
                        swiper.mousewheel.disable();
                    }, 300);
                }
            }}
        >
            {sliderList.map((stack, index) => (
                <SwiperSlide className="w-full sm:p-12 pb-20 md:pb-0" key={index}>
                    <Slide index={index} {...stack} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default StackSlider;
