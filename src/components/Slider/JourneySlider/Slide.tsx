// Import IconArrow from '@/icons/icon-arrow-right.svg';
import Image from 'next/image';
import { MutableRefObject, ReactNode } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { SwiperRef } from 'swiper/react';

export interface SlideInterface {
    index: number;
    title: ReactNode;
    active: boolean;
    image: string;
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
    return (
        <div className="grid bg-[#013c5a] md:grid-cols-[1fr_auto]">
            <Image
                src={image}
                alt=""
                width={631}
                height={600}
                className="max-h-[35rem] w-full md:h-full md:max-h-full md:max-w-[63.1rem]"
            />
            <div className="relative px-12 pt-12 pb-[13rem] md:col-start-1 md:row-start-1 md:pt-24 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)] xl:pr-28">
                <Image src="/images/section-images/journey-bg.png" alt="" fill className="z-[-1] h-full w-full" />
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:gap-12">
                    <span className="leding-[4.8rem] font-mulishExtraBold text-[4.8rem] text-[#CACECF4D] md:text-[6.4rem] md:leading-[6.4rem]">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h2 className="mt-6 font-latoLight text-[4.8rem] normal-case leading-[4.8rem] text-white sm:max-w-[48.9rem] md:col-start-1 md:row-start-1 md:text-[6.4rem] md:leading-[6.4rem]">
                        {title}
                    </h2>
                </div>

                <div className="mt-12 flex flex-col items-start justify-start gap-6 md:mt-0 md:pt-28">
                    {list.map((item, index) => (
                        <div className="grid grid-cols-[auto_1fr] items-start justify-start gap-4" key={index}>
                            {/* <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.6rem]" /> */}
                            <MdKeyboardArrowRight className="h-9 w-9 translate-y-[0.3rem] fill-[#E9EAEB]" />
                            <p className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#E9EAEB]">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slide;
