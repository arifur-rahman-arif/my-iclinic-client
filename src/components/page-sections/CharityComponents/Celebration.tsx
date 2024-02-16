import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import headingImage from '@/section-images/20-years.png';
import { ImageType3 } from '@/types';
import Image from 'next/image';
import msBola from '@/section-images/ms-bola.png';
import jhon from '@/section-images/jhon-bolger.png';

interface Props {
    heading: ImageType3;
    introduction: string;
    profile1: {
        image: ImageType3;
        title: string;
        description: string;
    };
    profile2: {
        image: ImageType3;
        title: string;
        description: string;
    };
}

/**
 * Component for rendering the celebration section.
 *
 * @param {Object} Props - Props object containing the following properties:
 *   @param {string} heading - The heading for the section.
 *   @param {string} introduction - The introduction text for the section.
 *   @param {Object} profile1 - The profile1 object containing image, title, and description attributes.
 *   @param {Object} profile2 - The profile2 object containing image, title, and description attributes.
 *
 * @returns {JSX.Element} - JSX element representing the celebration section.
 */
const Celebration = ({ heading, introduction, profile1, profile2 }: Props): JSX.Element => {
    return (
        <Section id="celebration" className="!mt-0 bg-[#E1F1FF] py-16 md:py-24 xl:py-40">
            <Container className="grid gap-12 md:grid-cols-2 md:gap-24">
                <div className="grid content-center gap-2">
                    <Image src={headingImage} {...(heading as any)} alt="" />
                    <span className="relative max-w-[29.5rem] justify-self-end font-mulishBold text-[#293C4E] xl:-translate-y-14">
                        {introduction}
                    </span>
                </div>

                {/* Column 2 */}
                <div className="grid gap-12">
                    <div className="grid gap-8 xl:grid-cols-[auto_1fr]">
                        <Image
                            src={msBola}
                            {...(profile1.image as any)}
                            alt={profile1.title}
                            className="w-full rounded-[0.5rem]"
                        />
                        <div className="grid gap-4">
                            <h3 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">
                                {profile1.title}
                            </h3>
                            <p className="textd-[#000] max-w-[44.2rem]">{profile1.description}</p>
                        </div>
                    </div>

                    <div className="grid gap-8 xl:grid-cols-[auto_1fr]">
                        <Image
                            src={jhon}
                            {...(profile2.image as any)}
                            alt={profile2.title}
                            className="w-full rounded-[0.5rem]"
                        />
                        <div className="grid gap-4">
                            <h3 className="font-latoBold text-[2.4rem] normal-case leading-[3.2rem]">
                                {profile2.title}
                            </h3>
                            <p className="textd-[#000] max-w-[44.2rem]">{profile2.description}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Celebration;
