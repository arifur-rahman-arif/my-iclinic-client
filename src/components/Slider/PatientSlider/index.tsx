import { useOnScreen } from '@/hooks';
import { getNameAbbreviations } from '@/utils/miscellaneous';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Swiper.module.scss';

interface PatientSliderProps {
    sliderList: SlideProps[];
}

/**
 * Patient slider component
 * @param {SlideProps[]} sliderList
 * @returns {JSX.Element}
 * @constructor
 */
const PatientSlider = ({ sliderList }: PatientSliderProps): JSX.Element => {
    const swiperRef = useRef<any>(null);
    const { onEnter } = useOnScreen({ ref: swiperRef, repeat: true });
    const { onLeave } = useOnScreen({ ref: swiperRef, triggerPosition: '40%', repeat: true });

    useEffect(() => {
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

    return (
        <div>
            <Swiper
                spaceBetween={15}
                navigation={true}
                slidesPerView="auto"
                autoHeight={false}
                speed={2000}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                className={`${styles.style} ${styles.patientSlider} px-8`}
                ref={swiperRef}
            >
                {sliderList.map((slider, index) => (
                    <SwiperSlide className="max-w-[32rem] pb-28" key={index}>
                        <Slide {...slider} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PatientSlider;

export interface SlideProps {
    name: string;
    review: string;
    link: string;
}

/**
 * Individual card slide
 * @param {string} name
 * @param {string} review
 * @param {string} link
 * @returns {JSX.Element}
 * @constructor
 */
const Slide = ({ name, review, link }: SlideProps) => {
    const colorClasses = [
        'bg-red-300',
        'bg-green-300',
        'bg-purple-300',
        'bg-pink-300',
        'bg-indigo-300',
        'bg-gray-300',
        'bg-brandLight'
    ];

    /**
     * Generate random classes
     *
     * @returns {string}
     */
    const getRandomColorClass = () => {
        const randomIndex = Math.floor(Math.random() * colorClasses.length);
        return colorClasses[randomIndex];
    };

    return (
        <div className="bg-color16 !grid h-full min-h-[23.1rem] w-full content-between gap-6 rounded-primary p-10 !shadow-md !transition-shadow !duration-1000 hover:!shadow-2xl">
            <div className="grid content-start gap-6">
                <div className="flex items-center justify-start gap-1">
                    <Image src="/images/icons/icon-star-yellow.svg" alt="Star" width={20} height={20} />
                    <Image src="/images/icons/icon-star-yellow.svg" alt="Star" width={20} height={20} />
                    <Image src="/images/icons/icon-star-yellow.svg" alt="Star" width={20} height={20} />
                    <Image src="/images/icons/icon-star-yellow.svg" alt="Star" width={20} height={20} />
                    <Image src="/images/icons/icon-star-yellow.svg" alt="Star" width={20} height={20} />
                </div>

                <p className="line-clamp-5">{review}</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center justify-start gap-4">
                    <span
                        className={`grid h-[3.5rem] w-[3.5rem] place-items-center rounded-full ${getRandomColorClass()} font-latoExtraBold text-[1.2rem] tracking-wide`}
                    >
                        {getNameAbbreviations(name)}
                    </span>
                    <span className="font-mulishBold line-clamp-1">{name}</span>
                </div>

                <Link href={link || '#'} target="_blank">
                    <Image src="/images/logos/logo-trustpilot.png" alt="" width="90" height="37" />
                </Link>
            </div>
        </div>
    );
};
