import Button2 from '@/components/Buttons/Button2';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import BookConsultation from '@/components/page-sections/SectionParts/BookConsultation/BookConsultation';
import { LaserEyeSurgeryContentInterface } from '@/types';
import styles from '../IclComponents/styles/EyeCare.module.scss';
import { useOnScreen } from '@/hooks';
import { useRef } from 'react';

interface Props extends Pick<LaserEyeSurgeryContentInterface, 'section2'> {}

/**
 * Component to display treatment prices.
 *
 * @param {Props} props - The component properties.
 * @param {section2} props.section2 - The data for treatment prices.
 * @returns {JSX.Element} The rendered component.
 */
const TreatmentPrices = ({ section2 }: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef });

    return (
        <Section id="treatment-prices">
            <Container
                ref={containerRef}
                className={`flex flex-wrap items-center justify-center gap-8 ${onEnter && styles.styles}`}
            >
                {section2?.length && section2.map((card, key) => <Card key={key} {...card} />)}
            </Container>
        </Section>
    );
};

interface CardProps {
    title: string;
    description: string;
    price: string;
}

/**
 * Component to display a card with a title, description, and price.
 *
 * @param {CardProps} props - The component properties.
 * @returns {JSX.Element} The rendered component.
 */
const Card = ({ title, description, price }: CardProps) => {
    return (
        <div className="grid max-w-[29.5rem] translate-y-12 content-start gap-12 rounded-radius2 border border-solid border-[#EAECF0] p-10 opacity-0 transition-all duration-500 hover:shadow-shadow1">
            <h5 className="font-latoBold text-[2rem] normal-case leading-[2.8rem] text-heading">{title}</h5>
            <p dangerouslySetInnerHTML={{ __html: description }} className="-mt-10"></p>
            <div className="flex items-center justify-between gap-12 rounded-radius2 bg-[#E1F1FF] p-6">
                <span className="font-latoBold text-[2rem] leading-[2.4rem]">From £{price}</span>
                <span className="font-mulishBold text-[1.4rem] uppercase leading-8 text-heading">Per-eye</span>
            </div>
            <div className="grid w-full items-center gap-8">
                <BookConsultation buttonClassName="sitemap-link text-center !rounded-radius2 w-full">
                    <Button2 type="button" text="Get a quote" />
                </BookConsultation>
            </div>
        </div>
    );
};

export default TreatmentPrices;
