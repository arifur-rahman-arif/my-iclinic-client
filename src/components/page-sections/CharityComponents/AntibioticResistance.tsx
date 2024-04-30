import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ImageType3 } from '@/types';
import sectoinImage from '@/section-images/antibiotic-resistance.webp';
import Image from 'next/image';

interface Props {
    heading: string;
    image: ImageType3;
}

/**
 * AntibioticResistance Component
 *
 * React component for displaying information about antibiotic resistance.
 *
 *
 * @param {object} Props - The properties for the AntibioticResistance component.
 * @param {string} Props.heading - The heading or title for the section.
 * @param {ImageType3} Props.image - The ImageType3 object representing the image for the section.
 *
 * @returns {JSX.Element} React component representing information about antibiotic resistance.
 */
const AntibioticResistance = ({ heading, image }: Props): JSX.Element => {
    return (
        <Section id="antibiotic-resistance">
            <div
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #005DAF 0%, rgba(0, 93, 175, 0.86) 100%)'
                }}
                className="py-12 md:py-24"
            >
                <Container className="grid gap-12 md:gap-24">
                    <h2 className="text-center normal-case text-white">{heading}</h2>

                    <Image src={sectoinImage} alt={heading} className="h-full w-full" />
                </Container>
            </div>
        </Section>
    );
};

export default AntibioticResistance;
