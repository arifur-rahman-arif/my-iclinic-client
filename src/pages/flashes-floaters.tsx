/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import { Button2 } from '@/components/Buttons';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import YagHero from '@/components/page-sections/Masthead/YagHero';
import { getPageData } from '@/lib';
import { flashesFaqList } from '@/page-sections/Faq/faqList';
import { BookConsultation, BulletList, CtaSection, CtaSection2, SideImageSection } from '@/page-sections/index';
import { FlashesContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage, stringArrayToElementArray } from '@/utils/apiHelpers';
import { openFreshdeskChat, stripInitialTags } from '@/utils/miscellaneous';
import dynamic from 'next/dynamic';

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

interface DataInterface extends FlashesContentInterface, PageDataInterface<FlashesContentInterface> {}

interface FlashesFloatersProps {
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
export default function FlashesFloaters({ data, seo, yoastJson }: FlashesFloatersProps): JSX.Element {
    return (
        <Page
            title="Eye Flashes & Floaters Treatment in London"
            description="Get help with understanding and managing the symptoms of eye flashes and floaters with our professional team at My-iClinic."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                subTitleClass="max-w-[49rem] mb-12 md:mb-16"
                titleClass="md:max-w-[68rem]"
                className="xl:grid-cols-[auto_30rem_1fr]"
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
                h3LightHeading={data?.section_1?.heading || 'Eye flashes & floaters in children and adults'}
                descriptions={data?.section_1?.descriptions}
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/eye-flashes-&-floaters-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.image_large || '/images/section-images/eye-flashes-&-floaters-large.png',
                    width: 644,
                    height: 559
                }}
                largeImageClassName="h-full object-cover"
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Book a consultation" />
                    </BookConsultation>
                }
            />

            <SideImageSection
                h3LightHeading={
                    data?.section_2?.heading || 'Diagnosis, treatment & management for eye flashes & floaters'
                }
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        'We offer a private consultation with our ophthalmologist to check the health of your eye and provide a diagnosis of any eye conditions you may have, including floater treatment advice and surgery planning if required.',
                        'Although you may experience eye floaters and flashes of light, it is rare to be given a diagnosis for an eye condition as these floaters are generally nothing to worry about in early adulthood.',
                        'For people over the age of 50, flashes & floaters may indicate early signs of more serious eye conditions. If you are over the age of 50 and experiencing eye flashes & floaters, please contact our support team for a private consultation with our ophthalmologist.'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/eye-flashes-diagnosis-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.image_large || '/images/section-images/eye-flashes-diagnosis-large.png',
                    width: 654,
                    height: 559
                }}
                positionReversed
            />

            <CtaSection title={data?.speak_to_our_team?.title} subtitle={data?.speak_to_our_team?.subtitle} />

            <SideImageSection
                containerClassName="xl:!grid-cols-[1fr_auto]"
                h3LightHeading={data?.section_3?.heading || 'What is included in my private consultation?'}
                descriptions={
                    (data?.section_3?.descriptions?.length && data?.section_3?.descriptions) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £300</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image || '/images/section-images/cornea-consultation-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.image_large || '/images/section-images/cornea-consultation-large.png',
                    width: 643,
                    height: 461
                }}
                textColumnExtras={
                    <div className="grid gap-12">
                        <BulletList
                            bulletClass="w-8 h-6"
                            list={
                                (data?.section_3?.lists?.length && data?.section_3?.lists) || [
                                    'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                    'A medical diagnosis of your eye condition with treatment planning.',
                                    'A referral for surgical treatment and/or a signed prescription (if required).',
                                    'A dedicated eye care team to support you throughout your eye care journey.'
                                ]
                            }
                            listClassName="!gap-5"
                        />
                        <BookConsultation>
                            <Button2 type="button" text="Request a call back" />
                        </BookConsultation>
                    </div>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_4?.heading || 'What is included in my private consultation?'}
                descriptions={
                    (data?.section_4?.descriptions?.length && data?.section_4?.descriptions) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £300</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_4?.image || '/images/section-images/cornea-consultation-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_4?.image_large || '/images/section-images/cornea-consultation-large.png',
                    width: 643,
                    height: 461
                }}
                textColumnExtras={
                    <div className="grid gap-12">
                        <BulletList
                            bulletClass="w-8 h-6"
                            list={
                                (data?.section_4?.lists?.length && data?.section_4?.lists) || [
                                    'Dark floaters affecting your vision',
                                    'Sudden blurry and/or distorted vision',
                                    'Flashes of light in one or both eyes ( known as ‘photopsia’)',
                                    'Shadows over your field of vision'
                                ]
                            }
                            listClassName="!gap-5"
                        />
                        <BookConsultation>
                            <Button2 type="button" text="Make an enquiry" />
                        </BookConsultation>
                    </div>
                }
                positionReversed
            />

            <CtaSection2
                image={data?.bookingsec?.image}
                title={data?.bookingsec?.title || 'Friendly vision correction treatment for dry eyes'}
                descriptions={
                    (data?.bookingsec?.descriptions?.length &&
                        stringArrayToElementArray(data?.bookingsec?.descriptions)) || [
                        'If you are experiencing dry eye symptoms and have difficulty with short sightedness or near sightedness (a refractive error in your eye), we offer vision correction treatment options which can eliminate the need for wearing glasses and/or uncomfortable contact lenses.',
                        <>
                            Implantable Contact Lenses are a friendly vision correction treatment which helps dry eye
                            syndrome. To regain clear, natural eyesight without needing your glasses and contact lenses
                            we can offer you a <a href="/suitability-check">FREE suitability</a> check for our
                            implantable contact lenses.
                        </>
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
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || flashesFaqList}
                    titleLight="Flashes & Floaters"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'flashes-floaters' });

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
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_1?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    speak_to_our_team: {
                        ...data?.acf?.speak_to_our_team
                    },
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_3?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_3?.lists).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_4: {
                        ...data?.acf?.section_4,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_4?.descriptions).map((item) =>
                            stripInitialTags(item)
                        ),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_4?.lists).map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    bookingsec: {
                        ...data?.acf?.bookingsec,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.bookingsec?.descriptions),
                        image: {
                            ...(data?.acf?.bookingsec?.image && formatImage(data.acf?.bookingsec?.image))
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
