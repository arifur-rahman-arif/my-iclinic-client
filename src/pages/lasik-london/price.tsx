/* eslint-disable no-unused-vars */
import { BreadCrumb } from '@/components/Breadcrumb';
import ComponentLoader from '@/components/ComponentLoader';
import LazyComponent from '@/components/LazyComponent';
import Page from '@/components/Page';
import { largeSizes, smallSizes, useDeviceSize } from '@/hooks';
import { getPageData } from '@/lib';
import { convertArrayOfObjectsToStrings, stringArrayToElementArray } from '@/utils/apiHelpers';
import MastheadImageLarge from '@/masthead/masthead-lasik-pricing-large.png';
import MastheadImageSmall from '@/masthead/masthead-lasik-pricing-small.png';
import MastheadImageMedium from '@/masthead/masthead-lasik-pricing.png';
import { CtaSection } from '@/page-sections/CtaSection';
import {
    BulletPoint,
    FinanceList,
    FullWidthImageSection,
    FullWidthImageSection2,
    Masthead,
    PriceSection,
    SideImageSection
} from '@/page-sections/index';
import { lasikPriceList } from '@/page-sections/PriceCard/priceList';
import InclusiveCostImage from '@/section-images/lasik-inclusive-cost-image.png';
import { PricelasiklondonContentInterface, PageDataInterface, WpPageResponseInterface } from '@/types';
import HTMLReactParser from 'html-react-parser';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const CallbackSection = dynamic(() => import('@/page-sections/RequestCallback/CallbackSection'), {
    loading: () => <ComponentLoader />
});

interface DataInterface extends PricelasiklondonContentInterface, PageDataInterface<PricelasiklondonContentInterface> {}

interface LasikPricingProps {
    data: DataInterface;
    seo: any;
    yoastJson: any;
}

/**
 * Url: /lasik-london/price
 *
 * @export
 * @returns {JSX.Element}
 */
