import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { LaserEyeSurgeryContentInterface } from '@/types';

interface Props extends Pick<LaserEyeSurgeryContentInterface, 'section1'> {}

/**
 * Component to display the benefits of laser eye surgery.
 *
 * @param {Props} props - The component properties.
 * @returns {JSX.Element} The rendered component.
 */
const LaserBenefits = ({ section1 }: Props): JSX.Element => {
    return (
        <Section id="laser-benefits">
            <Container className="grid gap-6 md:grid-cols-2">
                {section1.card1 && <Card {...section1.card1} />}
                {section1.card2 && <Card {...section1.card2} />}
            </Container>
        </Section>
    );
};

interface CardProps {
    title: string;
    description: string;
}

/**
 * Component to display a card with a title and description.
 *
 * @param {CardProps} props - The component properties.
 * @returns {JSX.Element} The rendered component.
 */
const Card = ({ title, description }: CardProps) => {
    return (
        <div
            className="grid content-start gap-12 rounded-radius2 border border-[#EAECF0] bg-brandLight p-12 lg:p-24"
            style={{
                boxShadow: '0px 1px 2px 0px rgba(0, 21, 41, 0.04), 0px 1px 3px 0px rgba(0, 21, 41, 0.06)'
            }}
        >
            <h2 className="!text-[2rem] normal-case !leading-[2.8rem]">{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    );
};

export default LaserBenefits;
