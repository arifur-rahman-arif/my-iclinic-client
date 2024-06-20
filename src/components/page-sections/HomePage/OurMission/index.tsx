import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

/**
 * OurMission is a component that showcases the mission statement and information about My-iClinic's commitment to providing excellent eye care.
 *
 * @returns {JSX.Element} The rendered OurMission component.
 */
const OurMission = (): JSX.Element => {
    return (
        <Section className="px-8" id="our-mission">
            <Container className="grid items-center gap-12 overflow-hidden rounded-radius2 bg-[#003E79] !px-0 md:grid-cols-2 lg:min-h-[47rem]">
                <div className="grid grid-cols-[auto_1fr] content-start gap-x-6 gap-y-12 px-8  pt-12 md:py-12 lg:py-24 lg:pl-24 xl:py-32 xl:pl-32">
                    <span className="h-full w-[0.8rem] bg-white"></span>
                    <h2 className="w-full max-w-[55rem] normal-case text-white">Our mission</h2>

                    <div className="col-start-2 grid gap-6">
                        <p className="text-white">
                            For the past ten years My-iClinic has provided excellent patient care for anybody wanting
                            clear, natural vision.{' '}
                        </p>
                        <p className="text-white">
                            With leading opthalmologists Mr. Bolger and Ms. Odufuwa-Bolger, our North London team is
                            here to make sure every patient receives the best treatment suitable for their eye health.
                        </p>
                        <p className="text-white">
                            We understand how delicate and important our eyes are, which is why we with you through
                            every step of your patient journey.
                        </p>
                    </div>
                </div>

                <Image
                    src="/images/section-images/our-mission.webp"
                    alt=""
                    width={368}
                    height={209}
                    className="w-full md:hidden"
                />

                <Image
                    src="/images/section-images/our-mission-large.webp"
                    alt=""
                    width={788}
                    height={570}
                    className="hidden w-full self-center md:block"
                />
            </Container>
        </Section>
    );
};

export default OurMission;
