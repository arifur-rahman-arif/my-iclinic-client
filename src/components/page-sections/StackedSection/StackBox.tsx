import { FadeIn } from '@/components/Animations';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { pinAnimation } from '@/utils/gsapFunctions';
import HTMLReactParser from 'html-react-parser';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useRef } from 'react';

type ImageType = {
    url: string;
    width: number;
    height: number;
};

export interface StackBoxInterface {
    image?: ImageType | undefined;
    desktopImage?: ImageType | undefined;
    title: string;
    descriptions: string[] | ReactNode[];
    boxWidth?: string;
    index: number;
    altText?: string;
    boxIcon?: StaticImageData;
}

/**
 * Stack box component of Stack section
 *
 * @param {StackBoxInterface} { image, desktopImage, title, descriptions, boxWidth, index }
 * @returns {*}  {JSX.Element}
 */
const StackBox = ({
    image,
    desktopImage,
    title,
    descriptions,
    boxWidth,
    index,
    altText,
    boxIcon
}: StackBoxInterface): JSX.Element => {
    const deviceSize = useDeviceSize();

    const isEven = index % 2 === 0;

    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const imageMobileRef = useRef<HTMLImageElement | null>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '6.6rem',
        trigger: pinAnimationTrigger
    });

    return (
        <div
            className={`relative grid w-full gap-8 justify-self-center rounded-primary p-12 shadow-shadow2 md:gap-0 md:p-0 md:shadow-none lg:max-w-[97.5rem]`}
        >
            {smallSizes.includes(deviceSize) && image && (
                <Image
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt={altText || ''}
                    quality={70}
                    className="card-image image-card justify-self-center md:hidden md:h-auto md:w-auto"
                    ref={imageMobileRef}
                />
            )}

            {largeSizes.includes(deviceSize) && desktopImage && (
                <Image
                    src={desktopImage.url}
                    width={desktopImage.width}
                    height={desktopImage.height}
                    alt={altText || ''}
                    quality={70}
                    ref={imageRef}
                    className={`image-card hidden rounded-primary md:block md:scale-90 2xl:scale-100 ${
                        isEven ? 'justify-self-end' : 'justify-self-start'
                    }`}
                />
            )}

            <div
                style={{
                    maxWidth: boxWidth || '51.4rem'
                }}
                className={`grid gap-6 md:absolute md:top-2/4 md:-translate-y-2/4 md:gap-12 md:rounded-primary md:bg-white md:p-12 ${
                    isEven ? 'left-0' : 'right-0'
                }`}
                ref={pinAnimationTrigger}
            >
                {/* {boxIcon ? <Image src={boxIcon.url} width={boxIcon.width} height={boxIcon.height} alt="" /> : <></>} */}
                {boxIcon ? <Image src={boxIcon} alt="" /> : <></>}

                {/* <TextSlideUp>
                    <h3 className="font-latoBold text-[2rem] normal-case leading-[2.4rem] md:md:text-[3rem] md:leading-[3.6rem]">
                        {title}
                    </h3>
                </TextSlideUp> */}
                <h3 className="font-latoBold text-[2rem] normal-case leading-[2.4rem] md:md:text-[3rem] md:leading-[3.6rem]">
                    {title}
                </h3>

                <div className="h-2 w-full">
                    <Image
                        ref={pinRef}
                        src="/images/icons/icon-pin-horizontal.svg"
                        alt=""
                        width={66}
                        height={1}
                        className="w-0"
                    />
                </div>
                <div className="grid gap-6">
                    {descriptions.map((desc, index) => (
                        <FadeIn key={index}>
                            <div>{typeof desc === 'string' ? HTMLReactParser(desc) : desc}</div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StackBox;
