import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { Section } from '@/components/Section';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/page-sections/SectionParts/VideoPlayer/VideoPlayer'), {
    loading: () => <ComponentLoader />
});

/**
 * Patient video reviews
 * @returns {JSX.Element}
 * @constructor
 */
const PatientVideoReviews = () => {
    return (
        <Section>
            <Container className="relative grid content-start gap-12 md:gap-24">
                <h2 className="max-w-[67.1rem] font-latoBold text-[3rem] normal-case leading-[3.6rem] md:justify-self-center md:text-center md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                    Hear how ICL transformed Eliete and Angel`s life
                </h2>

                <div className="grid gap-12 justify-self-center lg:grid-cols-2 xl:gap-20">
                    <LazyComponent>
                        <VideoPlayer
                            videoUrl={'/videos/icl-review-2.mp4'}
                            localPoster="/images/section-images/icl-review-2-poster.jpg"
                            className="mx-auto lg:pr-0"
                        />
                    </LazyComponent>
                    <LazyComponent>
                        <VideoPlayer
                            videoUrl={'/videos/icl-review.mp4'}
                            localPoster="/images/section-images/icl-review-1-poster.png"
                            className="mx-auto lg:pr-0"
                        />
                    </LazyComponent>
                </div>
            </Container>
        </Section>
    );
};

export default PatientVideoReviews;
