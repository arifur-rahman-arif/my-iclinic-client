import { Container } from '@/components/Container';
import TextColumn from '@/components/page-sections/SectionParts/TextColumn';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import Image from 'next/image';
import { ReactNode } from 'react';

type ImageType = {
    url: string;
    width: number;
    height: number;
};

export interface SideImageSectionInterface {
    h2Heading?: ReactNode;
    h3LightHeading?: ReactNode;
    h3BoldHeading?: ReactNode;
    descriptions?: string[] | ReactNode[];
    sectionImage?: ImageType;
    sectionImageDesktop?: ImageType;
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
    textColumnDefaultClassName?: string;
    textColumnClassName?: string;
    dynamicTextColumn?: ReactNode;
    largeImageClassName?: string;
    smallImageClassName?: string;
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
 *     textColumnImage
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
    altText,
    midExtras,
    customColumn,
    textColumnImage,
    textColumnTopElements,
    defaultContainerClassName = 'grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32',
    containerClassName,
    paragraphAnimation = false,
    textColumnDefaultClassName,
    textColumnClassName,
    dynamicTextColumn,
    largeImageClassName,
    smallImageClassName
}: SideImageSectionInterface): JSX.Element => {
    const deviceSize = useDeviceSize();

    return (
        <Section className={`${sectionClass || ''}`}>
            <Container className={`${defaultContainerClassName} ${containerClassName || ''}`}>
                {/* Text column */}
                {dynamicTextColumn ? (
                    dynamicTextColumn
                ) : (
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
                        textColumnDefaultClassName={textColumnDefaultClassName}
                        textColumnClassName={textColumnClassName}
                    />
                )}

                {/* Image column */}
                {customColumn ? (
                    customColumn
                ) : (
                    <div
                        className={`row-start-1 h-full justify-self-center md:row-auto md:justify-self-auto ${
                            positionReversed ? 'md:col-start-1 md:row-start-1' : ''
                        } ${imageYPosition === 'top' && 'self-start'} ${imageYPosition === 'bottom' && 'self-end'}`}
                    >
                        {smallSizes.includes(deviceSize) && sectionImage && (
                            <Image
                                src={sectionImage.url}
                                width={sectionImage.width}
                                height={sectionImage.height}
                                quality={100}
                                className={`md:hidden ${smallImageClassName} rounded-primary`}
                                alt={altText || ''}
                            />
                        )}

                        {largeSizes.includes(deviceSize) && sectionImageDesktop && (
                            <Image
                                src={sectionImageDesktop.url}
                                width={sectionImageDesktop.width}
                                height={sectionImageDesktop.height}
                                quality={100}
                                className={`${
                                    largeImageClassName || 'hidden rounded-primary md:block md:scale-90 2xl:scale-100'
                                }`}
                                alt={altText || ''}
                            />
                        )}
                    </div>
                )}
            </Container>
        </Section>
    );
};

export default SideImageSection;
