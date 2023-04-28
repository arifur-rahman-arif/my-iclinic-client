// Import BannerImage from '@/section-images/relex-banner-bg.png';
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { normalSlideListRelexSmile } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import SustainableSlider from '@/components/Slider/SustainableSlider/SustainableSlider';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-relex-smile-large.png';
import MastheadImageSmall from '@/masthead/masthead-relex-smile-small.png';
import MastheadImageMedium from '@/masthead/masthead-relex-smile.png';
import { relexSmileFaqList } from '@/page-sections/Faq/faqList';
import { relexSliders } from '@/page-sections/FeaturedPatient';
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
} from '@/page-sections/index';
import { leftRightListRelexSmileLondon } from '@/page-sections/LeftRight/leftRightList';
import { PageDataInterface, RelexSmilePageContentProps, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

interface DataInterface extends RelexSmilePageContentProps, PageDataInterface<RelexSmilePageContentProps> {}

interface RelexSmileLondonProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Url: /relex-smile-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function RelexSmileLondon({ seo, yoastJson, data }: RelexSmileLondonProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'ReLEx SMILE Laser Eye Surgery London';
    const subheading = data?.masthead_subheading || 'London’s latest laser vision correction procedure';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const serviceList: any = data?.section_2.length ?
        data?.section_2.map((service) => {
            return {
                ...service,
                mobileImage: (
                      <Image
                          src={service.mobileImage?.url || ''}
                          width={390}
                          height={390}
                          quality={70}
                          className="md:hidden"
                          alt={service.mobileImage?.alt || ''}
                      />
                ),
                desktopImage: (
                      <Image
                          src={service.desktopImage?.url || ''}
                          width={685}
                          height={557}
                          quality={70}
                          className="hidden md:block md:scale-90 2xl:scale-100"
                          alt={service.desktopImage?.alt || ''}
                      />
                ),
                descriptions: stringArrayToElementArray(service.descriptions)
            };
        }) :
        null;

    return (
        <Page
            title="ReLEx SMILE Laser eye surgery In London"
            description="ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={
                    data?.masthead_image?.image_large?.alt || 'Man travelling without glasses for vision correction'
                }
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.section_1.heading ? (
                            HTMLReactParser(data.section_1.heading)
                        ) : (
                            <>
                                Say hello to clear vision <br /> with ReLEx SMILE Laser
                                <br /> Eye Surgery!
                            </>
                        )}
                    </>
                }
                containerClass="md:!grid-cols-1 lg:!grid-cols-[1fr_auto] md:!py-0 lg:!py-24"
                altText="Man with luggage at airport"
                includeScrollDownButton
                videoUrl={
                    data?.section_1?.video?.src || '/videos/relex-smile-vision-correction-treatment-explained.mp4'
                }
                videoPoster="D7qX9brFvCw"
            />

            <LazyComponent>
                <LeftRightSection childrenList={serviceList || leftRightListRelexSmileLondon} />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading={data?.section_3?.heading || 'What our ReLEx patients say after treatment'}
                    h3Heading={data?.section_3?.subheading || 'Hear from a patient'}
                    darkPin
                    descriptions={
                        (data?.section_3.descriptions.length &&
                            stringArrayToElementArray(data?.section_3.descriptions)) || [
                            `When you choose My-iClinic’s 5-star rated services, you can rest assured that
                         you’ve made the best possible choice for your eyesight. Our specialist
                          optometrists carefully work with you to evaluate your eyes to offer you the best
                           possible course of treatment – allowing you to re-discover a life of normal vision.`
                        ]
                    }
                    videoUrl={data?.section_3?.video?.src || '/videos/relex-smile.mp4'}
                    videoPoster={!data?.section_3?.video?.src && 'e3z34A3mmeI'}
                    localPoster={data?.section_3?.video?.poster}
                />
            </LazyComponent>

            <LazyComponent>
                <BottomBanner2 />
            </LazyComponent>

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading || 'Vision correction options'}
            />

            <SideImageSection
                h2Heading={data?.section_4?.subheading || 'Why RELEX SMILE'}
                h3LightHeading={
                    <>
                        {data?.section_4.heading?.light_heading || 'The benefits of ReLEx'} <br />
                    </>
                }
                h3BoldHeading={data?.section_4.heading?.bold_heading || 'Smile laser eye surgery!'}
                descriptions={
                    (data?.section_4.descriptions.length &&
                        stringArrayToElementArray(data?.section_4.descriptions)) || [
                        `When you choose My-iClinic’s 5-star rated services, you can rest assured that
                     you’ve made the best possible choice for your eyesight.`,
                        `Our specialists here in London will carefully work with you to evaluate your eyes,
                    offering you the best possible course of treatment. Take the first step and allow yourself
                     to re-discover a life of clear, natural vision.`
                    ]
                }
                customColumn={<GridColumn cardList={data?.section_4.card_list} />}
            />

            <SideImageSection
                h2Heading={data?.section_5?.subheading || "improve your life's quality"}
                h3LightHeading={
                    <>
                        {data?.section_5.heading?.light_heading || 'Step closer to a life of'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_5.heading?.bold_heading || 'Clear, natural vision!'}
                descriptions={
                    (data?.section_5?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_5.descriptions)) || [
                        `Have you or one of your loved ones finally decided to do something about being short-sighted or
                     having astigmatism? To begin the ReLEx SMILE process, give us a call or book a consultation with
                      our friendly team today.`
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image?.url || '/images/section-images/clear-natural-vision.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.url || '/images/section-images/clear-natural-vision-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText={data?.section_5?.large_image?.alt}
                textColumnExtras={
                    <p className="font-mulishBold text-[2rem] leading-[2.4rem]">
                        A better quality of life is just <br />
                        around the corner.
                    </p>
                }
            />

            <FullWidthImageSection3
                title1={data?.section_8?.heading || '97% of people'}
                title2={
                    data?.section_8?.subheading ||
                    'From our clinic are extremely happy with their vision after laser eye surgery.'
                }
                descriptions={
                    (data?.section_8?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_8.descriptions)) || [
                        'Most patients say they wish they’d done it sooner! One of the most mentioned reasons for having laser eye surgery is improved confidence and lifestyle.'
                    ]
                }
                image={data?.section_8?.image?.url}
                altText={data?.section_8?.image?.alt}
            />

            <div className="md:mt-24"></div>

            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_9?.subheading || 'Relex SMILE Patient'}
                    h3Title={data?.section_9?.heading || 'Life after ReLEx SMILE Treatment'}
                    bandImageDescription={
                        (data?.section_9?.descriptions?.length &&
                            stringArrayToElementArray(data?.section_9.descriptions)) || [
                            `It has been two months since my ReLEx SMILE eye surgery at My-iClinic,
                        and my vision is better than 20/20 (~20/10), with only minor and receding eye dryness. `,
                            'In the past, I was a regular contact lens user with a -4.25 prescription in both eyes.',
                            `Dr John Bolger has taken great care in assessing my vision and health, and explaining the surgery.
                         He performed the correcting procedure with great care, and after 15 minutes I walked out
                          of the surgery on my own without any visual aids or help!`,
                            "The next day I was already back at work (software development), gym the following day (weight lifting) and swimming just a week after - if that is not a miracle, I don't know what is!"
                        ]
                    }
                    bandImageTitle={data?.section_9?.name || 'Mr. Lukicov'}
                    bandImageURL={data?.section_9?.front_image || '/images/section-images/mr-lukicov.png'}
                    reviewTitle="Thank you My-iClinic"
                    sliders={data?.section_9?.additional_images || relexSliders}
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
                h2Heading={data?.section_6?.subheading || 'Why laser Relex smile'}
                h3LightHeading={
                    <>
                        {data?.section_6?.heading?.light_heading || 'Why consider our ReLEx SMILE Laser eye surgery'}
                        <br />
                    </>
                }
                h3BoldHeading={
                    data?.section_6?.heading?.bold_heading || 'When you already have glasses or contact lenses?'
                }
                sectionImage={{
                    url: data?.section_6?.image?.url || '/images/section-images/laser-relex-smile.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_6?.large_image?.url || '/images/section-images/laser-relex-smile-large.png',
                    width: 682,
                    height: 686
                }}
                altText={data?.section_6?.large_image?.alt || 'Male athlete on bike after laser eye surgery'}
                textColumnImage={true}
                customColumn={<StackColumn stackList={data?.section_6?.list} />}
                containerClassName="!items-start"
            />

            <SideImageSection
                h2Heading={data?.section_7?.subheading || 'Right treatment for you'}
                h3LightHeading={
                    <>
                        {data?.section_7?.heading?.light_heading || 'Do you think ReLEx SMILE could'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_7?.heading?.bold_heading || 'Be the right treatment for you?'}
                descriptions={
                    (data?.section_7.descriptions.length &&
                        stringArrayToElementArray(data?.section_7.descriptions)) || [
                        <>
                            To begin the ReLEx SMILE process, give us a call or book your{' '}
                            <strong>free consultation</strong> with our friendly team today.
                        </>
                    ]
                }
                sectionImage={{
                    url: data?.section_7?.image?.url || '/images/section-images/right-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_7?.large_image?.url || '/images/section-images/right-treatment-large.png',
                    width: 657,
                    height: 554
                }}
                altText={
                    data?.section_7?.large_image?.alt || 'Woman smiling without needing glasses for short-sightedness'
                }
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
                        h2Heading={data?.sustainability_section?.plastic_free_life?.subheading || 'plastic free life'}
                        h3LightHeading={HTMLReactParser(
                            data?.sustainability_section?.plastic_free_life?.heading.light_heading ||
                                'ReLEx SMILE is the key<br /> to living'
                        )}
                        h3BoldHeading={HTMLReactParser(
                            data?.sustainability_section?.plastic_free_life?.heading.bold_heading ||
                                'a sustainable, <br /> plastic free life!'
                        )}
                        descriptions={
                            (data?.sustainability_section?.plastic_free_life?.descriptions?.length &&
                                stringArrayToElementArray(
                                    data?.sustainability_section.plastic_free_life.descriptions
                                )) || [
                                `The most sustainable, green lifestyle to have is when you have a plastic free eye-style, free of plastic waste from your glasses and contact lenses!`
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
                                stringArrayToElementArray(
                                    data?.sustainability_section.gift_of_a_tree.descriptions
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
                    title="Get the guide to ReLEx laser surgery"
                    description="Robotic laser vision correction"
                    pageSlug="relex-smile-london"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || relexSmileFaqList}
                    titleLight="ReLEx SMILE"
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
        const data: WpPageResponseInterface<RelexSmilePageContentProps> = await getPageData({
            slug: 'relex-smile-london'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    section_2: Array.isArray(data?.acf?.section_2)
                        ? data?.acf.section_2.map((sectionData) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData.descriptions)
                              };
                          })
                        : [],
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions)
                    },
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_4?.descriptions)
                    },
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)
                    },
                    section_6: {
                        ...data?.acf?.section_6,
                        list: Array.isArray(data?.acf.section_6?.list)
                            ? data?.acf.section_6?.list.map((item) => {
                                  return {
                                      ...item,
                                      descriptions: convertArrayOfObjectsToStrings(item.descriptions)
                                  };
                              })
                            : []
                    },
                    section_7: {
                        ...data?.acf?.section_7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_7?.descriptions)
                    },
                    section_8: {
                        ...data?.acf?.section_8,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_8?.descriptions)
                    },
                    section_9: {
                        ...data?.acf?.section_9,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_9?.descriptions)
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
