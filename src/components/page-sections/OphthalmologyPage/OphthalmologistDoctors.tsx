import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import Image from 'next/image';

/**
 * `OphthalmologistDoctors` is a React functional component that represents a section of the My-iClinic website
 * dedicated to providing information about the ophthalmologists who are medical doctors. It includes an image
 * illustrating the ophthalmologists and a description of their role in the specialized field of ophthalmology.
 *
 * @returns {JSX.Element} The JSX element representing the Ophthalmologist Doctors section.
 */
const OphthalmologistDoctors = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-24 xl:gap-28">
                <Image
                    src="/images/section-images/ophthalmologists-doctors.png"
                    alt="My-iClinic ophthalmologists are medical doctors"
                    width={672}
                    height={645}
                />

                <SectionTextColumn
                    heading="My-iClinic ophthalmologists are medical doctors"
                    descriptions={[
                        'Ophthalmology is the specialised field of medicine focused on the diagnosis, treatment, and management of eye disorders and diseases.',
                        'My-iClinic ophthalmologists are medical doctors who undergo extensive training to provide comprehensive eye care, from routine eye exams and prescription of corrective lenses to advanced surgical interventions.',
                        'They address a wide range of conditions, including cataracts, glaucoma, diabetic retinopathy, macular degeneration, and corneal diseases.',
                        'Our ophthalmologists employ cutting-edge technologies and surgical techniques to restore and preserve vision, ensuring the best possible outcomes for their patients.',
                        'Moreover, ophthalmologists work closely with optometrists and other eye care professionals to deliver personalised and effective solutions for all aspects of eye health.'
                    ]}
                />
            </Container>
        </Section>
    );
};

export default OphthalmologistDoctors;
