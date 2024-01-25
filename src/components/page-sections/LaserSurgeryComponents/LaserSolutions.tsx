import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { LaserEyeSurgeryContentInterface } from '@/types';
import laserSolutions from '@/section-images/laser-solutions.png';
import Image from 'next/image';

interface Props extends Pick<LaserEyeSurgeryContentInterface, 'section3'> {}
/**
 * LaserSolutions is a component that showcases the mission statement and information about My-iClinic's commitment to providing excellent eye care.
 *
 * @returns {JSX.Element} The rendered LaserSolutions component.
 */
const LaserSolutions = ({ section3 }: Props): JSX.Element => {
    return (
        <Section className="px-8">
            <Container className="grid items-center gap-12 pb-12 overflow-hidden relative rounded-radius2 bg-[#003E79] !px-0 lg:min-h-[47rem]">
                <div className="grid relative z-[2] grid-cols-[auto_1fr] content-start gap-y-12 gap-x-6 px-8 pt-12 md:py-12 lg:py-24 lg:pl-24 xl:py-32 xl:pl-32">
                    <span className="h-full w-[0.8rem] bg-white"></span>
                    <h2 className="w-full max-w-[55rem] normal-case text-white font-latoExtraBold">{section3.heading || 'Laser solutions'}</h2>

                    <div className="col-start-1 col-span-2 grid gap-6 max-w-[70rem]">
						{section3?.descriptions?.length && section3.descriptions.map((item, key) => <p key={key} className="text-white" dangerouslySetInnerHTML={{ __html: item }}></p>)}
                    </div>
                </div>


                <Image
					src={laserSolutions}
                    alt=""
                    className="absolute inset-0 w-full h-full z-[1] object-cover"
					{...section3.image as any}
                />
            </Container>
        </Section>
    );
};

export default LaserSolutions;
