import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ImageType } from '@/types';
import Image from 'next/image';
import SectionTextColumn from '@/components/SectionTextColumn';

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
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24 xl:grid-cols-[auto_1fr] xl:gap-32">
            <Image alt={title} {...image} className="max-h-[29.6rem] rounded-radius2 object-cover" />
            <div className="grid max-w-[46.7rem] content-start gap-6">
                <h3 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">{title}</h3>
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
            src: '/images/section-images/bacterial-conjunctivitis.webp',
            width: 603,
            height: 296
        },
        title: 'Bacterial Conjunctivitis',
        descriptions: [
            'Our ophthalmologist will prescribe a short course of antibiotic drops and monitor your eyes until your conjunctivitis is successfully eliminated.'
        ]
    },
    {
        image: {
            src: '/images/section-images/viral-conjunctivitis.webp',
            width: 603,
            height: 296
        },
        title: 'Viral Conjunctivitis',
        descriptions: [
            'Our ophthalmologist can make viral conjunctivitis symptoms more comfortable for you with lubricating conjunctivitis eye drops.',
            'These eye drops will help remissen your symptoms while the body removes the virus.'
        ]
    },
    {
        image: {
            src: '/images/section-images/allergic-conjunctivitis.webp',
            width: 603,
            height: 296
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
    const mergedCardList = list
        ? list.map((card, index) => ({
              title: card?.title ? card.title : conjunctivitisTreatmentList[index].title,
              descriptions: card.descriptions?.length
                  ? card.descriptions
                  : conjunctivitisTreatmentList[index].descriptions,
              image: card?.image?.src ? card.image : conjunctivitisTreatmentList[index].image
          }))
        : conjunctivitisTreatmentList;

    return (
        <Section id="conjunctivitis-treatment">
            <Container className="grid gap-12 md:gap-24">
                <SectionTextColumn heading={heading} descriptions={descriptions} />

                <div className="grid max-w-[106rem] gap-6 md:ml-9">
                    {mergedCardList.map((item, index) => (
                        <InfoBox key={index} {...item} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ConjunctivitisTreatment;
