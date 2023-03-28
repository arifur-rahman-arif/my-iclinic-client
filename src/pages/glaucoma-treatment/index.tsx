import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { SpanVariant1 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-glaucoma-large.png';
import MastheadImageMedium from '@/masthead/masthead-glaucoma-medium.png';
import MastheadImageSmall from '@/masthead/masthead-glaucoma-small.png';
import { glaucomaFaqList } from '@/page-sections/Faq/faqList';
import { glaucomaSliders } from '@/page-sections/FeaturedPatient';
import {
    ClimateChange,
    CtaSection,
    FullWidthImageSection,
    GlaucomaChargeSection,
    GlaucomaPackages,
    GlaucomaSection,
    Masthead,
    PlasticFree,
    SideImageSection
} from '@/page-sections/index';
import { LeftRightSection } from '@/page-sections/LeftRight';
import { leftRightListGlaucoma, leftRightListGlaucomma } from '@/page-sections/LeftRight/leftRightList';
import { StarComponent } from '@/page-sections/SectionParts/StarComponent';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import { glaucomaStackList } from '@/page-sections/StackedSection';
import ImprovedVisionLarge from '@/section-images/improved-vision-large.png';
import { WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const SustainableSlider = dynamic(() => import('@/components/Slider/SustainableSlider/SustainableSlider'), {
    loading: () => <ComponentLoader />
});
const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
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
const CompareSlider = dynamic(() => import('@/page-sections/CompareSlider/CompareSlider'), {
    loading: () => <ComponentLoader />
});

interface GlaucomaPageProps {
    seo: any;
    yoastJson: any;
}

/**
 * Home page component for the App
 *
 * * Url: /glaucoma
 *
 * @export
 * @returns {JSX.Element}
 */
export default function GlaucomaPage({ seo, yoastJson }: GlaucomaPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const subheading = 'Affordable management and treatment for your Glaucoma!';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Glaucoma Treatment London"
            description="Glaucoma is an eye condition where the optic nerve connecting the eye to the brain becomes damaged. Find out about our glaucoma treatment here."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={MastheadImageSmall}
                imageMedium={MastheadImageMedium}
                imageLarge={MastheadImageLarge}
                altText=""
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
                h1Title={
                    <h1 className="">
                        <span className="h1-inner-span inline-block opacity-0 ">Glaucoma</span>
                        <br />
                        <span className="h1-inner-span inline-block opacity-0 ">Treatment</span>{' '}
                        <span className="h1-inner-span inline-block opacity-0 ">London</span>
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
                priceText="From £400"
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">Speak to a specialist</strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            {/* <UspSection list={homeUspList} /> */}

            <SideImageSection
                h2Heading={
                    <div className="grid gap-4">
                        <StarComponent /> <SpanVariant1>5-star Glaucoma clinic</SpanVariant1>
                    </div>
                }
                h3LightHeading="Manage and Treat your glaucoma"
                h3BoldHeading="with our 5-star Glaucoma clinic in London"
                altText=""
                descriptions={[
                    'Glaucoma is a chronic eye condition which is detected by our Glaucoma specialists after careful and regular assessments for your eyes.',
                    'We call Glaucoma the ‘silent thief of sight’ because the condition quietly progresses over time, without any sudden noticeable signs or symptoms.',
                    'Glaucoma tends to run in families and certain groups are more at risk than others. We understand this can be worrying, which is why our Glaucoma specialists are here to help manage and treat your Glaucoma for a better and happier quality of life!'
                ]}
                sectionImage={{
                    url: '/images/section-images/manage-glaucoma.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/manage-glaucoma-large.png',
                    width: 664,
                    height: 642
                }}
            />

            <GlaucomaSection />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightListGlaucoma} />
            </LazyComponent>

            <FullWidthImageSection
                boldHeading="Treatment, aftercare and monitoring Glaucoma"
                description={[
                    'In a subsequent visit to our clinic, our glaucoma specialist will continue to provide a dedicated care service for your Glaucoma management.',
                    'When you come for your first visit with us, our specialists can determine what package will be best suited for your Glaucoma management.'
                ]}
                dynamicMediaColumn={
                    <LazyComponent>
                        <CompareSlider
                            image1={{
                                src: '/images/section-images/glaucoma-compare-slider-1.png',
                                width: 748,
                                height: 498
                            }}
                            image2={{
                                src: '/images/section-images/glaucoma-compare-slider-2.png',
                                width: 748,
                                height: 498
                            }}
                        />
                    </LazyComponent>
                }
                containerClass="pt-12 !pb-0 md:!py-20 md:!grid-cols-[1fr_auto]"
            />

            {/* <SideImageSection */}
            {/*    h2Heading="Glaucoma Treatments" */}
            {/*    h3LightHeading={ */}
            {/*        <> */}
            {/*            Treatment options we provide */}
            {/*            <br /> */}
            {/*        </> */}
            {/*    } */}
            {/*    h3BoldHeading="For your Glaucoma Management" */}
            {/*    altText="" */}
            {/*    descriptions={[ */}
            {/*        'All eyes are unique! We provide the most wide-ranging successful procedures for all Glaucoma types in our London Clinic.' */}
            {/*    ]} */}
            {/*    sectionImage={{ */}
            {/*        url: '/images/section-images/glaucoma-treatments.png', */}
            {/*        width: 370, */}
            {/*        height: 352 */}
            {/*    }} */}
            {/*    sectionImageDesktop={{ */}
            {/*        url: '/images/section-images/glaucoma-treatments-large.png', */}
            {/*        width: 608, */}
            {/*        height: 409 */}
            {/*    }} */}
            {/* /> */}

            <Section>
                <Container className="grid grid-cols-1 md:grid-cols-2">
                    <TextColumn
                        h2Heading="Glaucoma Treatments"
                        h3LightHeading={
                            <>
                                Treatment options we provide
                                <br />
                            </>
                        }
                        h3BoldHeading="For your Glaucoma Management"
                        descriptions={[
                            'All eyes are unique! We provide the most wide-ranging successful procedures for all Glaucoma types in our London Clinic.'
                        ]}
                    />
                </Container>
            </Section>

            <LazyComponent>
                <LeftRightSection
                    childrenList={leftRightListGlaucomma}
                    positionReversed
                    containerClassName="md:!gap-20 md:!grid-cols-[auto_auto]"
                    sectionClassName="md:!mt-24"
                />
            </LazyComponent>

            <CtaSection />

            <GlaucomaChargeSection />

            <LazyComponent>
                <FeaturedPatient
                    h2Title="Glaucoma Patient"
                    h3Title="Life after Glaucoma Treatment & management"
                    bandImageDescription={[
                        `I was originally recommended to this Clinic by my optician for urgent Glaucoma treatment. Mr Bolger saved my sight - what more can I say? Since then I have been seen regularly and had cataract treatment very successfully in both eyes.`,
                        'Ms Odufuwa- Bolger now sees me every 6 months for a complete checkup, the most recent being last week.',
                        'The array of the latest machines helps to inform them and track my progress. The staff are friendly, attentive and helpful; the rooms are clean and everything is wiped down before each use - this has always been the case even before the pandemic.'
                    ]}
                    bandImageTitle="Tamara"
                    bandImageURL="/images/section-images/placeholder-image.png"
                    reviewDescription={[`I take every opportunity to recommend this Clinic.`]}
                    reviewTitle="Thank you My-iClinic"
                    sliders={glaucomaSliders}
                    bandColor="bg-[#8D33FF]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <SideImageSection
                dynamicTextColumn={<GlaucomaPackages />}
                containerClassName="md:!grid-cols-[auto_1fr]"
                positionReversed
                sectionImage={{
                    url: '/images/section-images/glaucoma-packages-large.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/glaucoma-packages-large.png',
                    width: 655,
                    height: 494
                }}
            />

            <FullWidthImageSection
                h3Title="Step into the light with"
                boldHeading={<strong className="normal-case">improved vision!</strong>}
                altText=""
                image={ImprovedVisionLarge}
                desktopImage={ImprovedVisionLarge}
                containerClass="pb-16 md:!py-0 !mx-0 md:!mx-auto"
                overlayAnimation
                textColumnOverlay
                sectionClass="bg-brandLight relative"
                largeImageClassName="!rounded-none"
            />

            <LazyComponent>
                <StackedSection
                    stackList={glaucomaStackList}
                    h3LightHeading="We promise the benefits of our Glaucoma"
                    h3BoldHeading="treatment is safer and better for your health!"
                    noImages
                    containerClassName="md:!gap-8"
                />
            </LazyComponent>

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading="plastic free life"
                        h3LightHeading="Vision correction is the key to living"
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

                <LazyComponent>
                    <CompanyLogos />
                </LazyComponent>

                <LazyComponent>
                    <PdfDownload
                        title="Get the guide to Glaucoma treatment"
                        description="Robotic laser vision correction"
                        pageSlug="glaucoma"
                    />
                </LazyComponent>

                <LazyComponent>
                    <Faq
                        faqs={glaucomaFaqList}
                        titleLight="Glaucoma Frequently"
                        titleBold="Asked Questions"
                        description="Have a question? We are here to help."
                    />
                </LazyComponent>
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
