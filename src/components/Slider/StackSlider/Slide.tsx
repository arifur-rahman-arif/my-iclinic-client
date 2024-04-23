import { ImageType2 } from '@/types';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface StackSlideInterface {
    image?: ImageType2;
    desktopImage?: ImageType2;
    title: string;
    descriptions: string[] | ReactNode[];
    boxWidth?: string;
    index?: number;
    altText?: string;
    boxIcon?: StaticImageData;
}

/**
 * Slide component
 *
 * @param {StackSlideInterface} {
 *     image,
 *     desktopImage,
 *     title,
 *     descriptions,
 *     boxWidth,
 *     altText,
 *     boxIcon
 * }
 * @returns {*}  {JSX.Element}
 */
const Slide = ({ desktopImage, title, descriptions, altText, boxIcon }: StackSlideInterface): JSX.Element => {
    return (
        <div
            className={`relative mx-auto border border-solid border-[#EAECF0] md:py-12 ${
                desktopImage && 'mt-36'
            } flex flex-col rounded-radius2 px-12 sm:shadow-sm md:mt-0 md:grid md:grid-cols-[auto_1fr] md:gap-16 lg:gap-0 lg:py-12 xl:px-32  xl:py-24`}
        >
            {desktopImage && (
                <div className="mx-auto h-full max-h-[24rem] -translate-y-[30%] overflow-hidden rounded-primary shadow-shadow1 md:h-[30rem] md:max-h-min md:w-[37rem] md:-translate-x-0 md:translate-y-0 md:self-center lg:-translate-x-[20%] xl:-translate-x-[30%]">
                    <Image
                        src={desktopImage.url}
                        width={desktopImage.width}
                        height={desktopImage.height}
                        alt={altText || ''}
                        className="h-full min-h-[30rem] w-full object-cover"
                        quality={70}
                    />
                </div>
            )}

            <div className="mt-auto flex flex-col items-start justify-start gap-12 self-center md:mt-0 md:pr-12 xl:pr-32">
                {boxIcon ? <Image src={boxIcon} alt="" /> : <></>}

                <h3 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">{title}</h3>

                <span className="-mt-2 h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>

                <div className="grid max-w-[47rem] gap-6">
                    {descriptions.map((desc, index) => (
                        <p className={`translate-y-4 opacity-0`} key={index}>
                            {desc}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slide;
