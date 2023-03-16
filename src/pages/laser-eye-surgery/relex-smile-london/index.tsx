// Import BannerImage from '@/section-images/relex-banner-bg.png';
import { BreadCrumb } from '@/components/Breadcrumb';

import { Button } from '@/components/Button';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    ClimateChange,
    CtaSection,
    FullWidthImageSection,
    FullWidthImageSection3,
    GridColumn,
    Masthead,
    PlasticFree,
    SideImageSection,
    StackColumn
} from '@/components/page-sections';
import { relexSmileFaqList } from '@/components/page-sections/Faq/faqList';
import { relexSliders } from '@/components/page-sections/FeaturedPatient';
import { leftRightListRelexSmileLondon } from '@/components/page-sections/LeftRight/leftRightList';
import { normalSlideListRelexSmile } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-relex-smile-large.png';
import MastheadImageSmall from '@/masthead/masthead-relex-smile-small.png';
import MastheadImageMedium from '@/masthead/masthead-relex-smile.png';
import { default as LaserEyeSurgery, default as LaserEyeSurgeryLarge } from '@/section-images/laser-eye-surgery.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const FeaturedPatient = dynamic(() => import('@/page-sections/FeaturedPatient/FeaturedPatient'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
// Const BottomBanner = dynamic(() => import('@/page-sections/bottom-full-banners/BottomBanner'));
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const SideVideoSection = dynamic(() => import('@/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});
const BottomBanner2 = dynamic(() => import('@/page-sections/BottomFullBanners/BottomBanner2'), {
    loading: () => <ComponentLoader />
});

interface RelexSmileLondonProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: /laser-eye-surgery/relex-smile-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function RelexSmileLondon({ seo, yoastJson }: RelexSmileLondonProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'ReLEx SMILE Laser Eye Surgery London';
    const subheading = 'London’s latest laser vision correction procedure';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="ReLEx SMILE Laser eye surgery In London"
            description="ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText="Man travelling without glasses for vision correction"
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {subheading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Talk to a ReLEx specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                h3Title={
                    <>
                        Say hello to clear vision <br /> with ReLEx SMILE Laser
                        <br /> Eye Surgery!
                    </>
                }
                containerClass="md:!grid-cols-[1fr_auto]"
                altText="Man with luggage at airport"
                image={LaserEyeSurgery}
                desktopImage={LaserEyeSurgeryLarge}
                includeScrollDownButton
                videoUrl="/videos/relex-smile-vision-correction-treatment-explained.mp4"
                videoPoster="D7qX9brFvCw"
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListRelexSmileLondon} />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading="What our ReLEx patients say after treatment"
                    h3Heading="Hear from a patient"
                    darkPin
                    descriptions={[
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that
                         you’ve made the best possible choice for your eyesight. Our specialist
                          optometrists carefully work with you to evaluate your eyes to offer you the best
                           possible course of treatment – allowing you to re-discover a life of normal vision.`
                    ]}
                    videoUrl="/videos/relex-smile.mp4"
                    videoPoster="e3z34A3mmeI"
                />
            </LazyComponent>

            <LazyComponent>
                <BottomBanner2 />
            </LazyComponent>

            <CtaSection subtitle="Vision correction options" />

            <SideImageSection
                h2Heading="Why RELEX SMILE"
                h3LightHeading={
                    <>
                        The benefits of ReLEx <br />
                    </>
                }
                h3BoldHeading="Smile laser eye surgery!"
                descriptions={[
                    `When you choose My-iClinic’s 5-star rated services, you can rest assured that
                     you’ve made the best possible choice for your eyesight.`,
                    `Our specialists here in London will carefully work with you to evaluate your eyes,
                    offering you the best possible course of treatment. Take the first step and allow yourself
                     to re-discover a life of clear, natural vision.`
                ]}
                customColumn={<GridColumn />}
            />

            <SideImageSection
                h2Heading="improve your life's quality"
                h3LightHeading={
                    <>
                        Step closer to a life of
                        <br />
                    </>
                }
                h3BoldHeading="Clear, natural vision!"
                descriptions={[
                    `Have you or one of your loved ones finally decided to do something about being short-sighted or
                     having astigmatism? To begin the ReLEx SMILE process, give us a call or book a consultation with
                      our friendly team today.`
                ]}
                sectionImage={{
                    url: '/images/section-images/clear-natural-vision.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/clear-natural-vision-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText="Two friends travelling with clear vision"
                textColumnExtras={
                    <p className="font-mulishBold text-[2rem] leading-[2.4rem]">
                        A better quality of life is just <br />
                        around the corner.
                    </p>
                }
            />

            <FullWidthImageSection3
                title1="97% of people"
                title2="From our clinic are extremely happy with their vision after laser eye surgery."
                descriptions={[
                    'Most patients say they wish they’d done it sooner! One of the most mentioned reasons for having laser eye surgery is improved confidence and lifestyle.'
                ]}
            />

            <div className="md:mt-24"></div>

            <LazyComponent>
                <FeaturedPatient
                    h2Title="Relex SMILE Patient"
                    h3Title="Life after ReLEx SMILE Treatment"
                    bandImageDescription={[
                        `It has been two months since my ReLEx SMILE eye surgery at My-iClinic,
                        and my vision is better than 20/20 (~20/10), with only minor and receding eye dryness. `,
                        'In the past, I was a regular contact lens user with a -4.25 prescription in both eyes.',
                        `Dr John Bolger has taken great care in assessing my vision and health, and explaining the surgery.
                         He performed the correcting procedure with great care, and after 15 minutes I walked out
                          of the surgery on my own without any visual aids or help!`
                    ]}
                    bandImageTitle="Mr. Lukicov"
                    bandImageURL="/images/section-images/mr-lukicov.png"
                    reviewDescription={[
                        `The next day I was already back at work (software development),
                         gym the following day (weight lifting) and swimming just a week after - if that is not a miracle,
                          I don't know what is!`
                    ]}
                    reviewTitle="Thank you My-iClinic"
                    sliders={relexSliders}
                    bandColor="bg-[#FF5C00]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListRelexSmile} />
            </LazyComponent>

            <FullWidthImageSection
                h3Title="Whatever the view,"
                boldHeading={
                    <>
                        Remember it with <br /> Clear vision
                    </>
                }
                altText=""
                albumAnimation
                containerClass="grid grid-cols-1 items-center justify-center py-12 sm:py-16 lg:py-0 gap-12 lg:grid-cols-[auto_1fr] xl:grid-cols-2  lg:gap-24"
                includeCta
            />

            <SideImageSection
                h2Heading="Why laser Relex smile"
                h3LightHeading={
                    <>
                        Why consider our ReLEx SMILE Laser eye surgery
                        <br />
                    </>
                }
                h3BoldHeading="When you already have glasses or contact lenses?"
                sectionImage={{
                    url: '/images/section-images/laser-relex-smile.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/laser-relex-smile-large.png',
                    width: 682,
                    height: 686
                }}
                altText="Male athlete on bike after laser eye surgery"
                textColumnImage={true}
                customColumn={<StackColumn />}
                containerClassName="!items-start"
            />

            <SideImageSection
                h2Heading="Right treatment for you"
                h3LightHeading={
                    <>
                        Do you think ReLEx
                        <br /> SMILE could
                        <br />
                    </>
                }
                h3BoldHeading="Be the right treatment for you?"
                descriptions={[
                    <>
                        To begin the ReLEx SMILE process, give us a call or book your <strong>free consultation</strong>{' '}
                        with our friendly team today.
                    </>
                ]}
                sectionImage={{
                    url: '/images/section-images/right-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/right-treatment-large.png',
                    width: 657,
                    height: 554
                }}
                altText="Woman smiling without needing glasses for short-sightedness"
                textColumnExtras={
                    <>
                        <div className="flex flex-wrap items-center justify-start gap-6">
                            <Button
                                type="anchor"
                                text="Book a consultation"
                                iconPosition="left"
                                icon={
                                    <Image
                                        src="/images/icons/icon-calendar-outline-darker.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        quality={2}
                                        className="h-8 w-8"
                                    />
                                }
                            />
                            <Button
                                type="anchor"
                                text="0208 445 8877"
                                iconPosition="left"
                                className="!min-w-[18.6rem] place-content-center border !bg-transparent md:min-w-[23.3rem]"
                                icon={
                                    <Image
                                        src="/images/icons/icon-phone-dark.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        quality={2}
                                        className="h-8 w-8"
                                    />
                                }
                            />
                        </div>
                        <span className="font-latoBold text-[2.8rem] leading-[3.2rem] text-heading2 md:max-w-[38.7rem]">
                            A better quality of life is just around the corner!
                        </span>
                    </>
                }
            />

            {/* <LazyComponent>
                <BottomBanner bannerImage={BannerImage} bannerBg="/images/section-images/relex-banner-bg-large.webp" />
            </LazyComponent> */}

            {/* <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line.svg',
                    width: 232,
                    height: 234
                }}
            /> */}

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading="plastic free life"
                        h3LightHeading={
                            <>
                                ReLEx SMILE is the key
                                <br /> to living
                            </>
                        }
                        h3BoldHeading={
                            <>
                                a sustainable, <br /> plastic free life!
                            </>
                        }
                        descriptions={[
                            `The most sustainable, green lifestyle to have is when you have a plastic free eye-style, free of plastic waste from your glasses and contact lenses!`
                        ]}
                    />

                    {/* <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-2.svg',
                    width: 232,
                    height: 234
                }}
                altText="Beautiful forest. Climate change awareness from plastic glasses and contact lenses."
            /> */}

                    {/* <Section className="!mt-4">
                <Container>
                    <Image
                        src="/images/section-images/mountain-image-2.png"
                        alt=""
                        width={638}
                        height={137}
                        quality={70}
                        className="mx-auto md:h-auto md:w-auto"
                    />
                </Container>
            </Section>

            <DrawLine
                image={{
                    url: '/images/section-images/draw-line-2-mobile.svg',
                    width: 63,
                    height: 62
                }}
                desktopImage={{
                    url: '/images/section-images/draw-line-3-desktop.svg',
                    width: 232,
                    height: 234
                }}
            /> */}

                    <SideImageSection
                        h2Heading="gift of a tree"
                        h3LightHeading={
                            <>
                                Saving the planet
                                <br />
                            </>
                        }
                        h3BoldHeading="One eye at a time!"
                        descriptions={[
                            `When undergoing laser eye surgery, you may not realize it but you are already making a positive
                     difference to the environment. For every 10 years of contact lens wearing the amount of plastic
                      that ends up in the ocean is roughly the same as your own body weight.`,
                            <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                Our gift to you…
                            </span>,
                            `We want to take our impact on the environment a step further and this is where the gift of a tree comes in!`,
                            <span className="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                Here at My-iClinic we give all of our laser patients a real forest tree!
                            </span>,
                            `Over your tree’s long life, you can visit it, introduce it to your family and track its growth and
                     value! Over the lifetime of the tree, it will more than offset the carbon you've used with your
                      contacts/glasses. When the tree is harvested, its value will be yours and new trees are planted
                      to replace it.`,
                            `This is our big thank you for choosing a natural, green living eye-style.`
                        ]}
                        sectionImage={{
                            url: '/images/section-images/gift-of-a-tree.png',
                            width: 390,
                            height: 390
                        }}
                        sectionImageDesktop={{
                            url: '/images/section-images/gift-of-a-tree-desktop.png',
                            width: 554,
                            height: 496
                        }}
                        altText="Beautiful forest. Climate change awareness from plastic glasses and contact lenses."
                    />
                    {/*
                    <DrawLine
                        image={{
                            url: '/images/section-images/draw-line-2-mobile.svg',
                            width: 63,
                            height: 62
                        }}
                        desktopImage={{
                            url: '/images/section-images/draw-line-4-desktop.svg',
                            width: 232,
                            height: 234
                        }}
                    /> */}
                    <ClimateChange />
                </SustainableSlider>
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="Get the guide to ReLEx laser surgery"
                    description="Robotic laser vision correction"
                    pageSlug="relex-smile-london"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={relexSmileFaqList}
                    titleLight="ReLEx SMILE Laser"
                    titleBold="Treatment FAQ’s"
                    description="Have a question? We are here to help."
                />
            </LazyComponent>
        </Page>
    );
}

/**
 * Fetch the data from the WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<any> = await getPageData();

        return {
            /* eslint-disable */
            props: {
                seo: data.yoast_head,
                yoastJson: data.yoast_head_json
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
