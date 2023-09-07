import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const RequestCallback = dynamic(() => import('@/page-sections/RequestCallback/RequestCallback'), {
    loading: () => <ComponentLoader />
});

interface SpeakToSpecialistProps {
    sectionClassName?: string;
}

/**
 * Cta component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const SpeakToSpecialist = ({ sectionClassName }: SpeakToSpecialistProps): JSX.Element => {
    return (
        <Section id="speak-to-specialist" className={twMerge('bg-[#00BFFF]', sectionClassName)}>
            <Container className="grid content-center gap-12 py-12 md:grid-cols-[1fr_auto] md:justify-between md:gap-24 md:py-24">
                <div className="grid content-start gap-6 self-center md:gap-12">
                    <div className="grid w-[27.3rem] place-items-end justify-self-start rounded-primary bg-white py-3 pl-5 pr-8">
                        <Image
                            src="/images/logos/logo-care-quality-commision.png"
                            alt="Care quality commision"
                            width={154}
                            height={48}
                            className="justify-self-start"
                        />
                        <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#697072]">
                            Quality approved Clinic
                        </span>
                    </div>
                    <h2 className="font-latoBold text-[4rem] normal-case leading-[3.6rem] text-white md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        Speak to a specialist
                    </h2>
                    <p className="max-w-[31.8rem] font-latoBold text-[2.4rem] leading-[3.2rem] text-white md:max-w-[30.3rem] md:text-[3rem] md:leading-[3.6rem]">
                        Imagine a life without glasses and contacts
                    </p>
                </div>

                <div className="w-full md:justify-self-end">
                    <LazyComponent>
                        <RequestCallback />
                    </LazyComponent>
                </div>
            </Container>
        </Section>
    );
};

export default SpeakToSpecialist;
