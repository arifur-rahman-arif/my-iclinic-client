import { Container } from '@/components/container';
import { H2Variant1, H3Variant2 } from '@/components/headings';
import { Section } from '@/components/section';
import { pinAnimation } from '@/utils/gsapFunctions';
import Image from 'next/image';
import { ReactNode, useRef } from 'react';

type ImageType = {
    url: string;
    width: number;
    height: number;
};

export interface SideVideoSectionInterface {
    h2Heading?: string;
    h3Heading?: string;
    descriptions?: string[];
    sectionImage?: ImageType;
    sectionImageDesktop?: ImageType;
    normalLightHeading?: string;
    textColumnExtras?: ReactNode;
    positionReversed?: boolean;
    sectionClass?: string;
    imageYPosition?: 'top' | 'bottom' | 'center';
    altText?: string;
    darkPin?: boolean;
    noPin?: boolean;
}

/**
 * Page section that contains text column and video column
 *
 * @param {SideVideoSectionInterface} {
 *     h2Heading,
 *     h3LightHeading,
 *     h3BoldHeading,
 *     descriptions,
 *     sectionImage,
 *     sectionImageDesktop,
 *     normalLightHeading,
 *     textColumnExtras
 *     positionReversed
 *     sectionClass
 *     imageYPosition
 * }
 * @returns {*}  {JSX.Element}
 */
const SideVideoSection = ({
    h2Heading,
    h3Heading,
    descriptions,
    textColumnExtras,
    positionReversed = false,
    sectionClass,
    imageYPosition = 'center',
    darkPin,
    noPin
}: SideVideoSectionInterface): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <Section className={`${sectionClass || ''}`}>
            <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32">
                {/* Text column */}
                <div className="grid">
                    <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-8 md:gap-x-12">
                        <span className="block h-full w-[0.5rem] bg-yellow"></span>
                        <H2Variant1 className="w-full">{h2Heading || ''}</H2Variant1>
                    </div>

                    {darkPin && !noPin && (
                        <div className="h-2 w-full" ref={pinAnimationTrigger}>
                            <Image
                                src="/images/icons/icon-pin-dark-150.svg"
                                quality={10}
                                width={150}
                                height={2}
                                alt=""
                                className="mt-6 w-0"
                                ref={pinRef}
                            />
                        </div>
                    )}

                    {!darkPin && !noPin && (
                        <div className="h2 w-full" ref={pinAnimationTrigger}>
                            <Image
                                src="/images/icons/icon-pin-yellow.svg"
                                quality={10}
                                width={150}
                                height={2}
                                alt=""
                                className="mt-6 w-0"
                                ref={pinRef}
                            />
                        </div>
                    )}

                    {h3Heading && <H3Variant2 className="mt-12 md:mt-24">{h3Heading}</H3Variant2>}

                    <div className={`mt-6 grid gap-12`}>
                        {descriptions && (
                            <div className="flex w-full flex-col items-start justify-start gap-6 md:max-w-[46.7rem]">
                                {descriptions?.map((desc, index) => (
                                    <p key={index}>{desc || ''}</p>
                                ))}
                            </div>
                        )}

                        {textColumnExtras}
                    </div>
                </div>

                {/* Image column */}
                <div
                    className={`row-start-1 grid min-h-[48.4rem] place-items-center justify-self-stretch rounded-primary bg-heading2 p-8 md:row-auto md:min-h-[60rem] md:justify-self-auto md:p-14 ${
                        positionReversed ? 'md:col-start-1 md:row-start-1' : ''
                    } ${imageYPosition === 'top' && 'self-start'} ${imageYPosition === 'bottom' && 'self-end'}`}
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/amPhVO2lG2s?controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-primary"
                    ></iframe>
                </div>
            </Container>
        </Section>
    );
};

export default SideVideoSection;
