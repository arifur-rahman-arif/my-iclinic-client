import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { liskListCataract } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData, getTreatments } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lasik-large.png';
import MastheadImageSmall from '@/masthead/masthead-lasik-small.png';
import MastheadImageMedium from '@/masthead/masthead-lasik.png';
import { lasikFaqList } from '@/page-sections/Faq/faqList';
import { lasikSliders } from '@/page-sections/FeaturedPatient';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import {
    ClimateChange,
    CtaSection2,
    FinanceExtra,
    FullWidthImageSection,
    Masthead,
    PlasticFree,
    SideImageSection
} from '@/page-sections/index';
import { leftRightListLasik } from '@/page-sections/LeftRight/leftRightList';
import { FinanceCalculatorButton, MastheadCtaButtons } from '@/page-sections/Masthead/MastheadICL';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { lasikStackList } from '@/page-sections/StackedSection';
import ClearVisionImage from '@/section-images/clear-vision-lasik.png';
import LasikImageLarge from '@/section-images/lasik-banner-large.png';
import LasikImage from '@/section-images/lasik-banner.png';
import { LasiklondonContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPoundSign } from 'react-icons/fa';
import { Button } from 'src/components/Buttons';

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
const SideVideoSection = dynamic(() => import('@/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});
const FinanceCalculatorSection = dynamic(() => import('@/page-sections/icl-components/FinanceCalculatorSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends LasiklondonContentInterface, PageDataInterface<LasiklondonContentInterface> {}

interface LasikProps {
    filteredTreatments: TreatmentInterface[];
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * LASIK page component for the App
 *
 * Url: /lasik-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Lasik({ seo, yoastJson, data, filteredTreatments }: LasikProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'LASIK Laser Eye Surgery London';
    const subheading =
        data?.masthead_subheading ||
        'The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!';

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

    //
    const lasikSliderdata: any =
        Array.isArray(data?.lasikSlider) && data.lasikSlider.length > 0
            ? data.lasikSlider.map(
                  (service: { desktopimage: any; image: any; title: any; descriptions: string[] | undefined }) => {
                      return {
                          ...service,
                          image: {
                              url: service?.image || '/images/section-images/walking-into-room.png',
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

    // reviewSliderdata
    const reviewSliderdata: any =
        Array.isArray(data?.reviewSlider) && data.reviewSlider.length > 0
            ? data.reviewSlider.map((service) => {
                  return {
                      ...service,
                      title: service?.title,
                      name: service?.name,
                      description: service?.description
                  };
              })
            : null;

    /// /reviewimageSlider
    const reviewimageSliderdata: any =
        Array.isArray(data?.reviewimageSlider) && data.reviewimageSlider.length > 0
            ? data.reviewimageSlider.map((service) => {
                  return {
                      ...service,
                      imageURL: service?.imageURL
                  };
              })
            : null;

    return (
        <Page
            title="LASIK Laser Eye Surgery London"
            description="The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!"
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText=""
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || '£2,400 per eye'}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                bannerClassName="lg:gap-12"
                // suitabilityButton={
                //     <div className="grid gap-6 md:gap-12">
                //         <SuitabilityLink text="Are You Suitable For Laser Eye Surgery" textClassName="max-w-[26rem]" />
                //     </div>
                // }
                suitabilityButton={
                    <div className="grid gap-6">
                        <FinanceCalculatorButton title1ClassName="text-brand" />
                        <MastheadCtaButtons
                            button1Class="hover:!border-[#003E79] !border-2"
                            button2Class="text-[#003E79] border-[#003E79] hover:!bg-[#003E79] hover:!border-[#003E79] hover:text-white"
                        />
                    </div>
                }
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <LazyComponent>
                <FinanceCalculatorSection iclTreatments={filteredTreatments} />
            </LazyComponent>

            {/* SECTION 1 */}
            <FullWidthImageSection
                h3Title={data?.section_1?.heading || 'LASIK may be the suitable alternative to correct your vision'}
                description={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        `Do you own multiple pairs of reading glasses or varifocals? While they’re a fact of aging, you most likely feel you shouldn't need them yet. Our lifestyles shouldn't be compromised by the limitations of our vision.`,
                        ` If you’d really like to get rid of your glasses, but you’re not sure where to begin, our LASIK procedure is safe and effective for someone like you.`
                    ]
                }
                altText=""
                image={data?.section_1?.image || LasikImage}
                desktopImage={data?.section_1?.large_image || LasikImageLarge}
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightsectiondata || leftRightListLasik} />
            </LazyComponent>
            {/* section 2 */}
            <FullWidthImageSection
                h3Title={data?.section_2?.title || 'Whatever the view,'}
                boldHeading={
                    <>
                        {data?.section_2?.bold_heading_1 || 'Remember it with'}
                        <br />
                        {data?.section_2?.bold_heading_2 || 'Clear vision'}
                    </>
                }
                altText=""
                image={data?.section_2?.image || ClearVisionImage}
                desktopImage={data?.section_2?.large_image || ClearVisionImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0 md:!py-0"
                overlayAnimation={true}
                textColumnOverlay
                sectionClass="bg-brandLight relative"
            />
            {/* SECTION 3 */}
            <LazyComponent>
                <SideVideoSection
                    h2Heading={data?.section_3?.heading || 'What our Lasik patients say after treatment'}
                    h3Heading={data?.section_3?.sub_heading || 'Hear from a patient'}
                    descriptions={
                        (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                            `When you choose My-iClinic’s 5-star rated services, you can rest assured that you’ve made the best possible choice for your eyesight.`,
                            `Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.`
                        ]
                    }
                    videoUrl={data?.section_3?.videoUrl || '/videos/lasik.mp4'}
                    videoPoster={data?.section_3?.videoPoster || 'oO_Sh8m3fIE'}
                />
            </LazyComponent>
            {/* section 4 */}
            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_4?.heading || 'LASIK Patient'}
                    h3Title={data?.section_4?.sub_heading || 'Life after LASIK laser eye surgery'}
                    bandImageDescription={
                        (data?.section_4?.branddescriptions?.length && data?.section_4?.branddescriptions) || [
                            `From the first moment I stepped in, the detail and the quality of care was amazing.`
                        ]
                    }
                    bandImageTitle={data?.section_4?.brandImageTitle || 'Helen'}
                    bandImageURL={data?.section_4?.bandImageURL || '/images/section-images/helen.png'}
                    reviewDescription={data?.section_4?.branddescriptions || [`Absolutely phenomenal.`]}
                    reviewTitle={
                        <>
                            {HTMLReactParser(data?.section_4?.reviewTitle) ||
                                HTMLReactParser('I take every opportunity to <br /> recommend this Clinic')}
                        </>
                    }
                    sliders={reviewimageSliderdata || lasikSliders}
                    bandColor="bg-[#FF5C00]"
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={reviewSliderdata || liskListCataract} />
            </LazyComponent>
            {/* SECTION 5 */}
            <SideImageSection
                h2Heading={data?.section_5?.sub_heading || 'Transparent Price'}
                h3LightHeading={data?.section_5?.heading?.light_heading || 'LASIK Laser eye surgery'}
                h3BoldHeading={data?.section_5?.heading?.bold_heading || 'cost'}
                descriptions={
                    (data?.section_5?.descriptions?.length && data?.section_5?.descriptions) || [
                        `We do our best to understand your needs and aims so we can offer you the best vision correction options with a fair, transparent price!`
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/lasik-transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image || '/images/section-images/lasik-transparent-price-large.png',
                    width: 650,
                    height: 558
                }}
                altText=""
                textColumnExtras={
                    <>
                        <FinanceExtra
                            priceText={data?.section_5?.price || '£2,400 per eye'}
                            priceDescription={
                                data?.section_5?.priceDescription || 'With 12 Months Interest-Free Finance available!'
                            }
                            paragraphs={
                                data?.section_5?.paragraphs ||
                                `The best laser eye surgery price in London, saving an average of £1,000 for your treatment
                        when you come to My-iClinic. `
                            }
                            list={
                                (data?.section_5?.list?.length && stringArrayToElementArray(data?.section_5?.list)) || [
                                    <>
                                        One dedicated Lasik specialist for <br /> your treatment
                                    </>,
                                    'Most affordable price in London'
                                ]
                            }
                        />
                        <Button
                            type="anchor"
                            link="/lasik-london/price"
                            icon={
                                <FaPoundSign className="h-[1.7rem] w-[1.7rem] fill-white transition-all duration-500 group-hover/finance:fill-heading2" />
                            }
                            text={data?.section_5?.button_text || 'Pricing & Financing'}
                            iconPosition="left"
                            className="group/finance mt-6 !gap-2 justify-self-center md:justify-self-start"
                        />
                    </>
                }
            />

            <SideImageSection
                h2Heading={data?.section_6?.sub_heading || 'better vision'}
                h3LightHeading={data?.section_6?.heading.light_heading || 'Achieve better vision'}
                h3BoldHeading={data?.section_6?.heading?.bold_heading || 'with LASIK today'}
                descriptions={
                    (data?.section_6?.descriptions?.length && data?.section_6?.descriptions) || [
                        <>
                            If you’ve made the decision to improve your eyesight – whether you currently have{' '}
                            <LinkText
                                href="/myopia"
                                indicatorColor="bg-blue"
                                className="font-mulishBold font-extrabold text-blue"
                            >
                                Myopia,
                            </LinkText>{' '}
                            <span className="font-mulishBold font-extrabold">Hyperopia</span>{' '}
                            <LinkText
                                href="/astigmatism-treatment"
                                indicatorColor="bg-blue"
                                className="font-mulishBold font-extrabold text-blue"
                            >
                                Astigmatism,
                            </LinkText>{' '}
                            LASIK could change your life.
                        </>,
                        <>
                            To find out if LASIK surgery is right for you, book an in-person assessment with one of our
                            LASIK specialists today to begin a life of normal vision.
                        </>
                    ]
                }
                sectionImage={{
                    url: data?.section_6?.image || '/images/section-images/better-vision-lasik.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_6?.large_image || '/images/section-images/better-vision-lasik-large.png',
                    width: 682,
                    height: 686
                }}
                positionReversed={true}
                textColumnExtras={
                    <div className="flex flex-col items-center justify-start gap-12 sm:flex-row">
                        <div className="place-items-end xl:grid">
                            <BookConsultation buttonClassName="group/consultation transition-all border-2 border-heading2 duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center gap-5 bg-heading2 grid-flow-col rounded-primary">
                                <button className="" aria-label="Request a callback">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                        />
                                        <path
                                            d="M13.334 1.66699V5.00033"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                        />
                                        <path
                                            d="M6.66602 1.66699V5.00033"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                        />
                                        <path
                                            d="M2.5 8.33301H17.5"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-all duration-500 group-hover/consultation:stroke-heading2"
                                        />
                                    </svg>

                                    <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-heading2">
                                        Request a callback
                                    </span>
                                </button>
                            </BookConsultation>
                        </div>

                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-chat.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <button
                                className="relative block cursor-pointer font-mulishBold text-[1.6rem] leading-[2.4rem]"
                                onClick={openFreshdeskChat}
                            >
                                Chat with us
                            </button>
                        </div>
                    </div>
                }
            />
            {/* section 7  */}
            <LazyComponent>
                <StackedSection
                    stackList={lasikSliderdata || lasikStackList}
                    h3LightHeading={data?.section_7?.heading?.light_heading || 'Why do our patients choose our'}
                    descriptions={
                        (data?.section_7?.descriptions?.length && data?.section_7?.descriptions) || [
                            `The answer is simple – they want to escape limitations and take charge of their life`
                        ]
                    }
                    h3BoldHeading={data?.section_7?.heading?.bold_heading || 'LASIK?'}
                />
            </LazyComponent>
            {/* section 8  */}
            <CtaSection2
                title={data?.section_8?.heading || 'Do you think LASIK could be the right treatment for you?'}
            />

            {/* <LazyComponent>
                <BottomBanner
                    bannerImage={LasikCtaBannerImage}
                    bannerBg="/images/section-images/lasik-banner-bg.png"
                    bannerTitle="Do you think LASIK could be the right treatment for you?"
                />
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
            {/* section 9  */}
            <LazyComponent>
                <SustainableSlider>
                    <PlasticFree
                        h2Heading={data?.sustainability_section?.plastic_free_life?.subheading || 'plastic free life'}
                        h3LightHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.light_heading ||
                            'LASIK is the biggest step in living'
                        }
                        h3BoldHeading={
                            data?.sustainability_section?.plastic_free_life?.heading?.bold_heading ||
                            'a sustainable, plastic free life!'
                        }
                        descriptions={
                            (data?.sustainability_section?.plastic_free_life?.descriptions?.length &&
                                data?.sustainability_section?.plastic_free_life?.descriptions) || [
                                `The most sustainable, green living lifestyle is when you have a plastic free eye-style. When you have Implantable Contact Lenses you are saying goodbye to the continuous plastic waste produced by glasses and contact lenses!`
                            ]
                        }
                        image={data?.sustainability_section?.plastic_free_life?.image?.url}
                        largeImage={data?.sustainability_section?.plastic_free_life?.large_image?.url}
                        altText={data?.sustainability_section?.plastic_free_life?.large_image?.alt}
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
                        h2Heading={data?.sustainability_section?.gift_of_a_tree?.subheading || 'gift of a tree'}
                        h3LightHeading={HTMLReactParser(
                            data?.sustainability_section?.gift_of_a_tree?.heading.light_heading ||
                                'Saving the planet <br />'
                        )}
                        h3BoldHeading={
                            (data?.sustainability_section?.gift_of_a_tree?.heading?.light_heading?.length &&
                                HTMLReactParser(
                                    data?.sustainability_section?.gift_of_a_tree?.heading?.light_heading
                                )) ||
                            HTMLReactParser('One eye at a time!')
                        }
                        descriptions={
                            (data?.sustainability_section?.gift_of_a_tree?.descriptions?.length &&
                                data?.sustainability_section?.gift_of_a_tree?.descriptions) || [
                                `When undergoing laser eye surgery, you may not realize it but you are already making a positive
                         difference to the environment. For every 10 years of contact lens wearing the amount of plastic
                          that ends up in the ocean is roughly the same as your own body weight.`,
                                ` <span class="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                    Our gift to you…
                                </span>`,
                                `We want to take our impact on the environment a step further and this is where the gift of a tree comes in!`,
                                ` <span class="font-latoBold text-[2rem] normal-case leading-[2.4rem]">
                                    Here at My-iClinic we give all of our laser patients a real forest tree!
                                </span>`,
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
                    title={
                        <>
                            Get the guide to
                            <br />
                            LASIK treatment
                        </>
                    }
                    description="Robotic laser vision correction"
                    pageSlug="lasik-london"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || lasikFaqList}
                    titleLight="LASIK"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'lasik-london' });

        const treatments = await getTreatments();
        let filteredTreatments = treatments.filter((treatment) => treatment.name === 'LASIK');

        /**
         * Updates the `filteredTreatments` array by mapping each treatment object and setting the 'active' property based on the index.
         *
         * @param {Array<Object>} filteredTreatments - The array of cataract treatment objects to be updated.
         * @returns {Array<Object>} - The updated array of cataract treatment objects.
         */
        filteredTreatments = filteredTreatments.map((treatment, index) => ({
            ...treatment,
            active: index === 0
        }));

        return {
            /* eslint-disable */
            props: {
                filteredTreatments,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2
                    }, // VIDEO
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4,
                        branddescriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.branddescriptions),
                        reviewDescription: convertArrayOfObjectsToStrings(data?.acf?.section_4?.reviewDescription)
                    }, // 2
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf?.section_5?.list)
                    }, // 2

                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    }, // 2

                    section_7: {
                        ...data?.acf?.section_7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_7?.descriptions)
                    }, // 2
                    section_8: {
                        ...data?.acf?.section_8
                    }, // 2
                    leftRightsection: Array.isArray(data?.acf?.leftRightsection)
                        ? data?.acf.leftRightsection.map((ListData) => {
                              return {
                                  ...ListData,
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
                              };
                          })
                        : [],
                    lasikSlider: Array.isArray(data?.acf?.lasikSlider)
                        ? data?.acf.lasikSlider.map((sectionData: { descriptions: any[] | undefined }) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData?.descriptions)
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
                    reviewimageSlider: Array.isArray(data?.acf?.reviewimageSlider)
                        ? data?.acf.reviewimageSlider.map((ListData) => {
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
