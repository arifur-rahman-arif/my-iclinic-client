import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import { glaucomaFaqList } from '@/page-sections/Faq/faqList';
import { glaucomaSliders } from '@/page-sections/FeaturedPatient';
import {
    BookConsultation,
    CtaSection,
    CtaSection2,
    GlaucomaChargeSection,
    SideImageSection
} from '@/page-sections/index';
import { LeftRightSection } from '@/page-sections/LeftRight';
import { leftRightListGlaucoma } from '@/page-sections/LeftRight/leftRightList';
import { glaucomaStackList } from '@/page-sections/StackedSection';
import { GlaucomaPageContentProps, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import YagHero from '@/page-sections/Masthead/YagHero';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import GlaucomaService from '@/page-sections/GlaucomaSection/GlaucomaService';
import SectionTextColumn from '@/components/SectionTextColumn';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader className="md:min-h-[70rem]" />
});

const PdfDownload = dynamic(() => import('@/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const FeaturedPatient = dynamic(() => import('@/page-sections/FeaturedPatient/FeaturedPatient'), {
    loading: () => <ComponentLoader />
});

const StackedSection = dynamic(() => import('@/page-sections/StackedSection/StackedSection'), {
    loading: () => <ComponentLoader />
});
const CompareSlider = dynamic(() => import('@/page-sections/CompareSlider/CompareSlider'), {
    loading: () => <ComponentLoader />
});
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

