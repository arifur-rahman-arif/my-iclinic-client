import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import { Container } from '@/components/Container';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import {
    BulletList,
    CtaSection,
    FullWidthImageSection,
    Masthead,
    NormalSection,
    SideImageSection
} from '@/components/page-sections';
import { doubleVisionFaqList } from '@/components/page-sections/Faq/faqList';
import { normalSlideListDoubleVision } from '@/components/Slider/CardSlider/normal-card-slide/normalSlideList';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import MastheadImageLarge from '@/masthead/masthead-double-vision-large.png';
import MastheadImageMedium from '@/masthead/masthead-double-vision-medium.png';
import MastheadImageSmall from '@/masthead/masthead-double-vision-small.png';
import FullWidthImageLarge from '@/section-images/double-vision-large.png';
import FullWidthImage from '@/section-images/double-vision.png';
import { DoubleVisionPageContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import { convertArrayOfObjectsToStrings, getData, stringArrayToElementArray } from '@/utils/apiHelpers';
import HTMLReactParser from 'html-react-parser';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const PdfDownload = dynamic(() => import('@/components/page-sections/PdfDownload/PdfDownload'), {
    loading: () => <ComponentLoader />
});
const CompanyLogos = dynamic(() => import('@/components/page-sections/CompanyLogos/CompanyLogos'), {
    loading: () => <ComponentLoader />
});
const Faq = dynamic(() => import('@/components/page-sections/Faq/Faq'), {
    loading: () => <ComponentLoader />
});
const CallbackSection = dynamic(() => import('@/components/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

const NormalSlideSection = dynamic(() => import('@/components/page-sections/NormalSlide/NormalSlideSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends DoubleVisionPageContentInterface, PageDataInterface<DoubleVisionPageContentInterface> {}

/**
 * Url: /eye-treatments/double-vision
 *
 * @export
 * @returns {JSX.Element}
 */
export default function DoubleVisionPage({ data }: { data: DataInterface }): JSX.Element {
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const deviceSize = useDeviceSize();
    const heading = data?.masthead_subheading || 'Double vision symptoms (Diplopia)';
    const subheading =
        data?.masthead_subheading || 'Monitor your double vision symptoms with our private ophthalmologist';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    return (
        <Page title={heading} description={subheading}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image.image || MastheadImageSmall}
                imageMedium={data?.masthead_image.image_medium || MastheadImageMedium}
                imageLarge={data?.masthead_image.image_large || MastheadImageLarge}
                altText=""
                h1Title={
                    <h1 className="flex flex-wrap gap-4">
                        {heading.split(' ').map((word, index) => (
                            <span className="h1-inner-span inline-block opacity-0" key={index}>
                                {word}
                            </span>
                        ))}
                    </h1>
                }
                h2Title={
                    <h2 className="flex scale-[0.94] flex-wrap items-center justify-start gap-2">
                        {subheading.split(' ').map((word, index) => (
                            <span
                                className={`h2-inner-span inline-block normal-case text-heading2 opacity-0 blur-sm`}
                                key={index}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                }
                priceText="From £200"
            />

            <Container className="mt-28">
                <h2 className="w-full text-center normal-case">
                    <strong className="normal-case">
                        {data?.request_callback_title ? (
                            HTMLReactParser(data.request_callback_title)
                        ) : (
                            <>Talk to a specialist</>
                        )}
                    </strong>
                </h2>
            </Container>

            <LazyComponent>{loadCallbackSection ? <CallbackSection /> : <ComponentLoader />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-28"></div>

            <FullWidthImageSection
                boldHeading={
                    <div className="md:max-w-[54.4rem]">
                        <strong className="normal-case">
                            {data?.full_width_image_section.heading ||
                                'In most cases double vision is usually a temporary and uncommon issue'}
                        </strong>
                    </div>
                }
                altText=""
                description={
                    (data?.full_width_image_section.descriptions?.length &&
                        data?.full_width_image_section.descriptions) || [
                        'If you have blurry vision, you may need your eyes checked and your glasses corrected with a new prescription to correct the astigmatism.',
                        'However, if you are still experiencing double vision, a comprehensive eye assessment with our ophthalmologist is recommended to determine the health of your eyes.'
                    ]
                }
                image={data?.full_width_image_section.image || FullWidthImage}
                desktopImage={data?.full_width_image_section.large_image || FullWidthImageLarge}
                containerClass="pb-16 md:!py-0"
                largeImageClassName="!rounded-none"
            />

            <SideImageSection
                h2Heading={data?.section_1.subheading || 'symptoms and vision'}
                h3LightHeading={
                    <>
                        {data?.section_1.heading.light_heading || 'Double vision symptoms'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_1.heading.bold_heading || 'and vision testing'}
                descriptions={
                    (data?.section_1.descriptions.length &&
                        stringArrayToElementArray(data?.section_1.descriptions)) || [
                        'Our patients describe double vision astigmatism as seeing one image as two, blurring between one another.',
                        <>
                            If your double vision is persisting or you are experiencing double vision in frequent
                            episodes, you may be:
                        </>
                    ]
                }
                sectionImage={{
                    url: '/images/section-images/vision-testing.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: '/images/section-images/vision-testing-large.png',
                    width: 675,
                    height: 558
                }}
                positionReversed={true}
                altText=""
                textColumnExtras={
                    <div className="grid gap-12">
                        <BulletList
                            list={
                                (data?.section_1.list.length && stringArrayToElementArray(data?.section_1.list)) || [
                                    'Developing cataracts',
                                    'Have a transient (or intermittent) diplopia condition',
                                    'Have a cross-eye or lazy eye (misaligning eyes)',
                                    'Have an underlying neurological condition'
                                ]
                            }
                            bold
                        />

                        <p>
                            {data?.section_1.extra_description || (
                                <>
                                    If you see two distinct images side-by-side or one above the other, and one of the
                                    images disappears when one eye is covered, then there may be a neurological problem
                                    that needs to be investigated.
                                </>
                            )}
                        </p>
                    </div>
                }
            />

            <SideImageSection
                h2Heading={data?.section_2.subheading || 'consultation & treatment'}
                h3LightHeading={
                    <>
                        {data?.section_2.heading.light_heading || 'Private consultation &'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_2.heading.bold_heading || 'treatment for double vision'}
                descriptions={
                    (data?.section_2.descriptions.length &&
                        stringArrayToElementArray(data?.section_2.descriptions)) || [
                        'Our specialists understand that double vision can cause headaches, reading difficulty and general discomfort when performing daily, routine tasks.',
                        'If you are concerned about your double vision, we can provide you with an all-inclusive private consultation to investigate and diagnose the cause of your double vision symptoms.',
                        'Once we’ve identified the underlying cause of your double vision, our ophthalmologist will find you the best suitable treatment.'
                    ]
                }
                sectionImage={{
                    url: data?.section_2.image || '/images/section-images/consultation-&-treatment-double-vision.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url:
                        data?.section_2.large_image ||
                        '/images/section-images/consultation-&-treatment-double-vision-large.png',
                    width: 643,
                    height: 461
                }}
                altText=""
            />

            <NormalSection
                heading={data?.section_3.heading}
                description={data?.section_3.description}
                bannerText={data?.section_3.bannerText}
                list={stringArrayToElementArray(data?.section_3.list)}
            />

            <CtaSection
                title={data?.cta_section.heading || 'Book a private consultatio'}
                description={data?.cta_section.description}
                subtitle={data?.cta_section.subheading}
            />

            <LazyComponent>
                <NormalSlideSection sliderList={normalSlideListDoubleVision} />
            </LazyComponent>

            <LazyComponent>
                <CompanyLogos />
            </LazyComponent>

            <LazyComponent>
                <PdfDownload title="Get the guide to Keratoconus treatment" />
            </LazyComponent>

            <LazyComponent>
                <Faq
                    faqs={doubleVisionFaqList}
                    titleLight="Double vision Frequently"
                    titleBold="Asked Questions"
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
        const pageResponse: Response = await getData({
            url: `${process.env.WP_REST_URL}/pages?slug=eye-treatments-double-vision`
        });

        if (pageResponse.status !== 200) {
            throw new Error('No response from WordPress database. Error text: ' + pageResponse.statusText);
        }

        const pageJsonResponse: Array<any> = await pageResponse.json();

        if (!pageJsonResponse[0]?.id) throw new Error('Page ID is not found');

        const pageID = pageJsonResponse[0].id;

        if (!pageID) throw new Error('Page ID is not found');

        const response = await getData({
            url: `${process.env.WP_REST_URL}/pages/${pageID}`
        });

        const data: WpPageResponseInterface<DoubleVisionPageContentInterface> = await response.json();

        return {
            /* eslint-disable */
            props: {
                data: {
                    ...data.acf,
                    full_width_image_section: {
                        ...data.acf.full_width_image_section,
                        descriptions: convertArrayOfObjectsToStrings(data.acf.full_width_image_section?.descriptions)
                    },
                    // Symptoms and vision
                    section_1: {
                        ...data.acf.section_1,
                        descriptions: convertArrayOfObjectsToStrings(data.acf.section_1?.descriptions),
                        list: convertArrayOfObjectsToStrings(data?.acf.section_1?.list)
                    },
                    // Consultation & treatment
                    section_2: {
                        ...data.acf.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data.acf.section_2?.descriptions)
                    },
                    section_3: {
                        ...data.acf.section_3,
                        list: convertArrayOfObjectsToStrings(data?.acf.section_3?.list)
                    }
                } as DataInterface
            },
            revalidate: Number(process.env.NEXT_REVALIDATE_TIME)
            /* eslint-enable */
        };
    } catch (error: any) {
        console.error(error);
        return { props: {} };
    }
}
