import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import { lazyEyesFaqList } from '@/page-sections/Faq/faqList';
import { BookConsultation, CtaSection, SideImageSection } from '@/page-sections/index';
import { LazyEyesPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import { Button2 } from 'src/components/Buttons';
import YagHero from '@/page-sections/Masthead/YagHero';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';

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

interface DataInterface extends LazyEyesPageContentInterface, PageDataInterface<LazyEyesPageContentInterface> {}

interface LazyEyesProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Lazy Eyes page component for the App
 *
 * * Url: /lazy-eyes-treatement
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LazyEyesTreatement({ data, seo, yoastJson }: LazyEyesProps): JSX.Element {
    return (
        <Page title="Lazy Eye treatment in London" seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                subTitleClass="max-w-[49rem] mb-12"
                titleClass="md:max-w-[60rem]"
                className="xl:grid-cols-[auto_50rem_1fr]"
                bannerClass="xl:pr-40"
                ctaButton={
                    <div className="mt-6 flex flex-wrap items-center justify-start gap-6">
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
                h3LightHeading={data?.section_1?.heading || 'Lazy eyes (amblyopia) in children and adults'}
                descriptions={
                    (data?.section_1.descriptions.length && data?.section_1.descriptions) || [
                        "A lazy eye (amblyopia) appears as an eye which turns inward or outward, usually occurring in a child's early development.",
                        'This lazy eye causes vision problems and potential vision loss in the future and can be caused by a family history of amblyopia, a refractive error and/or an imbalance in the eye muscles (misalignment of the eyes).'
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image?.url || '/images/section-images/vision-correction-lazy-eyes.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image?.url ||
                        '/images/section-images/vision-correction-lazy-eyes-large.webp',
                    width: 659,
                    height: 477
                }}
                altText={data?.section_1?.large_image?.alt}
                largeImageClassName="h-full w-full object-cover"
                containerClassName="xl:!grid-cols-[1fr_auto]"
                textColumnExtras={
                    <div className="flex flex-wrap items-center justify-start gap-6">
                        <BookConsultation buttonClassName="">
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>

                        <Button2
                            type="button"
                            text="Chat with us"
                            onClick={openFreshdeskChat}
                            className="group/button justify-self-center bg-transparent text-[#003E79]  md:px-20"
                        />
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_2?.heading || 'Diagnosis and treatment for a Lazy eye'}
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2.descriptions) || [
                        'If your child has a lazy eye, you may be experiencing the following symptoms:'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image?.url || '/images/section-images/amblyopia-diagnosis.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image?.url || '/images/section-images/amblyopia-diagnosis-large.webp',
                    width: 664,
                    height: 562
                }}
                altText={data?.section_2?.large_image?.alt}
                positionReversed
            />

            <SideImageSection
                h3LightHeading={data?.section_3?.heading || 'What is included in my private consultation?'}
                descriptions={
                    (data?.section_3.descriptions?.length && data?.section_3.descriptions) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                descriptionWrapperClass="[&_div:nth-child(2)]:mt-6"
                containerClassName="xl:!grid-cols-[1fr_auto]"
                sectionImage={{
                    url: data?.section_3?.image?.url || '/images/section-images/amblyopia-consultation.webp',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_3?.large_image?.url || '/images/section-images/amblyopia-consultation-large.webp',
                    width: 649,
                    height: 552
                }}
                altText={data?.section_3?.large_image?.alt}
                largeImageClassName="w-full h-full"
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Request a call back" />
                    </BookConsultation>
                }
            />

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <Section>
                <Container className="grid justify-items-center gap-12">
                    <h2 className="w-full max-w-[64rem] text-center normal-case">
                        {data?.section_4?.heading || 'Private consultation'}
                    </h2>
                    <p className="max-w-[53rem] text-center">
                        {data?.section_4?.description ||
                            'Book a private consultation today with our specialist for all-inclusive eye assessments and treatment planning.'}
                    </p>
                </Container>
            </Section>

            <CtaSection {...data?.ctaSection} />

            <SideImageSection
                containerClassName="xl:!grid-cols-[1fr_auto]"
                h3LightHeading={
                    <>
                        {data?.section_5?.heading || 'Lazy eye treatment for adults & children'}
                        <br />
                    </>
                }
                descriptions={
                    (data?.section_5?.descriptions?.length && data?.section_5.descriptions) || [
                        'Our ophthalmologist will use occlusion therapy to help your vision. Eye patches are used by our ophthalmologist to stimulate the weaker eye and improve vision overtime.',
                        'Other treatments such as: eye drops, corrective glasses and contact lenses may be prescribed or recommended as the best treatment for your lazy eye condition.'
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image?.url,
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.url || '/images/section-images/lazy-eye-treatment-large.webp',
                    width: 647,
                    height: 503
                }}
                altText={data?.section_5?.large_image?.alt}
            />

            <SideImageSection
                containerClassName="bg-brandLight rounded-radius2 py-12 md:py-24 xl:!grid-cols-2"
                normalLightHeading={
                    <strong className="block text-center normal-case md:text-left">
                        {data?.section_6?.heading || 'Visit our Lazy eye specialist for diagnosis and treatment'}
                    </strong>
                }
                descriptions={
                    (data?.section_6?.descriptions.length &&
                        stringArrayToElementArray(data?.section_6.descriptions)) || [
                        <span className="block text-center md:text-left">
                            Book a private consultation today with our ophthalmologist for all-inclusive eye assessments
                            and treatment planning.
                        </span>
                    ]
                }
                sectionImage={{
                    url: data?.section_6?.image?.url || '/images/section-images/tedy-bear.webp',
                    width: 390,
                    height: 390
                }}
                positionReversed
                largeImageClassName="mx-auto w-auto"
                sectionImageDesktop={{
                    url: data?.section_6?.large_image?.url || '/images/section-images/tedy-bear.webp',
                    width: 412,
                    height: 439
                }}
                altText={data?.section_6?.large_image?.alt}
                textColumnExtras={
                    <div className="mt-12 flex flex-col items-start justify-start gap-3">
                        <div className="flex items-center justify-start gap-4">
                            <Image
                                src="/images/icons/icon-phone-dark.svg"
                                alt=""
                                quality={70}
                                width={20}
                                height={20}
                                className="h-8 w-8"
                            />
                            <a href="tel:0208 445 8877">
                                <span className="relative block cursor-pointer font-latoBold text-heading">
                                    (+44) 0208 445 8877
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <Image src="/images/icons/icon-chat-dark.svg" alt="" width={24} height={24} />
                            <button
                                className="relative block cursor-pointer font-latoBold text-heading"
                                onClick={openFreshdeskChat}
                            >
                                Chat with us
                            </button>
                        </div>
                        <BookConsultation buttonClassName="mt-4">
                            <Button2 type="button" text="Book a consultation" />
                        </BookConsultation>
                    </div>
                }
            />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    title={
                        <>
                            Get the guide to
                            <br />
                            Lazy eye treatment
                        </>
                    }
                    pageSlug="lazy-eyes-treatement"
                    downloadFile={data?.email_contents?.download_file}
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || lazyEyesFaqList}
                    titleLight="Lazy Eyes"
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
        const data: WpPageResponseInterface<LazyEyesPageContentInterface> = await getPageData({
            slug: 'lazy-eyes-treatement'
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
                    // Correct your vision Lazy eyes (amblyopia)
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Amblyopia Diagnosis
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Amblyopia Consultation
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Lazy Eye Treatment
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Lazy Eye Specialist Banner
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_6?.descriptions)
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
