import { BreadCrumb } from '@/components/Breadcrumb';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import RelexHero from '@/components/page-sections/Masthead/RelexHero';
import { getPageData, getTreatments } from '@/lib';
import { lasikFaqList } from '@/page-sections/Faq/faqList';
import { lasikSliders } from '@/page-sections/FeaturedPatient';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import { CtaSection2, FinanceExtra, FullWidthImageSection, SideImageSection } from '@/page-sections/index';
import { leftRightListLasik } from '@/page-sections/LeftRight/leftRightList';
import { FinanceCalculatorButton, MastheadCtaButtons } from '@/page-sections/Masthead/MastheadICL';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { lasikStackList } from '@/page-sections/StackedSection';
import ClearVisionImage from '@/section-images/clear-vision-lasik.webp';
import LasikImageLarge from '@/section-images/lasik-banner-large.webp';
import LasikImage from '@/section-images/lasik-banner.webp';
import { LasiklondonContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import { Button2 } from 'src/components/Buttons';

import PdfDownload from '@/page-sections/PdfDownload/PdfDownload';
import CompanyLogos from '@/page-sections/CompanyLogos/CompanyLogos';
import Faq from '@/page-sections/Faq/Faq';
import CallbackSection from '@/page-sections/RequestCallback/CallbackSection';
import FeaturedPatient from '@/page-sections/FeaturedPatient/FeaturedPatient';
import StackedSection from '@/page-sections/StackedSection/StackedSection';
import LeftRightSection from '@/page-sections/LeftRight/LeftRightSection';
import SideVideoSection from '@/page-sections/SideImageSection/SideVideoSection';
import FinanceCalculatorSection from '@/page-sections/icl-components/FinanceCalculatorSection';
import PatientReviews from '@/components/page-sections/icl-components/PatientReviews';
import EnvironmentalImpact from '@/page-sections/HomePage/EnvironmentalImpact';

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
    // LEFT RIGHT SECTION
    const leftRightsectiondata = data?.leftRightsection
        ? data.leftRightsection.map(
              (item: { mobileImage: any; desktopImage: any; title: any; descriptions: string[] | undefined }) => ({
                  ...item,
                  mobileImage: (
                      <Image
                          src={item?.mobileImage || '/images/section-images/lasek-consultation-large.webp'}
                          width={390}
                          height={390}
                          quality={70}
                          className="rounded-radius2 md:hidden"
                          alt=""
                      />
                  ),
                  desktopImage: (
                      <Image
                          src={item?.desktopImage || '/images/section-images/lasek-consultation-large.webp'}
                          width={695}
                          height={599}
                          quality={70}
                          className="hidden rounded-radius2 md:block"
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
                              url: service?.image || '/images/section-images/walking-into-room.webp',
                              width: 392,
                              height: 256
                          },
                          desktopImage: {
                              url: service?.desktopimage || '/images/section-images/lasek-ditch-specs-large.webp',
                              width: 447,
                              height: 349
                          },
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
            title="LASIK Laser Eye Surgery London"
            description="The traditional laser eye surgery method to remove glasses & contact lenses from everyday life!"
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
                        <MastheadCtaButtons
                            showButton1={false}
                            showButton2
                            button2Text="Make an enquiry "
                            button2Class="text-white mt-4 border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF] hover:!border-[#0099FF] hover:text-white"
                        />
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <LazyComponent>
                <FinanceCalculatorSection iclTreatments={filteredTreatments} headingText={data?.calculatorHeading} />
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
                h3Title={data?.section_2?.title || 'Whatever the view, Remember it with clear vision'}
                titleClass="text-heading text-balance normal-case"
                altText=""
                image={data?.section_2?.image || ClearVisionImage}
                desktopImage={data?.section_2?.large_image || ClearVisionImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0 md:!py-0"
                overlayAnimation={true}
                textColumnOverlay
                sectionClass="bg-[#E1F1FF] relative"
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
                    bandImageURL={data?.section_4?.bandImageURL || '/images/section-images/helen.webp'}
                    reviewTitle={
                        <>
                            {HTMLReactParser(data?.section_4?.reviewTitle) ||
                                HTMLReactParser('I take every opportunity to <br /> recommend this Clinic')}
                        </>
                    }
                    sliders={reviewimageSliderdata || lasikSliders}
                    bandColor="bg-[#0099FF]"
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            {/* SECTION 5 */}
            <SideImageSection
                h3LightHeading={data?.section_5?.heading || 'LASIK Laser eye surgery cost'}
                descriptions={
                    (data?.section_5?.descriptions?.length && data?.section_5?.descriptions) || [
                        `We do our best to understand your needs and aims so we can offer you the best vision correction options with a fair, transparent price!`
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/lasik-transparent-price.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image || '/images/section-images/lasik-transparent-price-large.webp',
                    width: 650,
                    height: 607
                }}
                altText=""
                containerClassName="xl:!grid-cols-[1fr_auto]"
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
                        <Button2
                            type="anchor"
                            link="/lasik-london/price"
                            text={data?.section_5?.button_text || 'Pricing & Financing'}
                            className="group/finance mt-6 !gap-2 justify-self-center md:justify-self-start"
                        />
                    </>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_6?.heading.light_heading || 'Achieve better vision with LASIK today'}
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
                    url: data?.section_6?.image || '/images/section-images/better-vision-lasik.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_6?.large_image || '/images/section-images/better-vision-lasik-large.webp',
                    width: 669,
                    height: 599
                }}
                positionReversed={true}
                textColumnExtras={
                    <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
                        <div className="place-items-end xl:grid">
                            <BookConsultation buttonClassName="group/consultation transition-all border-2 border-[#003E79] duration-500 hover:bg-transparent grid cursor-pointer px-8 py-6 place-items-center gap-5 bg-[#003E79] grid-flow-col rounded-[0.5rem]">
                                <button className="" aria-label="Request a callback">
                                    <span className="font-mulishBold text-[1.6rem] leading-[2.4rem] text-white transition-all duration-500 group-hover/consultation:text-[#003E79]">
                                        Request a callback
                                    </span>
                                </button>
                            </BookConsultation>
                        </div>

                        <div className="flex items-center justify-start gap-4">
                            <button
                                className="relative block cursor-pointer rounded-[0.5rem]  border-2 border-solid border-[#003E79] px-10 py-6 font-mulishBold text-[1.6rem] leading-[2.4rem] text-[#404A4D] sm:px-20"
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

            {/* section 9  */}
            <LazyComponent>
                <EnvironmentalImpact />
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
                    masthead: {
                        ...data?.acf?.masthead,
                        image: {
                            ...(data?.acf?.masthead?.image && formatImage(data.acf?.masthead?.image))
                        }
                    },
                    calculatorHeading: stripInitialTags(data?.acf?.calculatorHeading),
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2,
                        title: stripInitialTags(data?.acf?.section_2?.title || '')
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

                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
                    },
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
