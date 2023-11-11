import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { useOnScreen } from '@/hooks';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import { useRef } from 'react';

interface VisionBenefitsProps {
    sectionId: string;
    heading: string;
    beneficialItems: BeneficialItemsProps[];
}

/**
 * VisionBenefits Component
 *
 * This component represents a section highlighting the vision benefits, including a heading and a list of
 * beneficial items.
 *
 * @interface VisionBenefitsProps
 * @property {string} sectionId - The unique identifier for the VisionBenefits section.
 * @property {string} heading - The main heading for the VisionBenefits section.
 * @property {BeneficialItemsProps[]} beneficialItems - An array of BeneficialItemsProps representing individual beneficial items.
 *
 * @component
 * @param {VisionBenefitsProps} props - The properties passed to the VisionBenefits component.
 * @returns {JSX.Element} - The VisionBenefits component JSX representation.
 */
const VisionBenefits = ({ sectionId, heading, beneficialItems }: VisionBenefitsProps): JSX.Element => {
    return (
        <Section id={sectionId}>
            <Container className="grid gap-16 md:gap-32">
                <SectionTextColumn heading={heading}/>

                <div className="grid gap-12 md:gap-24">
                    {beneficialItems.map((item, key) => (
                        <BeneficialItems key={key} {...item} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

interface BeneficialItemsProps {
    icon: ImageType3;
    title: string;
    descriptions: string[];
    image: ImageType3;
}

/**
 * BeneficialItems Component
 *
 * This component represents a section containing beneficial items, each consisting of an icon, title,
 * descriptions, and an associated image. The section includes animations triggered when the component
 * comes into view.
 *
 * @interface BeneficialItemsProps
 * @property {ImageType3} icon - The icon representing the beneficial item.
 * @property {string} title - The title of the beneficial item.
 * @property {string[]} descriptions - An array of strings representing detailed descriptions of the beneficial item.
 * @property {ImageType3} image - The image associated with the beneficial item.
 *
 * @component
 * @param {BeneficialItemsProps} props - The properties passed to the BeneficialItems component.
 * @returns {JSX.Element} - The BeneficialItems component JSX representation.
 */
const BeneficialItems = ({ icon, title, descriptions, image }: BeneficialItemsProps): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: ref, triggerPosition: '60%' });

    return (
        <div className="grid items-center justify-items-center md:grid-cols-2 xl:grid-cols-[1fr_auto]" ref={ref}>
            <Image
                {...image}
                className="md:order-2 md:h-full md:w-full md:rounded-tr-radius2 md:rounded-br-radius2 md:object-cover xl:rounded-radius2 xl:object-contain"
            />
            <div
                className={`relative z-[2] grid max-w-[calc(100%_-_4rem)] content-start gap-8 rounded-radius2 border border-solid border-[#EAECF0] bg-white p-12 px-8 md:mt-0 md:max-w-full md:gap-12 md:rounded-tr-none md:rounded-br-none lg:w-full lg:p-12 transition-all duration-1000 xl:rounded-radius2 ${onEnter ? 'xl:translate-x-32 xl:opacity-100 -mt-20' : 'xl:translate-x-0 xl:opacity-0'}`}>
                <Image {...icon} className="max-h-[6rem] max-w-[6rem]"/>
                <h3 className="max-w-[46.7rem] font-latoBold text-[3rem] normal-case leading-[4rem] md:text-[4rem]">
                    {title}
                </h3>
                <div className="grid max-w-[54.8rem] gap-6">
                    {descriptions.map((item, key) => (
                        <p key={key} dangerouslySetInnerHTML={{ __html: item }}></p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VisionBenefits;
