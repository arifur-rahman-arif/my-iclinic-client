import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { ImageType3 } from '@/types';
import Image1 from '@/section-images/technology-empowerment.webp';
import Image2 from '@/section-images/health-education.webp';
import Image3 from '@/section-images/community-development.webp';
import Image from 'next/image';

interface Props {
    heading: string;
    cards: Array<{
        image: ImageType3;
        title: string;
        description: string;
    }>;
}

/**
 * ProjectOverview Component
 *
 * Renders a section displaying an overview of projects with associated cards.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} props.heading - The heading for the project overview section.
 * @param {Array} props.cards - An array of project cards, each containing image, title, and description.
 *
 * @returns {JSX.Element} JSX Element representing the ProjectOverview component.
 */
const ProjectOverview = ({ heading, cards }: Props): JSX.Element => {
    // Create a new array with merged card data
    const staticImages = [Image1, Image2, Image3];

    const mergedCardList =
        cards?.map((card, index) => ({
            ...card,
            image: card.image ? card.image : staticImages[index]
        })) || [];

    return (
        <Section id="project-overview">
            <Container className="grid gap-12 md:gap-24">
                <SectionTextColumn heading={heading} headingClassName="max-w-[40.9rem]" />

                <div className="flex flex-wrap items-start justify-center gap-6 xl:justify-start">
                    {mergedCardList.length > 0 && mergedCardList.map((item, key) => <Card key={key} {...item} />)}
                </div>
            </Container>
        </Section>
    );
};

interface CardProps {
    image: Omit<ImageType3, 'alt'>;
    title: string;
    description: string;
}

/**
 * Card Component
 *
 * Renders a card with an image, title, and description for a project.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Object} props.image - The image object for the card, including src and alt properties.
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - The description of the project.
 *
 * @returns {JSX.Element} JSX Element representing the Card component.
 */
const Card = ({ image, title, description }: CardProps): JSX.Element => {
    return (
        <div className="group/card grid w-full max-w-[40.3rem] content-start gap-6 rounded-radius2 border border-[#EAECF0] transition-shadow duration-500 hover:shadow-shadow1">
            <Image
                alt={title}
                src={image.src}
                width={image.width}
                height={image.height}
                className="max-h-[21.2rem] rounded-tl-radius2 rounded-tr-radius2"
            />
            <div className="grid content-start gap-12 px-6 pb-12 md:pb-16">
                <div className="grid gap-4">
                    <h3 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">{title}</h3>
                    <span className="h-[0.1rem] w-28 bg-[#99A8B7] transition-all duration-500 group-hover/card:w-full"></span>
                </div>

                <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    );
};

export default ProjectOverview;
