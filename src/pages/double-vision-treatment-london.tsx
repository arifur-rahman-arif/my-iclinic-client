import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { doubleVisionFaqList } from '@/page-sections/Faq/faqList';
import { FullWidthImageSection, SideImageSection } from '@/page-sections/index';
import FullWidthImageLarge from '@/section-images/double-vision-large.webp';
import FullWidthImage from '@/section-images/double-vision.webp';
import { DoubleVisionPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';

import dynamic from 'next/dynamic';
import YagHero from '@/page-sections/Masthead/YagHero';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';

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

interface DataInterface extends DoubleVisionPageContentInterface, PageDataInterface<DoubleVisionPageContentInterface> {}

interface DoubleVisionPageProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /eye-treatments/double-vision
 *
 * @export
 * @returns {JSX.Element}
 */
export default function DoubleVisionPage({ data, seo, yoastJson }: DoubleVisionPageProps): JSX.Element {
    return (
        <Page title="Double vision symptoms (Diplopia)" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                subTitleClass="max-w-[49rem] mb-12"
                titleClass="md:max-w-[60rem]"
                className="xl:grid-cols-[auto_54rem_1fr]"
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
                <CallbackSection />{' '}
            </LazyComponent>

            <FullWidthImageSection
                h3Title={
                    data?.section5?.heading || 'In most cases double vision is usually a temporary and uncommon issue'
                }
                titleClass="max-w-[59rem]"
                description={data?.section5.descriptions}
                image={data?.section5?.image || FullWidthImage}
                desktopImage={data?.section5?.image || FullWidthImageLarge}
                containerClass="pb-16 md:!py-0 xl:!grid-cols-[1fr_auto]"
                descriptionWrapperClass="[&_div:first-child_span]:!font-mulishBold [&_div:first-child_span]:!text-[#00BFFF]"
                largeImageClassName="!rounded-none"
                textColumnExtraBottomElements={
                    <div className="mt-12 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Request a call  back" />
                        </BookConsultation>
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'Double vision symptoms and vision testing'}
                descriptions={data?.section_1.descriptions}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/vision-testing.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/vision-testing-large.webp',
                    width: 675,
                    height: 627
                }}
                largeImageClassName="h-full w-full object-cover"
                positionReversed
            />

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'Private consultation & treatment for double vision'}
                descriptions={data?.section_2.descriptions}
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/consultation-&-treatment-double-vision.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_2?.large_image ||
                        '/images/section-images/consultation-&-treatment-double-vision-large.webp',
                    width: 675,
                    height: 682
                }}
                largeImageClassName="h-full w-full object-cover"
                descriptionWrapperClass="[&_div:last-child]:mt-6"
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
                                    className="transition-all duration-500 group-hover/button:stroke-[#007EF5]"
                                />
                            </svg>
                        }
                    />
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_3?.heading}
                descriptions={data?.section_3.descriptions}
                descriptionWrapperClass="[&_div:nth-child(2)]:mt-6"
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/consultation-&-treatment-double-vision.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_3?.image ||
                        '/images/section-images/consultation-&-treatment-double-vision-large.webp',
                    width: 675,
                    height: 682
                }}
                largeImageClassName="h-full w-full object-cover"
                positionReversed
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" className="group/button justify-self-start" />
                    </BookConsultation>
                }
            />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || doubleVisionFaqList}
                    titleLight="Double vision"
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
        const data: WpPageResponseInterface<DoubleVisionPageContentInterface> = await getPageData({
            slug: 'double-vision-treatment-london'
        });

        return {
            /* eslint-disable */
            props: {
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
                    section5: {
                        ...data?.acf.section5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section5?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Symptoms and vision
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Consultation & treatment
                    section_2: {
                        ...data?.acf.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    patientReviews: {
                        ...data?.acf?.patientReviews,
                        heading: stripInitialTags(data?.acf?.patientReviews?.heading || '')
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
