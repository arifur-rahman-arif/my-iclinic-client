import { useOnScreen } from '@/hooks';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';

interface CoverFlowSliderInterface {
    sliderList: string[];
}

/**
 * Coverflow slider component
 *
 * @param {string[]} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const CoverFlowSlider = ({ sliderList }: CoverFlowSliderInterface): JSX.Element => {
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
                swiperRef?.current?.swiper?.autoplay.stop();
            } else {
                swiperRef?.current?.swiper?.autoplay.start();
            }
        } else {
            swiperRef.current?.swiper.autoplay.stop();
            if (onLeave) swiperRef.current?.swiper.slideNext();
        }
    }, [onEnter, onLeave]);

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true
            }}
            speed={1000}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            className={`${styles.style} ${styles.coverFlowSlider}`}
            modules={[Pagination, EffectCoverflow, Autoplay]}
            ref={swiperRef}
        >
            {sliderList.map((slider, index) => (
                <SwiperSlide className="h-[22rem] w-full max-w-[40.2rem]" key={index}>
                    <Image
                        src={slider}
                        alt=""
                        width={402}
                        height={220}
                        className="h-[22rem] w-full max-w-[40.2rem] object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CoverFlowSlider;
