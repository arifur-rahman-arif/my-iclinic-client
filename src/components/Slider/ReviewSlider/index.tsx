import styles from '@/components/Slider/styles/Swiper.module.scss';
import { useOnScreen } from '@/hooks';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

interface ReviewSliderProps {
    sliders: Array<{
        image: string;
        name: string;
        title: string;
        description: string;
    }>;
}

/**
 * ReviewSlider is a component that displays a slideshow of customer reviews or testimonials.
 *
 * @param {ReviewSliderProps} props - The props for configuring the ReviewSlider.
 * @param {Array<SlideData>} props.sliders - An array of SlideData objects representing individual review slides.
 * @returns {JSX.Element} The rendered ReviewSlider component.
 */
const ReviewSlider = ({ sliders }: ReviewSliderProps): JSX.Element => {
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
    }, [onEnter, onLeave]);

    return (
        <div className="relative w-full max-w-[50rem] justify-self-center overflow-hidden md:justify-self-start">
            <Swiper
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                autoHeight={true}
                speed={800}
                navigation={true}
                grabCursor={false}
                allowTouchMove={false}
                modules={[EffectFade, Navigation, Autoplay]}
                className={`${styles.style} ${styles.fadeIn} ${styles.reviewSlider}`}
                ref={swiperRef}
            >
                {sliders.map((item, index) => (
                    <SwiperSlide className="w-full md:pb-0" key={index}>
                        <Slide {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

/**
 * Slide is a component that represents an individual slide in a horizontal slider, typically used for displaying reviews or testimonials.
 *
 * @param {string} props.title - The title or heading associated with the review or testimonial.
 * @returns {JSX.Element} The rendered Slide component.
 */
const Slide = ({
    image,
    name,
    title,
    description
}: {
    image: string;
    name: string;
    title: string;
    description: string;
}): JSX.Element => {
    return (
        <div className="grid gap-12">
            <div className="grid max-w-[43rem] grid-cols-2 items-center gap-4">
                <Image
                    src={image}
                    alt=""
                    width={116}
                    height={116}
                    className="col-span-2 justify-self-start rounded-full"
                />
                <span className="self-end font-mulishBold text-[2rem] leading-[2.8rem] text-heading line-clamp-1">
                    {name}
                </span>
                <Image src="/images/icons/icon-5-stars.svg" alt="" width={160} height={28} />
            </div>

            <div className="grid max-w-[50rem] gap-6">
                <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] line-clamp-1">{title}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewSlider;
