import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import ChatWithUs from '@/page-sections/SectionParts/ChatWithUs';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const VideoPlayer = dynamic(() => import('@/page-sections/SectionParts/VideoPlayer/VideoPlayer'), {
    loading: () => <ComponentLoader />
});

interface YourVisionVideoSectionProps {
    sectionClassName?: string;
    buttonClassName?: string;
    svgClassName?: string;
}

/**
 * Icl video section
 *
 * @returns {JSX.Element}
 * @constructor
 */
const YourVisionVideoSection = ({
    sectionClassName,
    buttonClassName,
    svgClassName
}: YourVisionVideoSectionProps): JSX.Element => {
    return (
        <Section id="your-vision" className={sectionClassName || 'bg-[#00BFFF]'}>
            <Container className="grid items-center gap-12 py-12 md:grid-cols-[1fr_auto] md:gap-24 md:py-24 xl:grid-cols-[auto_1fr] xl:gap-32">
                <LazyComponent>
                    <VideoPlayer videoUrl={'/videos/icl.mp4'} videoPoster={'txmJk2sY-yI'} />
                </LazyComponent>

                <div className="grid content-start justify-items-center gap-8 self-center md:justify-items-start md:gap-12">
                    <div className="grid w-[27.3rem] place-items-end rounded-primary bg-white py-3 pl-5 pr-8 md:justify-self-start">
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
                    <h2 className="font-latoExtraBold text-[4rem] normal-case leading-[3.6rem] text-white md:font-latoExtraBold md:text-[6.4rem] md:leading-[6.4rem]">
                        Your Vision
                    </h2>

                    <div className="grid gap-12 md:-mt-6 md:ml-4 md:gap-16">
                        <p className=" font-latoBold text-[2.4rem] leading-[3.2rem] text-white md:max-w-[30.3rem] md:text-[3rem] md:leading-[3.6rem]">
                            Your Freedom
                        </p>
                        <ChatWithUs
                            svgClassName={svgClassName}
                            className={`justify-self-center ${
                                buttonClassName || '!border-[#003E79] !bg-[#003E79]'
                            } hover:!bg-transparent`}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default YourVisionVideoSection;
