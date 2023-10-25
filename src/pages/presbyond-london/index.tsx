/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import SuitabilityLink from '@/page-sections/Masthead/SuitabilityLink';
import Image from 'next/image';
import { normalSlideListPresbyond } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import HTMLReactParser from 'html-react-parser';
import { getPageData } from '@/lib';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
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
import { PresbeyondlondonContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FaPoundSign } from 'react-icons/fa';
import { Button } from 'src/components/Buttons';
import React from 'react';

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

interface DataInterface extends PresbeyondlondonContentInterface, PageDataInterface<PresbeyondlondonContentInterface> {}

interface PresbyondProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /presbyond-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Presbyond({ seo, yoastJson, data }: PresbyondProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Presbyond Laser Treatment London';
    const subheading = data?.masthead_subheading || 'Correct your vision and say goodbye to reading glasses';

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
                          src={item?.mobileImage || '/images/section-images/presbyond-consultation.png'}
                          width={390}
                          height={390}
                          quality={70}
                          className="rounded-primary md:hidden"
                          alt=""
                      />
                  ),
                  desktopImage: (
                      <Image
                          src={item?.desktopImage || '/images/section-images/presbyond-consultation.png'}
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
                      title: service?.title,
                      name: service?.name,
                      description: service?.description
                  };
              })
            : null;

    // laserSlider
    const laserSliderdata: any =
        Array.isArray(data?.laserSlider) && data.laserSlider.length > 0
            ? data.laserSlider.map(
                  (service: { desktopimage: any; image: any; title: any; descriptions: string[] | undefined }) => {
                      return {
                          ...service,
                          image: {
                              url: service?.image || '/images/section-images/laser-surgery-card.png',
                              width: 329,
                              height: 220
                          },
                          desktopImage: {
                              url: service?.desktopimage || '/images/section-images/lasek-ditch-specs-large.png',
                              width: 447,
                              height: 349
                          },
                          boxWidth: '51.4rem',
                          title: service?.title,
                          descriptions: stringArrayToElementArray(service?.descriptions)
                      };
                  }
              )
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
            title="Presbyond Laser eye surgery In London"
            description="Presbyond laser eye surgery is a vision correction treatment to fix presbyopia (long-sightedness). Learn about the treatments available and how we can help."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText="Presbyopic woman reading a book with her glasses on."
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                bannerClassName="lg:gap-12"
                suitabilityButton={
                    <div className="grid gap-6 md:gap-12">
                        <SuitabilityLink text="Are You Suitable For Laser Eye Surgery" textClassName="max-w-[26rem]" />
                    </div>
                }
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            {/* <UspSection list={presbyondUspList} /> */}

            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'Vision correction treatment'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'Getting rid of your reading glasses with'}
                h3BoldHeading={
                    <>
                        {HTMLReactParser(data?.section_1?.heading?.bold_heading) ||
                            HTMLReactParser('our Presbyond <br /> Laser Treatment')}
                    </>
                }
                altText="Woman with reading glasses has a headache from watching her laptop screen. She is
                long sighted, suffering from presbyopia."
                //                descriptions={
                //                    (data?.section_1?.description && HTMLReactParser(data?.section_1?.description)) || [
                //                        `Always wanted to know what your vision could be like without the need for reading
                //                    glasses?`,
                //                        `If you suffer from presbyopia (also known as long sightedness, farsightedness,
                //                        hypermetropia and hyperopia), our Presbyond laser surgery can fix your refractive error
                //                        for an easier, clearer way of life.`
                //                    ]
                //                }
                descriptions={
                    (data?.section_1?.description?.length &&
                        stringArrayToElementArray(data?.section_1?.description)) || [
                        `Always wanted to know what your vision could be like without the need for reading
                    glasses?`,
                        `If you suffer from presbyopia (also known as long sightedness, farsightedness,
                        hypermetropia and hyperopia), our Presbyond laser surgery can fix your refractive error
                        for an easier, clearer way of life.`
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/presbyond-laser-treatment.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/presbyond-laser-treatment-desktop.png',
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
                <LeftRightSection childrenList={leftRightsectiondata ? leftRightsectiondata : leftRightListPresbyond} />
            </LazyComponent>
            {/* SECTION 2 */}
            <FullWidthImageSection
                boldHeading={
                    data?.section_2?.heading ||
                    'What to expect after your Presbyond Treatment with our London specialists.'
                }
                altText={
                    data?.section_2?.alt_text ||
                    'Older man with clear vision looking at his fit bit after running a marathon.'
                }
                //                description={
                //                    (data?.section_2?.description?.length && HTMLReactParser(data?.section_2?.description)) ||
                //                }
                description={
                    (data?.section_2?.description?.length &&
                        stringArrayToElementArray(data?.section_2?.description)) || [
                        'Saving vision, time, money and the planet! Having Presbyond is a brilliant achievement for your vision, your time, your long-term savings and the sustainability of our planet. We want all of our patients to be well-informed about their recovery process after Presbyond surgery!',
                        'Our team takes your aftercare very seriously, which is why our laser specialist will have follow up assessments and appointments with you throughout the year after your treatment date.'
                    ]
                }
                videoUrl={data?.section_2?.videoUrl || '/videos/presbyond.mp4'}
                videoPoster={data?.section_2?.videoPoster || 'IEVaY-Rj4RA'}
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
            {/* SECTION 3 */}
            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_3?.sub_heading || 'Presbyond Patient'}
                    h3Title={data?.section_3?.heading || 'Life after Presbyond laser eye surgery'}
                    //                    bandImageDescription={
                    //                        (data?.section_3?.brand_image_description?.length &&
                    //                            HTMLReactParser(data?.section_3?.brand_image_description)) || [
                    //                            `My experience was amazing. The whole team is very kind and exceedingly professional.`,
                    //                            'The after care is exceptional and I would highly recommend them.'
                    //                        ]
                    //                    }
                    bandImageDescription={[
                        `My experience was amazing. The whole team is very kind and exceedingly professional.`,
                        'The after care is exceptional and I would highly recommend them.'
                    ]}
                    bandImageTitle={data?.section_3?.bandImageTitle || 'Hasina'}
                    bandImageURL={data?.section_3?.bandImageURL || '/images/section-images/hasina.jpg'}
                    reviewDescription={
                        (data?.section_3?.review_Description?.length && data?.section_3?.review_Description) || [
                            `Being able to see again without glasses is the best feeling and the best money I have ever spent!!!`
                        ]
                    }
                    reviewTitle={data?.section_3?.reviewtitle || 'Thank you My-iClinic'}
                    sliders={reviewimageSliderdata ? reviewimageSliderdata : presbyondSliders}
                />
            </LazyComponent>

            <LazyComponent>
                <NormalSlideSection sliderList={reviewSliderdata ? reviewSliderdata : normalSlideListPresbyond} />
            </LazyComponent>

            {/* SECTION 4 */}
            <SideImageSection
                h2Heading={data?.section_4?.sub_heading || 'Transparent Price'}
                h3LightHeading={
                    <>
                        {data?.section_4?.heading?.light_heading || 'Clearer vision with an all inclusive,'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_4?.heading?.dark_heading || 'Transparent cost'}
                //                descriptions={
                //                    (data?.section_4?.description?.length && HTMLReactParser(data?.section_4?.description)) || [
                //                        `Having to wear glasses and contact lenses is a big financial burden overtime. We never subject the safety of people’s eye health to a cheap deal like glasses and contact lenses do and we also understand you don’t want to pay more than what’s fair.`,
                //                        `Our advanced Presbyond treatment with our London specialists is an all inclusive cost with a dedicated team for your aftercare!`
                //                    ]
                //                }
                descriptions={
                    (data?.section_4?.description?.length &&
                        stringArrayToElementArray(data?.section_4?.description)) || [
                        `Having to wear glasses and contact lenses is a big financial burden overtime. We never subject the safety of people’s eye health to a cheap deal like glasses and contact lenses do and we also understand you don’t want to pay more than what’s fair.`,
                        `Our advanced Presbyond treatment with our London specialists is an all inclusive cost with a dedicated team for your aftercare!`
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image || '/images/section-images/transparent-price-desktop.png',
                    width: 689,
                    height: 558
                }}
                altText="Happy couple on a hike in the mountains after correcting their long-sighted vision."
                textColumnExtras={
                    <>
                        <FinanceExtra
                            priceText={data?.section_4?.price_title || '£2,400 per eye'}
                            priceDescription={
                                data?.section_4?.price_subheading || 'With 10 Months Interest-Free Finance available!'
                            }
                            paragraphs={
                                (data?.section_4?.price_description?.length && data?.section_4?.price_description) ||
                                `The best laser eye surgery price in London, saving an average of £1,000 for your treatment when you come
                            to My-iClinic.
                                Want to know more about our <LinkText
                                        href="/pricing-and-financing/financing-your-treatment"
                                        className="font-mulishBold font-extrabold text-blue"
                                        indicatorColor="bg-blue">
                                        Finance Options?
                                    </LinkText>
                                </>`
                            }
                            list={
                                (data?.section_4?.lists?.length && data?.section_4?.lists) || [
                                    <>
                                        One dedicated presbyond specialist
                                        <br />
                                        for your treatment
                                    </>,
                                    'Most affordable price in London'
                                ]
                            }
                        />

                        <Button
                            type="anchor"
                            link="/presbyond-london/price"
                            icon={
                                <FaPoundSign className="h-[1.7rem] w-[1.7rem] fill-white transition-all duration-500 group-hover/finance:fill-heading2" />
                            }
                            text={data?.section_4?.button_text || 'Pricing & Financing'}
                            iconPosition="left"
                            className="group/finance mt-6 !gap-2 justify-self-center md:justify-self-start"
                        />
                    </>
                }
            />
            {/* CTA SECTION */}
            <CtaSection
                title={data?.sectionspeakteam?.title || 'Speak To Our Friendly Team'}
                subtitle={data?.sectionspeakteam?.sub_heading || 'OUR OPTIONS AVAILABLE'}
            />
            {/* SECTION 5 */}
            <LazyComponent>
                <StackedSection
                    stackList={laserSliderdata ? laserSliderdata : presbyondStackList}
                    h3LightHeading={data?.section_5?.heading?.light_heading || 'Why do our patients choose our'}
                    h3BoldHeading={data?.section_5?.heading?.bold_heading || 'Presbyond laser surgery?'}
                    descriptions={
                        (data?.section_5?.descriptions?.length && data?.section_5?.descriptions) || [
                            `The answer is simple – they want to escape limitations and take charge of their life.`
                        ]
                    }
                />
            </LazyComponent>

            <CtaSection2
                title={data?.section_6?.title}
                image={data?.section_6?.image}
                imageLarge={data?.section_6?.imagelarge}
                descriptions={
                    (data?.section_6?.descriptions?.length && data?.section_6?.descriptions) || [
                        <>
                            Saying goodbye to glasses after cataract surgery is now possible with Presbyond laser
                            treatment! We can book a private presbyond consultation from 3 to 6 months after your
                            cataract surgery.
                        </>
                    ]
                }
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
                        h2Heading={data?.sustainability_section?.plastic_free_life?.subheading || 'plastic free life'}
                        h3LightHeading={
                            data?.sustainability_section?.plastic_free_life?.heading.light_heading ||
                            'Presbyond is the key to living'
                        }
                        h3BoldHeading={
                            data?.sustainability_section?.plastic_free_life?.heading.bold_heading ||
                            'a sustainable, plastic free life!'
                        }
                        descriptions={
                            (data?.sustainability_section?.plastic_free_life?.descriptions?.length &&
                                data?.sustainability_section.plastic_free_life.descriptions) || [
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
                        h3LightHeading={HTMLReactParser(
                            data?.sustainability_section?.gift_of_a_tree?.heading.light_heading ||
                                'Saving the planet <br />'
                        )}
                        h3BoldHeading={HTMLReactParser(
                            data?.sustainability_section?.gift_of_a_tree?.heading.bold_heading || 'One eye at a time!'
                        )}
                        descriptions={
                            (data?.sustainability_section?.gift_of_a_tree?.descriptions.length &&
                                data?.sustainability_section.gift_of_a_tree.descriptions) || [
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
                <PdfDownload
                    title="Presbyond Patient Information"
                    pageSlug="presbyond-london"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || presbyondFaqList}
                    titleLight="Presbyond"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'presbyond-london' });

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
                        description: convertArrayOfObjectsToStrings(data?.acf?.section_1?.description)
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2,
                        description: convertArrayOfObjectsToStrings(data?.acf?.section_2?.description)
                    }, // 2\
                    section_3: {
                        ...data?.acf?.section_3,
                        review_Description: convertArrayOfObjectsToStrings(data?.acf?.section_3?.review_Description)
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_4?.lists),
                        description: convertArrayOfObjectsToStrings(data?.acf?.section_2?.description)
                    }, // 2
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)
                    },
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions)
                    },
                    leftRightsection: Array.isArray(data?.acf?.leftRightsection)
                        ? data?.acf.leftRightsection.map((ListData) => {
                              return {
                                  ...ListData,
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
                              };
                          })
                        : [],
                    laserSlider: Array.isArray(data?.acf?.laserSlider)
                        ? data?.acf.laserSlider.map((ListData) => {
                              return {
                                  ...ListData,
                                  descriptions: convertArrayOfObjectsToStrings(ListData?.descriptions)
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
                    reviewSlider: Array.isArray(data?.acf?.reviewSlider)
                        ? data?.acf.reviewSlider.map((ListData) => {
                              return {
                                  ...ListData
                              };
                          })
                        : [],
                    sectionspeakteam: {
                        ...data?.acf?.sectionspeakteam
                    },

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
