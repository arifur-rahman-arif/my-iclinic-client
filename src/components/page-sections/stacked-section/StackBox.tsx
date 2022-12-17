// Import { pinAnimation } from '@/utils/gsapFunctions';
// import { usePinAnimation } from '@/utils/gsapFunctions';
import { pinAnimation } from '@/utils/gsapFunctions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

type ImageType = {
    url: string;
    width: number;
    height: number;
};

export interface StackBoxInterface {
    image: ImageType;
    desktopImage: ImageType;
    title: string;
    descriptions: string[];
    boxWidth: string;
    index: number;
}

/**
 * Stack box component of Stack section
 *
 * @param {StackBoxInterface} { image, desktopImage, title, descriptions, boxWidth, index }
 * @returns {*}  {JSX.Element}
 */
const StackBox = ({ image, desktopImage, title, descriptions, boxWidth, index }: StackBoxInterface): JSX.Element => {
    const isEven = index % 2 === 0 ? true : false;

    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '6.6rem',
        trigger: pinAnimationTrigger
    });

    return (
        <div className="relative grid w-full gap-8 justify-self-center rounded-primary p-12 shadow-shadow2 md:max-w-[97.5rem] md:p-0 md:shadow-none">
            <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={title}
                quality={20}
                className="justify-self-center md:hidden md:h-auto md:w-auto"
            />
            <Image
                src={desktopImage.url}
                width={desktopImage.width}
                height={desktopImage.height}
                alt={title}
                quality={20}
                className={`hidden rounded-primary md:block md:h-auto md:w-auto ${
                    isEven ? 'justify-self-end' : 'justify-self-start'
                }`}
            />

            <div
                style={{
                    maxWidth: boxWidth
                }}
                className={`grid gap-6 md:absolute md:top-2/4 md:-translate-y-2/4 md:gap-12 md:rounded-primary md:bg-white md:p-12 ${
                    isEven ? 'left-0' : 'right-0'
                }`}
                ref={pinAnimationTrigger}
            >
                <h3 className="normal-case">
                    <strong className="normal-case">{title}</strong>
                </h3>
                <Image
                    ref={pinRef}
                    src="/images/icons/icon-pin-horizontal.svg"
                    alt=""
                    width={66}
                    height={1}
                    className="w-0"
                />
                <div className="grid gap-6">
                    {descriptions.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StackBox;
