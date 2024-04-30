import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import React from 'react';

interface RediscoverTheWorldProps {
    image2?: string;
}

/**
 * Rediscover the world component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const RediscoverTheWorld = ({ image2 }: RediscoverTheWorldProps): JSX.Element => {
    return (
        <Section id="re-discover-the-world">
            <Container className="grid gap-12">
                <h2 className="max-w-[57.7rem] justify-self-start font-latoBold text-[3.6rem] normal-case leading-[3.6rem] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                    Rediscover the world in a whole new light
                </h2>

                <div className="grid items-center justify-items-center gap-12 md:grid-cols-[auto_auto] md:gap-16 lg:gap-24">
                    <Image
                        src="/images/section-images/icl-treatment-before-and-after.webp"
                        alt="Rediscover the world in a whole new light"
                        width={635}
                        height={371}
                    />

                    <Image
                        src={image2 || '/images/section-images/icl-after-process.webp'}
                        alt=""
                        width={582}
                        height={51.4}
                    />
                </div>
            </Container>
        </Section>
    );
};

export default RediscoverTheWorld;
