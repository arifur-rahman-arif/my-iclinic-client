import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import IconArrow from '@/icons/icon-angle-right.svg';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-conjunctivitis-large.png';
import MastheadImageMedium from '@/masthead/masthead-conjunctivitis-medium.png';
import MastheadImageSmall from '@/masthead/masthead-conjunctivitis-small.png';
import { conjunctivitisFaqList } from '@/page-sections/Faq/faqList';
import {
    BulletList,
    ConjunctivitisTreatment,
    CtaSection,
    FullWidthImageSection,
    Masthead,
    NormalSection5,
    SideImageSection
} from '@/page-sections/index';
import { ConjunctivitisPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

interface DataInterface
    extends ConjunctivitisPageContentInterface,
        PageDataInterface<ConjunctivitisPageContentInterface> {}

interface ConjunctivitisProps {
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
export default function ConjuctivitisTreatmentLondon({ data, seo, yoastJson }: ConjunctivitisProps): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_heading || 'Conjunctivitis Treatment London';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page
            title="Conjunctivitis Treatment in London"
            description="Our team of ophthalmologists are experienced in diagnosing and treating your conjunctivitis. Contact us to begin your journey towards improved vision."
            seo={seo}
            yoastJson={yoastJson}
        >
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText={data?.masthead_image?.image_large?.alt}
                h1Title={
                    <h1 className="flex flex-wrap gap-2 sm:gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                priceText={data?.masthead_price || 'From £200'}
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

            <FullWidthImageSection
                h3Title={
                    <>
                        {data?.full_width_image_section?.heading ? (
                            HTMLReactParser(data.full_width_image_section.heading)
                        ) : (
                            <>
                                Treat your <strong>conjunctivitis</strong> symptoms today with our specialist
                            </>
                        )}
                    </>
                }
                description={
                    (data?.full_width_image_section?.descriptions?.length &&
                        data?.full_width_image_section.descriptions) || [
                        'If you have conjunctivitis (also known as ‘Pink Eye’), having the correct diagnosis is essential before treating and managing your symptoms.'
                    ]
                }
                sectionClass="px-8 md:px-0 md:bg-brandLight"
                altText=""
                image={data?.full_width_image_section?.image || '/images/section-images/conjunctivitis.png'}
                desktopImage={
                    data?.full_width_image_section?.large_image || '/images/section-images/conjunctivitis-large.png'
                }
            />

            <SideImageSection
                normalLightHeading={<strong>{data?.section_1?.heading || 'Conjunctivitis Consultation'}</strong>}
                descriptions={
                    (data?.section_1.descriptions.length && data?.section_1.descriptions) || [
                        'When you visit our clinic, we use our special imaging technology to carry out in-depth eye assessments to capture the health of your eyes, particularly the surface of the conjunctiva.',
                        'Our friendly technicians will guide you through these easy assessments to appropriately diagnose your conjunctivitis before meeting your ophthalmologist.',
                        'In your private consultation, your ophthalmologist will talk you through your diagnosis and conjunctivitis treatment.'
                    ]
                }
                sectionImage={{
                    url: data?.section_1?.image?.url || '/images/section-images/conjunctivitis-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_1?.large_image?.url ||
                        '/images/section-images/conjunctivitis-consultation-large.png',
                    width: 677,
                    height: 484
                }}
                altText={data?.section_1?.large_image?.alt}
                positionReversed
            />

            <LazyComponent>
                <NormalSlideSection />
            </LazyComponent>

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading}
            />

            <SideImageSection
                h2Heading={data?.section_2?.subheading || 'Conjunctivitis consultation'}
                h3LightHeading={
                    <>
                        {data?.section_2?.heading?.light_heading || 'What is included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'private consultation?'}
                descriptions={
                    (data?.section_2.descriptions.length && data?.section_2.descriptions) || [
                        <>
                            A private consultation with our ophthalmologist is an all-inclusive{' '}
                            <strong>cost of £200</strong>
                        </>,
                        'This includes:'
                    ]
                }
                sectionImage={{
                    url:
                        data?.section_2?.image?.url || '/images/section-images/conjunctivitis-private-consultation.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_2?.large_image?.url ||
                        '/images/section-images/conjunctivitis-private-consultation-large.png',
                    width: 649,
                    height: 552
                }}
                altText={data?.section_2?.large_image?.alt}
                textColumnExtras={
                    <BulletList
                        list={
                            (data?.section_2.list.length && data?.section_2.list) || [
                                'A comprehensive consultation with your dedicated ophthalmologist (inclusive of all eye assessment and eye scans).',
                                'A medical diagnosis of your eye condition with treatment planning.',
                                'A signed prescription to ease your conjunctivitis symptoms.',
                                'A dedicated eye care team to support you throughout your eye care journey.'
                            ]
                        }
                        listClassName="!gap-6"
                        bulletPoint={
                            <Image src={IconArrow} alt="" className="h-[1.4rem] w-[1.2rem] translate-y-[0.5rem]" />
                        }
                    />
                }
            />

            <ConjunctivitisTreatment
                descriptions={
                    data?.section_3.descriptions.length ?
                        data?.section_3.descriptions :
                            [
                                'Our ophthalmologist can provide different antibiotics to treat conjunctivitis, depending on the cause of your condition. If you have conjunctivitis, having the correct diagnosis is essential.'
                            ]
                }
                heading={data?.section_3?.heading}
                list={data?.section_3?.card_list}
            />

            <NormalSection5
                heading={data?.section_4?.heading || 'Relieve your symptoms with treatment for conjunctivitis'}
                description={
                    (data?.section_4?.description.length && data?.section_4?.description) ||
                    'If you are experiencing conjunctivitis, our specialist team will book a private consultation.'
                }
            />

            <CtaSection
                title={data?.cta_section?.heading}
                description={data?.cta_section?.description}
                subtitle={data?.cta_section?.subheading}
            />

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload
                    downloadFile={data?.email_contents?.download_file}
                    title={
                        <>
                            Get the guide to
                            <br />
                            Conjunctivitis treatment
                        </>
                    }
                    pageSlug="conjuctivitis-treatment-london"
                />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={(Array.isArray(data?.faq_list) && data?.faq_list) || conjunctivitisFaqList}
                    titleLight="Conjunctivitis"
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
        const data: WpPageResponseInterface<ConjunctivitisPageContentInterface> = await getPageData({
            slug: 'conjuctivitis-treatment-london'
        });

        return {
            /* eslint-disable */
            props: {
                data: {
                    ...data?.acf,
                    full_width_image_section: {
                        ...data?.acf.full_width_image_section,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf.full_width_image_section?.descriptions)
                    },
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
                        card_list: (data?.acf.section_3?.card_list || [])?.map((item) => {
                            return {
                                ...item,
                                image: { src: item.image as unknown as string, width: 376, height: 271 },
                                descriptions: convertArrayOfObjectsToStrings(item.descriptions)
                            };
                        })
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
