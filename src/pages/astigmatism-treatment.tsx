import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { getPageData } from '@/lib';
import { astigmatismFaqList } from '@/page-sections/Faq/faqList';
import { CtaSection, FullWidthImageSection, SideImageSection } from '@/page-sections/index';
import { AstigmatismPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, formatImage } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import { AiOutlineArrowRight } from 'react-icons/ai';
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
    loading: () => <ComponentLoader />
});

const PatientReviews = dynamic(() => import('@/components/page-sections/icl-components/PatientReviews'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends AstigmatismPageContentInterface, PageDataInterface<AstigmatismPageContentInterface> {}

interface AstigmatismProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /astigmatism-treatment
 *
 * @export
 * @returns {JSX.Element}
 */
export default function AstigmatismTreatment({ data, seo, yoastJson }: AstigmatismProps): JSX.Element {
    return (
        <Page
            title="Astigmatism and Vision Correction Treatment in London"
            description="Get the correct vision treatment needed for your eyes. Learn about our personalised care to help restore perfect vision and improve your quality of life."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <YagHero
                {...data?.masthead}
                titleClass="md:max-w-[70rem]"
                className="xl:grid-cols-[auto_50rem_1fr]"
                bannerClass="xl:pr-40"
                ctaButton={
                    <BookConsultation buttonClassName="mt-12  border-[#0099FF] bg-[#0099FF] hover:!text-[#0099FF]">
                        <Button2 type="button" text="Make an enquiry" />
                    </BookConsultation>
                }
            />

            <LazyComponent>
                <CallbackSection />
            </LazyComponent>

            <SideImageSection
                h3LightHeading={data?.section_1?.heading || 'Astigmatism in children and adults'}
                descriptions={
                    (data?.section_1.descriptions.length && data?.section_1.descriptions) || [
                        'Astigmatism is a condition which causes blurry vision. Astigmatism develops when the shape of your eye (your cornea or lens) isn’t perfectly round.',
                        'This means the light which your eye needs to perceive clear vision bends in the wrong way and refracts in multiple directions, leading to distorted sight and blurry vision.',
                        'If you currently wear glasses and/or contact lenses and are still experiencing blurry vision, you may have irregular astigmatism, which can be permanently corrected by our vision correction procedures.'
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image?.url || '/images/section-images/vision-correction-astigmatism.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image?.url ||
                        '/images/section-images/vision-correction-astigmatism-large.png',
                    width: 659,
                    height: 477
                }}
                altText={data?.section_1?.large_image?.alt}
            />

            <SideImageSection
                h3LightHeading={data?.section_2.heading || 'Diagnosis and vision correction for astigmatism'}
                descriptionWrapperClass="[&_div:last-child]:mt-6"
                descriptions={
                    (data?.section_2.descriptions.length && data?.section_2.descriptions) || [
                        'If you or your child is experiencing the following symptoms, you may be experiencing astigmatism:'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image?.url || '/images/section-images/astigmatism-diagnosis.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.image?.url || '/images/section-images/astigmatism-diagnosis-large.png',
                    width: 659,
                    height: 562
                }}
                altText={data?.section_2?.image?.alt}
                positionReversed
                textColumnExtras={
                    <BookConsultation buttonClassName="-mt-6">
                        <Button2 type="button" text="Book a free consultation" />
                    </BookConsultation>
                }
            />

            <SideImageSection
                h3LightHeading={data?.section_3?.heading || 'What is included in my private consultation?'}
                descriptions={data?.section_3.descriptions}
                descriptionWrapperClass="[&_div:nth-child(2)]:mt-6"
                sectionImage={{
                    url: data?.section_3?.image?.url || '/images/section-images/astigmatism-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.image?.url || '/images/section-images/astigmatism-consultation-large.png',
                    width: 649,
                    height: 552
                }}
                altText={data?.section_3?.image?.alt}
            />

            <FullWidthImageSection
                h3Title={data?.section6?.heading}
                description={data?.section6?.descriptions}
                image={data?.section6?.image?.src || '/images/section-images/eye-assessments.png'}
                desktopImage={data?.section6?.image?.src || '/images/section-images/eye-assessments-large.png'}
                altText={data?.section6?.image?.alt}
                sectionClass="px-8 md:px-0 bg-brandLight"
                titleClass="text-heading max-w-[67rem]"
                descriptionClass="text-[#404A4D]"
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

            <Section>
                <Container className="grid justify-items-center gap-12">
                    <h2 className="w-full max-w-[64rem] text-center normal-case">
                        {data?.section_4?.heading || 'Visit our eye specialist to correct your astigmatism today'}
                    </h2>
                    <p className="max-w-[53rem] text-center">
                        {data?.section_4?.description ||
                            'Book a private consultation today with our specialist to discuss the best astigmatism treatment options to correct your astigmatism.'}
                    </p>
                </Container>
            </Section>

            <LazyComponent>
                <PatientReviews sliders={data?.patientReviews?.reviews} heading={data?.patientReviews?.heading} />
            </LazyComponent>

            <CtaSection {...data?.ctaSection} />

            <SideImageSection
                descriptionWrapperClass="[&_div:last-child]:mt-6 [&_div:nth-child(4)]:mt-6"
                h3LightHeading={data?.section_5.heading || 'Astigmatism treatment for children'}
                descriptions={
                    (data?.section_5.descriptions.length && data?.section_5.descriptions) || [
                        "Our children's paediatrician will carry out comprehensive eye assessments to diagnose the cause of your child's astigmatism.",
                        <>
                            Astigmatism may be present on its own but is typically associated with{' '}
                            <LinkStyle url="/myopia">Myopia.</LinkStyle> or <strong>Hyperopia.</strong>
                        </>,
                        'Children with myopia (nearsightedness) or hyperopia (farsightedness) are more likely to have astigmatism.',
                        <span className="flex items-center justify-start gap-4">
                            <strong>Read more about </strong>
                            <span className="group/link flex items-center justify-start gap-4">
                                <LinkStyle url="/myopia">Myopia Control for Children</LinkStyle>
                                <AiOutlineArrowRight className="h-8 w-8 fill-blue transition-all duration-500 group-hover/link:translate-x-4" />
                            </span>
                        </span>
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image?.url,
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.image?.url,
                    width: 647,
                    height: 503
                }}
                altText={data?.section_5?.image?.alt}
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

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || astigmatismFaqList}
                    titleLight="Astigmatism"
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
        const data: WpPageResponseInterface<AstigmatismPageContentInterface> = await getPageData({
            slug: 'astigmatism-treatment'
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
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section_2: {
                        ...data?.acf.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    section6: {
                        ...data?.acf.section6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section6?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        ),
                        image: {
                            ...(data?.acf?.section6?.image && formatImage(data.acf?.section6?.image))
                        }
                    },
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions)?.map((item) =>
                            stripInitialTags(item)
                        )
                    },
                    // Children Astigmatism
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)?.map((item) =>
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
