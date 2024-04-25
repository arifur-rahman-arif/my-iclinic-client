import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { maculerDegenerationFaqList } from '@/page-sections/Faq/faqList';
import { BookConsultation, FullWidthImageSection, SideImageSection } from '@/page-sections/index';
import { MacularContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';

import dynamic from 'next/dynamic';
import RelexHero from '@/page-sections/Masthead/RelexHero';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import { Button2 } from '@/components/Buttons';
import { CtaSection2 } from '@/components/page-sections';

const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends MacularContentInterface, PageDataInterface<MacularContentInterface> {}

interface MacularDegenerationProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 *  Url: /macular-degeneration
 *
 * @export
 * @returns {JSX.Element}
 */
export default function MacularDegeneration({ seo, yoastJson, data }: MacularDegenerationProps): JSX.Element {
    return (
        <Page
            title="Macular Degeneration Treatment in London"
            description="Our Macular Degeneration specialists are experienced in treating and providing patients with the efficient care they need. Contact us today to book an appointment."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <RelexHero
                {...data?.masthead}
                className="xl:max-h-[63rem]"
                imageClass="xl:max-h-[63rem]"
                suitabilityButton={
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
                {' '}
                <CallbackSection />
            </LazyComponent>

            <FullWidthImageSection
                h3Title={data?.section_3?.heading || 'Macular degeneration (AMD)'}
                altText=""
                description={
                    (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                        'Macular degeneration (AMD) is a common age-related eye disease which affects the clarity of your central vision. The incidence of macular degeneration increases with age, and about three people per 1000 over the age of 50 will develop macular degeneration.',
                        'Macular degeneration is categorised as an “age-related” eye condition meaning that it occurs mainly in older people.'
                    ]
                }
                image={data?.section_3?.image || '/images/section-images/macular-degeneration.png'}
                desktopImage={data?.section_3?.image || '/images/section-images/macular-degeneration-large.png'}
                containerClass="pb-16 md:py-24"
                largeImageClassName="!rounded-none"
                sectionClass="px-8 md:px-0 bg-brandLight"
                titleClass="text-heading max-w-[57rem]"
                descriptionClass="[&_*]:!text-[#404A4D] text-[#404A4D]"
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
                h3LightHeading={data?.section_4?.heading || 'Diagnosis and treatment for Macular degeneration'}
                descriptions={
                    (data?.section_4?.descriptions?.length && data?.section_4?.descriptions) || [
                        <strong>Understanding Macular Degeneration</strong>,
                        "The macula is the area of the retina that's responsible for seeing clearly in the centre of your vision.",
                        'If you are experiencing blurriness, distortion or blank spots in your central vision, our ophthalmologists can carry out comprehensive eye assessments to check the condition of your eyes and diagnose the type of macular degeneration you are experiencing.',
                        <strong>There are two types of macular degeneration conditions:</strong>
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/macular-degeneration-diagnosis.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_4?.imagelarge ||
                        '/images/section-images/macular-degeneration-diagnosis-large.png',
                    width: 660,
                    height: 682
                }}
                altText=""
                textColumnExtras={
                    <Button2
                        type="button"
                        text="Chat with us"
                        onClick={openFreshdeskChat}
                        className="group/button -mt-6 justify-self-start"
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
                                    className="transition-all duration-500 group-hover/button:stroke-[#003E79]"
                                />
                            </svg>
                        }
                    />
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_5?.heading || ' Macular degeneration treatment'}
                descriptions={
                    (data?.section_5?.descriptions?.length && data?.section_5?.descriptions) || [
                        'Although there is no definite treatment to reverse any current symptoms of macular degeneration, our ophthalmologist can help prevent or slow the progression of the disease.',
                        'After diagnosing your condition, your specialist will begin the treatment process.',
                        'If you are diagnosed with wet macular degeneration, your specialist will repeat Anti-VEGF and/or other injections to preserve and stabilise your vision. This treatment will require regular checkups and monitoring of your vision.',
                        'Dry macular degeneration requires frequent monitoring and checkups of the eyes. Dry macular degeneration is a less damaging condition for your eyes and does not require injections for treatment.'
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/macular-treatment.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.imagelarge || '/images/section-images/macular-treatment-large.png',
                    width: 661,
                    height: 621
                }}
                altText=""
                positionReversed
            />

            <CtaSection2 {...data?.ctaSection} subTitleClass="normal-case" />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || maculerDegenerationFaqList}
                    titleLight="Macular Degeneration"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'macular-degeneration' });

        return {
            /* eslint-disable */
            props: {
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
                    section_3: {
                        ...data?.acf?.section_3,
                        heading: stripInitialTags(data?.acf?.section_3?.heading || ''),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        heading: stripInitialTags(data?.acf?.section_4?.heading || ''),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    ctaSection: {
                        ...data?.acf?.ctaSection,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.cta_section?.descriptions)?.map(
                            (item) => stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.ctaSection?.image && formatImage(data.acf?.ctaSection?.image))
                        }
                    },
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
