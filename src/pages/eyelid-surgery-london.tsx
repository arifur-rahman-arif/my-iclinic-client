import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { eyelidFaqList } from '@/page-sections/Faq/faqList';
import { CtaSection, GlaucomaChargeSection } from '@/page-sections/index';
import { EyelidContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import CataractHero from '@/page-sections/Masthead/CataractHero';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import CorneaOfferings from '@/page-sections/CorneaPage/CorneaOfferings';
import VisionCorrection from '@/page-sections/HomePage/VisionCorrection';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

const CompanyLogos = dynamic(() => import('@/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends EyelidContentInterface, PageDataInterface<EyelidContentInterface> {}

interface EyeLidPageProps {
    seo: any;
    yoastJson: any;
    data: DataInterface;
}

/**
 * Home page component for the App
 *
 * * Url: /eyelid-surgery-london
 *
 * @export
 * @returns {JSX.Element}
 */
export default function EyeLidPage({ seo, yoastJson, data }: EyeLidPageProps): JSX.Element {
    return (
        <Page
            title="Specialist Eyelid Surgery in London"
            description="Our trusted oculoplastic surgeons deliver the best treatment for eyelid conditions. Find out more about our treatments and how we can help you."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <CataractHero
                {...data?.masthead}
                headingClassName="md:max-w-[57rem]"
                subTitleClass="max-w-[50rem]"
                smallImageClass="row-start-1 mt-0"
                suitabilityButton={
                    <div className="mt-6 flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="sitemap-link border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center border-transparent bg-transparent text-white hover:text-[#007EF5]"
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

            <GlaucomaChargeSection {...data?.section2} />

            <CorneaOfferings
                id={data?.section3?.heading?.trim().split(' ').join('-')}
                reversed
                heading={data?.section3?.heading}
                descriptionContainerClassName="[&_p:nth-child(2)]:-mt-4 [&_p:last-child]:!-mt-6 [&_p:nth-child(7)]:mt-6  [&_p:nth-child(2)]:mb-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section3?.descriptions}
                image={data?.section3?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section4?.heading?.trim().split(' ').join('-')}
                heading={data?.section4?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section4?.descriptions}
                image={data?.section4?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section5?.heading?.trim().split(' ').join('-')}
                reversed
                heading={data?.section5?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(4)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section5?.descriptions}
                image={data?.section5?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section6?.heading?.trim().split(' ').join('-')}
                heading={data?.section6?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section6?.descriptions}
                image={data?.section6?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section7?.heading?.trim().split(' ').join('-')}
                reversed
                heading={data?.section7?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section7?.descriptions}
                image={data?.section7?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section8?.heading?.trim().split(' ').join('-')}
                heading={data?.section8?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section8?.descriptions}
                image={data?.section8?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section9?.heading?.trim().split(' ').join('-')}
                reversed
                heading={data?.section9?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section9?.descriptions}
                image={data?.section9?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <VisionCorrection {...data?.section10} />

            <CorneaOfferings
                id={data?.section11?.heading?.trim().split(' ').join('-')}
                reversed
                heading={data?.section11?.heading}
                descriptionContainerClassName="[&_p:nth-child(2)]:my-6 [&_p:last-child]:!-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section11?.descriptions}
                image={data?.section11?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section12?.heading?.trim().split(' ').join('-')}
                heading={data?.section12?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section12?.descriptions}
                image={data?.section12?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <CorneaOfferings
                id={data?.section13?.heading?.trim().split(' ').join('-')}
                reversed
                heading={data?.section13?.heading}
                headingClassName="!text-[2.4rem] !leading-[3.2rem]"
                sectionHeadingClass="grid-cols-1"
                barClassName="hidden"
                textColumnFooterClass="col-start-1"
                descriptionContainerClassName="col-start-1 [&_p:first-child]:-mt-12 [&_p:last-child]:-mt-6 [&_p:nth-child(5)]:mt-6 [&_p:nth-child(1)_span]:font-mulishBold [&_p:nth-child(2)_span]:font-mulishBold"
                descriptions={data?.section13?.descriptions}
                image={data?.section13?.image}
                textColumnFooter={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <CtaSection title={data?.sectionspeakteam?.title} subtitle={data?.sectionspeakteam?.sub_heading} />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || eyelidFaqList}
                    titleLight="Eyelid surgery"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'eyelid-surgery-london' });

        return {
            /* eslint-disable */
            props: {
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
                    section2: {
                        ...data?.acf.section2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section2?.descriptions)
                    },
                    section3: {
                        ...data?.acf?.section3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section3?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section3?.image && formatImage(data?.acf?.section3?.image))
                        }
                    },
                    section4: {
                        ...data?.acf?.section4,
                        heading: stripInitialTags(data?.acf?.section4?.heading || ''),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section4?.image && formatImage(data?.acf?.section4?.image))
                        }
                    },
                    section5: {
                        ...data?.acf?.section5,
                        heading: stripInitialTags(data?.acf?.section5?.heading || ''),
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section5?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section5?.image && formatImage(data?.acf?.section5?.image))
                        }
                    },
                    section6: {
                        ...data?.acf?.section6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section6?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section6?.image && formatImage(data?.acf?.section6?.image))
                        }
                    },
                    section7: {
                        ...data?.acf?.section7,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section7?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section7?.image && formatImage(data?.acf?.section7?.image))
                        }
                    },
                    section8: {
                        ...data?.acf?.section8,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section8?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section8?.image && formatImage(data?.acf?.section8?.image))
                        }
                    },
                    section9: {
                        ...data?.acf?.section9,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section9?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section9?.image && formatImage(data?.acf?.section9?.image))
                        }
                    },
                    section10: {
                        ...data?.acf?.section10,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section10?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section10?.image && formatImage(data?.acf?.section10?.image))
                        },
                        largeImage: {
                            ...(data?.acf?.section10?.largeImage && formatImage(data?.acf?.section10?.largeImage))
                        }
                    },
                    section11: {
                        ...data?.acf?.section11,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section11?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section11?.image && formatImage(data?.acf?.section11?.image))
                        }
                    },
                    section12: {
                        ...data?.acf?.section12,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section12?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section12?.image && formatImage(data?.acf?.section12?.image))
                        }
                    },
                    section13: {
                        ...data?.acf?.section13,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section13?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section13?.image && formatImage(data?.acf?.section13?.image))
                        }
                    },
                    sectionspeakteam: {
                        ...data?.acf?.sectionspeakteam
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
