import { Button2 } from '@/components/Buttons';
import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import SectionTextColumn from '@/components/SectionTextColumn';
import { ImageType3 } from '@/types';
import sectionImage from '@/section-images/go-fund-me.png';
import Image from 'next/image';

interface Props {
    heading: string;
    descriptions: string[];
    image: ImageType3;
}

/**
 * Component for rendering the section supporting the mission.
 *
 * @param {Object} Props - Props object containing the following properties:
 *   @param {string} heading - The heading for the section.
 *   @param {string[]} descriptions - An array of description texts for the section.
 *   @param {Object} image - The image object containing src and alt attributes.
 *
 * @returns {JSX.Element} - JSX element representing the section supporting the mission.
 */
const SupportOurMission = ({ heading, descriptions, image }: Props): JSX.Element => {
    return (
        <Section id="our-mission">
            <Container
                className="grid gap-12 rounded-radius2 bg-[#E1F1FF] py-12 px-8 md:grid-cols-2 md:gap-24 md:py-24 md:px-16">
                <div className="grid content-center  gap-6 xl:pl-40">
                    <SectionTextColumn heading={heading} headingClassName="max-w-[40.9rem]" />

                    <div className="ml-10 grid max-w-[43.1rem] justify-items-start gap-6">
                        {descriptions?.length
                            ? descriptions.map((item, key) => (
                                <p key={key} dangerouslySetInnerHTML={{ __html: item }}></p>
                            ))
                            : null}

                        <Button2
                            type="anchor"
                            text="Donate now"
                            title="Donate now"
                            link="https://www.gofundme.com/f/37ivhdauco"
                            target="_blank"
                            className="mt-6"
                        />
                    </div>
                </div>

                <Image src={sectionImage} {...(image as any)} alt="" />
            </Container>
        </Section>
    );
};

export default SupportOurMission;
