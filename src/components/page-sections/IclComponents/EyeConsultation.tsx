import { FadeIn } from '@/components/Animations';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface EyeConsultationProps {
    sectionId: string;
    heading: string;
    descriptions: string[];
    image: ImageType3;
    imageClassName?: string;
}

/**
 * EyeConsultation Component
 *
 * This component represents a section dedicated to eye consultation services. It includes a heading,
 * detailed descriptions, and an image related to eye consultation.
 *
 * @interface EyeConsultationProps
 * @property {string} sectionId - The unique identifier for the EyeConsultation section.
 * @property {string} heading - The main heading for the eye consultation section.
 * @property {string[]} descriptions - An array of strings representing detailed descriptions.
 * @property {ImageType3} image - The image associated with the eye consultation section.
 * @property {string} [imageClassName] - Optional additional class name for styling the image.
 *
 * @component
 * @param {EyeConsultationProps} props - The properties passed to the EyeConsultation component.
 * @returns {JSX.Element} - The EyeConsultation component JSX representation.
 */
const EyeConsultation = ({
                             heading,
                             descriptions,
                             image,
                             sectionId,
                             imageClassName
                         }: EyeConsultationProps): JSX.Element => {
    return (
        <Section id={sectionId}>
            <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-32 2xl:grid-cols-[1fr_auto]">
                <Image {...image} className={twMerge('rounded-radius2', imageClassName)}/>

                <div className="grid content-start gap-6">
                    <h2 className="w-full font-latoBold text-[2.4rem] normal-case leading-[3.2rem] md:text-[2.4rem] md:leading-[3.2rem]">
                        {heading}
                    </h2>

                    <div className="description-box grid max-w-[46.7rem] gap-6">
                        {descriptions.map((item, key) => (
                            <FadeIn key={key}>
                                <p dangerouslySetInnerHTML={{ __html: item }}></p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default EyeConsultation;
