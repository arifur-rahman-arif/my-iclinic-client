import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

/**
 * Activity component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Activities = (): JSX.Element => {
    return (
        <Section id="favorite-activities">
            <Container className="grid justify-items-center gap-12 md:gap-24">
                <h2 className="max-w-[39.8rem] text-center font-latoBold text-[3rem] normal-case leading-[3.6rem] md:max-w-[107rem] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                    Do glasses or contact lenses hold you back during your favourite sports or activities?
                </h2>

                <div className="grid justify-items-center gap-12 md:grid-cols-[auto_1fr]">
                    <Image src="/images/section-images/activities-1.webp" alt="" width={223} height={334} />
                    <Image src="/images/section-images/activities-2.webp" alt="" width={619} height={334} />
                </div>

                {/* <div className="grid justify-items-center gap-12">
                    <h3 className="text-center font-latoBold text-[2.4rem] uppercase leading-[3.2rem] text-[#FF5C00]">
                        Sports enthusiasts rejoice!
                    </h3>
                    <p className="max-w-[71.5rem] text-center font-latoBold text-[2.4rem] leading-[3.2rem]">
                        Our ICL treatment lets you enjoy your favorite activities without
                        <br /> the limitations and risks of glasses.
                        <br /> Dive into a world where nothing holds back your performance.
                    </p>
                </div> */}
            </Container>
        </Section>
    );
};

export default Activities;
