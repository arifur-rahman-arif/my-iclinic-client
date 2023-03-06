import { Container } from '@/components/Container';
import { TextColumn } from '@/components/page-sections';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { ImageType2 } from '@/types';
import dynamic from 'next/dynamic';
import { ReactNode, useRef } from 'react';

const VideoPlayer = dynamic(() => import('@/components/page-sections/SectionParts/VideoPlayer/VideoPlayer'));

interface SideVideoSection3Interface {
    h2Heading?: string;
    h3LightHeading?: ReactNode;
    h3BoldHeading?: ReactNode;
    descriptions?: string[] | ReactNode[];
    sectionImage?: ImageType2;
    sectionImageDesktop?: ImageType2;
    normalLightHeading?: ReactNode;
    textColumnExtras?: ReactNode;
    positionReversed?: boolean;
    sectionClass?: string;
    imageYPosition?: 'top' | 'bottom' | 'center';
    altText?: string;
    midExtras?: ReactNode;
    customColumn?: ReactNode;
    textColumnImage?: boolean;
    textColumnTopElements?: ReactNode;
    defaultContainerClassName?: string;
    containerClassName?: string;
    paragraphAnimation?: boolean;
    videoPoster?: string;
    videoUrl?: string;
}

/**
 * Side Video section component
 *
 * @param {SideVideoSection3Interface} {
 *     h2Heading,
 *     h3LightHeading,
 *     h3BoldHeading,
 *     descriptions,
 *     sectionImage,
 *     sectionImageDesktop,
 *     normalLightHeading,
 *     textColumnExtras,
 *     positionReversed = false,
 *     sectionClass,
 *     imageYPosition = 'center',
 *     altText,
 *     midExtras,
 *     customColumn,
 *     textColumnImage,
 *     textColumnTopElements,
 *     defaultContainerClassName = 'grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32',
 *     containerClassName,
 *     paragraphAnimation = false
 * }
 * @returns {*}  {JSX.Element}
 */
const SideVideoSection3 = ({
    h2Heading,
    h3LightHeading,
    h3BoldHeading,
    descriptions,
    sectionImage,
    sectionImageDesktop,
    normalLightHeading,
    textColumnExtras,
    sectionClass,
    midExtras,
    textColumnImage,
    textColumnTopElements,
    defaultContainerClassName = 'grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32',
    containerClassName,
    paragraphAnimation = false,
    videoPoster = 'WUkLbxQYWME',
    videoUrl = '/videos/video-1.mp4'
}: SideVideoSection3Interface): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: sectionRef, triggerPosition: 300 });

    return (
        <Section className={`${sectionClass || ''}`} ref={sectionRef}>
            <Container className={`${defaultContainerClassName} ${containerClassName || ''}`}>
                {/* Text column */}
                <TextColumn
                    normalLightHeading={normalLightHeading}
                    h2Heading={h2Heading}
                    h3BoldHeading={h3BoldHeading}
                    descriptions={descriptions}
                    textColumnExtras={textColumnExtras}
                    h3LightHeading={h3LightHeading}
                    midExtras={midExtras}
                    sectionImage={sectionImage}
                    sectionImageDesktop={sectionImageDesktop}
                    textColumnImage={textColumnImage}
                    textColumnTopElements={textColumnTopElements}
                    paragraphAnimation={paragraphAnimation}
                />

                {onEnter && <VideoPlayer videoUrl={videoUrl} videoPoster={videoPoster} />}
            </Container>
        </Section>
    );
};

export default SideVideoSection3;
