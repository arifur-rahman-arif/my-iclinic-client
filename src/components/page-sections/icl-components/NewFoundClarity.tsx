import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

const cardList: CardProps[] = [
    {
        title: 'Enjoy Clear Vision',
        description: 'Experience sharp, natural vision without the need for glasses or contacts.',
        image: '/images/section-images/enjoy-clear-vision.webp'
    },
    {
        title: 'Live Actively',
        description: 'Engage in sports, hobbies, and everyday activities with clear vision.',
        image: '/images/section-images/live-actively.webp'
    },
    {
        title: 'Comfort Beyond Compare',
        description: 'Say goodbye to discomfort from contacts and frames.',
        image: '/images/section-images/comfort-beyond-compare.webp'
    },
    {
        title: 'Long-Term Convenience',
        description: 'Wake up every day with clear vision without the hassle of daily lenses.',
        image: '/images/section-images/long-term-convenience.webp'
    },
    {
        title: 'Aesthetic Freedom',
        description: 'Enhance your appearance by ditching glasses.',
        image: '/images/section-images/aesthetic-freedom.webp'
    }
];

/**
 * Newfound Clarity component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NewFoundClarity = (): JSX.Element => {
    return (
        <Section id="newfound-clarity">
            <Container className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] items-start justify-center gap-6 sm:grid-cols-[repeat(auto-fit,_40rem)] md:items-center">
                <div className="grid gap-6">
                    <h2 className="max-w-[39.8rem] font-latoBold text-[3rem] normal-case leading-[3.6rem] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        Newfound clarity and freedom
                    </h2>
                    <p className="max-w-[34.5rem] text-[1.8rem]">
                        Eliminate glasses and standard contacts from your life for good.
                    </p>
                </div>
                {cardList.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </Container>
        </Section>
    );
};

export default NewFoundClarity;

interface CardProps {
    image: string;
    title: string;
    description: string;
}

/**
 * Grid card
 *
 * @param {string} image
 * @param {string} title
 * @param {string} description
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({ image, title, description }: CardProps): JSX.Element => {
    return (
        <div className="grid h-full content-start gap-12 rounded-primary border-b-4 border-transparent pb-6 shadow-shadow2 transition-all duration-500 hover:border-b-[#0099FF] hover:shadow-shadow1 md:pb-12">
            <Image
                src={image || '/images/section-images/placeholder-image.webp'}
                alt={title}
                width={400}
                height={300}
                className="h-full w-full rounded-primary md:min-h-[30rem]"
            />

            <div className="gap6 grid px-6 md:px-12">
                <h3 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">{title}</h3>
                <p className="!text-[1.8rem]">{description}</p>
            </div>
        </div>
    );
};
