import { FadeIn } from '@/components/Animations';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
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

    // const pinRef = useRef<any>(null);
    // const pinAnimationTrigger = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const imageMobileRef = useRef<HTMLImageElement | null>(null);

    // pinAnimation({
    //     pinRef: pinRef,
    //     width: '6.6rem',
    //     trigger: pinAnimationTrigger
    // });

    return (
        <div
            className={`relative grid w-full items-center gap-8 justify-self-center rounded-primary p-12 shadow-shadow2 md:grid-cols-2 md:gap-0 md:p-0 md:shadow-none`}
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
                    className={`image-card col-start-2 row-start-1 hidden w-full justify-self-end rounded-primary md:block`}
                />
            )}

            <div
                className={`left-0 grid w-full gap-6 md:top-2/4 md:max-w-[60rem] md:gap-12 md:rounded-radius2 md:bg-white md:p-12 lg:absolute lg:-translate-y-2/4 xl:max-w-[78rem]`}
                // ref={pinAnimationTrigger}
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

                <span className="h-[1.4rem] w-[6.7rem] rounded-primary bg-[#FF7F00]"></span>

                {/* <div className="h-2 w-full">
                    <Image
                        ref={pinRef}
                        src="/images/icons/icon-pin-horizontal.svg"
                        alt=""
                        width={66}
                        height={1}
                        className="w-0"
                    />
                </div> */}
                <div className="grid max-w-[45rem] gap-6">
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
