import { FadeIn } from '@/components/Animations';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { ImageType3 } from '@/types';
import { Button2 } from '@/components/Buttons';

interface Props {
    heading: string;
    descriptions: string[];
    image: ImageType3;
    link: string;
    sectionId: string;
    imageClassName?: string;
}

/**
 * SurgeryDetails Component
 *
 * @param {EyeConsultationProps} props - The properties passed to the EyeConsultation component.
 * @returns {JSX.Element} - The EyeConsultation component JSX representation.
 */
const SurgeryDetails = ({ heading, descriptions, image, link, sectionId, imageClassName }: Props): JSX.Element => {
    return (
        <Section id={sectionId}>
            <Container className="grid items-center gap-12 md:grid-cols-2 lg:gap-32 2xl:grid-cols-[1fr_auto]">
                <Image {...image} className={twMerge('max-w-[69rem] w-full rounded-radius2', imageClassName)} />

                <div className="grid w-full content-start gap-6">
                    <h2 className="w-full font-latoBold text-[2.4rem] normal-case leading-[3.2rem] md:text-[2.4rem] md:leading-[3.2rem]">
                        {heading}
                    </h2>

                    <div className="description-box grid max-w-[46.7rem] gap-6">
                        {descriptions?.length
                            ? descriptions.map((item, key) => (
                                  <FadeIn key={key}>
                                      <p dangerouslySetInnerHTML={{ __html: item }}></p>
                                  </FadeIn>
                              ))
                            : null}
                    </div>

                    <Button2 type="anchor" link={link} text="Discover More" className="mt-6 justify-self-start" />
                </div>
            </Container>
        </Section>
    );
};

export default SurgeryDetails;
