import { FadeIn } from '@/components/Animations';
import { Container } from '@/components/Container';
import { H3Variant3 } from '@/components/Headings';
import { Section } from '@/components/Section';
import { ImageType } from '@/types';
import Image from 'next/image';

interface CorneaOfferingsProps {
    heading: string;
    descriptiveLabel?: string;
    image: ImageType;
    descriptions: string[];
    ctaButton: JSX.Element;
    reversed?: boolean;
}

/**
 * Cornea offering components
 *
 * @param {string} heading
 * @param {string | undefined} descriptiveLabel
 * @param {ImageType} image
 * @param {string[]} descriptions
 * @param {JSX.Element} ctaButton
 * @param {boolean | undefined} reversed
 * @returns {JSX.Element}
 * @constructor
 */
const CorneaOfferings = ({
    heading,
    descriptiveLabel,
    image,
    descriptions,
    ctaButton,
    reversed
}: CorneaOfferingsProps): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-32">
                <Image {...image} alt={heading} className={`${reversed && 'order-2'} rounded-radius2`} />

                <div className="grid gap-6">
                    <H3Variant3>
                        {heading}{' '}
                        {descriptiveLabel && (
                            <span className="-translate-y-[-0.3rem] text-[1.8rem] leading-[2.8rem]">
                                ({descriptiveLabel})
                            </span>
                        )}
                    </H3Variant3>

                    {descriptions?.map((description, index) => (
                        <FadeIn key={index}>
                            <p dangerouslySetInnerHTML={{ __html: description }}></p>
                        </FadeIn>
                    ))}

                    <div className="mt-6">{ctaButton}</div>
                </div>
            </Container>
        </Section>
    );
};

export default CorneaOfferings;
