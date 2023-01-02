import { Container } from '@/components/container';
import { H3Variant1 } from '@/components/headings';
import { Section } from '@/components/section';
import { CardSlide, CardSlideInterface, CardSlider } from '@/components/slider';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import BandImage from './BandImage';

interface FeaturedPatientInterface {
    bandImageTitle: string;
    bandImageURL: string;
    bandColor?: string;
    h2Title: string;
    h3Title: string;
    bandImageDescription: string[];
    reviewDescription: string[];
    reviewTitle: string;
    sliders: CardSlideInterface[];
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
    sliders
}: FeaturedPatientInterface): JSX.Element => {
    return (
        <Section>
            <Container>
                <div className="mx-auto grid max-w-[93rem] grid-cols-1 content-start md:grid-cols-2 md:gap-24">
                    <div className="mb-24 grid gap-4 md:hidden">
                        <h2>{h2Title}</h2>
                        <H3Variant1>{h3Title}</H3Variant1>
                        <span className="h-[0.3rem] w-[28.6rem] bg-yellow"></span>
                    </div>
                    {/* Block 1 */}
                    {/* Image with band */}
                    <BandImage title={bandImageTitle} imageURL={bandImageURL} bandColor={bandColor} />

                    {/* Block 2 */}
                    <div className="mt-24 grid content-start gap-6 md:-mt-[3.4rem] md:gap-12">
                        <div className="relative hidden gap-4 md:grid">
                            <h2 className="text-[2rem] leading-[2.8rem]">{h2Title}</h2>
                            <H3Variant1>{h3Title}</H3Variant1>
                            <span
                                className={`absolute bottom-0 h-[0.3rem] w-[28.6rem] -translate-x-24 translate-y-[calc(100%_+_1.5rem)] md:w-[calc(100%_+_6rem)] md:max-w-none ${
                                    bandColor || 'bg-yellow'
                                }`}
                            ></span>
                        </div>

                        <div className="flex flex-col gap-6">
                            {bandImageDescription.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="row-start-5 mt-12 grid content-start gap-12 self-center md:row-auto md:mt-0">
                        <div className="flex flex-col gap-6">
                            {reviewDescription.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>

                        <div className="">
                            <div className="flex items-center justify-start">
                                {[...Array(5)].map((_, index) => (
                                    <Image
                                        src="/images/icons/icon-star-yellow.svg"
                                        alt=""
                                        width={22}
                                        height={22}
                                        className="w-full max-w-[2.2rem]"
                                        key={index}
                                    />
                                ))}
                            </div>
                            <h2 className="mt-4 text-left normal-case">{reviewTitle}</h2>
                        </div>
                    </div>

                    {/* Block 4 */}
                    <div className="mt-12 md:mt-0">
                        <CardSlider>
                            {sliders.map((slider, index) => (
                                <SwiperSlide className="grid place-items-center pb-20" key={index}>
                                    <CardSlide imageURL={slider.imageURL} />
                                </SwiperSlide>
                            ))}
                        </CardSlider>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default FeaturedPatient;
