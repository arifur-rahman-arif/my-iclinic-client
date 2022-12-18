import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/Swiper.module.scss';

import { useEffect, useState } from 'react';
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
    const [autoHeight, setAutoHeight] = useState<boolean>(true);
    const [navigation, setNavigation] = useState<boolean>(true);
    const [speed, setSpeed] = useState<number>(300);
    const [autoPlayConfig] = useState<any>({
        delay: 4000,
        disableOnInteraction: false
    });
    // Const [modules, setModules] = useState<Array<any>>([Autoplay, Pagination, Navigation]);
    const [paginationConfig, setPaginationConfig] = useState<any>({
        clickable: true,
        type: 'fraction'
    });

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
            setAutoHeight(true);
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
            setAutoHeight(false);
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
            autoHeight={autoHeight}
            autoplay={autoPlayConfig}
            modules={[Autoplay, Pagination, Navigation]}
            className={`${styles.style} max-h-[54rem] w-full max-w-[43.5rem] md:min-h-[54rem] lg:h-[54rem] lg:min-h-max`}
        >
            {children}
        </Swiper>
    );
};

export default HorizontalSlider;
