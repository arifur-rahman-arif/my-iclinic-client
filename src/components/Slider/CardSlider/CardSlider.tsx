import { Swiper } from 'swiper/react';

import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper';
import styles from '../styles/Swiper.module.scss';

import { Navigation, Pagination, Autoplay } from 'swiper';

interface CardSliderPropsInterface {
    children: JSX.Element | JSX.Element[];
}

/**
 * Card slider component
 *
 * @param {CardSliderPropsInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const CardSlider = ({ children }: CardSliderPropsInterface): JSX.Element => {
    return (
        <Swiper
            effect="cards"
            grabCursor={true}
            navigation={true}
            centeredSlides={true}
            pagination={{
                clickable: true,
                type: 'fraction'
            }}
            autoHeight={false}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            modules={[EffectCards, Navigation, Pagination, Autoplay]}
            className={`${styles.style}`}
        >
            {children}
        </Swiper>
    );
};

export default CardSlider;
