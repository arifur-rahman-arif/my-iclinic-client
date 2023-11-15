import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { useOnScreen } from '@/hooks';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import styles from './styles/EyeCare.module.scss';

interface LensBenefitsProps {
    sectionId: string;
    heading: string;
    cardList?: CardProps[];
}

const defaultCardList: CardProps[] = [
    {
        image: {
            src: '/images/section-images/saving-money.png',
            width: 294,
            height: 167,
            alt: 'Saving Money'
        },
        title: 'Saving Money',
        shortDescription: 'Saves the average contact lens buyer <strong>£13,200!</strong>',
        descriptions: [
            'Saves the average contact lens buyer <strong>£13,200!</strong>',
            'One custom lens means one all- time purchase.',
            'Never waste money by repeatedly buying plastic contact lenses to throw away. One ICL procedure saves the average contact lens buyer <strong>£13,200!</strong>'
        ]
    },
    {
        image: {
            src: '/images/section-images/saving-time.png',
            width: 294,
            height: 167,
            alt: 'Saving Time'
        },
        title: 'Saving Time',
        shortDescription:
            'Where are my contacts? Wake up in the morning with your sight ready before you are!',
        descriptions: [
            'Where are my contacts? Wake up in the morning with your sight ready before you are!',
            'Skip the daily lens routine for hassle-free clarity.',
            'Reclaim your time and enjoy immediate, ready-to-go vision.'
        ]
    },
    {
        image: {
            src: '/images/section-images/saving-vision.png',
            width: 294,
            height: 167,
            alt: 'Saving Vision'
        },
        title: 'Saving Vision',
        shortDescription: 'No risk of infections, dry eyes or blindness',
        descriptions: [
            'No risk of infections, dry eyes or blindness',
            'Enjoy sharp, stable vision without discomfort.',
            'Pursue your passions worry-free with constant clear vision.'
        ]
    },
    {
        image: {
            src: '/images/section-images/save-planet.png',
            width: 294,
            height: 167,
            alt: 'Saving Our Planet'
        },
        title: 'Saving Our Planet',
        shortDescription: 'Sustainable contact lenses for a sustainable future.',
        descriptions: [
            'Sustainable contact lenses for a sustainable future.',
            'Reduce your environmental footprint by eliminating the need for disposable plastic lenses that end up in landfills.',
            'Less plastic waste means less harm to our oceans and wildlife. Be part of the solution to plastic pollution.'
        ]
    }
];

/**
 * LensBenefits Component
 *
 * This component represents a section highlighting the benefits of using specific lenses. It includes a heading
 * and a list of cards, each containing information about the advantages of the lenses.
 *
 * @interface LensBenefitsProps
 * @property {string} sectionId - The unique identifier for the LensBenefits section.
 * @property {string} heading - The main heading for the LensBenefits section.
 * @property {CardProps[]} cardList - An array of CardProps representing individual cards with icon, title, and description.
 *
 * @component
 * @param {LensBenefitsProps} props - The properties passed to the LensBenefits component.
 * @returns {JSX.Element} - The LensBenefits component JSX representation.
 */
const LensBenefits = ({ sectionId, heading, cardList }: LensBenefitsProps): JSX.Element => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef });

    const mergedCardList = cardList
        ? cardList.map((card, index) => ({
            image: card.image.src ? card.image : defaultCardList[index].image,
            title: card.title || defaultCardList[index].title,
            shortDescription: card.shortDescription || defaultCardList[index].shortDescription,
            descriptions: card.descriptions || defaultCardList[index].descriptions
        }))
        : defaultCardList;

    return (
        <Section id={sectionId}>
            <Container ref={containerRef} className="grid gap-12 md:gap-24 ">
                <SectionTextColumn heading={heading}/>
                <div
                    className={`${
                        onEnter && styles.styles
                    } grid grid-cols-[repeat(auto-fit,_minmax(27rem,_1fr))] justify-items-center gap-6 xl:grid-cols-4`}
                >
                    {mergedCardList?.length && mergedCardList.map((card, key) => <Card key={key} {...card} />)}
                </div>
            </Container>
        </Section>
    );
};

interface CardProps {
    image: ImageType3;
    title: string;
    shortDescription: string;
    descriptions: string[];
}

/**
 * Card Component
 *
 * This component represents a card containing an image, title, short description, and an expandable section
 * with additional detailed descriptions. It provides a "Read More" button to reveal more information.
 *
 * @interface CardProps
 * @property {ImageType3} image - The image associated with the card.
 * @property {string} title - The title of the card.
 * @property {string} shortDescription - The short description displayed initially.
 * @property {string[]} descriptions - An array of strings representing detailed descriptions.
 *
 * @component
 * @param {CardProps} props - The properties passed to the Card component.
 * @returns {JSX.Element} - The Card component JSX representation.
 */
const Card = ({ image, title, shortDescription, descriptions }: CardProps) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className="group/card relative grid w-full translate-y-12 grid-rows-[auto_1fr] gap-12 overflow-hidden rounded-radius2 border border-solid border-[#EAECF0] pb-12 opacity-0 shadow-sm transition-shadow duration-500 hover:shadow-xl">
            <Image
                {...image}
                className="h-full w-full rounded-tl-radius2 rounded-tr-radius2 transition-all duration-500 group-hover/card:scale-105"
            />
            <div className="grid h-full justify-items-start gap-6 px-12">
                <span
                    className="font-latoBold text-[2rem] capitalize leading-[2.8rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                    {title}
                </span>
                <p dangerouslySetInnerHTML={{ __html: shortDescription }}></p>
                <button
                    className="cursor-pointer font-mulishBold text-blue decoration-blue underline-offset-4 hover:underline"
                    title="Read more"
                    onClick={() => setIsClicked(true)}
                >
                    Read More
                </button>
            </div>

            {/* Overlay */}
            <div
                style={{ transformOrigin: 'right top' }}
                className={`absolute inset-0 z-[1] grid h-full w-full content-start justify-items-start gap-6 rounded-radius2 bg-white p-12 pt-16 transition-all duration-1000 ${
                    isClicked ? 'pointer-events-auto scale-100' : 'pointer-events-none scale-0'
                }`}
            >
                <span
                    className="font-latoBold text-[2rem] capitalize leading-[2.8rem] text-heading md:text-[2.4rem] md:leading-[3.2rem]">
                    {title}
                </span>
                {descriptions.map((item, key) => (
                    <p key={key} dangerouslySetInnerHTML={{ __html: item }}></p>
                ))}

                <IoMdCloseCircleOutline
                    title="Close"
                    className="absolute top-0 right-0 h-10 w-10 translate-y-4 -translate-x-4 cursor-pointer fill-brand transition-all duration-500 hover:scale-110"
                    onClick={() => setIsClicked(false)}
                />
            </div>
        </div>
    );
};

export default LensBenefits;
