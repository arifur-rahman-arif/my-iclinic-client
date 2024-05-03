import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import RelexHero from '@/components/page-sections/Masthead/RelexHero';
import { getPageData, getTreatments } from '@/lib';
import { lasekFaqList } from '@/page-sections/Faq/faqList';
import { lasekSliders } from '@/page-sections/FeaturedPatient';
import { TreatmentInterface } from '@/page-sections/FinanceCalculator/Context';
import {
    BookConsultation,
    CtaSection,
    CtaSection2,
    FullWidthImageSection,
    FullWidthImageSection3,
    NormalSection2,
    NormalSection3,
    SideImageSection
} from '@/page-sections/index';
import { leftRightListLasek } from '@/page-sections/LeftRight/leftRightList';
import { FinanceCalculatorButton, MastheadCtaButtons } from '@/page-sections/Masthead/MastheadICL';
import { lasekStackList } from '@/page-sections/StackedSection';
import FullWidthImageLarge from '@/section-images/lasek-doctor-large.webp';
import FullWidthImage from '@/section-images/lasek-doctor.webp';
import { LasekprkContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { stripInitialTags } from '@/utils/miscellaneous';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';

import Image from 'next/image';

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
    loading: () => <ComponentLoader className="md:min-h-[70rem]" />
});
const FeaturedPatient = dynamic(() => import('@/page-sections/FeaturedPatient/FeaturedPatient'), {
    loading: () => <ComponentLoader />
});

const LeftRightSection = dynamic(() => import('@/page-sections/LeftRight/LeftRightSection'), {
    loading: () => <ComponentLoader />
});

const BottomBanner2 = dynamic(() => import('@/page-sections/BottomFullBanners/BottomBanner2'), {
    loading: () => <ComponentLoader />
});

const StackedSection = dynamic(() => import('@/page-sections/StackedSection/StackedSection'), {
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

interface DataInterface extends LasekprkContentInterface, PageDataInterface<LasekprkContentInterface> {}

interface LasekPageProps {
    filteredTreatments: TreatmentInterface[];
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
export default function LasekPage({ seo, yoastJson, data, filteredTreatments }: LasekPageProps): JSX.Element {
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
                          className="rounded-primary md:hidden"
                          alt=""
                      />
                  ),
                  desktopImage: (
                      <Image
                          src={item?.desktopImage || '/images/section-images/lasek-consultation-large.webp'}
                          width={675}
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

    // MyclinicSlider
    const clinicSliderdata: any =
        Array.isArray(data?.clinicSlider) && data.clinicSlider.length > 0
            ? data.clinicSlider.map(
                  (service: { desktopimage: any; title: any; descriptions: string[] | undefined }) => {
                      return {
                          ...service,
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

    return (
        <Page
            title="Laser Eye Surgery Specialists in London"
            description="At My-iClinic, we offer a range of laser eye surgery procedures to correct common vision problems. Contact us today for a consultation with a specialist."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <RelexHero
                {...data?.masthead}
                imageClass="lg:absolute z-[1]"
                textContainerClass="relative z-[2]"
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
                            className="mt-4 flex-row-reverse justify-end"
                            showButton2
                            button2Class="text-white border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF] hover:!border-[#0099FF] hover:text-white"
                            button1Class="text-white bg-transparent border border-[#fff] hover:!text-[#0099FF] hover:!border-[#0099FF] hover:text-white"
                        />
                    </div>
                }
            />

            {/* <Masthead
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
            /> */}

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <LazyComponent>
                <FinanceCalculatorSection iclTreatments={filteredTreatments} headingText={data?.calculatorHeading} />
            </LazyComponent>

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
                h3LightHeading={data?.section_2?.heading || 'LASEK, PRK & PTK Laser Eye Surgery at My-iClinic'}
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `LASEK (Laser Assisted Epithelial Keratomileusis) and PRK (Photorefractive keratectomy) are almost identical vision correction procedures.`,
                        `LASEK & PRK eye surgery only differ in how our laser specialists remove different layers of the cornea. In LASEK eye surgery, the top layer of cells is simply moved to one side and replaced after surgery, whereas the PRK surgery removes them completely.`,
                        `Both LASEK and PRK surgery procedures use a laser to reshape the tissue on the surface of the eye to achieve clear vision.`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/lasek-vision-correction-treatment.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_2?.large_image ||
                        '/images/section-images/lasek-vision-correction-treatment-large.webp',
                    width: 675,
                    height: 539
                }}
                altText=""
                textColumnExtras={
                    <>
                        <BookConsultation>
                            <Button2 type="button" text="Book a consultation" />
                        </BookConsultation>
                    </>
                }
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
                    titleAttribute="/ Per month"
                    subheading={data?.price_finance?.subheading}
                    description={data?.price_finance?.description}
                    bestpriceline={data?.price_finance?.bestpriceline}
                    link="/lasek-prk/price"
                />
            </LazyComponent>

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
                            {data?.section_4?.heading?.light_heading || 'Why consider My-iClinic'}
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

            <CtaSection2 {...data?.ctaSection} />

            {/* SECTION 6 */}
            <FullWidthImageSection3
                title1={data?.section_6?.heading || ''}
                title2={data?.section_6?.subheading || '97% of people'}
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
                    bandImageURL={data?.section_7?.image || '/images/section-images/ms-priti-patel.webp'}
                    reviewTitle={data?.section_7?.review_title || 'Thank you My-iClinic'}
                    sliders={lasekSliders}
                    bandColor="bg-[#FF7F00]"
                    subTitleClass="!text-[#FF7F00]"
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <LazyComponent>
                <EnvironmentalImpact />
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

        const treatments = await getTreatments();
        let filteredTreatments = treatments.filter((treatment) => treatment.name === 'LASEK');

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

                    ctaSection: {
                        ...data?.acf?.ctaSection,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.ctaSection?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.ctaSection?.image && formatImage(data.acf?.ctaSection?.image))
                        }
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
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
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
