import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { ImageType3 } from '@/types';
import Image from 'next/image';

interface ContactLensComponentProps {
    sectionId: string;
    heading: string;
    priceText: string;
    subHeading: string;
    description: string;
    list: string[];
    image: ImageType3;
}

/**
 * ContactLensComponent Component
 *
 * This component represents a section dedicated to contact lenses. It includes a heading, pricing information,
 * a subheading, a general description, a list of features, and an image showcasing the contact lenses.
 *
 * @interface ContactLensComponentProps
 * @property {string} sectionId - The unique identifier for the ContactLensComponent section.
 * @property {string} heading - The main heading for the ContactLensComponent section.
 * @property {string} priceText - The text representing pricing information.
 * @property {string} subHeading - The subheading providing additional context.
 * @property {string} description - The general description providing details about the contact lenses.
 * @property {string[]} list - An array of strings representing features or points of interest.
 * @property {ImageType3} image - The image associated with the contact lenses.
 *
 * @component
 * @param {ContactLensComponentProps} props - The properties passed to the ContactLensComponent component.
 * @returns {JSX.Element} - The ContactLensComponent component JSX representation.
 */
const ContactLensComponent = ({
                                  sectionId,
                                  heading,
                                  priceText,
                                  subHeading,
                                  description,
                                  list,
                                  image
                              }: ContactLensComponentProps): JSX.Element => {
    return (
        <Section id={sectionId}>
            <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-24 xl:grid-cols-[1fr_auto] xl:gap-32">
                <div className="grid content-start gap-12">
                    <SectionTextColumn heading={heading}/>

                    <div
                        className="ml-10 grid rounded-radius2 border border-solid border-[#EAECF0] py-12 px-10 shadow-sm">
                        <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#003E79]">{priceText}</span>
                        <span className="font-mulishBold text-[2rem] leading-[2.8rem] text-[#293C4E]">
                            {subHeading}
                        </span>
                    </div>

                    <p className="ml-10 max-w-[44.5rem]">{description}</p>

                    {list?.length && (
                        <ul className="ml-10 grid gap-6">
                            {list.map((item, key) => (
                                <li key={key} className="flex items-start justify-start gap-4">
                                    <Image
                                        src="/images/icons/icon-dotted-arrow.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="translate-y-2 "
                                    />
                                    <strong>{item}</strong>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <Image {...image} className="rounded-radius2"/>
            </Container>
        </Section>
    );
};

export default ContactLensComponent;
