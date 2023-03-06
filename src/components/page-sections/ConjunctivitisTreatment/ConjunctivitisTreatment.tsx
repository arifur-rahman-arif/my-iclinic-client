import { Container } from '@/components/Container';
import { H3Variant2 } from '@/components/Headings';
import { Section } from '@/components/Section';
import { ImageType } from '@/types';
import Image from 'next/image';

interface InfoBoxInterface {
    image: ImageType;
    title: string;
    descriptions: string[];
    index: number;
}

/**
 * Inner component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const InfoBox = ({ image, title, descriptions, index }: InfoBoxInterface): JSX.Element => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-24 lg:gap-44 items-center w-full">
            <Image alt={title} {...image} className={`${index % 2 === 1 && 'md:col-start-2 md:row-start-1'}`} />
            <div className="grid gap-6 md:gap-12 content-start md:max-w-[50rem]">
                <H3Variant2>{title}</H3Variant2>
                {descriptions.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
};

const conjunctivitisTreatmentList: Omit<InfoBoxInterface, 'index'>[] = [
    {
        image: {
            src: '/images/section-images/bacterial-conjunctivitis.png',
            width: 376,
            height: 271
        },
        title: 'Bacterial conjunctivitis',
        descriptions: [
            'Our ophthalmologist will prescribe a short course of antibiotic drops and monitor your eyes until your conjunctivitis is successfully eliminated.'
        ]
    },
    {
        image: {
            src: '/images/section-images/viral-conjunctivitis.png',
            width: 376,
            height: 271
        },
        title: 'Viral Conjunctivitis',
        descriptions: [
            'Our ophthalmologist can make viral conjunctivitis symptoms more comfortable for you with lubricating conjunctivitis eye drops.',
            'These eye drops will help remissen your symptoms while the body removes the virus.'
        ]
    },
    {
        image: {
            src: '/images/section-images/allergic-conjunctivitis.png',
            width: 376,
            height: 271
        },
        title: 'Allergic Conjunctivitis',
        descriptions: [
            'Allergic conjunctivitis is best treated by avoiding the causative allergen, but if that is not possible, then our ophthalmologist will prescribe anti-allergy drops such as antihistamine.'
        ]
    }
];

interface ConjunctivitisTreatmentInterface {
    list?: Omit<InfoBoxInterface, 'index'>[];
    heading?: string;
    descriptions?: string[];
}

/**
 * Conjunctivitis Treatment component
 *
 * @param {InfoBoxInterface[] | undefined} list
 * @param {string | undefined} heading
 * @param {string[] | undefined} descriptions
 * @returns {JSX.Element}
 * @constructor
 */
const ConjunctivitisTreatment = ({ list, heading, descriptions }: ConjunctivitisTreatmentInterface): JSX.Element => {
    return (
        <Section className="bg-brandLight py-12 md:py-24">
            <Container className="grid gap-12 md:gap-24 justify-items-center">
                <div className="md:max-w-[50rem] grid grid-cols-1 gap-12 w-full">
                    <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-8 md:gap-x-8">
                        <span className="h-full w-[0.5rem] bg-yellow"></span>
                        <h2 className="w-full normal-case md:max-w-[55rem]">
                            {heading || (
                                <>
                                    Conjunctivitis <strong className="normal-case">Treatment</strong>
                                </>
                            )}
                        </h2>
                    </div>

                    <div className="ml-10">
                        {descriptions?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-[27rem] md:max-w-[53rem] h-1 bg-[#9B9FA1]"></div>

                <div className="max-w-[106rem] grid gap-12 md:gap-24">
                    {((list?.length && list) || conjunctivitisTreatmentList).map((item, index) => (
                        <InfoBox key={index} {...item} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ConjunctivitisTreatment;
