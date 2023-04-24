import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import { LinkStyle } from '@/components/Link';
import Page from '@/components/Page';
import { Section } from '@/components/Section';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-astigmatism-large.png';
import MastheadImageMedium from '@/masthead/masthead-astigmatism-medium.png';
import MastheadImageSmall from '@/masthead/masthead-astigmatism-small.png';
import { astigmatismFaqList } from '@/page-sections/Faq/faqList';
import { BulletList, CtaSection, FullWidthImageSection, Masthead, SideImageSection } from '@/page-sections/index';
import { AstigmatismPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Correcting your Astigmatism with Vision Correction Treatment';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Astigmatism and Vision Correction Treatment in London"
            description="Get the correct vision treatment needed for your eyes. Learn about our personalised care to help restore perfect vision and improve your quality of life."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                h1Title={<h1>{heading}</h1>}
                priceText={<></>}
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <Container className="mt-24">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">
                        {data?.request_callback_title ? (
                            HTMLReactParser(data.request_callback_title)
                        ) : (
                            <>Speak to a specialist</>
                        )}
                    </strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <SideImageSection
                h2Heading={data?.section_1?.subheading || 'Correct your vision'}
                h3LightHeading={
                    <>
                        {data?.section_1?.heading?.light_heading || 'Astigmatism in'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_1.heading?.bold_heading || 'children and adults'}
                descriptions={
                    (data?.section_1.descriptions.length &&
                        stringArrayToElementArray(data?.section_1.descriptions)) || [
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
                h2Heading={data?.section_2?.subheading || 'astigmatism Diagnosis'}
                h3LightHeading={
                    <>
                        {data?.section_2.heading?.light_heading || 'Diagnosis and vision'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_2.heading?.bold_heading || 'correction for astigmatism'}
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
                    url: data?.section_2?.large_image?.url || '/images/section-images/astigmatism-diagnosis-large.png',
                    width: 659,
                    height: 562
                }}
                altText={data?.section_2?.large_image?.alt}
                positionReversed
                textColumnExtras={
                    <div className="grid gap-12">
                        <BulletList
                            list={
                                (data?.section_2.list.length && data.section_2.list) || [
                                    'Blurry, distorted vision',
                                    'Squinting to see objects in the distance',
                                    'Difficulty seeing at night',
                                    'Seeing glares and/or halos around lights',
                                    'Headaches, eye strain & eye fatigue',
                                    'Changes in your prescription glasses'
                                ]
                            }
                            listClassName="!gap-6"
                            bulletPoint={
                                <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                            }
                        />

                        {data?.section_2.extra_description ? (
                            <p>{data?.section_2.extra_description}</p>
                        ) : (
                            <p>
                                We offer a private consultation with our ophthalmologist to check the health of your
                                eye, your prescription and to advise on a suitable treatment for astigmatism that can
                                correct your astigmatism and prevent any further vision loss.
                            </p>
                        )}
                    </div>
                }
            />

            <SideImageSection
                h2Heading={data?.section_3.subheading || 'astigmatism consultation'}
                h3LightHeading={
                    <>
                        {data?.section_3?.heading?.light_heading || 'What is included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_3?.heading?.bold_heading || 'private consultation?'}
                descriptions={
                    (data?.section_3.descriptions.length && data?.section_3.descriptions) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url: data?.section_3?.image?.url || '/images/section-images/astigmatism-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_3?.large_image?.url ||
                        '/images/section-images/astigmatism-consultation-large.png',
                    width: 649,
                    height: 552
                }}
                altText={data?.section_3?.large_image?.alt}
                textColumnExtras={
                    <BulletList
                        list={
                            (data?.section_3.list.length && data.section_2.list) || [
                                'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                'A medical diagnosis of your eye condition with treatment planning.',
                                'A signed prescription (if required) and/or vision correction treatment planning',
                                'A dedicated eye care team to support you throughout your eye care journey.',
                                'A scheduled astigmatism treatment date to be free from astigmatism without needing glasses and contact lenses.'
                            ]
                        }
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
            />

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.full_width_image_section.heading ? (
                            HTMLReactParser(data.full_width_image_section.heading)
                        ) : (
                            <>Eye assessments & vision correction options for treating Astigmatism</>
                        )}
                    </>
                }
                description={
                    (data?.full_width_image_section.descriptions?.length &&
                        stringArrayToElementArray(data.full_width_image_section.descriptions)) || [
                        'If you wear hard contact lenses, we advise you not to wear these for a minimum of two weeks (including a week for every decade you have worn hard contact lenses) before your consultation.',
                        'This is to make sure the cornea of your eye is ready for measurements to be taken accurately.',
                        'Our eye assessments & scans include a Keratometry test, a visual acuity test, a refraction test and any additional scanning required to accurately measure the shape of your cornea, the axial length of your eye and your prescription.',
                        'These assessments will check the health of your eye and your suitability for our vision correction procedures:',
                        <>
                            <LinkStyle url="/relex-smile-london">ReLEx SMILE:</LinkStyle> Correcting vision for{' '}
                            <strong>ages 21-39</strong>
                        </>,
                        <>
                            <LinkStyle url="/presbyond-london">Presbyond:</LinkStyle> Correcting vision for{' '}
                            <strong>ages 40+</strong>
                        </>,
                        <>
                            <LinkStyle url="/lasek-prk">LASIK, LASEK, PRK & PTK:</LinkStyle> Correcting vision for all
                            ages unsuitable for ReLEx SMILE or Presbyond laser eye surgery and/or with an existing,
                            complicated eye condition.
                        </>
                    ]
                }
                image={data?.full_width_image_section?.image || '/images/section-images/eye-assessments.png'}
                desktopImage={
                    data?.full_width_image_section?.large_image || '/images/section-images/eye-assessments-large.png'
                }
                containerClass="md:!grid-cols-[1fr_auto] !mx-auto !w-full md:!w-[var(--container-width)] pt-12"
                smallImageClassName="!px-8 md:!px-auto"
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
                <NormalSlideSection />
            </LazyComponent>

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading}
            />

            <SideImageSection
                h2Heading={data?.section_5?.subheading || 'children Astigmatism'}
                h3LightHeading={
                    <>
                        {data?.section_5.heading?.light_heading || 'Astigmatism treatment'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_5.heading?.bold_heading || 'for children'}
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
                    url: data?.section_5?.image?.url || '/images/section-images/children-astigmatism.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image?.url || '/images/section-images/children-astigmatism-large.png',
                    width: 647,
                    height: 503
                }}
                altText={data?.section_5?.large_image?.alt}
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
                    section_1: {
                        ...data?.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_1?.descriptions)
                    },
                    section_2: {
                        ...data?.acf.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_2?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf.section_2?.list)
                    },
                    section_3: {
                        ...data?.acf.section_3,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_3?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf.section_3?.list)
                    },
                    full_width_image_section: {
                        ...data?.acf.full_width_image_section,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.full_width_image_section?.descriptions)
                    },
                    // Children Astigmatism
                    section_5: {
                        ...data?.acf.section_5,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.section_5?.descriptions)
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
