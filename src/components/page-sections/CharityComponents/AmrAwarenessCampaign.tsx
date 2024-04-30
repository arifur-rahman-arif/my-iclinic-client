import { Button2 } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import sectoinImage from '@/section-images/clock-ticking.webp';
import { ImageType3 } from '@/types';
import Image from 'next/image';

interface Props {
    heading: string;
    introduction: string;
    image: ImageType3;
    description: string;
    summary: string;
}

/**
 * Component for rendering the AMR (Antimicrobial Resistance) awareness campaign section.
 *
 * @param {Object} Props - Props object containing the following properties:
 *   @param {string} heading - The heading for the section.
 *   @param {string} introduction - The introduction text for the section.
 *   @param {Object} image - The image object containing src and alt attributes.
 *   @param {string} description - The description text for the section.
 *   @param {string} summary - The summary text for the section.
 *
 * @returns {JSX.Element} - JSX element representing the AMR awareness campaign section.
 */
const AmrAwarenessCampaign = ({ heading, introduction, image, description, summary }: Props): JSX.Element => {
    return (
        <Section id="amr-awareness-campaign">
            <Container className="grid content-start gap-6 rounded-radius2 border border-solid border-[#EAECF0] py-12 md:!p-24 xl:!px-40">
                <SectionTextColumn heading={heading} headingClassName="max-w-[40.9rem]" />
                <strong
                    className="pl-11 font-mulishBold [&>*]:font-mulishBold"
                    dangerouslySetInnerHTML={{ __html: introduction }}
                ></strong>
                <Image src={sectoinImage} alt={heading} {...(image as any)} />

                <div className="grid content-start justify-items-start gap-6">
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                    <strong className="mt-6 font-latoBold uppercase text-heading">{summary}</strong>
                    <Button2
                        type="anchor"
                        link="#join-fight-against-amr"
                        text="Join our community"
                        className="text-center"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default AmrAwarenessCampaign;
