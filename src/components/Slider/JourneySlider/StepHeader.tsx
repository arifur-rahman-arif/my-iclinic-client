import { MutableRefObject } from 'react';
import { SwiperRef } from 'swiper/react/swiper-react';

interface StepHeaderInterface {
    index: number;
    title: string;
    active?: boolean;
    swiperRef: MutableRefObject<SwiperRef | null>;
    sliderListLength: number;
}

/**
 * Slider header component
 *
 * @param {number} index
 * @param {string} title
 * @param {boolean | undefined} active
 * @param {React.MutableRefObject<SwiperRef | null>} swiperRef
 * @returns {JSX.Element}
 * @constructor
 */
const StepHeader = ({ index, title, active, swiperRef }: StepHeaderInterface): JSX.Element => {
    return (
        <div
            className="grid gap-4 items-start"
            // OnClick={() => {
            //     !active && swiperRef.current?.swiper.slideNext();
            //     active && swiperRef.current?.swiper.slidePrev();
            // }}
        >
            <div className="flex flex-col gap-2 md:gap-6 items-start">
                {/* <div className="col-span-1 flex items-center justify-start md:block gap-4 row-start-1 md:row-start-auto md:col-span-full"> */}
                {/*     <span */}
                {/*         className={`font-mulishExtraBold text-[2.4rem] leading-[2.4rem] transition-all duration-400 md:text-[3.6rem] md:leading-[4.8rem] ${ */}
                {/*             active ? 'text-[#CDCFD0]' : 'text-[#E6E7E8]' */}
                {/*         }`} */}
                {/*     > */}
                {/*         {index.toString().padStart(2, '0')} */}
                {/*     </span> */}
                {/*     /!* {smallSizes.includes(deviceSize) && <Image src={IconLineHorizontal} alt="" />} *!/ */}
                {/* </div> */}
                <span
                    className={`font-mulishExtraBold text-[2.4rem] leading-[2.4rem] transition-all duration-400 md:text-[3.6rem] md:leading-0 ${
                        active ? 'text-[#CDCFD0]' : 'text-[#E6E7E8]'
                    }`}
                >
                    {index.toString().padStart(2, '0')}
                </span>

                <span
                    className={`font-mulishBold uppercase block max-w-[17.8rem] text-[1.8rem] leading-[2.8rem] ${
                        !active && 'text-[#CDCFD0]'
                    }`}
                >
                    {title}
                </span>

                {/* <span */}
                {/*     className={`grid h-10 w-10 place-items-center rounded-full pt-1 transition-all duration-300 ${ */}
                {/*         active ? 'bg-green-500' : 'bg-gray-300' */}
                {/*     } row-start-1 md:row-start-auto`} */}
                {/* > */}
                {/*     <BsCheckLg className="fill-white text-[1.5rem]" /> */}
                {/* </span> */}
            </div>
            {/* {active && <>{largeSizes.includes(deviceSize) && <Image src={IconLine} alt="" />}</>} */}
        </div>
    );
};

export default StepHeader;
