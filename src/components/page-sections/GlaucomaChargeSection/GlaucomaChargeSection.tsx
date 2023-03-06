import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { FC } from 'react';

/**
 * Glaucoma charge component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GlaucomaChargeSection: FC = (): JSX.Element => {
    return (
        <Section>
            <Container className="grid grid-cols-1 gap-12 md:gap-0 justify-items-center lg:grid-cols-[auto_8rem_1fr]">
                <div className="bg-[#004574] relative z-[1] rounded-[7.6rem_1.5rem] grid gap-14 max-w-[50.7rem] px-12 sm:px-16 py-16 content-center md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-full">
                    <span className="text-[3rem] leading-[3rem] md:text-[4rem] md:leading-[4rem] font-latoBold text-white">
                        Taking charge of your Glaucoma!
                    </span>
                    <div className="grid gap-6">
                        <p className="text-white">Most patients say they wish they’d treat their Glaucoma sooner!</p>
                        <p className="text-white">
                            Many people who have Glaucoma do not realize how their vision has deteriorated.
                        </p>
                        <p className="text-white">
                            Glaucoma is a gradual thief of sight which can gradually affect a person without them
                            knowing.
                        </p>
                    </div>
                </div>

                <Image
                    src="/images/section-images/glaucoma-charge.png"
                    alt=""
                    width={816}
                    height={565}
                    className="md:col-span-2 md:col-start-2 md:row-start-1 md:row-span-full"
                />
            </Container>
        </Section>
    );
};

export default GlaucomaChargeSection;
