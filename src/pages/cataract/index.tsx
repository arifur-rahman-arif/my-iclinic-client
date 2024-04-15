import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    CtaSection,
    CtaSection2,
    FinanceExtra,
    FullWidthImageSection,
    HalfRoundedCard,
    SideImageSection
} from '@/components/page-sections';
import { cataractFaqList } from '@/components/page-sections/Faq/faqList';
import { leftRightListCataract } from '@/components/page-sections/LeftRight/leftRightList';
import { getPageData, getTreatments } from '@/lib';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import SimpleProcessImageLarge from '@/section-images/simple-process-cataract-large.png';
import SimpleProcessImage from '@/section-images/simple-process-cataract.png';
import { CataractContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import CataractHero from '@/components/page-sections/Masthead/CataractHero';
import FundingTreatment from '@/components/page-sections/HomePage/FundingTreatment';

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
const LeftRightSection = dynamic(() => import('@/components/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});
const SideVideoSection = dynamic(() => import('@/components/page-sections/SideImageSection/SideVideoSection'), {
    loading: () => <ComponentLoader />
});

const FinanceCalculatorSection = dynamic(() => import('@/page-sections/icl-components/FinanceCalculatorSection'), {
    loading: () => <ComponentLoader />
});

const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends CataractContentInterface, PageDataInterface<CataractContentInterface> {}

interface CataractProps {
    iclTreatments: TreatmentInterface[];
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Lasik page component for the App
 *
 * * Url: /cataract
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Cataract({ data, seo, yoastJson, iclTreatments }: CataractProps): JSX.Element {
    // LEFT RIGHT SECTION
    const leftRightsectiondata = data?.leftRightsection
        ? data.leftRightsection.map(
              (item: { mobileImage: any; desktopImage: any; title: any; descriptions: string[] | undefined }) => ({
                  ...item,
                  mobileImage: (
                      <Image
                          src={item?.mobileImage || '/images/section-images/cataract-consultation.png'}
                          width={390}
                          height={390}
                          quality={70}
                          className="rounded-primary md:hidden"
                          alt=""
                      />
                  ),
                  desktopImage: (
                      <Image
                          src={item?.desktopImage || '/images/section-images/cataract-consultation-large.png'}
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
                      name: service?.name,
                      review: service?.description
                  };
              })
            : null;

    const InfoCardsdata =
        Array.isArray(data?.InfoCards) && data.InfoCards.length > 0
            ? data.InfoCards.map(
                  (service: { image: any; title: any; content: string | any[]; bulletpoints: string | any[] }) => {
                      return {
                          image: {
                              url: service.image || '/images/section-images/card-improved-vision.png'
                          },
                          title: service.title || 'Improved Vision',
                          description: service.content?.length ? service.content : undefined,
                          list: service.bulletpoints?.length ? service.bulletpoints : undefined
                      };
                  }
              )
            : null;

    return (
        <Page title="Cataract" description="We’re here to make cataract surgery easy" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <CataractHero {...data?.masthead} />

            {/* <Masthead
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
                suitabilityButton={
                    <div className="mt-4 grid gap-6">
                        <FinanceCalculatorButton title1ClassName="text-brand" />

                        <div className="flex flex-wrap items-center justify-start gap-4">
                            <BookConsultation buttonClassName="sitemap-link text-center hover:!border-[#003E79] !border-2">
                                <Button2 type="button" text="Make an enquiry" />
                            </BookConsultation>

                            <Button2
                                type="anchor"
                                text="FREE suitability check"
                                link="/suitability-check"
                                title="FREE suitability check"
                                className="sitemap-link justify-self-start border-white border-[#003E79] bg-transparent text-center text-white text-[#003E79] hover:border-white hover:!border-[#003E79] hover:!bg-[#003E79] hover:text-white"
                            />
                        </div>
                    </div>
                }
            /> */}

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <LazyComponent>
                <FinanceCalculatorSection
                    iclTreatments={iclTreatments}
                    headingText={
                        <>
                            <span className="font-latoBold text-[3rem] normal-case leading-[3.6rem] text-[#FF7F00] md:font-latoExtraBold md:text-[4.8rem] md:leading-[4.8rem]">
                                0% interest-Free
                            </span>{' '}
                            finance option for 10 months
                        </>
                    }
                />
            </LazyComponent>

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.section_3?.heading ? (
                            HTMLReactParser(data?.section_3?.heading)
                        ) : (
                            <>
                                A simple process to
                                <br /> living cataract-free
                            </>
                        )}
                    </>
                }
                altText=""
                image={data?.section_3?.image || SimpleProcessImage}
                desktopImage={data?.section_3?.imageLarge || SimpleProcessImageLarge}
                includeScrollDownButton
            />

            <LazyComponent>
                <LeftRightSection childrenList={leftRightsectiondata || leftRightListCataract} />
            </LazyComponent>

            <LazyComponent>
                <SideVideoSection
                    h2Heading={data?.section_2?.heading || 'What our Cataract patients say after treatment'}
                    h3Heading={data?.section_2?.subheading || 'Hear from a patient'}
                    descriptions={
                        (data?.section_2?.descriptions?.length &&
                            stringArrayToElementArray(data?.section_2?.descriptions)) || [
                            `When you choose My-iClinic’s 5-star rated s
                        ervices, you can rest assured that you’ve made the best possible choice for your eyesight.`,
                            `Our specialist optometrists carefully work with you to evaluate your eyes to offer you the best possible course of treatment – allowing you to re-discover a life of normal vision.`
                        ]
                    }
                    videoUrl={data?.section_2?.videoUrl}
                    videoPoster={data?.section_2?.videoPoster}
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={reviewSliderdata} heading={data?.reviewheading} />
            </LazyComponent>

            <CtaSection
                title={data?.sectionspeakteam?.title || 'Speak To Our Friendly Team'}
                subtitle={data?.sectionspeakteam?.sub_heading || 'FIND OUT YOUR OPTIONS'}
            />

            <FundingTreatment
                heading={data?.treatment_fund?.heading}
                description={data?.treatment_fund?.description}
                list={data?.treatment_fund?.list}
                cardList={data?.treatment_fund?.card_list}
                centerHeading
            />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading?.light_heading || 'Living life again'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'with cataract-free vision!'}
                descriptions={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        `Most patients are not aware of how bad their vision has become until after the cataract surgery and treatment.`,
                        `Once they see the difference in brightness, colour, imagery and detail; they are delighted to experience their lifestyle activities again with the clear vision they should have always had.`
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/vision-correction-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/vision-correction-cataract-large.png',
                    width: 640,
                    height: 610
                }}
                positionReversed={true}
            />

            <SideImageSection
                h3LightHeading={
                    <>
                        {data?.section_4?.heading?.light_heading || 'Cataract'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_4?.heading?.dark_heading || 'Surgery prices'}
                descriptions={
                    (data?.section_4?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_4?.descriptions)) || [
                        `We do our best to understand your needs and aims so we can offer you the best vision correction options with a fair, transparent price!`
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/cataract-transparent-price.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.large_image || '/images/section-images/cataract-transparent-price-large.png',
                    width: 671,
                    height: 572
                }}
                altText=""
                textColumnExtras={
                    <>
                        <FinanceExtra
                            priceText={data?.section_4?.price_title || '£2,400 per eye'}
                            list={
                                (data?.section_4?.lists?.length &&
                                    stringArrayToElementArray(data?.section_4?.lists)) || [
                                    <>
                                        One dedicated Cataract specialist
                                        <br />
                                        for your treatment
                                    </>,
                                    'Most affordable price in London'
                                ]
                            }
                            paragraphs={''}
                        />
                        <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-heading">
                            {data?.section_4?.price_subheading || 'Looking for insurance options?'}
                        </span>
                        <>
                            {HTMLReactParser(data?.section_4?.price_description) ||
                                HTMLReactParser('We are here to make your treatment easy.')}
                        </>

                        <Button2
                            type="anchor"
                            link="/cataract/price"
                            text={data?.section_4?.button_text || 'Find out more'}
                            iconPosition="right"
                            icon={
                                <FaAngleRight className="h-6 w-6 translate-y-[0.1rem] fill-white transition-all duration-500 group-hover/button:fill-heading2" />
                            }
                            className="group/button justify-self-center normal-case md:justify-self-start"
                        />
                    </>
                }
            />

            <HalfRoundedCard cardList={InfoCardsdata} />

            {/* cardListdata */}
            <SideImageSection
                h3LightHeading={data?.bettervision?.heading?.light_heading || 'Enjoy clear'}
                h3BoldHeading={data?.bettervision?.heading?.bold_heading || 'vision without glasses'}
                descriptions={
                    (data?.bettervision?.descriptions?.length &&
                        stringArrayToElementArray(data?.bettervision?.descriptions)) || [
                        `Following cataract surgery, the most satisfied patients are those who do not require glasses to see clearly.`,
                        `Since your eye is refocused during the operation, our experts take the opportunity to focus it for no distance glasses, even if you have worn glasses all your life.`,
                        <>
                            Implants, like glasses, come in different strengths and we will measure your eye to find the
                            strength of the{' '}
                            <span className="font-mulishBold font-extrabold">implant most suitable for you.</span>
                        </>
                    ]
                }
                sectionImage={{
                    url: data?.bettervision?.image || '/images/section-images/better-vision-cataract.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.bettervision?.large_image || '/images/section-images/better-vision-cataract-large.png',
                    width: 659,
                    height: 687
                }}
                positionReversed={true}
            />

            <CtaSection2
                title={data?.section_6?.title || 'Book Your Private Cataract Surgery Today'}
                image={data?.section_6?.image}
            />

            {/* <LazyComponent>
                <BottomBanner
                    bannerImage={CataractCtaBannerImage}
                    bannerBg="/images/section-images/cataract-banner-bg.png"
                    bannerTitle="Do you think Cataract could be the right treatment for you?"
                />
            </LazyComponent> */}

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    downloadFile={data?.email_contents?.download_file}
                    title="Get the guide to Cataract treatment"
                    description="Modern Cataract Surgery"
                    pageSlug="cataract"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || cataractFaqList}
                    titleLight="Cataract surgery"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'cataract' });

        const treatments = await getTreatments();
        let iclTreatments = treatments.filter((treatment) => treatment.group_name === 'Cataract');

        /**
         * Updates the `iclTreatments` array by mapping each treatment object and setting the 'active' property based on the index.
         *
         * @param {Array<Object>} iclTreatments - The array of cataract treatment objects to be updated.
         * @returns {Array<Object>} - The updated array of cataract treatment objects.
         */
        iclTreatments = iclTreatments.map((treatment, index) => ({
            ...treatment,
            active: index === 0
        }));

        return {
            /* eslint-disable */
            props: {
                iclTreatments,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions)
                    }, // 2\
                    section_3: {
                        ...data?.acf?.section_3
                    }, // 2
                    section_4: {
                        ...data?.acf?.section_4,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_4?.lists),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
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
                    treatment_fund: {
                        ...data?.acf?.treatment_fund,
                        list: convertArrayOfObjectsToStrings(data?.acf?.treatment_fund?.list)
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
                    InfoCards: Array.isArray(data?.acf?.InfoCards)
                        ? data?.acf.InfoCards.map((ListData) => {
                              return {
                                  ...ListData,
                                  content: convertArrayOfObjectsToStrings(ListData?.content),
                                  bulletpoints: convertArrayOfObjectsToStrings(ListData?.bulletpoints)
                              };
                          })
                        : [],
                    sectionspeakteam: {
                        ...data?.acf?.sectionspeakteam
                    },
                    bettervision: {
                        ...data?.acf?.bettervision,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.bettervision?.descriptions)
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