export default function LasikPricing({ seo, yoastJson, data }: LasikPricingProps): JSX.Element {
    const heading = data?.masthead_heading || 'LASIK laser eye surgery cost London';
    const subheading = data?.masthead_subheading || 'Save you an average of £1,000';

    const deviceSize = useDeviceSize();
    const [loadCallbackSection, setLoadCallbackSection] = useState<boolean>(false);

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
                priceDescription: service?.priceDescription
            };
        }) :
        null;

    return (
        <Page title={heading} description={subheading} seo={seo} yoastJson={yoastJson}>
            <BreadCrumb />

            <Masthead
                imageMedium={data?.masthead_image?.image_medium?.url || MastheadImageMedium}
                altText="Woman reading the cost of Presbyond Treatment in London."
                h1Title={<h1>{heading}</h1>}
                h2Title={<h2>{subheading}</h2>}
                priceText={data?.masthead_price || '£2,400 PER EYE'}
                priceTextExtra={
                    <span className="font-mulishBold text-[1.8rem] normal-case leading-[2.4rem] text-heading2">
                        With 12 months
                        <br />
                        <span className="font-mulishBold uppercase text-heading2">Interest Free Finance</span>{' '}
                        available!
                    </span>
                }
                bannerWidth="md:max-w-[65.5rem]"
                googleReviews={data?.google_reviews}
                trustPilotReviews={data?.trustpilot_reviews}
            />

            <SideImageSection
                h2Heading={data?.section_1?.sub_heading || 'LASIK consultation'}
                h3LightHeading={data?.section_1?.heading?.light_heading || 'What’s included in my'}
                h3BoldHeading={data?.section_1?.heading?.bold_heading || 'private consultation and treatment?'}
                sectionImage={{
                    url: data?.section_1?.image || '/images/section-images/private-consultation-lasik.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_1?.large_image || '/images/section-images/private-consultation-lasik-large.png',
                    width: 616,
                    height: 549
                }}
                altText=""
                positionReversed
                textColumnExtras={
                    <ul className="grid w-full gap-6 md:max-w-[52rem]">
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeTesting} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {HTMLReactParser(data?.section_1?.bullet_1) ||
                                    HTMLReactParser(
                                        '<a href="/suitability-check">A FREE suitability</a> laser check with our laser specialist (a comprehensive assessment of your suitability and how LASIK laser eye  surgery will suit your lifestyle).'
                                    )}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconPersonInFrame} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {HTMLReactParser(data?.section_1?.bullet_2) ||
                                    HTMLReactParser(
                                        'A comprehensive consultation with your dedicated laser specialist (inclusive of all eye assessment and eye scans.)'
                                    )}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyeballFocusing} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {HTMLReactParser(data?.section_1?.bullet_3) ||
                                    HTMLReactParser(
                                        'Your LASIK surgery was performed in our private laser suite with your dedicated specialist and our friendly team.)'
                                    )}
                            </p>
                        </li>
                        <li className="flex items-start justify-start gap-6">
                            {/* <Image src={IconEyePlus} alt="" className="h-16 w-16" /> */}
                            <BulletPoint />
                            <p className="">
                                {HTMLReactParser(data?.section_1?.bullet_4) ||
                                    HTMLReactParser(
                                        'Up to four FREE aftercare appointments with your dedicated laser specialist (inclusive of eye assessments and eye scans)'
                                    )}
                            </p>
                        </li>
                    </ul>
                }
            />

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>

            <LazyComponent>{loadCallbackSection && <CallbackSection />}</LazyComponent>

            <div className="w-full md:h-[0.1rem] lg:mt-24"></div>
            {/* SECTION 2 */}
            <SideImageSection
                h2Heading={data?.section_2?.title || 'LASIK finance'}
                h3LightHeading={data?.section_2?.heading?.light_heading || 'Thinking about splitting'}
                h3BoldHeading={data?.section_2?.heading?.bold_heading || 'your treatment cost?'}
                midExtras={
                    <h4 className="normal-case">
                        {data?.section_2?.subheading || 'Finance available for LASIK laser eye surgery'}
                    </h4>
                }
                altText=""
                descriptions={
                    (data?.section_2?.descriptions?.length && data?.section_2?.descriptions) || [
                        `We understand having LASIK to correct your vision is a great investment in your eye health and lifestyle. We offer 12 months interest- free finance to help make that investment become a reality!`
                    ]
                }
                sectionImage={{
                    url: data?.section_2?.image || '/images/section-images/lasik-finance.png',
                    width: 390,
                    height: 390
                }}
                sectionImageDesktop={{
                    url: data?.section_2?.large_image || '/images/section-images/lasik-finance-large.png',
                    width: 574,
                    height: 560
                }}
                textColumnExtras={
                    <FinanceList
                        list={
                            (data?.section_2?.lists?.length && data?.section_2?.lists) || [
                                'You are eligible for our 12 months interest-free finance',
                                'Calculate your monthly spend for your ICL treatment'
                            ]
                        }
                    />
                }
            />

            <PriceSection priceList={priceSection || lasikPriceList} />

            <FullWidthImageSection2
                title={data?.section_3?.title || 'LASIK laser eye surgery couldn’t be more cost-effective!'}
                description={
                    data?.section_3?.description ||
                    'Our London laser specialists save you an average of £1,000 for your treatment and aftercare appointments compared to other eye clinics.'
                }
                image={data?.section_3?.image || '/images/section-images/lasik-finance-large.png'}
                largeImage={data?.section_3?.large_image || '/images/section-images/lasik-finance-large.png'}
            />

            <CtaSection title={data?.speaktoteam?.title} subtitle={data?.speaktoteam?.subtitle} />

            {/* SECTION 4 */}
            <FullWidthImageSection
                h3Title={
                    <>
                        {HTMLReactParser(data?.section_4?.title) ||
                            HTMLReactParser(
                                '<strong className="normal-case">Permanently correct your vision</strong> with our all-inclusive cost.'
                            )}
                    </>
                }
                boldHeading={true}
                altText=""
                image={data?.section_4?.image || InclusiveCostImage}
                desktopImage={data?.section_4?.large_image || InclusiveCostImage}
                containerClass="grid grid-cols-1 items-center px-0 gap-12 md:grid-cols-2 md:gap-32 pb-24 md:pb-0"
                overlayAnimation
                textColumnOverlay
                sectionClass="lg:!mt-0 bg-brandLight"
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
        const data: WpPageResponseInterface<any> = await getPageData({ slug: 'lasik-london-price' });

        return {
            /* eslint-disable */
            props: {
                seo: data?.yoast_head || '',
                yoastJson: data?.yoast_head_json || '',
                data: {
                    ...data?.acf,
                    // SECTION 1
                    section_1: {
                        ...data?.acf?.section_1
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
                    section_4: {
                        ...data?.acf?.section_4
                    },
                    smile_price: Array.isArray(data?.acf?.smile_price)
                        ? data?.acf.smile_price.map((priceData) => {
                              return {
                                  ...priceData
                              };
                          })
                        : [],
                    speaktoteam: {
                        ...data?.acf?.speaktoteam
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
