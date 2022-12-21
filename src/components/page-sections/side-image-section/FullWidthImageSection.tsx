import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { useDeviceSize } from '@/hooks';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface FullWidthImageSectionInterface {
    boldHeading?: string;
    h3Title: string;
    image: StaticImageData;
    desktopImage: StaticImageData;
    altText?: string;
    sectionClass?: string;
    containerClass?: string;
    overlayAnimation?: boolean;
}

/**
 * Full width image section
 *
 * @param {FullWidthImageSectionInterface} {
 *     boldHeading,
 *     h3Title,
 *     image,
 *     desktopImage,
 *     altText
 * }
 * @returns {*}  {JSX.Element}
 */
const FullWidthImageSection = ({
    boldHeading,
    h3Title,
    image,
    desktopImage,
    altText,
    sectionClass = 'bg-brandLight',
    containerClass = 'grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:gap-24 md:py-24',
    overlayAnimation
}: FullWidthImageSectionInterface): JSX.Element => {
    const deviceSize = useDeviceSize();
    const imageCover = useRef<HTMLDivElement>(null);
    const imageCoverContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        overlayAnimation &&
            gsap.to(imageCover.current, {
                scrollTrigger: {
                    trigger: imageCoverContainer.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                duration: 2.5,
                width: '20%',
                ease: 'back.out(1.7)'
            });
    }, [deviceSize]);

    return (
        <Section className={sectionClass}>
            <Container className={containerClass}>
                <div className="grid">
                    {boldHeading ? (
                        <h3 className="w-full normal-case">
                            {h3Title} <br /> <strong className="normal-case">{boldHeading || ''}</strong>
                        </h3>
                    ) : (
                        <h3 className="w-full max-w-[50rem] normal-case">{h3Title}</h3>
                    )}
                </div>
                <div className="row-start-1 justify-self-center md:row-auto md:justify-self-end">
                    {deviceSize === 'small' && (
                        <div className="relative" ref={imageCoverContainer}>
                            {overlayAnimation && (
                                <div
                                    ref={imageCover}
                                    className="absolute left-0 top-0 z-[1] h-full w-3/4 bg-white opacity-50"
                                ></div>
                            )}
                            <Image src={image} quality={70} className="md:hidden" alt={altText || ''} />
                        </div>
                    )}

                    {deviceSize === 'large' && (
                        <div className="relative" ref={imageCoverContainer}>
                            {overlayAnimation && (
                                <div
                                    ref={imageCover}
                                    className="absolute left-0 top-0 z-[1] h-full w-3/4 bg-white opacity-50"
                                ></div>
                            )}
                            <Image src={desktopImage} quality={70} className="hidden md:block" alt={altText || ''} />
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
};

export default FullWidthImageSection;
