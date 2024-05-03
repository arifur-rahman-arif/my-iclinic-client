import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { conjunctivitisFaqList } from '@/page-sections/Faq/faqList';
import {
    BookConsultation,
    ConjunctivitisTreatment,
    CtaSection,
    FullWidthImageSection,
    NormalSection5,
    SideImageSection
} from '@/page-sections/index';
import { ConjunctivitisPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import YagHero from '@/page-sections/Masthead/YagHero';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import { CtaSection2 } from '@/components/page-sections';

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
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface
    extends ConjunctivitisPageContentInterface,
        PageDataInterface<ConjunctivitisPageContentInterface> {}

interface ConjunctivitisProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /conjuctivitis-treatment-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function ConjuctivitisTreatmentLondon({ data, seo, yoastJson }: ConjunctivitisProps): JSX.Element {
    return (
        <Page
            title="Conjunctivitis Treatment in London"
            description="Our team of ophthalmologists are experienced in diagnosing and treating your conjunctivitis. Contact us to begin your journey towards improved vision."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                titleClass="md:max-w-[68rem]"
                className="xl:grid-cols-[auto_50rem_1fr]"
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

            <FullWidthImageSection
                h3Title={data?.section5?.heading}
                description={data?.section5?.descriptions}
                sectionClass="px-8 md:px-0 bg-brandLight"
                titleClass="text-heading max-w-[57rem]"
                descriptionClass="[&_*]:!text-[#404A4D] text-[#404A4D]"
                altText=""
                image={data?.section5?.image || '/images/section-images/conjunctivitis.webp'}
                desktopImage={data?.section5?.image || '/images/section-images/conjunctivitis-large.webp'}
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

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'Conjunctivitis Consultation'}
                descriptions={
                    (data?.section_1.descriptions.length && data?.section_1.descriptions) || [
                        'When you visit our clinic, we use our special imaging technology to carry out in-depth eye assessments to capture the health of your eyes, particularly the surface of the conjunctiva.',
                        'Our friendly technicians will guide you through these easy assessments to appropriately diagnose your conjunctivitis before meeting your ophthalmologist.',
                        'In your private consultation, your ophthalmologist will talk you through your diagnosis and conjunctivitis treatment.'
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image?.url || '/images/section-images/conjunctivitis-consultation.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image?.url ||
                        '/images/section-images/conjunctivitis-consultation-large.webp',
                    width: 554,
                    height: 525
                }}
                altText={data?.section_1?.large_image?.alt}
                positionReversed
            />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <CtaSection {...data?.ctaSection} />

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'What is included in my private consultation?'}
                descriptions={
                    (data?.section_2.descriptions.length && data?.section_2.descriptions) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image,
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image,
                    width: 649,
                    height: 552
                }}
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
                largeImageClassName="h-full object-cover w-full rounded-radius2"
            />

            <ConjunctivitisTreatment
                descriptions={
                    data?.section_3.descriptions.length
                        ? data?.section_3.descriptions
                        : [
                              'Our ophthalmologist can provide different antibiotics to treat conjunctivitis, depending on the cause of your condition. If you have conjunctivitis, having the correct diagnosis is essential.'
                          ]
                }
                heading={data?.section_3?.heading}
                list={data?.section_3?.card_list}
            />

            <NormalSection5
                heading={data?.section_4?.heading || 'Relieve your symptoms with treatment for conjunctivitis'}
                description={
                    (data?.section_4?.description.length && data?.section_4?.description) ||
                    'If you are experiencing conjunctivitis, our specialist team will book a private consultation.'
                }
            />

            <CtaSection2 {...data?.ctaSection2} />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    downloadFile={data?.email_contents?.download_file}
                    title={
                        <>
                            Get the guide to
                            <br />
                            Conjunctivitis treatment
                        </>
                    }
                    pageSlug="conjuctivitis-treatment-london"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || conjunctivitisFaqList}
                    titleLight="Conjunctivitis"
                    titleBold="Frequently asked questions"
                    description="Have a question? We are here to help."
                />
            </LazyComponent>
        </Page>
    );
}

/**
 * Fetch the data from WordPress database
 *
 * @returns {Promise<{props: {posts: any}}>}
 */
export async function getStaticProps() {
    try {
        const data: WpPageResponseInterface<ConjunctivitisPageContentInterface> = await getPageData({
            slug: 'conjuctivitis-treatment-london'
        });

        return {
            /* eslint-disable */
            props: {
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
                    section5: {
                        ...data?.acf.section5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section5?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
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
                        list: convertArrayOfObjectsToStrings(data?.acf.section_2?.list)
                    },
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions),
                        card_list: (data?.acf.section_3?.card_list || [])?.map((item) => {
                            return {
                                ...item,
                                descriptions: convertArrayOfObjectsToStrings(item.descriptions),
                                image: {
                                    ...(item?.image && formatImage(item.image))
                                }
                            };
                        })
                    },
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
                    },
                    ctaSection2: {
                        ...data?.acf?.ctaSection2,
                        image: {
                            ...(data?.acf?.ctaSection2?.image && formatImage(data.acf?.ctaSection2?.image))
                        }
                    }
                } as DataInterface,
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || ''
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
