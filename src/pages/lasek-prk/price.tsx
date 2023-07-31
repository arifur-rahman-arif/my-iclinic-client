/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import { LinkText } from '@/components/Link';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import MastheadImageLarge from '@/masthead/masthead-lasek-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-lasek-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-lasek-pricing.png';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import { CtaSection } from '@/page-sections/CtaSection';
import {
    BulletList,
    BulletPoint,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';
import { NormalSection4 } from '@/page-sections/NormalSection';
import { lasekPriceList } from '@/page-sections/PriceCard/priceList';
import InclusiveCostImage from '@/section-images/lasek-inclusive-cost-image.png';
import { PricelskprkContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import React from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PricelskprkContentInterface, PageDataInterface<PricelskprkContentInterface> {}

interface LasekPricingProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /lasek-prk/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasekPricing({ seo, yoastJson, data }: LasekPricingProps): JSX.Element {
    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);
    const heading = data?.masthead_heading || 'LASEK, PRK & PTK laser surgery cost London';
    const subheading = data?.masthead_subheading || 'Save an average of £1,000';

    useEffect(() => {
        if (largeSizes.includes(deviceSize)) setLoadCallbackSection(true);

        setTimeout(() => {
            if (smallSizes.includes(deviceSize)) setLoadCallbackSection(true);
        }, 2500);
    }, [deviceSize]);

    const priceSection: any = data?.lsk_price ?
        data?.lsk_price.map((service) => {
            return {
                ...service,
                price: service?.price,
                priceText: service?.priceText,
                priceDescription: HTMLReactParser(service?.priceDescription)
            };
        }) :
        null;

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageSmall={data?.masthead_image?.image?.url || MastheadImageSmall}
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                imageLarge={data?.masthead_image?.image_large?.url || MastheadImageLarge}
                altText=""
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
                priceText={data?.masthead_price}
                imagePosition="!object-cover object-[-35rem_center]"
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
            />
            {/* SECTION 1 */}
            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'Your consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-lasek.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/private-consultation-lasek-large.png',
                    width: 616,
                    height: 534
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="sm:!ml-0"
                        list={
                            (data?.section_1?.lists?.length && stringArrayToElementArray(data?.section_1?.lists)) || [
                                <>
                                    <LinkText href="/suitability-check">
                                        <strong>A FREE suitability</strong>
                                    </LinkText>{' '}
                                    laser check with our laser specialist (acomprehensive assessment of your suitability
                                    and how LASEK or PRK laser eye surgery will suit your lifestyle).
                                </>,
                                'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).',
                                'Your laser surgery performed in our private laser suite with your dedicated specialist and our friendly team.',
                                'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'
                            ]
                        }
                    />
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>
            {/* SECTION 2 */}
            <SideImageSection
                h2Heading={data?.section_2?.title || 'cost & finance'}
                h3LightHeading={data?.section_2?.heading?.light_heading || 'Thinking about splitting'}
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'your laser treatment cost?'}
                midExtras={
                    <h4 className="normal-case sm:max-w-[44.3rem]">
                        {data?.section_2?.subheading || 'Finance available for LASEK, PRK & PTK laser eye surgery'}
                    </h4>
                }
                altText=""
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having LASEK, PRK or PTK to correct your vision is a great investment in your eye health and lifestyle. We offer 24 months interest- free finance to help make that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/lasek-finance.png',
                    width: 370,
                    height: 352
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/lasek-finance-large.png',
                    width: 623,
                    height: 560
                }}
                textColumnExtras={
                    <div className="md:max-w-[43rem]">
                        <span className="font-latoBold text-[2.4rem] uppercase leading-[3.2rem]">
                            {data?.section_2?.interest_free_finance ||
                                'You are eligible for our 12 months interest-free finance'}
                        </span>
                        <div className="mt-12 grid grid-cols-[auto_1fr] gap-6">
                            {/* <Image src={IconCalculator} alt="" className="self-center" /> */}
                            <BulletPoint />
                            <span className="font-latoBold text-[2rem] leading-[2.4rem]">
                                {data?.section_2?.list_heading ||
                                    'Calculate your monthly spend for your laser treatment'}
                            </span>

                            <p className="col-start-2">
                                {(data?.section_2?.lists?.length &&
                                    stringArrayToElementArray(data?.section_2?.lists)) || [
                                    'If you’re eligible for our interest-free finance, you can calculate your monthly spend',
                                    'so you’re always in the know with regard to payments for your laser eye treatment.',
                                    'If you have any queries regarding pricing, you can get in touch with our specialists for',
                                    ' a consultation today on',
                                    '<a href="tel:0208 445 8877">',
                                    ' <span className="whitespace-nowrap font-mulishBold text-blue">0208 445 8877.</span>',
                                    '</a>'
                                ]}
                            </p>
                        </div>
                    </div>
                }
            />

            <PriceSection priceList={ priceSection || lasekPriceList} />
            {/* SECTIOn 3 */}
            <FullWidthImageSection2
                title={data?.section_3?.title || 'LASEK & PRK Laser eye surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
                image={data?.section_3?.image || '/images/section-images/private-consultation-lasek.png'}
                largeImage={data?.section_3?.large_image || '/images/section-images/private-consultation-lasek.png'}
            />

            <CtaSection title={data?.speaktoteam?.title} subtitle={data?.speaktoteam?.subtitle} />

            <FullWidthImageSection
                h3Title={
                    HTMLReactParser(data?.section_4.title) || (
                        <>
                            <strong className="normal-case">Permanently correct your vision</strong> with our
                            all-inclusive cost.
                        </>
                    )
                }
                boldHeading={true}
                altText=""
                image={data?.section_4?.image || InclusiveCostImage}
                desktopImage={data?.section_4?.large_image || InclusiveCostImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:!py-0 mx-0 !w-full"
                overlayAnimation
                textColumnOverlay
                sectionClass="relative lg:!mt-0 bg-brandLight"
            />

            <NormalSection4 title={data?.ptkeyesurgerycost?.title}
            description={data?.ptkeyesurgerycost?.description} />
            {/* SECTION 5 */}
            <SideImageSection
                h2Heading={data?.section_5?.sub_heading || 'Your consultation'}
                h3LightHeading={
                    <>
                        {data?.section_5?.heading?.light_heading || 'What’s included in my'}
                        <br />
                    </>
                }
                h3BoldHeading={data?.section_5?.heading?.bold_heading || 'PTK private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_5?.image || '/images/section-images/ptk-consultation-lasek.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_5?.large_image || '/images/section-images/ptk-consultation-lasek-large.png',
                    width: 616,
                    height: 534
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <BulletList
                        className="sm:!ml-0"
                        list={
                            (data?.section_5?.lists?.length && stringArrayToElementArray(data?.section_5?.lists)) || [
                                'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans).',
                                'Your PTK surgery was performed in our private laser suite with your dedicated specialist and our friendly team.',
                                <>
                                    <a href="/suitability-check">A FREE suitability</a> laser check with our laser
                                    specialist (acomprehensive assessment of your suitability and how LASEK or PRK laser
                                    eye surgery will suit your lifestyle).
                                </>
                            ]
                        }
                    />
                }
            />
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'lasek-prk-price' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_1?.lists)
                    }, // 2
                    // SECTION 2
                    section_2: {
                        ...data?.acf?.section_2,
                        descriptions: convertArrayOfObjectsToStrings(data?.acf?.section_2?.descriptions),
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_2?.lists)
                    }, // 2
                    section_3: {
                        ...data?.acf?.section_3
                    },
                    lsk_price: Array.isArray(data?.acf?.lsk_price)
                    ? data?.acf.lsk_price.map((priceData) => {
                          return {
                              ...priceData,
                          };
                      })
                    : [],
                    section_4: {
                        ...data?.acf?.section_4
                    },
                    speaktoteam:{
                        ...data?.acf?.speaktoteam
                    },
                    ptkeyesurgerycost:{
                        ...data?.acf?.ptkeyesurgerycost
                    },
                    section_5: {
                        ...data?.acf?.section_5,
                        lists: convertArrayOfObjectsToStrings(data?.acf?.section_5?.lists)
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
