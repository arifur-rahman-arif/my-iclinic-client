import { BreadCrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { normalSlideListPresbyond } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-presbyond-large.png';
import MastheadImageSmall from '@/masthead/masthead-presbyond-small.png';
import MastheadImageMedium from '@/masthead/masthead-presbyond.png';
import { presbyondFaqList } from '@/page-sections/Faq/faqList';
import { presbyondSliders } from '@/page-sections/FeaturedPatient';
import {
    ClimateChange,
    CtaSection,
    CtaSection2,
    FinanceExtra,
    FullWidthImageSection,
    Masthead,
    PlasticFree,
    SideImageSection
} from '@/page-sections/index';
import { leftRightListPresbyond } from '@/page-sections/LeftRight/leftRightList';
import { presbyondStackList } from '@/page-sections/StackedSection';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FaPoundSign } from 'react-icons/fa';

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
const StackedSection = dynamic(() => import('@/page-sections/StackedSection/StackedSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const LottieSection = dynamic(() => import('@/page-sections/LottieSection/LottieSection'), {
    loading: () => <ComponentLoader />
});
const SustainableSlider = dynamic(() => import('@/components/Slider/SustainableSlider/SustainableSlider'), {
    loading: () => <ComponentLoader />
});

interface PresbyondProps {
    seo: any;
    yoastJson: any;
}

