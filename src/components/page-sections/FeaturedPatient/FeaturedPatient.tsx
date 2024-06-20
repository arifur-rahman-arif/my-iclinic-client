import { Container } from '@/components/Container';
import { SpanVariant1 } from '@/components/Headings';
import { Section } from '@/components/Section';
import { FeatureSlider } from '@/components/Slider';
import { ReactNode } from 'react';
import StarComponent from 'src/components/page-sections/SectionParts/StarComponent/StarComponent';
import { SwiperSlide } from 'swiper/react';
import BandImage, { BandImageInterface } from './BandImage';
import { twMerge } from 'tailwind-merge';

interface FeaturedPatientInterface {
    bandImageTitle: string;
    bandImageURL: string;
    bandColor?: string;
    h2Title: string;
    h3Title: string;
    bandImageDescription: ReactNode[];
    reviewDescription?: string[];
    reviewTitle: ReactNode;
    sliders: BandImageInterface[];
    subTitleClass?: string;
}

/**
 * Featured patient component
 *
 * @param {FeaturedPatientInterface} {
 *     h2Title,
 *     h3Title,
 *     bandImageTitle,
 *     bandImageURL,
 *     bandImageDescription,
 *     reviewDescription,
 *     reviewTitle,
 *     sliders
 * }
 * @returns {*}  {JSX.Element}
 */
const FeaturedPatient = ({
    h2Title,
    h3Title,
    bandImageTitle,
    bandImageURL,
    bandColor,
    bandImageDescription,
    reviewDescription,
    reviewTitle,
    sliders,
    subTitleClass
}: FeaturedPatientInterface): JSX.Element => {
    return (
        <Section id="featured-patient" className="overflow-hidden">
            <Container>
                <div className="mx-auto grid max-w-[93rem] grid-cols-1 content-start md:grid-cols-2 md:gap-24">
                    {/* For small devices */}
                    <div className="mb-24 grid gap-4 md:hidden">
                        <SpanVariant1 className={twMerge('!text-[#0099FF]', subTitleClass)}>
                            {h2Title}
                            {/* <span className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-white"></span> */}
                        </SpanVariant1>
                        <h2>
                            <strong>{h3Title}</strong>
                        </h2>
                        <span className={`h-[0.3rem] w-full ${bandColor || 'bg-yellow'}`}></span>
                    </div>

                    {/* Block 1 */}
                    <div>
                        <FeatureSlider>
                            {[{ imageURL: bandImageURL, title: bandImageTitle }, ...sliders].map((slider, index) => (
                                <SwiperSlide className="grid w-full place-items-center p-8 py-16" key={index}>
                                    <BandImage title={slider.title} imageURL={slider.imageURL} bandColor={bandColor} />
                                </SwiperSlide>
                            ))}
                        </FeatureSlider>
                    </div>

                    {/* For medium & large devices */}
                    {/* Block 2 */}
                    <div className="mt-24 grid content-start gap-6 md:-mt-[3.4rem] md:gap-12">
                        <div className="relative hidden gap-4 md:grid">
                            <SpanVariant1 className={twMerge('mt-12 !text-[#0099FF]', subTitleClass)}>
                                {h2Title}
                                {/* <span className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-white"></span> */}
                            </SpanVariant1>
                            <h2 className="normal-case">
                                <strong className="normal-case">{h3Title}</strong>
                            </h2>
                            <span
                                className={`absolute bottom-0 h-[0.3rem] w-[28.6rem] -translate-x-32 translate-y-[calc(100%_+_1.5rem)] md:w-[calc(100%_+_6rem)] md:max-w-none ${
                                    bandColor || 'bg-yellow'
                                }`}
                            ></span>
                        </div>

                        <div className="flex flex-col gap-6">
                            {bandImageDescription.map((desc, index) => {
                                if (typeof desc === 'string') {
                                    return (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: desc.toString() || '' }}></p>
                                    );
                                } else {
                                    return <p key={index}>{desc}</p>;
                                }
                            })}
                        </div>

                        <div className="grid content-start gap-12">
                            {reviewDescription ? (
                                <div className="flex flex-col gap-6">
                                    {reviewDescription?.map((desc, index) => (
                                        <div key={index}>{desc}</div>
                                    ))}
                                </div>
                            ) : null}

                            <div className="">
                                <StarComponent />
                                <span className="mt-4 text-left font-mulishBold text-[2rem] normal-case leading-[2.8rem] text-[#893277]">
                                    {reviewTitle}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedPatient;
