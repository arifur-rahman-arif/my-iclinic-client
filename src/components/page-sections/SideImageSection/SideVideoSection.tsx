import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import { VideoPlayer } from '@/components/page-sections';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { pinAnimation } from '@/utils/gsapFunctions';
import { ReactNode, useRef } from 'react';

type ImageType = {
    url: string;
    width: number;
    height: number;
};

export interface SideVideoSectionInterface {
    h2Heading?: string;
    h3Heading?: string;
    descriptions?: string[] | ReactNode[];
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
    beforeAttribute?: boolean;
    videoUrl?: string;
    videoPoster?: string | boolean;
    localPoster?: string;
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
    noPin,
    beforeAttribute,
    videoPoster,
    videoUrl,
    localPoster
}: SideVideoSectionInterface): JSX.Element => {
    const pinRef = useRef<any>(null);
    const pinAnimationTrigger = useRef<HTMLDivElement | null>(null);

    pinAnimation({
        pinRef: pinRef,
        width: '15rem',
        trigger: pinAnimationTrigger
    });

    return (
        <Section className={`${sectionClass || ''}`}>
            <Container className="grid grid-cols-1 items-center gap-14 md:gap-32 lg:grid-cols-[1fr_auto]">
                {/* Text column */}
                <div className="grid">
                    {/* <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-8 md:gap-x-12">
                        {beforeAttribute && <span className="block h-full w-[0.5rem] bg-yellow"></span>}
                        <H2Variant1 className="w-full normal-case">{h2Heading || ''}</H2Variant1>
                    </div> */}

                    <SectionTextColumn heading={h2Heading} />

                    {/* {darkPin && !noPin && (
                        <div className="relative mt-6 h-2 w-full" ref={pinAnimationTrigger}>
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
                    )} */}

                    {/* {!darkPin && !noPin && (
                        <div className="mt-6 h-2 w-full" ref={pinAnimationTrigger}>
                            <Image
                                src="/images/icons/icon-pin-yellow.svg"
                                quality={10}
                                width={150}
                                height={2}
                                alt=""
                                className="w-0"
                                ref={pinRef}
                            />
                        </div>
                    )} */}

                    {h3Heading && <H3Variant3 className="mt-12">{h3Heading}</H3Variant3>}

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

                <VideoPlayer
                    videoUrl={videoUrl || '/videos/video-1.mp4'}
                    videoPoster={videoPoster || 'WUkLbxQYWME'}
                    localPoster={localPoster}
                />
            </Container>
        </Section>
    );
};

export default SideVideoSection;
