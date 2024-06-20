import { BreadCrumb } from '@/components/Breadcrumb';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import { FinanceCalculatorButton, MastheadCtaButtons } from '@/page-sections/Masthead/MastheadICL';
import Image from 'next/image';
import HTMLReactParser from 'html-react-parser';
import { getPageData, getTreatments } from '@/lib';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { presbyondFaqList } from '@/page-sections/Faq/faqList';
import { presbyondSliders } from '@/page-sections/FeaturedPatient';
import { CtaSection, CtaSection2, FinanceExtra, FullWidthImageSection, SideImageSection } from '@/page-sections/index';
import { leftRightListPresbyond } from '@/page-sections/LeftRight/leftRightList';
import { presbyondStackList } from '@/page-sections/StackedSection';
import { PresbeyondlondonContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { Button2 } from 'src/components/Buttons';
import { stripInitialTags } from '@/utils/miscellaneous';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';

import PdfDownload from '@/page-sections/PdfDownload/PdfDownload';
import CompanyLogos from '@/page-sections/CompanyLogos/CompanyLogos';
import Faq from '@/page-sections/Faq/Faq';
import CallbackSection from '@/page-sections/RequestCallback/CallbackSection';
import FeaturedPatient from '@/page-sections/FeaturedPatient/FeaturedPatient';
import StackedSection from '@/page-sections/StackedSection/StackedSection';
import LeftRightSection from '@/page-sections/LeftRight/LeftRightSection';
import LottieSection from '@/page-sections/LottieSection/LottieSection';
import FinanceCalculatorSection from '@/page-sections/icl-components/FinanceCalculatorSection';
import PatientReviews from '@/components/page-sections/icl-components/PatientReviews';
import EnvironmentalImpact from '@/page-sections/HomePage/EnvironmentalImpact';

interface DataInterface extends PresbeyondlondonContentInterface, PageDataInterface<PresbeyondlondonContentInterface> {}

interface PresbyondProps {
    filteredTreatments: TreatmentInterface[];
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
export default function Presbyond({ seo, yoastJson, data, filteredTreatments }: PresbyondProps): JSX.Element {
    // LEFT RIGHT SECTION
    const leftRightsectiondata = data?.leftRightsection
        ? data.leftRightsection.map(
              (item: { mobileImage: any; desktopImage: any; title: any; descriptions: string[] | undefined }) => ({
                  ...item,
                  mobileImage: (
                      <Image
                          src={item?.mobileImage || '/images/section-images/presbyond-consultation.webp'}
                          width={390}
                          height={390}
                          quality={70}
                          className="rounded-primary md:hidden"
                          alt=""
                      />
                  ),
                  desktopImage: (
                      <Image
                          src={item?.desktopImage || '/images/section-images/presbyond-consultation.webp'}
                          width={695}
                          height={617}
                          quality={70}
                          className="hidden rounded-primary md:block"
                          alt=""
                      />
                  ),
                  title: item?.title,
                  descriptions: stringArrayToElementArray(item?.descriptions)
              })
          )
        : null;

    // laserSlider
    const laserSliderdata: any =
        Array.isArray(data?.laserSlider) && data.laserSlider.length > 0
            ? data.laserSlider.map(
                  (service: { desktopimage: any; image: any; title: any; descriptions: string[] | undefined }) => {
                      return {
                          ...service,
                          image: {
                              url: service?.image || '/images/section-images/laser-surgery-card.webp',
                              width: 329,
                              height: 220
                          },
                          desktopImage: {
                              url: service?.desktopimage || '/images/section-images/lasek-ditch-specs-large.webp',
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

            <CataractHero
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

            {/* <UspSection list={presbyondUspList} /> */}

            <SideImageSection
                // h2Heading={data?.section_1?.sub_heading || 'Vision correction treatment'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'Getting rid of your reading glasses with'}
                h3BoldHeading={
                    <>
                        {HTMLReactParser(data?.section_1?.heading?.bold_heading) ||
                            HTMLReactParser('our Presbyond <br /> Laser Treatment')}
                    </>
                }
                altText="Woman with reading glasses has a headache from watching her laptop screen. She is
                long sighted, suffering from presbyopia."
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
                    url: data?.section_1?.image || '/images/section-images/presbyond-laser-treatment.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image || '/images/section-images/presbyond-laser-treatment-desktop.webp',
                    width: 688,
                    height: 642
                }}
            />

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
                description={
                    (data?.section_2?.description?.length &&
                        stringArrayToElementArray(data?.section_2?.description)) || [
                        'Saving vision, time, money and the planet! Having Presbyond is a brilliant achievement for your vision, your time, your long-term savings and the sustainability of our planet. We want all of our patients to be well-informed about their recovery process after Presbyond surgery!',
                        'Our team takes your aftercare very seriously, which is why our laser specialist will have follow up assessments and appointments with you throughout the year after your treatment date.'
                    ]
                }
                videoUrl={data?.section_2?.videoUrl || '/videos/presbyond.mp4'}
                localPoster={data?.section_2?.videoPoster}
            />
            {/* SECTION 3 */}
            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_3?.sub_heading || 'Presbyond Patient'}
                    h3Title={data?.section_3?.heading || 'Life after Presbyond laser eye surgery'}
                    bandImageDescription={
                        (data?.section_3?.review_Description?.length && data?.section_3?.review_Description) || [
                            `My experience was amazing. The whole team is very kind and exceedingly professional.`,
                            `Being able to see again without glasses is the best feeling and the best money I have ever spent!!!`,
                            'The after care is exceptional and I would highly recommend them.'
                        ]
                    }
                    bandColor="bg-[#FFB800]"
                    subTitleClass="!text-[#FFB800]"
                    bandImageTitle={data?.section_3?.bandImageTitle || 'Hasina'}
                    bandImageURL={data?.section_3?.bandImageURL || '/images/section-images/hasina.webp'}
                    reviewTitle={data?.section_3?.reviewtitle || 'Thank you My-iClinic'}
                    sliders={reviewimageSliderdata ? reviewimageSliderdata : presbyondSliders}
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            {/* SECTION 4 */}
            <SideImageSection
                containerClassName="xl:!grid-cols-[1fr_auto]"
                largeImageClassName="h-full object-cover rounded-primary"
                h3LightHeading={data?.section_4?.heading || 'Clearer vision with an all inclusive, transparent cost'}
                descriptions={
                    (data?.section_4?.description?.length &&
                        stringArrayToElementArray(data?.section_4?.description)) || [
                        `Having to wear glasses and contact lenses is a big financial burden overtime. We never subject the safety of people’s eye health to a cheap deal like glasses and contact lenses do and we also understand you don’t want to pay more than what’s fair.`,
                        `Our advanced Presbyond treatment with our London specialists is an all inclusive cost with a dedicated team for your aftercare!`
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/transparent-price.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image || '/images/section-images/transparent-price-desktop.webp',
                    width: 659,
                    height: 780
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

                        <Button2
                            type="anchor"
                            link="/presbyond-london/price"
                            text={data?.section_4?.button_text || 'Pricing and financing'}
                            className="justify-self-start"
                        />
                    </>
                }
            />

            <CtaSection title={data?.ctaSection2?.title} subtitle={data?.ctaSection2?.subTitle} />

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
                title={data?.ctaSection?.title || 'Book Your Private Cataract Surgery Today'}
                image={data?.ctaSection?.image}
            />

            <LazyComponent>
                <EnvironmentalImpact />
            </LazyComponent>

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

        const treatments = await getTreatments();
        let filteredTreatments = treatments.filter((treatment) => treatment.name === 'Presbyond');

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
                        subTitle: stripInitialTags(data?.acf?.masthead?.subTitle),
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    calculatorHeading: stripInitialTags(data?.acf?.calculatorHeading),
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
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
                    },
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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_6?.descriptions),
                        image: {
                            ...(data?.acf?.section_6?.image && formatImage(data.acf?.section_6?.image))
                        }
                    },
                    ctaSection: {
                        ...data?.acf?.ctaSection,
                        image: {
                            ...(data?.acf?.ctaSection?.image && formatImage(data.acf?.ctaSection?.image))
                        }
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
