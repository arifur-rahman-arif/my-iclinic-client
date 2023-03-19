import { BlogCard } from '@/components/Card';
import { BlogCardInterface } from '@/components/Card/BlogCard';
import { useDeviceSize, useOnScreen } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';

interface OnScreenSliderInterface {
    sliderList: BlogCardInterface[];
}

/**
 * On screen horizontal slider
 *
 * @param {BlogCardInterface[]} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const OnScreenSlider = ({ sliderList }: OnScreenSliderInterface): JSX.Element => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const { onEnter } = useOnScreen({ ref: swiperRef, repeat: true });
    const { onLeave } = useOnScreen({ ref: swiperRef, triggerPosition: '40%', repeat: true });
    const deviceSize = useDeviceSize();
    const [loop, setLoop] = useState<boolean>(false);

    useEffect(() => {
        if (!deviceSize) return;

        if (deviceSize === 'xs') {
            setLoop(true);
        } else {
            setLoop(false);
        }
    }, [deviceSize]);

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
            swiperRef.current?.swiper.autoplay.stop();
            if (onLeave) swiperRef.current?.swiper.slideNext();
        }
    }, [onEnter, onLeave]);

    return (
        <Swiper
            spaceBetween={30}
            navigation={true}
            loop={loop}
            loopAdditionalSlides={loop ? 6 : 0}
            speed={1000}
            pagination={{
                clickable: true,
                type: 'fraction'
            }}
            breakpoints={{
                300: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 4
                }
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            className={`${styles.style} ${styles.blogSlider}`}
            modules={[Autoplay, Pagination, Navigation]}
            ref={swiperRef}
        >
            {sliderList.map((slider, index) => (
                <SwiperSlide className="w-full max-w-[26.9rem]" key={index}>
                    <BlogCard {...slider} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OnScreenSlider;
