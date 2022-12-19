import { Container } from '@/components/container';
import TextColumn from '@/components/page-sections/section-parts/TextColumn';
import { Section } from '@/components/section';
import Image from 'next/image';
import { ReactNode } from 'react';

type ImageType = {
    url: string;
    width: number;
    height: number;
};

export interface SideImageSectionInterface {
    h2Heading?: string;
    h3LightHeading?: string;
    h3BoldHeading?: string;
    descriptions: string[];
    sectionImage: ImageType;
    sectionImageDesktop: ImageType;
    normalLightHeading?: string;
    textColumnExtras?: ReactNode;
    positionReversed?: boolean;
    sectionClass?: string;
    imageYPosition?: 'top' | 'bottom' | 'center';
    altText?: string;
}

/**
 * Page section that contains text column and Image column
 *
 * @param {SideImageSectionInterface} {
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
const SideImageSection = ({
    h2Heading,
    h3LightHeading,
    h3BoldHeading,
    descriptions,
    sectionImage,
    sectionImageDesktop,
    normalLightHeading,
    textColumnExtras,
    positionReversed = false,
    sectionClass,
    imageYPosition = 'center',
    altText
}: SideImageSectionInterface): JSX.Element => {
    return (
        <Section className={`${sectionClass || ''}`}>
            <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
                {/* Text column */}

                <TextColumn
                    normalLightHeading={normalLightHeading}
                    h2Heading={h2Heading}
                    h3BoldHeading={h3BoldHeading}
                    descriptions={descriptions}
                    textColumnExtras={textColumnExtras}
                    h3LightHeading={h3LightHeading}
                />

                {/* Image column */}
                <div
                    className={`row-start-1 justify-self-center md:row-auto md:justify-self-auto ${
                        positionReversed ? 'md:col-start-1 md:row-start-1' : ''
                    } ${imageYPosition === 'top' && 'self-start'} ${imageYPosition === 'bottom' && 'self-end'}`}
                >
                    <Image
                        src={sectionImage.url}
                        width={sectionImage.width}
                        height={sectionImage.height}
                        quality={30}
                        className="md:hidden"
                        alt={altText || ''}
                    />
                    <Image
                        src={sectionImageDesktop.url}
                        width={sectionImageDesktop.width}
                        height={sectionImageDesktop.height}
                        quality={30}
                        className={`hidden md:block`}
                        alt={altText || ''}
                    />
                </div>
            </Container>
        </Section>
    );
};

export default SideImageSection;
