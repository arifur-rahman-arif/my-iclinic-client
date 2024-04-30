import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionTextColumn';
import Image from 'next/image';
import RetinaTreatmentsContents from 'src/types/pages/retinaTreatments';

interface FloatersProps extends Pick<RetinaTreatmentsContents, 'section4'> {}

/**
 * `Floaters` is a React functional component that represents a section of the London Retina treatments
 * website providing information about the eye condition known as Floaters. It includes a description of what
 * floaters are, their common causes, associated symptoms, and potential treatments.
 *
 * @returns {JSX.Element} The JSX element representing the Floaters section.
 */
const Floaters = ({ section4 }: Partial<FloatersProps>): JSX.Element => {
    return (
        <Section>
            <Container className="grid gap-12 md:grid-cols-2 lg:gap-24 xl:gap-28">
                <div className="grid grid-cols-[auto_1fr] content-start gap-y-6 gap-x-6">
                    <SectionHeading heading={section4?.heading || 'Floaters'} />
                    <strong className="col-start-2 text-[1.6rem] uppercase">
                        {section4?.subheading || 'Floaters are black, or grey opacities in the vision.'}
                    </strong>

                    <div className="col-start-2 mt-6 grid max-w-[50rem] gap-6">
                        {(
                            (section4?.descriptions?.length && section4.descriptions) || [
                                'The commonest cause of floaters is due to the natural liquefaction of vitreous body with age.',
                                'This may be accompanied by flashing lights in the vision, a symptom of traction on the retina as the vitreous gel separates from the retina, a process known as posterior vitreous detachment.',
                                'While the process is innocuous most of the time, occasionally this can be associated with retinal tears, leading to retinal detachment (see below).',
                                'It is therefore imperative to have your eyes checked if you develop new flashing light and new floaters in your eyes, to ensure that the retina is intact and does not need urgent treatment. If the retina is intact, then treatment is usually not required.',
                                'While most of the patients grow accustomed to having floaters in the vision over time, some patients may find the floaters rather intrusive and distressing.',
                                'The most effective way of removing floaters is by a surgical procedure known as vitrectomy, whereby the vitreous jelly is liquefied by a high speed pneumatic cutter and removed, replacing it with clear balanced salt solutions, thereby effectively removing the opacities.'
                            ]
                        ).map((item, key) => (
                            <p key={key} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                </div>

                <Image
                    src={section4?.image || '/images/section-images/floaters.webp'}
                    alt="Floaters"
                    width={653}
                    height={675}
                    className="w-full xl:h-full"
                />
            </Container>
        </Section>
    );
};

export default Floaters;
