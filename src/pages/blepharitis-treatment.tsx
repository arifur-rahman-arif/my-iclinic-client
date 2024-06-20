/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { blepharitisFaqList } from '@/page-sections/Faq/faqList';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { blepharitisList } from '@/page-sections/SectionParts/stack-column/list';
import { BlepharitisContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import FullWidthImageSection from '@/components/page-sections/SideImageSection/FullWidthImageSection';
import { SideImageSection } from '@/components/page-sections/SideImageSection';
import StackColumn2 from '@/components/page-sections/SectionParts/stack-column/StackColumn2';
import { CtaSection2 } from '@/components/page-sections';
import YagHero from '@/components/page-sections/Masthead/YagHero';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';

import CompanyLogos from '@/page-sections/CompanyLogos/CompanyLogos';
import Faq from '@/page-sections/Faq/Faq';
import CallbackSection from '@/page-sections/RequestCallback/CallbackSection';
import PatientReviews from '@/components/page-sections/icl-components/PatientReviews';

interface DataInterface extends BlepharitisContentInterface, PageDataInterface<BlepharitisContentInterface> {}

interface BlepharitisPageProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Presbyond page component for the App
 *
 * * Url: /blepharitis-treatment
 *
 * @export
 * @returns {JSX.Element}
 */
export default function BlepharitisPage({ seo, yoastJson, data }: BlepharitisPageProps): JSX.Element {
    return (
        <Page title="Blepharitis treatment in London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                subTitleClass="max-w-[49rem]"
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
                <CallbackSection />
            </LazyComponent>

            {/* SEction_1 */}
            <FullWidthImageSection
                containerClass="pb-16 md:py-24"
                h3Title={
                    <>
                        {data?.section_1?.heading_1 || 'London’s best treatment for'}
                        <br /> {data?.section_1?.heading_2 || 'Blepharitis symptoms'}
                    </>
                }
                sectionClass="px-8 md:px-0 bg-brandLight"
                titleClass="text-heading max-w-[57rem]"
                descriptionClass="[&_*]:!text-[#404A4D] text-[#404A4D]"
                altText=""
                description={
                    (data?.section_1?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_1?.descriptions)) || [
                        `At My iClinic, we understand that Blepharitis can be a difficult condition to manage on your own. That's why we offer comprehensive treatment plans designed to help you manage the symptoms and get back to living a life free of discomfort.`,
                        `Our Blepharitis treatment specialists provide straightforward, effective solutions tailored to your individual needs.`
                    ]
                }
                image={data?.section_1?.image || '/images/section-images/blepharitis.webp'}
                desktopImage={data?.section_1?.large_image || '/images/section-images/blepharitis.webp'}
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

            {/* SECTION 2 */}
            <SideImageSection
                h3LightHeading={data?.section_2.heading || 'Relieve your symptoms with Treatment for Blepharitis'}
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `Blepharitis is a chronic condition involving the inflammation of your eyelids, leading them to become red and swollen.`,
                        `Although Blepharitis is not painful in the eye or contagious, it can be very uncomfortable and irritating to anybody experiencing their symptoms getting worse.`,
                        `We understand how blepharitis can be very stressful and problematic which is why our treatment options for blepharitis are very straightforward and can help ease the stress of facing these symptoms alone.`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/symptoms-relieve-large.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/symptoms-relieve-large.webp',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            {/* TREATMENTS FOR BLEPHARITIS */}
            <SideImageSection
                h3LightHeading={data?.section_3?.heading?.light_heading || 'Managing your Blepharitis with treatment'}
                descriptions={
                    (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                        `Although blepharitis is a chronic condition that needs constant management, we have the most successful treatments to help remission (lessen) your symptoms and relieve you of the stress and worry you might be experiencing with Blepharitis throughout your daily life.`,
                        `When arriving at a private consultation with us, our blepharitis specialist will guide you through some eye checks which are essential in capturing where the blepharitis is growing and how your blepharitis symptoms can be best treated.`
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/treatments-for-blepharitis-large.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image || '/images/section-images/treatments-for-blepharitis-large.webp',
                    width: 675,
                    height: 558
                }}
                containerClassName="xl:!grid-cols-[1fr_auto]"
                textColumnExtras={
                    <Button2
                        type="button"
                        text="Consult a specialist"
                        onClick={openFreshdeskChat}
                        className="justify-self-start"
                    />
                }
            />
            {/* Section 4   WE CAN ALWAYS HELP */}
            <SideImageSection
                h3LightHeading={
                    data?.section_4?.heading || 'Don’t suffer with your Blepharitis symptoms we can always help!'
                }
                descriptions={
                    (data?.section_4?.descriptions?.length && data?.section_4?.descriptions) || [
                        `Whether you have mild or growing symptoms of blepharitis our specialist can treat your symptoms.`,
                        `By choosing My iClinic as your preferred blepharitis specialist in London, you can rest assured that you'll receive expert advice and guidance towards managing the condition for lasting results. Your specialist will take the time to discuss your concerns and collaboratively come up with solutions designed around individual lifestyle preferences. Some of our treatments include:`
                    ]
                }
                customColumn={
                    <StackColumn2
                        className="rounded-radius2 border border-solid border-[#EAECF0] p-8 sm:p-12 md:p-24"
                        list={(data?.section_4?.list.length && (data?.section_4?.list as any)) || blepharitisList}
                    />
                }
            />
            {/* Book with our Blepharitis specialist Section 5  */}
            <CtaSection2 {...data?.section_5} />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || blepharitisFaqList}
                    titleLight="Blepharitis"
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
        const data: WpPageResponseInterface<BlepharitisContentInterface> = await getPageData({
            slug: 'blepharitis-treatment'
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
                    // Dry eye syndrome symptoms
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions)
                    }, // SYMPTOMS RELIEVE
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    }, // TREATMENTS FOR BLEPHARITIS
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        list: Array.isArray(data?.acf?.section_4?.list)
                            ? data?.acf.section_4?.list.map((item) => {
                                  return {
                                      ...item,
                                      description: convertArrayOfObjectsToStrings(item.descriptions).map((item) =>
                                          stripInitialTags(item)
                                      )
                                  };
                              })
                            : []
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_5?.descriptions),
                        image: {
                            ...(data?.acf?.section_5?.image && formatImage(data.acf?.section_5?.image))
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
