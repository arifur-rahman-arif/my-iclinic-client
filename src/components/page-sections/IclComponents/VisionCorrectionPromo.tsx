import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { ImageType3 } from '@/types';
import Image from 'next/image';

interface VisionCorrectionPromoProps {
    heading: string;
    subHeading: string;
    descriptions: string[];
    image1: ImageType3;
    image2: ImageType3;
}


/**
 * VisionCorrectionPromo Component
 *
 * This component represents a promotional section for vision correction services. It includes a heading,
 * subheading, descriptions, and two images showcasing vision correction-related content.
 *
 * @interface VisionCorrectionPromoProps
 * @property {string} heading - The main heading for the vision correction promo.
 * @property {string} subHeading - The subheading providing additional context.
 * @property {string[]} descriptions - An array of strings representing detailed descriptions.
 * @property {ImageType3} image1 - The first image associated with the vision correction promo.
 * @property {ImageType3} image2 - The second image associated with the vision correction promo.
 *
 * @component
 * @param {VisionCorrectionPromoProps} props - The properties passed to the VisionCorrectionPromo component.
 * @returns {JSX.Element} - The VisionCorrectionPromo component JSX representation.
 */
const VisionCorrectionPromo = ({
                                   heading,
                                   subHeading,
                                   descriptions,
                                   image1,
                                   image2
                               }: VisionCorrectionPromoProps): JSX.Element => {
    return (
        <Section id="vision-correction-promo">
            <Container className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[1fr_auto] lg:gap-32">
                <div className="grid grid-cols-2 md:order-2">
                    <Image {...image1} />
                    <Image {...image2} className="rounded-tr-radius2 rounded-br-radius2"/>
                </div>
                <div className="grid content-start gap-6">
                    <SectionTextColumn heading={heading} headingClassName="max-w-[40.9rem]"/>

                    <div className="description-box ml-9 grid max-w-[46.7rem] gap-6">
                        <p className="max-w-[37.6rem] font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#293C4E]">
                            {subHeading}
                        </p>

                        {descriptions.map((item, key) => (
                            <p key={key} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default VisionCorrectionPromo;
