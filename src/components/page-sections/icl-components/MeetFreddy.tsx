import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import { useOnScreen } from '@/hooks';
import * as animationData from '@/lottie/arrow-tangle.lottie.json';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef } from 'react';

const VideoPlayer = dynamic(() => import('@/page-sections/SectionParts/VideoPlayer/VideoPlayer'), {
    loading: () => <ComponentLoader />
});

const Lottie = dynamic(() => import('@/page-sections/LeftRight/lottie/LottieFile'), {
    loading: () => <ComponentLoader className="h-full min-h-min md:min-h-min" />
});

/**
 * Meet freddy component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const MeetFreddy = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { onEnter } = useOnScreen({ ref: containerRef, triggerPosition: -150 });

    return (
        <Section id="life-long-vision" className="sm:mt-24 lg:mt-24">
            <Container className="grid content-start justify-items-center gap-12" ref={containerRef}>
                <div className="h-[14.8rem] w-[12.8rem]">
                    {onEnter ? (
                        <Lottie animationData={animationData} loop={false} />
                    ) : (
                        <ComponentLoader className="h-full min-h-min md:min-h-min" />
                    )}
                </div>

                <div className="flex items-center justify-center gap-12">
                    <h2 className="max-w-[36.1rem] font-latoBold text-[3rem] normal-case leading-[3.6rem] md:max-w-[71.3rem] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                        Meet Freddy
                    </h2>
                    <Image src="/images/avaters/avater-freddy.png" alt="" width={109} height={109} />
                </div>

                <LazyComponent>
                    <VideoPlayer
                        videoUrl={'/videos/meet-freddy.mp4'}
                        localPoster="/images/section-images/meet-freddy-posterr.png"
                        className="mx-auto lg:pr-0"
                    />
                </LazyComponent>
            </Container>
        </Section>
    );
};

export default MeetFreddy;
