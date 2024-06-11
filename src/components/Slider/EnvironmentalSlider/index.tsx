import { Button2 } from '@/components/Buttons';
import styles from '@/components/Slider/styles/Swiper.module.scss';
import { useOnScreen } from '@/hooks';
import IconArrow from '@/icons/icon-dotted-arrow.svg';
import { BulletList } from '@/page-sections/index';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import BookConsultation from '@/components/page-sections/SectionParts/BookConsultation/BookConsultation';

/**
 * EnvironmentalSlider is a component that displays a slideshow using the Swiper library.
 * It features automatic slideshow playback with custom behavior when entering and leaving the viewport.
 *
 * @returns {JSX.Element} The rendered EnvironmentalSlider component.
 */
const EnvironmentalSlider = (): JSX.Element => {
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
        <div className="relative overflow-hidden">
            <Swiper
                effect="fade"
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                grabCursor={true}
                // allowTouchMove={false}
                speed={800}
                autoHeight={false}
                modules={[EffectFade, Pagination, Navigation, Autoplay]}
                className={`${styles.style} ${styles.fadeIn} ${styles.sustainableSlider} w-full`}
                ref={swiperRef}
            >
                <SwiperSlide>
                    <Slide1 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide3 />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

/**
 * Slide1 is a component that represents the first slide in a slideshow. It displays information about the environmental impact of wearing glasses and contact lenses.
 *
 * @returns {JSX.Element} The rendered Slide1 component.
 */
const Slide1 = (): JSX.Element => {
    return (
        <div className="grid grid-cols-2 gap-6 lg:max-h-[52.4rem] lg:grid-cols-[auto_auto_1fr]">
            <Image
                src="/images/section-images/mountain-and-rivers.webp"
                alt=""
                width={435}
                height={534}
                className="h-full w-full rounded-primary"
            />
            <Image
                src="/images/section-images/plastric-footprint.webp"
                alt=""
                width={349}
                height={534}
                className="h-full w-full rounded-primary"
            />

            <div className="col-span-2 mt-6 grid items-start gap-12 md:mt-0 lg:col-span-1 lg:gap-16">
                <strong className="max-w-[34.5rem] font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                    Hard to swallow facts about wearing glasses and contact lenses.
                </strong>

                <BulletList
                    className="ml-4 max-w-[34.4rem] !gap-2 sm:ml-4"
                    list={[
                        'Almost 800 million plastic contact lenses are used by 4 million people each year.',
                        '100,000 tons of plastic are wasted from glasses.'
                    ]}
                    listItemClassName="md:text-[1.6rem] md:leading-[2.4rem] font-mulishMedium !text-[#293C4E]"
                    bulletPoint={<Image src={IconArrow} alt="" className="h-[1.4rem] w-[2.03rem] translate-y-2" />}
                />

                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 lg:mt-8">
                    <span className="row-span-2 h-full w-[0.8rem] bg-[#003E79]"></span>
                    <span className="font-mulishBold text-[1.8rem] uppercase leading-[2.8rem] text-heading">
                        SMILE, LASIK, Presbyond
                    </span>
                    <span className="col-start-2 max-w-[24.3rem] font-mulishBold uppercase text-[#893277] md:max-w-max">
                        Your key to a sustainable, plastic-free life!
                    </span>
                </div>

                <strong className="-mt-6 max-w-[33rem] text-[1.6rem] text-heading md:mt-0">
                    Saving more than just expenses, time and compromise, but saving the planet!
                </strong>

                <BookConsultation
                    buttonClassName="w-full justify-self-start text-center sm:w-auto"
                    maxWidth="50rem"
                >

<Button2
                    type="button"
                    title="Speak to a specialist"
                    text="Speak to a specialist"
                />

                </BookConsultation>
            </div>
        </div>
    );
};

/**
 * Slide2 is a component that represents the first slide in a slideshow. It displays information about the environmental impact of wearing glasses and contact lenses.
 *
 * @returns {JSX.Element} The rendered Slide1 component.
 */
const Slide2 = (): JSX.Element => {
    return (
        <div className="grid grid-cols-2 gap-6 lg:max-h-[52.4rem] lg:grid-cols-[auto_auto_1fr] ">
            <Image
                src="/images/section-images/girl-looking-globe.webp"
                alt=""
                width={435}
                height={534}
                className="h-full w-full rounded-primary"
            />
            <Image
                src="/images/section-images/climate-conscious.webp"
                alt=""
                width={349}
                height={534}
                className="h-full w-full rounded-primary"
            />

            <div className="col-span-2 mt-6 grid items-start gap-6 md:mt-0 lg:col-span-1">
                <strong className="max-w-[34.5rem] font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                    Clearer vision makes a clearer climate
                </strong>

                <p className="max-w-[36.2rem]">
                    How restoring your natural sight with vision correction treatment is helping the climate change
                    crisis
                </p>

                <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                    <span className="row-span-2 h-full w-[0.8rem] bg-[#003E79]"></span>
                    <span className="font-mulishBold text-[1.8rem] normal-case leading-[2.8rem] text-heading">
                        Did you know blurry vision is on the rise?
                    </span>
                    <span className="col-start-2 max-w-[40.2rem] font-mulishBold uppercase text-[#893277]">
                        We call this ‘Myopia’ but you might already know Myopia as ‘Nearsightedness’.
                    </span>
                </div>

                <div className="grid max-w-[40.6rem] gap-6">
                    <p>
                        By 2050 the World Health Organization predicts 4.9 million people will suffer from Myopia which
                        not only affects people's natural sight and quality of life, but also contributes to the masses
                        of plastic waste in our climate.
                    </p>
                    <p>
                        We understand how vision correction treatment is a healthier and natural way to not only restore
                        your clear vision, but as an opportunity to see our climate become clean and bright for future
                        generations to come!
                    </p>
                </div>
            </div>
        </div>
    );
};

/**
 * Slide3 is a component that represents the first slide in a slideshow. It displays information about the environmental impact of wearing glasses and contact lenses.
 *
 * @returns {JSX.Element} The rendered Slide1 component.
 */
const Slide3 = (): JSX.Element => {
    return (
        <div className="grid grid-cols-2 gap-6 lg:max-h-[52.4rem] lg:grid-cols-[auto_auto_1fr]">
            <Image
                src="/images/section-images/forest-with-lake.webp"
                alt=""
                width={435}
                height={534}
                className="h-full w-full rounded-primary"
            />
            <Image
                src="/images/section-images/real-forest-tree.webp"
                alt=""
                width={349}
                height={534}
                className="h-full w-full rounded-primary"
            />

            <div className="col-span-2 mt-6 grid items-start gap-6 md:mt-0 lg:col-span-1 ">
                <strong className="max-w-[34.5rem] font-mulishBold text-[2rem] leading-[2.8rem] text-heading">
                    Saving the planet one eye at a time!
                </strong>

                <p className="max-w-[34.7rem]">
                    When undergoing laser eye surgery, you may not realise it but you are already making a positive
                    difference to the environment.
                </p>

                <p className="max-w-[34.7rem]">
                    For every 10 years of contact lens wearing the amount of plastic that ends up in the ocean is
                    roughly the same as your own body weight.
                </p>

                <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                    <span className="row-span-2 h-full w-[0.8rem] bg-[#003E79]"></span>
                    <span className="font-mulishBold text-[1.8rem] normal-case leading-[2.8rem] text-heading">
                        Our gift to you...
                    </span>
                    <span className="col-start-2 max-w-[40.3rem] font-mulishBold uppercase text-[#893277]">
                        Here at My-iClinic we give all of our laser patients a real forest tree!
                    </span>
                </div>

                <div className="grid max-w-[40.6rem] gap-6">
                    <p>
                        Over your tree’s long life, you can visit it, introduce it to your family and track its growth
                        and value! Over the lifetime of the tree, it will more than offset the carbon you've used with
                        your contacts/glasses. When the tree is harvested, its value will be yours and new trees are
                        planted to replace it.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentalSlider;
