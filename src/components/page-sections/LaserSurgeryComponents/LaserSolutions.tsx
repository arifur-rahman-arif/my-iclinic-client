import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { LaserEyeSurgeryContentInterface } from '@/types';
import laserSolutions from '@/section-images/laser-solutions.webp';
import Image from 'next/image';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat } from '@/utils/miscellaneous';

interface Props extends Pick<LaserEyeSurgeryContentInterface, 'section3'> {}
/**
 * LaserSolutions is a component that showcases the mission statement and information about My-iClinic's commitment to providing excellent eye care.
 *
 * @returns {JSX.Element} The rendered LaserSolutions component.
 */
const LaserSolutions = ({ section3 }: Props): JSX.Element => {
    return (
        <Section className="px-8">
            <Container className="relative grid items-center gap-12 overflow-hidden rounded-radius2 bg-[#003E79] !px-0 pb-12 lg:min-h-[47rem]">
                <div className="relative z-[2] grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-12 px-8 pt-12 md:py-12 lg:py-24 lg:pl-24 xl:py-32 xl:pl-32">
                    <span className="h-full w-[0.8rem] bg-white"></span>
                    <h2 className="w-full max-w-[55rem] font-latoExtraBold normal-case text-white">
                        {section3?.heading || 'Laser solutions'}
                    </h2>

                    <div className="col-span-2 col-start-1 grid max-w-[70rem] gap-6">
                        {section3?.descriptions?.length &&
                            section3.descriptions.map((item, key) => (
                                <p key={key} className="text-white" dangerouslySetInnerHTML={{ __html: item }}></p>
                            ))}
                    </div>

                    <div className="col-span-2 col-start-1 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="bg-[#0099FF] hover:text-[#0099FF] border-[#0099FF] hover:bg-transparent">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center border border-white bg-transparent text-white hover:border-[#0099FF] hover:bg-[#0099FF] hover:text-white md:px-20"
                        />
                    </div>
                </div>

                <Image
                    src={laserSolutions}
                    alt=""
                    className="absolute inset-0 z-[1] h-full w-full object-cover"
                    {...(section3?.image as any)}
                />
            </Container>
        </Section>
    );
};

export default LaserSolutions;
