import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ReactNode } from 'react';
import Image from 'next/image';
import { ImageType } from '@/types';
import { twMerge } from 'tailwind-merge';

interface Props {
    heading: string;
    descriptions: string[];
    sectionFooter?: ReactNode;
    reversed?: boolean;
    image: ImageType;
    imageClass?: string;
    descriptionWrapperClass?: string;
}

/**
 * Glaucoma service component
 * @param {string} heading
 * @param {string} descriptions
 * @param {ReactNode} sectionFooter
 * @param {boolean} reversed
 * @param {ImageType} image
 * @param {ImageType} descriptionWrapperClass
 * @constructor
 */
const GlaucomaService = ({
    heading,
    descriptions,
    sectionFooter,
    reversed,
    image,
    imageClass,
    descriptionWrapperClass
}: Props): JSX.Element => {
    return (
        <Section>
            <Container
                className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 xl:gap-32 ${
                    reversed ? 'xl:grid-cols-[auto_1fr]' : ' xl:grid-cols-[1fr_auto]'
                }`}
            >
                <Image
                    {...image}
                    alt={heading}
                    className={twMerge(
                        `${reversed && 'md:order-2'} h-full w-full rounded-radius2 object-cover`,
                        imageClass
                    )}
                    quality={100}
                />

                <div className="grid w-full max-w-[47rem] content-start gap-6">
                    {heading ? (
                        <h2 className="font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">{heading}</h2>
                    ) : null}

                    <div className={twMerge('grid gap-6', descriptionWrapperClass)}>
                        {descriptions.map((item, key) => (
                            <p
                                key={key}
                                className="whitespace-pre-line text-balance [&_strong]:text-heading"
                                dangerouslySetInnerHTML={{ __html: item }}
                            ></p>
                        ))}
                    </div>

                    {sectionFooter && <div className="mt-6">{sectionFooter}</div>}
                </div>
            </Container>
        </Section>
    );
};

export default GlaucomaService;
