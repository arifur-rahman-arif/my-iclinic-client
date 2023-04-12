import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import { H3Variant3, SpanVariant1 } from '@/components/Headings';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import * as GlaucomaTrabeculectomyLottie from '@/lottie/glaucoma-trabeculectomy.lottie.json';
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
import LottieComponent from '@/page-sections/LeftRight/lottie/LottieComponent';
import VideoColumn from '@/page-sections/LeftRight/VideoColumn';
import { StarComponent } from '@/page-sections/SectionParts/StarComponent';
import TextColumn from '@/page-sections/SectionParts/TextColumn';
import { glaucomaStackList } from '@/page-sections/StackedSection';
import ImprovedVisionLarge from '@/section-images/improved-vision-large.png';
import { GlaucomaPageContentProps, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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

interface DataInterface extends GlaucomaPageContentProps, PageDataInterface<GlaucomaPageContentProps> {}

interface GlaucomaPageProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Home page component for the App
 *
 * * Url: /glaucoma
 *
 * @export
 * @returns {JSX.Element}
 */
export default function GlaucomaPage({ seo, yoastJson, data }: GlaucomaPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();

    const heading = data?.masthead_heading || 'Glaucoma Treatment London';
    const subheading = data?.masthead_subheading || 'Affordable management and treatment for your Glaucoma!';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const serviceList: any = Array.isArray(data?.section_3) ?
        data?.section_3.map((service) => {
            return {
                ...service,
                mobileImage: (
                      <Image
                          src={service.mobileImage}
                          width={390}
                          height={390}
                          quality={70}
                          className="md:hidden"
                          alt=""
                      />
                ),
                desktopImage: (
                      <Image
                          src={service.desktopImage}
                          width={685}
                          height={557}
                          quality={70}
                          className="hidden md:block md:scale-90 2xl:scale-100"
                          alt=""
                      />
                ),
                descriptions: stringArrayToElementArray(service.descriptions),
                excludeNumbers: true
            };
        }) :
        null;

    const glaucomaServices: any = Array.isArray(data?.section_6) ?
        data?.section_6.map((service) => {
            const returnObject = {
                ...service,
                alternativeHeading: service?.alternativeHeading ? (
                      <H3Variant3>{service.alternativeHeading}</H3Variant3>
                ) : (
                      <></>
                ),
                descriptions: stringArrayToElementArray(service.descriptions)
            };

            if (service.mobileImage || service.desktopImage) {
                return {
                    ...returnObject,
                    mobileImage: (
                          <Image
                              src={service.mobileImage}
                              width={390}
                              height={390}
                              quality={70}
                              className="md:hidden"
                              alt=""
                          />
                    ),
                    desktopImage: (
                          <Image
                              src={service.desktopImage}
                              width={685}
                              height={557}
                              quality={70}
                              className="hidden md:block md:scale-90 2xl:scale-100"
                              alt=""
                          />
                    )
                };
            } else if (service.lottieComponent) {
                return {
                    ...returnObject,
                    lottieComponent: <LottieComponent animationData={GlaucomaTrabeculectomyLottie} loop={false} />
                };
            } else {
                return {
                    ...returnObject,
                    dynamicMediaColumn: (
                          <VideoColumn poster={service?.video?.poster} source={service?.video?.source} />
                    )
                };
            }
        }) :
        null;

    return (
        <Page
            title="Glaucoma Treatment London"
            description="Glaucoma is an eye condition where the optic nerve connecting the eye to the brain becomes damaged. Find out about our glaucoma treatment here."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large || MastheadImageLarge}
                imagePosition="2xl:object-[0rem_-3rem] !object-contain"
                smallImageClassName={'object-[center_-3rem]'}
                h1Title={
                    <h1 className="flex flex-wrap gap-2 xs:gap-4 md:max-w-[41rem]">
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
                priceText={data?.masthead_price || 'From £400'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">
                        {data?.request_callback_title ? (
                            HTMLReactParser(data.request_callback_title)
                        ) : (
                            <>Speak to a specialist</>
                        )}
                    </strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            {/* <UspSection list={homeUspList} /> */}

            <SideImageSection
                h2Heading={
                    <div className="grid gap-4">
                        <StarComponent />
                        <SpanVariant1>{data?.section_1?.subheading || '5-star Glaucoma clinic'}</SpanVariant1>
                    </div>
                }
                h3LightHeading={data?.section_1?.heading?.light_heading || 'Manage and Treat your glaucoma'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'with our 5-star Glaucoma clinic in London?'}
                descriptions={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        'Glaucoma is a chronic eye condition which is detected by our Glaucoma specialists after careful and regular assessments for your eyes.',
                        'We call Glaucoma the ‘silent thief of sight’ because the condition quietly progresses over time, without any sudden noticeable signs or symptoms.',
                        'Glaucoma tends to run in families and certain groups are more at risk than others. We understand this can be worrying, which is why our Glaucoma specialists are here to help manage and treat your Glaucoma for a better and happier quality of life!'
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/manage-glaucoma.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/manage-glaucoma-large.png',
                    width: 664,
                    height: 642
                }}
            />

            <GlaucomaSection content={data?.section_2?.content} image={data?.section_2?.image} />

            <LazyComponent>
                <LeftRightSection childrenList={(serviceList.length && serviceList) || leftRightListGlaucoma} />
            </LazyComponent>

            <FullWidthImageSection
                boldHeading={data?.section_4?.heading || 'Treatment, aftercare and monitoring Glaucoma'}
                description={
                    (data?.section_4?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_4?.descriptions)) || [
                        'In a subsequent visit to our clinic, our glaucoma specialist will continue to provide a dedicated care service for your Glaucoma management.',
                        'When you come for your first visit with us, our specialists can determine what package will be best suited for your Glaucoma management.'
                    ]
                }
                dynamicMediaColumn={
                    <LazyComponent>
                        <CompareSlider
                            image1={{
                                src: data?.section_4?.image_1 || '/images/section-images/glaucoma-compare-slider-1.png',
                                width: 748,
                                height: 498
                            }}
                            image2={{
                                src: data?.section_4?.image_2 || '/images/section-images/glaucoma-compare-slider-2.png',
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
                        h2Heading={data?.section_5?.subheading || 'Glaucoma Treatments'}
                        h3LightHeading={
                            <>
                                {data?.section_5?.heading?.light_heading || 'Treatment options we provide'}
                                <br />
                            </>
                        }
                        h3BoldHeading={data?.section_5?.heading?.bold_heading || 'For your Glaucoma Management'}
                        descriptions={
                            (data?.section_5?.descriptions?.length &&
                                stringArrayToElementArray(data?.section_5?.descriptions)) || [
                                'All eyes are unique! We provide the most wide-ranging successful procedures for all Glaucoma types in our London Clinic.'
                            ]
                        }
                    />
                </Container>
            </Section>

            <LazyComponent>
                <LeftRightSection
                    childrenList={(glaucomaServices?.length && glaucomaServices) || leftRightListGlaucomma}
                    positionReversed
                    containerClassName="md:!gap-20 md:!grid-cols-[auto_auto]"
                    sectionClassName="md:!mt-24"
                />
            </LazyComponent>

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading}
            />

            <GlaucomaChargeSection {...data?.section_7} />

            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_11?.subheading || 'Glaucoma Patient'}
                    h3Title={data?.section_11?.heading || 'Life after Glaucoma Treatment & management'}
                    bandImageDescription={
                        (data?.section_11?.descriptions?.length &&
                            stringArrayToElementArray(data?.section_11.descriptions)) || [
                            `I was originally recommended to this Clinic by my optician for urgent Glaucoma treatment. Mr Bolger saved my sight - what more can I say? Since then I have been seen regularly and had cataract treatment very successfully in both eyes.`,
                            'Ms Odufuwa- Bolger now sees me every 6 months for a complete checkup, the most recent being last week.',
                            'The array of the latest machines helps to inform them and track my progress. The staff are friendly, attentive and helpful; the rooms are clean and everything is wiped down before each use - this has always been the case even before the pandemic.',
                            'I take every opportunity to recommend this Clinic.'
                        ]
                    }
                    bandImageTitle={data?.section_11?.name || 'Tamara'}
                    bandImageURL={data?.section_11?.front_image || '/images/section-images/placeholder-image.png'}
                    reviewTitle="Thank you My-iClinic"
                    sliders={data?.section_11?.additional_images || glaucomaSliders}
                    bandColor="bg-[#8D33FF]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <SideImageSection
                dynamicTextColumn={<GlaucomaPackages packageList={data?.section_8?.package_list} />}
                containerClassName="md:!grid-cols-[auto_1fr]"
                positionReversed
                sectionImage={{
                    url: data?.section_8?.image || '/images/section-images/glaucoma-packages-large.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_8?.large_image || '/images/section-images/glaucoma-packages-large.png',
                    width: 655,
                    height: 494
                }}
            />

            <FullWidthImageSection
                h3Title={data?.section_9?.heading || 'Step into the light with'}
                boldHeading={
                    <strong className="normal-case">{data?.section_9?.bold_heading || 'improved vision!'}</strong>
                }
                altText=""
                image={data?.section_9?.image || ImprovedVisionLarge}
                desktopImage={data?.section_9?.image || ImprovedVisionLarge}
                containerClass="pb-16 md:!py-0 !mx-0 md:!mx-auto"
                overlayAnimation
                textColumnOverlay
                sectionClass="bg-brandLight relative"
                largeImageClassName="!rounded-none"
            />

            <LazyComponent>
                <StackedSection
                    stackList={
                        (data?.section_10?.slider_list?.length && data?.section_10?.slider_list) || glaucomaStackList
                    }
                    h3LightHeading={
                        data?.section_10?.heading?.light_heading || 'We promise the benefits of our Glaucoma'
                    }
                    h3BoldHeading={
                        data?.section_10?.heading?.bold_heading || 'treatment is safer and better for your health!'
                    }
                    noImages
                    containerClassName="md:!gap-8"
                />
            </LazyComponent>

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading={data?.sustainability_section?.plastic_free_life?.subheading || 'plastic free life'}
                        h3LightHeading={HTMLReactParser(
                            data?.sustainability_section?.plastic_free_life?.heading.light_heading ||
                                'Vision correction is the key to living'
                        )}
                        h3BoldHeading={HTMLReactParser(
                            data?.sustainability_section?.plastic_free_life?.heading.bold_heading ||
                                'a sustainable, plastic free life!'
                        )}
                        descriptions={
                            (data?.sustainability_section?.plastic_free_life?.descriptions.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section.plastic_free_life.descriptions
                                )) || [
                                `The most sustainable, green lifestyle to have is when you have a plastic free eye-style,
                    free of plastic waste from your glasses and contact lenses!`
                            ]
                        }
                    />

                    <SideImageSection
                        h2Heading={data?.sustainability_section?.gift_of_a_tree?.subheading || 'gift of a tree'}
                        h3LightHeading={HTMLReactParser(
                            data?.sustainability_section?.gift_of_a_tree?.heading?.light_heading ||
                                'Saving the planet <br />'
                        )}
                        h3BoldHeading={HTMLReactParser(
                            data?.sustainability_section?.gift_of_a_tree?.heading?.bold_heading || 'One eye at a time!'
                        )}
                        descriptions={
                            (data?.sustainability_section?.gift_of_a_tree?.descriptions.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section.gift_of_a_tree.descriptions
                                )) || [
                                `Here at My-iClinic we give all of our laser patients a very special gift to go with your brand-new eyes,
                    a tree! When undergoing laser eye surgery, you may not realize but you are already making a positive difference to the environment.`,
                                `For every 10 years of contact lens wear the amount of plastic that ends up in the ocean is roughly the same as your own body weight.`
                            ]
                        }
                        sectionImage={{
                            url:
                                data?.sustainability_section?.gift_of_a_tree?.image ||
                                '/images/section-images/gift-of-a-tree.png',
                            width: 390,
                            height: 390
                        }}
                        sectionImageDesktop={{
                            url:
                                data?.sustainability_section?.gift_of_a_tree?.large_image ||
                                '/images/section-images/gift-of-a-tree-desktop.png',
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

                    <ClimateChange
                        h2Heading={data?.sustainability_section?.clearer_vision?.subheading}
                        h3LightHeading={data?.sustainability_section?.clearer_vision?.heading?.light_heading}
                        h3BoldHeading={data?.sustainability_section?.clearer_vision?.heading?.bold_heading}
                        image={data?.sustainability_section?.clearer_vision?.image}
                        largeImage={data?.sustainability_section?.clearer_vision?.large_image}
                        descriptions={data?.sustainability_section?.clearer_vision?.descriptions}
                    />
                </SustainableSlider>

                <LazyComponent>
                    <CompanyLogos />
                </LazyComponent>

                <LazyComponent>
                    <PdfDownload
                        downloadFile={data?.email_contents?.download_file}
                        title="Get the guide to Glaucoma treatment"
                        description="Robotic laser vision correction"
                        pageSlug="glaucoma-treatment"
                    />
                </LazyComponent>

                <LazyComponent>
                    <Faq
                        faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || glaucomaFaqList}
                        titleLight="Glaucoma"
                        titleBold="Frequently asked questions"
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
        const data: WpPageResponseInterface<GlaucomaPageContentProps> = await getPageData({
            slug: 'glaucoma-treatment'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)
                    },
                    section_3: Array.isArray(data?.acf?.section_3)
                        ? data?.acf.section_3.slice(0, 1).map((sectionData) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData.descriptions)
                              };
                          })
                        : [],
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_4?.descriptions)
                    },
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)
                    },
                    section_6: Array.isArray(data?.acf?.section_6)
                        ? data?.acf.section_6.slice(0, 6).map((sectionData) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData.descriptions)
                              };
                          })
                        : [],
                    section_7: {
                        ...data?.acf.section_7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_7?.descriptions)
                    },
                    section_8: {
                        ...data?.acf.section_8,
                        package_list: Array.isArray(data?.acf?.section_8?.package_list)
                            ? data?.acf?.section_8?.package_list?.map((list) => {
                                  return {
                                      ...list,
                                      descriptions: convertArrayOfObjectsToStrings(list?.descriptions)
                                  };
                              })
                            : []
                    },
                    section_10: {
                        ...data?.acf.section_10,
                        slider_list: Array.isArray(data?.acf?.section_10?.slider_list)
                            ? data?.acf?.section_10?.slider_list?.map((list) => {
                                  return {
                                      ...list,
                                      descriptions: convertArrayOfObjectsToStrings(list?.descriptions)
                                  };
                              })
                            : []
                    },
                    sustainability_section: {
                        plastic_free_life: {
                            ...data?.acf?.sustainability_section?.plastic_free_life,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.plastic_free_life.descriptions
                            )
                        },
                        gift_of_a_tree: {
                            ...data?.acf?.sustainability_section?.plastic_free_life,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.gift_of_a_tree.descriptions
                            )
                        },
                        clearer_vision: {
                            ...data?.acf?.sustainability_section?.plastic_free_life,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.clearer_vision.descriptions
                            )
                        }
                    }
                } as DataInterface
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
