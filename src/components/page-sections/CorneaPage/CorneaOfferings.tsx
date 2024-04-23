import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { ImageType } from '@/types';
import Image from 'next/image';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CorneaOfferingsProps {
    heading: string;
    image: ImageType;
    descriptions: string[];
    descriptionContainerClassName?: string;
    reversed?: boolean;
    textColumnFooter?: ReactNode;
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
    heading,
    image,
    descriptions,
    descriptionContainerClassName,
    textColumnFooter,
    reversed
}: CorneaOfferingsProps): JSX.Element => {
    return (
        <Section>
            <Container
                className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24 xl:gap-28 ${
                    reversed ? 'xl:grid-cols-[auto_1fr]' : ' xl:grid-cols-[1fr_auto]'
                }`}
            >
                <Image
                    {...image}
                    alt={heading}
                    className={`${reversed && 'order-2'} h-full w-full rounded-radius2 object-cover `}
                    quality={100}
                    unoptimized
                />

                <SectionTextColumn
                    className="max-w-[50rem]"
                    heading={heading}
                    descriptions={descriptions}
                    descriptionContainerClassName={twMerge('[&_strong]:text-heading', descriptionContainerClassName)}
                    textColumnFooter={textColumnFooter}
                />
            </Container>
        </Section>
    );
};

export default CorneaOfferings;
