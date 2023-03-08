import { smallSizes, useDeviceSize } from '@/hooks';
import { MutableRefObject, ReactNode } from 'react';
import StepHeader from 'src/components/Slider/JourneySlider/StepHeader';
// Import IconArrow from '@/icons/icon-arrow-right.svg';
import IconArrow from '@/icons/icon-check-grey.svg';
import Image from 'next/image';
import { SwiperRef } from 'swiper/react';

export interface SlideInterface {
    index: number;
    title: {
        active: string;
        inactive?: string;
    };
    active: boolean;
    image?: string;
    list: ReactNode[];
    swiperRef: MutableRefObject<SwiperRef | null>;
    sliderListLength: number;
}

// eslint-disable-next-line valid-jsdoc
/**
 * Slide of the JourneySlider
 *
 * @param {number} index
 * @param {{active: string, inactive?: string}} title
 * @param {boolean} active
 * @param {string | undefined} image
 * @param {React.ReactNode[]} list
 * @param {React.MutableRefObject<SwiperRef | null>} swiperRef
 * @param {number} sliderListLength
 * @returns {JSX.Element}
 * @constructor
 */
const Slide = ({ index, title, active, image, list, swiperRef, sliderListLength }: SlideInterface): JSX.Element => {
    const deviceSize = useDeviceSize();

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 pr-4 md:pr-0 pl-4 min-h-[25rem]"
            onMouseEnter={() => {
                swiperRef.current?.swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
                swiperRef.current?.swiper.autoplay.start();
            }}
        >
            {/* Grid col 1 */}
            <div className="grid md:grid-cols-[auto_auto] md:gap-12 xl:gap-32 items-center">
                <div className="grid gap-8 items-start grid-cols-2 md:grid-cols-1">
                    <StepHeader
                        sliderListLength={sliderListLength}
                        swiperRef={swiperRef}
                        index={index + 1}
                        active={active}
                        title={title.active}
                    />
                </div>

                {smallSizes.includes(deviceSize) && (
                    <Image
                        src={image || '/images/section-images/placeholder-image.png'}
                        alt=""
                        width={393}
                        height={216}
                        className="w-full rounded-primary md:hidden mt-12"
                    />
                )}

                <div className="flex flex-col gap-6 items-start justify-start mt-12 md:mt-0">
                    {list.map((item, index) => (
                        <div className="flex items-start justify-start gap-4" key={index}>
                            {/* <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.6rem]" /> */}
                            <Image src={IconArrow} alt="" className="h-7 w-7 translate-y-[0.4rem]" />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Grid col 2 */}
            <div className="grid place-items-center md:row-start-1 lg:row-start-auto hidden md:grid">
                <Image
                    src={image || '/images/section-images/placeholder-image.png'}
                    alt=""
                    width={393}
                    height={303}
                    className="max-w-[39.3rem] max-h-[30.3rem] object-cover rounded-primary"
                />
            </div>
        </div>
    );
};

export default Slide;
