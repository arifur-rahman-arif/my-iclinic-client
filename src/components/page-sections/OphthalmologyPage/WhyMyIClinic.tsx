import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import Image from 'next/image';
import RetinaTreatmentsContents from 'src/types/pages/retinaTreatments';

const cardList: CardProps[] = [
    {
        icon: '/images/icons/comprehensive-care.svg',
        title: 'Comprehensive Care',
        description: 'My-iClinic ophthalmologists are equipped to handle a wide spectrum of eye care needs.'
    },
    {
        icon: '/images/icons/advanced-techniques.svg',
        title: 'Advanced Techniques',
        description:
            'We use cutting-edge technologies and surgical methods to ensure optimal results, aiming to restore and maintain vision to the highest standard.'
    },
    {
        icon: '/images/icons/collaborative-approach.svg',
        title: 'Collaborative Approach',
        description:
            'We collaborate with optometrists and other eye care professionals, ensuring a holistic, personalised solution for every aspect of eye health.'
    }
];

interface WhyMyIClinicProps extends Pick<RetinaTreatmentsContents, 'section2'> {}

/**
 * `WhyMyIClinic` is a React functional component that represents a section of the My-iClinic website, providing
 * reasons why patients should choose My-iClinic for their eye care needs. It displays a list of key features or
 * benefits in a grid format, along with an image showcasing state-of-the-art equipment.
 *
 * @returns {JSX.Element} The JSX element representing the "Why My-iClinic" section.
 */
const WhyMyIClinic = ({ section2 }: Partial<WhyMyIClinicProps>): JSX.Element => {
    const mergedCardList = cardList.map((card, index) => {
        const newData = section2?.cards[index];
        return {
            title: newData?.title || card.title,
            description: newData?.description || card.description,
            icon: newData?.icon ? newData.icon : card.icon
        };
    });

    return (
        <Section id="why-my-iclinic">
            <Container className="grid gap-12 md:gap-24">
                <SectionTextColumn heading={section2?.heading || 'Why my-iclinic'} />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[auto_auto_auto_1fr]">
                    {((mergedCardList.length && mergedCardList) || cardList).map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                    <div className="group/card relative overflow-hidden rounded-radius2">
                        <Image
                            src={section2?.lastCard?.image || '/images/section-images/state-of-the-art-equipment.webp'}
                            alt="State-of-the-art Equipment"
                            width={202}
                            height={316}
                            className="max-h-[31.6rem] w-full rounded-radius2 object-cover transition-all duration-500 group-hover/card:scale-125"
                        />

                        <div className=" absolute bottom-0 left-0 grid max-w-[22rem] gap-2 p-8">
                            <Image src="/images/icons/icon-cyber-eye.svg" alt="Icon" width={30} height={30} />
                            <span className="h-[0.1rem] w-full max-w-[13.6rem] bg-white"></span>
                            <span className="font-latoBold text-[2rem] uppercase leading-[2.8rem] text-white">
                                {section2?.lastCard?.title || 'State-of-the-art Equipment'}
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

/**
 * The `CardProps` interface defines the shape of props expected by the `Card` component.
 *
 * @interface
 * @property {string} icon - The URL of the icon to be displayed in the card.
 * @property {string} title - The title or heading for the card.
 * @property {string} description - The description or content of the card.
 */
interface CardProps {
    icon: string;
    title: string;
    description: string;
}

/**
 * `Card` is a React functional component that represents a card element often used to display information or features
 * in a grid format. It includes an icon, a title, and a description.
 *
 * @param {CardProps} props - The props for configuring the card.
 * @returns {JSX.Element} The JSX element representing the card.
 */
const Card = ({ icon, title, description }: CardProps): JSX.Element => {
    return (
        <div className="grid content-start gap-6 rounded-radius2 border border-solid border-[#EAECF0] p-12 shadow-sm transition-all duration-500 hover:shadow-shadow1 xl:max-w-[33rem]">
            <Image src={icon} alt={title} width={56} height={56} />
            <h3 className="mt-6 font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    );
};

export default WhyMyIClinic;
