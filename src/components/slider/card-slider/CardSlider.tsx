import { Swiper } from 'swiper/react';

import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper';
import styles from '../styles/Swiper.module.scss';

import { Navigation, Pagination } from 'swiper';

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
            autoHeight={true}
            modules={[EffectCards, Navigation, Pagination]}
            className={`${styles.style}`}
        >
            {children}
        </Swiper>
    );
};

export default CardSlider;
