import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { ImageType } from '@/types';
import Image from 'next/image';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from '@/page-sections/SectionParts/TextColumn.module.scss';

interface CorneaOfferingsProps {
    sectionHeadingClass?: string;
    heading: string;
    headingClassName?: string;
    barClassName?: string;
    image: ImageType;
    descriptions: string[];
    descriptionContainerClassName?: string;
    reversed?: boolean;
    textColumnFooter?: ReactNode;
    textColumnFooterClass?: string;
}

/**
 * Cornea offering components
 *
 * @param {string} heading
 * @param {ImageType} image
 * @param {string[]} descriptions
 * @param {JSX.Element} ctaButton
 * @param {boolean | undefined} reversed
 * @returns {JSX.Element}
 * @constructor
 */
const CorneaOfferings = ({
    sectionHeadingClass,
    heading,
    headingClassName,
    barClassName,
    image,
    descriptions,
    descriptionContainerClassName,
    textColumnFooter,
    textColumnFooterClass,
    reversed
}: CorneaOfferingsProps): JSX.Element => {
    return (
        <Section>
            <Container
                className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24 xl:gap-28 ${
                    reversed ? 'xl:grid-cols-[auto_1fr]' : ' xl:grid-cols-[1fr_auto]'
                } ${styles.styles}`}
            >
                <Image
                    {...image}
                    alt={heading}
                    className={`${reversed && 'order-2 justify-self-end'} rounded-radius2`}
                    quality={100}
                    unoptimized
                />

                <SectionTextColumn
                    className={twMerge('max-w-[50rem]', sectionHeadingClass)}
                    heading={heading}
                    descriptions={descriptions}
                    headingClassName={headingClassName}
                    barClassName={barClassName}
                    descriptionContainerClassName={twMerge(
                        '[&_strong]:text-heading [&_strong]:!text-[1.6rem] [&_strong_*]:!text-[1.6rem] [&_strong_*]:!leading-[2.4rem] [&_strong]:!leading-[2.4rem]',
                        descriptionContainerClassName
                    )}
                    textColumnFooter={textColumnFooter}
                    textColumnFooterClass={textColumnFooterClass}
                />
            </Container>
        </Section>
    );
};

export default CorneaOfferings;