/**
 * Url: /presbyond-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Presbyond({ seo, yoastJson }: PresbyondProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = 'Presbyond Laser Treatment London';
    const subheading = 'Correct your vision and say goodbye to reading glasses';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Presbyond Laser eye surgery In London"
            description="Presbyond laser eye surgery is a vision correction treatment to fix presbyopia (long-sightedness). Learn about the treatments available and how we can help."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText="Presbyopic woman reading a book with her glasses on."
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
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
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
                    <strong className="normal-case">Talk to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            {/* <UspSection list={presbyondUspList} /> */}

            <SideImageSection
                h2Heading="Vision correction treatment"
                h3LightHeading="Getting rid of your reading glasses with"
                h3BoldHeading={
                    <>
                        our Presbyond
                        <br /> Laser Treatment
                    </>
                }
                altText="Woman with reading glasses has a headache from watching her laptop screen. She is
                long sighted, suffering from presbyopia."
                descriptions={[
                    `Always wanted to know what your vision could be like without the need for reading
                    glasses?`,
                    `If you suffer from presbyopia (also known as long sightedness, farsightedness,
                        hypermetropia and hyperopia), our Presbyond laser surgery can fix your refractive error
                        for an easier, clearer way of life.`
                ]}
                sectionImage={{
                    url: '/images/section-images/presbyond-laser-treatment.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/presbyond-laser-treatment-desktop.png',
                    width: 688,
                    height: 642
                }}
            />

            {/* <FullWidthImageSection
                h3Title="London’s best laser treatment for achieving clear vision at all distances"
                altText="Man suffers from long-sightedness. He squints at his phone, holding his prescription
                glasses to see a text message."
                image={LaserTreatment}
                desktopImage={LaserTreatmentDesktop}
            /> */}

            <LazyComponent triggerPosition={500}>
                <LottieSection />
            </LazyComponent>

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListPresbyond} />
            </LazyComponent>

            <FullWidthImageSection
                boldHeading="What to expect after your Presbyond Treatment with our London specialists."
                altText="Older man with clear vision looking at his fit bit after running a marathon."
                description={[
                    'Saving vision, time, money and the planet! Having Presbyond is a brilliant achievement for your vision, your time, your long-term savings and the sustainability of our planet. We want all of our patients to be well-informed about their recovery process after Presbyond surgery!',
                    'Our team takes your aftercare very seriously, which is why our laser specialist will have follow up assessments and appointments with you throughout the year after your treatment date.'
                ]}
                videoUrl="/videos/presbyond.mp4"
                videoPoster="IEVaY-Rj4RA"
                // TextColumnExtraBottomElements={
                //     <>
                //         <div className="mt-12 grid md:mt-24">
                //             <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-8 md:gap-x-12">
                //                 <H2Variant1 className="w-full normal-case">
                //                     What our Presbyond patients say after treatment
                //                 </H2Variant1>
                //             </div>

                //             <div className="mt-6 h-2 w-full">
                //                 <Image
                //                     src="/images/icons/icon-pin-yellow.svg"
                //                     quality={10}
                //                     width={150}
                //                     height={2}
                //                     alt=""
                //                 />
                //             </div>

                //             <H3Variant2 className="mt-12 md:mt-24">Hear from a patient</H3Variant2>

                //             <div className={`mt-6 grid gap-12`}>
                //                 <div className="flex w-full flex-col items-start justify-start gap-6 md:max-w-[46.7rem]">
                //                     <p>
                //                         When you choose My-iClinic’s 5-star rated services, you can rest assured that
                //                         you’ve made the best possible choice for your eyesight. Our specialist
                //                         optometrists carefully work with you to evaluate your eyes to offer you the best
                //                         possible course of treatment – allowing you to re-discover a life of normal
                //                         vision.
                //                     </p>
                //                 </div>
                //             </div>
                //         </div>
                //     </>
                // }
            />

            <div className="md:mt-24"></div>

            <LazyComponent>
                <FeaturedPatient
                    h2Title="Presbyond Patient"
                    h3Title="Life after Presbyond laser eye surgery"
                    bandImageDescription={[
                        `My experience was amazing. The whole team is very kind and exceedingly professional.`,
                        'The after care is exceptional and I would highly recommend them.'
                    ]}
                    bandImageTitle="Hasina"
                    bandImageURL="/images/section-images/hasina.jpg"
                    reviewDescription={[
                        `Being able to see again without glasses is the best feeling and the best money I have ever spent!!!`
                    ]}
                    reviewTitle="Thank you My-iClinic"
                    sliders={presbyondSliders}
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListPresbyond} />
            </LazyComponent>

            <SideImageSection
                h2Heading="Transparent Price"
                h3LightHeading={
                    <>
                        Clearer vision with an all inclusive,
                        <br />
                    </>
                }
                h3BoldHeading="Transparent cost"
                descriptions={[
                    `Having to wear glasses and contact lenses is a big financial burden overtime. We never subject the safety of people’s eye health to a cheap deal like glasses and contact lenses do and we also understand you don’t want to pay more than what’s fair.`,
                    `Our advanced Presbyond treatment with our London specialists is an all inclusive cost with a dedicated team for your aftercare!`
                ]}
                sectionImage={{
                    url: '/images/section-images/transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/transparent-price-desktop.png',
                    width: 689,
                    height: 558
                }}
                altText="Happy couple on a hike in the mountains after correcting their long-sighted vision."
                textColumnExtras={
                    <>
                        <FinanceExtra
                            priceText="£2,400 per eye"
                            priceDescription="With 10 Months Interest-Free Finance available!"
                            paragraphs={[
                                `The best laser eye surgery price in London, saving an average of £1,000 for your treatment when you come
                            to My-iClinic.`,
                                <>
                                    Want to know more about our{' '}
                                    <LinkText
                                        href="#"
                                        className="font-mulishBold font-extrabold text-blue"
                                        indicatorColor="bg-blue"
                                    >
                                        Finance Options?
                                    </LinkText>
                                </>
                            ]}
                            list={[
                                <>
                                    One dedicated presbyond specialist
                                    <br />
                                    for your treatment
                                </>,
                                'Most affordable price in London'
                            ]}
                        />

                        <Button
                            type="anchor"
                            link="/presbyond-london/price"
                            icon={<FaPoundSign className="h-[1.7rem] w-[1.7rem]" />}
                            text="Pricing & Financing"
                            iconPosition="left"
                            className="mt-6 !gap-2 justify-self-center md:justify-self-start"
                        />
                    </>
                }
            />

            <CtaSection />

            <LazyComponent>
                <StackedSection
                    stackList={presbyondStackList}
                    h3LightHeading="Why do our patients choose our"
                    h3BoldHeading="Presbyond laser surgery?"
                    descriptions={[
                        `The answer is simple – they want to escape limitations and take charge of their life.`
                    ]}
                />
            </LazyComponent>

            <CtaSection2
                title="Want to be free from reading glasses?"
                descriptions={[
                    <>
                        Saying goodbye to glasses after cataract surgery is now possible with Presbyond laser treatment!
                        We can book a private presbyond consultation from 3 to 6 months after your cataract surgery.
                    </>
                ]}
            />

            {/* <SideImageSection
                h3LightHeading="Want to be free from your glasses after"
                h3BoldHeading="having Cataract Treatment?"
                descriptions={[
                    `Saying goodbye to glasses after cataract surgery is now possible with Presbyond laser treatment!
                    We can book a private presbyond consultation from 3 to 6 months after your cataract surgery.`
                ]}
                sectionImage={{
                    url: '/images/section-images/cataract-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/cataract-treatment-desktop.png',
                    width: 633,
                    height: 500
                }}
                positionReversed={true}
                altText="Old man excited about getting rid of his reading glasses with Presbyond laser
                treatment."
            /> */}

            {/* <LazyComponent>
                <BottomBanner
                    bannerImage={PresbyondBannerImage}
                    bannerBg="/images/section-images/presbyond-banner-bg-desktop.webp"
                />
            </LazyComponent> */}

            {/* <Section>
                <ContainerFluid className="md:h-[51rem]">
                    <Image
                        src="/images/section-images/mountain-image-mobile.png"
                        alt="Beautiful lake and mountains. Climate change awareness from plastic glasses and
                        contact lenses.
                        "
                        width={393}
                        height={137}
                        quality={70}
                        className="mx-auto md:hidden md:h-auto md:w-auto"
                    />
                    <Image
                        src="/images/section-images/mountain-image-desktop.png"
                        alt="Beautiful lake and mountains. Climate change awareness from plastic glasses and
                        contact lenses.
                        "
                        fill
                        quality={70}
                        className="mx-auto hidden md:block md:h-auto md:w-auto"
                    />
                </ContainerFluid>
            </Section> */}
            {/*
            <DrawLine
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
                        h3LightHeading="Presbyond is the key to living"
                        h3BoldHeading="a sustainable, plastic free life!"
                        descriptions={[
                            `The most sustainable, green lifestyle to have is when you have a plastic free eye-style,
                    free of plastic waste from your glasses and contact lenses!`
                        ]}
                    />

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
                            `Here at My-iClinic we give all of our laser patients a very special gift to go with your brand-new eyes,
                    a tree! When undergoing laser eye surgery, you may not realize but you are already making a positive difference to the environment.`,
                            `For every 10 years of contact lens wear the amount of plastic that ends up in the ocean is roughly the same as your own body weight.`
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
                        textColumnExtras={
                            <div className="grid gap-6">
                                <span className="max-w-[44.5rem]  font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                    We want to take our impact on the environment a step further and this is where the
                                    gift of a tree comes in!
                                </span>
                            </div>
                        }
                    />
                    <ClimateChange />
                </SustainableSlider>
            </LazyComponent>

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
            </Section> */}
            {/*

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

            {/* <DrawLine
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

            {/* <Section className="!mt-0">
                <Container>
                    <Image
                        src="/images/section-images/mountain-image-3.png"
                        alt=""
                        width={399}
                        height={162}
                        quality={70}
                        className="mx-auto md:hidden"
                    />
                    <Image
                        src="/images/section-images/mountain-image-3-desktop.png"
                        alt=""
                        width={1157}
                        height={470}
                        quality={70}
                        className="mx-auto hidden md:block md:h-auto md:w-auto"
                    />
                </Container>
            </Section> */}

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload title="Presbyond Patient Information" pageSlug="presbyond-london" />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={presbyondFaqList}
                    titleLight="Presbyond Frequently"
                    titleBold="Asked Questions"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'presbyond-london' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
