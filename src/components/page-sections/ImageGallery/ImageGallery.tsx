import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize, useOnScreen } from '@/hooks';
import IconPin from '@/icons/icon-pin-dark-150.svg';
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useRef } from 'react';

export interface GalleryInterface {
    numberIcon?: StaticImageData;
    title?: string;
    image: StaticImageData | string;
}

/**
 * Inner component for image gallery
 *
 * @param {GalleryInterface} { numberIcon, title, image }
 * @returns {*}  {JSX.Element}
 */
const InnerComponent = ({ numberIcon, title, image }: GalleryInterface): JSX.Element => {
    const animationRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: animationRef, triggerPosition: -100 });
    const deviceSize = useDeviceSize();

    useEffect(() => {
        if (!animationRef.current || !onEnter || !deviceSize) return;

        if (smallSizes.includes(deviceSize)) {
            gsap.to(animationRef.current, {
                opacity: 1,
                translateX: 0,
                duration: 2,
                rotate: 0.1
            });
        }

        if (largeSizes.includes(deviceSize)) {
            gsap.to('.gallery-image', {
                opacity: 1,
                translateX: 0,
                duration: 2,
                rotate: 0.1,
                stagger: 0.5
            });
        }
    }, [onEnter, deviceSize]);
    return (
        <div className="gallery-image grid -translate-x-4 gap-8 opacity-0 will-change-transform" ref={animationRef}>
            {numberIcon && title && (
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
                    <Image src={numberIcon} alt="" className="col-span-2" />
                    <span className="font-latoBold text-[1.6rem] uppercase leading-[3.2rem]">{title}</span>
                    <Image src={IconPin} alt="" className="max-w-[9.5rem]" />
                </div>
            )}

            <div className="overflow-hidden">
                <Image
                    src={image}
                    width={244}
                    height={242}
                    alt=""
                    className="rounded-radius2 transition-all duration-500 hover:scale-110"
                />
            </div>
        </div>
    );
};

interface ImageGalleryInterface {
    galleryList: GalleryInterface[];
    dynamicHeading?: ReactNode;
    sectionClassName?: string;
}

/**
 * Image gallery component
 *
 * @returns {*}  {JSX.Element}
 */
const ImageGallery = ({ galleryList, dynamicHeading, sectionClassName }: ImageGalleryInterface): JSX.Element => {
    return (
        <Section className={sectionClassName}>
            <>{dynamicHeading}</>
            <Container className="flex flex-wrap items-center justify-center gap-12">
                {galleryList.map((gallery, index) => (
                    <InnerComponent {...gallery} key={index} />
                ))}
            </Container>
        </Section>
    );
};

export default ImageGallery;
