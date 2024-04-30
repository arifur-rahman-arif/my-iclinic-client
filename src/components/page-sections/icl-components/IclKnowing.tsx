import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import React from 'react';

/**
 * Icl knowing component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const IclKnowing = () => {
    return (
        <Section id="will-icl-work">
            <Container className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-24 xl:gap-40">
                <div className="grid content-start gap-6">
                    <h2 className="max-w-[49.5rem] justify-self-start font-latoBold text-[3.6rem] normal-case leading-[3.6rem] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        How do I know if ICL will work for me?
                    </h2>

                    <strong className="max-w-[57.2rem] font-latoBold text-[2rem] leading-[2.8rem] md:text-[2.4rem] md:leading-[3.2rem]">
                        Understanding your concerns, we've made the ICL consultation as seamless and informative as
                        possible.
                    </strong>
                    <p className="max-w-[47rem] text-[1.8rem] leading-[2.8rem]">
                        When you come in, our welcoming team will walk you through a series of thorough eye assessments,
                        all designed to give you the utmost clarity on the procedure. This only takes about an hour.
                    </p>
                    <p className="max-w-[47rem] text-[1.8rem] leading-[2.8rem]">
                        After this, our experienced specialists will provide tailored recommendations, ensuring the lens
                        size is a perfect fit for your unique eyes.
                    </p>
                    <p className="max-w-[47rem] text-[1.8rem] leading-[2.8rem]">
                        We stand by our commitment to your vision and well-being.
                    </p>
                    <strong className="max-w-[47rem] font-latoBold text-[2rem] leading-[2.8rem] md:text-[2.4rem] md:leading-[3.2rem]">
                        Let us guide you toward the clear vision you deserve!
                    </strong>
                </div>

                <Image
                    src="/images/section-images/will-icl-work.webp"
                    alt=""
                    width={561}
                    height={562}
                    className="rounded-primary"
                />
            </Container>
        </Section>
    );
};

export default IclKnowing;
