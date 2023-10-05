import IconArrow from '@/icons/icon-dotted-arrow-white.svg';
import Image from 'next/image';
import { MutableRefObject, ReactNode } from 'react';
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
        <div className="grid bg-[#003E79] md:grid-cols-2 xl:grid-cols-[1fr_auto]">
            <Image
                src={image}
                alt=""
                width={631}
                height={600}
                className="max-h-[35rem] w-full object-cover md:h-full md:max-h-full md:max-w-[63.1rem] md:justify-self-end xl:w-[66.1rem]"
            />
            <div className="relative px-12 pt-12 pb-[13rem] md:col-start-1 md:row-start-1 md:pt-24 xl:pl-[calc(calc(100vw_-_var(--container-width))_/_2)] xl:pr-28">
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:gap-12">
                    <span className="relative z-[2] font-mulishExtraBold text-[4.8rem] leading-[4.8rem] text-[#D1E8FE] md:text-[6.4rem] md:leading-[6.4rem]">
                        {(index + 1).toString().padStart(2, '0')}
                        <span className="absolute top-0 left-0 z-[-1] h-24 w-24 -translate-x-10 -translate-y-2 rounded-full bg-[#0052A0] md:h-32 md:w-32 md:-translate-x-1/2"></span>
                    </span>
                    <h2 className="mt-6 lowercase text-white first-letter:uppercase sm:max-w-[48.9rem] md:col-start-1 md:row-start-1">
                        {title}
                    </h2>
                </div>

                <div className="mt-12 flex max-w-[40rem] flex-col items-start justify-start gap-6 md:mt-0 md:pt-12">
                    {list.map((item, index) => (
                        <div className="grid grid-cols-[auto_1fr] items-start justify-start gap-4" key={index}>
                            <Image src={IconArrow} alt="" className="translate-y-[0.6rem]" />
                            <p className="text-white">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slide;
