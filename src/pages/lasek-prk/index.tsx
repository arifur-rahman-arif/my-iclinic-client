/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';

import Image from 'next/image';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lasek-smile-large.png';
import MastheadImageMedium from '@/masthead/masthead-lasek-smile-medium.png';
import { lasekFaqList } from '@/page-sections/Faq/faqList';
import { lasekSliders } from '@/page-sections/FeaturedPatient';
import HTMLReactParser from 'html-react-parser';
import React from 'react';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import {
    ClimateChange,
    Cta2,
    CtaSection,
    FullWidthImageSection,
    FullWidthImageSection3,
    Masthead,
    NormalSection2,
    NormalSection3,
    PlasticFree,
    SideImageSection
} from '@/page-sections/index';
import { leftRightListLasek } from '@/page-sections/LeftRight/leftRightList';
import { lasekStackList } from '@/page-sections/StackedSection';
import FullWidthImageLarge from '@/section-images/lasek-doctor-large.png';
import FullWidthImage from '@/section-images/lasek-doctor.png';
import { LasekprkContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
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

const BottomBanner2 = dynamic(() => import('@/page-sections/BottomFullBanners/BottomBanner2'), {
    loading: () => <ComponentLoader />
});

const StackedSection = dynamic(() => import('@/page-sections/StackedSection/StackedSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends LasekprkContentInterface, PageDataInterface<LasekprkContentInterface> {}

interface LasekPageProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /lasek-prk
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasekPage({ seo, yoastJson, data }: LasekPageProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'LASEK, PRK & PTK laser eye surgery London';
    const subheading = data?.masthead_subheading;

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    // LEFT RIGHT SECTION
    const leftRightsectiondata = data?.leftRightsection ?
        data.leftRightsection.map(
            (item: { mobileImage: any; desktopImage: any; title: any; descriptions: string[] | undefined }) => ({
                ...item,
                mobileImage: (
                      <Image
                          src={item?.mobileImage || '/images/section-images/lasek-consultation-large.png'}
                          width={390}
                          height={390}
                          quality={70}
                          className="rounded-primary md:hidden"
                          alt=""
                      />
                ),
                desktopImage: (
                      <Image
                          src={item?.desktopImage || '/images/section-images/lasek-consultation-large.png'}
                          width={695}
                          height={580}
                          quality={70}
                          className="hidden rounded-primary md:block md:scale-90 2xl:scale-100"
                          alt=""
                      />
                ),
                title: item?.title,
                descriptions: stringArrayToElementArray(item?.descriptions)
            })
        ) :
        null;

    // MyclinicSlider
    const clinicSliderdata: any =
        Array.isArray(data?.clinicSlider) && data.clinicSlider.length > 0 ?
            data.clinicSlider.map(
                (service: { desktopimage: any; title: any; descriptions: string[] | undefined }) => {
                    return {
                        ...service,
                        desktopImage: {
                            url: service?.desktopimage || '/images/section-images/lasek-ditch-specs-large.png',
                            width: 447,
                            height: 349
                        },
                        title: service?.title,
                        descriptions: stringArrayToElementArray(service?.descriptions)
                    };
                }
            ) :
            null;

    // reviewSliderdata
    const reviewSliderdata: any =
        Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0 ?
            data.reviewSlider.map((service) => {
                return {
                    ...service,
                    title: service?.title,
                    name: service?.name,
                    description: service?.description
                };
            }) :
            null;
    return (
        <Page
            title="Laser Eye Surgery Specialists in London"
            description="At My-iClinic, we offer a range of laser eye surgery procedures to correct common vision problems. Contact us today for a consultation with a specialist."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageMedium}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText=""
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                bannerWidth="md:max-w-[65.1rem]"
                imagePosition="object-[-20rem_center]"
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>
            {/* SECTION 1 */}
            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[55.4rem]">
                        <strong className="normal-case">
                            {data?.section_1?.heading ||
                                'Well-known for being the first generation of laser eye procedures'}
                        </strong>
                    </div>
                }
                altText=""
                description={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        `LASEK & PRK surgery is chosen very occasionally and in very special scenarios to correct conditions such as short-sightedness (Myopia) , long-sightedness (Hyperopia) and astigmatism.`,
                        `Our PTK laser eye surgery is an alternative vision correction treatment for people who want independence from glasses but also suffer from an injury on their cornea. If you have any corneal injuries, or corneal eye diseases you might be suitable for our PTK laser surgery to correct your vision.`,
                        `As laser eye surgery must be tailored to each patient’s prescription with complete accuracy, our laser specialists use precise algorithms to program a laser to help you see clearly without glasses or contacts.`
                    ]
                }
                image={data?.section_1?.image || FullWidthImage}
                desktopImage={data?.section_1?.large_image || FullWidthImageLarge}
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <NormalSection2
                title1={data?.choosebest?.lightheading}
                title2={data?.choosebest?.boldheading}
                description={data?.choosebest?.description}
            />
            {/* SECTION 2 */}
            <SideImageSection
                h2Heading={data?.section_2?.sub_heading || 'Vision correction treatment'}
                h3LightHeading={
                    <>
                        {data?.section_2?.heading?.light_heading || 'LASEK, PRK & PTK Laser'} <br />
                    </>
                }
                h3BoldHeading={data?.section_2?.heading?.dark_heading || 'Eye Surgery at My-iClinic'}
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `LASEK (Laser Assisted Epithelial Keratomileusis) and PRK (Photorefractive keratectomy) are almost identical vision correction procedures.`,
                        `LASEK & PRK eye surgery only differ in how our laser specialists remove different layers of the cornea. In LASEK eye surgery, the top layer of cells is simply moved to one side and replaced after surgery, whereas the PRK surgery removes them completely.`,
                        `Both LASEK and PRK surgery procedures use a laser to reshape the tissue on the surface of the eye to achieve clear vision.`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/lasek-vision-correction-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_2?.large_image ||
                        '/images/section-images/lasek-vision-correction-treatment-large.png',
                    width: 675,
                    height: 539
                }}
                altText=""
            />

            {/* LEFT RIGHT SECTION */}
            <LazyComponent>
                <LeftRightSection childrenList={leftRightsectiondata ? leftRightsectiondata : leftRightListLasek} />
            </LazyComponent>

            <LazyComponent>
                <BottomBanner2
                    subtitle={
                        data?.price_finance?.interest_free_finance || 'With 24 Months Interest-Free Finance Available!'
                    }
                    title={data?.price_finance?.title}
                    subheading={data?.price_finance?.subheading}
                    description={data?.price_finance?.description}
                    bestpriceline={data?.price_finance?.bestpriceline}
                />
            </LazyComponent>
            {/* SECTOIN 3 */}
            <CtaSection
                title={data?.section_3?.title || 'Speak To Our Friendly Team'}
                subtitle={data?.section_3?.sub_heading || 'talk to a specialist'}
                description={
                    <>
                        {(data?.section_3?.description && HTMLReactParser(data?.section_3?.description)) ||
                            HTMLReactParser(
                                'Need to talk to a specialist before booking a laser consultation? If you are unsure whether you are suitable for our laser treatments, you can attend a <a href="/suitability-check">FREE suitability check </a>with our laser specialist. They will talk you through your prescription history and the best treatment options we offer for vision correction.'
                            )}
                    </>
                }
            />
            {/* PTK SECTION */}
            <NormalSection3
                title={
                    data?.ptkSection?.title ||
                    'Don’t let your existing eye conditions limit your freedom. Our PTK surgery can achieve clear vision without needing glasses and contact lenses.'
                }
                description={
                    data?.ptkSection?.description ||
                    `<strong>PTK (Photo-Therapeutic Keratectomy)</strong> is a surgical treatment best suited to
             people who need vision correction but already have complicated eye conditions that affect their
             cornea, such as corneal dystrophy. Our PTK specialist uses this treatment for complex eyes,
             which will only be medically required in order to achieve clearer vision.`
                }
            />
            {/* SECTION 4 */}
            <LazyComponent>
                <StackedSection
                    stackList={clinicSliderdata ? clinicSliderdata : lasekStackList}
                    h3LightHeading={
                        <>
                            {data?.section_4?.heading?.light_heading || ' Why consider My-iClinic'}
                            <br />
                        </>
                    }
                    h3BoldHeading={data?.section_4?.heading?.dark_heading || 'to correct your vision?'}
                    descriptions={
                        (data?.section_4?.descriptions?.length && data?.section_4?.descriptions) || [
                            `The answer is simple – they want to escape limitations and take charge of their life.`
                        ]
                    }
                />
            </LazyComponent>
            {/* SECTION 5 */}
            <SideImageSection
                h2Heading={data?.section_5?.sub_heading || 'suitability check'}
                h3LightHeading={data?.section_5?.heading?.light_heading || 'Book a FREE laser suitability check to see'}
                h3BoldHeading={
                    data?.section_5?.heading?.bold_heading || 'if you can be free of glasses and contact lenses'
                }
                descriptions={
                    (data?.section_5?.descriptions?.length && data?.section_5?.descriptions) || [
                        `The best way to find out if laser eye treatment is right for you is to have an in-person assessment. You’ll get a clear answer from our experts on your suitability and vision correction options.`
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/right-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image || '/images/section-images/right-treatment-large.png',
                    width: 657,
                    height: 554
                }}
                altText={data?.section_5?.alttext || 'Woman smiling without needing glasses for short-sightedness'}
                textColumnExtras={
                    <>
                        <Cta2 button1Text={data?.section_5?.bookbuttontext || 'Book A suitability check'} />
                    </>
                }
            />
            {/* SECTION 6 */}
            <FullWidthImageSection3
                title1={data?.section_6?.subheading || '97% of people'}
                title2={
                    data?.section_6?.heading ||
                    'From our clinic are extremely happy with their with their vision after laser vision correction!'
                }
                descriptions={
                    (data?.section_6?.descriptions?.length && data?.section_6?.descriptions) || [
                        `Most patients say they wish they’d done it sooner! One of the most mentioned reasons for having laser eye surgery is improved confidence and lifestyle.`
                    ]
                }
                image={data?.section_6?.image}
            />
            {/* SECTION 7 */}
            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_7?.subheading || 'vision correction Patient'}
                    h3Title={data?.section_7?.heading || 'life after laser vision correction!'}
                    bandImageDescription={
                        (data?.section_7?.descriptions?.length && data?.section_7?.descriptions) || [
                            `“Brilliant experience with My-iClinic for laser eye surgery. The team are clearly experts in the area, and I felt well looked after through the entire process.`,
                            `Honest, friendly and professional, I thoroughly recommend My-iClinic for anyone considering laser corrective surgery.”`
                        ]
                    }
                    bandImageTitle={data?.section_7?.bandImageTitle || 'Ms. Priti Patel'}
                    bandImageURL={data?.section_7?.image || '/images/section-images/ms-priti-patel.jpg'}
                    reviewTitle={data?.section_7?.review_title || 'Thank you My-iClinic'}
                    sliders={lasekSliders}
                    bandColor="bg-[#FF5C00]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={reviewSliderdata} />
            </LazyComponent>

            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading={data?.sustainability_section?.plastic_free_life?.subheading || 'plastic free life'}
                        h3LightHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.light_heading ||
                            'LASEK, PRK & PTK laser eye surgery is'
                        }
                        h3BoldHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.bold_heading ||
                            'the key to living a sustainable, plastic free life!'
                        }
                        descriptions={
                            (data?.sustainability_section?.plastic_free_life?.descriptions?.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section?.plastic_free_life?.descriptions
                                )) || [
                                `The most sustainable, green lifestyle to have is when you have a plastic free eye-style,
                        free of plastic waste from your glasses and contact lenses!`
                            ]
                        }
                        image={data?.sustainability_section?.plastic_free_life?.image?.url}
                        largeImage={data?.sustainability_section?.plastic_free_life?.large_image?.url}
                        altText={data?.sustainability_section?.plastic_free_life?.large_image?.alt}
                    />

                    <SideImageSection
                        h2Heading={data?.sustainability_section?.gift_of_a_tree?.subheading || 'gift of a tree'}
                        h3LightHeading={
                            <>
                                Saving the planet
                                <br />
                            </>
                        }
                        h3BoldHeading={
                            (data?.sustainability_section?.gift_of_a_tree?.heading?.light_heading?.length &&
                                HTMLReactParser(
                                    data?.sustainability_section?.gift_of_a_tree?.heading?.light_heading
                                )) ||
                            HTMLReactParser('One eye at a time!')
                        }
                        descriptions={
                            (data?.sustainability_section?.gift_of_a_tree?.descriptions?.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section?.gift_of_a_tree?.descriptions
                                )) || [
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
                            ]
                        }
                        sectionImage={{
                            url:
                                data?.sustainability_section?.gift_of_a_tree?.image?.url ||
                                '/images/section-images/gift-of-a-tree.png',
                            width: 390,
                            height: 390
                        }}
                        sectionImageDesktop={{
                            url:
                                data?.sustainability_section?.gift_of_a_tree?.large_image?.url ||
                                '/images/section-images/gift-of-a-tree-desktop.png',
                            width: 554,
                            height: 496
                        }}
                        altText={
                            data?.sustainability_section?.gift_of_a_tree?.large_image?.alt ||
                            'Beautiful forest. Climate change awareness from plastic glasses and contact lenses.'
                        }
                    />

                    <ClimateChange
                        h2Heading={data?.sustainability_section?.clearer_vision?.subheading}
                        h3LightHeading={data?.sustainability_section?.clearer_vision?.heading?.light_heading}
                        h3BoldHeading={data?.sustainability_section?.clearer_vision?.heading?.bold_heading}
                        image={data?.sustainability_section?.clearer_vision?.image?.url}
                        largeImage={data?.sustainability_section?.clearer_vision?.large_image?.url}
                        descriptions={data?.sustainability_section?.clearer_vision?.descriptions}
                    />
                </SustainableSlider>
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    downloadFile={data?.email_contents?.download_file}
                    title="Get the guide to LASEK, PRK & PTK laser surgery"
                    description="Robotic laser vision correction"
                    pageSlug="lasek-prk"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || lasekFaqList}
                    titleLight="LASEK, PRK & PTK"
                    titleBold="Frequently asked questions"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'lasek-prk' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    price_finance: {
                        ...data?.acf?.price_finance
                    },
                    choosebest: {
                        ...data?.acf?.choosebest
                    },
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    }, // 2\
                    section_3: {
                        ...data?.acf?.section_3
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
                    }, // 2
                    clinicSlider: Array.isArray(data?.acf?.clinicSlider)
                        ? data?.acf.clinicSlider.map((sectionData: { descriptions: any[] | undefined }) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData?.descriptions)
                              };
                          })
                        : [],
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions)
                    },
                    section_7: {
                        ...data?.acf?.section_7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_7?.descriptions)
                    },
                    leftRightsection: Array.isArray(data?.acf?.leftRightsection)
                        ? data?.acf.leftRightsection.map((ListData) => {
                              return {
                                  ...ListData,
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
                              };
                          })
                        : [],
                    reviewSlider: Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData
                              };
                          })
                        : [],
                    sustainability_section: {
                        plastic_free_life: {
                            ...data?.acf?.sustainability_section?.plastic_free_life,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.plastic_free_life.descriptions
                            )
                        },
                        gift_of_a_tree: {
                            ...data?.acf?.sustainability_section?.gift_of_a_tree,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.gift_of_a_tree.descriptions
                            )
                        },
                        clearer_vision: {
                            ...data?.acf?.sustainability_section?.clearer_vision,
                            descriptions: convertArrayOfObjectsToStrings(
                                data?.acf?.sustainability_section?.clearer_vision.descriptions
                            )
                        }
                    }
                }
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
