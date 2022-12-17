import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper';
import styles from '../../styles/Swiper.module.scss';

import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import { trimText } from '@/utils/miscellaneous';

export interface NormalSlideInterface {
    description: string;
    name: string;
    title: string;
    company: string;
}

interface NormalSlidePropInterface {
    sliderList: NormalSlideInterface[];
}

/**
 * Normal slider
 *
 * @param {NormalSlidePropInterface} { sliderList }
 * @returns {*}
 */
const NormalSlide = ({ sliderList }: NormalSlidePropInterface) => {
    return (
        <div>
            <Swiper
                effect="cards"
                navigation={true}
                centeredSlides={true}
                autoHeight={true}
                pagination={{
                    clickable: true,
                    type: 'fraction'
                }}
                modules={[EffectCards, Navigation, Pagination]}
                className={`${styles.style}`}
            >
                {sliderList.map((slider, index) => (
                    <SwiperSlide className="grid place-items-center pb-20" key={index}>
                        <div className="max-w-[45rem] p-12">
                            <div className="grid h-full w-full grid-cols-2 gap-y-[4.5rem] gap-x-4 rounded-primary bg-white p-12 shadow-shadow1 md:py-[3.7rem] md:px-[4.4rem]">
                                <p className="col-span-2 col-start-1 px-3">{trimText(slider.description, 205) || ''}</p>
                                <div className="flex flex-col items-start gap-1">
                                    <h4 className="font-fontBold text-[1.8rem] normal-case">{slider.name}</h4>
                                    <span>
                                        {slider.title} of {slider.company}
                                    </span>
                                </div>
                                <div className="flex items-center justify-start">
                                    {[...Array(5)].map((_, index) => (
                                        <Image
                                            src="/images/icons/icon-star-yellow.svg"
                                            alt=""
                                            width={22}
                                            height={22}
                                            className="md:h-auto md:w-auto"
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NormalSlide;
