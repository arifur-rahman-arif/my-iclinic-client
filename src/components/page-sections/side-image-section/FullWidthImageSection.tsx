import { Container } from '@/components/container';
import AlbumColumn from '@/components/page-sections/section-parts/AlbumColumn';
import { Section } from '@/components/section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useRef } from 'react';

interface FullWidthImageSectionInterface {
    boldHeading?: string;
    h3Title: string | ReactNode;
    image?: StaticImageData;
    desktopImage?: StaticImageData;
    altText?: string;
    sectionClass?: string;
    containerClass?: string;
    overlayAnimation?: boolean;
    albumAnimation?: boolean;
    textColumnOverlay?: boolean;
    description?: string[];
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
    overlayAnimation,
    albumAnimation,
    textColumnOverlay,
    description
}: FullWidthImageSectionInterface): JSX.Element => {
    const deviceSize = useDeviceSize();
    const imageCover = useRef<HTMLDivElement>(null);
    const imageCoverContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        overlayAnimation &&
            gsap.to(imageCover.current, {
                scrollTrigger: {
                    trigger: imageCoverContainer.current,
                    start: 'top 70%'
                },
                duration: 2.5,
                width: '20%',
                ease: 'back.out(1.7)'
            });
    }, [deviceSize]);

    return (
        <Section className={sectionClass}>
            {textColumnOverlay ? (
                <div className="absolute left-0 top-0 hidden h-full w-[calc(50%_+_4rem)] bg-white opacity-50 md:block"></div>
            ) : (
                <></>
            )}
            <Container className={containerClass}>
                <div className="relative z-[1] grid px-8 xl:px-0">
                    {boldHeading ? (
                        <h3 className="w-full normal-case">
                            {h3Title} <br />{' '}
                            <strong
                                className="normal-case"
                                dangerouslySetInnerHTML={{ __html: boldHeading || '' }}
                            ></strong>
                        </h3>
                    ) : (
                        <h3 className="w-full max-w-[55rem] normal-case">{h3Title}</h3>
                    )}

                    {description && (
                        <div className="mt-12 grid gap-12">
                            {description.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>
                    )}
                </div>

                {albumAnimation ? (
                    <AlbumColumn />
                ) : (
                    <div className="row-start-1 grid w-full justify-self-center md:row-auto md:justify-self-end">
                        {smallSizes.includes(deviceSize) && image && (
                            <div className="relative px-8" ref={imageCoverContainer}>
                                {overlayAnimation && (
                                    <div
                                        ref={imageCover}
                                        className="absolute left-0 top-0 z-[1] h-full w-3/4 bg-white opacity-50"
                                    ></div>
                                )}
                                <Image src={image} quality={70} className="md:hidden" alt={altText || ''} />
                            </div>
                        )}
                        {largeSizes.includes(deviceSize) && desktopImage && (
                            <div className="relative" ref={imageCoverContainer}>
                                {overlayAnimation && (
                                    <div
                                        ref={imageCover}
                                        className="absolute left-0 top-0 z-[1] h-full w-3/4 bg-white opacity-50"
                                    ></div>
                                )}
                                <Image
                                    src={desktopImage}
                                    quality={70}
                                    className="hidden md:block"
                                    alt={altText || ''}
                                />
                            </div>
                        )}
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default FullWidthImageSection;
