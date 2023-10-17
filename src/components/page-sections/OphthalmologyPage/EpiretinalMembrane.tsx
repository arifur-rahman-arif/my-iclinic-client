import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import Image from 'next/image';

/**
 * `EpiretinalMembrane` is a React functional component that represents a section of the London Retina treatments
 * website dedicated to providing information about the medical condition known as Epiretinal Membrane. It displays an
 * image related to the condition and a description of the condition's characteristics, causes, and treatment options.
 *
 * @returns {JSX.Element} The JSX element representing the Epiretinal Membrane section.
 */
const EpiretinalMembrane = (): JSX.Element => {
    return (
        <Section className="px-8 xl:px-0">
            <Container
                className="grid items-center gap-12 rounded-primary bg-brandLight py-12 md:grid-cols-2 lg:gap-24 lg:py-24 xl:gap-28">
                <Image
                    src="/images/section-images/epiretinal-membrane.png"
                    alt=""
                    width={449}
                    height={574}
                    className="justify-self-center"
                    unoptimized
                />

                <SectionTextColumn
                    heading="Epiretinal Membrane"
                    descriptionContainerClassName="max-w-[50rem]"
                    descriptions={[
                        'Epiretinal membrane is a condition whereby a fibrotic tissue develops on the surface layer of the macula, the central part of retina responsible for fine detailed central vision.',
                        'As the fibrotic tissue contracts, it pulls on the underlying macula, resulting in distortion and blurring of the central vision, akin to someone physically wrinkling the film of a camera.',
                        'Epiretinal membrane is more commonly seen in patients who have diabetes, other ocular conditions such as previous retinal vein occlusions, previous retinal tears, but occasionally can occur in otherwise healthy eyes.',
                        'Treatment of epiretinal membrane involves surgically removing the jelly in the eyeball (vitrectomy), staining of the epiretinal membrane with a dye, then peeling away the fibrotic tissue away with forceps to relieve the traction on the underlying macula.',
                        'After the surgery, the retina usually takes up to 3 months to reorganise itself with an improvement of symptoms.'
                    ]}
                />
            </Container>
        </Section>
    );
};

export default EpiretinalMembrane;
