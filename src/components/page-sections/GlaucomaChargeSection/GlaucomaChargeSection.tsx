import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

interface GlaucomaChargeSectionProps {
    heading: string;
    descriptions: string[];
    image: string;
}

/**
 * Glaucoma charge component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaChargeSection = ({ heading, descriptions, image }: GlaucomaChargeSectionProps): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 justify-items-center !px-0 md:gap-0 md:!px-8 lg:grid-cols-[auto_8rem_1fr]">
                <div className="relative z-[1] grid content-center gap-14 rounded-tl-[7.5rem] rounded-tr-primary bg-[#004574] px-12 py-40 sm:px-16 md:col-span-2 md:col-start-1 md:row-span-full md:row-start-1 md:max-w-[50.7rem] md:rounded-[7.6rem_1.5rem] md:py-16">
                    <span className="font-latoBold text-[3rem] leading-[3rem] text-white md:text-[4rem] md:leading-[4rem]">
                        {heading || 'Taking charge of your Glaucoma!'}
                    </span>
                    <div className="grid gap-6">
                        {Array.isArray(descriptions) && descriptions.length ? (
                            descriptions.map((item, index) => (
                                <p className="text-white" key={index}>
                                    {item}
                                </p>
                            ))
                        ) : (
                            <>
                                <p className="text-white">
                                    Most patients say they wish they’d treat their Glaucoma sooner!
                                </p>
                                <p className="text-white">
                                    Many people who have Glaucoma do not realize how their vision has deteriorated.
                                </p>
                                <p className="text-white">
                                    Glaucoma is a gradual thief of sight which can gradually affect a person without
                                    them knowing.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                <Image
                    src={image || '/images/section-images/glaucoma-charge.png'}
                    alt=""
                    width={816}
                    height={565}
                    className="md:col-span-2 md:col-start-2 md:row-span-full md:row-start-1"
                />
            </Container>
        </Section>
    );
};

export default GlaucomaChargeSection;
