import { BreadCrumb } from '@/components/Breadcrumb';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { getPageData } from '@/lib';
import { dryEyeFaqList } from '@/page-sections/Faq/faqList';
import { CtaSection2, FullWidthImageSection, SideImageSection, StackColumn2 } from '@/page-sections/index';
import { lazyEyesList } from '@/page-sections/SectionParts/stack-column/list';
import { DryEyesContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';

import YagHero from '@/page-sections/Masthead/YagHero';
import BookConsultation from '@/page-sections/SectionParts/BookConsultation/BookConsultation';
import { Button2 } from '@/components/Buttons';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';

import CompanyLogos from '@/page-sections/CompanyLogos/CompanyLogos';
import Faq from '@/page-sections/Faq/Faq';
import CallbackSection from '@/page-sections/RequestCallback/CallbackSection';
import PatientReviews from '@/components/page-sections/icl-components/PatientReviews';

interface DataInterface extends DryEyesContentInterface, PageDataInterface<DryEyesContentInterface> {}

interface DryEyesProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /macular-degeneration
 *
 * @export
 * @returns {JSX.Element}
 */
export default function DryEyesTreatmentLondon({ seo, yoastJson, data }: DryEyesProps): JSX.Element {
    return (
        <Page title="Dry Eye Treatment Specialists In London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                subTitleClass="max-w-[49rem] mb-12"
                titleClass="md:max-w-[60rem]"
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

            <FullWidthImageSection
                h3Title={data?.section_1?.heading || 'Private consultation for dry eyes'}
                description={data?.section_1?.descriptions}
                image={data?.section_1?.image || '/images/section-images/dry-eye-private-consultation-large.webp'}
                desktopImage={
                    data?.section_1?.large_image || '/images/section-images/dry-eye-private-consultation-large.webp'
                }
                descriptionWrapperClass="[&_div:first-child_span]:!font-mulishBold [&_div:first-child_span]:!text-[#00BFFF] [&_div]:!opacity-80"
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
                textColumnExtraBottomElements={
                    <div className="mt-12 flex flex-wrap items-center justify-start gap-6">
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

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'What is included in my private consultation?'}
                descriptions={
                    (data?.section_2?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_2?.descriptions)) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                descriptionWrapperClass="[&_div:nth-child(2)]:mt-6"
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/dry-eye-consultation-large.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/dry-eye-consultation-large.webp',
                    width: 631,
                    height: 582
                }}
                largeImageClassName="h-full w-full object-cover rounded-radius2"
                positionReversed={true}
                textColumnExtras={
                    <Button2
                        type="button"
                        text="Speak to a specialist"
                        className="-mt-6 justify-self-start"
                        onClick={openFreshdeskChat}
                    />
                }
            />

            {/*  Section 3  */}
            <SideImageSection
                h3LightHeading={data?.section_3?.heading || 'Managing your dry eye syndrome'}
                descriptions={
                    (data?.section_3?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_3?.descriptions)) || [
                        <strong>
                            Our consultants will help you manage your dry eye syndrome for a clearer, brighter quality
                            of life.
                        </strong>
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/macular-treatment.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image || '/images/section-images/macular-treatment-large.webp',
                    width: 658,
                    height: 459
                }}
                customColumn={
                    <StackColumn2
                        className="rounded-radius2 border border-solid border-[#EAECF0] p-8 sm:p-12 md:p-24"
                        list={(data?.section_3?.list as any) || lazyEyesList}
                    />
                }
            />

            {/* Section_4   Friendly vision correction  */}
            <CtaSection2
                title={data?.section_4?.heading || 'Friendly vision correction treatment for dry eyes'}
                descriptions={
                    (data?.section_4?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_4?.descriptions)) || [
                        'If you are experiencing dry eye symptoms and have difficulty with short sightedness or near sightedness (a refractive error in your eye), we offer vision correction treatment options which can eliminate the need for wearing glasses and/or uncomfortable contact lenses.',
                        'Implantable Contact Lenses are a friendly vision correction treatment which helps dry eye syndrome. To regain clear, natural eyesight without needing your glasses and contact lenses we can offer you a <a href="/suitability-check">FREE suitability check</a> for our implantable contact lenses.'
                    ]
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
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || dryEyeFaqList}
                    titleLight="Dry eye"
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
        const data: WpPageResponseInterface<DryEyesContentInterface> = await getPageData({
            slug: 'dry-eyes-treatment-london'
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
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Dry eye consultation
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    //  Managing your EYE SYNDROME TEST
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions),
                        list: Array.isArray(data?.acf?.section_3?.list)
                            ? data?.acf.section_3?.list.map((item) => {
                                  return {
                                      ...item,
                                      description: convertArrayOfObjectsToStrings(item.descriptions)
                                  };
                              })
                            : []
                    },
                    // section 4 Friendly vision correction
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions)
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