const EnvironmentalImpact = dynamic(() => import('@/page-sections/HomePage/EnvironmentalImpact'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends GlaucomaPageContentProps, PageDataInterface<GlaucomaPageContentProps> {}

interface GlaucomaPageProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Glaucomma page
 * @param {any} seo
 * @param {any} yoastJson
 * @param {DataInterface} data
 * @constructor
 */
export default function GlaucomaPage({ seo, yoastJson, data }: GlaucomaPageProps): JSX.Element {
    const serviceList: any = Array.isArray(data?.section_3)
        ? data?.section_3.map((service) => {
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
                          className="hidden md:block"
                          alt={service.desktopImage?.alt || ''}
                      />
                  ),
                  descriptions: stringArrayToElementArray(service.descriptions),
                  excludeNumbers: true
              };
          })
        : null;

    return (
        <Page
            title="Glaucoma Treatment London"
            description="Glaucoma is an eye condition where the optic nerve connecting the eye to the brain becomes damaged. Find out about our glaucoma treatment here."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                subTitleClass="max-w-[49rem]"
                titleClass="md:max-w-[60rem]"
                className="xl:grid-cols-[auto_30rem_1fr]"
                bannerClass="xl:pr-40"
                ctaButton={
                    <div className="flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-white hover:text-[#0099FF]"
                            iconPosition="left"
                            icon={
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-all duration-500 group-hover/button:stroke-[#007EF5]"
                                    />
                                </svg>
                            }
                        />
                    </div>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <SideImageSection
                h3LightHeading={
                    data?.section_1?.heading ||
                    'Manage and Treat your glaucoma with our 5-star Glaucoma clinic in London?'
                }
                descriptions={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        'Glaucoma is a chronic eye condition which is detected by our Glaucoma specialists after careful and regular assessments for your eyes.',
                        'We call Glaucoma the ‘silent thief of sight’ because the condition quietly progresses over time, without any sudden noticeable signs or symptoms.',
                        'Glaucoma tends to run in families and certain groups are more at risk than others. We understand this can be worrying, which is why our Glaucoma specialists are here to help manage and treat your Glaucoma for a better and happier quality of life!'
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image?.url || '/images/section-images/manage-glaucoma.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image?.url || '/images/section-images/manage-glaucoma-large.webp',
                    width: 664,
                    height: 642
                }}
                altText={data?.section_1?.large_image?.alt}
                positionReversed
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link   text-center  !border-2">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79] md:px-20"
                        />
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'Glaucoma Conditions'}
                descriptions={data?.section_2?.descriptions}
                descriptionWrapperClass="[&_div_strong]:mt-6 [&_div_strong]:block [&_div_strong]:text-heading"
                sectionImage={{
                    url: data?.section_2?.image?.src || '/images/section-images/manage-glaucoma.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.image?.src || '/images/section-images/manage-glaucoma-large.webp',
                    width: 664,
                    height: 642
                }}
                largeImageClassName="border border-solid border-[#EAECF0] rounded-radius2"
                textColumnExtras={
                    <BookConsultation buttonClassName="!border-2 -mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <LazyComponent>
                <LeftRightSection childrenList={(serviceList?.length && serviceList) || leftRightListGlaucoma} />
            </LazyComponent>

            <SideImageSection
                h3LightHeading={data?.section_4?.heading || 'Treatment, aftercare and monitoring Glaucoma'}
                containerClassName="xl:!grid-cols-[1fr_auto]"
                descriptions={data?.section_4?.descriptions}
                customColumn={
                    <LazyComponent>
                        <CompareSlider
                            image1={{
                                src:
                                    data?.section_4?.image_1?.url ||
                                    '/images/section-images/glaucoma-compare-slider-1.webp',
                                width: 748,
                                height: 498
                            }}
                            image2={{
                                src:
                                    data?.section_4?.image_2?.url ||
                                    '/images/section-images/glaucoma-compare-slider-2.webp',
                                width: 748,
                                height: 498
                            }}
                            altText1={data?.section_4?.image_1?.alt}
                            altText2={data?.section_4?.image_2?.alt}
                        />
                    </LazyComponent>
                }
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link   text-center  !border-2">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79] md:px-20"
                        />
                    </div>
                }
            />

            <SideImageSection
                containerClassName="xl:!grid-cols-[1fr_auto]"
                h3LightHeading={data?.section_5?.heading || 'Treatment options we provide For your Glaucoma Management'}
                descriptions={data?.section_5?.descriptions}
                descriptionWrapperClass="[&_div:nth-child(2)]:my-6"
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/manage-glaucoma.webp',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.image || '/images/section-images/manage-glaucoma-large.webp',
                    width: 664,
                    height: 642
                }}
                positionReversed
                largeImageClassName="h-full object-cover rounded-radius2"
            />

            <GlaucomaService
                {...data?.section6}
                descriptionWrapperClass="[&_p:last-child]:mt-6"
                reversed
                sectionFooter={
                    <BookConsultation buttonClassName="text-center !border-2 -mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <GlaucomaService {...data?.section12} descriptionWrapperClass="[&_p:last-child]:mt-6" />

            <GlaucomaService
                {...data?.section13}
                reversed
                sectionFooter={<Button2 type="button" text="Consult a specialist" onClick={openFreshdeskChat} />}
            />

            <GlaucomaService
                {...data?.section14}
                descriptionWrapperClass="[&_p:last-child]:mt-6"
                imageClass="border border-solid border-[#EAECF0] rounded-radius2"
                sectionFooter={
                    <BookConsultation buttonClassName="text-center !border-2 -mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <GlaucomaService {...data?.section15} reversed />

            <CtaSection {...data?.ctaSection} />

            <GlaucomaChargeSection {...data?.section_7} />

            <LazyComponent>
                <FeaturedPatient
                    h2Title={data?.section_11?.subheading || 'Glaucoma Patient'}
                    h3Title={data?.section_11?.heading || 'Life after Glaucoma Treatment & management'}
                    bandImageDescription={
                        (data?.section_11?.descriptions?.length &&
                            stringArrayToElementArray(data?.section_11?.descriptions)) || [
                            `I was originally recommended to this Clinic by my optician for urgent Glaucoma treatment. Mr Bolger saved my sight - what more can I say? Since then I have been seen regularly and had cataract treatment very successfully in both eyes.`,
                            'Ms Odufuwa- Bolger now sees me every 6 months for a complete checkup, the most recent being last week.',
                            'The array of the latest machines helps to inform them and track my progress. The staff are friendly, attentive and helpful; the rooms are clean and everything is wiped down before each use - this has always been the case even before the pandemic.',
                            'I take every opportunity to recommend this Clinic.'
                        ]
                    }
                    bandImageTitle={data?.section_11?.name || 'Tamara'}
                    bandImageURL={data?.section_11?.front_image || '/images/section-images/tamara.webp'}
                    reviewTitle="Thank you My-iClinic"
                    sliders={data?.section_11?.additional_images || glaucomaSliders}
                    bandColor="bg-[#004977]"
                    subTitleClass="!text-[#004977]"
                />
            </LazyComponent>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <Section>
                <Container className="grid content-start gap-16 md:gap-24">
                    <SectionTextColumn heading={data?.section17?.heading} />

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {[data?.section17?.card1, data?.section17?.card2].map((card, key) => (
                            <div
                                className="grid content-start gap-6 rounded-radius2 border border-solid border-[#EAECF0] p-8 transition-all duration-500 hover:shadow-shadow1 sm:p-16"
                                key={key}
                            >
                                <h3 className="font-latoBold text-[2.4rem] leading-[3.2rem] text-heading">
                                    {card?.title}
                                </h3>
                                <span className="-mt-2 h-[1.4rem] w-[6.7rem] rounded-[1.6rem] bg-[#FF7F00]"></span>
                                <span className="font-mulishBold text-[1.8rem] leading-[2.8rem] text-[#893277]">
                                    {card?.price}
                                </span>
                                {card?.descriptions?.length
                                    ? card.descriptions.map((item, i) => (
                                          <p key={i} dangerouslySetInnerHTML={{ __html: item }}></p>
                                      ))
                                    : null}
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <CtaSection2 {...data?.ctaSection2} />

            <LazyComponent>
                <StackedSection
                    h2Class="max-w-[84rem]"
                    stackList={
                        (data?.section_10?.slider_list?.length && data?.section_10?.slider_list) || glaucomaStackList
                    }
                    h3LightHeading={
                        data?.section_10?.heading?.light_heading || 'We promise the benefits of our Glaucoma'
                    }
                    h3BoldHeading={
                        data?.section_10?.heading?.bold_heading || 'treatment is safer and better for your health!'
                    }
                    noImages
                    containerClassName="md:!gap-8"
                />
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
                    title="Get the guide to Glaucoma treatment"
                    description="Robotic laser vision correction"
                    pageSlug="glaucoma-treatment"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || glaucomaFaqList}
                    titleLight="Glaucoma"
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
        const data: WpPageResponseInterface<GlaucomaPageContentProps> = await getPageData({
            slug: 'glaucoma-treatment'
        });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    masthead: {
                        ...data?.acf?.masthead,
                        title: stripInitialTags(data?.acf?.masthead?.title || ''),
                        largeImage: {
                            ...(data?.acf?.masthead?.largeImage && formatImage(data.acf?.masthead?.largeImage))
                        },
                        smallImage: {
                            ...(data?.acf?.masthead?.smallImage && formatImage(data.acf?.masthead?.smallImage))
                        }
                    },
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)
                    },
                    section_2: {
                        ...data?.acf.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section_2?.image && formatImage(data.acf?.section_2?.image))
                        }
                    },
                    section_3: Array.isArray(data?.acf?.section_3)
                        ? data?.acf.section_3.slice(0, 1).map((sectionData) => {
                              return {
                                  ...sectionData,
                                  descriptions: convertArrayOfObjectsToStrings(sectionData.descriptions)
                              };
                          })
                        : [],
                    section_4: {
                        ...data?.acf.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section6: {
                        ...data?.acf.section6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section6?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section6?.image && formatImage(data.acf?.section6?.image))
                        }
                    },
                    section12: {
                        ...data?.acf.section12,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section12?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section12?.image && formatImage(data.acf?.section12?.image))
                        }
                    },
                    section13: {
                        ...data?.acf.section13,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section13?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section13?.image && formatImage(data.acf?.section13?.image))
                        }
                    },
                    section14: {
                        ...data?.acf.section14,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section14?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section14?.image && formatImage(data.acf?.section14?.image))
                        }
                    },
                    section15: {
                        ...data?.acf.section15,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section15?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section15?.image && formatImage(data.acf?.section15?.image))
                        }
                    },
                    section_7: {
                        ...data?.acf.section_7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_7?.descriptions)
                    },
                    section_8: {
                        ...data?.acf.section_8,
                        package_list: Array.isArray(data?.acf?.section_8?.package_list)
                            ? data?.acf?.section_8?.package_list?.map((list) => {
                                  return {
                                      ...list,
                                      descriptions: convertArrayOfObjectsToStrings(list?.descriptions)
                                  };
                              })
                            : []
                    },
                    section_10: {
                        ...data?.acf.section_10,
                        slider_list: Array.isArray(data?.acf?.section_10?.slider_list)
                            ? data?.acf?.section_10?.slider_list?.map((list) => {
                                  return {
                                      ...list,
                                      descriptions: convertArrayOfObjectsToStrings(list?.descriptions)
                                  };
                              })
                            : []
                    },
                    section_11: {
                        ...data?.acf?.section_11,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_11?.descriptions)
                    },
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
                    },
                    section17: {
                        ...data?.acf.section17,
                        card1: {
                            ...data?.acf?.section17?.card1,
                            descriptions: convertArrayOfObjectsToStrings(data?.acf.section17?.card1?.descriptions).map(
                                (item) => stripInitialTags(item)
                            )
                        },
                        card2: {
                            ...data?.acf?.section17?.card2,
                            descriptions: convertArrayOfObjectsToStrings(data?.acf.section17?.card2?.descriptions).map(
                                (item) => stripInitialTags(item)
                            )
                        }
                    },
                    ctaSection2: {
                        ...data?.acf?.ctaSection2,
                        image: {
                            ...(data?.acf?.ctaSection2?.image && formatImage(data.acf?.ctaSection2?.image))
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
