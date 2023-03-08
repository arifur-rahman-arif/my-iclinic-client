import { Container } from '@/components/Container';
import AlbumColumn from '@/components/page-sections/SectionParts/AlbumColumn';
import Cta from '@/components/page-sections/SectionParts/Cta';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize, useOnScreen } from '@/hooks';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect, useRef } from 'react';

const LottieComponent = dynamic(() => import('./LottieComponent'));
const VideoPlayer = dynamic(() => import('@/components/page-sections/SectionParts/VideoPlayer/VideoPlayer'));

interface FullWidthImageSectionInterface {
    boldHeading?: ReactNode;
    h3Title?: string | ReactNode;
    image?: StaticImageData | string;
    desktopImage?: StaticImageData | string;
    altText?: string;
    sectionClass?: string;
    defaultContainerClass?: string;
    containerClass?: string;
    overlayAnimation?: boolean;
    albumAnimation?: boolean;
    textColumnOverlay?: boolean;
    description?: string[] | ReactNode[];
    includeScrollDownButton?: boolean;
    includeCta?: boolean;
    videoUrl?: string;
    videoPoster?: string;
    textColumnExtraBottomElements?: ReactNode;
    reverseColumn?: boolean;
    smallImageDefaultClassName?: string;
    smallImageClassName?: string;
    largeImageDefaultClassName?: string;
    largeImageClassName?: string;
    dynamicMediaColumn?: ReactNode;
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
    sectionClass = 'md:bg-brandLight',
    defaultContainerClass = 'grid grid-cols-1 items-center !px-0 mx-8 pb-12 md:py-24 md:mx-auto w-[calc(100%_-_4rem)] md:w-full rounded-tl-primary rounded-tr-primary md:rounded-none gap-12 md:grid-cols-2 md:gap-24 xl:gap-32 bg-brandLight md:bg-none',
    containerClass,
    overlayAnimation,
    albumAnimation,
    textColumnOverlay,
    description,
    includeScrollDownButton,
    includeCta,
    videoUrl,
    videoPoster,
    textColumnExtraBottomElements,
    reverseColumn = false,
    smallImageDefaultClassName = 'w-full rounded-t-primary rounded-tl-primary object-contain md:hidden',
    smallImageClassName,
    largeImageDefaultClassName = 'hidden rounded-primary md:block',
    largeImageClassName,
    dynamicMediaColumn
}: FullWidthImageSectionInterface): JSX.Element => {
    const deviceSize = useDeviceSize();
    const imageCover = useRef<HTMLDivElement>(null);
    const imageCoverContainer = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: sectionRef });
    const scrollTrigger = useOnScreen({ ref: imageCoverContainer, triggerPosition: '70%' });

    useEffect(() => {
        if (!overlayAnimation || !scrollTrigger.onEnter) return;

        gsap.to(imageCover.current, {
            duration: 2.5,
            width: '20%',
            ease: 'back.out(1.7)'
        });
    }, [scrollTrigger.onEnter, deviceSize]);

    return (
        <Section className={sectionClass} ref={sectionRef}>
            {textColumnOverlay ? (
                <div className="absolute left-0 top-0 hidden h-full w-[calc(50%_+_4rem)] bg-white opacity-50 md:block"></div>
            ) : (
                <></>
            )}
            <Container className={`${defaultContainerClass} ${containerClass}`}>
                <div className="relative z-[1] grid px-8 xl:px-0">
                    {boldHeading ? (
                        <h2 className="w-full normal-case">
                            {h3Title ? (
                                <>
                                    {h3Title} <br />
                                </>
                            ) : (
                                <></>
                            )}{' '}
                            <strong className="normal-case">{boldHeading || ''}</strong>
                        </h2>
                    ) : (
                        <h2 className="w-full max-w-[55rem] font-latoMedium normal-case">{h3Title}</h2>
                    )}

                    {description && (
                        <div className="mt-12 grid gap-12 md:max-w-[50rem]">
                            {description.map((desc, index) => (
                                <div key={index}>{desc}</div>
                            ))}
                        </div>
                    )}

                    {includeScrollDownButton && onEnter && <LottieComponent />}
                    {includeCta && <Cta className="mt-[4.5rem] !justify-self-start" />}

                    {textColumnExtraBottomElements}
                </div>

                {albumAnimation && <AlbumColumn />}
                {dynamicMediaColumn && dynamicMediaColumn}
                {!albumAnimation && !dynamicMediaColumn && (
                    <>
                        {videoUrl && videoPoster ? (
                            <>{onEnter && <VideoPlayer videoUrl={videoUrl} videoPoster={videoPoster} />}</>
                        ) : (
                            <div
                                className={`row-start-1 grid w-full justify-self-center md:row-auto md:justify-self-end ${
                                    reverseColumn ? 'md:col-start-1 md:row-start-1' : ''
                                }`}
                                ref={imageCoverContainer}
                            >
                                {smallSizes.includes(deviceSize) && image && (
                                    <div className="relative grid place-items-center md:px-8">
                                        {overlayAnimation && (
                                            <div
                                                ref={imageCover}
                                                className="absolute left-0 top-0 z-[1] h-full w-3/4 bg-white opacity-50"
                                            ></div>
                                        )}
                                        <Image
                                            src={image}
                                            quality={100}
                                            className={`${smallImageDefaultClassName} ${smallImageClassName}`}
                                            alt={altText || ''}
                                            width={420}
                                            height={300}
                                        />
                                    </div>
                                )}
                                {largeSizes.includes(deviceSize) && desktopImage && (
                                    <div className="relative">
                                        {overlayAnimation && (
                                            <div
                                                ref={imageCover}
                                                className="absolute left-0 top-0 z-[1] h-full w-3/4 bg-white opacity-50"
                                            ></div>
                                        )}
                                        <Image
                                            src={desktopImage}
                                            quality={100}
                                            className={`${largeImageDefaultClassName} ${largeImageClassName}`}
                                            alt={altText || ''}
                                            width={600}
                                            height={490}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </Container>
        </Section>
    );
};

export default FullWidthImageSection;
