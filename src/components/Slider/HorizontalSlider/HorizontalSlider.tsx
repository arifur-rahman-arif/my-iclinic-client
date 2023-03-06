import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/Swiper.module.scss';

import { useOnScreen } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

export interface HorizontalSliderInterface {
    name: string;
    title: string;
    description: string;
    reviewLink: string;
    star?: number;
    avatarUrl?: string;
}

interface HorizontalSliderPropsInterface {
    children: JSX.Element | JSX.Element[];
}

/**
 * HorizontalSlider slider component that will act as vertical slider in mobile devices
 *
 * @param {HorizontalSliderPropsInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const HorizontalSlider = ({ children }: HorizontalSliderPropsInterface): JSX.Element => {
    const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');
    const [slidesPerView, setSlidesPerView] = useState<number>(1);
    const [sliderSpace, setSliderSpace] = useState<number>(0);
    const [navigation, setNavigation] = useState<boolean>(true);
    const [speed, setSpeed] = useState<number>(300);
    const [autoPlayConfig] = useState<any>({
        delay: 4000,
        disableOnInteraction: false
    });

    const swiperRef = useRef<any>(null);
    // Const [modules, setModules] = useState<Array<any>>([Autoplay, Pagination, Navigation]);
    const [paginationConfig, setPaginationConfig] = useState<any>({
        clickable: true,
        type: 'fraction'
    });

    const { onEnter } = useOnScreen({ ref: swiperRef, repeat: true });
    const { onLeave } = useOnScreen({ ref: swiperRef, triggerPosition: '40%', repeat: true });

    useEffect(() => {
        const windowWidth = window.innerWidth;

        setSliderOptions();

        window.addEventListener('resize', () => {
            if (windowWidth < 768) {
                setSliderOptions();
            } else {
                setDirection('vertical');
                setSliderOptions();
            }
        });
    }, []);

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
            if (onLeave) swiperRef.current?.swiper.slideNext();
        }
    }, [onEnter, onLeave]);

    /**
     * Set the slider options for mobile and desktop devices.
     */
    const setSliderOptions = () => {
        const windowWidth = window.innerWidth;

        // For the mobile devices
        if (windowWidth < 768) {
            setDirection('horizontal');
            setSlidesPerView(1);
            setSliderSpace(1);
            setNavigation(true);
            setSpeed(300);
            setPaginationConfig({
                clickable: true,
                type: 'fraction'
            });
        } else {
            // For the tablet & desktop devices
            setDirection('vertical');
            setSlidesPerView(2);
            setSliderSpace(30);
            setNavigation(false);
            setPaginationConfig(false);
            setSpeed(2000);
        }
    };

    return (
        <Swiper
            speed={speed}
            direction={direction}
            slidesPerView={slidesPerView}
            spaceBetween={sliderSpace}
            navigation={navigation}
            pagination={paginationConfig}
            autoHeight={false}
            autoplay={autoPlayConfig}
            modules={[Autoplay, Pagination, Navigation]}
            ref={swiperRef}
            className={`${styles.style} max-h-[54rem] w-full max-w-[43.5rem] md:min-h-[54rem] lg:h-[54rem] lg:min-h-max`}
        >
            {children}
        </Swiper>
    );
};

export default HorizontalSlider;
