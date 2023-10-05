/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletPoint,
    ClimateChange,
    CtaSection,
    CtaSection2,
    FinanceExtra,
    Masthead,
    PlasticFree,
    SideImageSection,
    StackColumnIcl
} from '@/components/page-sections';
import { iclFaqList } from '@/components/page-sections/Faq/faqList';
import { iclSliders } from '@/components/page-sections/FeaturedPatient';
import { leftRightListIcl } from '@/components/page-sections/LeftRight/leftRightList';
import { iclStackList } from '@/components/page-sections/StackedSection';
import { iclListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconPin from '@/icons/icon-pin-small.svg';
import SuitabilityLink from '@/page-sections/Masthead/SuitabilityLink';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import { getPageData } from '@/lib';
import { IclContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import MastheadImageLarge from '@/masthead/masthead-icl-large.png';
import MastheadImageSmall from '@/masthead/masthead-icl-small.png';
import MastheadImageMedium from '@/masthead/masthead-icl.png';
import HTMLReactParser from 'html-react-parser';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { FaPoundSign } from 'react-icons/fa';
import { Button } from 'src/components/Buttons';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});
const FeaturedPatient = dynamic(() => import('@/components/page-sections/FeaturedPatient/FeaturedPatient'), {
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});
const StackedSection = dynamic(() => import('@/components/page-sections/StackedSection/StackedSection'), {
    loading: () => <ComponentLoader />
});
const LeftRightSection = dynamic(() => import('@/components/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const SideVideoSection = dynamic(() => import('@/components/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends IclContentInterface, PageDataInterface<IclContentInterface> {}

interface IclProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /icl
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Icl({ seo, yoastJson, data }: IclProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();

    const heading = data?.masthead_heading || 'ICL Surgery in London';
    const subheading = data?.masthead_subheading || 'Implantable Contact Lenses';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    // LEFT RIGHT SECTION
    const leftRightsectiondata = data?.leftRightsection
        ? data.leftRightsection.map(
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
          )
        : null;

    // reviewSliderdata
    const reviewSliderdata: any =
        Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0
            ? data.reviewSlider.map((service) => {
                  return {
                      ...service,
                      description: service?.description,
                      name: service?.name,
                      title: service?.title
                  };
              })
            : null;

    // lensesSlider
    const lensesSliderdata: any =
        Array.isArray(data?.lensesSlider) && data.lensesSlider.length > 0
            ? data.lensesSlider.map(
                  (service: { desktopimage: any; image: any; title: any; descriptions: string[] | undefined }) => {
                      return {
                          ...service,
                          image: {
                              url: service?.image || '/images/section-images/biocompatibility.png',
                              width: 392,
                              height: 256
                          },
                          desktopImage: {
                              url: service?.desktopimage || '/images/section-images/lasek-ditch-specs-large.png',
                              width: 447,
                              height: 349
                          },
                          title: service?.title,
                          descriptions: stringArrayToElementArray(service?.descriptions)
                      };
                  }
              )
            : null;

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText=""
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || '£2,750 per eye'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                priceTextExtra={
                    <span className="font-mulishBold text-[1.8rem] lowercase leading-[2.4rem] text-heading2 first-letter:uppercase">
                        With 24 Months Interest
                        <br /> Free Finance available!
                    </span>
                }
                bannerClassName="lg:gap-12"
                suitabilityButton={
                    <div className="grid gap-6 md:gap-12">
                        <SuitabilityLink
                            text="Would you like to know if you are suitable for ICL?"
                            textClassName="max-w-[45rem]"
                        />
                    </div>
                }
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>
            {/* SECTIOn 1 */}
            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'Vision correction treatment'}
                h3LightHeading={
                    data?.section_1?.heading?.light_heading || 'London’s latest vision correction treatment'
                }
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'for glasses and contact lens wearers'}
                altText=""
                descriptions={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        <>
                            If you are ready to break from compromising with your everyday contact lenses or glasses,
                            take a look at our{' '}
                            <span className="font-mulishBold font-extrabold ">biocompatible ICL</span> lenses made by
                            EVO Visian - a groundbreaking Evolution in Visual Freedom!
                        </>
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/icl-vision-correction.png',
                    width: 370,
                    height: 328
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/icl-vision-correction-large.png',
                    width: 675,
                    height: 642
                }}
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightsectiondata ? leftRightsectiondata : leftRightListIcl} />
            </LazyComponent>
            {/* SECTIOn 4 */}
            <SideImageSection
                h2Heading={data?.section_4?.sub_heading || 'Life quality improvement'}
                h3LightHeading={
                    <>
                        {data?.section_4?.heading?.light_heading || 'Life after Implantable'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_4?.heading?.dark_heading || 'Contact Lenses!'}
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/icl-quality-improvement.png',
                    width: 370,
                    height: 328
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image || '/images/section-images/icl-quality-improvement-large.png',
                    width: 682,
                    height: 686
                }}
                altText=""
                textColumnImage={true}
                customColumn={
                    <StackColumnIcl
                        savingMoneytitle={data?.section_4?.rightsection?.savingMoneytitle}
                        savingmoneyContent={data?.section_4?.rightsection?.savingmoneyContent}
                        savingTimetitle={data?.section_4?.rightsection?.savingTimetitle}
                        savingtimeContent={data?.section_4?.rightsection?.savingtimeContent}
                        savingVisiontitle={data?.section_4?.rightsection?.savingVisiontitle}
                        savingvisionContent={data?.section_4?.rightsection?.savingvisionContent}
                        savingPlanettitle={data?.section_4?.rightsection?.savingPlanettitle}
                        savingplanetContent={data?.section_4?.rightsection?.savingplanetContent}
                    />
                }
                textColumnTopElements={
                    <ul className="ml-16 mt-12 grid gap-6">
                        <>
                            <li className="flex items-start justify-start gap-4">
                                <BulletPoint />
                                <p className="font-mulishBold">
                                    {data?.section_4?.lists?.list_1 || '99.4% of people would choose to have ICL again'}
                                </p>
                            </li>
                            <li className="flex items-start justify-start gap-4">
                                <BulletPoint />

                                <p className="font-mulishBold">
                                    {data?.section_4?.lists?.list_2 || '2,000,000+ ICL procedures worldwide'}
                                </p>
                            </li>
                            <li className="flex items-start justify-start gap-4">
                                <BulletPoint />
                                <p className="font-mulishBold">
                                    {data?.section_4?.lists?.list_3 || '20+ years of premium ICL performance'}
                                </p>
                            </li>
                        </>
                    </ul>
                }
            />
            {/* SECTIOn 7 */}
            <SideImageSection
                h3LightHeading={
                    <>
                        {data?.section_7?.heading?.light_heading || 'Our Implantable Contact Lenses'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_7?.heading?.bold_heading || 'Are transparent in price too!'}
                sectionImage={{
                    url: data?.section_7?.image || '/images/section-images/icl-transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_7?.large_image || '/images/section-images/icl-transparent-price-large.png',
                    width: 680,
                    height: 558
                }}
                altText={
                    data?.section_7?.alt_text ||
                    'Happy couple on a hike in the mountains after correcting their long-sighted vision.'
                }
                textColumnExtras={
                    <>
                        <FinanceExtra
                            priceText={data?.section_7?.price_title || '£2750 per eye'}
                            priceDescription={
                                data?.section_7?.price_subheading || 'With 10 Months Interest-Free Finance available!'
                            }
                            //                            These line needs to be fixed I'm commenting out now
                            //                            paragraphs={
                            //                                (data?.section_7?.price_description?.length &&
                            //                                    HTMLReactParser(data?.section_7?.price_description)) || [
                            //                                    `The best ICL surgery price in London, saving an average of £2,000 in your treatment when you
                            //                            come to My-iClinic.`
                            //                                ]
                            //                            }
                            paragraphs={
                                data?.section_7?.price_description ||
                                `The best ICL surgery price in London, saving an average of £2,000 in your treatment when you
                            come to My-iClinic.`
                            }
                            list={
                                (data?.section_7?.lists?.length &&
                                    stringArrayToElementArray(data?.section_7?.lists)) || [
                                    '0% finance available',
                                    <>
                                        One dedicated ICL specialist
                                        <br />
                                        for your treatment
                                    </>,
                                    'Most affordable price in London'
                                ]
                            }
                        />
                        <Button
                            type="anchor"
                            link="/icl/price"
                            icon={
                                <FaPoundSign className="h-[1.7rem] w-[1.7rem] fill-white transition-all duration-500 group-hover/button:fill-brand" />
                            }
                            text={data?.section_7?.button_text || 'Pricing & Financing'}
                            iconPosition="left"
                            className="group/button mt-6 !gap-2 justify-self-center md:justify-self-start"
                        />
                    </>
                }
            />
            {/* SECTIOn 6 */}
            <CtaSection2
                image={{
                    url: data?.section_6?.image,
                    width: 431,
                    height: 360
                }}
                imageLarge={{
                    url: data?.section_6?.imageLarge,
                    width: 636,
                    height: 554
                }}
                title={data?.section_6?.title || 'Book a consultation today to see if ICL eye surgery is right for you'}
                descriptions={
                    (data?.section_6?.descriptions?.length && data?.section_6?.descriptions) || [
                        `Discuss your options and eligibility for implantable contact lens surgery with one of our
                            experts.`,
                        `We will give you clear advice on your suitability and best vision correction
                            options for your circumstances.`
                    ]
                }
            />

            {/* <LazyComponent>
                <BottomBanner
                    bannerImage={IclBannerImage}
                    bannerTitle="Book a consultation today to see if ICL eye surgery is right for you"
                    bannerBg="/images/section-images/icl-banner-bg-large.png"
                    bannerDescription="Discuss your options and eligibility for implantable contact lens surgery with one of our experts. We will give you clear advice on your suitability and best vision correction options for your circumstances."
                />
            </LazyComponent> */}

            {/* SECTION 8 */}
            <LazyComponent>
                <StackedSection
                    stackList={lensesSliderdata ? lensesSliderdata : iclStackList}
                    h3LightHeading={
                        <>
                            {(data?.section_8?.heading?.light_heading?.length &&
                                HTMLReactParser(data?.section_8?.heading?.light_heading)) ||
                                'The benefits of  <br /> Implantable Contact  <br /> '}
                        </>
                    }
                    h3BoldHeading={
                        <>
                            {(data?.section_8?.heading?.bold_heading?.length &&
                                HTMLReactParser(data?.section_8?.heading?.bold_heading)) ||
                                'Lenses for Clear, long- <br />  term vision!'}
                        </>
                    }
                />
            </LazyComponent>

            <div className="md:mt-24"></div>
            {/* SECTION 3 */}
            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_3?.sub_heading || 'ICL Patient'}
                    h3Title={data?.section_3?.heading || 'Life after ICL Treatment'}
                    bandImageDescription={
                        (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                            `Now I wake up and I don’t have to put in contacts.`,
                            'I open my eyes and I can actually see myself in the mirror without squinting.',
                            `I don’t need contact lenses to do my make up in the mornings anymore.`,
                            `I just feel a lot more confident. I feel as though I have my eyes, not some plastic thing on my face.`
                        ]
                    }
                    bandImageTitle={data?.section_3?.bandImageTitle || 'Eliete'}
                    bandImageURL={data?.section_3?.bandImageURL || '/images/section-images/eliete.png'}
                    reviewDescription={
                        (data?.section_3?.review_Description?.length && data?.section_3?.review_Description) || [
                            `It’s just been amazing and I would do it again…`
                        ]
                    }
                    reviewTitle={data?.section_3?.reviewtitle || 'Thank you My-iClinic'}
                    sliders={iclSliders}
                    bandColor="bg-[#7000FF]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={reviewSliderdata ? reviewSliderdata : iclListCataract} />
            </LazyComponent>
            {/* section_2 */}
            <LazyComponent>
                <SideVideoSection
                    h2Heading={data?.section_2?.heading || 'Is ICL for me?'}
                    noPin
                    beforeAttribute
                    videoUrl={data?.section_2?.videoUrl || '/videos/icl.mp4'}
                    videoPoster={data?.section_2?.videoPoster || 'txmJk2sY-yI'}
                    textColumnExtras={
                        <div className="mt-20 ml-14 grid gap-6">
                            <div className="grid grid-cols-[auto_1fr] items-center gap-y-4 gap-x-6">
                                <span className="font-latoBold text-[2rem] leading-[2.4rem] text-heading2">
                                    {data?.section_2?.lists?.first_data?.percentage || '99.4%'}
                                </span>
                                <Image src={IconPin} alt="" />
                                <div className="col-span-2">
                                    {(data?.section_2?.lists?.first_data?.text?.length &&
                                        HTMLReactParser(data?.section_2?.lists?.first_data?.text)) ||
                                        HTMLReactParser('Of peoples surveyed would have the <br /> procedure again')}
                                </div>
                            </div>
                            <div className="grid grid-cols-[auto_1fr] items-center gap-y-4 gap-x-6">
                                <span className="font-latoBold text-[2rem] leading-[2.4rem] text-heading2">
                                    {data?.section_2?.lists?.second_data?.percentage || '2 Million'}
                                </span>
                                <Image src={IconPin} alt="" />
                                <p className="col-span-2">
                                    {data?.section_2?.lists?.second_data?.text || 'Lenses distributed'}
                                </p>
                            </div>
                        </div>
                    }
                />
            </LazyComponent>

            <CtaSection />
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
                        h2Heading={data?.sustainability_section?.plastic_free_life?.subheading || 'plastic free life'}
                        h3LightHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.light_heading ||
                            'Green living with'
                        }
                        h3BoldHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.bold_heading ||
                            'Implantable Contact Lenses'
                        }
                        descriptions={
                            (data?.sustainability_section?.plastic_free_life?.descriptions?.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section?.plastic_free_life?.descriptions
                                )) || [
                                `The most sustainable, green living lifestyle is when you have a plastic free eye-style.
                                 When you have Implantable Contact Lenses you are saying goodbye to the continuous plastic
                                 waste produced by glasses and contact lenses!`
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

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title="ICL Patient Information"
                    pageSlug="icl"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || iclFaqList}
                    titleLight="Implantable contact lenses"
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
        const data: WpPageResponseInterface<IclContentInterface> = await getPageData({ slug: 'icl' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2
                    }, // 2\
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions),
                        review_Description: convertArrayOfObjectsToStrings(data?.acf?.section_3?.review_Description)
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4
                    }, // 2
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
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_7?.lists)
                    },
                    section_8: {
                        ...data?.acf?.section_8
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
                    lensesSlider: Array.isArray(data?.acf?.lensesSlider)
                        ? data?.acf.lensesSlider.map((sectionData: { descriptions: any[] | undefined }) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData?.descriptions)
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
