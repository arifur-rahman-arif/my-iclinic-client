import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import RelexHero from '@/components/page-sections/Masthead/RelexHero';
import { normalSlideListRelexSmile } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { getPageData, getTreatments } from '@/lib';
import { relexSmileFaqList } from '@/page-sections/Faq/faqList';
import { relexSliders } from '@/page-sections/FeaturedPatient';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import {
    CtaSection,
    CtaSection2,
    FullWidthImageSection,
    FullWidthImageSection3,
    GridColumn,
    SideImageSection,
    StackColumn
} from '@/page-sections/index';
import { leftRightListRelexSmileLondon } from '@/page-sections/LeftRight/leftRightList';
import { FinanceCalculatorButton, MastheadCtaButtons } from '@/page-sections/Masthead/MastheadICL';
import { PageDataInterface, RelexSmilePageContentProps, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';

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
const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const SideVideoSection = dynamic(() => import('@/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});
const BottomBanner2 = dynamic(() => import('@/page-sections/BottomFullBanners/BottomBanner2'), {
    loading: () => <ComponentLoader />
});
const FinanceCalculatorSection = dynamic(() => import('@/page-sections/icl-components/FinanceCalculatorSection'), {
    loading: () => <ComponentLoader />
});
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});
const EnvironmentalImpact = dynamic(() => import('@/page-sections/HomePage/EnvironmentalImpact'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends RelexSmilePageContentProps, PageDataInterface<RelexSmilePageContentProps> {}

interface RelexSmileLondonProps {
    filteredTreatments: TreatmentInterface[];
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
export default function RelexSmileLondon({
    seo,
    yoastJson,
    data,
    filteredTreatments
}: RelexSmileLondonProps): JSX.Element {
    const serviceList: any = data?.section_2.length
        ? data?.section_2.map((service) => {
              return {
                  ...service,
                  mobileImage: (
                      <Image
                          src={service.mobileImage?.url || ''}
                          width={390}
                          height={390}
                          quality={70}
                          className="w-full md:hidden"
                          alt={service.mobileImage?.alt || ''}
                      />
                  ),
                  desktopImage: (
                      <Image
                          src={service.desktopImage?.url || ''}
                          width={704}
                          height={613}
                          quality={70}
                          className="hidden w-full max-w-[70.4rem] md:block"
                          alt={service.desktopImage?.alt || ''}
                      />
                  ),
                  descriptions: stringArrayToElementArray(service.descriptions)
              };
          })
        : null;

    const reviewSlides: any =
        Array.isArray(normalSlideListRelexSmile) && normalSlideListRelexSmile.length > 0
            ? normalSlideListRelexSmile.map((service) => {
                  return {
                      ...service,
                      name: service?.name,
                      review: service?.description
                  };
              })
            : null;

    return (
        <Page
            title="ReLEx SMILE Laser eye surgery In London"
            description="ReLEx SMILE laser eye surgery is a new vision correction treatment to fix short-sightedness, blurriness & astigmatism. Learn more about fixing your vision with our treatments."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <RelexHero
                {...data?.masthead}
                suitabilityButton={
                    <div className="grid gap-6">
                        <FinanceCalculatorButton
                            title1ClassName="!text-white"
                            icon={{
                                src: '/images/icons/icon-percentage-fire-blue.png',
                                width: 40,
                                height: 40,
                                alt: ''
                            }}
                        />
                        <MastheadCtaButtons button1Class="text-white mt-4 border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF] hover:!border-[#0099FF] hover:text-white" />
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <LazyComponent>
                <FinanceCalculatorSection iclTreatments={filteredTreatments} headingText={data?.calculatorHeading} />
            </LazyComponent>

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
                containerClass="md:!grid-cols-1 lg:!grid-cols-[auto_1fr] md:!py-0 lg:!py-24"
                sectionClass="bg-brandLight"
                altText="Man with luggage at airport"
                titleClass="text-heading"
                videoUrl={
                    data?.section_1?.video?.src || '/videos/relex-smile-vision-correction-treatment-explained.mp4'
                }
                videoPoster="D7qX9brFvCw"
                textColumnExtraBottomElements={
                    <div className="mt-12 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="hover:bg-brandLight">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79] hover:bg-brandLight md:px-20"
                        />
                    </div>
                }
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
                <BottomBanner2 {...data.bannerSection} link="/relex-smile-london/price" />
            </LazyComponent>

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading || 'Vision correction options'}
            />

            <SideImageSection
                sectionClass="!overflow-hidden"
                containerClassName="xl:!grid-cols-[auto_1fr]"
                // h2Heading={data?.section_4?.subheading || 'Why RELEX SMILE'}
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
                // h2Heading={data?.section_5?.subheading || "improve your life's quality"}
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
                    url: data?.section_5?.image?.url || '/images/section-images/clear-natural-vision.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.url || '/images/section-images/clear-natural-vision-large.webp',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText={data?.section_5?.large_image?.alt}
                textColumnExtras={
                    <p className="max-w-[45.2rem] font-latoBold text-[2rem] uppercase leading-[2.8rem] text-[#893277]">
                        A better quality of life is just around the corner.
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
                descriptionWrapperClass="[&_div:last-child]:mt-6"
            />

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
                    bandImageURL={data?.section_9?.front_image || '/images/section-images/mr-lukicov.webp'}
                    reviewTitle="Thank you My-iClinic"
                    sliders={data?.section_9?.additional_images || relexSliders}
                    bandColor="bg-[#0099FF]"
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews
                    sliders={data?.patientReviews?.reviews || reviewSlides}
                    heading={data?.patientReviews?.heading}
                />
            </LazyComponent>

            <FullWidthImageSection
                h3Title={data?.clearVision?.heading || 'Whatever the view, <br/> Remember it with Clear vision'}
                altText=""
                albumAnimation
                containerClass="grid grid-cols-1 items-center md:!grid-cols-1 lg:py-20 justify-center py-12 sm:py-16 lg:py-0 gap-12 xl:!grid-cols-[auto_1fr]  lg:gap-24"
                includeCta
                albumImages={{
                    image1: data?.clearVision?.image1,
                    image2: data?.clearVision?.image2,
                    image3: data?.clearVision?.image3,
                    image4: data?.clearVision?.image4
                }}
            />

            <SideImageSection
                h3LightHeading={
                    <>
                        {data?.section_6?.heading ||
                            'Why consider our ReLEX SMILE Laser eye surgery when you already have glasses or contact lenses?'}
                    </>
                }
                containerClassName="xl:!grid-cols-[auto_1fr] !items-start"
                sectionImage={{
                    url: data?.section_6?.image?.url || '/images/section-images/laser-relex-smile.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_6?.large_image?.url || '/images/section-images/laser-relex-smile-large.webp',
                    width: 682,
                    height: 686
                }}
                altText={data?.section_6?.large_image?.alt || 'Male athlete on bike after laser eye surgery'}
                textColumnImage={true}
                customColumn={<StackColumn stackList={data?.section_6?.list} />}
            />

            <CtaSection2
                title={`${data?.section_7?.heading?.light_heading} ${data?.section_7?.heading?.bold_heading}`}
                image={data?.section_7?.image}
                descriptions={
                    (data?.section_7.descriptions.length &&
                        stringArrayToElementArray(data?.section_7.descriptions)) || [
                        <>
                            To begin the ReLEx SMILE process, give us a call or book your{' '}
                            <strong>free consultation</strong> with our friendly team today.
                        </>
                    ]
                }
            />

            <LazyComponent>
                <EnvironmentalImpact />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    downloadFile={data?.email_contents?.download_file}
                    title="Get the guide to <br/> ReLEx laser surgery"
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

        const treatments = await getTreatments();

        let filteredTreatments = treatments.filter((treatment) => treatment.name === 'ReLEX SMILE');

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
                    masthead: {
                        ...data?.acf?.masthead,
                        image: {
                            ...(data?.acf?.masthead?.image && formatImage(data.acf?.masthead?.image))
                        }
                    },
                    calculatorHeading: stripInitialTags(data?.acf?.calculatorHeading || ''),
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
                    bannerSection: {
                        ...data?.acf?.bannerSection,
                        image: {
                            ...(data?.acf?.bannerSection?.image && formatImage(data.acf?.bannerSection?.image))
                        }
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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_7?.descriptions),
                        image: {
                            ...(data?.acf?.section_7?.image && formatImage(data.acf?.section_7?.image))
                        }
                    },
                    section_8: {
                        ...data?.acf?.section_8,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_8?.descriptions)
                    },
                    clearVision: {
                        ...data?.acf?.clearVision,
                        heading: stripInitialTags(data?.acf?.clearVision?.heading || ''),
                        image1: {
                            ...(data?.acf?.clearVision?.image1 && formatImage(data.acf?.clearVision?.image1))
                        },
                        image2: {
                            ...(data?.acf?.clearVision?.image2 && formatImage(data.acf?.clearVision?.image2))
                        },
                        image3: {
                            ...(data?.acf?.clearVision?.image3 && formatImage(data.acf?.clearVision?.image3))
                        },
                        image4: {
                            ...(data?.acf?.clearVision?.image4 && formatImage(data.acf?.clearVision?.image4))
                        }
                    },
                    section_9: {
                        ...data?.acf?.section_9,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_9?.descriptions)
                    },
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
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
