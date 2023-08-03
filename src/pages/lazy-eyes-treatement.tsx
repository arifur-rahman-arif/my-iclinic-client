import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lazy-eyes-large.png';
import MastheadImageMedium from '@/masthead/masthead-lazy-eyes-medium.png';
import MastheadImageSmall from '@/masthead/masthead-lazy-eyes-small.png';
import { lazyEyesFaqList } from '@/page-sections/Faq/faqList';
import { BookConsultation, BulletList, CtaSection, Masthead, SideImageSection } from '@/page-sections/index';
import { LazyEyesPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from 'src/components/Buttons';

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
    loading: () => <ComponentLoader />
});
const NormalSlideSection = dynamic(() => import('@/page-sections/NormalSlide/NormalSlideSection'), {
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
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Lazy eyes in adults & children (amblyopia)';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Lazy Eye treatment in London"
            description="My-iClinic offers experienced and comprehensive treatment for Lazy eyes in adults and children (amblyopia). Get in touch with us to learn how we can help."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                imagePosition="2xl:object-[-35rem_top] xl:object-[-20rem_top]"
                h1Title={<h1>{heading}</h1>}
                priceText={<>{data?.masthead_price}</>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <SideImageSection
                h2Heading={data?.section_1?.subheading || 'Correct your vision'}
                h3LightHeading={
                    <>
                        {data?.section_1?.heading?.light_heading || 'Lazy eyes (amblyopia)'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'in children and adults'}
                descriptions={
                    (data?.section_1.descriptions.length &&
                        stringArrayToElementArray(data?.section_1.descriptions)) || [
                        "A lazy eye (amblyopia) appears as an eye which turns inward or outward, usually occurring in a child's early development.",
                        'This lazy eye causes vision problems and potential vision loss in the future and can be caused by a family history of amblyopia, a refractive error and/or an imbalance in the eye muscles (misalignment of the eyes).'
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image?.url || '/images/section-images/vision-correction-lazy-eyes.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image?.url ||
                        '/images/section-images/vision-correction-lazy-eyes-large.png',
                    width: 659,
                    height: 477
                }}
                altText={data?.section_1?.large_image?.alt}
            />

            <SideImageSection
                h2Heading={data?.section_2?.subheading || 'amblyopia Diagnosis'}
                h3LightHeading={
                    <>
                        {data?.section_2?.heading?.light_heading || 'Diagnosis and treatment'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'for a Lazy eye'}
                descriptions={
                    (data?.section_2?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_2.descriptions)) || [
                        'If your child has a lazy eye, you may be experiencing the following symptoms:'
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image?.url || '/images/section-images/amblyopia-diagnosis.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image?.url || '/images/section-images/amblyopia-diagnosis-large.png',
                    width: 664,
                    height: 562
                }}
                altText={data?.section_2?.large_image?.alt}
                positionReversed
                textColumnExtras={
                    <div className="grid gap-12">
                        <BulletList
                            list={
                                (data?.section_2?.list.length && data.section_2.list) || [
                                    'Blurry and distorted vision',
                                    'Deficient depth perception',
                                    'Double vision',
                                    'Tired, heavy eyes',
                                    'Eye squinting and/or head tilting to view objects',
                                    'Excessive blinking'
                                ]
                            }
                            listClassName="!gap-6"
                            bulletPoint={
                                <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />

                        <p>
                            {data?.section_2?.extra_description ||
                                'We offer a private consultation with our lazy eye specialist to check your current eye condition and to advise on the best treatment to prevent any further vision loss.'}
                        </p>
                    </div>
                }
            />

            <SideImageSection
                h2Heading={data?.section_3?.subheading || 'amblyopia consultation'}
                h3LightHeading={
                    <>
                        {data?.section_3?.heading?.light_heading || 'What is included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_3?.heading?.bold_heading || 'private consultation?'}
                descriptions={
                    (data?.section_3.descriptions?.length &&
                        stringArrayToElementArray(data?.section_3.descriptions)) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image?.url || '/images/section-images/amblyopia-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_3?.large_image?.url || '/images/section-images/amblyopia-consultation-large.png',
                    width: 649,
                    height: 552
                }}
                altText={data?.section_3?.large_image?.alt}
                textColumnExtras={
                    <BulletList
                        list={
                            (data?.section_3?.list.length && data.section_3.list) || [
                                'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                'A medical diagnosis of your eye condition with treatment planning.',
                                'A referral for surgical treatment and/or a signed prescription (if required).',
                                'A dedicated eye care team to support you throughout your eye care journey'
                            ]
                        }
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
            />

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

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading}
            />

            <SideImageSection
                h2Heading={data?.section_5?.subheading || 'Lazy eye treatment'}
                h3LightHeading={
                    <>
                        {data?.section_5?.heading?.light_heading || 'Lazy eye treatment for'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_5?.heading?.bold_heading || 'adults & children'}
                descriptions={
                    (data?.section_5?.descriptions?.length &&
                        stringArrayToElementArray(data?.section_5.descriptions)) || [
                        'Our ophthalmologist will use occlusion therapy to help your vision. Eye patches are used by our ophthalmologist to stimulate the weaker eye and improve vision overtime.',
                        'Other treatments such as: eye drops, corrective glasses and contact lenses may be prescribed or recommended as the best treatment for your lazy eye condition.'
                    ]
                }
                sectionImage={{
                    url: data?.section_5?.image?.url || '/images/section-images/lazy-eye-treatment-large.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.url || '/images/section-images/lazy-eye-treatment-large.png',
                    width: 647,
                    height: 503
                }}
                altText={data?.section_5?.large_image?.alt}
            />

            <SideImageSection
                sectionClass="bg-lightOrange py-12 md:py-24"
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
                    url: data?.section_6?.image?.url || '/images/section-images/tedy-bear.png',
                    width: 390,
                    height: 390
                }}
                largeImageClassName="mx-auto"
                sectionImageDesktop={{
                    url: data?.section_6?.large_image?.url || '/images/section-images/tedy-bear.png',
                    width: 412,
                    height: 439
                }}
                altText={data?.section_6?.large_image?.alt}
                textColumnExtras={
                    <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-[auto_1fr] md:justify-items-start">
                        <BookConsultation buttonClassName="!bg-orange !border-orange hover:!bg-[#FFEFE5] hover:!border-orange" />

                        <Button
                            type="phone"
                            text={data?.section_6?.phone || '0208 445 8877'}
                            iconPosition="left"
                            className="!min-w-[18.6rem] place-content-center border-orange !bg-transparent !text-heading md:min-w-[23.3rem]"
                            icon={
                                <Image
                                    src="/images/icons/icon-phone-dark.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    quality={2}
                                    className="h-8 w-8"
                                />
                            }
                        />
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
                    // Correct your vision Lazy eyes (amblyopia)
                    section_1: {
                        ...data?.acf?.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)
                    },
                    // Amblyopia Diagnosis
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf.section_2?.list)
                    },
                    // Amblyopia Consultation
                    section_3: {
                        ...data?.acf?.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf.section_3?.list)
                    },
                    // Lazy Eye Treatment
                    section_5: {
                        ...data?.acf?.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)
                    },
                    // Lazy Eye Specialist Banner
                    section_6: {
                        ...data?.acf?.section_6,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_6?.descriptions)
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
