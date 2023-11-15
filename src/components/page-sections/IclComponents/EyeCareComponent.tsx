import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './styles/EyeCare.module.scss';

interface EyeCareComponentProps {
    sectionId: string;
    cardList?: CardProps[];
}

const defaultCardList = [
    {
        icon: {
            src: '/images/icons/icons-check-outline-blue.svg',
            width: 48,
            height: 48,
            alt: ''
        },
        title: '99.4% of people',
        description: 'Would choose to have ICL again'
    },
    {
        icon: {
            src: '/images/icons/icons-check-outline-blue.svg',
            width: 48,
            height: 48,
            alt: ''
        },
        title: '2,000,000+ ICL',
        description: 'Procedures worldwide'
    },
    {
        icon: {
            src: '/images/icons/icons-check-outline-blue.svg',
            width: 48,
            height: 48,
            alt: ''
        },
        title: '20+ years',
        description: 'Of premium ICL performance'
    }
];

/**
 * EyeCareComponent Component
 *
 * This component represents a section dedicated to eye care services. It includes a list of cards,
 * each containing an icon, title, and description related to various aspects of eye care.
 *
 * @interface EyeCareComponentProps
 * @property {string} sectionId - The unique identifier for the EyeCareComponent section.
 * @property {CardProps[]} cardList - An array of CardProps representing individual cards with icon, title, and description.
 *
 * @component
 * @param {EyeCareComponentProps} props - The properties passed to the EyeCareComponent component.
 * @returns {JSX.Element} - The EyeCareComponent component JSX representation.
 */
const EyeCareComponent = ({ sectionId, cardList }: EyeCareComponentProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef });

    const mergedCardList = cardList
        ? cardList.map((card, index) => ({
            icon: card.icon.src ? card.icon : defaultCardList[index].icon,
            title: card.title || defaultCardList[index].title,
            description: card.description || defaultCardList[index].description
        }))
        : defaultCardList;

    return (
        <Section id={sectionId}>
            <Container
                ref={containerRef}
                className={`grid !max-w-[109rem] grid-cols-[repeat(auto-fit,_minmax(26rem,_1fr))] gap-12 ${
                    onEnter && styles.styles
                }`}
            >
                {mergedCardList?.length && mergedCardList.map((card, key) => <Card key={key} {...card} />)}
            </Container>
        </Section>
    );
};

interface CardProps {
    icon: ImageType3;
    title: string;
    description: string;
}

/**
 * Card Component
 *
 * This component represents an individual card within the EyeCareComponent. Each card includes an icon,
 * title, and description related to a specific aspect of eye care.
 *
 * @interface CardProps
 * @property {ImageType3} icon - The icon representing the card.
 * @property {string} title - The title of the card.
 * @property {string} description - The description providing details about the card.
 *
 * @component
 * @param {CardProps} props - The properties passed to the Card component.
 * @returns {JSX.Element} - The Card component JSX representation.
 */
const Card = ({ icon, title, description }: CardProps) => {
    return (
        <div className="grid translate-y-12 content-start justify-items-center gap-4 opacity-0">
            <Image {...icon} />
            <span
                className="font-latoBold text-[2.8rem] leading-[3.2rem] text-heading md:text-[3rem] md:leading-[3.6rem]">
                {title}
            </span>
            <p>{description}</p>
        </div>
    );
};

export default EyeCareComponent;
